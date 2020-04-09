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

define(["require","exports","../../../../core/PooledArray"],(function(e,i,t){var r=function(){function e(e){this.layerView=e,this._lodGlobalDirty=!1}return e.prototype.startNodeLoading=function(e,i,t,r,o,n,s){this._maxLodLevel=s.maxLodLevel,this._index=n,this._nodeTraversalState=r,this._isNodeVisible=e,this._isGeometryVisible=i,this._isNodeInScaleBounds=t,this._removeNodes=o},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e);return!!this.isChosenMaxLOD(i)||!!i.isChosen&&this._childrenRequireLoading(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(e){if(!this.requiresLODGlobalHandling)return!1;var i=this.layerView.view.resourceController.memoryController.usedMemory,t=Math.max(0,Math.floor(10*(i-1)));o.clear(),this._lodGlobalHandlingRecursion(this._index.rootNode,t);var r=o.length;this._removeNodes(o,e);var n=o.length<r;return 0===o.length&&(this._lodGlobalDirty=!1),o.clear(),n},e.prototype._lodGlobalHandlingRecursion=function(e,i){if(null==e)return!1;var t=this._nodeTraversalState(e),r=this.isChosenMaxLOD(t),n=this.layerView.isNodeLoaded(e.index);if(n&&null!=this.layerView.updateNodeStatus&&this.layerView.updateNodeStatus(e.index,r?"leaf":"hole"),r&&n)return this._removeChildrenRecursive(e),!0;var s=!1;if(e.childCount>0){s=!0;for(var l=0;l<e.childCount;l++){var d=this._index.getChildIndex(e,l),a=this._index.getNode(d);if(a)!(!this._isGeometryVisible(d)||this._lodGlobalHandlingRecursion(a,i))&&this._isNodeInScaleBounds(a)&&(s=!1);else this._isNodeVisible(d)&&(s=!1)}}n&&!r&&(s||o.length<i)&&(o.push(e.index),n=!1);var h=!e.resources.hasFeatureData;return s||n||h},e.prototype._removeChildrenRecursive=function(e){this._index.traverseChildren(e,(function(e){return o.push(e.index),!0}))},e.prototype.childrenEmpty=function(e){var i=this,t=!0;return this._index.traverseChildren(e,(function(e){return!(!t||!i._isNodeVisible(e.index))&&(!i.layerView.isNodeLoaded(e.index)||(t=!1,!1))})),t},e.prototype._childrenRequireLoading=function(e){var i=this,t=!1,r=!0;return this._index.traverseChildren(e,(function(e){if(!r||!i._isNodeVisible(e.index))return!1;var o=i._nodeTraversalState(e);return i.isChosenMaxLOD(o)&&i._isGeometryVisible(e.index)&&(t=!0),!i.layerView.isNodeLoaded(e.index)||(r=!1,!1)})),r&&t},e.prototype.isChosenMaxLOD=function(e){return e.isChosen&&(!e.nodeHasLOD||e.lodLevel===this._maxLodLevel)},e}(),o=new t({deallocator:null});return r}));