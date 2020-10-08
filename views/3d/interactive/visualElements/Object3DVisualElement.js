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

define(["require","exports","tslib","../../../../core/maybe","./VisualElement","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Layer","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Texture"],(function(e,t,r,s,o,i,n,c,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Object3DVisualElement=void 0;var a=function(e){function t(t){var r=e.call(this,t)||this;return r._resources=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"object",{get:function(){return s.isSome(this._resources)?this._resources.object:null},enumerable:!1,configurable:!0}),t.prototype.recreate=function(){this.attached&&this.createResources()},t.prototype.recreateGeometry=function(){if(!s.isNone(this._resources)){var e=this._resources.object,t=this.view._stage;e.geometries.forEach((function(e){t.remove(2,e.id)})),e.removeAllGeometries(),this.createGeometries(e),e.geometries.forEach((function(e){t.add(2,e)}))}},t.prototype.createResources=function(){var e=this;this.destroyResources();var t=this.view._stage;if(t){var r=new n("element",{isPickable:!1});t.add(0,r),t.addToViewContent([r.id]);var s=new c({idHint:"element",castShadow:!1});this.createExternalResources(),this.createGeometries(s),s.geometries.forEach((function(e){t.add(2,e)})),this.forEachExternalResource((function(r){t.add(e._contentTypeFromResource(r),r)})),t.add(1,s),r.addObject(s),this.visible||s.setVisible(!1),this._resources={layer:r,object:s}}},t.prototype._contentTypeFromResource=function(e){return e instanceof i?2:e instanceof u?4:3},t.prototype.destroyResources=function(){var e=this;if(!s.isNone(this._resources)){var t=this.view._stage;t.remove(1,this._resources.object.id),t.remove(0,this._resources.layer.id),this.forEachExternalResource((function(r){t.remove(e._contentTypeFromResource(r),r.id),r.dispose()})),this._resources.object.geometries.forEach((function(e){t.remove(2,e.id)})),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null}},t.prototype.updateVisibility=function(e){s.isNone(this._resources)||this._resources.object.setVisible(e)},t}(o.VisualElement);t.Object3DVisualElement=a}));