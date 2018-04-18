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

define(["dojo/dom-class","dojo/on","dojo/mouse","dijit/Tooltip","./DomUtil","./MouseUtil","dojo/domReady!"],function(o,e,t,l,i,n){var s={};s.hideTooltipForNode=function(o){o&&(clearTimeout(o.__delayTooltip),clearInterval(o.__setTooltipToNodeInLayoutHandle),clearInterval(o.__setTooltipToNodeMouseOverHandle),l.hide(o))},s.setTooltipToNode=function(d,a,T){d&&(T=T||{},T.stayOnHover=T.stayOnHover||!1,T.classes=T.classes||null,d.__setTooltipToNodeMouseEnterHandle&&d.__setTooltipToNodeMouseEnterHandle.remove(),d.__setTooltipToNodeClickHandle&&d.__setTooltipToNodeClickHandle.remove(),clearInterval(d.__setTooltipToNodeInLayoutHandle),clearInterval(d.__setTooltipToNodeMouseOverHandle),l.hide(d),delete d.title,a&&(d.__setTooltipToNodeMouseEnterHandle=e(d,"mouseenter",function(){function u(){if(clearTimeout(d.__delayTooltip),l.show(r,d),T.classes){var t="object"==typeof T.classes?T.classes.join(" "):T.classes,i=dijit.byId("dijit__MasterTooltip_0");T.stayOnHover&&(e(i.domNode,"mouseenter",function(){clearTimeout(c)}),e(i.domNode,"mouseleave",function(){_()})),i.isShowingNow&&t&&o.add(i.domNode,t)}}o.add(d,"esriMapsAnalystSimpleTextTooltip"),d.__setTooltipToNodeClickHandle&&d.__setTooltipToNodeClickHandle.remove(),clearInterval(d.__setTooltipToNodeInLayoutHandle),clearInterval(d.__setTooltipToNodeMouseOverHandle);var r="function"==typeof a?a():a;if(r){var c,_=s.hideTooltipForNode.bind(s,d);d.__delayTooltip=setTimeout(u,300),d.__setTooltipToNodeClickHandle=e(d,"click",function(o){o.stopPropagation(),T.hideOnClick?_():u()}),d.__setTooltipToNodeInLayoutHandle=setInterval(function(){i.isNodeInLayout(d)||(c=setTimeout(_))},500),d.__setTooltipToNodeMouseOverHandle=setInterval(function(){n.isMouseOver(d)||(c=setTimeout(_))},500),e.once(d,t.leave,function(){c=setTimeout(_)})}})))};var d=null;return s.autoTooltip=function(o){e(o,".TrimWithEllipses:mouseover",function(){this!==d&&this.offsetWidth<this.scrollWidth&&(d=this,l.show(d.textContent,d,["above","below"]),e.once(d,"mouseout, mousedown, touchstart",function(){l.hide(d),d=null}))})},s});