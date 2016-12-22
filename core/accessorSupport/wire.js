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

define(["require","exports","./utils"],function(t,r,i){function e(t,r){return t.chain?new h(t,r):new p(t,r)}function n(t,r){var e=i.splitPath(t);if(Array.isArray(e)){for(var n=[],o=0,p=e;o<p.length;o++){var h=p[o];n.push(new s(h,r))}return function(t){for(var r=[],i=0,e=n.length;e>i;i++)r[i]=n[i].install(t);return new a(r)}}var c=new s(e,r);return function(t){return new u(c.install(t))}}function o(t,r,e){var n=i.splitPath(r);if(Array.isArray(n)){for(var o=[],p=0,h=n;p<h.length;p++){var c=h[p];o.push(new s(c,e).install(t))}return new a(o)}var f=new s(n,e).install(t);return new u(f)}var s=function(){function t(t,r){return this.path=t,this.callback=r,this.chain=null,this.path=t,t.indexOf(".")>-1&&(this.chain=i.pathToArray(t)),this.callback=r,this}return t.prototype.install=function(t){return e(this,t)},t.prototype.notify=function(t){this.callback(t,this.path)},t}(),p=function(){function t(t,r){this.binding=t,this.target=r,i.getProperties(r).addCursor(this.binding.path,this)}return t.prototype.destroy=function(){this.target&&(i.getProperties(this.target).removeCursor(this.binding.path,this),this.target=this.binding=null)},t.prototype.propertyDestroyed=function(t,r){i.getProperties(this.target).removeCursor(r,this)},t.prototype.propertyInvalidated=function(t,r){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,r){this.binding&&this.binding.notify(this.target)},t}(),h=function(){function t(t,r){return this.binding=t,this.target=r,this.stack=[],this.properties=i.getProperties(r),this.stack.push({properties:this.properties,propertyName:t.chain[0]}),this.properties.addCursor(t.chain[0],this),this.moveForward(),this}return t.prototype.destroy=function(){for(var t;t=this.stack.pop();)t.properties.removeCursor(t.propertyName,this);this.target=this.binding=null},t.prototype.propertyDestroyed=function(t,r){this.moveBackward(t,r)},t.prototype.propertyInvalidated=function(t,r){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,r){this.binding&&(this.moveBackward(t,r),this.moveForward(),this.binding.notify(this.target))},t.prototype.moveBackward=function(t,r){for(var i=this.stack,e=i[i.length-1];e.properties!==t&&e.propertyName!==r;)e.properties.removeCursor(e.propertyName,this),i.pop(),e=i[i.length-1]},t.prototype.moveForward=function(){var t=this.stack,r=t[t.length-1],e=r.properties.internalGet(r.propertyName),n=i.getProperties(e);if(n&&t.length<this.binding.chain.length){var o=this.binding.chain[t.length];this.stack.push({properties:n,propertyName:o}),n.addCursor(o,this),this.moveForward()}},t}(),a=function(){function t(t){this.cursors=t}return t.prototype.remove=function(){for(var t=this.cursors;t.length>0;)t.pop().destroy();this.cursors=null},t}(),u=function(){function t(t){this.cursor=t}return t.prototype.remove=function(){this.cursor.destroy(),this.cursor=null},t}();r.create=n,r.wire=o,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=o});