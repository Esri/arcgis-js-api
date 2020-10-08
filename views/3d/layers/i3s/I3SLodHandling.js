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

define(["require","exports","../../../../core/maybe","../../../../core/PooledArray"],(function(e,i,t,r){"use strict";var n=function(){function e(e){this.layerView=e,this._lodGlobalDirty=!1}return e.prototype.startNodeLoading=function(e,i,t,r){this._maxLodLevel=r.maxLodLevel,this._index=t,this._isNodeInScaleBounds=e,this._removeNodes=i},e.prototype.shouldLoadNode=function(e){if(t.isNone(e))return!1;var i=this._index.nodeTraversalState(e);return!!this.isChosenMaxLOD(i)||!!i.isChosen&&this._childrenRequireLoading(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!1,configurable:!0}),e.prototype.lodGlobalHandling=function(e){if(!this.requiresLODGlobalHandling)return!1;var i=this.layerView.view.resourceController.memoryController.usedMemory,t=Math.max(0,Math.floor(10*(i-1)));o.clear(),this._lodGlobalHandlingRecursion(this._index.rootNode,t);var r=o.length;this._removeNodes(o,e);var n=o.length<r;return 0===o.length&&(this._lodGlobalDirty=!1),o.clear(),n},e.prototype._lodGlobalHandlingRecursion=function(e,i){if(t.isNone(e))return!1;var r=this._index.nodeTraversalState(e),n=this.isChosenMaxLOD(r),d=this.layerView.isNodeLoaded(e.index);if(d){if(n)return this._removeChildrenRecursive(e),this.layerView.updateNodeState(e.index,1),this.layerView.fadeNode&&this.layerView.fadeNode(e.index,0),!0;this.layerView.updateNodeState(e.index,0)}var s=!1;if(e.childCount>0){s=!0;for(var l=0;l<e.childCount;l++){var a=this._index.getChildIndex(e,l),h=this._index.getNode(a);if(t.isSome(h))!(!this._index.isGeometryVisible(a)||this._lodGlobalHandlingRecursion(h,i))&&this._isNodeInScaleBounds(h)&&(s=!1);else this._index.isNodeVisible(a)&&(s=!1)}}d&&!n&&(s||o.length<i)&&(o.push(e.index),d=!1);var u=!e.resources.hasFeatureData;return s||d||u},e.prototype._removeChildrenRecursive=function(e){this._index.traverseChildren(e,(function(e){return o.push(e.index),!0}))},e.prototype.childrenEmpty=function(e){var i=this,t=!0;return this._index.traverseChildren(e,(function(e){return!(!t||!i._index.isNodeVisible(e.index))&&(!i.layerView.isNodeLoaded(e.index)||(t=!1,!1))})),t},e.prototype._childrenRequireLoading=function(e){var i=this,t=!1,r=!0;return this._index.traverseChildren(e,(function(e){if(!r||!i._index.isNodeVisible(e.index))return!1;var n=i._index.nodeTraversalState(e);return i.isChosenMaxLOD(n)&&i._index.isGeometryVisible(e.index)&&(t=!0),!i.layerView.isNodeLoaded(e.index)||(r=!1,!1)})),r&&t},e.prototype.isChosenMaxLOD=function(e){return e.isChosen&&(!e.nodeHasLOD||e.lodLevel===this._maxLodLevel)},e}(),o=new r({deallocator:null});return n}));