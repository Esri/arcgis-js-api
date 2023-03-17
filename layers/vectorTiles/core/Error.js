// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","./tsSupport/extendsHelper","./lang","./Message"],(function(e,t,n,o,r){var s=function(e){function t(n,o,r){var s=e.call(this,n,o,r)||this;return s instanceof t?s:new t(n,o,r)}return n(t,e),t.prototype.toJSON=function(){return{name:this.name,message:this.message,details:o.clone(this.details),dojoType:this.dojoType}},t.fromJSON=function(e){var n=new t(e.name,e.message,e.details);return null!=e.dojoType&&(n.dojoType=e.dojoType),n},t}(r);return s.prototype.type="error",s}));