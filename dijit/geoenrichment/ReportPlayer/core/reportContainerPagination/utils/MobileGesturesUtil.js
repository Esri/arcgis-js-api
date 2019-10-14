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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/on","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/mobile/GesturesUtil"],function(e,t,n){var o={};return o.enableMobileGestures=function(t){function r(){i&&i.remove(),c&&c.remove(),a&&a.remove()}var i,c,a;e(t.domNode,"touchstart",function(n){r();var l=n.targetTouches[0].clientX,u=n.targetTouches[0].clientY;o._isOverActiveMap(t,n)||(i=e(t.domNode,"touchmove",function(e){e.preventDefault();var r=o._getOverPanelWithScroll(t,n);if(r){var i=e.targetTouches[0].clientX,c=e.targetTouches[0].clientY;r.changeScroll(l-i,u-c),l=i,u=c}}),c=e(t.domNode,"touchend",function(e){r();var o=e.clientX-n.clientX;o<-100?t.showNextSlide():o>100&&t.showPreviousSlide()}),a=e(t.domNode,"touchcancel",r))}),n.preventDoubleTapZoom(t.domNode)},o._isOverActiveMap=function(e,n){var r=o._getOverSection(e,n),i=r&&r.getMapImages()[0],c=i&&i.getCurrentMap();return c&&c.isMapNavigation&&t.isMouseOver(i.domNode,{event:n})},o._getOverPanelWithScroll=function(e,t){var n=o._getOverSection(e,t),r=n&&n.getInfographic();return r&&r.getInnerInfographic()&&r.getInnerInfographic().hasScroll&&r.getInnerInfographic().hasScroll()?r.getInnerInfographic():null},o._getOverSection=function(e,t){var n=e.infographicPage.getCurrentSection();return n&&!n.isEmpty()?n:null},o});