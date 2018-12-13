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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray"],function(e,i,r){var l=function(){function e(e,i){this.layerView=e,this.lodGlobalDirtyChanged=i}return e.prototype.startNodeLoading=function(e,i,r,l,o,t){this._lodGlobalDirty=!1,this._maxLodLevel=t.maxLodLevel,this._nodeIndex=l,this._rootId=o,this._nodeTraversalState=r,this._isNodeVisible=e,this._isGeometryVisible=i,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e);return!!i.isChosen&&(i.lodLevel===this._maxLodLevel||this._childrenRequireLoading(e))},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapBundleLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||this.layerView.view.resourceController.usedMemory>1.1)},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,i=this.layerView.view.resourceController.usedMemory,r=Math.max(0,Math.floor(10*(i-1)));o.clear(),this._lodGlobalHandlingRecursion(e,r),this.layerView.removeNodeData(o),o.clear(),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,i){var r=this._nodeIndex[e];if(null==r)return!1;var l=this._nodeTraversalState(r),t=l.isChosen&&(!l.nodeHasLOD||l.lodLevel===this._maxLodLevel),n=this.layerView.isNodeLoaded(r);if(n&&null!=this.layerView.setPolygonOffset){var d=!t;this.layerView.setPolygonOffset(r,d)}if(t&&n)return this._removeChildrenRecursive(r),!0;var a=!1;if(null!=r.children&&0!==r.children.length){a=!0;for(var s=0,h=r.children;s<h.length;s++){var u=h[s],v=this._nodeIndex[u.id];if(v?this._isGeometryVisible(v):this._isNodeVisible(u)){var f=this._lodGlobalHandlingRecursion(u.id,i);a=a&&f}}}n&&!t&&(a||o.length<i)&&(o.push(r),n=!1);var y=!r.featureData||0===r.featureData.length;return a||n||y},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var i=0,r=e.children;i<r.length;i++){var l=r[i],t=this._nodeIndex[l.id];null!=t&&(this._removeChildrenRecursive(t),o.push(t))}},e.prototype.childrenEmpty=function(e){if(null==e.children)return!0;for(var i=0,r=e.children;i<r.length;i++){var l=r[i];if(this._isNodeVisible(l)){var o=this._nodeIndex[l.id];if(null!=o&&(this.layerView.isNodeLoaded(o)||!this.childrenEmpty(o)))return!1}}return!0},e.prototype._childrenRequireLoading=function(e){var i=this,r={finalInvisible:!0},l=function(e,r){var o=i._nodeTraversalState(e);if(o.isChosen&&(0===o.lodLevel||o.lodLevel===i._maxLodLevel)&&i._isGeometryVisible(e)&&(r.finalInvisible=!1),null==e.children)return!0;for(var t=0,n=e.children;t<n.length;t++){var d=n[t];if(i._isNodeVisible(d)){var a=i._nodeIndex[d.id];if(null!=a&&(i.layerView.isNodeLoaded(a)||!l(a,r)))return!1}}return!0};return!!l(e,r)&&!r.finalInvisible},e}(),o=new r;return l});