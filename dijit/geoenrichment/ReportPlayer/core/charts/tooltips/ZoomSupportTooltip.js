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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojox/charting/action2d/Tooltip","dojox/lang/functional","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],(function(e,t,o,i,n,a){var s=Math.PI/4,r=Math.PI/2,l={_tooltips:[],show:function(e,t,o,i){if(this.hide(),e){var n="string"==typeof e?{node:e}:e,s=n.node,r=s?s.outerHTML||s.innerHTML||s:null;if(r&&"string"==typeof r){var l=-1!==r.indexOf("href")||-1!==r.indexOf("esriGELink");l||(i=(i||"")+" esriGENonInteractable"),this._tooltips.push(a.showTooltipForNode(o,s,{position:t,notRestricted:!0,stayOnHover:l,classes:i&&[i],style:n.style}))}}},hide:function(){this._tooltips.forEach((function(e){e&&e.destroy()})),this._tooltips.length=0}};return e(t,{tooltipClass:null,process:function(e){if("onplotreset"!==e.type&&"onmouseout"!==e.type){if(e.shape&&"onmouseover"===e.type){var t=["after-centered","before-centered"];if(this._needSetRectFromShape());else switch(e.element){case"marker":case"circle":case"spider_circle":case"spider_plot":case"candlestick":break;case"column":t=["above-centered","below-centered","after-centered","before-centered"];case"bar":break;default:if(!this.angles){var a="number"==typeof e.run.data[0]?o.map(e.run.data,"x ? Math.max(x, 0) : 0"):o.map(e.run.data,"x ? Math.max(x.y, 0) : 0");this.angles=o.map(o.scanl(a,"+",0),"* 2 * Math.PI / this",o.foldl(a,"+",0))}var c=i._degToRad(e.plot.opt.startAngle),d=(this.angles[e.index]+this.angles[e.index+1])/2+c;c&&(d<0||d>2*Math.PI)&&(d=Math.abs(2*Math.PI-Math.abs(d))),d<s||(d<r+s?t=["below-centered","above-centered"]:d<Math.PI+s?t=["before-centered","after-centered"]:d<2*Math.PI-s&&(t=["above-centered","below-centered"]))}n.isMobileDevice()&&(t=["above-centered","below-centered"]);var h=this.text(e,this.plot);h&&l.show("string"==typeof h?this._format(h):h,t,e.shape.rawNode,this.tooltipClass)}}else"onplotreset"===e.type&&delete this.angles},_needSetRectFromShape:function(){return!1},_hide:function(){l.hide()}})}));