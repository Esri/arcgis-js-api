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

define(["dojox/uuid/generateRandomUuid","./RowDataUtil","../GridLayoutCalculatorQueryUtil"],function(e,n,o){function a(e,n){var a,t=[],l=0;return n&&Object.keys(n).forEach(function(a){o.fieldToColumn(e,a)?l++:delete n}),l&&e.columns.some(function(e){if((a||n[e.field])&&(t.push(e),a=!0),n[e.field]&&l--,!l)return!0}),t}function t(e,n){var a,t=[],l=0;return n&&Object.keys(n).forEach(function(a){o.dataIdToData(e,a)?l++:delete n}),l&&e.store.data.some(function(e){if((a||n[e.id])&&(t.push(e),a=!0),n[e.id]&&l--,!l)return!0}),t}var l={};return l.recalcRows=function(l){var d={};l.columns.forEach(function(e,n){d[e.field]=n});var i;if(l.store.data.forEach(function(n,t){if(n.index=t,n.style=n.style||{},n.style.fields=n.style.fields||{},void 0===n.id&&(n.id=e()),void 0===n.style.height&&(n.style.height=l.layoutDefaults.defaultRowHeight),delete n.excludedIndexHorizontal,delete n.movableFieldsHashHorizontal,delete n.fieldToColumnSpanSourceField,n.columnSpans){n.excludedIndexHorizontal={},n.movableFieldsHashHorizontal={},n.fieldToColumnSpanSourceField={},n._columnSpans=n._columnSpans||{};for(i in n.columnSpans){var r=n._columnSpans[i],s={},c=r?a(l,r):o.getSpannedColumns(l,i,n.columnSpans[i]);c.length>1&&(c.forEach(function(e){s[e.field]=!0,e.field!==i&&(n.excludedIndexHorizontal[d[e.field]]=!0,n.fieldToColumnSpanSourceField[e.field]=i)}),n.movableFieldsHashHorizontal[i]=c[c.length-1].field),n.columnSpans[i]=c.length,n._columnSpans[i]=s}var f=0;Object.keys(n.columnSpans).forEach(function(e){n.columnSpans[e]<2?(delete n.columnSpans[e],delete n._columnSpans[e]):f++}),f||(delete n.columnSpans,delete n._columnSpans)}delete n.excludedIndexVertical,delete n.movableIndexHashVertical,delete n.fieldToRowSpanSourceDataIndex,n.fieldInfos=n.fieldInfos||{}}),l.store.data.forEach(function(e,n){if(e.rowSpans){e._rowSpans=e._rowSpans||{};for(i in e.rowSpans){var o=e._rowSpans[i],a={};a[e.id]=!0;var r,s=d[i],c=e.rowSpans[i];if(o)r=t(l,o);else{r=[];for(var f=n;f<n+c;f++)r.push(l.store.data[f])}r.length>1&&(r.forEach(function(n){if(n.id!==e.id){n.excludedIndexVertical=n.excludedIndexVertical||{},n.excludedIndexVertical[s]=!0,n.fieldToRowSpanSourceDataIndex=n.fieldToRowSpanSourceDataIndex||{},n.fieldToRowSpanSourceDataIndex[i]=e.index;var o=e.columnSpans&&e.columnSpans[i];if(o)for(var t=1;t<o;t++)n.excludedIndexVertical[s+t]=!0,n.fieldToRowSpanSourceDataIndex[l.columns[s+t].field]=e.index}a[n.id]=!0}),e.movableIndexHashVertical=e.movableIndexHashVertical||{},e.movableIndexHashVertical[i]=n+r.length-1),e.rowSpans[i]=r.length,e._rowSpans[i]=a}}}),l.store.data.forEach(function(e,n){if(e.rowSpans){for(i in e.rowSpans)e.rowSpans[i]=Math.min(e.rowSpans[i],l.store.data.length-n);var o=0;Object.keys(e.rowSpans).forEach(function(n){e.rowSpans[n]<2?(delete e.rowSpans[n],e._rowSpans&&delete e._rowSpans[n]):o++}),o||(delete e.rowSpans,delete e._rowSpans)}}),l.store.data.forEach(function(e,n){e.fieldInfos&&Object.keys(e.fieldInfos).forEach(function(n){void 0===d[n]&&delete e.fieldInfos[n]}),e.style&&e.style.fields&&Object.keys(e.style.fields).forEach(function(n){void 0===d[n]&&delete e.style.fields[n]})}),l.looseResize){l.store.data.forEach(function(e){l.columns.some(function(o){n.getDataHeightOwn(l,e,o.field)||n.setDataHeight(l,e,o.field,e.style.height)})});var r=l.store.data[l.store.data.length-1],s=n.recalcGridHeight(l);l.columns.some(function(e){var o=0;l.store.data.forEach(function(a){o+=n.getDataHeightOwn(l,a,e.field)});var a=s-o;0!==a&&n.setDataHeight(l,r,e.field,n.getDataHeightOwn(l,r,e.field)+a)})}n.recalcGridHeight(l)},l});