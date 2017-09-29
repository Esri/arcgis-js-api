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

define(["dojo/_base/Color","dojox/color/Palette"],function(o,r){function t(r,n,e){return"string"!=typeof r||/^0x/i.test(r)||(r=o.fromString(r)),r instanceof o?n||1==r.a?r.toHex():r.toCss(!0):null==r||isNaN(r)?e?t(e,n):"#000000":(r="00000"+Number(r).toString(16),"#"+r.substr(r.length-6))}function n(r,t){return"object"==typeof r?(new o).setColor(r):o.fromString(a.toCSSColor(r,!1,t))}function e(t,n){var e=new r;e.colors=[new o(t)];var s=e.transform({use:"hsv",dh:n.dh||0,ds:n.ds||0,dv:n.dv||0});return s.colors[0]}function s(o,r){return o=a.toCSSColor(o,!0,r),parseInt("0x"+o.substr(1))}function C(o,r,t,n){return a.isLightColor(o,n)?a.toColor(r,"#000000"):a.toColor(t,"#FFFFFF")}function l(o,r){r=void 0===r?128:r,o=a.toRGBColor(o);var t=o>>16&255,n=o>>8&255,e=255&o,s=(299*t+587*n+114*e)/1e3;return s>=r}function i(o,r){return a.toCSSColor(o).toLowerCase()==a.toCSSColor(r).toLowerCase()}function u(o){return o=a.toCSSColor(o),"rgba(0,0,0,0)"===o.toLowerCase().replace(/\s/g,"")}var a={};return a.toCSSColor=t,a.toColor=n,a.transform=e,a.toRGBColor=s,a.getContrastColor=C,a.isLightColor=l,a.compareColors=i,a.isTransparent=u,a});