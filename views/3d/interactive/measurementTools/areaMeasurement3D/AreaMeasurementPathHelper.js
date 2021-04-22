/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../geometry/Point","../../../../../geometry","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/watchUtils","../../../../interactive/coordinateHelper","../../../../interactive/editGeometry/EditGeometry","../../../../interactive/editGeometry/operations/AppendVertex","../../../../interactive/editGeometry/operations/SetVertexPosition"],(function(e,t,i,o,n,r,s,m,h,d,l,c){"use strict";let a=function(e){function o(){var t;return(t=e.call(this)||this)._handles=new s,t._dirty=!0,t._model=null,t._view=null,t._version=0,t._internalGeometryChange=!1,t}t._inheritsLoose(o,e);var n=o.prototype;return n._initialize=function(e,t){this._handles.removeAll(),this._handles.add(m.init(e,"geometry",(()=>this._updateEditGeometryFromModelGeometry(e,t)),!0))},n._updateEditGeometryFromModelGeometry=function(e,t){this._version++,this._internalGeometryChange||(this._handles.remove("EditGeometry"),this._editGeometry=i.isSome(e.geometry)?d.EditGeometry.fromGeometry(e.geometry,t.viewingMode):new d.EditGeometry(h.createCoordinateHelper(!0,!1,t.spatialReference,t.viewingMode)),this.emit("clear",{type:"clear"}),this._handles.add(this._editGeometry.on("change",(t=>{this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.toPolygon():null,this._internalGeometryChange=!1})),"EditGeometry"))},n.getVertex=function(e){if(!this.initialized||0===this._editGeometry.components.length||0===this._editGeometry.components[0].vertices.length)return null;const t=this._editGeometry.components[0].vertices[0];let i=t;do{if(i.index===e)return i;i=i.right.right}while(i!==t&&null!=i);return null},n.getVertexPositionAsPoint=function(e){return this._editGeometry.coordinateHelper.createPoint(e.pos)},n.getVertexPositionAsPointFromIndex=function(e){return this._editGeometry.coordinateHelper.createPoint(this.getVertex(e).pos)},n.forEachVertex=function(e){this.initialized&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)},n.forEachVertexPosition=function(e){const t=this._editGeometry.coordinateHelper;this.forEachVertex(((i,o)=>{t.toPoint(i.pos,u),e(u,o)}))},n.clear=function(){i.isSome(this.model)&&(this.model.geometry=null)},n.add=function(e){if(!this.initialized)return null;0===this._editGeometry.components.length&&this._editGeometry.components.push(new d.Component(this._editGeometry));const t=new l.AppendVertex(this._editGeometry,this._editGeometry.components[0],this._editGeometry.coordinateHelper.fromPoint(e));return this._editGeometry.apply(t),this.emit("vertex-update",{type:"vertex-update"}),t},n.ensureContains=function(e,t=""){let i=!1;if(this._editGeometry.components.forEach((t=>{t.iterateVertices((t=>{t===e&&(i=!0)}))})),!i)throw new Error(`vertex doesnt exist ${t}`);return i},n.setVertexPosition=function(e,t){if(!this.initialized)return null;const i=new c.SetVertexPosition(this._editGeometry,e,this._editGeometry.coordinateHelper.fromPoint(t));return this._editGeometry.apply(i),this.emit("vertex-update",{type:"vertex-update"}),i},t._createClass(o,[{key:"model",get:function(){return this._model},set:function(e){this._model=e,i.isSome(this._model)&&i.isSome(this._view)&&this._initialize(this._model,this._view)}},{key:"view",get:function(){return this._view},set:function(e){this._view=e,i.isSome(this._model)&&i.isSome(this._view)&&this._initialize(this._model,this._view)}},{key:"initialized",get:function(){return i.isSome(this._model)&&i.isSome(this._view)}},{key:"version",get:function(){return this._version}},{key:"vertices",get:function(){const e=[];return this.forEachVertex((t=>{e.push(t)})),e}},{key:"numVertices",get:function(){return this.initialized&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}},{key:"lastPoint",get:function(){if(this.initialized&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(i.isSome(e))return this._editGeometry.coordinateHelper.createPoint(e.pos)}return null}}]),o}(r);const u=new o;e.Component=d.Component,e.Edge=d.Edge,e.EditGeometry=d.EditGeometry,e.Vertex=d.Vertex,e.AreaMeasurement3DPathHelper=a,Object.defineProperty(e,"__esModule",{value:!0})}));
