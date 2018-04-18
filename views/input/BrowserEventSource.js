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

define(["require","exports","dojo/sniff","../../core/libs/pep/pep","./keys"],function(e,t,n,i,o){Object.defineProperty(t,"__esModule",{value:!0});var r=n("trident"),a=n("edge"),l=n("chrome"),s=n("ff"),p=n("safari"),u=function(){function e(e){this._active={},this._activePointerCaptures=new Set,this._keyDownState=new Set,this._element=e,i.applyLocal(e),e.getAttribute("tabindex")||e.setAttribute("tabindex","0"),this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost},this._initialCssTouchAction=e.style.touchAction,e.style.touchAction="none",this._element.addEventListener("keydown",this._preventAltKeyDefault)}return e.prototype.destroy=function(){var e=this;this._callback=null,this.activeEvents=null,this._activePointerCaptures.forEach(function(t){e._element.releasePointerCapture(t)}),this._activePointerCaptures=null,this._element.style.touchAction=this._initialCssTouchAction,this._element.removeEventListener("keydown",this._preventAltKeyDefault)},Object.defineProperty(e.prototype,"onEventReceived",{set:function(e){this._callback=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeEvents",{set:function(e){var t=this;for(var n in this._active)if(!e||!e.has(n)){var i=this._active[n];this._element.removeEventListener(h[n],i),delete this._active[n]}e&&e.forEach(function(e){if(!t._active[e]&&h[e]){var n=t._eventHandlers[e]||t._handleDefault,i=n.bind(t,e);t._element.addEventListener(h[e],i),t._active[e]=i}})},enumerable:!0,configurable:!0}),e.prototype.setPointerCapture=function(e,t){t?(this._element.setPointerCapture(e.pointerId),this._activePointerCaptures.add(e.pointerId)):(this._element.releasePointerCapture(e.pointerId),this._activePointerCaptures.delete(e.pointerId))},e.prototype._updateNormalizedPointerLikeEvent=function(e,t){var n=this._element.getBoundingClientRect();return t.x=e.clientX-Math.round(n.left),t.y=e.clientY-Math.round(n.top),t},e.prototype._handleKey=function(e,t){var n=o.eventKey(t);n&&"key-up"===e&&this._keyDownState.delete(n);var i={native:t,key:n,repeat:n&&this._keyDownState.has(n)};n&&"key-down"===e&&this._keyDownState.add(i.key),this._callback(e,i)},e.prototype._handlePointer=function(e,t){var n=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,pointerType:t.pointerType,button:t.button,buttons:t.buttons});this._callback(e,n)},e.prototype._handlePointerPreventDefault=function(e,t){var n=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,pointerType:t.pointerType,button:t.button,buttons:t.buttons});t.preventDefault(),this._callback(e,n)},e.prototype._handleMouseWheel=function(e,t){t.preventDefault();var n=t.deltaY;switch(t.deltaMode){case 0:(r||a)&&(n=n/document.documentElement.clientHeight*600);break;case 1:n*=30;break;case 2:n*=900}r||a?n*=.7:l||p?n*=.6:s&&(n*=1.375);var i=Math.abs(n);if(i>100){n=200*(n/i)/(1+Math.exp(-.02*(i-100)))}var o=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,deltaY:n});this._callback(e,o)},e.prototype._handlePointerCaptureLost=function(e,t){this._activePointerCaptures.delete(t.pointerId),this._handleDefault(e,t)},e.prototype._handleDefault=function(e,t){var n={native:t};t.preventDefault(),this._callback(e,n)},e.prototype._preventAltKeyDefault=function(e){"Alt"===e.key&&e.preventDefault()},e}();t.BrowserEventSource=u;var h={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave"}});