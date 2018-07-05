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

define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/_base/connect","dojox/color/_base","dojox/charting/action2d/PlotAction","dojo/fx/easing","dojox/gfx/fx","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,o,e,i,n,r,a,s,c){var h=function(t){return function(){return t}},u=function(t){return c.getHighlightColor(t)},l=function(t){var o=u(t);return o.a=.7,o};return o("dojox.charting.action2d.Highlight",r,{defaultParams:{duration:400,easing:a.backOut},optionalParams:{highlight:"red"},_useStroke:!0,constructor:function(o,e,i){i=i||{};var n=i&&i.highlight;this.colorFunc=n?t.isFunction(n)?n:h(n):u,this._useStroke=!!i.stroke,this.connect()},process:function(t){if(t.shape&&t.type in this.overOutEvents&&"spider_circle"!==t.element&&"spider_plot"!==t.element){"spider_poly"===t.element&&this.colorFunc===u&&(this.colorFunc=l);var o,n=t.run.name,r=t.index;if(n in this.anim?o=this.anim[n][r]:this.anim[n]={},o)o.action.stop(!0);else{var a;if(this._useStroke){var c=t.shape.getStroke();a=c&&c.color}else a=t.shape.getFill();if(!(a&&a instanceof e))return;this.anim[n][r]=o={start:a,end:this.colorFunc(a)}}var h=o.start,d=o.end;if("onmouseout"===t.type){var g=h;h=d,d=g}o.action=s[this._useStroke?"animateStroke":"animateFill"]({shape:t.shape,duration:this.duration,easing:this.easing,color:{start:h,end:d}}),"onmouseout"===t.type&&i.connect(o.action,"onEnd",this,function(){this.anim[n]&&delete this.anim[n][r]}),o.action.play()}}})});