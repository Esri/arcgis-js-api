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

define(["dojox/uuid/generateRandomUuid","./RowDataUtil","../GridLayoutCalculatorQueryUtil"],function(e,n,a){function o(e,n){var o,t=[],l=0;return n&&Object.keys(n).forEach(function(o){a.fieldToColumn(e,o)?l++:delete n}),l&&e.columns.some(function(e){if((o||n[e.field])&&(t.push(e),o=!0),n[e.field]&&l--,!l)return!0}),t}function t(e,n){var o,t=[],l=0;return n&&Object.keys(n).forEach(function(o){a.dataIdToData(e,o)?l++:delete n}),l&&e.store.data.some(function(e){if((o||n[e.id])&&(t.push(e),o=!0),n[e.id]&&l--,!l)return!0}),t}var l={};return l.recalcRows=function(l){var i={};l.columns.forEach(function(e,n){i[e.field]=n});var d;if(l.store.data.forEach(function(n,t){if(n.index=t,n.style=n.style||{},n.style.fields=n.style.fields||{},void 0===n.id&&(n.id=e()),void 0===n.style.height&&(n.style.height=l.layoutDefaults.defaultRowHeight),delete n.excludedIndexHorizontal,delete n.movableFieldsHashHorizontal,n.columnSpans){n.excludedIndexHorizontal={},n.movableFieldsHashHorizontal={},n._columnSpans=n._columnSpans||{};for(d in n.columnSpans){var s=n._columnSpans[d],r={},c=s?o(l,s):a.getSpannedColumns(l,d,n.columnSpans[d]);c.length>1&&(c.forEach(function(e){r[e.field]=!0,e.field!==d&&(n.excludedIndexHorizontal[i[e.field]]=!0)}),n.movableFieldsHashHorizontal[d]=c[c.length-1].field),n.columnSpans[d]=c.length,n._columnSpans[d]=r}var f=0;Object.keys(n.columnSpans).forEach(function(e){n.columnSpans[e]<2?(delete n.columnSpans[e],delete n._columnSpans[e]):f++}),f||(delete n.columnSpans,delete n._columnSpans)}delete n.excludedIndexVertical,delete n.movableIndexHashVertical,n.fieldInfos=n.fieldInfos||{}}),l.store.data.forEach(function(e,n){if(e.rowSpans){e._rowSpans=e._rowSpans||{};for(d in e.rowSpans){var a=e._rowSpans[d],o={};o[e.id]=!0;var s,r=i[d],c=e.rowSpans[d];if(a)s=t(l,a);else{s=[];for(var f=n;f<n+c;f++)s.push(l.store.data[f])}s.length>1&&(s.forEach(function(n){if(n.id!==e.id){n.excludedIndexVertical=n.excludedIndexVertical||{},n.excludedIndexVertical[r]=!0;var a=e.columnSpans&&e.columnSpans[d];if(a)for(var t=1;t<a;t++)n.excludedIndexVertical[r+t]=!0}o[n.id]=!0}),e.movableIndexHashVertical=e.movableIndexHashVertical||{},e.movableIndexHashVertical[d]=n+s.length-1),e.rowSpans[d]=s.length,e._rowSpans[d]=o}}}),l.store.data.forEach(function(e,n){if(e.rowSpans){for(d in e.rowSpans)e.rowSpans[d]=Math.min(e.rowSpans[d],l.store.data.length-n);var a=0;Object.keys(e.rowSpans).forEach(function(n){e.rowSpans[n]<2?(delete e.rowSpans[n],e._rowSpans&&delete e._rowSpans[n]):a++}),a||(delete e.rowSpans,delete e._rowSpans)}}),l.store.data.forEach(function(e,n){e.fieldInfos&&Object.keys(e.fieldInfos).forEach(function(n){void 0===i[n]&&delete e.fieldInfos[n]}),e.style&&e.style.fields&&Object.keys(e.style.fields).forEach(function(n){void 0===i[n]&&delete e.style.fields[n]})}),l.looseResize){l.store.data.forEach(function(e){l.columns.some(function(a){n.getDataHeightOwn(l,e,a.field)||n.setDataHeight(l,e,a.field,e.style.height)})});var s=l.store.data[l.store.data.length-1],r=n.recalcGridHeight(l);l.columns.some(function(e){var a=0;l.store.data.forEach(function(o){a+=n.getDataHeightOwn(l,o,e.field)});var o=r-a;0!==o&&n.setDataHeight(l,s,e.field,n.getDataHeightOwn(l,s,e.field)+o)})}n.recalcGridHeight(l)},l});