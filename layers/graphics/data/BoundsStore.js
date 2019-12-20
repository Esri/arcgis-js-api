// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/has","../../../core/libs/rbush/rbush","@dojo/framework/shim/Promise"],function(n,i,e,t){function d(n,i){return o.minX=i[0],o.minY=i[1],o.maxX=i[2],o.maxY=i[3],n.search(o)}Object.defineProperty(i,"__esModule",{value:!0});var o={minX:0,minY:0,maxX:0,maxY:0},s=function(){function n(){var n=this;this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=t(9,e("csp-restrictions")?function(n){return{minX:n[0],minY:n[1],maxX:n[2],maxY:n[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(n._indexInvalid){var i=new Array(n._idByBounds.size),e=0;n._idByBounds.forEach(function(n,t){i[e++]=t}),n._indexInvalid=!1,n._index.clear(),n._index.load(i)}else n._boundsToLoad.length&&(n._index.load(n._boundsToLoad.filter(function(i){return n._idByBounds.has(i)})),n._boundsToLoad.length=0)}}return n.prototype.clear=function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()},n.prototype.delete=function(n){var i=this._boundsById.get(n);this._boundsById.delete(n),i&&(this._idByBounds.delete(i),this._indexInvalid||this._index.remove(i))},n.prototype.forEachInBounds=function(n,i){this._loadIndex();for(var e=0,t=d(this._index,n);e<t.length;e++){var o=t[e];i(this._idByBounds.get(o))}},n.prototype.get=function(n){return this._boundsById.get(n)},n.prototype.has=function(n){return this._boundsById.has(n)},n.prototype.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)},n.prototype.set=function(n,i){if(!this._indexInvalid){var e=this._boundsById.get(n);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(n,i),i&&(this._idByBounds.set(i,n),this._indexInvalid||this._boundsToLoad.push(i))},n}();i.BoundsStore=s});