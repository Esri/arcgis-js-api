// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojox/gfx/matrix","./Shape","./svg"],function(t,e,i,r,h,n){var a=function(t){function e(){t.apply(this,arguments),this.children=[],this._batch=0}return i(e,t),e.prototype.openBatch=function(){return this._batch||(this.fragment=n._createFragment()),++this._batch,this},e.prototype.closeBatch=function(){return this._batch=this._batch>0?--this._batch:0,this.fragment&&!this._batch&&(this.rawNode.appendChild(this.fragment),this.fragment=null),this},e.prototype.add=function(t){if(this===t.getParent())return this;this.fragment?this.fragment.appendChild(t.rawNode):this.rawNode.appendChild(t.rawNode);var e=t.getParent();return e&&e.remove(t,!0),this.children.push(t),t._setParent(this,this._getRealMatrix()),t.setClip(t.clip),this},e.prototype.remove=function(t,e){if(void 0===e&&(e=!1),this!==t.getParent())return this;this.rawNode===t.rawNode.parentNode&&this.rawNode.removeChild(t.rawNode),this.fragment&&this.fragment===t.rawNode.parentNode&&this.fragment.removeChild(t.rawNode);for(var i=0;i<this.children.length;++i)if(this.children[i]===t){e||(t.parent=null,t.parentMatrix=null),this.children.splice(i,1);break}return this},e.prototype.clear=function(t){void 0===t&&(t=!1);for(var e=this.rawNode;e.lastChild;)e.removeChild(e.lastChild);var i=this.defNode;if(i){for(;i.lastChild;)i.removeChild(i.lastChild);e.appendChild(i)}for(var r,h=0;h<this.children.length;++h)r=this.children[h],r.parent=null,r.parentMatrix=null,t&&r.destroy();return this.children=[],this},e.prototype.getBoundingBox=function(){if(!this.children)return null;var t=null;return this.children.forEach(function(e){var i=e.getBoundingBox();if(i){var h=e.getTransform();h&&(i=r.multiplyRectangle(h,i)),t?(t.x=Math.min(t.x,i.x),t.y=Math.min(t.y,i.y),t.endX=Math.max(t.endX,i.x+i.width),t.endY=Math.max(t.endY,i.y+i.height)):t={x:i.x,y:i.y,endX:i.x+i.width,endY:i.y+i.height,width:0,height:0}}}),t&&(t.width=t.endX-t.x,t.height=t.endY-t.y),t},e.prototype._moveChildToFront=function(t){for(var e=0;e<this.children.length;++e)if(this.children[e]===t){this.children.splice(e,1),this.children.push(t);break}return this},e.prototype._moveChildToBack=function(t){for(var e=0;e<this.children.length;++e)if(this.children[e]===t){this.children.splice(e,1),this.children.unshift(t);break}return this},e}(h["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a});