// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/uuid/generateRandomUuid","../GridLayoutCalculatorQueryUtil","../GridElementBoxCalculator","./ColumnDataUtil","../../GridQueryUtil"],(function(e,n,t,o,i,l){var a={};a.adjustColumnWidth=function(e,n,t,o){c.adjustColumnCell(e,n,t,o)},a.getAffectedCells=function(e,n,t){return c.getAffectedCells(e,n,t)};var r={collectColumnBoxes:function(e,n){for(var o=[],i=0;i<e.store.data.length;){var l=e.store.data[i],a=this._createEmptyBox(),r=t.getRowSpannedData(e,l,n.field)||[l];a.elements=this._getSpannedDataElements(e,n,r),this._measureBox(a);var u=o[o.length-1];u&&(u.nextSibling=a,a.prevSibling=u),o.push(a),i+=r.length}return o},_createEmptyBox:function(){return{id:n(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getSpannedDataElements:function(e,n,t){var i=[];return t.forEach((function(t){var l={data:t,dataIndex:t.index,field:n.field,box:o.calcDataBox(e,t,n.field)};i.push(l)})),i},_measureBox:function(e){var n=0;e.elements.forEach((function(e){n+=e.box.h})),e.box={x:e.elements[0].box.x,y:e.elements[0].box.y,w:e.elements[0].box.w,h:n}},mergeBoxesForRightColumn:function(n){var t=this._createEmptyBox();return n.forEach((function(n){n.elements.forEach((function(n){t.elements.push({data:n.data,field:null,box:e.clone(n.box)})}))})),this._measureBox(t),t.box.w=1e6,[t]},getBoxAtDataIndex:function(e,n){return e.filter((function(e){return e.elements[0].dataIndex===n}))[0]}},u=function(e,n,t){var o=r.getBoxAtDataIndex(e,t.index);return function t(o,i){(i?n:e).forEach((function(e){var n,t,i;e.overlappingBoxesCache[o.id]||(n=e,t=o.box,i=n.box,t.y+.5>=i.y+i.h||t.y+t.h<=i.y+.5)||(o.overlappingBoxes.push(e),o.overlappingBoxesCache[e.id]=!0)})),o.overlappingBoxes.forEach((function(e){t(e,!i)}))}(o,!0),o},x={applyForce:function(e,n,t){var o=this._checkDelta(e,n,t);!function n(t,l){var a=t.elements[0];a.field&&i.setFieldWidth(e,a.data,a.field,i.getFieldWidth(e,a.data,a.field)+(l?-1:1)*o,!0),t.overlappingBoxes.forEach((function(e){n(e,!l)}))}(n,!1)},_checkDelta:function(e,n,t){var o=e.layoutDefaults.columnMinWidth,l=(t=Math.max(t,o))-n.box.w;if(l>0&&n.elements[0].field===e.columns[e.columns.length-1].field){var a=0;e.columns.forEach((function(t){a+=i.getFieldWidth(e,n.elements[0].data,t.field)})),l=Math.min(l,i.getAllowedWidth(e)-a)}return function e(n,t){0!==l&&(t?l<0||(l=Math.min(l,n.box.w-o),n.prevSibling&&(l=Math.min(l,n.prevSibling.box.x+n.prevSibling.box.w-o-n.box.x)),n.nextSibling&&(l=Math.min(l,n.nextSibling.box.x+n.nextSibling.box.w-o-n.box.x))):l>0||(l=Math.max(l,-(n.box.w-o)),n.prevSibling&&(l=Math.max(l,-(n.box.x+n.box.w-(n.prevSibling.box.x+o)))),n.nextSibling&&(l=Math.max(l,-(n.box.x+n.box.w-(n.nextSibling.box.x+o))))),n.overlappingBoxes.forEach((function(n){e(n,!t)})))}(n,!1),l}},c={_getInluencedStartBox:function(e,n,t){var o=e.columns[t.index+1],i=r.collectColumnBoxes(e,t),l=o?r.collectColumnBoxes(e,o):r.mergeBoxesForRightColumn(i);return u(i,l,n)},getAffectedCells:function(e,n,t){var o=[];return function n(t){!function(n){if(n.elements[0].data){var t=l.querySingleCell(e,{rowIndex:n.elements[0].data.index,columnField:n.elements[0].field,considerSpans:!0});t&&o.push(t)}}(t),t.overlappingBoxes.forEach(n)}(this._getInluencedStartBox(e,n,t)),o},adjustColumnCell:function(e,n,t,o){var i=this._getInluencedStartBox(e,n,t);x.applyForce(e,i,o)}};return a}));
