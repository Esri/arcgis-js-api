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

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./Lighting","./background/utils"],(function(e,r,t,o,n,i,a,s){var p=function(e,r,t){return{enabled:!t||!t.isPresentation}};return function(e){function r(r){var t=e.call(this,r)||this;return t.lighting=new a,t.background=null,t.atmosphereEnabled=!0,t.starsEnabled=!0,t}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o(this.cloneConstructProperties())},r.prototype.cloneConstructProperties=function(){return{lighting:a.prototype.clone.call(this.lighting),background:n.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled}},t.__decorate([i.property({type:a,json:{write:!0}})],r.prototype,"lighting",void 0),t.__decorate([i.property(s.backgroundProperty)],r.prototype,"background",void 0),t.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],r.prototype,"atmosphereEnabled",void 0),t.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],r.prototype,"starsEnabled",void 0),r=o=t.__decorate([i.subclass("esri.webscene.Environment")],r)}(o.JSONSupport)}));