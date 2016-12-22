// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../../core/Error","../../../../core/numberUtils","../../../../Color","../../statistics/support/utils","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../Basemap","../../../../support/basemapUtils","../../../../symbols/PointSymbol3D","../../../../symbols/IconSymbol3DLayer","../../../../symbols/ObjectSymbol3DLayer","../../support/utils"],function(e,r,t,n,o,l,i,s,a,u,c,d,m,y,f){function p(e,r){return new t(e,r)}function b(e,r,t){var n,o,i=l.getSuggestedDataRange({statistics:e,isDate:r});return i.defaultValuesUsed?(n=i.min,o=i.max):!t||null!=e.avg&&e.stddev||(n=e.min,o=e.max),null!=n?[n,o]:null}function v(e,r){for(var t=[],n=e.length,l=0;r>l;l++)t.push(new o(e[l%n]));return t}function w(e){var r=e.avg,t=r-e.stddev,o=r+e.stddev;t<e.min&&(t=e.min),o>e.max&&(o=e.max);var l=n.round([t,o],{strictBounds:!0});return t=l[0],o=l[1],l=[t,t+(r-t)/2,r,r+(o-r)/2,o],n.round(l,{strictBounds:!0})}function g(e,r,t,n,o){var l;switch(t){case"point":case"multipoint":var u=null!=o?o:e.size;"2d"===n?l=new i({color:r,size:u,outline:{color:e.outline.color,width:e.outline.width}}):"3d-flat"===n?l=new d({symbolLayers:[new m({size:u,resource:{primitive:"circle"},material:{color:r},outline:{color:e.outline.color,size:e.outline.width}})]}):"3d-volumetric"===n&&(l=new d({symbolLayers:[new y({height:u,resource:{primitive:"cylinder"},material:{color:r}})]}));break;case"polyline":var c=null!=o?o:e.width;"2d"===n&&(l=new s({color:r,width:c}));break;case"polygon":"2d"===n&&(l=new a({color:r,outline:{color:e.outline.color,width:e.outline.width}}))}return l}function h(e){var r=null;return"string"==typeof e?r=e:e instanceof u&&(r=c.wellKnownBasemapId(e)),r||"gray"}function S(e,r,t){var n=f.getUnknownFields({layer:e,fields:r});if(n.length)return p(t,"Unknown fields: "+n.join(", ")+". You can only use fields defined in the layer schema");var o=U({layer:e,fields:r});return o.length?p(t,"Unsupported fields: "+o.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function U(e){var r=e.layer;return e.fields.filter(function(e){var t=r.getFieldUsageInfo(e);return!t||!t.supportsRenderer})}r.createError=p,r.getDefaultDataRange=b,r.createColors=v,r.createStopValues=w,r.createSymbol=g,r.getBasemapId=h,r.verifyBasicFieldValidity=S});