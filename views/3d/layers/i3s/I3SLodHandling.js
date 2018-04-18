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

define(["require","exports"],function(e,i){return function(){function e(e,i,t){this.layerViewRequiredFunctions=e,this.layerViewOptionalFunctions=i,this.lodGlobalDirtyChanged=t}return e.prototype.startNodeLoading=function(e,i,t,o,r,l){this._lodGlobalDirty=!1,this._maxLodLevel=l.maxLodLevel,this._nodeIndex=o,this._rootId=r,this._nodeTraversalState=t,this._isNodeVisible=e,this._isGeometryVisible=i,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e.id);return!!i.isChosen&&(i.lodLevel===this._maxLodLevel||this.childrenEmpty(e))},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.lodSwapBundleLoaded=function(e){this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||this.layerViewRequiredFunctions.getMemoryUsage()>1.1)},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,i=this.layerViewRequiredFunctions.getMemoryUsage(),t=Math.max(0,Math.floor(10*(i-1)));this._lodGlobalHandlingRecursion(e,{removeNodes:t}),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,i){var t=this._nodeIndex[e];if(null==t)return!1;var o=this._nodeTraversalState(e),r=o.isChosen&&(!o.nodeHasLOD||o.lodLevel===this._maxLodLevel),l=this.layerViewRequiredFunctions.isBundleLoaded(t);if(l&&null!=this.layerViewOptionalFunctions.setPolygonOffset){var n=!r;this.layerViewOptionalFunctions.setPolygonOffset(t,n)}if(r&&l)return this._removeChildrenRecursive(t),!0;var s=!1;if(null!=t.children&&0!==t.children.length){s=!0;for(var d=0,a=t.children;d<a.length;d++){var h=a[d],u=this._nodeIndex[h.id];if(u?this._isGeometryVisible(u):this._isNodeVisible(h)){var y=this._lodGlobalHandlingRecursion(h.id,i);s=s&&y}}}l&&!r&&(s||i.removeNodes>0)&&(this.layerViewRequiredFunctions.removeNodeData(t),i.removeNodes--,l=!1);var c=!t.featureData||0===t.featureData.length;return s||l||c},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var i=0,t=e.children;i<t.length;i++){var o=t[i],r=this._nodeIndex[o.id];null!=r&&(this._removeChildrenRecursive(r),this.layerViewRequiredFunctions.removeNodeData(r))}},e.prototype._subtreeEmpty=function(e){return!this.layerViewRequiredFunctions.isBundleLoaded(e)&&this.childrenEmpty(e)},e.prototype.childrenEmpty=function(e){if(null==e.children)return!0;for(var i=0,t=e.children;i<t.length;i++){var o=t[i];if(this._isNodeVisible(o)){var r=this._nodeIndex[o.id];if(null!=r&&!this._subtreeEmpty(r))return!1}}return!0},e}()});