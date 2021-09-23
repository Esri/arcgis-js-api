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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/Color","dojox/color/_base","dojox/color/Palette"],(function(o,r,t){var n={};function e(o,r,t){return o&=255,r&=255,Math.round(o*(1-t)+r*t)}return n.toCSSColor=function(r,t,e){return"string"!=typeof r||/^0x/i.test(r)||(r=o.fromString(r)),r instanceof o?t||1===r.a?r.toHex():r.toCss(!0):null==r||isNaN(r)?e?n.toCSSColor(e,t):"#000000":"#"+(r="00000"+Number(r).toString(16)).substr(r.length-6)},n.toColor=function(r,t){return"object"==typeof r?(new o).setColor(r):o.fromString(n.toCSSColor(r,!1,t))},n.getCSSColorWithAlpha=function(o,r){return n.toCSSColor(n.getColorWithAlpha(o,r))},n.getColorWithAlpha=function(r,t){var n=(new o).setColor(r);return n.a=t,n},n.transform=function(r,n){var e=new t;return e.colors=[new o(r)],e.transform({use:void 0!==n.dl?"hsl":"hsv",dh:n.dh||0,ds:n.ds||0,dv:n.dv||0,dl:n.dl||0}).colors[0]},n.generateAnalogousColorScheme=function(o,r,n){return t.generators.analogous({base:o,high:r,low:n}).colors},n.applyColorHue=function(o,t){o=new r.Color(o),t=new r.Color(t);var n=o.toHsl(),e=t.toHsl(),l=r.fromHsl({h:n.h,s:0===n.s?0:0===e.s?n.s:e.s,l:e.l});return l.a=t.a,l},n.getColorParams=function(o){var t=(o=new r.Color(o)).toHsv();return t.l=o.toHsl().l,t},n.generateGradient=function(o,r){var t=[];if(0===(o=o.map(n.toRGBColor)).length-1||1===r){for(var e=o[0],l=0;l<r;l++)t.push(e);return t}var a=1/(r-1);for(l=0;l<r;l++)t.push(n.getGradientRGBColor(o,l*a));return t},n.getGradientRGBColor=function(o,r,t){var e=o.length-1,l=e<1||r<=0?0:r>=1?e:-1;return l>=0?o[l]:(r*=e,(l=Math.floor(r))===e&&l--,n.mixRGBColors(o[l],o[l+1],r-l,t))},n.mixRGBColors=function(o,r,t,n){t>1?t=1:t<0&&(t=0);var l=e(o,r,t),a=e(o>>8,r>>8,t),s=e(o>>16,r>>16,t);return((n?e(o>>24,r>>24,t):0)<<24)+(s<<16)+(a<<8)+l},n.toRGBColor=function(o,r){return o=n.toCSSColor(o,!0,r),parseInt("0x"+o.substr(1))},n.getContrastColor=function(o,r,t,e){return n.isLightColor(o,e)?n.toColor(r,"#000000"):n.toColor(t,"#FFFFFF")},n.getHighlightColor=function(o,t){t=t||{};var n,e=new r.Color(o);if(x=e.toHsl(),"darker"===t.method)x.l=x.l<50?x.l+30:x.l-20,x.s>0&&(x.s+=30);else{var l=t.saturation||100,a=t.luminosity1||75,s=t.luminosity2||50;0===x.s?x.l=x.l<50?x.l+30:x.l-20:(x.s=l,x.l<s?x.l=a:x.l>a?x.l=s:x.l=x.l-s>a-x.l?s:a)}return(n=r.fromHsl(x)).a=e.a,n},n.getLightness=function(o){return(299*((o=n.toRGBColor(o))>>16&255)+587*(o>>8&255)+114*(255&o))/1e3},n.isLightColor=function(o,r){return n.getLightness(o)>=(void 0===r?128:r)},n.colorsEqual=function(r,t){return r instanceof o||(r=n.toColor(r)),t instanceof o||(t=n.toColor(t)),r.a==t.a&&r.r==t.r&&r.g==t.g&&r.b==t.b},n.isTransparent=function(o){return"rgba(0,0,0,0)"===(o=n.toCSSColor(o)).toLowerCase().replace(/\s/g,"")},n.generateRandomColor=function(r){var t=(r=r||{}).min||0,n=r.max||255;function e(){return t+Math.round((n-t)*Math.random())}var l=r.randomizeAlpha?e():1;if(r.grayScheme){var a=e();return new o([a,a,a,l])}return new o([e(),e(),e(),l])},n}));