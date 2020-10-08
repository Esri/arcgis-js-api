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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/mathUtils","../../../../core/maybe","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","../debugFlags","../debugUtils","../geometryUtils","../PropertiesPool","./PointOfInterest"],(function(e,r,t,o,n,c,a,i,s,u,d,l,p,f,y){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.setupFocusDebugGraphic=r.Focus=void 0;var O=Array,h=function(e){function r(r){var t=e.call(this,r)||this;return t._propertiesPool=new f.default({locationOnSurface:u,renderLocationOnSurface:O},t),t.centerOnSurface=null,t}return t.__extends(r,e),r.prototype.destroy=function(){this._propertiesPool.destroy(),this._propertiesPool=null,n.isSome(v)&&(v.remove(),v=null)},Object.defineProperty(r.prototype,"locationOnSurface",{get:function(){var e=this._propertiesPool.get("locationOnSurface");return this.renderCoordsHelper.fromRenderCoords(this.renderLocationOnSurface,e,this.state.spatialReference),e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"renderLocationOnSurface",{get:function(){var e=this.centerOnSurface.renderLocation,r=this.renderCoordsHelper,t=this.calculateScreenHorizontalEdgeOnSurface(P);i.vec3.subtract(S,e,this.state.camera.eye),i.vec3.normalize(S,S),r.worldUpAtPosition(e,g);var c=Math.abs(Math.acos(i.vec3.dot(g,S))-.5*Math.PI),a=this._propertiesPool.get("renderLocationOnSurface"),s=1-o.clamp(c/(.5*Math.PI),0,1),u=s*s*s;return i.vec3.lerp(a,e,t,u),n.isSome(v)&&(d.SHOW_POI?v.showPoint(a,this.renderCoordsHelper.spatialReference):v.remove()),a},enumerable:!1,configurable:!0}),r.prototype.calculateScreenHorizontalEdgeOnSurface=function(e){var r=this.state.camera,t=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation),o=this.renderCoordsHelper.getAltitude(r.eye)>=t,n=r.getRenderCenter(c.createRenderScreenPointArray3());n[1]=o?r.padding[2]:r.fullHeight-r.padding[0],r.unprojectPoint(n,m),i.vec3.subtract(m,m,r.eye);var a=i.vec3.normalize(m,m);return this.renderCoordsHelper.intersectManifold(p.ray.wrap(r.eye,a),t,e)?e:(i.vec3.copy(e,r.eye),this.renderCoordsHelper.setAltitude(t,e),e)},r.prototype.updateRenderLocation=function(){},t.__decorate([a.property({constructOnly:!0})],r.prototype,"centerOnSurface",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["renderLocationOnSurface"]})],r.prototype,"locationOnSurface",null),t.__decorate([a.property({readOnly:!0,dependsOn:["centerOnSurface.renderLocation"]})],r.prototype,"renderLocationOnSurface",null),t.__decorate([a.property({readOnly:!0,aliasOf:"centerOnSurface.updating"})],r.prototype,"updating",void 0),r=t.__decorate([a.subclass("esri.views.3d.support.CenterOnSurface")],r)}(y.PointOfInterest);r.Focus=h,r.setupFocusDebugGraphic=function(e){n.isSome(v)&&v.remove(),v=new l.GraphicsHandle(e,"green")};var v,S=s.vec3f64.create(),g=s.vec3f64.create(),m=s.vec3f64.create(),P=s.vec3f64.create();r.default=h}));