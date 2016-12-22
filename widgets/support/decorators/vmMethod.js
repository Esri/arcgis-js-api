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

define(["require","exports","../../../core/accessorSupport/get"],function(e,t,n){function i(){return console.warn("@vmMethod is deprecated, use @aliasOf instead"),function(e,t,i){var r,a="viewModel."+t;i.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var i=n["default"](this,a);return i?(r||(r=a.split(".").slice(0,-1).join(".")),i=i.bind(n["default"](this,r)),i.call.apply(i,[this].concat(e))):void 0}}}t.vmMethod=i});