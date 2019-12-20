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

define(["require","exports","./tsSupport/extendsHelper","./lang","./Logger","./Message"],function(e,t,r,o,s,n){var i=function(e){function t(r,o,s){var n=e.call(this,r,o,s)||this;return n instanceof t?n:new t(r,o,s)}return r(t,e),t.prototype.toJSON=function(){if(null!=this.details)try{var e=o.clone(this.details);return{name:this.name,message:this.message,details:e,dojoType:this.dojoType}}catch(e){throw s.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details,dojoType:this.dojoType}},t.fromJSON=function(e){var r=new t(e.name,e.message,e.details);return null!=e.dojoType&&(r.dojoType=e.dojoType),r},t}(n);return i.prototype.type="error",i});