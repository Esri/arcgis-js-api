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

define(["require","exports","./tsSupport/extendsHelper","./tsSupport/decorateHelper","dojo/string"],function(t,e,n,r,s){var i=function(){function t(t,e,n){this.name=t,this.message=e&&s.substitute(e,n,function(t){return null==t?"":t})||"",this.details=n}return t.prototype.toString=function(){return"["+this.name+"]: "+this.message},t}();return i});