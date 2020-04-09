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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/when","dijit/popup","dijit/place","./DeviceUtil","./DnDUtil","./MouseUtil","dojo/domReady!"],(function(o,e,n,p,r,i,t,l,u,a,c,d){var s={};return s.makePopup=function(u,_,f,v){if(u){var g=(v=v||{}).openMouseEvent?v.openMouseEvent:a.clickOrRelease,C="function"!=typeof u?u:null;if(C)var y=l.moveOffScreen(C);var O,m=!1;if(C&&(C.__openPopupWidgetFunc=w),!1!==v.openOnMouseEvent){var k,W=w;if(v.toggleOnClick)W=function(o){k=k||o.type,C?k===o.type&&s.toggle(C):w()};O=!1===v.onClickComponent?null:void 0!==v.noDragClickTolerance?c.addNoDragClickHandler(v.onClickComponent||f,W,{tolerance:v.noDragClickTolerance}):e(v.onClickComponent||f,g,W)}return v.openPopup&&w(),{remove:function(){C&&"function"!=typeof C&&(s.close(C),h(C),C._popupWrapper&&(C.domNode&&C.domNode.parentNode===C._popupWrapper&&C._popupWrapper.removeChild(C.domNode),p.destroy(C._popupWrapper),delete C._popupWrapper),delete C.__openPopupWidgetFunc,delete C.__popupWidgetOpenFlag),O&&O.remove()}}}function b(o){o.__popupOverlay&&(p.destroy(o.__popupOverlay),o.__popupOverlay=null)}function h(o){m=!1,o.__bodyClickHandler&&o.__bodyClickHandler.remove(),o.__bodyClickHandler=null,o.__popupWidgetOpenFlag=!1,b(o),v.onClose&&v.onClose()}function w(c){c&&v.stopEventPropagation&&c.stopPropagation(),m||(m=!0,t(C||("function"==typeof u?u():u),(function(u){(C=u).domNode?(C.__openPopupWidgetFunc=w,y=l.moveOffScreen(C),t(v.onPreShow&&v.onPreShow(),(function(){var t=function(o){if(!o)return["below"];var e=[];return o.forEach((function(o){var n=r.isBodyLtr();switch(o){case"before-alt":n=!n;case"after-alt":return e.push(n?{aroundCorner:"BR",corner:"BL"}:{aroundCorner:"BL",corner:"BR"}),void e.push(n?{aroundCorner:"TR",corner:"TL"}:{aroundCorner:"TL",corner:"TR"})}e.push(o)})),e}(v.orient);if(y&&!1!==v.allowAutoOrientation){var u=-1!==t.indexOf("below"),c=r.position(f),k=r.position(y);u&&c.y+c.h+k.h>document.body.clientHeight&&(u=!u),t=t.map((function(o){return"below"!=o||u?o:"above"}))}if(v.noOverflow&&(C.baseClass="esriGENoOverflow "+C.baseClass),l.open({parent:_,popup:C,around:f,orient:t,onClose:function(){h(C)}}),v.suppressReposition&&clearTimeout(l._aroundMoveListener),v.noOverflow&&(C.baseClass=C.baseClass.replace("esriGENoOverflow ","")),y&&v.wrapperClass&&n.add(y,v.wrapperClass),C.__popupInfo=o.mixin({},l.getTopPopup()),C.__popupInfo.orient=t,C.__popupInfo.around=f,b(C),function(o){if(v.overlay&&o._popupWrapper){var e=p.create("div",{class:v.overlay.overlayClass});if(v.overlay.overlayParent)p.place(e,v.overlay.overlayParent);else{p.place(e,y,"before");var n=i.get(o._popupWrapper,"zIndex");i.set(e,"zIndex",n)}o.__popupOverlay=e}}(C),v.onShow&&v.onShow(),C.__popupWidgetOpenFlag=!0,O&&C.own&&C.own(O),C.__bodyClickHandler&&C.__bodyClickHandler.remove(),!1!==v.closeOnClickOutside){var W="function"==typeof v.closeOnClickOutside?v.closeOnClickOutside:null;setTimeout((function(){C.__bodyClickHandler&&C.__bodyClickHandler.remove(),C.__bodyClickHandler=e(document.body,a.isMobileDevice()?a.press:g,(function(o){m&&(d.fixTouchEvent(o),W&&!W(o)||d.isMouseOver(y)||v.isMouseOver&&v.isMouseOver()||C.isMouseOver&&C.isMouseOver()||C.__lockPopupWidgetFlag||s.close(C))}))}))}}))):m=!1})))}},s.setLocked=function(o,e){o.__lockPopupWidgetFlag=e},s.open=function(o){o&&!o.__lockPopupWidgetFlag&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},s.close=function(o){o&&!o.__lockPopupWidgetFlag&&l.close(o)},s.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},s.toggle=function(o){s.isOpen(o)?s.close(o):s.open(o)},s.refresh=function(o){if(o){var e=o.__popupInfo,n=r.isBodyLtr();e&&u.around(e.wrapper,e.around,e.orient,n)}},s.getWrapper=function(o){return o&&o._popupWrapper},s}));