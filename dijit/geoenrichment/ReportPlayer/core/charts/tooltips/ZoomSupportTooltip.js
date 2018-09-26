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

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/dom-class","dojo/dom-geometry","dijit/Tooltip","dojox/charting/action2d/Tooltip","dojox/lang/functional","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,o,s,a,i,n,l,r,d,h){var c=Math.PI/4,u=Math.PI/2,_={_nodeInLayoutCheckHandle:null,_tooltipClass:null,_tooltipContainerClass:null,show:function(e,t,o,a,n,l){s.remove(i._masterTT.domNode,i._masterTT.domNode.className),s.add(i._masterTT.domNode,"dijitTooltip"),this._setClasses(),t&&(this.hide(t),i.show(e,t,o),this._setClasses(n,l),this._setListeners(t,a))},hide:function(e){i.hide(e),this._setClasses(),this._setListeners(null,null)},_setClasses:function(e,t){i._masterTT&&i._masterTT.domNode&&(delete i._masterTT._customClasses,this._tooltipClass&&s.remove(i._masterTT.domNode,this._tooltipClass),this._tooltipClass=null,this._tooltipContainerClass&&s.remove(i._masterTT.containerNode,this._tooltipContainerClass),this._tooltipContainerClass=null,e&&(this._tooltipClass=e,s.add(i._masterTT.domNode,this._tooltipClass),i._masterTT._customClasses=this._tooltipClass),t&&(this._tooltipContainerClass=t,s.add(i._masterTT.containerNode,this._tooltipContainerClass)))},_setListeners:function(e,t){var o=this;clearInterval(this._nodeInLayoutCheckHandle),this._nodeInLayoutCheckHandle=null,t&&(this._nodeInLayoutCheckHandle=setInterval(function(){h.isNodeInLayout(t)||o.hide(e)},500))}};return e(n,{tooltipClass:null,tooltipContainerClass:null,process:function(e){function s(){t.mixin(h,i())}function i(){var t=e.shape.rawNode.getBoundingClientRect(),o=a.position(n.chart.node,!0);return{x:t.left-o.x,y:t.top-o.y,w:t.width,h:t.height}}var n=this;if("onplotreset"===e.type||"onmouseout"===e.type)return _.hide(this.aroundRect),this.aroundRect=null,void("onplotreset"===e.type&&delete this.angles);if(e.shape&&"onmouseover"===e.type){var h={type:"rect"},m=["after-centered","before-centered"];if(this._needSetRectFromShape())s();else{switch(e.element){case"marker":case"circle":case"spider_circle":case"spider_plot":case"candlestick":s();break;case"column":m=["above-centered","below-centered"];case"bar":s();break;default:if(!this.angles){var p="number"==typeof e.run.data[0]?l.map(e.run.data,"x ? Math.max(x, 0) : 0"):l.map(e.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=l.map(l.scanl(p,"+",0),"* 2 * Math.PI / this",l.foldl(p,"+",0))}var C=r._degToRad(e.plot.opt.startAngle),f=(this.angles[e.index]+this.angles[e.index+1])/2+C;s(),C&&(f<0||f>2*Math.PI)&&(f=Math.abs(2*Math.PI-Math.abs(f))),f<c||(f<u+c?m=["below-centered","above-centered"]:f<Math.PI+c?m=["before-centered","after-centered"]:f<2*Math.PI-c&&(m=["above-centered","below-centered"]))}o("dojo-bidi")&&this._recheckPosition(e,h,m)}d.isMobileDevice()&&(m=["above-centered","below-centered"]);var T=this.chart.getCoords();h.x+=T.x,h.y+=T.y,h.x=Math.round(h.x),h.y=Math.round(h.y),h.w=Math.ceil(h.w),h.h=Math.ceil(h.h),this.aroundRect=h;var v=this.text(e,this.plot);v&&_.show(this._format(v),this.aroundRect,m,e.shape.rawNode,this.tooltipClass,this.tooltipContainerClass)}},_needSetRectFromShape:function(){return!1}})});