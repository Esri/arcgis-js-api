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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/config","dijit/popup","dijit/place","dijit/Viewport","./DeviceUtil","./DnDUtil","./MouseUtil","dojo/domReady!"],(function(e,o,n,r,p,i,t,a,l,u,c,d,s,f){var _={};return _.makePopup=function(u,v,g,y){if(u){if(a.isPlayerOnServer)return{remove:function(){}};var C=(y=y||{}).openMouseEvent?y.openMouseEvent:d.clickOrRelease,O="function"!=typeof u?u:null;if(O)var m=l.moveOffScreen(O);var h,k=!1;if(O&&(O.__openPopupWidgetFunc=F),!1!==y.openOnMouseEvent){var W,b=F;if(y.toggleOnClick)b=function(e){W=W||e.type,O?W===e.type&&_.toggle(O):F()};h=!1===y.onClickComponent?null:void 0!==y.noDragClickTolerance?s.addNoDragClickHandler(y.onClickComponent||g,b,{tolerance:y.noDragClickTolerance}):o(y.onClickComponent||g,C,b)}return y.openPopup&&F(),{remove:function(){O&&"function"!=typeof O&&(_.close(O),P(O),O._popupWrapper&&(O.domNode&&O.domNode.parentNode===O._popupWrapper&&O._popupWrapper.removeChild(O.domNode),r.destroy(O._popupWrapper),delete O._popupWrapper),delete O.__openPopupWidgetFunc,delete O.__popupWidgetOpenFlag),h&&h.remove()}}}function w(e){e.__popupOverlay&&(r.destroy(e.__popupOverlay),e.__popupOverlay=null)}function P(e){k=!1,e.__bodyClickHandler&&e.__bodyClickHandler.remove(),e.__bodyClickHandler=null,e.__popupWidgetOpenFlag=!1,w(e),y.onClose&&y.onClose()}function F(a){a&&y.stopEventPropagation&&a.stopPropagation(),k||(k=!0,t(O||("function"==typeof u?u():u),(function(a){(O=a).domNode?(O.__openPopupWidgetFunc=F,m=l.moveOffScreen(O),t(y.onPreShow&&y.onPreShow(),(function(){var t=function(e){if(!e)return["below"];var o=[];return e.forEach((function(e){var n=p.isBodyLtr();switch(e){case"before-alt":n=!n;case"after-alt":return o.push(n?{aroundCorner:"BR",corner:"BL"}:{aroundCorner:"BL",corner:"BR"}),void o.push(n?{aroundCorner:"TR",corner:"TL"}:{aroundCorner:"TL",corner:"TR"})}o.push(e)})),o}(y.orient);if(m&&!1!==y.allowAutoOrientation){var a=t.indexOf("below");-1!==a&&-1===t.indexOf("above")&&t.splice(a+1,0,"above")}var u=-1;if(-1!==t.indexOf("after")||-1!==t.indexOf("before")){var s=c.getEffectiveBox(this.ownerDocument),W=p.position(g,!1);u=Math.floor(Math.max(W.y+W.h,s.h-W.y))-10}if(y.noOverflow&&(O.baseClass="esriGENoOverflow "+O.baseClass),v.isLeftToRight=v.isLeftToRight=function(){return"rtl"!==document.dir},l.open({parent:v,popup:O,around:g,maxHeight:u,orient:t,onClose:function(){P(O)}}),l._stack[l._stack.length-1].handlers.forEach((function(e){e.remove()})),y.suppressReposition&&clearTimeout(l._aroundMoveListener),y.noOverflow&&(O.baseClass=O.baseClass.replace("esriGENoOverflow ","")),m&&y.wrapperClass&&n.add(m,y.wrapperClass),O.__popupInfo=e.mixin({},l.getTopPopup()),O.__popupInfo.orient=t,O.__popupInfo.around=g,w(O),function(e){if(y.overlay&&e._popupWrapper){var o=r.create("div",{class:y.overlay.overlayClass});if(y.overlay.overlayParent)r.place(o,y.overlay.overlayParent);else{r.place(o,m,"before");var n=i.get(e._popupWrapper,"zIndex");i.set(o,"zIndex",n)}e.__popupOverlay=o}}(O),y.onShow&&y.onShow(O),O.__popupWidgetOpenFlag=!0,h&&O.own&&O.own(h),O.__bodyClickHandler&&O.__bodyClickHandler.remove(),!1!==y.closeOnClickOutside){var b="function"==typeof y.closeOnClickOutside?y.closeOnClickOutside:null;setTimeout((function(){O.__bodyClickHandler&&O.__bodyClickHandler.remove(),O.__bodyClickHandler=o(document.body,d.isMobileDevice()?d.press:C,(function(e){k&&(f.fixTouchEvent(e),b&&!b(e)||f.isMouseOver(m)||y.isMouseOver&&y.isMouseOver()||O.isMouseOver&&O.isMouseOver()||O.__lockPopupWidgetFlag||_.close(O))}))}))}}))):k=!1})))}},_.setLocked=function(e,o){e.__lockPopupWidgetFlag=o},_.open=function(e){e&&!e.__lockPopupWidgetFlag&&!e.__popupWidgetOpenFlag&&e.__openPopupWidgetFunc&&e.__openPopupWidgetFunc()},_.close=function(e){e&&!e.__lockPopupWidgetFlag&&l.close(e)},_.isOpen=function(e){return!(!e||!e.__popupWidgetOpenFlag)},_.toggle=function(e){_.isOpen(e)?_.close(e):_.open(e)},_.refresh=function(e){if(e){var o=e.__popupInfo,n=p.isBodyLtr();o&&u.around(o.wrapper,o.around,o.orient,n)}},_.getWrapper=function(e){return e&&e._popupWrapper},_}));