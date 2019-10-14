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

define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/dom-geometry","dojox/charting/action2d/Tooltip","dojox/lang/functional","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(e,t,o,i,a,n,s,r,h){var c=Math.PI/4,d=Math.PI/2,l={_tooltips:[],show:function(e,t,o,i,a){this.hide(),this._tooltips.push(h.showTooltipForNode(i,e,{position:o,notRestricted:!0,classes:a&&[a]}))},hide:function(){this._tooltips.forEach(function(e){e&&e.destroy()}),this._tooltips.length=0}};return e(a,{tooltipClass:null,process:function(e){function a(){t.mixin(u,h())}function h(){var t=e.shape.rawNode.getBoundingClientRect(),o=i.position(p.chart.node,!0);return{x:t.left-o.x,y:t.top-o.y,w:t.width,h:t.height}}var p=this;if("onplotreset"===e.type||"onmouseout"===e.type)return l.hide(this.aroundRect),this.aroundRect=null,void("onplotreset"===e.type&&delete this.angles);if(e.shape&&"onmouseover"===e.type){var u={type:"rect"},f=["after-centered","before-centered"];if(this._needSetRectFromShape())a();else{switch(e.element){case"marker":case"circle":case"spider_circle":case"spider_plot":case"candlestick":a();break;case"column":f=["above-centered","below-centered"];case"bar":a();break;default:if(!this.angles){var x="number"==typeof e.run.data[0]?n.map(e.run.data,"x ? Math.max(x, 0) : 0"):n.map(e.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=n.map(n.scanl(x,"+",0),"* 2 * Math.PI / this",n.foldl(x,"+",0))}var b=s._degToRad(e.plot.opt.startAngle),m=(this.angles[e.index]+this.angles[e.index+1])/2+b;a(),b&&(m<0||m>2*Math.PI)&&(m=Math.abs(2*Math.PI-Math.abs(m))),m<c||(m<d+c?f=["below-centered","above-centered"]:m<Math.PI+c?f=["before-centered","after-centered"]:m<2*Math.PI-c&&(f=["above-centered","below-centered"]))}o("dojo-bidi")&&this._recheckPosition(e,u,f)}r.isMobileDevice()&&(f=["above-centered","below-centered"]);var g=this.chart.getCoords();u.x+=g.x,u.y+=g.y,u.x=Math.round(u.x),u.y=Math.round(u.y),u.w=Math.ceil(u.w),u.h=Math.ceil(u.h),this.aroundRect=u;var v=this.text(e,this.plot);v&&l.show(this._format(v),this.aroundRect,f,e.shape.rawNode,this.tooltipClass)}},_needSetRectFromShape:function(){return!1}})});