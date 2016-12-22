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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./declare","./accessorSupport/read","./accessorSupport/write","./accessorSupport/decorators"],function(r,e,t,o,n,s,u,i,a){function c(r,e){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");var t=this,o=new t;return o.read(r,e),o}var p=function(r){function e(){r.apply(this,arguments)}return t(e,r),e.prototype.read=function(r,e){return u["default"](this,r,e),this},e.prototype.write=function(r,e){return i["default"](this,r||{},e)},e.prototype.toJSON=function(r){return this.write(null,r)},e=o([a.subclass("esri.core.JSONSupport")],e)}(a.declared(n));return p.prototype.toJSON.isDefaultToJSON=!0,s.after(function(r){s.hasMixin(r,p)&&(r.fromJSON=c.bind(r))}),p});