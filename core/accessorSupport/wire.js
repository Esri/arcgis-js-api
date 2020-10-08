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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../maybe","./utils"],(function(t,i,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.wire=i.create=void 0;var e=function(){function t(t,i){if(this.path=t,this.callback=i,this.chain=null,this.conditional=null,t.indexOf(".")>-1){var r=n.parseConditionalPath(t);r&&(this.path=r.fullPath,this.conditional=r.conditional),this.chain=n.pathToArray(this.path)}else"?"===t[t.length-1]&&(this.path=t.slice(0,t.length-1),this.conditional=[!0],this.chain=[this.path]);return this.callback=i,this}return t.prototype.install=function(t){return function(t,i){if(t.chain)return new s(t,i);return new o(t,i)}(this,t)},t.prototype.notify=function(t){this.callback(t,this.path)},t}(),o=function(){function t(t,i){var r;this.binding=t,this.target=i,null===(r=n.getProperties(i))||void 0===r||r.addCursor(this.binding.path,this)}return t.prototype.destroy=function(){var t;this.target&&(null===(t=n.getProperties(this.target))||void 0===t||t.removeCursor(this.binding.path,this),this.target=this.binding=null)},t.prototype.propertyDestroyed=function(t,i){var r;null===(r=n.getProperties(this.target))||void 0===r||r.removeCursor(i,this)},t.prototype.propertyInvalidated=function(){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(){this.binding&&this.binding.notify(this.target)},t}(),s=function(){function t(t,i){this.binding=t,this.target=i,this.stack=[],this.properties=r.assumeNonNull(n.getProperties(i));var e=t.chain[0];return this.stack.push({properties:this.properties,propertyName:e}),this.properties.addCursor(e,this),this.moveForward(),this}return t.prototype.destroy=function(){for(;;){var t=this.stack.pop();if(null==t)break;t.properties.removeCursor(t.propertyName,this)}this.target=this.binding=null},t.prototype.propertyDestroyed=function(t,i){this.moveBackward(t,i)},t.prototype.propertyInvalidated=function(){this.binding&&this.binding.notify(this.target)},t.prototype.propertyCommitted=function(t,i){this.binding&&(this.moveBackward(t,i),this.moveForward(),this.binding.notify(this.target))},t.prototype.moveBackward=function(t,i){for(var r=this.stack,n=r[r.length-1];n.properties!==t&&n.propertyName!==i;)n.properties.removeCursor(n.propertyName,this),r.pop(),n=r[r.length-1]},t.prototype.moveForward=function(){var t=this.stack,i=t[t.length-1];if(1!==t.length||!this.binding.conditional||!this.binding.conditional[t.length-1]||i.properties.metadatas[i.propertyName]){var r=i.properties.internalGet(i.propertyName),e=n.getProperties(r);if(e&&this.binding.chain&&t.length<this.binding.chain.length){var o=this.binding.chain[t.length];if(this.binding.conditional&&this.binding.conditional[t.length]&&!e.metadatas[o])return;this.stack.push({properties:e,propertyName:o}),e.addCursor(o,this),this.moveForward()}}},t}();var a=function(){function t(t){this.cursors=t}return t.prototype.remove=function(){for(var t=this.cursors;t.length>0;)t.pop().destroy();this.cursors=null},t}(),h=function(){function t(t){this.cursor=t}return t.prototype.remove=function(){this.cursor=r.destroyMaybe(this.cursor)},t}();function p(t,i,r){var o=n.splitPath(i);if(Array.isArray(o)){for(var s=[],p=0,u=o;p<u.length;p++){var l=u[p];s.push(new e(l,r).install(t))}return new a(s)}var c=new e(o,r).install(t);return new h(c)}i.create=function(t,i){var r=n.splitPath(t);if(Array.isArray(r)){for(var o=[],s=0,p=r;s<p.length;s++){var u=p[s];o.push(new e(u,i))}return function(t){for(var i=[],r=0;r<o.length;r++)i[r]=o[r].install(t);return new a(i)}}var l=new e(r,i);return function(t){return new h(l.install(t))}},i.wire=p,i.default=p}));