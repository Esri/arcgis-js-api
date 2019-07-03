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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/when","dijit/popup","dijit/place","./DeviceUtil","./DnDUtil","./MouseUtil","dojo/domReady!"],function(o,e,n,p,r,i,t,l,u,a,c,d){function s(u,s,v,g){function C(o){if(g.overlay&&o._popupWrapper){var e=p.create("div",{class:g.overlay.overlayClass});if(g.overlay.overlayParent)p.place(e,g.overlay.overlayParent);else{p.place(e,b,"before");var n=i.get(o._popupWrapper,"zIndex");i.set(e,"zIndex",n)}o.__popupOverlay=e}}function y(o){o.__popupOverlay&&(p.destroy(o.__popupOverlay),o.__popupOverlay=null)}function O(o){h=!1,o.__bodyClickHandler&&o.__bodyClickHandler.remove(),o.__bodyClickHandler=null,o.__popupWidgetOpenFlag=!1,y(o),g.onClose&&g.onClose()}function m(p){p&&g.stopEventPropagation&&p.stopPropagation(),h||(h=!0,t(W||("function"==typeof u?u():u),function(p){if(W=p,!W.domNode)return void(h=!1);W.__openPopupWidgetFunc=m,b=l.moveOffScreen(W),t(g.onPreShow&&g.onPreShow(),function(){var p=_(g.orient);if(b&&!1!==g.allowAutoOrientation){var i=-1!==p.indexOf("below"),t=r.position(v),u=r.position(b);i&&t.y+t.h+u.h>document.body.clientHeight&&(i=!i),p=p.map(function(o){return"below"!=o||i?o:"above"})}if(g.noOverflow&&(W.baseClass="esriGENoOverflow "+W.baseClass),l.open({parent:s,popup:W,around:v,orient:p,onClose:function(){O(W)}}),g.suppressReposition&&clearTimeout(l._aroundMoveListener),g.noOverflow&&(W.baseClass=W.baseClass.replace("esriGENoOverflow ","")),b&&g.wrapperClass&&n.add(b,g.wrapperClass),W.__popupInfo=o.mixin({},l.getTopPopup()),W.__popupInfo.orient=p,W.__popupInfo.around=v,y(W),C(W),g.onShow&&g.onShow(),W.__popupWidgetOpenFlag=!0,w&&W.own&&W.own(w),!1!==g.closeOnClickOutside){var c="function"==typeof g.closeOnClickOutside?g.closeOnClickOutside:null;setTimeout(function(){W.__bodyClickHandler&&W.__bodyClickHandler.remove(),W.__bodyClickHandler=e(document.body,a.isMobileDevice()?a.press:k,function(o){h&&(d.fixTouchEvent(o),c&&!c(o)||d.isMouseOver(b)||g.isMouseOver&&g.isMouseOver()||W.isMouseOver&&W.isMouseOver()||W.__lockPopupWidgetFlag||f.close(W))})})}})}))}if(u){g=g||{};var k=g.openMouseEvent?g.openMouseEvent:a.clickOrRelease,W="function"!=typeof u?u:null;if(W)var b=l.moveOffScreen(W);var h=!1;W&&(W.__openPopupWidgetFunc=m);var w;if(!1!==g.openOnMouseEvent){var P=m;if(g.toggleOnClick){var F;P=function(o){F=F||o.type,W?F===o.type&&f.toggle(W):m()}}w=!1===g.onClickComponent?null:void 0!==g.noDragClickTolerance?c.addNoDragClickHandler(g.onClickComponent||v,P,{tolerance:g.noDragClickTolerance}):e(g.onClickComponent||v,k,P)}return g.openPopup&&m(),{remove:function(){W&&"function"!=typeof W&&(f.close(W),O(W),W._popupWrapper&&(W.domNode&&W.domNode.parentNode===W._popupWrapper&&W._popupWrapper.removeChild(W.domNode),p.destroy(W._popupWrapper),delete W._popupWrapper),delete W.__openPopupWidgetFunc,delete W.__popupWidgetOpenFlag),w&&w.remove()}}}}function _(o){if(!o)return["below"];var e=[];return o.forEach(function(o){var n=r.isBodyLtr();switch(o){case"before-alt":n=!n;case"after-alt":return e.push(n?{aroundCorner:"BR",corner:"BL"}:{aroundCorner:"BL",corner:"BR"}),void e.push(n?{aroundCorner:"TR",corner:"TL"}:{aroundCorner:"TL",corner:"TR"})}e.push(o)}),e}var f={};return f.makePopup=s,f.setLocked=function(o,e){o.__lockPopupWidgetFlag=e},f.open=function(o){o&&!o.__lockPopupWidgetFlag&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},f.close=function(o){o&&!o.__lockPopupWidgetFlag&&l.close(o)},f.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},f.toggle=function(o){f.isOpen(o)?f.close(o):f.open(o)},f.refresh=function(o){if(o){var e=o.__popupInfo,n=r.isBodyLtr();e&&u.around(e.wrapper,e.around,e.orient,n)}},f.getWrapper=function(o){return o&&o._popupWrapper},f});