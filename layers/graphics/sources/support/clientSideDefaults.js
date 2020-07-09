// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/has","../../../../core/lang","../../../../symbols/support/defaultsJSON"],(function(e,t,r,n,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.defaultPointSymbolJSON:"esriGeometryPolyline"===e?o.defaultPolylineSymbolJSON:o.defaultPolygonSymbolJSON}}},t.createDefaultAttributesFunction=function(e,t){if(n("csp-restrictions"))return function(){var n;return r.__assign(((n={})[t]=null,n),e)};try{var i="this."+t+" = null;";for(var o in e)i+="this."+o+" = "+JSON.stringify(e[o])+";";var u=new Function(i);return function(){return new u}}catch(n){return function(){var n;return r.__assign(((n={})[t]=null,n),e)}}},t.createDefaultTemplate=function(e){return void 0===e&&(e={}),[{name:"New Feature",description:"",prototype:{attributes:i.clone(e)}}]}}));