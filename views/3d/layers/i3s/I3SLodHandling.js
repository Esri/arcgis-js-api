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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray"],function(e,t,i){var o=function(){function e(e,t){this.layerView=e,this.lodGlobalDirtyChanged=t}return e.prototype.startNodeLoading=function(e,t,i,o,r,l){this._lodGlobalDirty=!1,this._maxLodLevel=l.maxLodLevel,this._nodeIndex=o,this._rootId=r,this._nodeTraversalState=i,this._isNodeVisible=e,this._isGeometryVisible=t,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var t=this._nodeTraversalState(e);return!!t.isChosen&&(t.lodLevel===this._maxLodLevel||this.childrenEmpty(e))},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapBundleLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||this.layerView.view.resourceController.usedMemory>1.1)},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,t=this.layerView.view.resourceController.usedMemory,i=Math.max(0,Math.floor(10*(t-1)));r.clear(),this._lodGlobalHandlingRecursion(e,i),this.layerView.removeNodeData(r),r.clear(),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,t){var i=this._nodeIndex[e];if(null==i)return!1;var o=this._nodeTraversalState(i),l=o.isChosen&&(!o.nodeHasLOD||o.lodLevel===this._maxLodLevel),n=this.layerView.isNodeLoaded(i);if(n&&null!=this.layerView.setPolygonOffset){var s=!l;this.layerView.setPolygonOffset(i,s)}if(l&&n)return this._removeChildrenRecursive(i),!0;var d=!1;if(null!=i.children&&0!==i.children.length){d=!0;for(var a=0,h=i.children;a<h.length;a++){var u=h[a],y=this._nodeIndex[u.id];if(y?this._isGeometryVisible(y):this._isNodeVisible(u)){var c=this._lodGlobalHandlingRecursion(u.id,t);d=d&&c}}}n&&!l&&(d||r.length<t)&&(r.push(i),n=!1);var f=!i.featureData||0===i.featureData.length;return d||n||f},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var t=0,i=e.children;t<i.length;t++){var o=i[t],l=this._nodeIndex[o.id];null!=l&&(this._removeChildrenRecursive(l),r.push(l))}},e.prototype._subtreeEmpty=function(e){return!this.layerView.isNodeLoaded(e)&&this.childrenEmpty(e)},e.prototype.childrenEmpty=function(e){if(null==e.children)return!0;for(var t=0,i=e.children;t<i.length;t++){var o=i[t];if(this._isNodeVisible(o)){var r=this._nodeIndex[o.id];if(null!=r&&!this._subtreeEmpty(r))return!1}}return!0},e}(),r=new i;return o});