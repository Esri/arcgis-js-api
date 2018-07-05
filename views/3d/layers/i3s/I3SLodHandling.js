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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray"],function(e,i,t){var o=function(){function e(e,i,t){this.layerViewRequiredFunctions=e,this.layerViewOptionalFunctions=i,this.lodGlobalDirtyChanged=t}return e.prototype.startNodeLoading=function(e,i,t,o,r,l){this._lodGlobalDirty=!1,this._maxLodLevel=l.maxLodLevel,this._nodeIndex=o,this._rootId=r,this._nodeTraversalState=t,this._isNodeVisible=e,this._isGeometryVisible=i,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e);return!!i.isChosen&&(i.lodLevel===this._maxLodLevel||this.childrenEmpty(e))},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapBundleLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||this.layerViewRequiredFunctions.getMemoryUsage()>1.1)},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,i=this.layerViewRequiredFunctions.getMemoryUsage(),t=Math.max(0,Math.floor(10*(i-1)));r.clear(),this._lodGlobalHandlingRecursion(e,t),this.layerViewRequiredFunctions.removeNodeData(r),r.clear(),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,i){var t=this._nodeIndex[e];if(null==t)return!1;var o=this._nodeTraversalState(t),l=o.isChosen&&(!o.nodeHasLOD||o.lodLevel===this._maxLodLevel),n=this.layerViewRequiredFunctions.isNodeLoaded(t);if(n&&null!=this.layerViewOptionalFunctions.setPolygonOffset){var s=!l;this.layerViewOptionalFunctions.setPolygonOffset(t,s)}if(l&&n)return this._removeChildrenRecursive(t),!0;var a=!1;if(null!=t.children&&0!==t.children.length){a=!0;for(var d=0,h=t.children;d<h.length;d++){var u=h[d],y=this._nodeIndex[u.id];if(y?this._isGeometryVisible(y):this._isNodeVisible(u)){var c=this._lodGlobalHandlingRecursion(u.id,i);a=a&&c}}}n&&!l&&(a||r.length<i)&&(r.push(t),n=!1);var f=!t.featureData||0===t.featureData.length;return a||n||f},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var i=0,t=e.children;i<t.length;i++){var o=t[i],l=this._nodeIndex[o.id];null!=l&&(this._removeChildrenRecursive(l),r.push(l))}},e.prototype._subtreeEmpty=function(e){return!this.layerViewRequiredFunctions.isNodeLoaded(e)&&this.childrenEmpty(e)},e.prototype.childrenEmpty=function(e){if(null==e.children)return!0;for(var i=0,t=e.children;i<t.length;i++){var o=t[i];if(this._isNodeVisible(o)){var r=this._nodeIndex[o.id];if(null!=r&&!this._subtreeEmpty(r))return!1}}return!0},e}(),r=new t;return o});