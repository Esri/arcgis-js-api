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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/query","../../kernel","dojo/dom-construct","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/Evented"],(function(t,e,i,d,o,n,a,r,l){var s=t([l],{attachGridEvents:function(){this.own(this._grid.on("dgrid-datachange",a.hitch(this,"_onDataChange")),this._grid.on(".dgrid-content .dgrid-cell:mouseover",a.hitch(this,"_onGridMouseOver")),this._grid.on(".dgrid-content .dgrid-cell:mouseout",a.hitch(this,"_onGridMouseOut")),this._grid.on(".dgrid-content .dgrid-cell:click",a.hitch(this,"_onGridCellClick")))},_addBlankObject:function(){var t=this._store.data,e=this._store,i=this._grid;t.length&&(t[t.length-1].idNum=t.length);var d={id:t.length?t[t.length-1].id+1:1,idNum:"*"};if(this.defaultBlankObject){var o=a.clone(this.defaultBlankObject);n.forEach(Object.keys(o),(function(t){d[t]=o[t]}),this)}else n.forEach(Object.keys(i.columns),(function(t){var e=i.columns[t],o=e.field;"idNum"!==o&&"id"!==o&&(d[e.field]="")}));e.add(d)},_onDataChange:function(t){var e=this._grid;t&&("*"===t.cell.row.data.idNum&&this._addBlankObject(),t.cell.row.data[t.cell.column.field]=t.value),e.refresh(),this.emit("change",{bubbles:!1,cancelable:!1})},_onGridMouseOver:function(t){this._toggleDeleteButton(t,!0)},_onGridMouseOut:function(t){this._toggleDeleteButton(t,!1)},_toggleDeleteButton:function(t,e){var d,o=this._grid,n=this._store.data.length,a=o.cell(t);if(a&&a.row&&(d=i(".field-idNum",a.row.element)[0]),n>1&&d){for(var l=0;l<this.dataLength;l++)o.store.data[l].idNum=l+1;void 0!==a.column&&"*"!=a.row.data.idNum&&r.toggle(d,"esriBandMatrixDeleteIcon",e)}},_onGridCellClick:function(t){var e=this._grid,i=this._store.data.length,d=e.cell(t);if(i>1&&"*"!=d.row.data.idNum&&"idNum"===d.column.field){e.store.remove(d.row.data.id);for(var o=0;o<i-2;o++)e.store.data[o].idNum=o+1;e.store.data[i-2].idNum="*",e.refresh(),this.emit("change",{bubbles:!1,cancelable:!1})}}});return e("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.EditableGridMixin",s,d),s}));