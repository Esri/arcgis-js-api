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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/numberUtils","../../../../Color","../../statistics/support/utils","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../symbols/PointSymbol3D","../../../../symbols/IconSymbol3DLayer","../../../../symbols/ObjectSymbol3DLayer","../../support/utils","../../../../symbols/MeshSymbol3D","../../../../symbols/FillSymbol3DLayer"],function(e,r,o,i,t,l,n,s,a,u,c,d,m,y,f){function b(e,r){return new o(e,r)}function v(e,r,o){var i,t,n=l.getSuggestedDataRange({statistics:e,isDate:r});return n.defaultValuesUsed?(i=n.min,t=n.max):!o||null!=e.avg&&e.stddev||(i=e.min,t=e.max),null!=i?[i,t]:null}function p(e,r){for(var o=[],i=e.length,l=0;r>l;l++)o.push(new t(e[l%i]));return o}function h(e,r){void 0===r&&(r=!0);var o=e.avg,t=o-e.stddev,l=o+e.stddev;t<e.min&&(t=e.min),l>e.max&&(l=e.max),r&&(o=t+(l-t)/2);var n=i.round([t,l],{strictBounds:!0});return t=n[0],l=n[1],n=[t,t+(o-t)/2,o,o+(l-o)/2,l],i.round(n,{strictBounds:!0})}function w(e,r,o,i,t,l){var m;switch(o){case"point":case"multipoint":var b=null!=l?l:e.size;if("2d"===i)m=new n({color:r,size:b,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===i)m=new u({symbolLayers:[new c({size:b,resource:{primitive:"circle"},material:{color:r},outline:{color:e.outline.color,size:e.outline.width}})]});else if(i.indexOf("3d-volumetric")>-1){var v="3d-volumetric-uniform"===i?"sphere":"cylinder";m=new u({symbolLayers:[new d({height:b,resource:{primitive:v},material:{color:r}})]})}break;case"polyline":var p=null!=l?l:e.width;"2d"===i&&(m=new s({color:r,width:p}));break;case"polygon":"2d"===i&&(m=new a({color:r,outline:{color:e.outline.color,width:e.outline.width}}));break;case"mesh":m=new y({symbolLayers:[new f({material:{color:r,colorMixMode:t}})]})}return m}function g(e,r,o){var i=m.getUnknownFields({layer:e,fields:r});if(i.length)return b(o,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");var t=S({layer:e,fields:r});return t.length?b(o,"Unsupported fields: "+t.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function S(e){var r=e.layer;return e.fields.filter(function(e){var o=r.getFieldUsageInfo(e);return!o||!o.supportsRenderer})}function D(e){return z.test(e)}function x(e){var r=e.match(z),o=Number(r[1]),i=r[3];return"%"===i?{type:"splat",scaleFactor:o/100,minSize:1.1}:void 0}Object.defineProperty(r,"__esModule",{value:!0});var z=/^(\d+(\.\d+)?)\s*(%)$/i;r.createError=b,r.getDefaultDataRange=v,r.createColors=p,r.createStopValues=h,r.createSymbol=w,r.verifyBasicFieldValidity=g,r.isValidPointSize=D,r.getPointSizeAlgorithm=x});