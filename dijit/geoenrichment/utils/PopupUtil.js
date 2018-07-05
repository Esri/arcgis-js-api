// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/when","dojo/touch","dojo/sniff","dijit/popup","dijit/place","./DnDUtil","./MouseUtil","dojo/domReady!"],function(o,e,n,p,r,i,t,l,u,a,c,d,s,_){function f(e,d,f,g){function y(o){if(g.overlay&&o._popupWrapper){var e=r.create("div",{class:g.overlay.overlayClass});if(g.overlay.overlayParent)r.place(e,g.overlay.overlayParent);else{r.place(e,b,"before");var n=t.get(o._popupWrapper,"zIndex");t.set(e,"zIndex",n)}o.__popupOverlay=e}}function O(o){o.__popupOverlay&&(r.destroy(o.__popupOverlay),o.__popupOverlay=null)}function C(o){w=!1,o.__bodyClickHandler&&o.__bodyClickHandler.remove(),o.__bodyClickHandler=null,o.__popupWidgetOpenFlag=!1,O(o),g.onClose&&g.onClose()}function m(r){r&&g.stopEventPropagation&&r.stopPropagation(),w||(w=!0,l(W||("function"==typeof e?e():e),function(e){if(W=e,!W.domNode)return void(w=!1);W.__openPopupWidgetFunc=m,b=c.moveOffScreen(W),l(g.onPreShow&&g.onPreShow(),function(){var e=g.orient||["below"];if(b&&!1!==g.allowAutoOrientation){var r=-1!==e.indexOf("below"),t=i.position(f),l=i.position(b);r&&t.y+t.h+l.h>document.body.clientHeight&&(r=!r),e=e.map(function(o){return"below"!=o||r?o:"above"})}if(g.noOverflow&&(W.baseClass="esriGENoOverflow "+W.baseClass),c.open({parent:d,popup:W,around:f,orient:e,onClose:function(){C(W)}}),g.noOverflow&&(W.baseClass=W.baseClass.replace("esriGENoOverflow ","")),b&&g.wrapperClass&&p.add(b,g.wrapperClass),W.__popupInfo=o.mixin({},c.getTopPopup()),W.__popupInfo.orient=e,W.__popupInfo.around=f,O(W),y(W),g.onShow&&g.onShow(),W.__popupWidgetOpenFlag=!0,P&&W.own&&W.own(P),!1!==g.closeOnClickOutside){var u="function"==typeof g.closeOnClickOutside?g.closeOnClickOutside:null;setTimeout(function(){W.__bodyClickHandler&&W.__bodyClickHandler.remove(),W.__bodyClickHandler=n(document.body,k,function(o){w&&(_.fixTouchEvent(o),u&&!u(o)||_.isMouseOver(b)||g.isMouseOver&&g.isMouseOver()||W.isMouseOver&&W.isMouseOver()||W.__lockPopupWidgetFlag||v.close(W))})})}})}))}if(e){g=g||{};var k=g.openMouseEvent?g.openMouseEvent:a("touch")?u.release:"click, mouseup",W="function"!=typeof e?e:null;if(W)var b=c.moveOffScreen(W);var w=!1;W&&(W.__openPopupWidgetFunc=m);var P;if(!1!==g.openOnMouseEvent){var h=m;if(g.toggleOnClick){var F;h=function(o){F=F||o.type,W?F==o.type&&v.toggle(W):m()}}P=!1===g.onClickComponent?null:void 0!==g.noDragClickTolerance?s.addNoDragClickHandler(g.onClickComponent||f,h,{tolerance:g.noDragClickTolerance}):n(g.onClickComponent||f,k,h)}return g.openPopup&&m(),{remove:function(){W&&"function"!=typeof W&&(v.close(W),C(W),W._popupWrapper&&(W.domNode&&W.domNode.parentNode===W._popupWrapper&&W._popupWrapper.removeChild(W.domNode),r.destroy(W._popupWrapper),delete W._popupWrapper),delete W.__openPopupWidgetFunc,delete W.__popupWidgetOpenFlag),P&&P.remove()}}}}var v={};return v.makePopup=f,v.setLocked=function(o,e){o.__lockPopupWidgetFlag=e},v.open=function(o){o&&!o.__lockPopupWidgetFlag&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},v.close=function(o){o&&!o.__lockPopupWidgetFlag&&c.close(o)},v.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},v.toggle=function(o){v.isOpen(o)?v.close(o):v.open(o)},v.refresh=function(o){if(o){var e=o.__popupInfo,n=i.isBodyLtr();e&&d.around(e.wrapper,e.around,e.orient,n)}},v.getWrapper=function(o){return o&&o._popupWrapper},v});