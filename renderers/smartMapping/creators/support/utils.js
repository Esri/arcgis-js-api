// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Color","../../../../symbols","../../../../core/Error","../../../../core/numberUtils","../../../../core/promiseUtils","../../statistics/classBreaks","../../statistics/summaryStatistics","../../../support/pointCloud/PointSizeSplatAlgorithm"],function(e,i,n,t,r,l,o,a,s,u,c){function m(e,i){return new l(e,i)}function d(e,i,n){var t,r,l=f({statistics:e,isDate:i});return l.defaultValuesUsed?(t=l.min,r=l.max):!n||null!=e.avg&&e.stddev||(t=e.min,r=e.max),null!=t?[t,r]:null}function f(e){var i=e&&e.statistics;i||(i={});var n,t;if(null==i.min)if(e.isDate){var r=v();n=r[0],t=r[1]}else n=0,t=100;else if(i.min===i.max)if(e.isDate){var l=v(i.min);n=l[0],t=l[1]}else i.min<0?(n=2*i.min,t=0):i.min>0?(n=0,t=2*i.min):(n=0,t=100);return{min:null!=n?n:i.min,max:null!=t?t:i.max,defaultValuesUsed:null!=n||null!=t}}function v(e){var i="number"==typeof e?new Date(e):new Date,n=i.getUTCFullYear(),t=Date.UTC(n,0,1,12,0,0,0),r=Date.UTC(n,11,31,12,0,0,0);return"number"==typeof e&&(e<t&&(t=e),e>r&&(r=e)),[t,r]}function y(e,i){for(var n=[],r=e.length,l=0;l<i;l++)n.push(new t(e[l%r]));return n}function p(e,i){void 0===i&&(i=!0);var n=e.avg,t=n-e.stddev,r=n+e.stddev;t<e.min&&(t=e.min),r>e.max&&(r=e.max),i&&(n=t+(r-t)/2);var l=o.round([t,r],{strictBounds:!0});return t=l[0],r=l[1],l=[t,t+(n-t)/2,n,n+(r-n)/2,r],o.round(l,{strictBounds:!0})}function h(e,i,n,t,l,o,a){var s;switch(n){case"point":case"multipoint":var u=null!=a?a:e.size;if("2d"===t)s=new r.SimpleMarkerSymbol({color:i,size:u,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===t)s=new r.PointSymbol3D({symbolLayers:[new r.IconSymbol3DLayer({size:u,resource:{primitive:"circle"},material:{color:i},outline:{color:e.outline.color,size:e.outline.width}})]});else if(t.indexOf("3d-volumetric")>-1){var c="3d-volumetric-uniform"===t?"sphere":"cylinder";s=new r.PointSymbol3D({symbolLayers:[new r.ObjectSymbol3DLayer({height:u,resource:{primitive:c},material:{color:i}})]})}break;case"polyline":var m=null!=a?a:e.width;"2d"===t&&(s=new r.SimpleLineSymbol({color:i,width:m}));break;case"polygon":"2d"===t&&(s=new r.SimpleFillSymbol({color:i,outline:{color:e.outline.color,width:e.outline.width}}));break;case"mesh":s=new r.MeshSymbol3D({symbolLayers:[new r.FillSymbol3DLayer({material:{color:i,colorMixMode:l},edges:null==o||"none"===o?null:{type:o,color:F}})]})}return s}function S(e,i,n){var t=b({layer:e,fields:i});if(t.length)return m(n,"Unknown fields: "+t.join(", ")+". You can only use fields defined in the layer schema");var r=g({layer:e,fields:i});return r.length?m(n,"Unsupported fields: "+r.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function b(e){var i=e.layer;return e.fields.filter(function(e){return!i.getField(e)})}function g(e){var i=e.layer;return e.fields.filter(function(e){var n=i.getFieldUsageInfo(e);return!n||!n.supportsRenderer})}function w(e){return s(e).then(function(i){var t,r=d({min:i.minValue,max:i.maxValue,avg:null,stddev:null},!1,!1);return t=r?s(n({},e,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:r[0],maxValue:r[1],normalizationTotal:r[0]+r[1]})):a.resolve(i),t.then(function(e){return{result:e,defaultValuesUsed:!!r}})})}function x(e){return u(e)}function D(e,i){var n=e.minSize,t=e.maxSize;if("height"===i){n=((t-n)/2+n)/4.6,t*=2}return{minSize:n,maxSize:t}}function z(e){return V.test(e)}function U(e){var i=e.match(V),n=Number(i[1]);if("%"===i[3])return new c.default({scaleFactor:n/100})}Object.defineProperty(i,"__esModule",{value:!0});var V=/^(\d+(\.\d+)?)\s*(%)$/i,F=[0,0,0,.4];i.createError=m,i.getDefaultDataRange=d,i.createColors=y,i.createStopValues=p,i.createSymbol=h,i.verifyBasicFieldValidity=S,i.getClassBreaks=w,i.getSummaryStatistics=x,i.getSizeRangeForAxis=D,i.isValidPointSize=z,i.getPointSizeAlgorithm=U});