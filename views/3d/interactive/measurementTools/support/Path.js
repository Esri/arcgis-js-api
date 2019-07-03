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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/accessorSupport/decorators"],function(e,t,r,o,i,n,s,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.vertices=new n,t}return r(t,e),Object.defineProperty(t.prototype,"front",{get:function(){return this.vertices.items[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"back",{get:function(){return this.vertices.items[this.vertices.length-1]||null},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this.vertices.removeAll(),this.emit("cleared",{}),this._notifyFrontBack()},t.prototype.vertex=function(e){return this.vertices.items[e]},t.prototype.add=function(e){this.vertices.add(e);var t=this.vertices.length-1;return this._notifyFrontBack(),this.emit("vertex-added",{index:t}),t},t.prototype.insert=function(e,t){return this.vertices.splice(e,0,t),this._notifyFrontBack(),this.emit("vertex-inserted",{index:e}),e},t.prototype.remove=function(e){this.vertices.removeAt(e),this._notifyFrontBack(),this.emit("vertex-removed",{index:e})},t.prototype.update=function(e,t){null!=t&&(this.vertices.splice(e,1,t),this._notifyFrontBack()),this.emit("vertex-updated",{index:e})},t.prototype._notifyFrontBack=function(){this.notifyChange("front"),this.notifyChange("back")},o([c.property({readOnly:!0})],t.prototype,"vertices",void 0),o([c.property({aliasOf:"vertices.length"})],t.prototype,"length",void 0),o([c.property({readOnly:!0})],t.prototype,"front",null),o([c.property({readOnly:!0})],t.prototype,"back",null),t=o([c.subclass("esri.views.3d.interactive.measurementTools.support.Path")],t)}(c.declared(i,s))});