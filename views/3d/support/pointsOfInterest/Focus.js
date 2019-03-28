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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../geometryUtils","../mathUtils","../PropertiesPool","./PointOfInterest"],function(e,r,t,o,n,c,a,i,s,p,l,d,u){Object.defineProperty(r,"__esModule",{value:!0});var f=Array,y=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new d.default({locationOnSurface:s,renderLocationOnSurface:f},t),t.centerOnSurface=null,t}return t(r,e),r.prototype.destroy=function(){this.propertiesPool.destroy(),this.propertiesPool=null},Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this.propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(v);a.vec3.subtract(O,e,this.state.camera.eye),a.vec3.normalize(O,O),r.worldUpAtPosition(e,h);var o=Math.abs(Math.acos(a.vec3.dot(h,O))-.5*Math.PI),n=this.propertiesPool.get("renderLocationOnSurface"),c=1-l.clamp(o/(.5*Math.PI),0,1),i=c*c*c;return a.vec3.lerp(n,e,t,i),n},enumerable:!0,configurable:!0}),r.prototype.update=function(e){},r.prototype.forceUpdate=function(){},r.prototype.hasPendingUpdates=function(){return this.centerOnSurface.hasPendingUpdates()},r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),o=this.renderCoordsHelper.getAltitude(r.eye),c=o>=t,i=r.getRenderCenter(n.createRenderScreenPointArray3());i[1]=c?r.padding[2]:r.fullHeight-r.padding[0],r.unprojectPoint(i,S),a.vec3.subtract(S,S,r.eye);var s=a.vec3.normalize(S,S);return this.renderCoordsHelper.intersectManifold(p.ray.wrap(r.eye,s),t,e)?e:(a.vec3.copy(e,r.eye),this.renderCoordsHelper.setAltitude(t,e),e)},o([c.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),o([c.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),o([c.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),r=o([c.subclass("esri.views.3d.support.CenterOnSurface")],r)}(c.declared(u.PointOfInterest));r.Focus=y;var O=i.vec3f64.create(),h=i.vec3f64.create(),S=i.vec3f64.create(),v=i.vec3f64.create();r.default=y});