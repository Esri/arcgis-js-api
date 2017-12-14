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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../../core/Error","../../../../core/numberUtils","../../../../core/promiseUtils","../../../../Color","../../statistics/support/utils","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../symbols/PointSymbol3D","../../../../symbols/IconSymbol3DLayer","../../../../symbols/ObjectSymbol3DLayer","../../support/utils","../../../../symbols/MeshSymbol3D","../../../../symbols/FillSymbol3DLayer","../../../support/pointCloud/PointSizeSplatAlgorithm","../../statistics/classBreaks"],function(e,r,t,i,l,o,n,s,a,u,c,d,m,f,y,v,b,p,h){function g(e,r){return new i(e,r)}function w(e,r,t){var i,l,o=s.getSuggestedDataRange({statistics:e,isDate:r});return o.defaultValuesUsed?(i=o.min,l=o.max):!t||null!=e.avg&&e.stddev||(i=e.min,l=e.max),null!=i?[i,l]:null}function S(e,r){for(var t=[],i=e.length,l=0;r>l;l++)t.push(new n(e[l%i]));return t}function x(e,r){void 0===r&&(r=!0);var t=e.avg,i=t-e.stddev,o=t+e.stddev;i<e.min&&(i=e.min),o>e.max&&(o=e.max),r&&(t=i+(o-i)/2);var n=l.round([i,o],{strictBounds:!0});return i=n[0],o=n[1],n=[i,i+(t-i)/2,t,t+(o-t)/2,o],l.round(n,{strictBounds:!0})}function z(e,r,t,i,l,o){var n;switch(t){case"point":case"multipoint":var s=null!=o?o:e.size;if("2d"===i)n=new a({color:r,size:s,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===i)n=new d({symbolLayers:[new m({size:s,resource:{primitive:"circle"},material:{color:r},outline:{color:e.outline.color,size:e.outline.width}})]});else if(i.indexOf("3d-volumetric")>-1){var y="3d-volumetric-uniform"===i?"sphere":"cylinder";n=new d({symbolLayers:[new f({height:s,resource:{primitive:y},material:{color:r}})]})}break;case"polyline":var p=null!=o?o:e.width;"2d"===i&&(n=new u({color:r,width:p}));break;case"polygon":"2d"===i&&(n=new c({color:r,outline:{color:e.outline.color,width:e.outline.width}}));break;case"mesh":n=new v({symbolLayers:[new b({material:{color:r,colorMixMode:l}})]})}return n}function D(e,r,t){var i=y.getUnknownFields({layer:e,fields:r});if(i.length)return g(t,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");var l=U({layer:e,fields:r});return l.length?g(t,"Unsupported fields: "+l.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function U(e){var r=e.layer;return e.fields.filter(function(e){var t=r.getFieldUsageInfo(e);return!t||!t.supportsRenderer})}function V(e){return h(e).then(function(r){var i,l=w({min:r.minValue,max:r.maxValue,avg:null,stddev:null},!1,!1);return i=l?h(t.mixin(e,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:l[0],maxValue:l[1],normalizationTotal:l[0]+l[1]})):o.resolve(r),i.then(function(e){return{result:e,defaultValuesUsed:!!l}})})}function k(e){return L.test(e)}function F(e){var r=e.match(L),t=Number(r[1]),i=r[3];return"%"===i?new p["default"]({scaleFactor:t/100,minSize:1.1}):void 0}Object.defineProperty(r,"__esModule",{value:!0});var L=/^(\d+(\.\d+)?)\s*(%)$/i;r.createError=g,r.getDefaultDataRange=w,r.createColors=S,r.createStopValues=x,r.createSymbol=z,r.verifyBasicFieldValidity=D,r.getClassBreaks=V,r.isValidPointSize=k,r.getPointSizeAlgorithm=F});