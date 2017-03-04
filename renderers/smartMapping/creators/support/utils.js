// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/numberUtils","../../../../Color","../../statistics/support/utils","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../Basemap","../../../../support/basemapUtils","../../../../symbols/PointSymbol3D","../../../../symbols/IconSymbol3DLayer","../../../../symbols/ObjectSymbol3DLayer","../../support/utils"],function(e,r,t,n,o,i,l,s,a,u,c,d,m,f,y){function p(e,r){return new t(e,r)}function v(e,r,t){var n,o,l=i.getSuggestedDataRange({statistics:e,isDate:r});return l.defaultValuesUsed?(n=l.min,o=l.max):!t||null!=e.avg&&e.stddev||(n=e.min,o=e.max),null!=n?[n,o]:null}function b(e,r){for(var t=[],n=e.length,i=0;r>i;i++)t.push(new o(e[i%n]));return t}function w(e,r){var t=e.avg,o=t-e.stddev,i=t+e.stddev;o<e.min&&(o=e.min),i>e.max&&(i=e.max),r&&(t=o+(i-o)/2);var l=n.round([o,i],{strictBounds:!0});return o=l[0],i=l[1],l=[o,o+(t-o)/2,t,t+(i-t)/2,i],n.round(l,{strictBounds:!0})}function g(e,r,t,n,o){var i;switch(t){case"point":case"multipoint":var u=null!=o?o:e.size;if("2d"===n)i=new l({color:r,size:u,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===n)i=new d({symbolLayers:[new m({size:u,resource:{primitive:"circle"},material:{color:r},outline:{color:e.outline.color,size:e.outline.width}})]});else if(n.indexOf("3d-volumetric")>-1){var c="3d-volumetric-uniform"===n?"sphere":"cylinder";i=new d({symbolLayers:[new f({height:u,resource:{primitive:c},material:{color:r}})]})}break;case"polyline":var y=null!=o?o:e.width;"2d"===n&&(i=new s({color:r,width:y}));break;case"polygon":"2d"===n&&(i=new a({color:r,outline:{color:e.outline.color,width:e.outline.width}}))}return i}function h(e){var r=null;return"string"==typeof e?r=e:e instanceof u&&(r=c.wellKnownBasemapId(e)),r||"gray"}function S(e,r,t){var n=y.getUnknownFields({layer:e,fields:r});if(n.length)return p(t,"Unknown fields: "+n.join(", ")+". You can only use fields defined in the layer schema");var o=U({layer:e,fields:r});return o.length?p(t,"Unsupported fields: "+o.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function U(e){var r=e.layer;return e.fields.filter(function(e){var t=r.getFieldUsageInfo(e);return!t||!t.supportsRenderer})}r.createError=p,r.getDefaultDataRange=v,r.createColors=b,r.createStopValues=w,r.createSymbol=g,r.getBasemapId=h,r.verifyBasicFieldValidity=S});