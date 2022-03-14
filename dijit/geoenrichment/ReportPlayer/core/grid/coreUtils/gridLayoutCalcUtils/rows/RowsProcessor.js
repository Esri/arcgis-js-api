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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojox/uuid/generateRandomUuid","./RowDataUtil","../GridLayoutCalculatorQueryUtil"],(function(e,n,o){var l={};function a(e,n){var l,a=[],i=0;return n&&Object.keys(n).forEach((function(l){o.fieldToColumn(e,l)?i++:delete n[l]})),i&&e.columns.some((function(e){if((l||n[e.field])&&(a.push(e),l=!0),n[e.field]&&i--,!i)return!0})),a}function i(e,n){var l,a=[],i=0;return n&&Object.keys(n).forEach((function(l){o.dataIdToData(e,l)?i++:delete n[l]})),i&&e.rows.some((function(e){if((l||n[e.id])&&(a.push(e),l=!0),n[e.id]&&i--,!i)return!0})),a}return l.recalcRows=function(l){var t,d={};if(l.columns.forEach((function(e,n){d[e.field]=n})),l.rows.forEach((function(n,i){if(n.index=i,n.style=n.style||{},n.style.fields=n.style.fields||{},void 0===n.id&&(n.id=e()),void 0===n.style.height&&(n.style.height=l.layoutDefaults.defaultRowHeight),delete n.excludedIndexHorizontal,delete n.movableFieldsHashHorizontal,delete n.fieldToColumnSpanSourceField,n.columnSpans){for(t in n.excludedIndexHorizontal={},n.movableFieldsHashHorizontal={},n.fieldToColumnSpanSourceField={},n._columnSpans=n._columnSpans||{},n.columnSpans){var r=n._columnSpans[t],s={},c=r?a(l,r):o.getSpannedColumns(l,t,n.columnSpans[t]);c.length>1&&(c.forEach((function(e){s[e.field]=!0,e.field!==t&&(n.excludedIndexHorizontal[d[e.field]]=!0,n.fieldToColumnSpanSourceField[e.field]=t)})),n.movableFieldsHashHorizontal[t]=c[c.length-1].field),n.columnSpans[t]=c.length,n._columnSpans[t]=s}var f=0;Object.keys(n.columnSpans).forEach((function(e){n.columnSpans[e]<2?(delete n.columnSpans[e],delete n._columnSpans[e]):f++})),f||(delete n.columnSpans,delete n._columnSpans)}delete n.excludedIndexVertical,delete n.movableIndexHashVertical,delete n.fieldToRowSpanSourceDataIndex,n.fieldInfos=n.fieldInfos||{}})),l.rows.forEach((function(e,n){if(e.rowSpans)for(t in e._rowSpans=e._rowSpans||{},e.rowSpans){var o=e._rowSpans[t],a={};a[e.id]=!0;var r,s=d[t],c=e.rowSpans[t];if(o)r=i(l,o);else{r=[];for(var f=n;f<n+c;f++)r.push(l.rows[f])}r.length>1&&(r.forEach((function(n){if(n.id!==e.id){n.excludedIndexVertical=n.excludedIndexVertical||{},n.excludedIndexVertical[s]=!0,n.fieldToRowSpanSourceDataIndex=n.fieldToRowSpanSourceDataIndex||{},n.fieldToRowSpanSourceDataIndex[t]=e.index;var o=e.columnSpans&&e.columnSpans[t];if(o)for(var i=1;i<o;i++)n.excludedIndexVertical[s+i]=!0,n.fieldToRowSpanSourceDataIndex[l.columns[s+i].field]=e.index}a[n.id]=!0})),e.movableIndexHashVertical=e.movableIndexHashVertical||{},e.movableIndexHashVertical[t]=n+r.length-1),e.rowSpans[t]=r.length,e._rowSpans[t]=a}})),l.rows.forEach((function(e,n){if(e.rowSpans){for(t in e.rowSpans)e.rowSpans[t]=Math.min(e.rowSpans[t],l.rows.length-n);var o=0;Object.keys(e.rowSpans).forEach((function(n){e.rowSpans[n]<2?(delete e.rowSpans[n],e._rowSpans&&delete e._rowSpans[n]):o++})),o||(delete e.rowSpans,delete e._rowSpans)}})),l.rows.forEach((function(e,n){e.fieldInfos&&Object.keys(e.fieldInfos).forEach((function(n){void 0===d[n]&&delete e.fieldInfos[n]})),e.style&&e.style.fields&&Object.keys(e.style.fields).forEach((function(n){void 0===d[n]&&delete e.style.fields[n]}))})),l.looseResize){l.rows.forEach((function(e){l.columns.some((function(o){n.getDataHeightOwn(l,e,o.field)||n.setDataHeight(l,e,o.field,e.style.height)}))}));var r=l.rows[l.rows.length-1],s=n.recalcGridHeight(l);l.columns.some((function(e){var o=0;l.rows.forEach((function(a){o+=n.getDataHeightOwn(l,a,e.field)}));var a=s-o;0!==a&&n.setDataHeight(l,r,e.field,n.getDataHeightOwn(l,r,e.field)+a)}))}n.recalcGridHeight(l)},l}));