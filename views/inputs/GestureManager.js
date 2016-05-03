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

define(["../../core/declare","../../core/Accessoire","./HandlerList","./HammerInput"],function(e,r,n,t){var s=e([r],{constructor:function(e){var r=e.surface||this.surface;return r?(this.inputManager=new t(r),void(this.handlers=new n({gestureManager:this}))):void console.error("GestureManager requires a surface dom element to work.")},view:null,surface:null,trackHover:!1,handlers:null,_handlersSetter:function(e,r){return null==e?e=new n({gestureManager:this}):e.gestureManager=this,this._removeListeners(r),this._addListeners(e,e),e},_inputManager:null,on:function(e,r){var n=this.inputManager;return n&&n.on(e,r)},addGesture:function(e){var r=this.inputManager,n=e&&e.event;if("input"===n)return void console.log("'input' is not a configurable gesture. listen to 'input' event with the 'on' function");var t=r.addGesture(e);return t?this:t},addHandler:function(e){return this.handlers||(this.handlers=new n),this.handlers.add(e),this._addListeners(this.handlers,e),this},removeHandler:function(e){if(this.handlers){this._removeListeners(this.handlers),this.handlers.remove(e);for(var r=this.handlers.first;r;)this._addListeners(this.handlers,r),r=this.handlers.next()}return this},removeGesture:function(e){return this.inputManager.removeGesture(e)},configureGesture:function(e,r){return this.inputManager.configureGesture(e,r)},_addListeners:function(e,r){var n=r.events,t=e.removers||[],s=this;if(n){var i=n.map(function(r){return s.on(r,e.processEvent.bind(e))});e.removers=t.concat(i)}},_removeListeners:function(e){var r=e&&e.removers;r&&r.forEach(function(e){e&&e.remove()})}});return s});