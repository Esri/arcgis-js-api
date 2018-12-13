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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/lang","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","./SceneViewAtmosphere","./SceneViewLighting","../../../webscene/Environment","../../../webscene/Lighting"],function(e,n,t,i,r,o,s,c,g,p,h,a){return function(e){function n(n){var t=e.call(this,n)||this;return t.atmosphere=new g.default,t}t(n,e),h=n,n.fromWebsceneEnvironment=function(e){var n=e.cloneConstructProperties();return new h(r({},n,{lighting:p.SceneViewLighting.fromWebsceneLighting(n.lighting)}))},n.prototype.castLighting=function(e){return e?e instanceof p.SceneViewLighting?e:e instanceof a?this.lighting?this.lighting.cloneWithWebsceneLighting(e):p.SceneViewLighting.fromWebsceneLighting(e):c.ensureType(p.SceneViewLighting,e):new p.SceneViewLighting},n.prototype.clone=function(){return new h({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:o.clone(this.background)})};var h;return i([s.property({type:g.default,json:{read:!1}})],n.prototype,"atmosphere",void 0),i([s.property()],n.prototype,"lighting",void 0),i([s.cast("lighting")],n.prototype,"castLighting",null),n=h=i([s.subclass("esri.views.3d.environment.SceneViewEnvironment")],n)}(s.declared(h))});