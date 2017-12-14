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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(e,i){var t=function(){function e(e,i,t){this.layerViewRequiredFunctions=e,this.layerViewOptionalFunctions=i,this.lodGlobalDirtyChanged=t}return e.prototype.startNodeLoading=function(e,i,t,o,l){this._lodGlobalDirty=!1,this._lodMode=l.mode,this._allowPartialOverlaps=l.allowPartialOverlaps,this._maxLodLevel=l.maxLodLevel,this._nodeIndex=t,this._rootId=o,this._nodeTraversalState=i,this._nodeIsVisible=e,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.shouldLoadNode=function(e){var i=this._nodeTraversalState(e.id);return"perLevel"!==this._lodMode?i.isChosen?i.lodLevel===this._maxLodLevel?!0:this._subtreeEmpty(e):!1:i.isChosen||!i.nodeHasLOD?!0:this._allowPartialOverlaps?!this._subtreeComplete(e):this._subtreeEmpty(e)},e.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0,this.lodGlobalDirtyChanged(this._lodGlobalDirty)},e.prototype.finishedLevel=function(e){"perLevel"===this._lodMode&&this._removeUpToLevelRecursive(this._nodeIndex[this._rootId],e-1)},e.prototype.lodSwapBundleLoaded=function(e){if("perLevel"===this._lodMode){var i=this._nodeTraversalState(e.id).isChosen;i&&this._removeChildrenRecursive(e),null!=this.layerViewOptionalFunctions.setPolygonOffset&&this.layerViewOptionalFunctions.setPolygonOffset(e,!i)}else this.setLodGlobalDirty()},Object.defineProperty(e.prototype,"requiresLODGlobalHandling",{get:function(){return"global"===this._lodMode&&null!=this._rootId&&(this._lodGlobalDirty===!0||this.layerViewRequiredFunctions.isOverMemory())},enumerable:!0,configurable:!0}),e.prototype.lodGlobalHandling=function(){if(this.requiresLODGlobalHandling){var e=this._rootId,i=this.layerViewRequiredFunctions.isOverMemory();this._lodGlobalHandlingRecursion(e,!1,i),this._lodGlobalDirty=!1,this.lodGlobalDirtyChanged(this._lodGlobalDirty)}},e.prototype._lodGlobalHandlingRecursion=function(e,i,t){var o=this._nodeIndex[e];if(null==o)return!1;var l=this._nodeTraversalState(e),r=l.isChosen&&(!l.nodeHasLOD||l.lodLevel===this._maxLodLevel),n=this.layerViewRequiredFunctions.isBundleAlreadyAddedToStage(o,0);if(n&&null!=this.layerViewOptionalFunctions.setPolygonOffset){var s=!r;this.layerViewOptionalFunctions.setPolygonOffset(o,s)}if(r&&n)return this._removeChildrenRecursive(o),!0;var d=!1;if(null!=o.children&&0!==o.children.length){d=!0;for(var a=0,h=o.children;a<h.length;a++){var u=h[a];if(this._nodeIsVisible(u)){var v=this._lodGlobalHandlingRecursion(u.id,n||i,t);d=d&&v}}}return n&&!r&&(i||d||t)&&(this.layerViewRequiredFunctions.removeNodeData(o),n=!1),d||n},e.prototype._removeChildrenRecursive=function(e){if(null!=e.children)for(var i=0,t=e.children;i<t.length;i++){var o=t[i],l=this._nodeIndex[o.id];null!=l&&(this._removeChildrenRecursive(l),this.layerViewRequiredFunctions.removeNodeData(l))}},e.prototype._removeUpToLevelRecursive=function(e,i){if(!(null==e||0>i)&&(this._nodeTraversalState(e.id).isChosen||this.layerViewRequiredFunctions.removeNodeData(e),null!=e.children))for(var t=0,o=e.children;t<o.length;t++){var l=o[t];this._removeUpToLevelRecursive(this._nodeIndex[l.id],i-1)}},e.prototype._subtreeEmpty=function(e){if(this.layerViewRequiredFunctions.areAllBundlesLoaded(e))return!1;if(null==e.children)return!0;for(var i=0,t=e.children;i<t.length;i++){var o=t[i];if(this._nodeIsVisible(o)){var l=this._nodeIndex[o.id];if(null!=l&&!this._subtreeEmpty(l))return!1}}return!0},e.prototype._subtreeComplete=function(e){if(this.layerViewRequiredFunctions.areAllBundlesLoaded(e))return!0;if(null==e.children||0===e.children.length)return!1;for(var i=0,t=e.children;i<t.length;i++){var o=t[i];if(this._nodeIsVisible(o)){var l=this._nodeIndex[o.id];if(null==l||!this._subtreeComplete(l))return!1}}return!0},e}();return t});