// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/mathUtils","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../geometryUtils","../PropertiesPool","./PointOfInterest"],function(e,r,t,o,n,c,a,i,s,p,l,d,u){Object.defineProperty(r,"__esModule",{value:!0});var f=Array,y=function(e){function r(r){var t=e.call(this,r)||this;return t.propertiesPool=new d.default({locationOnSurface:p,renderLocationOnSurface:f},t),t.centerOnSurface=null,t}return t(r,e),r.prototype.destroy=function(){this.propertiesPool.destroy(),this.propertiesPool=null},Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this.propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(S);i.vec3.subtract(O,e,this.state.camera.eye),i.vec3.normalize(O,O),r.worldUpAtPosition(e,h);var o=Math.abs(Math.acos(i.vec3.dot(h,O))-.5*Math.PI),c=this.propertiesPool.get("renderLocationOnSurface"),a=1-n.clamp(o/(.5*Math.PI),0,1),s=a*a*a;return i.vec3.lerp(c,e,t,s),c},enumerable:!0,configurable:!0}),r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),o=this.renderCoordsHelper.getAltitude(r.eye),n=o>=t,a=r.getRenderCenter(c.createRenderScreenPointArray3());a[1]=n?r.padding[2]:r.fullHeight-r.padding[0],r.unprojectPoint(a,v),i.vec3.subtract(v,v,r.eye);var s=i.vec3.normalize(v,v);return this.renderCoordsHelper.intersectManifold(l.ray.wrap(r.eye,s),t,e)?e:(i.vec3.copy(e,r.eye),this.renderCoordsHelper.setAltitude(t,e),e)},r.prototype.updateRenderLocation=function(){},o([a.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),o([a.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),o([a.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),o([a.property({readOnly:!0,aliasOf:"centerOnSurface.updating"})],r.prototype,"updating",void 0),r=o([a.subclass("esri.views.3d.support.CenterOnSurface")],r)}(a.declared(u.PointOfInterest));r.Focus=y;var O=s.vec3f64.create(),h=s.vec3f64.create(),v=s.vec3f64.create(),S=s.vec3f64.create();r.default=y});