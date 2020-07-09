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

define(["require","exports","tslib","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","./SceneViewAtmosphere","./SceneViewLighting","../../../webscene/Environment","../../../webscene/Lighting"],(function(e,n,t,i,r,o,s,g,c,h){return function(e){function n(n){var t=e.call(this,n)||this;return t.atmosphere=new s.default,t}var c;return t.__extends(n,e),c=n,n.fromWebsceneEnvironment=function(e){var n=e.cloneConstructProperties();return new c(t.__assign(t.__assign({},n),{lighting:g.SceneViewLighting.fromWebsceneLighting(n.lighting)}))},n.prototype.castLighting=function(e){return this.convertLighting(e)},n.prototype.updateLighting=function(e){this.lighting=this.convertLighting(e)},n.prototype.convertLighting=function(e){return e?e instanceof g.SceneViewLighting?e:e instanceof h?this.lighting?this.lighting.cloneWithWebsceneLighting(e):g.SceneViewLighting.fromWebsceneLighting(e):o.ensureType(g.SceneViewLighting,e):new g.SceneViewLighting},n.prototype.clone=function(){return new c({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:i.clone(this.background)})},t.__decorate([r.property({type:s.default,json:{read:!1}})],n.prototype,"atmosphere",void 0),t.__decorate([r.property()],n.prototype,"lighting",void 0),t.__decorate([r.cast("lighting")],n.prototype,"castLighting",null),n=c=t.__decorate([r.subclass("esri.views.3d.environment.SceneViewEnvironment")],n)}(c)}));