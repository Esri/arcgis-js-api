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

define(["dojo/dom-class","dojo/on","dojo/mouse","dijit/Tooltip","./DomUtil","dojo/domReady!"],function(o,e,t,l,n){function i(i,s,d){i&&(d=d||{},d.stayOnHover=d.stayOnHover||!1,d.classes=d.classes||null,i.__setTooltipToNodeMouseEnterHandle&&i.__setTooltipToNodeMouseEnterHandle.remove(),i.__setTooltipToNodeClickHandle&&i.__setTooltipToNodeClickHandle.remove(),clearInterval(i.__setTooltipToNodeInLayoutHandle),l.hide(i),delete i.title,s&&(i.__setTooltipToNodeMouseEnterHandle=e(i,"mouseenter",function(){function a(){function t(){if(d.classes){var t="object"==typeof d.classes?d.classes.join(" "):d.classes,l=dijit.byId("dijit__MasterTooltip_0");d.stayOnHover&&(e(l.domNode,"mouseenter",function(){clearTimeout(u)}),e(l.domNode,"mouseleave",function(){T()})),l.isShowingNow&&t&&o.add(l.domNode,t)}}clearTimeout(r),l.show(c,i),t()}function T(){clearTimeout(r),clearInterval(i.__setTooltipToNodeInLayoutHandle),l.hide(i)}o.add(i,"esriMapsAnalystSimpleTextTooltip"),i.__setTooltipToNodeClickHandle&&i.__setTooltipToNodeClickHandle.remove(),clearInterval(i.__setTooltipToNodeInLayoutHandle);var c="function"==typeof s?s():s;if(c){var u,r=setTimeout(a,300);i.__setTooltipToNodeClickHandle=e(i,"click",a),i.__setTooltipToNodeInLayoutHandle=setInterval(function(){n.isNodeInLayout(i)||(u=setTimeout(T))},2e3),e.once(i,t.leave,function(){u=setTimeout(T)})}})))}var s={};return s.setTooltipToNode=i,s});