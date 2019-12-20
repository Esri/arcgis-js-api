// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/MD5","../../../../renderers/visualVariables/SizeVariable","../../../../renderers/visualVariables/support/SizeStop","../../engine"],function(e,r,i,t,n,a,l,s,u,o,c,d){function p(e,r,i){switch(e){case"avg":case"avg_angle":return"cluster_avg_"+r;case"mode":return"cluster_type_"+r;case"norm":var t=i,n=r.toLowerCase()+",norm:field,"+t.toLowerCase();return"cluster_avg_"+u.createMD5Hash(n)}}function f(e,r,i,t){var n=p(i,r,t);return e.some(function(e){return e.name===n})||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:r,onStatisticNormalizationField:t,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:r,statisticType:i}})),n}var v=this;Object.defineProperty(r,"__esModule",{value:!0});var m=l.getLogger("esri.views.2d.layers.support.clusterUtils");r.createClusterRenderer=function(e,n,a,l,u){return t(v,void 0,void 0,function(){var t,n,o;return i(this,function(i){if(t=a.clone(),!r.isClusterCompatibleRenderer(t))return[2,t];switch(n="visualVariables"in t&&t.visualVariables||[],o=r.findSizeVV(n),n.forEach(function(r){"rotation"===r.type?r.field=f(e,r.field,"avg_angle"):r.normalizationField?(r.field=f(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field&&(r.field=f(e,r.field,"avg"))}),s.isNone(o)&&n.push(r.createClusterCountSizeVariable(l,u)),t.type){case"simple":break;case"unique-value":t.field&&(t.field=f(e,t.field,"mode"));break;case"class-breaks":t.normalizationField?(t.field=f(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field=f(e,t.field,"avg")}return t.visualVariables=n,[2,t]})})},r.findSizeVV=function(e){for(var r=0,i=e;r<i.length;r++){var t=i[r];if("size"===t.type)return t}return null},r.getActiveSizeStops=function(e,r){var i=e.featuresTilingScheme.getClosestInfoForScale(e.scale),t=i.level;return r.levels?r.levels[t]:null},r.createClusterCountSizeVariable=function(e,r){var i=[new c({value:0,size:0}),new c({value:1})];if(s.isNone(r))return new o({field:"cluster_count",stops:i.concat([new c({value:2,size:0})])});var t=Object.keys(r).reduce(function(e,t){var a;return n({},e,(a={},a[t]=i.concat([new c({value:Math.max(2,r[t].minValue),size:"12px"}),new c({value:Math.max(3,r[t].maxValue),size:"50px"})]),a))},{});return new d.LevelDependentSizeVariable({field:"cluster_count",levels:t})},r.isClusterCompatibleRenderer=function(e){var r=function(r){return m.error(new a("Unsupported-renderer",r,{renderer:e}))};if("valueExpression"in e&&e.valueExpression)return r("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if("unique-value"===e.type){if(e.field2||e.field3)return r("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){var i=e.normalizationType;if("field"!==i)return r("FeatureReductionCluster does not support a normalizationType of "+i),!1}}else if("simple"!==e.type)return r("FeatureReductionCluster does not support renderers of type "+e.type),!1;return!("visualVariables"in e&&e.visualVariables||[]).some(function(e){return!!("valueExpression"in e&&e.valueExpression)})||(r("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1)}});