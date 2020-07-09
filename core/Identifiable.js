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

define(["require","exports","tslib","./accessorSupport/decorators"],(function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var r=0;t.IdentifiableMixin=function(e){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var n=e.apply(this,t)||this;return Object.defineProperty(n,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++}),n}return i.__extends(t,e),t=i.__decorate([n.subclass("esri.core.Identifiable")],t)}(e)};var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t=i.__decorate([n.subclass("esri.core.Identifiable")],t)}(t.IdentifiableMixin((function(){})));t.Identifiable=o}));