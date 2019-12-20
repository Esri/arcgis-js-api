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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/utils/ColorUtil"],function(r,t,n){var e={};r.mixin(e,t);var i={"font-size":"fontSize","line-height":"lineHeight","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor"},o={};for(var a in i)o[i[a]]=a;e.splitTrim=function(r,t,n){var e=String(r).split(t).map(function(r){return r.trim()});return n?e.filter(function(r){return!!r}):e},e.parseStyleString=function(r){r=r||"";var t=e.splitTrim(r,";",!0),n={};return t.forEach(function(r){var t=e.splitTrim(r,":"),o=i[t[0]];if(o){var a=t[1];"rgba(0, 0, 0, 0)"===a&&(a="transparent"),n[o]=a}}),n},e.composeStyleString=function(r,t){var e=t&&t.addPx,i="";for(var a in r){var l=o[a];if(l){var f=r[a];f&&("backgroundColor"===a&&(f=n.toCSSColor(f)),i+=l+":"+f+(e&&e[l]?"px;":";"))}}return i},e.removeZeroProperties=function(r){return Object.keys(r).forEach(function(t){0===Number(r[t])&&delete r[t]}),r};var l={valign:{center:"middle"}},f={valign:{middle:"center"}};return e.getPropValuePtoE=function(r,t){return l[r]&&l[r][t]||t},e.getPropValueEtoP=function(r,t){return f[r]&&f[r][t]||t},e.KEY_OPERATOR_RE=/^(!=|>=|<=|<|>|=)/,e.ONE_FIELD_KEY_TEST=/^(default|(<|>|<=|>=|!=|=|)(-?\d+\.\d+|-?\d+))$/,e.KEY_INTERVAL_SEPARATOR=";",e});