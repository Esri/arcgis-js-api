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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Evented","./RFxGridBase"],(function(i,e,t,n){return i([t],{dataType:n.DATA_TYPES.double,isExtensible:!1,isEditable:!0,_store:null,_grid:null,_initializeGrid:function(){var i=this._getGridSchema(),e=this._createDataObject();this._grid&&this._grid.destroy(),this.gridContainer=document.createElement("div"),this.gridDiv.appendChild(this.gridContainer),this._grid=new n({schema:i,data:e,isExtensible:this.isExtensible},this.gridContainer),this._grid.startup(),this._grid.on("grid-data-change",function(i){this._updateValue(i)}.bind(this))},_getGridSchema:function(){for(var i=[],e=this._info.columns,t=1;t<=e;t++)i.push({label:t,name:t,dataType:this.dataType,isEditable:this.isEditable});return i},_createDataObject:function(){for(var i=[],e=this._getUpdatedValue();e.length;){var t=e.splice(0,this._info.columns),n={};t.forEach((function(i,e){n[e+1]=i})),i.push(n)}return i},_getUpdatedValue:function(){var i=e.clone(this._info.value),t=this._info.rows*this._info.columns;if(i){if(i.length!==t){var n=Math.abs(i.length-t);if(i.length<t){var a=this._createValueOfSize(n);i=i.concat(a)}else if(i.length>t){var r=i.length-n;i=i.slice(0,r)}}}else i=this._createValueOfSize(t);return i},_onGridSizeChange:function(){this._info.value=this._getUpdatedValue(),this._initializeGrid()},_createValueOfSize:function(i){return Array.apply(null,{length:i}).map((function(){return 0}))},_getValueFromGridData:function(i){var e=[];return i.forEach((function(i){Object.keys(i).forEach((function(t){t&&!isNaN(i[t])&&"id"!==t&&"idNum"!==t&&e.push(i[t])}))})),this._info.value=e,e}})}));