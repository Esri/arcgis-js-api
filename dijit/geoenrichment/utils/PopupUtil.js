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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/when","dojo/touch","dojo/sniff","dijit/popup","dijit/place","./DnDUtil","./MouseUtil","dojo/domReady!"],function(o,e,n,p,r,i,t,l,u,a,c,d,s){function _(c,_,v,g){function y(o){if(g.overlay&&o._popupWrapper){var e=p.create("div",{class:g.overlay.overlayClass});if(g.overlay.overlayParent)p.place(e,g.overlay.overlayParent);else{p.place(e,b,"before");var n=i.get(o._popupWrapper,"zIndex");i.set(e,"zIndex",n)}o.__popupOverlay=e}}function O(o){o.__popupOverlay&&(p.destroy(o.__popupOverlay),o.__popupOverlay=null)}function C(o){w=!1,o.__bodyClickHandler&&o.__bodyClickHandler.remove(),o.__bodyClickHandler=null,o.__popupWidgetOpenFlag=!1,O(o),g.onClose&&g.onClose()}function m(p){p&&g.stopEventPropagation&&p.stopPropagation(),w||(w=!0,t(W||("function"==typeof c?c():c),function(p){if(W=p,!W.domNode)return void(w=!1);W.__openPopupWidgetFunc=m,b=a.moveOffScreen(W),t(g.onPreShow&&g.onPreShow(),function(){var p=g.orient||["below"];if(b&&!1!==g.allowAutoOrientation){var i=-1!==p.indexOf("below"),t=r.position(v),c=r.position(b);i&&t.y+t.h+c.h>document.body.clientHeight&&(i=!i),p=p.map(function(o){return"below"!=o||i?o:"above"})}if(g.noOverflow&&(W.baseClass="esriGENoOverflow "+W.baseClass),a.open({parent:_,popup:W,around:v,orient:p,onClose:function(){C(W)}}),g.noOverflow&&(W.baseClass=W.baseClass.replace("esriGENoOverflow ","")),b&&g.wrapperClass&&n.add(b,g.wrapperClass),W.__popupInfo=o.mixin({},a.getTopPopup()),W.__popupInfo.orient=p,W.__popupInfo.around=v,O(W),y(W),g.onShow&&g.onShow(),W.__popupWidgetOpenFlag=!0,P&&W.own&&W.own(P),!1!==g.closeOnClickOutside){var d="function"==typeof g.closeOnClickOutside?g.closeOnClickOutside:null;setTimeout(function(){W.__bodyClickHandler&&W.__bodyClickHandler.remove(),W.__bodyClickHandler=e(document.body,u("touch")?l.press:k,function(o){w&&(s.fixTouchEvent(o),d&&!d(o)||s.isMouseOver(b)||g.isMouseOver&&g.isMouseOver()||W.isMouseOver&&W.isMouseOver()||W.__lockPopupWidgetFlag||f.close(W))})})}})}))}if(c){g=g||{};var k=g.openMouseEvent?g.openMouseEvent:u("touch")?l.release:"click, mouseup",W="function"!=typeof c?c:null;if(W)var b=a.moveOffScreen(W);var w=!1;W&&(W.__openPopupWidgetFunc=m);var P;if(!1!==g.openOnMouseEvent){var h=m;if(g.toggleOnClick){var F;h=function(o){F=F||o.type,W?F==o.type&&f.toggle(W):m()}}P=!1===g.onClickComponent?null:void 0!==g.noDragClickTolerance?d.addNoDragClickHandler(g.onClickComponent||v,h,{tolerance:g.noDragClickTolerance}):e(g.onClickComponent||v,k,h)}return g.openPopup&&m(),{remove:function(){W&&"function"!=typeof W&&(f.close(W),C(W),W._popupWrapper&&(W.domNode&&W.domNode.parentNode===W._popupWrapper&&W._popupWrapper.removeChild(W.domNode),p.destroy(W._popupWrapper),delete W._popupWrapper),delete W.__openPopupWidgetFunc,delete W.__popupWidgetOpenFlag),P&&P.remove()}}}}var f={};return f.makePopup=_,f.setLocked=function(o,e){o.__lockPopupWidgetFlag=e},f.open=function(o){o&&!o.__lockPopupWidgetFlag&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},f.close=function(o){o&&!o.__lockPopupWidgetFlag&&a.close(o)},f.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},f.toggle=function(o){f.isOpen(o)?f.close(o):f.open(o)},f.refresh=function(o){if(o){var e=o.__popupInfo,n=r.isBodyLtr();e&&c.around(e.wrapper,e.around,e.orient,n)}},f.getWrapper=function(o){return o&&o._popupWrapper},f});