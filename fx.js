// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/connect","dojo/_base/fx","dojo/_base/lang","dojo/dom","dojo/dom-geometry","dojo/dom-style","dojo/fx","dojo/has","./kernel"],function(t,e,o,n,r,i,a,d,s){var l={animateRange:function(t){var n=t.range;return new e.Animation(o.mixin({curve:new e._Line(n.start,n.end)},t))},resize:function(t){var i=t.node=n.byId(t.node),a=t.start,d=t.end;if(!a){var s=r.getMarginBox(i),l=r.getPadBorderExtents(i);a=t.start={left:s.l+l.l,top:s.t+l.t,width:s.w-l.w,height:s.h-l.h}}if(!d){var h=t.anchor?t.anchor:{x:a.left,y:a.top},p=t.size;d=t.end={left:a.left-(p.width-a.width)*(h.x-a.left)/a.width,top:a.top-(p.height-a.height)*(h.y-a.top)/a.height,width:p.width,height:p.height}}return e.animateProperty(o.mixin({properties:{left:{start:a.left,end:d.left},top:{start:a.top,end:d.top},width:{start:a.width,end:d.width},height:{start:a.height,end:d.height}}},t))},slideTo:function(a){var d=a.node=n.byId(a.node),s=i.getComputedStyle,l=null,h=null,p=function(){var t=d;return function(){var e="absolute"==t.style.position?"absolute":"relative";if(l="absolute"==e?d.offsetTop:parseInt(s(d).top)||0,h="absolute"==e?d.offsetLeft:parseInt(s(d).left)||0,"absolute"!=e&&"relative"!=e){var o=r.position(t,!0);l=o.y,h=o.x,t.style.position="absolute",t.style.top=l+"px",t.style.left=h+"px"}}}();p();var u=e.animateProperty(o.mixin({properties:{top:{start:l,end:a.top||0},left:{start:h,end:a.left||0}}},a));return t.connect(u,"beforeBegin",u,p),u},flash:function(t){t=o.mixin({end:"#f00",duration:500,count:1},t),t.duration/=2*t.count;var r=n.byId(t.node),d=t.start;d||(d=i.getComputedStyle(r).backgroundColor);var s,l=t.end,h=t.duration,p=[],u=t.count,f={node:r,duration:h};for(s=0;u>s;s++)p.push(e.animateProperty(o.mixin({properties:{backgroundColor:{start:d,end:l}}},f))),p.push(e.animateProperty(o.mixin({properties:{backgroundColor:{start:l,end:d}}},f)));return a.chain(p)}};return d("extend-esri")&&o.mixin(o.getObject("fx",!0,s),l),l});