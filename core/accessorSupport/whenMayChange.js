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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","dojo/aspect","./utils","./get","../ArrayPool","../ObjectPool"],function(t,r,e,i,s,o,n){function p(t,r,e){var i=t.binding;return i||(i=t.binding=new d(t)),i.add(r,e),i.uid}function a(t,r,e){var i=t.binding;i&&(i.remove(r,e),0===i.numCursors&&(i.destroy(),t.binding=null))}function h(t,r,e){return i.parse(t,r,e,function(t,r,e){var s=l.acquire();return s.install(t,r,e),{remove:i.once(function(){l.release(s),s=null})}})}var u=function(){function t(){this.stack=[]}return t.prototype.install=function(t,r,e){this.target=t,this.properties=i.getProperties(t),this.path=r,this.chain=i.pathToArray(r),this.callback=e,this.stack.push({target:this.target,properties:this.properties,propertyName:this.chain[0],uid:p(this.properties,this.chain[0],this)}),this.moveForward()},t.prototype.dispose=function(){for(var t;t=this.stack.pop();)a(t.properties,t.propertyName,this);this.target=this.callback=this.chain=this.path=null},t.prototype.propertyInvalidated=function(){this.callback(this.path,this.target)},t.prototype.propertyCommitted=function(t){this.moveTo(t),this.moveForward(),this.callback(this.path,this.target)},t.prototype.value=function(t){var r;return r="number"==typeof t?this.stack[t]:t,s.valueOf(r.properties,r.propertyName,!1)},t.prototype.index=function(){return this.stack.length-1},t.prototype.last=function(){return this.stack[this.index()]},t.prototype.moveTo=function(t){for(var r=this.last();r.uid!==t;)a(r.properties,r.propertyName,this),this.stack.pop(),r=this.last()},t.prototype.moveForward=function(){for(var t,r,e=this.value(this.last());e&&this.index()<this.chain.length-1;){if(t=this.chain[this.index()+1],r=i.getProperties(e),!r)return;this.stack.push({target:e,properties:r,propertyName:t,uid:p(r,t,this)}),e=this.value(this.last())}},t}(),c=0,d=function(){function t(t){var r=this;this.properties=t,this.uid="binding-"+c++,this.numCursors=0,this.cursors={},this.aspectHandles=[e.before(this.properties,"propertyInvalidated",function(t){return r.propertyInvalidated(t)}),e.after(this.properties,"propertyCommitted",function(t){return r.propertyCommitted(t)},!0),e.before(this.properties,"destroy",function(){return r.destroy()})]}return t.prototype.destroy=function(){var t=this.cursors;this.cursors={},this.numCursors=0,this.aspectHandles.forEach(function(t){return t.remove()});for(var r=0,e=Object.getOwnPropertyNames(t);r<e.length;r++){var i=e[r],s=t[i];if(s){for(var n=0,p=s;n<p.length;n++){var a=p[n];a.dispose()}o.release(s)}}},t.prototype.add=function(t,r){this.cursors[t]||(this.cursors[t]=o.acquire()),this.cursors[t].push(r),this.numCursors+=1},t.prototype.remove=function(t,r){var e=this.cursors[t];this.cursors[t]&&(e.splice(e.indexOf(r),1),0===e.length&&(this.cursors[t]=null,o.release(e)),this.numCursors-=1)},t.prototype.propertyInvalidated=function(t){var r=this,e=this.cursors[t];e&&e.forEach(function(t){return t.propertyInvalidated(r.uid)})},t.prototype.propertyCommitted=function(t){var r=this,e=this.cursors[t];e&&e.forEach(function(t){return t.propertyCommitted(r.uid)})},t}(),l=new n(u);r.whenMayChange=h,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=h});