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

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./Lighting","./background/utils"],(function(e,t,r,o,n,i,a,s){"use strict";var p=function(e,t,r){return{enabled:!r||!r.isPresentation}};return function(e){function t(t){var r=e.call(this,t)||this;return r.lighting=new a,r.background=null,r.atmosphereEnabled=!0,r.starsEnabled=!0,r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o(this.cloneConstructProperties())},t.prototype.cloneConstructProperties=function(){return{lighting:a.prototype.clone.call(this.lighting),background:n.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled}},r.__decorate([i.property({type:a,json:{write:!0}})],t.prototype,"lighting",void 0),r.__decorate([i.property(s.backgroundProperty)],t.prototype,"background",void 0),r.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],t.prototype,"atmosphereEnabled",void 0),r.__decorate([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],t.prototype,"starsEnabled",void 0),t=o=r.__decorate([i.subclass("esri.webscene.Environment")],t)}(o.JSONSupport)}));