// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Settings"],function(e,t,r){var o=function(){function e(e){this.createCamera=e,this.compared={sourceZoom:0,targetZoom:0,pan:0,rotate:0},this.settings={desiredScreenFlow:r.defaultSettings.desiredScreenFlow},this.source=e(),this.target=e()}return e.prototype.clone=function(){var t=new e(this.createCamera);return t.copyFrom(this),t},e.prototype.copyFrom=function(e){this.update(e.source,e.target,e.settings)},e.prototype.update=function(e,t,o){this.source!==e&&this.source.copyFrom(e),this.target!==t&&this.target.copyFrom(t),this.settings.desiredScreenFlow=null!=o.desiredScreenFlow?o.desiredScreenFlow:r.defaultSettings.desiredScreenFlow,this.compared=this.source.compareTo(this.target,this.compared),this.desiredPixelFlow=this.settings.desiredScreenFlow*this.target.size,this.halfWindowSize=this.target.size/2},e.prototype.halfWindowPanAtZoom=function(e){var t=this.target.pixelsPerPanAtZoom(e);return this.halfWindowSize/t},Object.defineProperty(e.prototype,"hasZoom",{get:function(){return Math.abs(this.compared.sourceZoom-this.compared.targetZoom)>1e-5},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasPan",{get:function(){return this.compared.pan>1e-9},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasRotate",{get:function(){return this.compared.rotate>1e-9},enumerable:!0,configurable:!0}),e}();t.Definition=o,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});