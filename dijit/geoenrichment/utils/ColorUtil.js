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

define(["dojo/_base/Color","dojox/color/_base","dojox/color/Palette"],function(o,r,t){function n(o,r,t){return o&=255,r&=255,Math.round(o*(1-t)+r*t)}var e={};return e.toCSSColor=function(r,t,n){return"string"!=typeof r||/^0x/i.test(r)||(r=o.fromString(r)),r instanceof o?t||1==r.a?r.toHex():r.toCss(!0):null==r||isNaN(r)?n?e.toCSSColor(n,t):"#000000":(r="00000"+Number(r).toString(16),"#"+r.substr(r.length-6))},e.toColor=function(r,t){return"object"==typeof r?(new o).setColor(r):o.fromString(e.toCSSColor(r,!1,t))},e.transform=function(r,n){var e=new t;return e.colors=[new o(r)],e.transform({use:"hsv",dh:n.dh||0,ds:n.ds||0,dv:n.dv||0}).colors[0]},e.generateAnalogousColorScheme=function(o,r,n){return t.generators.analogous({base:o,high:r,low:n}).colors},e.generateGradient=function(o,r){var o=o.map(e.toRGBColor),t=[];if(0==o.length-1||1==r){for(var n=o[0],l=0;l<r;l++)t.push(n);return t}var a=1/(r-1);for(l=0;l<r;l++)t.push(e.getGradientRGBColor(o,l*a));return t},e.getGradientRGBColor=function(o,r,t){var n=o.length-1,l=n<1||r<=0?0:r>=1?n:-1;return l>=0?o[l]:(r*=n,l=Math.floor(r),l==n&&l--,e.mixRGBColors(o[l],o[l+1],r-l,t))},e.mixRGBColors=function(o,r,t,e){t>1?t=1:t<0&&(t=0);var l=n(o,r,t),a=n(o>>8,r>>8,t),i=n(o>>16,r>>16,t);return((e?n(o>>24,r>>24,t):0)<<24)+(i<<16)+(a<<8)+l},e.toRGBColor=function(o,r){return o=e.toCSSColor(o,!0,r),parseInt("0x"+o.substr(1))},e.getContrastColor=function(o,r,t,n){return e.isLightColor(o,n)?e.toColor(r,"#000000"):e.toColor(t,"#FFFFFF")},e.getHighlightColor=function(o,t){t=t||{};var n,e=t.saturation||100,l=t.luminosity1||75,a=t.luminosity2||50,i=new r.Color(o);return x=i.toHsl(),0===x.s?x.l=x.l<50?x.l+30:x.l-20:(x.s=e,x.l<a?x.l=l:x.l>l?x.l=a:x.l=x.l-a>l-x.l?a:l),n=r.fromHsl(x),n.a=i.a,n},e.getLightness=function(o){return(299*((o=e.toRGBColor(o))>>16&255)+587*(o>>8&255)+114*(255&o))/1e3},e.isLightColor=function(o,r){return e.getLightness(o)>=(void 0===r?128:r)},e.colorsEqual=function(r,t){return r instanceof o||(r=e.toColor(r)),t instanceof o||(t=e.toColor(t)),r.a==t.a&&r.r==t.r&&r.g==t.g&&r.b==t.b},e.isTransparent=function(o){return o=e.toCSSColor(o),"rgba(0,0,0,0)"===o.toLowerCase().replace(/\s/g,"")},e.generateRandomColor=function(r){function t(){return n+Math.round((e-n)*Math.random())}r=r||{};var n=r.min||0,e=r.max||255,l=r.randomizeAlpha?t():1;if(r.grayScheme){var a=t();return new o([a,a,a,l])}return new o([t(),t(),t(),l])},e});