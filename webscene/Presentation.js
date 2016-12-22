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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/Collection","../core/collectionUtils","../core/accessorSupport/decorators","./Slide"],function(e,r,t,s,o,i,n,c,l){var p=i.ofType(l),u=function(e){function r(r){e.call(this,r),this.slides=new p}return t(r,e),Object.defineProperty(r.prototype,"slides",{set:function(e){this._set("slides",n.referenceSetter(e,this._get("slides"),p))},enumerable:!0,configurable:!0}),r.prototype.clone=function(){var e=this.constructor;return new e({slides:this.slides.clone()})},r.sanitizeJSON=function(e){var r;return r=void 0!==e.slides&&Array.isArray(e.slides)?e.slides.filter(function(e){return e&&!!e.viewpoint}).map(function(e){return l.sanitizeJSON(e)}):[],{slides:r}},s([c.property({type:p,json:{writable:!0}}),c.cast(n.castForReferenceSetter)],r.prototype,"slides",null),r=s([c.subclass("esri.webscene.Presentation")],r)}(c.declared(o));return u});