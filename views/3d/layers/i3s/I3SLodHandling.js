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

define(["require","exports","../../../../core/PooledArray"],function(e,i,t){var o=function(){function e(e,i){this.layerView=e,this.lodGlobalDirtyChanged=i}return e.prototype.startNodeLoading=function(e,i,t,o,r,n,l){this._lodGlobalDirty=!1,this._maxLodLevel=l.maxLodLevel,this._index=n,this._nodeTraversalState=o,this._isNodeVisible=e,this._isGeometryVisible=i,this._isNodeInScaleBounds=t,this._removeNodes=r,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e);return!!this.isChosenMaxLOD(i)||!!i.isChosen&&this._childrenRequireLoading(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapNodeLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(e){if(this.requiresLODGlobalHandling){var i=this.layerView.view.resourceController.memoryController.usedMemory,t=Math.max(0,Math.floor(10*(i-1)));r.clear(),this._lodGlobalHandlingRecursion(this._index.rootNode,t),this._removeNodes(r,e),0===r.length&&(this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)),r.clear()}},e.prototype._lodGlobalHandlingRecursion=function(e,i){if(null==e)return!1;var t=this._nodeTraversalState(e),o=this.isChosenMaxLOD(t),n=this.layerView.isNodeLoaded(e.index);if(n&&null!=this.layerView.updateNodeStatus&&this.layerView.updateNodeStatus(e.index,o?"leaf":"hole"),o&&n)return this._removeChildrenRecursive(e),!0;var l=!1;if(e.childCount>0){l=!0;for(var s=0;s<e.childCount;s++){var d=this._index.getChildIndex(e,s),a=this._index.getNode(d);if(a){!(!this._isGeometryVisible(d)||this._lodGlobalHandlingRecursion(a,i))&&this._isNodeInScaleBounds(a)&&(l=!1)}else this._isNodeVisible(d)&&(l=!1)}}n&&!o&&(l||r.length<i)&&(r.push(e.index),n=!1);var h=!e.resources.hasFeatureData;return l||n||h},e.prototype._removeChildrenRecursive=function(e){this._index.traverseChildren(e,function(e){return r.push(e.index),!0})},e.prototype.childrenEmpty=function(e){var i=this,t=!0;return this._index.traverseChildren(e,function(e){return!(!t||!i._isNodeVisible(e.index))&&(!i.layerView.isNodeLoaded(e.index)||(t=!1,!1))}),t},e.prototype._childrenRequireLoading=function(e){var i=this,t=!1,o=!0;return this._index.traverseChildren(e,function(e){if(!o||!i._isNodeVisible(e.index))return!1;var r=i._nodeTraversalState(e);return i.isChosenMaxLOD(r)&&i._isGeometryVisible(e.index)&&(t=!0),!i.layerView.isNodeLoaded(e.index)||(o=!1,!1)}),o&&t},e.prototype.isChosenMaxLOD=function(e){return e.isChosen&&(!e.nodeHasLOD||e.lodLevel===this._maxLodLevel)},e}(),r=new t({deallocator:null});return o});