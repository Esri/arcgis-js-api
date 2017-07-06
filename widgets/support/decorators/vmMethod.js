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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/accessorSupport/get"],function(e,t,n){function r(){return console.warn("@vmMethod is deprecated, use @aliasOf instead"),function(e,t,r){var i,o="viewModel."+t;r.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=n["default"](this,o);return r?(i||(i=o.split(".").slice(0,-1).join(".")),r=r.bind(n["default"](this,i)),r.call.apply(r,[this].concat(e))):void 0}}}Object.defineProperty(t,"__esModule",{value:!0}),t.vmMethod=r});