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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../Color","../../../../symbols","../../../../core/Error","../../../../core/numberUtils","../../../../core/promiseUtils","../../statistics/classBreaks","../../../support/pointCloud/PointSizeSplatAlgorithm"],function(e,n,i,r,t,l,o,a,u,s){function c(e,n){return new l(e,n)}function m(e,n,i){var r,t,l=d({statistics:e,isDate:n});return l.defaultValuesUsed?(r=l.min,t=l.max):!i||null!=e.avg&&e.stddev||(r=e.min,t=e.max),null!=r?[r,t]:null}function d(e){var n=e&&e.statistics;n||(n={});var i,r;if(null==n.min)if(e.isDate){var t=f();i=t[0],r=t[1]}else i=0,r=100;else if(n.min===n.max)if(e.isDate){var l=f(n.min);i=l[0],r=l[1]}else n.min<0?(i=2*n.min,r=0):n.min>0?(i=0,r=2*n.min):(i=0,r=100);return{min:null!=i?i:n.min,max:null!=r?r:n.max,defaultValuesUsed:null!=i||null!=r}}function f(e){var n="number"==typeof e?new Date(e):new Date,i=n.getUTCFullYear(),r=Date.UTC(i,0,1,12,0,0,0),t=Date.UTC(i,11,31,12,0,0,0);return"number"==typeof e&&(e<r&&(r=e),e>t&&(t=e)),[r,t]}function v(e,n){for(var i=[],t=e.length,l=0;l<n;l++)i.push(new r(e[l%t]));return i}function y(e,n){void 0===n&&(n=!0);var i=e.avg,r=i-e.stddev,t=i+e.stddev;r<e.min&&(r=e.min),t>e.max&&(t=e.max),n&&(i=r+(t-r)/2);var l=o.round([r,t],{strictBounds:!0});return r=l[0],t=l[1],l=[r,r+(i-r)/2,i,i+(t-i)/2,t],o.round(l,{strictBounds:!0})}function p(e,n,i,r,l,o,a){var u;switch(i){case"point":case"multipoint":var s=null!=a?a:e.size;if("2d"===r)u=new t.SimpleMarkerSymbol({color:n,size:s,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===r)u=new t.PointSymbol3D({symbolLayers:[new t.IconSymbol3DLayer({size:s,resource:{primitive:"circle"},material:{color:n},outline:{color:e.outline.color,size:e.outline.width}})]});else if(r.indexOf("3d-volumetric")>-1){var c="3d-volumetric-uniform"===r?"sphere":"cylinder";u=new t.PointSymbol3D({symbolLayers:[new t.ObjectSymbol3DLayer({height:s,resource:{primitive:c},material:{color:n}})]})}break;case"polyline":var m=null!=a?a:e.width;"2d"===r&&(u=new t.SimpleLineSymbol({color:n,width:m}));break;case"polygon":"2d"===r&&(u=new t.SimpleFillSymbol({color:n,outline:{color:e.outline.color,width:e.outline.width}}));break;case"mesh":u=new t.MeshSymbol3D({symbolLayers:[new t.FillSymbol3DLayer({material:{color:n,colorMixMode:l},edges:null==o||"none"===o?null:{type:o,color:U}})]})}return u}function h(e,n,i){var r=b({layer:e,fields:n});if(r.length)return c(i,"Unknown fields: "+r.join(", ")+". You can only use fields defined in the layer schema");var t=g({layer:e,fields:n});return t.length?c(i,"Unsupported fields: "+t.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function b(e){var n=e.layer;return e.fields.filter(function(e){return!n.getField(e)})}function g(e){var n=e.layer;return e.fields.filter(function(e){var i=n.getFieldUsageInfo(e);return!i||!i.supportsRenderer})}function S(e){return u(e).then(function(n){var r,t=m({min:n.minValue,max:n.maxValue,avg:null,stddev:null},!1,!1);return r=t?u(i({},e,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:t[0],maxValue:t[1],normalizationTotal:t[0]+t[1]})):a.resolve(n),r.then(function(e){return{result:e,defaultValuesUsed:!!t}})})}function w(e,n){var i=e.minSize,r=e.maxSize;if("height"===n){i=((r-i)/2+i)/4.6,r*=2}return{minSize:i,maxSize:r}}function x(e){return z.test(e)}function D(e){var n=e.match(z),i=Number(n[1]);if("%"===n[3])return new s.default({scaleFactor:i/100})}Object.defineProperty(n,"__esModule",{value:!0});var z=/^(\d+(\.\d+)?)\s*(%)$/i,U=[0,0,0,.4];n.createError=c,n.getDefaultDataRange=m,n.createColors=v,n.createStopValues=y,n.createSymbol=p,n.verifyBasicFieldValidity=h,n.getClassBreaks=S,n.getSizeRangeForAxis=w,n.isValidPointSize=x,n.getPointSizeAlgorithm=D});