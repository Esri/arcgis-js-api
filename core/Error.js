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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./tsSupport/extendsHelper","./Message","./lang"],function(e,t,n,r,s){var i=function(e){function t(n,r,s){var i=e.call(this,n,r,s)||this;return i instanceof t?i:new t(n,r,s)}return n(t,e),t.prototype.toJSON=function(){return{name:this.name,message:this.message,details:s.clone(this.details)}},t.fromJSON=function(e){return new t(e.name,e.message,e.details)},t}(r);return i.prototype.type="error",i});