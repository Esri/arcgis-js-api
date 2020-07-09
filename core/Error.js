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

define(["require","exports","tslib","./lang","./Logger","./Message"],(function(e,t,r,s,n,i){var a=function(e){function t(r,s,n){var i=e.call(this,r,s,n)||this;return i instanceof t?i:new t(r,s,n)}return r.__extends(t,e),t.prototype.toJSON=function(){if(null!=this.details)try{var e=s.clone(this.details);return{name:this.name,message:this.message,details:e}}catch(e){throw n.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}},t.fromJSON=function(e){return new t(e.name,e.message,e.details)},t}(i);return a.prototype.type="error",a}));