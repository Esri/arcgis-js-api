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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","./SceneViewAtmosphere","./SceneViewLighting","../../../webscene/Environment","../../../webscene/Lighting"],(function(e,t,n,i,r,o,s,c,g,h,p,a){return function(e){function t(t){var n=e.call(this,t)||this;return n.atmosphere=new g.default,n}var p;return n(t,e),p=t,t.fromWebsceneEnvironment=function(e){var t=e.cloneConstructProperties();return new p(r({},t,{lighting:h.SceneViewLighting.fromWebsceneLighting(t.lighting)}))},t.prototype.castLighting=function(e){return this.convertLighting(e)},t.prototype.updateLighting=function(e){this.lighting=this.convertLighting(e)},t.prototype.convertLighting=function(e){return e?e instanceof h.SceneViewLighting?e:e instanceof a?this.lighting?this.lighting.cloneWithWebsceneLighting(e):h.SceneViewLighting.fromWebsceneLighting(e):c.ensureType(h.SceneViewLighting,e):new h.SceneViewLighting},t.prototype.clone=function(){return new p({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:o.clone(this.background)})},i([s.property({type:g.default,json:{read:!1}})],t.prototype,"atmosphere",void 0),i([s.property()],t.prototype,"lighting",void 0),i([s.cast("lighting")],t.prototype,"castLighting",null),t=p=i([s.subclass("esri.views.3d.environment.SceneViewEnvironment")],t)}(s.declared(p))}));