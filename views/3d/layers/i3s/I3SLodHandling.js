// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(e,i){var t=function(){function e(e,i,t){this.layerViewRequiredFunctions=e,this.layerViewOptionalFunctions=i,this.lodGlobalDirtyChanged=t}return e.prototype.startNodeLoading=function(e,i,t,r,o){this._lodGlobalDirty=!1,this._lodMode=o.mode,this._allowPartialOverlaps=o.allowPartialOverlaps,this._nodeIndex=t,this._rootId=r,this._nodeTraversalState=i,this._nodeIsVisible=e,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e.id),t=i.nodeHasLOD,r=i.isChosenLOD;return"perLevel"!==this._lodMode?r||!t:r||!t?!0:this._allowPartialOverlaps?!this._subtreeComplete(e):this._subtreeEmpty(e)},e.prototype.shouldSetPolygonOffset=function(e){return"perLevel"===this._lodMode?!this._nodeTraversalState(e.id).isChosenLOD:!1},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.finishedLevel=function(e){"perLevel"===this._lodMode&&this._removeUpToLevelRecursive(this._nodeIndex[this._rootId],e-1)},e.prototype.lodSwapBundleLoaded=function(e){"perLevel"===this._lodMode?this._nodeTraversalState(e.id).isChosenLOD&&this._removeChildrenRecursive(e):this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return"global"===this._lodMode&&null!=this._rootId&&(this._lodGlobalDirty===!0||this.layerViewRequiredFunctions.isOverMemory())},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,i=this.layerViewRequiredFunctions.isOverMemory();this._lodGlobalHandlingRecursion(e,!1,i),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,i,t){var r=this._nodeIndex[e];if(null==r)return!1;var o=this._nodeTraversalState(e).isChosenLOD,l=this.layerViewRequiredFunctions.isBundleAlreadyAddedToStage(r,0);if(l&&null!=this.layerViewOptionalFunctions.setPolygonOffset){var n=!o;this.layerViewOptionalFunctions.setPolygonOffset(r,n)}if(o&&l)return this._removeChildrenRecursive(r),!0;var s=!1;if(null!=r.children&&0!==r.children.length){s=!0;for(var d=0,a=r.children;d<a.length;d++){var h=a[d];if(this._nodeIsVisible(h)){var u=this._lodGlobalHandlingRecursion(h.id,l||i,t);s=s&&u}}}return l&&!o&&(i||s||t)&&(this.layerViewRequiredFunctions.removeNodeData(r),l=!1),s||l},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var i=0,t=e.children;i<t.length;i++){var r=t[i],o=this._nodeIndex[r.id];null!=o&&(this._removeChildrenRecursive(o),this.layerViewRequiredFunctions.removeNodeData(o))}},e.prototype._removeUpToLevelRecursive=function(e,i){if(!(null==e||0>i)&&(this._nodeTraversalState(e.id).isChosenLOD||this.layerViewRequiredFunctions.removeNodeData(e),null!=e.children))for(var t=0,r=e.children;t<r.length;t++){var o=r[t];this._removeUpToLevelRecursive(this._nodeIndex[o.id],i-1)}},e.prototype._subtreeEmpty=function(e){if(this.layerViewRequiredFunctions.areAllBundlesLoaded(e))return!1;if(null==e.children)return!0;for(var i=0,t=e.children;i<t.length;i++){var r=t[i];if(this._nodeIsVisible(r)){var o=this._nodeIndex[r.id];if(null!=o&&!this._subtreeEmpty(o))return!1}}return!0},e.prototype._subtreeComplete=function(e){if(this.layerViewRequiredFunctions.areAllBundlesLoaded(e))return!0;if(null==e.children||0===e.children.length)return!1;for(var i=0,t=e.children;i<t.length;i++){var r=t[i];if(this._nodeIsVisible(r)){var o=this._nodeIndex[r.id];if(null==o||!this._subtreeComplete(o))return!1}}return!0},e}();return t});