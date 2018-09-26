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

define(["dojo/_base/lang","dojox/uuid/generateRandomUuid","../GridLayoutCalculatorQueryUtil","../GridElementBoxCalculator","./RowDataUtil","../../GridQueryUtil"],function(e,n,t,o,i,l){var a={},r=.5;a.adjustRowHeight=function(e,n,t,o){s.adjustRowCell(e,n,t,o)},a.getAffectedCells=function(e,n,t){return s.getAffectedCells(e,n,t)};var u={collectRowBoxes:function(e,n){for(var o=[],i=0;i<e.columns.length;){var l=e.columns[i],a=this._createEmptyBox(),r=t.getColumnSpannedFields(e,n,l.field)||[l.field];a.elements=this._getFieldsElements(e,n,r),this._measureBox(a);var u=o[o.length-1];u&&(u.nextSibling=a,a.prevSibling=u),o.push(a),i+=r.length}return o},_createEmptyBox:function(){return{id:n(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getFieldsElements:function(e,n,t){var i=[];return t.forEach(function(t){var l={data:n,dataIndex:n.index,field:t,box:o.calcDataBox(e,n,t,{places:2})};i.push(l)}),i},_measureBox:function(e){var n=0;e.elements.forEach(function(e){n+=e.box.w}),e.box={x:e.elements[0].box.x,y:e.elements[0].box.y,h:e.elements[0].box.h,w:n}},mergeBoxesForBottomRow:function(n){var t=this._createEmptyBox();return n.forEach(function(n){n.elements.forEach(function(n){t.elements.push({data:null,field:n.field,box:e.clone(n.box)})})}),this._measureBox(t),t.box.h=1e6,[t]},getBoxAtField:function(e,n){return e.filter(function(e){return e.elements[0].field===n})[0]}},x={buildInfluenceTree:function(e,n,t){function o(e,n){var t=e.box,o=n.box;return!(t.x+r>=o.x+o.w||t.x+t.w<=o.x+r)}function i(t,l){(l?n:e).forEach(function(e){!e.overlappingBoxesCache[t.id]&&o(t,e)&&(t.overlappingBoxes.push(e),t.overlappingBoxesCache[e.id]=!0)}),t.overlappingBoxes.forEach(function(e){i(e,!l)})}var l=u.getBoxAtField(e,t);return i(l,!0),l}},c={applyForce:function(e,n,t){function o(n,t){var a=n.elements[0];a.data&&i.setDataHeight(e,a.data,a.field,i.getDataHeight(e,a.data,a.field)+(t?-1:1)*l,!0),n.overlappingBoxes.forEach(function(e){o(e,!t)})}var l=this._checkDelta(e,n,t);o(n,!1)},_checkDelta:function(e,n,t){function o(e,n){0!==l&&(n?l<0||(l=Math.min(l,e.box.h-i),e.prevSibling&&(l=Math.min(l,e.prevSibling.box.y+e.prevSibling.box.h-i-e.box.y)),e.nextSibling&&(l=Math.min(l,e.nextSibling.box.y+e.nextSibling.box.h-i-e.box.y))):l>0||(l=Math.max(l,-(e.box.h-i)),e.prevSibling&&(l=Math.max(l,-(e.box.y+e.box.h-(e.prevSibling.box.y+i)))),e.nextSibling&&(l=Math.max(l,-(e.box.y+e.box.h-(e.nextSibling.box.y+i))))),e.overlappingBoxes.forEach(function(e){o(e,!n)}))}var i=e.layoutDefaults.rowMinHeight,t=Math.max(t,i),l=t-n.box.h;return o(n,!1),l}},s={_getInluencedStartBox:function(e,n,t){var o=e.store.data[n.index+1],i=u.collectRowBoxes(e,n),l=o?u.collectRowBoxes(e,o):u.mergeBoxesForBottomRow(i);return x.buildInfluenceTree(i,l,t)},getAffectedCells:function(e,n,t){function o(n){if(n.elements[0].data){var t=l.querySingleCell(e,{rowIndex:n.elements[0].data.index,columnField:n.elements[0].field,considerSpans:!0});t&&a.push(t)}}function i(e){o(e),e.overlappingBoxes.forEach(i)}var a=[];return i(this._getInluencedStartBox(e,n,t)),a},adjustRowCell:function(e,n,t,o){var i=this._getInluencedStartBox(e,n,t);c.applyForce(e,i,o)}};return a});