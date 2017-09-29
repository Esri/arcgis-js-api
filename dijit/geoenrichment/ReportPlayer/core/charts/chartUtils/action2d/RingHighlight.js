// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/_base/connect","dojox/color/_base","dojox/charting/action2d/PlotAction","dojo/fx/easing","dojox/gfx/fx"],function(n,o,t,i,e,a,r,s){var c=100,l=75,u=50,h=function(n){return function(){return n}},d=function(n){var o=new e.Color(n),t=o.toHsl();0==t.s?t.l=t.l<50?100:0:(t.s=c,t.l<u?t.l=l:t.l>l?t.l=u:t.l=t.l-u>l-t.l?u:l);var i=e.fromHsl(t);return i.a=o.a,i},f=function(n){var o=d(n);return o.a=.7,o};return o("dojox.charting.action2d.Highlight",a,{defaultParams:{duration:400,easing:r.backOut},optionalParams:{highlight:"red"},constructor:function(o,t,i){var e=i&&i.highlight;this.colorFunc=e?n.isFunction(e)?e:h(e):d,this.connect()},process:function(n){if(n.shape&&n.type in this.overOutEvents&&"spider_circle"!=n.element&&"spider_plot"!=n.element){"spider_poly"==n.element&&this.colorFunc==d&&(this.colorFunc=f);var o,e=n.run.name,a=n.index;if(e in this.anim?o=this.anim[e][a]:this.anim[e]={},o)o.action.stop(!0);else{var r=n.shape.getStroke(),c=r&&r.color;if(!(c&&c instanceof t))return;this.anim[e][a]=o={start:c,end:this.colorFunc(c)}}var l=o.start,u=o.end;if("onmouseout"==n.type){var h=l;l=u,u=h}o.action=s.animateStroke({shape:n.shape,duration:this.duration,easing:this.easing,color:{start:l,end:u}}),"onmouseout"==n.type&&i.connect(o.action,"onEnd",this,function(){this.anim[e]&&delete this.anim[e][a]}),o.action.play()}}})});