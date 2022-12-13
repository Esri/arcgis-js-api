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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/sniff","dojo/_base/connect","dojo/_base/event","./kernel","./Evented","./geometry/Point","./geometry/ScreenPoint"],(function(e,n,o,t,s,i,r,c,l,a){var h=s.connect,_=s.disconnect,u=e([c],{declaredClass:"esri.MouseEvents",doubleClickDuration:300,minWheelValue:1,maxWheelValue:1,mozWheelDivisor:-1!==t("mac")?1:3,wheelDivisor:t("chrome")<2?360:120,preventPageScroll:!0,map:null,constructor:function(e,s){this.node=e,o.mixin(this,s);var r=function(e){return i.stop(e),!1};t("mozilla")&&n.style(e,"MozUserSelect","none"),this._handles=[h(e,"onselectstart",r),h(e,"ondragstart",r),h(e,"onmouseenter",this,this._onMouseEnterHandler),h(e,"onmouseleave",this,this._onMouseLeaveHandler),h(e,"onmousedown",this,this._onMouseDownHandler),h(e,"onclick",this,this._onClickHandler),h(e,"ondblclick",this,this._onDblClickHandler)],this._onMouseMoveHandler_connect=h(e,"onmousemove",this,this._onMouseMoveHandler),this._onMouseUpHandler_connect=h(e,"onmouseup",this,this._onMouseUpHandler),this._fireClickEvent=o.hitch(this,this._fireClickEvent),this._initialDuration=this.doubleClickDuration;var c=this.map;this.preventPageScroll=c?c.isScrollWheelZoom||c.isScrollWheelPan:this.preventPageScroll,this.enableMouseWheel(!1)},_fire:function(e,n){(!this._preventClick||"onClick"!==e&&"onDblClick"!==e)&&(this[e]&&this[e](n),this.map&&this.map[e]&&this.map[e](n))},_processEvent:function(e){e=i.fix(e,e.target);var n=this.map,o=n&&n.position;return o&&("DOMMouseScroll"===e.type&&t("ff")<3?e.screenPoint=new a(window.scrollX+e.screenX-o.x,window.scrollY+e.screenY-o.y):e.screenPoint=new a(e.pageX-o.x,e.pageY-o.y),e.mapPoint=n.extent?n.toMap(e.screenPoint):new l),e.numPoints=0,e},_onMouseEnterHandler:function(e){_(this._onKeyDown_connect),_(this._onKeyUp_connect),this._onKeyDown_connect=h(document,"onkeydown",this,this._onKeyDownHandler),this._onKeyUp_connect=h(document,"onkeyup",this,this._onKeyUpHandler),this._fire("onMouseOver",this._processEvent(e))},_onMouseLeaveHandler:function(e){_(this._onKeyDown_connect),_(this._onKeyUp_connect),this._onKeyDown_connect=this._onKeyUp_connect=null,this._fire("onMouseOut",this._processEvent(e))},_onMouseMoveHandler:function(e){this._dragEnd?this._dragEnd=!1:this._fire("onMouseMove",this._processEvent(e))},_onMouseDownHandler:function(e){_(this._onMouseMoveHandler_connect),this._onMouseMoveHandler_connect=null,this.node.setCapture&&this.node.setCapture(!1),_(this._onMouseDragHandler_connect),this._onMouseDragHandler_connect=h(document,"onmousemove",this,this._onMouseDragHandler),this._startX=e.pageX,this._startY=e.pageY,this._fire("onMouseDown",this._processEvent(e))},_onMouseUpHandler:function(e){var n=this.node;n.releaseCapture&&n.releaseCapture(),_(this._onMouseDragHandler_connect),this._onMouseDragHandler_connect=null,_(this._onMouseMoveHandler_connect),this._onMouseMoveHandler_connect=h(n,"onmousemove",this,this._onMouseMoveHandler),this._fire("onMouseUp",this._processEvent(e))},_onMouseDragHandler:function(e){_(this._onMouseDragHandler_connect),this._onMouseDragHandler_connect=h(document,"onmousemove",this,this._onMouseDraggingHandler),_(this._onMouseUpHandler_connect),this._onMouseUpHandler_connect=h(document,"onmouseup",this,this._onDragMouseUpHandler),this._docLeaveConnect=h(document,"onmouseout",this,this._onDocMouseOut),this._fire("onMouseDragStart",this._processEvent(e))},_onMouseDraggingHandler:function(e){i.stop(e),this._fire("onMouseDrag",this._processEvent(e))},_onDragMouseUpHandler:function(e){var n=this.node;n.releaseCapture&&n.releaseCapture(),this._dragEnd=!0,_(this._docLeaveConnect),_(this._onMouseDragHandler_connect),_(this._onMouseUpHandler_connect),this._docLeaveConnect=this._onMouseDragHandler_connect=null,this._onMouseMoveHandler_connect=h(n,"onmousemove",this,this._onMouseMoveHandler),this._onMouseUpHandler_connect=h(n,"onmouseup",this,this._onMouseUpHandler),e=this._processEvent(e),this._fire("onMouseDragEnd",e),this._fire("onMouseUp",e)},_onDocMouseOut:function(e){var n=t("ie")<9?e.toElement:e.relatedTarget,o=n&&n.nodeName.toLowerCase();(!n||(t("chrome")||t("safari"))&&"html"===o)&&this._onDragMouseUpHandler(e)},_onClickHandler:function(e){if((e=this._processEvent(e)).pageX===this._startX&&e.pageY===this._startY){clearTimeout(this._clickTimer);var n={},o="movementX"in e;for(var t in e)"mozInputSource"===t||"mozPressure"===t||o&&("webkitMovementX"===t||"webkitMovementY"===t)||(n[t]=e[t]);this._clickEvent=n,this._clickTimer=setTimeout(this._fireClickEvent,this.doubleClickDuration)}},_fireClickEvent:function(){clearTimeout(this._clickTimer),t("ie")<9&&(this._clickEvent.graphic=r._ieGraphic,delete r._ieGraphic),this._fire("onClick",this._clickEvent)},_onDblClickHandler:function(e){clearTimeout(this._clickTimer),this._fire("onDblClick",this._processEvent(e))},_onMouseWheelHandler:function(e){var n=this.map;(n?n.isScrollWheelZoom||n.isScrollWheelPan:this.preventPageScroll)&&i.stop(e);var o=t("ff")||t("mozilla")?-e.detail/this.mozWheelDivisor:e.wheelDelta/this.wheelDivisor,s=Math.abs(o);s=s<=this.minWheelValue?this.minWheelValue:this.maxWheelValue,e.value=o<0?-s:s,this._fire("onMouseWheel",this._processEvent(e))},_onKeyDownHandler:function(e){this._fire("onKeyDown",e)},_onKeyUpHandler:function(e){this._fire("onKeyUp",e)},enableMouseWheel:function(e){_(this._scrollHandle),this._scrollHandle=h(this.node,t("ff")||t("mozilla")?e?"MozMousePixelScroll":"DOMMouseScroll":"onmousewheel",this,this._onMouseWheelHandler)},setImmediateClick:function(e){this.doubleClickDuration=e?0:this._initialDuration},preventClickEvents:function(e){this._preventClick=e},destroy:function(){var e,n=this._handles.concat([this._onMouseMoveHandler_connect,this._onMouseUpHandler_connect,this._onMouseDragHandler_connect,this._scrollHandle,this._onKeyDown_connect,this._onKeyUp_connect,this._docLeaveConnect]);for(e=0;e<n.length;e++)_(n[e]);clearTimeout(this._clickTimer),this.node=this.map=this._handles=this._clickEvent=this._onMouseMoveHandler_connect=this._onMouseUpHandler_connect=this._onMouseDragHandler_connect=this._scrollHandle=this._onKeyDown_connect=this._onKeyUp_connect=this._docLeaveConnect=null}});return t("extend-esri")&&(r.MouseEvents=u),u}));