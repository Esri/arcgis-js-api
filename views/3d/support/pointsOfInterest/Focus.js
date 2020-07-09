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

define(["require","exports","tslib","../../../../core/mathUtils","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../geometryUtils","../PropertiesPool","./PointOfInterest"],(function(e,r,t,o,n,a,c,i,s,d,l,p){Object.defineProperty(r,"__esModule",{value:!0});var u=Array,f=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new l.default({locationOnSurface:s,renderLocationOnSurface:u},t),t.centerOnSurface=null,t}return t.__extends(r,e),r.prototype.destroy=function(){this.propertiesPool.destroy(),this.propertiesPool=null},Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this.propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(v);c.vec3.subtract(y,e,this.state.camera.eye),c.vec3.normalize(y,y),r.worldUpAtPosition(e,O);var n=Math.abs(Math.acos(c.vec3.dot(O,y))-.5*Math.PI),a=this.propertiesPool.get("renderLocationOnSurface"),i=1-o.clamp(n/(.5*Math.PI),0,1),s=i*i*i;return c.vec3.lerp(a,e,t,s),a},enumerable:!0,configurable:!0}),r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),o=this.renderCoordsHelper.getAltitude(r.eye)>=t,a=r.getRenderCenter(n.createRenderScreenPointArray3());a[1]=o?r.padding[2]:r.fullHeight-r.padding[0],r.unprojectPoint(a,h),c.vec3.subtract(h,h,r.eye);var i=c.vec3.normalize(h,h);return this.renderCoordsHelper.intersectManifold(d.ray.wrap(r.eye,i),t,e)?e:(c.vec3.copy(e,r.eye),this.renderCoordsHelper.setAltitude(t,e),e)},r.prototype.updateRenderLocation=function(){},t.__decorate([a.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),t.__decorate([a.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),t.__decorate([a.property({readOnly:!0,aliasOf:"centerOnSurface.updating"})],r.prototype,"updating",void 0),r=t.__decorate([a.subclass("esri.views.3d.support.CenterOnSurface")],r)}(p.PointOfInterest);r.Focus=f;var y=i.vec3f64.create(),O=i.vec3f64.create(),h=i.vec3f64.create(),v=i.vec3f64.create();r.default=f}));