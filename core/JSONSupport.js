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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./declare","./accessorSupport/read","./accessorSupport/write","./accessorSupport/decorators"],function(r,t,e,o,n,u,s,i,a){function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");var e=this,o=new e;return o.read(r,t),o}var p=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e(t,r),t.prototype.read=function(r,t){return s["default"](this,r,t),this},t.prototype.write=function(r,t){return i["default"](this,r||{},t)},t.prototype.toJSON=function(r){return this.write(null,r)},t}(a.declared(n));return p=o([a.subclass("esri.core.JSONSupport")],p),p.prototype.toJSON.isDefaultToJSON=!0,u.after(function(r){u.hasMixin(r,p)&&(r.fromJSON=c.bind(r))}),p});