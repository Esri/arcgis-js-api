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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/has","../../../../core/lang"],function(e,r,t,i,n){function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s:"esriGeometryPolyline"===e?c:a}}}function l(e,r){if(i("csp-restrictions"))return function(){var i;return t((i={},i[r]=null,i),e)};try{var n="this."+r+" = null;";for(var o in e)n+="this."+o+" = "+JSON.stringify(e[o])+";";var l=new Function(n);return function(){return new l}}catch(i){return function(){var i;return t((i={},i[r]=null,i),e)}}}function u(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:n.clone(e)}}]}Object.defineProperty(r,"__esModule",{value:!0});var s={type:"esriSMS",style:"esriSMSCircle",size:6,color:[252,146,31,255],outline:{width:.75,color:[153,153,153,255]}},c={type:"esriSLS",style:"esriSLSSolid",width:1,color:[252,146,31,255]},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}};r.createDrawingInfo=o,r.createDefaultAttributesFunction=l,r.createDefaultTemplate=u});