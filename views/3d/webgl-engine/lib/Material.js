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

define(["require","exports","./IdGen","./ModelContentType"],function(e,t,i,r){return function(){function e(t){this._parentStage=null,this._visible=!0,this._renderOccluded=!1,this._renderPriority=0,this.supportsEdges=!1,this.id=e._idGen.gen(t)}return Object.defineProperty(e.prototype,"parentStage",{get:function(){return this._parentStage},enumerable:!0,configurable:!0}),e.prototype.addParentStage=function(e){this._parentStage=e},e.prototype.removeParentStage=function(e){this._parentStage=null},Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderOccluded",{get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderPriority",{get:function(){return this._renderPriority},set:function(e){e!==this._renderPriority&&(this._renderPriority=e,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0}),e.prototype.isVisible=function(){return this._visible},e.prototype.notifyDirty=function(e){this.parentStage&&this.parentStage.notifyDirty(r.MATERIAL,this,e)},e._idGen=new i,e}()});