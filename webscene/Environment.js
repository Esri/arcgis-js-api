// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./Lighting","./background/utils"],function(e,r,o,t,n,i,p,l,s){var a=function(e,r,o){return{enabled:!o||!o.isPresentation}};return function(e){function r(r){var o=e.call(this,r)||this;return o.lighting=new l,o.background=null,o.atmosphereEnabled=!0,o.starsEnabled=!0,o}o(r,e),n=r,r.prototype.clone=function(){return new n(this.cloneConstructProperties())},r.prototype.cloneConstructProperties=function(){return{lighting:l.prototype.clone.call(this.lighting),background:i.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled}};var n;return t([p.property({type:l,json:{write:!0}})],r.prototype,"lighting",void 0),t([p.property(s.backgroundProperty)],r.prototype,"background",void 0),t([p.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:a}}})],r.prototype,"atmosphereEnabled",void 0),t([p.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:a}}})],r.prototype,"starsEnabled",void 0),r=n=t([p.subclass("esri.webscene.Environment")],r)}(p.declared(n))});