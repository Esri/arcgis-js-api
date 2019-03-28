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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/uuid/generateRandomUuid","../GridLayoutCalculatorQueryUtil","../GridElementBoxCalculator","./ColumnDataUtil","../../GridQueryUtil"],function(e,n,t,o,l,i){var a={},r=.5;a.adjustColumnWidth=function(e,n,t,o){d.adjustColumnCell(e,n,t,o)},a.getAffectedCells=function(e,n,t){return d.getAffectedCells(e,n,t)};var u={collectColumnBoxes:function(e,n){for(var o=[],l=0;l<e.store.data.length;){var i=e.store.data[l],a=this._createEmptyBox(),r=t.getRowSpannedData(e,i,n.field)||[i];a.elements=this._getSpannedDataElements(e,n,r),this._measureBox(a);var u=o[o.length-1];u&&(u.nextSibling=a,a.prevSibling=u),o.push(a),l+=r.length}return o},_createEmptyBox:function(){return{id:n(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getSpannedDataElements:function(e,n,t){var l=[];return t.forEach(function(t){var i={data:t,dataIndex:t.index,field:n.field,box:o.calcDataBox(e,t,n.field)};l.push(i)}),l},_measureBox:function(e){var n=0;e.elements.forEach(function(e){n+=e.box.h}),e.box={x:e.elements[0].box.x,y:e.elements[0].box.y,w:e.elements[0].box.w,h:n}},mergeBoxesForRightColumn:function(n){var t=this._createEmptyBox();return n.forEach(function(n){n.elements.forEach(function(n){t.elements.push({data:n.data,field:null,box:e.clone(n.box)})})}),this._measureBox(t),t.box.w=1e6,[t]},getBoxAtDataIndex:function(e,n){return e.filter(function(e){return e.elements[0].dataIndex===n})[0]}},x={buildInfluenceTree:function(e,n,t){function o(e,n){var t=e.box,o=n.box;return!(t.y+r>=o.y+o.h||t.y+t.h<=o.y+r)}function l(t,i){(i?n:e).forEach(function(e){!e.overlappingBoxesCache[t.id]&&o(t,e)&&(t.overlappingBoxes.push(e),t.overlappingBoxesCache[e.id]=!0)}),t.overlappingBoxes.forEach(function(e){l(e,!i)})}var i=u.getBoxAtDataIndex(e,t.index);return l(i,!0),i}},c={applyForce:function(e,n,t){function o(n,t){var a=n.elements[0];a.field&&l.setFieldWidth(e,a.data,a.field,l.getFieldWidth(e,a.data,a.field)+(t?-1:1)*i,!0),n.overlappingBoxes.forEach(function(e){o(e,!t)})}var i=this._checkDelta(e,n,t);o(n,!1)},_checkDelta:function(e,n,t){function o(e,n){0!==a&&(n?a<0||(a=Math.min(a,e.box.w-i),e.prevSibling&&(a=Math.min(a,e.prevSibling.box.x+e.prevSibling.box.w-i-e.box.x)),e.nextSibling&&(a=Math.min(a,e.nextSibling.box.x+e.nextSibling.box.w-i-e.box.x))):a>0||(a=Math.max(a,-(e.box.w-i)),e.prevSibling&&(a=Math.max(a,-(e.box.x+e.box.w-(e.prevSibling.box.x+i)))),e.nextSibling&&(a=Math.max(a,-(e.box.x+e.box.w-(e.nextSibling.box.x+i))))),e.overlappingBoxes.forEach(function(e){o(e,!n)}))}var i=e.layoutDefaults.columnMinWidth,t=Math.max(t,i),a=t-n.box.w;if(a>0&&n.elements[0].field===e.columns[e.columns.length-1].field){var r=0;e.columns.forEach(function(t){r+=l.getFieldWidth(e,n.elements[0].data,t.field)}),a=Math.min(a,l.getAllowedWidth(e)-r)}return o(n,!1),a}},d={_getInluencedStartBox:function(e,n,t){var o=e.columns[t.index+1],l=u.collectColumnBoxes(e,t),i=o?u.collectColumnBoxes(e,o):u.mergeBoxesForRightColumn(l);return x.buildInfluenceTree(l,i,n)},getAffectedCells:function(e,n,t){function o(n){if(n.elements[0].data){var t=i.querySingleCell(e,{rowIndex:n.elements[0].data.index,columnField:n.elements[0].field,considerSpans:!0});t&&a.push(t)}}function l(e){o(e),e.overlappingBoxes.forEach(l)}var a=[];return l(this._getInluencedStartBox(e,n,t)),a},adjustColumnCell:function(e,n,t,o){var l=this._getInluencedStartBox(e,n,t);c.applyForce(e,l,o)}};return a});