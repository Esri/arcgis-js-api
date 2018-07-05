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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./Lighting","./background/utils"],function(e,r,t,n,o,a,i,l,s){var p=function(e,r,t){return{enabled:!t||!t.isPresentation}};return function(e){function r(r){var t=e.call(this,r)||this;return t.lighting=new l,t.background=null,t.atmosphereEnabled=!0,t.starsEnabled=!0,t}t(r,e),o=r,r.prototype.clone=function(){return new o({lighting:l.prototype.clone.call(this.lighting),background:a.clone(this.background),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled})},r.sanitizeJSON=function(e){return{lighting:e.lighting?l.sanitizeJSON(e.lighting):(new l).toJSON(),background:e.background,atmosphereEnabled:e.atmosphereEnabled,starsEnabled:e.starsEnabled}};var o;return n([i.property({type:l,json:{write:!0}})],r.prototype,"lighting",void 0),n([i.property(s.backgroundProperty)],r.prototype,"background",void 0),n([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],r.prototype,"atmosphereEnabled",void 0),n([i.property({type:Boolean,nonNullable:!0,json:{write:{overridePolicy:p}}})],r.prototype,"starsEnabled",void 0),r=o=n([i.subclass("esri.webscene.Environment")],r)}(i.declared(o))});