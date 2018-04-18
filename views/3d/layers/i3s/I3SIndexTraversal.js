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

define(["require","exports","../../../../core/urlUtils","./I3SUtil"],function(e,t,r,i){var n=["version","level","sharedResource","attributeData","geometryData","textureData","lodSelection"];return function(){function e(e,t,i,n,o,s,a,d){var l=this;this.rootId=i,this.progressiveLoadPenalty=n,this.nodeIndex=o,this.streamDataSupplier=s,this.viewportQueries=a,this.logger=d,this._dirty=!0,this.cancelled=!1,this._loadingNodes=new Set,this._pendingNodes=1,this._nodeTraversalState={},this._version=0,this._maxLodLevel=this.viewportQueries.maxLodLevel,this.rootUrl=r.makeAbsolute(t,e),this.traverseVisible(function(e){return l.nodeTraversalState(e.id),!0})}return e.prototype.requestReload=function(){this._dirty=!0,++this._version},e.prototype.update=function(e){var t=this;if(this.cancelled||!this._dirty)return!1;var r=function(e,r){t.nodeTraversalState(r.id)};return this._collectMissing(e).forEach(function(e,i){return t._loadNode(i,r)}),this._dirty=this._pendingNodes>0,this._dirty},e.prototype.cancel=function(){this.cancelled=!0},e.prototype.isLoading=function(){return this._dirty},e.prototype.getNumLoading=function(){return this._loadingNodes.size},e.prototype.getNumPending=function(){return this._pendingNodes},e.prototype.nodeTraversalState=function(e){var t=this._nodeTraversalState[e];if(null!=t&&t.version===this._version)return this._nodeTraversalState[e];var r=this.nodeIndex[e];if(null==r)return null;var i=null,n=0;if(null!=r.parentNode){if(null==(i=this.nodeIndex[r.parentNode.id]))return null;var o=this._nodeTraversalState[i.id];null!=o&&(n=o.lodLevel)}var s=this.viewportQueries.hasLOD(r),a=this.viewportQueries.getLodLevel(r),d=!s||a>n;return t?(t.lodLevel=a,t.isChosen=d,t.version=this._version,t):(this._nodeTraversalState[r.id]={nodeHasLOD:s,lodLevel:a,isChosen:d,version:this._version},this._nodeTraversalState[e])},e.prototype._loadNode=function(e,t){var i=this;this._loadingNodes.add(e.id);var o=r.makeAbsolute(e.href,e.baseUrl);this.streamDataSupplier.request(o,"json").then(function(e,r){var o=r,s={id:o.id,mbs:o.mbs,parentNode:o.parentNode,children:o.children,featureData:o.featureData};n.forEach(function(e){s[e]=o.hasOwnProperty(e)?o[e]:null}),i.nodeIndex[s.id]=s,s.baseUrl=e,t(e,s),i._loadingNodes.delete(s.id)},function(t){i.loadErrorCallback(o),i._loadingNodes.delete(e.id)})},e.prototype._collectMissing=function(e){var t=this,r=new Map;this._pendingNodes=0;var n=function(n,o){var s=n.id;if(t.nodeIndex[s])return!0;if(++t._pendingNodes,t._loadingNodes.has(s))return!0;var a=o?o.baseUrl:"";return i.buildTopNodeMap(r,e,{id:s,href:n.href,baseUrl:a},t.entryPriority(n)),!0};return this.traverseVisible(n),r},e.prototype.entryPriority=function(e){if(e.id===this.rootId)return 0;var t=0,r=this.nodeIndex[e.id];if(null!=r&&null!=r.parentNode){var i=this._nodeTraversalState[r.parentNode.id];null!=i&&(t=i.lodLevel)}var n=this.viewportQueries.distToPOI(e);return-n-t*(n+this.progressiveLoadPenalty)},e.prototype.traverseVisible=function(e){var t=this.nodeIndex[this.rootId];return this._traverse({id:this.rootId,mbs:t?t.mbs:null,href:this.rootUrl},e,null)},e.prototype._traverse=function(e,t,r){if(!t(e,r))return!1;var i=this.nodeIndex[e.id];if(!i)return!0;var n=this.nodeTraversalState(e.id);if(n.nodeHasLOD&&n.lodLevel===this._maxLodLevel)return!0;if(i.children)for(var o=0,s=i.children;o<s.length;o++){var a=s[o],d=this.nodeIndex[a.id];if(!d||d.children&&0!==d.children.length){if(this.viewportQueries.isNodeVisible(a)&&!this._traverse(a,t,i))return!1}else if(this.viewportQueries.isGeometryVisible(d)&&!t(a,i))return!1}return!0},e.prototype.loadErrorCallback=function(e){this.logger.warn("Error loading node: "+e)},e}()});