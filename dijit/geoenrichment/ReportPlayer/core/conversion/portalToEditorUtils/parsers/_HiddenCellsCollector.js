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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["./_TableRowFixer"],function(r){var t={};return t.collectHiddenCells=function(t,n){var a={};return t&&t.forEach(function(t,e){var i=0;r.fixTr(t,e,a,n),t.tags&&t.tags.forEach(function(r){for(;a[i+"_"+e];)i++;var t=Number(r.attributes&&r.attributes.colspan),n=Number(r.attributes&&r.attributes.rowspan);if(t>1||n>1)for(var o=t||1,u=n||1,f=i;f<i+o;f++)for(var c=e;c<e+u;c++)f===i&&c===e||(a[f+"_"+c]=!0);i++})}),a},t.isHidden=function(r,t,n){return r[t+"_"+n]},t});