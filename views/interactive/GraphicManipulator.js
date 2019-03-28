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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/Accessor","../../core/Collection","../../core/Logger","../../core/accessorSupport/decorators","../../core/libs/gl-matrix-2/vec3","../../views/3d/support/projectionUtils","../3d/support/stack","../draw/support/drawUtils"],function(e,r,t,o,i,p,n,a,s,c,l,u){Object.defineProperty(r,"__esModule",{value:!0});var h=n.getLogger("esri.views.interactive.GraphicManipulator"),d=function(e){function r(r){var t=e.call(this)||this;return t.interactive=!0,t.selectable=!1,t.allowOverlap=!0,t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.active=!0,t._handlers=new p,t}return o(r,e),Object.defineProperty(r.prototype,"graphic",{get:function(){return this._get("graphic")},set:function(e){if(e.geometry&&"mesh"===e.geometry.type)return void h.error("Mesh geometries are not supported");this._set("graphic",e)},enumerable:!0,configurable:!0}),r.prototype.destroy=function(){this._handlers.removeAll(),this._handlers=null,this._set("view",null)},r.prototype.intersectionDistance=function(e){if(!this.active)return null;var r=this.view.toMap(e,{include:[this.graphic]});if(!r)return null;var t=l.sv3d.get();return this.view.renderCoordsHelper.toRenderCoords(r,t)?s.vec3.distance(t,this.view.state.camera.eye):null},r.prototype.attemptDragTo=function(e,r){if(null==this.graphic.geometry)return!1;if("mesh"===this.graphic.geometry.type)return!1;var t=this.view.toMap(r.previous),o=this.view.toMap(e.screenPoint),i=e.screenPoint.x-r.previous.x,p=e.screenPoint.y-r.previous.y,n=0,a=0;if(!t||!o)return!1;var s=[0,0,0,0,0,0];if(c.bufferToBuffer([t.x,t.y,0,o.x,o.y,0],t.spatialReference,0,s,this.graphic.geometry.spatialReference,0,2),n=s[3]-s[0],a=s[4]-s[1],0===n&&0===a)return!0;this.graphic.geometry=u.move(this.graphic.geometry.clone(),n,a);var l={screenPoint:e.screenPoint,dxMap:n,dyMap:a,dx:i,dy:p};return this._handlers.forEach(function(e){var r=e.type,t=e.handler;"drag"===r&&t(l)}),!0},r.prototype.click=function(e){this._handlers.forEach(function(r){"click"===r.type&&r.handler(e)})},r.prototype.on=function(e,r){this._handlers.push({type:e,handler:r})},t([a.property({constructOnly:!0,nonNullable:!0})],r.prototype,"graphic",null),t([a.property({constructOnly:!0,nonNullable:!0})],r.prototype,"view",void 0),t([a.property()],r.prototype,"interactive",void 0),t([a.property()],r.prototype,"selectable",void 0),t([a.property()],r.prototype,"allowOverlap",void 0),t([a.property()],r.prototype,"grabbing",void 0),t([a.property()],r.prototype,"dragging",void 0),t([a.property()],r.prototype,"hovering",void 0),t([a.property()],r.prototype,"selected",void 0),t([a.property()],r.prototype,"active",void 0),r=t([a.subclass("esri.views.interactive.GraphicManipulator")],r)}(a.declared(i));r.GraphicManipulator=d});