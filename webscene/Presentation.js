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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupporter","../core/collectionUtils","../core/accessoireSupport/typescript","./Slide"],function(e,r,t,n,s,o,i,u){var c=function(e){function r(r){e.call(this,r),this.slides=null}return t(r,e),r.prototype.getDefaults=function(){return{slides:[]}},r.prototype.clone=function(){return new r({slides:this.slides.map(function(e){return e.clone()})})},r.prototype.toJSON=function(){return{slides:this.slides.map(function(e){return e.toJSON()}).toArray()}},r.sanitizeJSON=function(e){var r;return r=void 0!==e.slides&&Array.isArray(e.slides)?e.slides.map(function(e){return u.sanitizeJSON(e)}):[],{slides:r}},n([i.shared("esri.webscene.Presentation")],r.prototype,"declaredClass",void 0),n([i.property({reader:function(e){return e.map(function(e){return u.fromJSON(e)})},setter:o.referenceSetter})],r.prototype,"slides",void 0),r=n([i.subclass()],r)}(s);return c});