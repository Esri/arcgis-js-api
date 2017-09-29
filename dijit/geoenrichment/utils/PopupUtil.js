// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/utils/onClickTouch","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/when","dojo/sniff","dijit/popup","dijit/place","./MouseUtil","dojo/domReady!"],function(o,e,n,p,r,t,i,u,a,s,l,c){function f(e,a,l,f){function v(o){if(f.overlay&&o._popupWrapper){var e=r.create("div",{"class":f.overlay.overlayClass});if(f.overlay.overlayParent)r.place(e,f.overlay.overlayParent);else{r.place(e,y,"before");var n=i.get(o._popupWrapper,"zIndex");i.set(e,"zIndex",n)}o.__popupOverlay=e}}function _(o){o.__popupOverlay&&(r.destroy(o.__popupOverlay),o.__popupOverlay=null)}function g(r){r&&f.stopEventPropagation&&r.stopPropagation(),u(m||("function"==typeof e?e():e),function(e){m=e,m.domNode&&(m.__openPopupWidgetFunc=g,w||(w=!0,y=s.moveOffScreen(m),u(f.onPreShow&&f.onPreShow(),function(){var e=f.orient||["below"];if(y&&f.allowAutoOrientation!==!1){var r=-1!==e.indexOf("below"),i=t.position(l),u=t.position(y);r&&i.y+i.h+u.h>document.body.clientHeight&&(r=!r),e=e.map(function(o){return"below"!=o||r?o:"above"})}var d;f.noOverflow&&(m.baseClass="esriGENoOverflow "+m.baseClass),s.open({parent:a,popup:m,around:l,orient:e,onClose:function(){w=!1,d&&d.remove(),m.__popupWidgetOpenFlag=!1,_(m),f.onClose&&f.onClose()}}),f.noOverflow&&(m.baseClass=m.baseClass.replace("esriGENoOverflow ","")),y&&f.wrapperClass&&p.add(y,f.wrapperClass),m.__popupInfo=o.mixin({},s.getTopPopup()),m.__popupInfo.orient=e,m.__popupInfo.around=l,_(m),v(m),f.onShow&&f.onShow(),m.__popupWidgetOpenFlag=!0,C&&(m.own&&m.own(C),C=null),f.closeOnClickOutside!==!1&&setTimeout(function(){d=n(document.body,O,function(o){c.fixTouchEvent(o),c.isMouseOver(y)||f.isMouseOver&&f.isMouseOver()||m.isMouseOver&&m.isMouseOver()||(m.domNode&&s.close(m),d.remove())})},0)})))})}if(e){f=f||{};var O=f.openMouseEvent?f.openMouseEvent:"click, mouseup",m="function"!=typeof e?e:null;if(m)var y=s.moveOffScreen(m);var w=!1;m&&(m.__openPopupWidgetFunc=g);var C;if(f.openOnMouseEvent!==!1){var P=g;if(f.toggleOnClick){var b;P=function(o){b=b||o.type,m?b==o.type&&d.toggle(m):g()}}C=n(f.onClickComponent||l,O,P)}return f.openPopup&&g(),{remove:function(){C&&C.remove()}}}}var d={};return d.makePopup=f,d.open=function(o){o&&!o.__popupWidgetOpenFlag&&o.__openPopupWidgetFunc&&o.__openPopupWidgetFunc()},d.close=function(o){o&&s.close(o)},d.isOpen=function(o){return!(!o||!o.__popupWidgetOpenFlag)},d.toggle=function(o){d.isOpen(o)?d.close(o):d.open(o)},d.refresh=function(o){if(o){var e=o.__popupInfo,n=t.isBodyLtr();l.around(e.wrapper,e.around,e.orient,n)}},d.getWrapper=function(o){return o&&o._popupWrapper},d});