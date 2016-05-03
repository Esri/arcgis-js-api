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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupporter","../core/accessoireSupport/typescript","./Lighting"],function(t,e,i,n,r,o,p){var g=function(t){function e(e){t.call(this,e),this.lighting=null}return i(e,t),e.prototype.getDefaults=function(){return{lighting:{}}},e.prototype.clone=function(){return new e({lighting:this.lighting.clone()})},e.prototype.toJSON=function(){return{lighting:this.lighting.toJSON()}},e.sanitizeJSON=function(t){return{lighting:t.lighting?p.sanitizeJSON(t.lighting):(new p).toJSON()}},n([o.shared("esri.webscene.Environment")],e.prototype,"declaredClass",void 0),n([o.property({type:p})],e.prototype,"lighting",void 0),e=n([o.subclass()],e)}(r);return g});