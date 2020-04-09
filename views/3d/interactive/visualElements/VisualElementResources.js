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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/watchUtils","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Layer","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Texture"],(function(e,r,t,s,o,i,c,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e){this.resourceFactory=e,this._resources=null,this._hidden=!1,this._attached=!1}return e.prototype.destroy=function(){this._destroyResources()},Object.defineProperty(e.prototype,"object",{get:function(){return t.isSome(this._resources)?this._resources.object:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"resources",{get:function(){return t.isSome(this._resources)?this._resources.external:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hidden",{get:function(){return this._hidden},set:function(e){e!==this._hidden&&(this._hidden=e,this._syncHidden())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"attached",{get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())},enumerable:!0,configurable:!0}),e.prototype.recreate=function(){this.attached&&this._createResources()},e.prototype.recreateGeometry=function(){if(this.resourceFactory.recreateGeometry){if(!t.isNone(this._resources)){var e=this._resources.object,r=this.resourceFactory.view._stage;this._resources.external.forEach((function(e){e instanceof o&&r.remove(2,e.id)})),e.removeAllGeometries();for(var s=0,i=this.resourceFactory.recreateGeometry(this._resources.external,e,this._resources.layer);s<i.length;s++){var c=i[s];r.add(2,c)}}}else this.recreate()},e.prototype._createOrDestroyResources=function(){this._attached?this._resources||this._createResources():this._destroyResources()},e.prototype._createResources=function(){var e=this;this._destroyResources();var r=this.resourceFactory.view._stage;if(r){var t=new i("element",{isPickable:!1});r.add(0,t),r.addToViewContent([t.id]);var o=new c({idHint:"element",castShadow:!1}),n=this.resourceFactory.createResources(o,t);n.forEach((function(t){r.add(e._contentTypeFromResource(t),t)})),r.add(1,o),t.addObject(o),this._hidden&&o.hide();var a=this.resourceFactory.cameraChanged?s.init(this.resourceFactory.view.state,"camera",(function(r){return e.resourceFactory.cameraChanged(r)})):null;this._resources={layer:t,object:o,external:n,cameraHandle:a}}},e.prototype._contentTypeFromResource=function(e){return e instanceof o?2:e instanceof n?4:3},e.prototype._destroyResources=function(){var e=this;if(!t.isNone(this._resources)){var r=this.resourceFactory.view._stage;r.remove(1,this._resources.object.id),r.remove(0,this._resources.layer.id),this._resources.external.forEach((function(t){r.remove(e._contentTypeFromResource(t),t.id),"dispose"in t&&t.dispose()})),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null}},e.prototype._syncHidden=function(){t.isNone(this._resources)||(this._hidden?this._resources.object.hide():this._resources.object.unhide())},e}();r.VisualElementResources=a}));