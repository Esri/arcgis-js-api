// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/on","dojo/mouse","dojo/sniff","dijit/Tooltip","dijit/place","dojox/gfx","./DeviceUtil","./DnDUtil","./DomUtil","./MouseUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/domReady!"],(function(o,t,e,i,s,n,r,l,d,a,c,h,u,p,f,y,m){var v={};function T(){}var N,x,M=o(a._MasterTooltip,{_customClasses:null,_customStyle:null,_orientKey:null,addCustomClasses:function(o){o&&(e.add(this.domNode,o),this._customClasses=o)},setCustomStyle:function(o){this._customStyle=o},show:function(o,e,s,n,r,l,d){if(!this.aroundNode||this.aroundNode!==e||this.containerNode.innerHTML!=o)if("playing"!=this.fadeOut.status()){"string"==typeof o?this.containerNode.innerHTML=o:(this.containerNode.innerHTML="",i.place(o.domNode||o,this.containerNode)),r&&this.set("textDir",r),this.containerNode.align=n?"right":"left";var h=c.around(this.domNode,e,s&&s.length?s:a.defaultPosition,!n,t.hitch(this,"orient")),u=h.aroundNodePos;"M"==h.corner.charAt(0)&&"M"==h.aroundCorner.charAt(0)?(this.connectorNode.style.top=u.y+(u.h-this.connectorNode.offsetHeight>>1)-h.y+"px",this.connectorNode.style.left=""):"M"==h.corner.charAt(1)&&"M"==h.aroundCorner.charAt(1)?this.connectorNode.style.left=u.x+(u.w-this.connectorNode.offsetWidth>>1)-h.x+"px":(this.connectorNode.style.left="",this.connectorNode.style.top=""),this._drawBackground(),this.domNode.style.opacity="0",this.fadeIn.play(),this.isShowingNow=!0,this.aroundNode=e,this.onMouseEnter=l||T,this.onMouseLeave=d||T}else this._onDeck=arguments},orient:function(o,t,e,i,n){this.connectorNode.style.top="";var r=i.h,l=i.w;o.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft","TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[this._orientKey=t+"-"+e],this.addCustomClasses(this._customClasses),this.domNode.style.width="auto";var a=s.position(this.domNode);a.w=Math.ceil(a.w),(d("ie")||d("trident"))&&(a.w+=2);var c=Math.min(Math.max(l,1),a.w);if(s.setMarginBox(this.domNode,{w:c}),"B"==e.charAt(0)&&"B"==t.charAt(0)){var h=s.position(o),u=this.connectorNode.offsetHeight;if(h.h>r){var p=r-(n.h+u>>1);this.connectorNode.style.top=p+"px",this.connectorNode.style.bottom=""}else this.connectorNode.style.bottom=Math.min(Math.max(n.h/2-u/2,0),h.h-u)+"px",this.connectorNode.style.top=""}else this.connectorNode.style.top="",this.connectorNode.style.bottom="";return this._drawBackground(),Math.max(0,a.w-l)},_surface:null,_surfaceContainer:null,_drawBackground:function(){if(this._orientKey){var o=this.domNode.clientWidth,t=this.domNode.clientHeight,e=s.position(this.domNode),n=s.position(this.connectorNode),r=s.position(this.containerNode);n.x-=e.x,n.y-=e.y,r.x-=e.x,r.y-=e.y,r.x+=1,r.y+=1,r.w-=2,r.h-=2,this._surface&&this._surface.destroy(),this._surfaceContainer&&i.destroy(this._surfaceContainer);var l=this._surfaceContainer=i.create("div",{class:"esriGEAbsoluteStretched"},this.domNode,"first");l.style.pointerEvents="none";var d=this._surface=h.createSurface(l,o,t),a=[{x:r.x,y:r.y},{x:r.x+r.w,y:r.y},{x:r.x+r.w,y:r.y+r.h},{x:r.x,y:r.y+r.h},{x:r.x,y:r.y}],c=n.x+n.w/2,u=n.y+n.h/2;switch(this._orientKey){case"BL-TL":case"BM-TM":case"BR-TR":var p=[{x:c-5,y:r.y},{x:c,y:u},{x:c+5,y:r.y}];a.splice.apply(a,[1,0].concat(p));break;case"ML-MR":case"BL-BR":p=[{x:r.x+r.w,y:u-5},{x:c,y:u},{x:r.x+r.w,y:u+5}];a.splice.apply(a,[2,0].concat(p));break;case"TM-BM":case"TL-BL":case"TR-BR":p=[{x:c+5,y:r.y+r.h},{x:c,y:u},{x:c-5,y:r.y+r.h}];a.splice.apply(a,[3,0].concat(p));break;case"MR-ML":case"BR-BL":p=[{x:r.x,y:u+5},{x:c,y:u},{x:r.x,y:u-5}];a.splice.apply(a,[4,0].concat(p))}var f=d.createPolyline(a),y="function"==typeof this._customStyle?this._customStyle():this._customStyle,m=y&&y.backgroundColor||"white";f.setFill(m).setStroke({color:"#d3d3d3",width:1,join:"round"}),y&&y.color&&(this.containerNode.style.color=y.color)}}}),w=function(o,t,e,i,s){"string"==typeof e&&(e=[e]),e=e&&e.map((function(o){return{after:"after-centered",before:"before-centered"}[o]||o}));var n=new M;return s&&n.setCustomStyle(s),n.addCustomClasses(i),n.show(o,t,e),n};v.setTooltipToNode=function(o,t,e){if(e=e||{},o&&!m.isPlayerOnServer&&(v.hideTooltipForNode(o),o.__setTooltipToNodeMouseEnterHandle&&o.__setTooltipToNodeMouseEnterHandle.remove(),t)){var i=!1;return u.isMobileDevice()?o.__setTooltipToNodeMouseEnterHandle=p.addNoDragClickHandler(o,s):o.__setTooltipToNodeMouseEnterHandle=r(o,l.enter,s),e.showTooltip&&s(),{remove:function(){t=null,v.hideTooltipForNode(o)},suspend:function(){v.hideTooltipForNode(o),i=!0},resume:function(){i=!1},refresh:function(){o._shownTooltip&&s()}}}function s(){!i&&v.showTooltipForNode(o,t,e)}},v.showTooltipForNode=function(o,t,i){if(i=i||{},o&&!m.isPlayerOnServer){o.title="",v.hideTooltipForNode(o);var s="function"==typeof t?t():t;if(s){var n;"string"==typeof s&&i.textAlign&&(s="<div class='"+("start"===i.textAlign?"esriGEStart":"end"===i.textAlign?"esriGEEnd":"")+"'>"+s+"</div>"),e.add(o,"esriGESimpleTextTooltip"),h();var d=v.hideTooltipForNode.bind(v,o),a=function(o){n.own(o)},c=function(o,t){var e=setInterval(o,t);a({remove:function(){clearInterval(e)}})};return u.isMobileDevice()?a(r(document.body,"touchstart",(function(t){!y.isMouseOver(o,{event:t})&&d()}))):a(r.once(o,l.leave,(function(){!i.stayOnHover&&d()}))),i.ignoreNodeRemoval||c((function(){!f.isNodeInLayout(o)&&d()}),300),u.isMobileDevice()||(c((function(){(!i.stayOnHover||!y.isMouseOver(n.domNode))&&!y.isMouseOver(o)&&d()}),300),a(r(o,"click",(function(t){i.hideOnClick?d():!o._shownTooltip&&h()}))),i.stayOnHover&&a(r(n.domNode,l.leave,d))),o._shownTooltip}}function h(){v.hideTooltipForNode(o);var t=Array.isArray(i.classes)?i.classes.join(" "):i.classes;t=(t||"")+" esriGETooltip",i.notRestricted&&(t+=" notRestricted"),o._shownTooltip=n=w(s,o,i.position||["after","before"],t,i.style)}},v.hideTooltipForNode=function(o){o&&o._shownTooltip&&(e.remove(o,"esriGESimpleTextTooltip"),o._shownTooltip.destroy(),delete o._shownTooltip)},v.autoTooltip=function(o){m.isPlayerOnServer||r(o,".TrimWithEllipses:mouseover",(function(){if(this!==N&&this.offsetWidth<this.scrollWidth){var o=function(){N=null,x&&(x.tooltip.destroy(),x.mouseOutH.remove(),x.mouseMoveH.remove(),x=null)};o(),x={tooltip:w((N=this).textContent,N,["above","below"]),mouseOutH:r.once(N,"mouseout, mousedown, touchstart",o),mouseMoveH:r(document.body,"mousemove",(function(){y.isMouseOver(N)||o()}))}}}))},v.showClosableTooltip=function(o){var t="rtl"===document.dir&&"after"!==o.position||"rtl"!==document.dir&&"after"===o.position,e=_(o.message,o.tooltipClass,o.position,t);return b(e,o.node,o.timeout,t,o.onClosed)},v.removeClosableTooltip=function(o){o&&o._removeFunc&&o._removeFunc()};var _=function(o,t,s,n){var r,l,d=i.create("div",{class:"esriGEClosableTooltip esriGENonSelectable"+(t?" "+t:"")},document.body);function a(){var o=i.create("div",{class:"esriGEClosableTooltipTip"},d);e.add(o,n?"esriGEClosableTooltipTipRight":"esriGEClosableTooltipTipLeft")}function c(){r=i.create("div",{class:"esriGEClosableTooltipBody"},d),i.create("div",{innerHTML:o,class:"esriGEClosableTooltipLabel"},r),l=i.create("div",{class:"esriGEClosableTooltipCloseButton"},r)}return"after"!==s?(c(),a()):(a(),c()),d.style.position="fixed",{tooltip:d,body:r,closeButton:l}},b=function(o,t,e,i,l){var d,a,c,h,u,p;function y(){var e=s.position(t),r=e.x+";"+e.y+";"+e.w+";"+e.h;if(r!==d){d=r;var l=s.getMarginBox(o.tooltip);n.set(o.tooltip,{left:(i?e.x+e.w:e.x-l.w)+"px",top:e.y+e.h/2-l.h/2+"px"})}}y();var m=function(){a&&clearTimeout(a),c&&clearInterval(c),h&&clearInterval(h),u&&u.remove(),o.tooltip.parentNode&&o.tooltip.parentNode.removeChild(o.tooltip)};return c=setInterval((function(){f.isNodeInLayout(t)&&t.parentNode||(p=!1,m()),f.isNodeVisible(t)&&f.isNodeOnscreen(t)?(p=!0,f.show(o.tooltip)):(p=!1,f.hide(o.tooltip))}),0),h=setInterval((function(){p&&y()}),0),e&&(a=setTimeout(m,e)),u=r(o.closeButton,"click",(function(){m(),l&&l()})),o.tooltip._removeFunc=m,o.tooltip};return v.showTooltipForNode(document.body,"Normal <b>Bold</b> <i>Italic</i>",{}),v.hideTooltipForNode(document.body),v}));