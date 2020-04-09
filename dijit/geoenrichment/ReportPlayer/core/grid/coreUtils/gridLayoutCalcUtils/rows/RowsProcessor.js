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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojox/uuid/generateRandomUuid","./RowDataUtil","../GridLayoutCalculatorQueryUtil"],(function(e,n,o){var a={};function t(e,n){var a,t=[],l=0;return n&&Object.keys(n).forEach((function(a){o.fieldToColumn(e,a)?l++:delete n[a]})),l&&e.columns.some((function(e){if((a||n[e.field])&&(t.push(e),a=!0),n[e.field]&&l--,!l)return!0})),t}function l(e,n){var a,t=[],l=0;return n&&Object.keys(n).forEach((function(a){o.dataIdToData(e,a)?l++:delete n[a]})),l&&e.store.data.some((function(e){if((a||n[e.id])&&(t.push(e),a=!0),n[e.id]&&l--,!l)return!0})),t}return a.recalcRows=function(a){var d,i={};if(a.columns.forEach((function(e,n){i[e.field]=n})),a.store.data.forEach((function(n,l){if(n.index=l,n.style=n.style||{},n.style.fields=n.style.fields||{},void 0===n.id&&(n.id=e()),void 0===n.style.height&&(n.style.height=a.layoutDefaults.defaultRowHeight),delete n.excludedIndexHorizontal,delete n.movableFieldsHashHorizontal,delete n.fieldToColumnSpanSourceField,n.columnSpans){for(d in n.excludedIndexHorizontal={},n.movableFieldsHashHorizontal={},n.fieldToColumnSpanSourceField={},n._columnSpans=n._columnSpans||{},n.columnSpans){var r=n._columnSpans[d],s={},c=r?t(a,r):o.getSpannedColumns(a,d,n.columnSpans[d]);c.length>1&&(c.forEach((function(e){s[e.field]=!0,e.field!==d&&(n.excludedIndexHorizontal[i[e.field]]=!0,n.fieldToColumnSpanSourceField[e.field]=d)})),n.movableFieldsHashHorizontal[d]=c[c.length-1].field),n.columnSpans[d]=c.length,n._columnSpans[d]=s}var f=0;Object.keys(n.columnSpans).forEach((function(e){n.columnSpans[e]<2?(delete n.columnSpans[e],delete n._columnSpans[e]):f++})),f||(delete n.columnSpans,delete n._columnSpans)}delete n.excludedIndexVertical,delete n.movableIndexHashVertical,delete n.fieldToRowSpanSourceDataIndex,n.fieldInfos=n.fieldInfos||{}})),a.store.data.forEach((function(e,n){if(e.rowSpans)for(d in e._rowSpans=e._rowSpans||{},e.rowSpans){var o=e._rowSpans[d],t={};t[e.id]=!0;var r,s=i[d],c=e.rowSpans[d];if(o)r=l(a,o);else{r=[];for(var f=n;f<n+c;f++)r.push(a.store.data[f])}r.length>1&&(r.forEach((function(n){if(n.id!==e.id){n.excludedIndexVertical=n.excludedIndexVertical||{},n.excludedIndexVertical[s]=!0,n.fieldToRowSpanSourceDataIndex=n.fieldToRowSpanSourceDataIndex||{},n.fieldToRowSpanSourceDataIndex[d]=e.index;var o=e.columnSpans&&e.columnSpans[d];if(o)for(var l=1;l<o;l++)n.excludedIndexVertical[s+l]=!0,n.fieldToRowSpanSourceDataIndex[a.columns[s+l].field]=e.index}t[n.id]=!0})),e.movableIndexHashVertical=e.movableIndexHashVertical||{},e.movableIndexHashVertical[d]=n+r.length-1),e.rowSpans[d]=r.length,e._rowSpans[d]=t}})),a.store.data.forEach((function(e,n){if(e.rowSpans){for(d in e.rowSpans)e.rowSpans[d]=Math.min(e.rowSpans[d],a.store.data.length-n);var o=0;Object.keys(e.rowSpans).forEach((function(n){e.rowSpans[n]<2?(delete e.rowSpans[n],e._rowSpans&&delete e._rowSpans[n]):o++})),o||(delete e.rowSpans,delete e._rowSpans)}})),a.store.data.forEach((function(e,n){e.fieldInfos&&Object.keys(e.fieldInfos).forEach((function(n){void 0===i[n]&&delete e.fieldInfos[n]})),e.style&&e.style.fields&&Object.keys(e.style.fields).forEach((function(n){void 0===i[n]&&delete e.style.fields[n]}))})),a.looseResize){a.store.data.forEach((function(e){a.columns.some((function(o){n.getDataHeightOwn(a,e,o.field)||n.setDataHeight(a,e,o.field,e.style.height)}))}));var r=a.store.data[a.store.data.length-1],s=n.recalcGridHeight(a);a.columns.some((function(e){var o=0;a.store.data.forEach((function(t){o+=n.getDataHeightOwn(a,t,e.field)}));var t=s-o;0!==t&&n.setDataHeight(a,r,e.field,n.getDataHeightOwn(a,r,e.field)+t)}))}n.recalcGridHeight(a)},a}));