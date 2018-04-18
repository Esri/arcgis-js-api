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

define(["dojo/_base/Color","dojox/color/Palette"],function(o,r){function t(o,r,t){return o&=255,r&=255,Math.round(o*(1-t)+r*t)}var n={};return n.toCSSColor=function(r,t,e){return"string"!=typeof r||/^0x/i.test(r)||(r=o.fromString(r)),r instanceof o?t||1==r.a?r.toHex():r.toCss(!0):null==r||isNaN(r)?e?n.toCSSColor(e,t):"#000000":(r="00000"+Number(r).toString(16),"#"+r.substr(r.length-6))},n.toColor=function(r,t){return"object"==typeof r?(new o).setColor(r):o.fromString(n.toCSSColor(r,!1,t))},n.transform=function(t,n){var e=new r;return e.colors=[new o(t)],e.transform({use:"hsv",dh:n.dh||0,ds:n.ds||0,dv:n.dv||0}).colors[0]},n.generateAnalogousColorScheme=function(o,t,n){return r.generators.analogous({base:o,high:t,low:n}).colors},n.generateGradient=function(o,r){var o=o.map(n.toRGBColor),t=[];if(0==o.length-1||1==r){for(var e=o[0],a=0;a<r;a++)t.push(e);return t}var u=1/(r-1);for(a=0;a<r;a++)t.push(n.getGradientRGBColor(o,a*u));return t},n.getGradientRGBColor=function(o,r,t){var e=o.length-1,a=e<1||r<=0?0:r>=1?e:-1;return a>=0?o[a]:(r*=e,a=Math.floor(r),a==e&&a--,n.mixRGBColors(o[a],o[a+1],r-a,t))},n.mixRGBColors=function(o,r,n,e){n>1?n=1:n<0&&(n=0);var a=t(o,r,n),u=t(o>>8,r>>8,n),i=t(o>>16,r>>16,n);return((e?t(o>>24,r>>24,n):0)<<24)+(i<<16)+(u<<8)+a},n.toRGBColor=function(o,r){return o=n.toCSSColor(o,!0,r),parseInt("0x"+o.substr(1))},n.getContrastColor=function(o,r,t,e){return n.isLightColor(o,e)?n.toColor(r,"#000000"):n.toColor(t,"#FFFFFF")},n.isLightColor=function(o,r){return r=void 0===r?128:r,(299*((o=n.toRGBColor(o))>>16&255)+587*(o>>8&255)+114*(255&o))/1e3>=r},n.colorsEqual=function(r,t){return r instanceof o||(r=n.toColor(r)),t instanceof o||(t=n.toColor(t)),r.a==t.a&&r.r==t.r&&r.g==t.g&&r.b==t.b},n.isTransparent=function(o){return o=n.toCSSColor(o),"rgba(0,0,0,0)"===o.toLowerCase().replace(/\s/g,"")},n.generateRandomColor=function(r){function t(){return n+Math.round((e-n)*Math.random())}r=r||{};var n=r.min||0,e=r.max||255,a=r.randomizeAlpha?t():1;if(r.grayScheme){var u=t();return new o([u,u,u,a])}return new o([t(),t(),t(),a])},n});