// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DnDUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","dojo/i18n!esri/nls/jsapi"],(function(t,n,e,i,o,s,l,d,c,u){return u=u.geoenrichment.dijit.ReportPlayer.Infographics,t(null,{parentWidget:null,_ddButtons:null,_shownButtons:null,constructor:function(t){n.mixin(this,t)},setDataDrillingButtonForSection:function(t,n){this._setDataDrillingButton({widget:t,getBox:function(){var n=[];return t.getTables().forEach((function(t){n.push(t.domNode)})),d.uniteNodeBoxes(n,t.domNode)},onClick:n})},setDataDrillingButtonForTableCell:function(t,n){this._setDataDrillingButton({widget:t,getBox:function(){return{x:0,y:0,w:t.domNode.clientWidth,h:t.domNode.clientHeight}},onClick:n})},_setDataDrillingButton:function(t){var n,d=t.widget,a=t.onClick,r=this;function h(){var n=i.create("div",{class:"dataDrilling_drillDataButton"},d.domNode);i.create("div",{class:"dijitInline dataDrilling_drillDataButtonIcon esriGESpaceAfterBig"},n);var e=i.create("div",{class:"dijitInline dataDrilling_drillDataButtonLabel",innerHTML:u.drillForMoreData},n),s=t.getBox();o.set(n,{left:s.x+"px",top:s.y+"px",width:s.w+"px",height:s.h+"px",lineHeight:s.h+"px"});var l=n.clientWidth;return l>s.w&&o.set(n,"left",s.x-(l-s.w)/2+"px"),e.style.maxWidth=l-50+"px",e.style.whiteSpace="normal",r._ddButtons.push({destroy:function(){i.destroy(n)}}),n}if(this._ddButtons=this._ddButtons||[],s.isMobileDevice()){var g;this._shownButtons=this._shownButtons||[];var f=function(t){n.style.opacity=t?1:0,r._shownButtons.splice(r._shownButtons.indexOf(n),1),t&&r._shownButtons.push(n),g&&g.remove(),t&&r._syncButtonWithScale(n)};l.addNoDragClickHandler(this.parentWidget.domNode,(function(){setTimeout((function(){!r._shownButtons.length&&c.isMouseOver(d.domNode,{checkAllChildren:!0})&&(n=n||h(),f(!0),setTimeout((function(){g=l.addNoDragClickHandler(n,(function(){f(!1),a(n)})),e.once(document.body,"touchend",(function(){f(!1)}))})))}))}),{detectLongPress:!0,longPressTimeout:750,ignoreReleaseIfLongPressHappened:!0,longPressCallback:function(){c.isMouseOver(d.domNode,{checkAllChildren:!0})&&(n=n||h(),f(!0),a(n),setTimeout((function(){f(!1)})))}})}else d.own(e.once(this.parentWidget.domNode,"mouseover",(function(){n=n||h(),r._syncButtonWithScale(n),e(n,"click",(function(){a(n)}))})))},_panelScale:null,notifyPanelScaleChanged:function(t){this._panelScale=t,this._ddButtons&&this._ddButtons.forEach(this._syncButtonWithScale.bind(this))},_syncButtonWithScale:function(t){t&&t.style&&(t.style.fontSize=13/(this._panelScale||1)+"px")},destroyButtons:function(){this._ddButtons=this._ddButtons||[],this._ddButtons.forEach((function(t){t.destroy()})),this._ddButtons.length=0}})}));