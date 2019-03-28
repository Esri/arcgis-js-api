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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray"],function(e,i,t){var o=function(){function e(e,i){this.layerView=e,this.lodGlobalDirtyChanged=i}return e.prototype.startNodeLoading=function(e,i,t,o,r,l,n){this._lodGlobalDirty=!1,this._maxLodLevel=n.maxLodLevel,this._index=r,this._rootId=l,this._nodeTraversalState=t,this._isNodeVisible=e,this._isGeometryVisible=i,this._removeNodes=o,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e);return!!this.isChosenMaxLOD(i)||!!i.isChosen&&this._childrenRequireLoading(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapBundleLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||this.layerView.view&&this.layerView.view.resourceController.memoryController.usedMemory>1.1)},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(e){if(this.requiresLODGlobalHandling){var i=this._rootId,t=this.layerView.view.resourceController.memoryController.usedMemory,o=Math.max(0,Math.floor(10*(t-1)));r.clear(),this._lodGlobalHandlingRecursion(i,o),this._removeNodes(r,e),0===r.length&&(this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)),r.clear()}},e.prototype._lodGlobalHandlingRecursion=function(e,i){var t=this._index.getNode(e);if(null==t)return!1;var o=this._nodeTraversalState(t),l=this.isChosenMaxLOD(o),n=this.layerView.isNodeLoaded(t);if(n&&null!=this.layerView.setPolygonOffset){var s=!l;this.layerView.setPolygonOffset(t,s)}if(l&&n)return this._removeChildrenRecursive(t),!0;var a=!1;if(null!=t.children&&0!==t.children.length){a=!0;for(var d=0,h=t.children;d<h.length;d++){var u=h[d],y=this._index.getNode(u.id);(y?this._isGeometryVisible(y):this._isNodeVisible(u))&&!this._lodGlobalHandlingRecursion(u.id,i)&&(a=!1)}}n&&!l&&(a||r.length<i)&&(r.push(t),n=!1);var _=!t.featureData||0===t.featureData.length;return a||n||_},e.prototype._removeChildrenRecursive=function(e){this._index.traverseChildren(e,function(e){return r.push(e),!0})},e.prototype.childrenEmpty=function(e){var i=this,t=!0;return this._index.traverseChildren(e,function(e){return!(!t||!i._isNodeVisible(e))&&(!i.layerView.isNodeLoaded(e)||(t=!1,!1))}),t},e.prototype._childrenRequireLoading=function(e){var i=this,t=!1,o=!0;return this._index.traverseChildren(e,function(e){if(!o||!i._isNodeVisible(e))return!1;var r=i._nodeTraversalState(e);return i.isChosenMaxLOD(r)&&i._isGeometryVisible(e)&&(t=!0),!i.layerView.isNodeLoaded(e)||(o=!1,!1)}),o&&t},e.prototype.isChosenMaxLOD=function(e){return e.isChosen&&(!e.nodeHasLOD||e.lodLevel===this._maxLodLevel)},e}(),r=new t;return o});