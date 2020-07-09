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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/PooledArray"],(function(e,i,t,r){var o=function(){function e(e){this.layerView=e,this._lodGlobalDirty=!1}return e.prototype.startNodeLoading=function(e,i,t,r,o,n,s){this._maxLodLevel=s.maxLodLevel,this._index=n,this._nodeTraversalState=r,this._isNodeVisible=e,this._isGeometryVisible=i,this._isNodeInScaleBounds=t,this._removeNodes=o},e.prototype.shouldLoadNode=function(e){if(t.isNone(e))return!1;var i=this._nodeTraversalState(e);return!!this.isChosenMaxLOD(i)||!!i.isChosen&&this._childrenRequireLoading(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(e){if(!this.requiresLODGlobalHandling)return!1;var i=this.layerView.view.resourceController.memoryController.usedMemory,t=Math.max(0,Math.floor(10*(i-1)));n.clear(),this._lodGlobalHandlingRecursion(this._index.rootNode,t);var r=n.length;this._removeNodes(n,e);var o=n.length<r;return 0===n.length&&(this._lodGlobalDirty=!1),n.clear(),o},e.prototype._lodGlobalHandlingRecursion=function(e,i){if(t.isNone(e))return!1;var r=this._nodeTraversalState(e),o=this.isChosenMaxLOD(r),s=this.layerView.isNodeLoaded(e.index);if(s){if(o)return this._removeChildrenRecursive(e),this.layerView.updateNodeState(e.index,1),!0;this.layerView.updateNodeState(e.index,0)}var l=!1;if(e.childCount>0){l=!0;for(var d=0;d<e.childCount;d++){var a=this._index.getChildIndex(e,d),h=this._index.getNode(a);if(t.isSome(h))!(!this._isGeometryVisible(a)||this._lodGlobalHandlingRecursion(h,i))&&this._isNodeInScaleBounds(h)&&(l=!1);else this._isNodeVisible(a)&&(l=!1)}}s&&!o&&(l||n.length<i)&&(n.push(e.index),s=!1);var u=!e.resources.hasFeatureData;return l||s||u},e.prototype._removeChildrenRecursive=function(e){this._index.traverseChildren(e,(function(e){return n.push(e.index),!0}))},e.prototype.childrenEmpty=function(e){var i=this,t=!0;return this._index.traverseChildren(e,(function(e){return!(!t||!i._isNodeVisible(e.index))&&(!i.layerView.isNodeLoaded(e.index)||(t=!1,!1))})),t},e.prototype._childrenRequireLoading=function(e){var i=this,t=!1,r=!0;return this._index.traverseChildren(e,(function(e){if(!r||!i._isNodeVisible(e.index))return!1;var o=i._nodeTraversalState(e);return i.isChosenMaxLOD(o)&&i._isGeometryVisible(e.index)&&(t=!0),!i.layerView.isNodeLoaded(e.index)||(r=!1,!1)})),r&&t},e.prototype.isChosenMaxLOD=function(e){return e.isChosen&&(!e.nodeHasLOD||e.lodLevel===this._maxLodLevel)},e}(),n=new r({deallocator:null});return o}));