// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./utils"],(function(t,i,r){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t,i){if(this.path=t,this.callback=i,this.chain=null,this.conditional=null,t.indexOf(".")>-1){var n=r.parseConditionalPath(t);n&&(this.path=n.fullPath,this.conditional=n.conditional),this.chain=r.pathToArray(this.path)}else"?"===t[t.length-1]&&(this.path=t.slice(0,t.length-1),this.conditional=[!0],this.chain=[this.path]);return this.callback=i,this}return t.prototype.install=function(t){return function(t,i){if(t.chain)return new o(t,i);return new e(t,i)}(this,t)},t.prototype.notify=function(t){this.callback(t,this.path)},t}(),e=function(){function t(t,i){this.binding=t,this.target=i,r.getProperties(i).addCursor(this.binding.path,this)}return t.prototype.destroy=function(){this.target&&(r.getProperties(this.target).removeCursor(this.binding.path,this),this.target=this.binding=null)},t.prototype.propertyDestroyed=function(t,i){r.getProperties(this.target).removeCursor(i,this)},t.prototype.propertyInvalidated=function(){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(){this.binding&&this.binding.notify(this.target)},t}(),o=function(){function t(t,i){return this.binding=t,this.target=i,this.stack=[],this.properties=r.getProperties(i),this.stack.push({properties:this.properties,propertyName:t.chain[0]}),this.properties.addCursor(t.chain[0],this),this.moveForward(),this}return t.prototype.destroy=function(){for(;;){var t=this.stack.pop();if(null==t)break;t.properties.removeCursor(t.propertyName,this)}this.target=this.binding=null},t.prototype.propertyDestroyed=function(t,i){this.moveBackward(t,i)},t.prototype.propertyInvalidated=function(){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,i){this.binding&&(this.moveBackward(t,i),this.moveForward(),this.binding.notify(this.target))},t.prototype.moveBackward=function(t,i){for(var r=this.stack,n=r[r.length-1];n.properties!==t&&n.propertyName!==i;)n.properties.removeCursor(n.propertyName,this),r.pop(),n=r[r.length-1]},t.prototype.moveForward=function(){var t=this.stack,i=t[t.length-1];if(1!==t.length||!this.binding.conditional||!this.binding.conditional[t.length-1]||i.properties.metadatas[i.propertyName]){var n=i.properties.internalGet(i.propertyName),e=r.getProperties(n);if(e&&t.length<this.binding.chain.length){var o=this.binding.chain[t.length];if(this.binding.conditional&&this.binding.conditional[t.length]&&!e.metadatas[o])return;this.stack.push({properties:e,propertyName:o}),e.addCursor(o,this),this.moveForward()}}},t}();var s=function(){function t(t){this.cursors=t}return t.prototype.remove=function(){for(var t=this.cursors;t.length>0;)t.pop().destroy();this.cursors=null},t}(),a=function(){function t(t){this.cursor=t}return t.prototype.remove=function(){this.cursor.destroy(),this.cursor=null},t}();function h(t,i,e){var o=r.splitPath(i);if(Array.isArray(o)){for(var h=[],p=0,u=o;p<u.length;p++){var c=u[p];h.push(new n(c,e).install(t))}return new s(h)}var l=new n(o,e).install(t);return new a(l)}i.create=function(t,i){var e=r.splitPath(t);if(Array.isArray(e)){for(var o=[],h=0,p=e;h<p.length;h++){var u=p[h];o.push(new n(u,i))}return function(t){for(var i=[],r=0;r<o.length;r++)i[r]=o[r].install(t);return new s(i)}}var c=new n(e,i);return function(t){return new a(c.install(t))}},i.wire=h,i.default=h}));