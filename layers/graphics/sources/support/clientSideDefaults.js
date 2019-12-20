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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/has","../../../../core/lang","../../../../symbols/support/defaultsJSON"],function(e,t,r,n,o,i){function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.defaultPointSymbolJSON:"esriGeometryPolyline"===e?i.defaultPolylineSymbolJSON:i.defaultPolygonSymbolJSON}}}function l(e,t){if(n("csp-restrictions"))return function(){var n;return r((n={},n[t]=null,n),e)};try{var o="this."+t+" = null;";for(var i in e)o+="this."+i+" = "+JSON.stringify(e[i])+";";var u=new Function(o);return function(){return new u}}catch(n){return function(){var n;return r((n={},n[t]=null,n),e)}}}function a(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:o.clone(e)}}]}Object.defineProperty(t,"__esModule",{value:!0}),t.createDrawingInfo=u,t.createDefaultAttributesFunction=l,t.createDefaultTemplate=a});