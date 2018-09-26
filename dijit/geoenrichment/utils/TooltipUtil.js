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

define(["dojo/dom-class","dojo/dom-geometry","dojo/on","dojo/mouse","dojo/sniff","dijit/Tooltip","./DeviceUtil","./DnDUtil","./DomUtil","./MouseUtil","dojo/domReady!"],function(o,e,t,i,s,l,d,n,a,r){var T={};l.show("",document.body),l.hide(document.body);var p=dijit.byId("dijit__MasterTooltip_0");p.addCustomClasses=function(e){p.removeCustomClasses(),e&&(o.add(p.domNode,e),p._customClasses=e)},p.removeCustomClasses=function(){p._customClasses&&o.remove(p.domNode,p._customClasses),delete p._customClasses},p.orient=function(o,t,i,l,d){p.connectorNode.style.top="";var n=l.h,a=l.w;o.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft","TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[t+"-"+i],p.addCustomClasses(p._customClasses),p.domNode.style.width="auto";var r=e.position(p.domNode);(s("ie")||s("trident"))&&(r.w+=2);var T=Math.min(Math.max(a,1),r.w);if(e.setMarginBox(p.domNode,{w:T}),"B"==i.charAt(0)&&"B"==t.charAt(0)){var u=e.position(o),c=p.connectorNode.offsetHeight;if(u.h>n){var m=n-(d.h+c>>1);p.connectorNode.style.top=m+"px",p.connectorNode.style.bottom=""}else p.connectorNode.style.bottom=Math.min(Math.max(d.h/2-c/2,0),u.h-c)+"px",p.connectorNode.style.top=""}else p.connectorNode.style.top="",p.connectorNode.style.bottom="";return Math.max(0,r.w-a)};var u=300;T.hideTooltipForNode=function(e){e&&(T._tooltipCleanUp(e),o.remove(e,"esriMapsAnalystSimpleTextTooltip"),l.hide(e))},T._tooltipCleanUp=function(o){o.__setTooltipToNodeMouseLeaveHandle&&o.__setTooltipToNodeMouseLeaveHandle.remove(),clearInterval(o.__setTooltipToNodeInLayoutHandle),clearInterval(o.__setTooltipToNodeMouseOverHandle),o.__setTooltipToNodeClickHandle&&o.__setTooltipToNodeClickHandle.remove(),o.__setTooltipToNodeMouseLeaveMasterHandle&&o.__setTooltipToNodeMouseLeaveMasterHandle.remove()},T.setTooltipToNode=function(e,s,c){function m(){function n(){p.addCustomClasses(v),l.show(m,e,c.position||["after","before"])}if(T._tooltipCleanUp(e),!_){var m="function"==typeof s?s():s;if(m){o.add(e,"esriMapsAnalystSimpleTextTooltip"),n();var N=T.hideTooltipForNode.bind(T,e);d.isMobileDevice()?e.__setTooltipToNodeMouseLeaveHandle=t(document.body,"touchstart",function(o){r.isMouseOver(e,{event:o})||N()}):e.__setTooltipToNodeMouseLeaveHandle=t.once(e,i.leave,function(){!c.stayOnHover&&N()}),c.ignoreNodeRemoval||(e.__setTooltipToNodeInLayoutHandle=setInterval(function(){!a.isNodeInLayout(e)&&N()},u)),d.isMobileDevice()||(e.__setTooltipToNodeMouseOverHandle=setInterval(function(){(!c.stayOnHover||!r.isMouseOver(p.domNode))&&!r.isMouseOver(e)&&N()},u),e.__setTooltipToNodeClickHandle=t(e,"click",function(o){o.stopPropagation(),c.hideOnClick?N():n()}),c.stayOnHover&&(e.__setTooltipToNodeMouseLeaveMasterHandle=t(p.domNode,i.leave,N)))}}}if(e){c=c||{};var v=Array.isArray(c.classes)?c.classes.join(" "):c.classes;if(v=(v||"")+" esriGETooltip",c.isComplexTooltip&&(v+=" esriGETooltipComplex"),e.__setTooltipToNodeClasses=v,T.hideTooltipForNode(e),delete e.title,e.__setTooltipToNodeMouseEnterHandle&&e.__setTooltipToNodeMouseEnterHandle.remove(),s){var _=!1;return d.isMobileDevice()?e.__setTooltipToNodeMouseEnterHandle=n.addNoDragClickHandler(e,m):e.__setTooltipToNodeMouseEnterHandle=t(e,i.enter,m),{remove:function(){s=null,T.hideTooltipForNode(e)},suspend:function(){T.hideTooltipForNode(e),_=!0},resume:function(){_=!1}}}}};var c=null;return T.autoTooltip=function(o){t(o,".TrimWithEllipses:mouseover",function(){this!==c&&this.offsetWidth<this.scrollWidth&&(c=this,l.show(c.textContent,c,["above","below"]),t.once(c,"mouseout, mousedown, touchstart",function(){l.hide(c),c=null}))})},T});