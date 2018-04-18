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

define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/_base/connect","dojox/color/_base","dojox/charting/action2d/PlotAction","dojo/fx/easing","dojox/gfx/fx","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,o,e,n,i,a,r,s,l){var c=function(t){return function(){return t}},u=function(t){var o,e=new i.Color(t);return x=e.toHsl(),0===x.s?x.l=x.l<50?x.l+30:x.l-20:(x.s=100,x.l<50?x.l=75:x.l>75?x.l=50:x.l=x.l-50>75-x.l?50:75),o=i.fromHsl(x),o.a=e.a,o},h=function(t){var o=u(t);return o.a=.7,o};return o("dojox.charting.action2d.Highlight",a,{defaultParams:{duration:400,easing:r.backOut},optionalParams:{highlight:"red"},_useStroke:!0,constructor:function(o,e,n){n=n||{};var i=n&&n.highlight;this.colorFunc=i?t.isFunction(i)?i:c(i):u,this._useStroke=!!n.stroke,this.connect()},process:function(t){if(t.shape&&t.type in this.overOutEvents&&"spider_circle"!==t.element&&"spider_plot"!==t.element){"spider_poly"===t.element&&this.colorFunc===u&&(this.colorFunc=h);var o,i=t.run.name,a=t.index;if(i in this.anim?o=this.anim[i][a]:this.anim[i]={},o)o.action.stop(!0);else{var r;if(this._useStroke){var l=t.shape.getStroke();r=l&&l.color}else r=t.shape.getFill();if(!(r&&r instanceof e))return;this.anim[i][a]=o={start:r,end:this.colorFunc(r)}}var c=o.start,d=o.end;if("onmouseout"===t.type){var x=c;c=d,d=x}o.action=s[this._useStroke?"animateStroke":"animateFill"]({shape:t.shape,duration:this.duration,easing:this.easing,color:{start:c,end:d}}),"onmouseout"===t.type&&n.connect(o.action,"onEnd",this,function(){this.anim[i]&&delete this.anim[i][a]}),o.action.play()}}})});