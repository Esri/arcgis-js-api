// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","./utils"],(function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t,r){return this.path=t,this.callback=r,this.chain=null,this.path=t,t.indexOf(".")>-1&&(this.chain=i.pathToArray(t)),this.callback=r,this}return t.prototype.install=function(t){return function(t,r){if(t.chain)return new o(t,r);return new n(t,r)}(this,t)},t.prototype.notify=function(t){this.callback(t,this.path)},t}(),n=function(){function t(t,r){this.binding=t,this.target=r,i.getProperties(r).addCursor(this.binding.path,this)}return t.prototype.destroy=function(){this.target&&(i.getProperties(this.target).removeCursor(this.binding.path,this),this.target=this.binding=null)},t.prototype.propertyDestroyed=function(t,r){i.getProperties(this.target).removeCursor(r,this)},t.prototype.propertyInvalidated=function(t,r){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,r){this.binding&&this.binding.notify(this.target)},t}(),o=function(){function t(t,r){return this.binding=t,this.target=r,this.stack=[],this.properties=i.getProperties(r),this.stack.push({properties:this.properties,propertyName:t.chain[0]}),this.properties.addCursor(t.chain[0],this),this.moveForward(),this}return t.prototype.destroy=function(){for(;;){var t=this.stack.pop();if(null==t)break;t.properties.removeCursor(t.propertyName,this)}this.target=this.binding=null},t.prototype.propertyDestroyed=function(t,r){this.moveBackward(t,r)},t.prototype.propertyInvalidated=function(t,r){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,r){this.binding&&(this.moveBackward(t,r),this.moveForward(),this.binding.notify(this.target))},t.prototype.moveBackward=function(t,r){for(var i=this.stack,e=i[i.length-1];e.properties!==t&&e.propertyName!==r;)e.properties.removeCursor(e.propertyName,this),i.pop(),e=i[i.length-1]},t.prototype.moveForward=function(){var t=this.stack,r=t[t.length-1],e=r.properties.internalGet(r.propertyName),n=i.getProperties(e);if(n&&t.length<this.binding.chain.length){var o=this.binding.chain[t.length];this.stack.push({properties:n,propertyName:o}),n.addCursor(o,this),this.moveForward()}},t}();var s=function(){function t(t){this.cursors=t}return t.prototype.remove=function(){for(var t=this.cursors;t.length>0;)t.pop().destroy();this.cursors=null},t}(),p=function(){function t(t){this.cursor=t}return t.prototype.remove=function(){this.cursor.destroy(),this.cursor=null},t}();function h(t,r,n){var o=i.splitPath(r);if(Array.isArray(o)){for(var h=[],a=0,u=o;a<u.length;a++){var c=u[a];h.push(new e(c,n).install(t))}return new s(h)}var f=new e(o,n).install(t);return new p(f)}r.create=function(t,r){var n=i.splitPath(t);if(Array.isArray(n)){for(var o=[],h=0,a=n;h<a.length;h++){var u=a[h];o.push(new e(u,r))}return function(t){for(var r=[],i=0;i<o.length;i++)r[i]=o[i].install(t);return new s(r)}}var c=new e(n,r);return function(t){return new p(c.install(t))}},r.wire=h,r.default=h}));