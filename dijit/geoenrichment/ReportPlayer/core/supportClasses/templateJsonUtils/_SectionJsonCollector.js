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

define([],function(){var e={};return e.collectSectionJsons=function(e){var t=[];return e?e.sections?e.sections:e.sectionsTables?(e.sectionsTables.forEach(function(e){function n(e,t){e.style.fields=e.style.fields||{};var n=e.style.fields[t]=e.style.fields[t]||{};return n.height||e.style.height}function s(e,t){e.style.fields=e.style.fields||{};var n=e.style.fields[t.field]=e.style.fields[t.field]||{};return n.width||t.style.width}function i(e,t){e.style.fields=e.style.fields||{};var n=e.style.fields[t]=e.style.fields[t]||{};return n.backgroundColor}var o,r={},l={};e.data.columns.forEach(function(e){o&&(l[o.field]=e),o=e,r[e.field]=e}),e.data.data.forEach(function(o,f){o.fieldInfos&&Object.keys(o.fieldInfos).forEach(function(a){function c(){var e=s(o,r[a]),t=o.columnSpans&&o.columnSpans[a]||1;if(t>1)for(var n,i=0;t-1>i;i++)n=l[n?n.field:a],e+=s(o,n);return e}function d(){var t=n(o,a),s=o.rowSpans&&o.rowSpans[a]||1;if(s>1)for(var i,r=f+1,l=0;s-1>l;l++)i=e.data.data[r++],t+=n(i,a);return t}var u=o.fieldInfos[a];o.style.fields;u&&u.sectionJson&&(u.sectionJson._parentBox={w:c(),h:d()},u.sectionJson._parentStyle={backgroundColor:i(o,a)},t.push(u.sectionJson))})})}),t.filter(function(e){return!!e.stack})):[]:[]},e.getParentBox=function(e){return e&&e._parentBox},e.getParentStyle=function(e){return e&&e._parentStyle},e});