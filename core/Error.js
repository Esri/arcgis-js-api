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

define(["require","exports","tslib","./lang","./Logger","./Message"],(function(e,t,r,n,s,i){"use strict";var o=function(e){function t(r,n,s){var i=e.call(this,r,n,s)||this;return i instanceof t?i:new t(r,n,s)}return r.__extends(t,e),t.prototype.toJSON=function(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(function(e,t){if(t&&"object"==typeof t&&"function"==typeof t.toJSON)return t;try{return n.clone(t)}catch(e){return"[object]"}})))}}catch(e){throw s.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}},t.fromJSON=function(e){return new t(e.name,e.message,e.details)},t}(i);return o.prototype.type="error",o}));