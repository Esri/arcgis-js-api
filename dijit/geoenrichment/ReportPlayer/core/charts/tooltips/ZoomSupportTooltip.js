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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojox/charting/action2d/Tooltip","dojox/lang/functional","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],(function(e,t,o,a,i,s){var n=Math.PI/4,r=Math.PI/2,c={_tooltips:[],show:function(e,t,o,a){this.hide(),this._tooltips.push(s.showTooltipForNode(o,e,{position:t,notRestricted:!0,classes:a&&[a]}))},hide:function(){this._tooltips.forEach((function(e){e&&e.destroy()})),this._tooltips.length=0}};return e(t,{tooltipClass:null,process:function(e){if("onplotreset"===e.type||"onmouseout"===e.type)return c.hide(),void("onplotreset"===e.type&&delete this.angles);if(e.shape&&"onmouseover"===e.type){var t=["after-centered","before-centered"];if(this._needSetRectFromShape());else switch(e.element){case"marker":case"circle":case"spider_circle":case"spider_plot":case"candlestick":break;case"column":t=["above-centered","below-centered","after-centered","before-centered"];case"bar":break;default:if(!this.angles){var s="number"==typeof e.run.data[0]?o.map(e.run.data,"x ? Math.max(x, 0) : 0"):o.map(e.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=o.map(o.scanl(s,"+",0),"* 2 * Math.PI / this",o.foldl(s,"+",0))}var l=a._degToRad(e.plot.opt.startAngle),d=(this.angles[e.index]+this.angles[e.index+1])/2+l;l&&(d<0||d>2*Math.PI)&&(d=Math.abs(2*Math.PI-Math.abs(d))),d<n||(d<r+n?t=["below-centered","above-centered"]:d<Math.PI+n?t=["before-centered","after-centered"]:d<2*Math.PI-n&&(t=["above-centered","below-centered"]))}i.isMobileDevice()&&(t=["above-centered","below-centered"]);var h=this.text(e,this.plot);h&&c.show(this._format(h),t,e.shape.rawNode,this.tooltipClass)}},_needSetRectFromShape:function(){return!1}})}));