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

define(["require","exports","../../../../core/maybe","./DefaultVertexAttributeLocations","./IdGen"],(function(e,t,r,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.materialPredicate=t.Material=void 0;var s=function(){function e(t){this.supportsEdges=!1,this._visible=!0,this._renderOccluded=1,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=i.Default3D,this.id=e._idGen.gen(t)}return e.prototype.dispose=function(){},e.prototype.update=function(e){return!1},Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this.parametersChanged())},enumerable:!1,configurable:!0}),e.prototype.isVisibleInPass=function(e){return!0},Object.defineProperty(e.prototype,"renderOccluded",{get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this.parametersChanged())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"renderPriority",{get:function(){return this._renderPriority},set:function(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"insertOrder",{get:function(){return this._insertOrder},set:function(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vertexAttributeLocations",{get:function(){return this._vertexAttributeLocations},enumerable:!1,configurable:!0}),e.prototype.isVisible=function(){return this._visible},e.prototype.parametersChanged=function(){r.isSome(this.materialRepository)&&this.materialRepository.materialChanged(this)},e._idGen=new n.IdGen,e}();t.Material=s,t.materialPredicate=function(e,t){return e.isVisible()&&e.isVisibleInPass(t.pass)&&0!=(e.renderOccluded&t.renderOccludedMask)}}));