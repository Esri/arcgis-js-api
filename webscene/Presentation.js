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

define(["require","exports","tslib","../core/Collection","../core/collectionUtils","../core/JSONSupport","../core/accessorSupport/decorators","./Slide"],(function(e,t,r,o,s,n,i,c){var l=o.ofType(c);return function(e){function t(t){var r=e.call(this,t)||this;return r.slides=new l,r}return r.__extends(t,e),t.prototype.destroy=function(){this.slides.forEach((function(e){return e.destroy()})),this.slides.removeAll()},Object.defineProperty(t.prototype,"slides",{set:function(e){e&&(e=e.filter((function(e){return!!e.viewpoint}))),this._set("slides",s.referenceSetter(e,this._get("slides"),l))},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new(0,this.constructor)({slides:this.slides.clone()})},r.__decorate([i.property({type:l,nonNullable:!0,json:{write:!0}}),i.cast(s.castForReferenceSetter)],t.prototype,"slides",null),t=r.__decorate([i.subclass("esri.webscene.Presentation")],t)}(n.JSONSupport)}));