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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/when","dojo/sniff","dijit/popup","dijit/place","./DnDUtil","./MouseUtil","dojo/domReady!"],function(o,e,n,p,i,t,r,l,u,a,c,s,d){function f(e,u,c,f){function _(o){if(f.overlay&&o._popupWrapper){var e=i.create("div",{class:f.overlay.overlayClass});if(f.overlay.overlayParent)i.place(e,f.overlay.overlayParent);else{i.place(e,C,"before");var n=r.get(o._popupWrapper,"zIndex");r.set(e,"zIndex",n)}o.__popupOverlay=e}}function g(o){o.__popupOverlay&&(i.destroy(o.__popupOverlay),o.__popupOverlay=null)}function O(i){i&&f.stopEventPropagation&&i.stopPropagation(),l(y||("function"==typeof e?e():e),function(e){y=e,y.domNode&&(y.__openPopupWidgetFunc=O,k||(k=!0,C=a.moveOffScreen(y),l(f.onPreShow&&f.onPreShow(),function(){var e=f.orient||["below"];if(C&&!1!==f.allowAutoOrientation){var i=-1!==e.indexOf("below"),r=t.position(c),l=t.position(C);i&&r.y+r.h+l.h>document.body.clientHeight&&(i=!i),e=e.map(function(o){return"below"!=o||i?o:"above"})}var s;if(f.noOverflow&&(y.baseClass="esriGENoOverflow "+y.baseClass),a.open({parent:u,popup:y,around:c,orient:e,onClose:function(){k=!1,s&&s.remove(),y.__popupWidgetOpenFlag=!1,g(y),f.onClose&&f.onClose()}}),f.noOverflow&&(y.baseClass=y.baseClass.replace("esriGENoOverflow ","")),C&&f.wrapperClass&&p.add(C,f.wrapperClass),y.__popupInfo=o.mixin({},a.getTopPopup()),y.__popupInfo.orient=e,y.__popupInfo.around=c,g(y),_(y),f.onShow&&f.onShow(),y.__popupWidgetOpenFlag=!0,w&&(y.own&&y.own(w),w=null),!1!==f.closeOnClickOutside){var O="function"==typeof f.closeOnClickOutside?f.closeOnClickOutside:null;setTimeout(function(){s=n(document.body,m,function(o){d.fixTouchEvent(o),O&&!O(o)||d.isMouseOver(C)||f.isMouseOver&&f.isMouseOver()||y.isMouseOver&&y.isMouseOver()||y.__lockPopupWidgetFlag||(v.close(y),s.remove())})},0)}})))})}if(e){f=f||{};var m=f.openMouseEvent?f.openMouseEvent:"click, mouseup",y="function"!=typeof e?e:null;if(y)var C=a.moveOffScreen(y);var k=!1;y&&(y.__openPopupWidgetFunc=O);var w;if(!1!==f.openOnMouseEvent){var P=O;if(f.toggleOnClick){var W;P=function(o){W=W||o.type,y?W==o.type&&v.toggle(y):O()}}w=!1===f.onClickComponent?null:void 0!==f.noDragClickTolerance?s.addNoDragClickHandler(f.onClickComponent||c,P,{tolerance:f.noDragClickTolerance}):n(f.onClickComponent||c,m,P)}return f.openPopup&&O(),{remove:function(){w&&w.remove()}}}}var v={};return v.makePopup=f,v.setLocked=function(o,e){o.__lockPopupWidgetFlag=e},v.open=function(o){o&&!o.__lockPopupWidgetFlag&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},v.close=function(o){o&&!o.__lockPopupWidgetFlag&&a.close(o)},v.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},v.toggle=function(o){v.isOpen(o)?v.close(o):v.open(o)},v.refresh=function(o){if(o){var e=o.__popupInfo,n=t.isBodyLtr();e&&c.around(e.wrapper,e.around,e.orient,n)}},v.getWrapper=function(o){return o&&o._popupWrapper},v});