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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/dom-class","dojo/dom-geometry","dojo/aspect","dojo/on","dojo/mouse","dojo/sniff","dijit/Tooltip","./DomUtil","./MouseUtil","dojo/domReady!"],function(o,e,t,i,s,l,d,n,a){var r={};d.show("",document.body),d.hide(document.body);var T=dijit.byId("dijit__MasterTooltip_0");T.addCustomClasses=function(e){T.removeCustomClasses(),e&&(o.add(T.domNode,e),T._customClasses=e)},T.removeCustomClasses=function(){T._customClasses&&o.remove(T.domNode,T._customClasses),delete T._customClasses},T.orient=function(o,t,i,s,d){T.connectorNode.style.top="";var n=s.h,a=s.w;o.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft","TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[t+"-"+i],T.addCustomClasses(T._customClasses),T.domNode.style.width="auto";var r=e.position(T.domNode);(l("ie")||l("trident"))&&(r.w+=2);var p=Math.min(Math.max(a,1),r.w);if(e.setMarginBox(T.domNode,{w:p}),"B"==i.charAt(0)&&"B"==t.charAt(0)){var u=e.position(o),c=T.connectorNode.offsetHeight;if(u.h>n){var _=n-(d.h+c>>1);T.connectorNode.style.top=_+"px",T.connectorNode.style.bottom=""}else T.connectorNode.style.bottom=Math.min(Math.max(d.h/2-c/2,0),u.h-c)+"px",T.connectorNode.style.top=""}else T.connectorNode.style.top="",T.connectorNode.style.bottom="";return Math.max(0,r.w-a)};r.hideTooltipForNode=function(e){e&&(e.__setTooltipToNodeMouseLeaveHandle&&e.__setTooltipToNodeMouseLeaveHandle.remove(),clearInterval(e.__setTooltipToNodeInLayoutHandle),clearInterval(e.__setTooltipToNodeMouseOverHandle),e.__setTooltipToNodeClickHandle&&e.__setTooltipToNodeClickHandle.remove(),e.__setTooltipToNodeMouseLeaveMasterHandle&&e.__setTooltipToNodeMouseLeaveMasterHandle.remove(),o.remove(e,"esriMapsAnalystSimpleTextTooltip"),d.hide(e))},r.setTooltipToNode=function(e,t,l){if(e){l=l||{};var p=Array.isArray(l.classes)?l.classes.join(" "):l.classes;if(p=(p||"")+" esriGETooltip",e.__setTooltipToNodeClasses=p,r.hideTooltipForNode(e),delete e.title,e.__setTooltipToNodeMouseEnterHandle&&e.__setTooltipToNodeMouseEnterHandle.remove(),t)return e.__setTooltipToNodeMouseEnterHandle=i(e,s.enter,function(){function u(){T.addCustomClasses(p),d.show(c,e,l.position||["after","before"])}e.__setTooltipToNodeMouseLeaveHandle&&e.__setTooltipToNodeMouseLeaveHandle.remove(),clearInterval(e.__setTooltipToNodeInLayoutHandle),clearInterval(e.__setTooltipToNodeMouseOverHandle),e.__setTooltipToNodeClickHandle&&e.__setTooltipToNodeClickHandle.remove(),e.__setTooltipToNodeMouseLeaveMasterHandle&&e.__setTooltipToNodeMouseLeaveMasterHandle.remove(),o.add(e,"esriMapsAnalystSimpleTextTooltip");var c="function"==typeof t?t():t;if(c){u();var _=r.hideTooltipForNode.bind(r,e);e.__setTooltipToNodeMouseLeaveHandle=i.once(e,s.leave,function(){!l.stayOnHover&&_()}),l.ignoreNodeRemoval||(e.__setTooltipToNodeInLayoutHandle=setInterval(function(){!n.isNodeInLayout(e)&&_()},300)),e.__setTooltipToNodeMouseOverHandle=setInterval(function(){(!l.stayOnHover||!a.isMouseOver(T.domNode))&&!a.isMouseOver(e)&&_()},300),e.__setTooltipToNodeClickHandle=i(e,"click",function(o){o.stopPropagation(),l.hideOnClick?_():u()}),l.stayOnHover&&(e.__setTooltipToNodeMouseLeaveMasterHandle=i(T.domNode,s.leave,_))}}),{remove:function(){t=null,r.hideTooltipForNode(e)}}}};var p=null;return r.autoTooltip=function(o){i(o,".TrimWithEllipses:mouseover",function(){this!==p&&this.offsetWidth<this.scrollWidth&&(p=this,d.show(p.textContent,p,["above","below"]),i.once(p,"mouseout, mousedown, touchstart",function(){d.hide(p),p=null}))})},r});