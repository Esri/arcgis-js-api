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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./accessorSupport/decorators/subclass"],(function(e,i,t,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Identifiable=i.IdentifiableMixin=void 0;var r=0;i.IdentifiableMixin=function(e){return function(e){function i(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var n=e.apply(this,i)||this;return Object.defineProperty(n,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++}),n}return t.__extends(i,e),i=t.__decorate([n.subclass("esri.core.Identifiable")],i)}(e)};var a=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(i,e),i=t.__decorate([n.subclass("esri.core.Identifiable")],i)}(i.IdentifiableMixin((function(){})));i.Identifiable=a}));