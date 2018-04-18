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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Evented","../../../core/accessorSupport/decorators"],function(r,t,o,e,n,i,p){return function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.history=[],t.redoHistory=[],t.view=null,t}return o(t,r),t.prototype.canUndo=function(){return this.history.length>0},t.prototype.canRedo=function(){return this.redoHistory.length>0},t.prototype.undo=function(){if(this.canUndo()){var r=this.history.pop();r.undo(),this.redoHistory.push(r)}},t.prototype.redo=function(){if(this.canRedo()){var r=this.redoHistory.pop();r.redo(),this.history.push(r)}},t.prototype.getCoordsFromScreenPoint=function(r){var t=this.view.toMap(r);return[t.x,t.y]},t.prototype.isDuplicateVertex=function(r,t){if(r.length){var o=r[r.length-1],e=o[0],n=o[1];return e===t[0]&&n===t[1]}return!1},e([p.property({readOnly:!0})],t.prototype,"history",void 0),e([p.property({readOnly:!0})],t.prototype,"redoHistory",void 0),e([p.property()],t.prototype,"view",void 0),t=e([p.subclass("esri.views.2d.draw.DrawAction")],t)}(p.declared(n,i))});