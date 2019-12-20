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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./accessorSupport/decorators"],function(e,r,t,n,i){Object.defineProperty(r,"__esModule",{value:!0});var o=0;r.IdentifiableMixin=function(e){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=e.apply(this,r)||this;return Object.defineProperty(n,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++}),n}return t(r,e),r=n([i.subclass("esri.core.Identifiable")],r)}(i.declared(e))};var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r=n([i.subclass("esri.core.Identifiable")],r)}(i.declared(r.IdentifiableMixin(function(){function e(){}return e}())));r.Identifiable=u});