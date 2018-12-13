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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/Point","../geometryUtils","../mathUtils","../PropertiesPool","./PointOfInterest"],function(e,r,t,o,n,a,c,i,p,s,d){Object.defineProperty(r,"__esModule",{value:!0});var u=Array,l=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new s.default({locationOnSurface:c,renderLocationOnSurface:u},t),t.centerOnSurface=null,t}return t(r,e),Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this.propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(h);a.vec3.subtract(f,e,this.state.camera.eye),a.vec3.normalize(f,f),r.worldUpAtPosition(e,O);var o=Math.abs(Math.acos(a.vec3.dot(O,f))-.5*Math.PI),n=this.propertiesPool.get("renderLocationOnSurface"),c=1-p.clamp(o/(.5*Math.PI),0,1),i=c*c*c;return a.vec3.lerp(n,e,t,i),n},enumerable:!0,configurable:!0}),r.prototype.update=function(e){},r.prototype.forceUpdate=function(){},r.prototype.hasPendingUpdates=function(){return this.centerOnSurface.hasPendingUpdates()},r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),o=this.renderCoordsHelper.getAltitude(r.eye),n=o>=t,c=n?r.padding[2]:r.fullHeight-r.padding[0];r.unprojectPoint([r.padding[3]+r.width/2,c,.5],y),a.vec3.subtract(y,y,r.eye);var p=a.vec3.normalize(y,y);return this.renderCoordsHelper.intersectManifold(i.ray.wrap(r.eye,p),t,e)?e:(a.vec3.copy(e,r.eye),this.renderCoordsHelper.setAltitude(t,e),e)},o([n.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),o([n.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),o([n.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),r=o([n.subclass("esri.views.3d.support.CenterOnSurface")],r)}(n.declared(d.PointOfInterest));r.Focus=l;var f=a.vec3f64.create(),O=a.vec3f64.create(),y=a.vec3f64.create(),h=a.vec3f64.create();r.default=l});