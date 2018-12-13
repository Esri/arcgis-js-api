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

define(["esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/mobile/GesturesUtil"],function(e,n){var o={};return o.enableMobileGestures=function(e){var t;n.enableGesturesOnNode(e.domNode,{enableFlyingScroll:!0,canZoom:function(n){return!o._isOverActiveMap(e,n)},onZoomIn:function(){e.zoomIn({showAnimation:!0,showLabel:!0})},onZoomOut:function(){e.zoomOut({showAnimation:!0,showLabel:!0})},canScroll:function(n){return t=o._getOverPanelWithScroll(e,n),!o._isOverActiveMap(e,n)},onScrollChanged:function(n,o){if(t)t.changeScroll(n,o);else{var r=e.getScrollableContainer();r&&(r.scrollLeft+=n,r.scrollTop+=o)}}}),n.preventDoubleTapZoom(e.domNode)},o._isOverActiveMap=function(n,t){var r=o._getOverSection(n,t),i=r&&r.getMapImages()[0],l=i&&i.getCurrentMap();return l&&l.isMapNavigation&&e.isMouseOver(i.domNode,{event:t})},o._getOverPanelWithScroll=function(e,n){var t=o._getOverSection(e,n),r=t&&t.getInfographic();return r&&r.getInnerInfographic()&&r.getInnerInfographic().hasScroll&&r.getInnerInfographic().hasScroll()?r.getInnerInfographic():null},o._getOverSection=function(n,o){var t;return n.infographicPage.getSections().some(function(n){if(e.isMouseOver(n.domNode,{event:o}))return t=n,!0}),t&&!t.isEmpty()?t:null},o});