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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../geometry/Point","../../lib/glMatrix","../mathUtils","../PropertiesPool","./PointOfInterest"],function(e,r,t,n,o,a,c,i,d,s){Object.defineProperty(r,"__esModule",{value:!0});var p=Array,u=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new d.default({locationOnSurface:a,renderLocationOnSurface:p},t),t.centerOnSurface=null,t}return t(r,e),Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this.propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(h);c.vec3d.subtract(e,this.state.camera.eye,l),c.vec3d.normalize(l),r.worldUpAtPosition(e,f);var n=Math.abs(Math.acos(c.vec3d.dot(f,l))-.5*Math.PI),o=this.propertiesPool.get("renderLocationOnSurface"),a=1-i.clamp(n/(.5*Math.PI),0,1),d=a*a*a;return c.vec3d.lerp(e,t,d,o),o},enumerable:!0,configurable:!0}),r.prototype.update=function(e){},r.prototype.forceUpdate=function(){},r.prototype.hasPendingUpdates=function(){return this.centerOnSurface.hasPendingUpdates()},r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),n=this.renderCoordsHelper.getAltitude(r.eye),o=n>=t,a=o?r.padding[2]:r.fullHeight-r.padding[0];r.unprojectPoint([r.padding[3]+r.width/2,a,.5],O);var i=c.vec3d.normalize(c.vec3d.subtract(O,r.eye,O));return this.renderCoordsHelper.intersectManifold(r.eye,i,t,e)?e:(c.vec3d.set(r.eye,e),this.renderCoordsHelper.setAltitude(t,e),e)},n([o.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),n([o.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),n([o.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),r=n([o.subclass("esri.views.3d.support.CenterOnSurface")],r)}(o.declared(s.PointOfInterest));r.Focus=u;var l=c.vec3d.create(),f=c.vec3d.create(),O=c.vec3d.create(),h=c.vec3d.create();r.default=u});