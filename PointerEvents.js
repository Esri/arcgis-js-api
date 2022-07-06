// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./kernel","./Evented","./geometry/Point","./geometry/ScreenPoint"],(function(e,t,s,i,o,n,h,r){var a=e([n],{declaredClass:"esri.PointerEvents",tapRadius:8,clickRadius:2,doubleTapRadius:10,tapStartTolerance:50,doubleTapDuration:300,minWheelValue:1,maxWheelValue:1,mozWheelDivisor:-1!==i("mac")?1:3,wheelDivisor:120,preventPageScroll:!0,_dragging:!1,constructor:function(e,s){this.node=e,t.mixin(this,s),void 0!==e.style.msTouchAction?e.style.msTouchAction="none":void 0!==e.style.touchAction&&(e.style.touchAction="none");var i=navigator.msPointerEnabled,o=function(e){e.preventDefault()};e.addEventListener("selectstart",o,!1),e.addEventListener("dragstart",o,!1),this._pointerDown=t.hitch(this,this._pointerDown),this._pointerMove=t.hitch(this,this._pointerMove),this._pointerUp=t.hitch(this,this._pointerUp),this._pointerCancel=t.hitch(this,this._pointerCancel),e.addEventListener(i?"MSPointerDown":"pointerdown",this._pointerDown,!1),e.addEventListener(i?"MSPointerMove":"pointermove",this._pointerMove,!1),e.addEventListener(i?"MSPointerUp":"pointerup",this._pointerUp,!1),e.addEventListener(i?"MSPointerCancel":"pointercancel",this._pointerCancel,!1),this.map&&(this._mouseOver=t.hitch(this,this._mouseOver),this._mouseOut=t.hitch(this,this._mouseOut),this._mouseLeave=t.hitch(this,this._mouseLeave),this._mouseDown=t.hitch(this,this._mouseDown),this._mouseUp=t.hitch(this,this._mouseUp),this._mouseClick=t.hitch(this,this._mouseClick),this._mouseWheel=t.hitch(this,this._mouseWheel),this._mouseMove=t.hitch(this,this._mouseMove),this._mouseEnter=t.hitch(this,this._mouseEnter),this._onKeyDown=t.hitch(this,this._onKeyDown),this._onKeyUp=t.hitch(this,this._onKeyUp),e.addEventListener("mouseover",this._mouseOver,!1),e.addEventListener("mouseout",this._mouseOut,!1),e.addEventListener("mouseleave",this._mouseLeave,!1),e.addEventListener("mousedown",this._mouseDown,!1),e.addEventListener("mouseup",this._mouseUp,!1),e.addEventListener("click",this._mouseClick,!1),e.addEventListener("mousewheel",this._mouseWheel,!1),e.addEventListener("mousemove",this._mouseMove,!1),e.addEventListener("mouseenter",this._mouseEnter,!1)),this._numTouches=0,this._touches={},this._touchIds=[],this._taps=[],this._immediate=!1},_pointerDown:function(e){if(s.indexOf(this._touchIds,e.pointerId)>-1)this._pointerUp(e);else{var t,i,o,n=this._touches,h=e.target,r=e.pointerId,a=this._touchIds,u=(new Date).getTime();(t=n[r]={}).pointerId=r,t.startX=t.pageX=e.pageX,t.startY=t.pageY=e.pageY,t.startTS=u,a.push(r),this._numTouches++,h.setPointerCapture?h.setPointerCapture(r):h.msSetPointerCapture&&h.msSetPointerCapture(r),i=n[a[0]],o=n[a[1]],1===this._numTouches||(2===this._numTouches?this._swipeActive&&(i&&(i.startX=i.pageX,i.startY=i.pageY,i.moved=!1),this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,i))):this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,i))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,[i,o]))))}},_pointerMove:function(e){var t,s,i,o=this._touches,n=this._touchIds;if((t=o[e.pointerId])&&(t.pageX!==e.pageX||t.pageY!==e.pageY))if(t.pageX=e.pageX,t.pageY=e.pageY,s=Math.abs(t.pageX-t.startX),i=Math.abs(t.pageY-t.startY),!t.moved&&(s>=this.tapRadius||i>=this.tapRadius)&&(t.moved=t.absMoved=!0),1===this._numTouches)this._swipeActive?this._fire("onSwipeMove",this._processTouchEvent(e,e)):t.moved&&(this._swipeActive=!0,this._fire("onSwipeStart",this._processTouchEvent(e,e)));else if(2===this._numTouches){var h=o[n[0]],r=o[n[1]];if(this._pinchActive)this._fire("onPinchMove",this._processTouchEvent(e,[h,r]));else if(h.moved||r.moved){var a=Math.abs(h.startX-r.startX),u=Math.abs(h.startY-r.startY),p=Math.sqrt(a*a+u*u),c=Math.abs(h.pageX-r.pageX),_=Math.abs(h.pageY-r.pageY),v=Math.sqrt(c*c+_*_);Math.abs(v-p)>=2*this.tapRadius&&(this._pinchActive=!0,this._fire("onPinchStart",this._processTouchEvent(e,[h,r])))}}},_pointerUp:function(e){var t,i=this._touches,o=this.node,n=e.target,h=e.pointerId,r=this._touchIds,a=r.slice(0),u=s.map(a,(function(e){return i[e]})),p=(new Date).getTime();if(t=i[h])if(t.pageX=e.pageX,t.pageY=e.pageY,t.endTS=p,this._numTouches--,n.releasePointerCapture?n.releasePointerCapture(h):n.msReleasePointerCapture&&n.msReleasePointerCapture(h),0===this._numTouches){if(this._touches={},this._touchIds=[],this._swipeActive)this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,e));else if(this._pinchActive)this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,e));else if(!t.absMoved){var c,_=1/0,v=-1/0,m=1/0,d=-1/0,l=this.tapStartTolerance;for(c=0;c<a.length;c++)(t=u[c]).startTS<_&&(_=t.startTS),t.startTS>v&&(v=t.startTS),t.endTS<m&&(m=t.endTS),t.endTS>d&&(d=t.endTS);Math.abs(v-_)<=l&&Math.abs(d-m)<=l&&this._basicTap(e,u)}}else if(1===this._numTouches&&this._pinchActive){r.splice(s.indexOf(r,e.pointerId),1),delete i[e.pointerId];var f=i[r[0]];if(f.startX=f.pageX,f.startY=f.pageY,f.moved=!1,document.msElementsFromPoint){var g=document.msElementsFromPoint(f.pageX,f.pageY);s.some(g,(function(e){return e===o}))||(this._touches={},this._touchIds=[],this._numTouches=0)}this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,[e,f]))}},_pointerCancel:function(e){this._numTouches&&this._pointerUp(e)},_basicTap:function(e,t){var s=(new Date).getTime(),i=this,o=this._immediate;e=this._processTouchEvent(e,t),this._taps.push({touchInfos:t,ts:s,event:e}),this._taps.length>2&&this._taps.shift(),this._fire("onBasicTap",e),clearTimeout(this._tapTimer);var n=2===this._taps.length?this.doubleTapDuration/2:this.doubleTapDuration;this._tapTimer=setTimeout((function(){var e=i;i=null,clearTimeout(e._tapTimer),e._analyzeTap(o)}),o?0:n)},_analyzeTap:function(e){var t,s,i,o=this._taps,n=o[0],h=o[1],r=n.touchInfos,a=h&&h.touchInfos;o.length&&(e||(this._taps=[]),n&&h?r.length===a.length&&h.ts-n.ts<=this.doubleTapDuration?(1===r.length?(s=Math.abs(r[0].startX-a[0].startX),i=Math.abs(r[0].startY-a[0].startY),t=s<=this.doubleTapRadius&&i<=this.doubleTapRadius):t=!0,t?this._processedDoubleTap(o):this._processedTap(h)):this._processedTap(h):this._processedTap(n||h))},_processedTap:function(e){var t=e.event;this._fire("onProcessedTap",t),1===e.touchInfos.length?this._fire("onTap",this._fixEvent(t)):2===e.touchInfos.length&&this._fire("onTwoFingerTap",t)},_processedDoubleTap:function(e){var t,s,i=1===e[1].touchInfos.length;i&&((t=[this._fixEvent(e[0].event),this._fixEvent(e[1].event)])[1].relatedEvents=t),(s=[e[0].event,e[1].event])[1].relatedEvents=s,this._fire("onProcessedDoubleTap",s[1]),i&&(this._fire("onDoubleTap",t[1]),this._fire("onDblClick",t[1]))},_mouseOver:function(e){this._fire("onMouseOver",this._processMouseEvent(e))},_mouseMove:function(e){this._dragging?this._fire("onMouseDrag",this._processMouseEvent(e)):this._fire("onMouseMove",this._processMouseEvent(e))},_mouseOut:function(e){this._fire("onMouseOut",this._processMouseEvent(e))},_mouseLeave:function(e){document.removeEventListener("keydown",this._onKeyDown,!1),document.removeEventListener("keyup",this._onKeyUp,!1),this._fire("onMouseOut",this._processMouseEvent(e))},_mouseDown:function(e){this._downX=e.pageX,this._downY=e.pageY,this._fire("onMouseDown",this._processMouseEvent(e)),0===e.button&&(this._dragging=!0,this._fire("onMouseDragStart",this._processMouseEvent(e)))},_mouseUp:function(e){this._dragging&&(this._dragging=!1,this._fire("onMouseDragEnd",this._processMouseEvent(e))),this._fire("onMouseUp",this._processMouseEvent(e))},_mouseClick:function(e){Math.abs(e.pageX-this._downX)<=this.clickRadius&&Math.abs(e.pageY-this._downY)<=this.clickRadius&&this._fire("onClick",this._processMouseEvent(e))},_mouseWheel:function(e){var t=this.map;(t?t.isScrollWheelZoom||t.isScrollWheelPan:this.preventPageScroll)&&e.preventDefault();var s=e.wheelDelta?e.wheelDelta/this.wheelDivisor:-e.detail/this.mozWheelDivisor,i=Math.abs(s);i=i<=this.minWheelValue?this.minWheelValue:this.maxWheelValue,e.value=s<0?-i:i,this._fire("onMouseWheel",this._processMouseEvent(e))},_mouseEnter:function(e){document.removeEventListener("keydown",this._onKeyDown,!1),document.removeEventListener("keyup",this._onKeyUp,!1),document.addEventListener("keydown",this._onKeyDown,!1),document.addEventListener("keyup",this._onKeyUp,!1),this._fire("onMouseEnter",this._processMouseEvent(e))},_onKeyDown:function(e){this._fire("onKeyDown",e)},_onKeyUp:function(e){this._fire("onKeyUp",e)},_fire:function(e,t){this[e]&&this[e](t),this.map&&this.map[e]&&this.map[e](t)},_fixEvent:function(e){var t,s={};for(t in e)s[t]=e[t];return s.preventDefault=function(){e.preventDefault()},s.stopPropagation=function(){e.stopPropagation()},this.map&&(s.screenPoint=s.screenPoints[0],s.mapPoint=s.mapPoints[0]),s},_processTouchEvent:function(e,s){var i,o,n=this.map,a=n&&n.position,u=0;if(a&&s)if(t.isArray(s))for(e.screenPoints=[],e.mapPoints=[],i=0;i<s.length;i++)s[i]?(o=new r(s[i].pageX-a.x,s[i].pageY-a.y),e.screenPoints.push(o),e.mapPoints.push(n.extent?n.toMap(o):new h)):u++;else e.screenPoint=new r(s.pageX-a.x,s.pageY-a.y),e.mapPoint=n.extent?n.toMap(e.screenPoint):new h;return e.numPoints=s?t.isArray(s)?s.length-u:1:0,e},_processMouseEvent:function(e){var t=this.map,s=t&&t.position;return s&&(e.screenPoint=new r(e.pageX-s.x,e.pageY-s.y),e.mapPoint=t.extent?t.toMap(e.screenPoint):new h),e},setImmediateTap:function(e){this._immediate=e},destroy:function(){var e=this.node;e.removeEventListener("MSPointerDown",this._pointerDown,!1),e.removeEventListener("MSPointerMove",this._pointerMove,!1),e.removeEventListener("MSPointerUp",this._pointerUp,!1),e.removeEventListener("MSPointerCancel",this._pointerCancel,!1),this.map&&(e.removeEventListener("mouseover",this._mouseOver,!1),e.removeEventListener("mousemove",this._mouseMove,!1),e.removeEventListener("mouseout",this._mouseOut,!1),e.removeEventListener("mouseleave",this._mouseLeave,!1),e.removeEventListener("mousedown",this._mouseDown,!1),e.removeEventListener("mouseup",this._mouseUp,!1),e.removeEventListener("click",this._mouseClick,!1),e.removeEventListener("mouseenter",this._mouseEnter,!1)),clearTimeout(this._tapTimer),this.node=this.map=this._numTouches=this._touches=this._touchIds=this._taps=null}});return i("extend-esri")&&(o.PointerEvents=a),a}));