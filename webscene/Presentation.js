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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/Collection","../core/collectionUtils","../core/accessorSupport/decorators","./Slide"],function(e,t,r,s,o,i,n,c,l){var u=i.ofType(l),p=function(e){function t(t){e.call(this,t),this.slides=new u}return r(t,e),Object.defineProperty(t.prototype,"slides",{set:function(e){this._set("slides",n.referenceSetter(e,this._get("slides"),u))},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=this.constructor;return new e({slides:this.slides.clone()})},t.prototype.toJSON=function(){return this.inherited(arguments)},t.sanitizeJSON=function(e){var t;return t=void 0!==e.slides&&Array.isArray(e.slides)?e.slides.filter(function(e){return e&&!!e.viewpoint}).map(function(e){return l.sanitizeJSON(e)}):[],{slides:t}},s([c.property({type:u,json:{writable:!0}}),c.cast(n.castForReferenceSetter)],t.prototype,"slides",null),t=s([c.subclass("esri.webscene.Presentation")],t)}(c.declared(o));return p});