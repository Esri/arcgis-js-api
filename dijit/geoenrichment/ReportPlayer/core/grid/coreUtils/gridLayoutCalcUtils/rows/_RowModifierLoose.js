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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/uuid/generateRandomUuid","../GridLayoutCalculatorQueryUtil","../GridElementBoxCalculator","./RowDataUtil","../../GridQueryUtil"],(function(e,n,t,o,i,l){var a={};a.adjustRowHeight=function(e,n,t,o){c.adjustRowCell(e,n,t,o)},a.getAffectedCells=function(e,n,t){return c.getAffectedCells(e,n,t)};var r={collectRowBoxes:function(e,n){for(var o=[],i=0;i<e.columns.length;){var l=e.columns[i],a=this._createEmptyBox(),r=t.getColumnSpannedFields(e,n,l.field)||[l.field];a.elements=this._getFieldsElements(e,n,r),this._measureBox(a);var x=o[o.length-1];x&&(x.nextSibling=a,a.prevSibling=x),o.push(a),i+=r.length}return o},_createEmptyBox:function(){return{id:n(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getFieldsElements:function(e,n,t){var i=[];return t.forEach((function(t){var l={data:n,dataIndex:n.index,field:t,box:o.calcDataBox(e,n,t,{places:2})};i.push(l)})),i},_measureBox:function(e){var n=0;e.elements.forEach((function(e){n+=e.box.w})),e.box={x:e.elements[0].box.x,y:e.elements[0].box.y,h:e.elements[0].box.h,w:n}},mergeBoxesForBottomRow:function(n){var t=this._createEmptyBox();return n.forEach((function(n){n.elements.forEach((function(n){t.elements.push({data:null,field:n.field,box:e.clone(n.box)})}))})),this._measureBox(t),t.box.h=1e6,[t]},getBoxAtField:function(e,n){return e.filter((function(e){return e.elements[0].field===n}))[0]}},x=function(e,n,t){var o=r.getBoxAtField(e,t);return function t(o,i){(i?n:e).forEach((function(e){var n,t,i;e.overlappingBoxesCache[o.id]||(n=e,t=o.box,i=n.box,t.x+.5>=i.x+i.w||t.x+t.w<=i.x+.5)||(o.overlappingBoxes.push(e),o.overlappingBoxesCache[e.id]=!0)})),o.overlappingBoxes.forEach((function(e){t(e,!i)}))}(o,!0),o},u={applyForce:function(e,n,t){var o=this._checkDelta(e,n,t);!function n(t,l){var a=t.elements[0];a.data&&i.setDataHeight(e,a.data,a.field,i.getDataHeight(e,a.data,a.field)+(l?-1:1)*o,!0),t.overlappingBoxes.forEach((function(e){n(e,!l)}))}(n,!1)},_checkDelta:function(e,n,t){var o=e.layoutDefaults.rowMinHeight,i=(t=Math.max(t,o))-n.box.h;return function e(n,t){0!==i&&(t?i<0||(i=Math.min(i,n.box.h-o),n.prevSibling&&(i=Math.min(i,n.prevSibling.box.y+n.prevSibling.box.h-o-n.box.y)),n.nextSibling&&(i=Math.min(i,n.nextSibling.box.y+n.nextSibling.box.h-o-n.box.y))):i>0||(i=Math.max(i,-(n.box.h-o)),n.prevSibling&&(i=Math.max(i,-(n.box.y+n.box.h-(n.prevSibling.box.y+o)))),n.nextSibling&&(i=Math.max(i,-(n.box.y+n.box.h-(n.nextSibling.box.y+o))))),n.overlappingBoxes.forEach((function(n){e(n,!t)})))}(n,!1),i}},c={_getInluencedStartBox:function(e,n,t){var o=e.store.data[n.index+1],i=r.collectRowBoxes(e,n),l=o?r.collectRowBoxes(e,o):r.mergeBoxesForBottomRow(i);return x(i,l,t)},getAffectedCells:function(e,n,t){var o=[];return function n(t){!function(n){if(n.elements[0].data){var t=l.querySingleCell(e,{rowIndex:n.elements[0].data.index,columnField:n.elements[0].field,considerSpans:!0});t&&o.push(t)}}(t),t.overlappingBoxes.forEach(n)}(this._getInluencedStartBox(e,n,t)),o},adjustRowCell:function(e,n,t,o){var i=this._getInluencedStartBox(e,n,t);u.applyForce(e,i,o)}};return a}));