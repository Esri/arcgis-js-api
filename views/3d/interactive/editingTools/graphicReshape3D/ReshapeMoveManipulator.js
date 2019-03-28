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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Accessor","../../../../../core/Collection","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../../../views/3d/layers/support/popupUtils3D","../../../../../views/3d/support/projectionUtils","../../../../../views/3d/support/stack"],function(e,r,t,o,i,p,n,s,a,c,l,y,d){Object.defineProperty(r,"__esModule",{value:!0});var v=function(e){function r(r){var t=e.call(this)||this;return t._handlers=new p,t.interactive=!0,t.selectable=!1,t.allowOverlap=!0,t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.active=!0,t}return o(r,e),r.prototype.initialize=function(){},r.prototype.destroy=function(){this._handlers.removeAll(),this._handlers=null,this._set("view",null)},r.prototype.intersectionDistance=function(e){if(!this.active||!this.reshapeHelper.geometry)return null;var r=l.intersectsDrapedGeometry(e,this.reshapeHelper.geometry,this.view);if(n.isNone(r))return null;var t=d.sv3d.get();return this.view.renderCoordsHelper.toRenderCoords(r,t)?a.vec3.distance(u,this.view.state.camera.eye):null},r.prototype.attemptDragTo=function(e,r){if(null==this.reshapeHelper.geometry)return!1;var t=this.view.toMap(r.previous),o=this.view.toMap(e.screenPoint),i=0,p=0,n=0,s=0,a=0,c=0;if(t&&o){var l=[0,0,0,0,0,0];y.bufferToBuffer([t.x,t.y,0,o.x,o.y,0],t.spatialReference,0,l,this.reshapeHelper.geometry.spatialReference,0,2),n=l[3]-l[0],s=l[4]-l[1],i=o.x-t.x,p=o.y-t.y,a=e.screenPoint.x-r.previous.x,c=e.screenPoint.y-r.previous.y}var d={screenPoint:e.screenPoint,dxMap:i,dyMap:p,dxGeometry:n,dyGeometry:s,dxScreen:a,dyScreen:c,toMS:o};return this._handlers.forEach(function(e){"drag"===e.type&&e.handler(d)}),!0},r.prototype.click=function(e){this._handlers.forEach(function(r){"click"===r.type&&r.handler(e)})},r.prototype.on=function(e,r){this._handlers.push({type:e,handler:r})},t([s.property()],r.prototype,"reshapeHelper",void 0),t([s.property({constructOnly:!0,nonNullable:!0})],r.prototype,"view",void 0),t([s.property()],r.prototype,"interactive",void 0),t([s.property()],r.prototype,"selectable",void 0),t([s.property()],r.prototype,"allowOverlap",void 0),t([s.property()],r.prototype,"grabbing",void 0),t([s.property()],r.prototype,"dragging",void 0),t([s.property()],r.prototype,"hovering",void 0),t([s.property()],r.prototype,"selected",void 0),t([s.property()],r.prototype,"active",void 0),r=t([s.subclass("esri.views.interactive.GeometryManipulator")],r)}(s.declared(i));r.ReshapeMoveManipulator=v;var u=c.vec3f64.create()});