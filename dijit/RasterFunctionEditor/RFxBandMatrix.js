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

define(["dojo/_base/declare","dojo/has","../../kernel","dgrid/OnDemandGrid","dgrid/Keyboard","dgrid/editor","dgrid/Selection","dojo/store/Memory","dojo/store/Observable","dojo/on","dojo/_base/lang","dojo/Evented","dojo/_base/array","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","./EditableGridMixin"],function(t,i,e,r,s,a,o,d,n,l,h,u,_,c,g,f,v,p){var m=t([r,s]),b={STRINGARRAY:"stringarray",DOUBLEARRAY:"doublearray",LONGARRAY:"longarray"},j=t("RFxBandMatrix",[c,g,f,u,p],{templateString:"<div><div data-dojo-attach-point='gridNode'></div></div>",baseClass:"esriRFxBandMatrix",nRows:0,nCols:0,displayNames:[],values:[],dataType:"string",inputArg:null,value:[],_store:null,_grid:null,postCreate:function(){this.inherited(arguments);var t={idNum:"ID"};this._initStore(t,this.nRows,this.nCols,this.displayNames,this.values),this._initGrid(this.nCols,t),this.attachGridEvents(),this.on("change",h.hitch(this,this._updateValue))},_getGridColumns:function(t,i){var e=[],r=Object.keys(t),s=_.map(r,function(i){return t[i]}),o={label:s[i],field:r[i],sortable:!1};e.push(o);for(var d=0;d<i;d++)o=a({label:s[d],field:r[d],editor:this._getEditor(this.dataType),editOn:"click",editorArgs:this._getEditorArgs(this.dataType),autoSave:!0,sortable:!1}),e.push(o);return e},_initStore:function(t,i,e,r,s){for(var a=0;a<e;a++)t[a]=r[a];for(var o=0;o<i;o++)s[o].id=o+1,s[o].idNum=o+1;this._store=new d({data:s,idProperty:"id"}),this._store=n(this._store),this._updateValue()},_initGrid:function(t,i){this._grid=new m({store:this._store,columns:this._getGridColumns(i,t),selectionMode:"single",cellNavigation:!1},this.gridNode),this._setStoreData(this.value),this._addBlankObject()},_setStoreData:function(t){if(!t)return void this._store.setData([]);for(var i,e=Math.floor(t.length/this.nCols),r=0,s=1,a=[],o=this._grid.columns,d=0;d<e;d++)i={},_.forEach(Object.keys(o),function(e){var a=o[e],d=a.field;"id"!==d&&"idNum"!==d?i[d]=t[r++]:(i.id=s,i.idNum=s++)},this),a.push(i);this._store.setData(a)},_updateValue:function(){if(this._store&&this._grid){for(var t=[],i=this._store.data,e=this._grid.columns,r=0;r<i.length;r++)_.forEach(Object.keys(e),function(s){var a=e[s],o=a.field;"id"!==o&&"idNum"!==o&&""!==i[r][o]&&t.push(i[r][o])},this);this.value=t}},_getEditor:function(t){return t===b.STRINGARRAY?"text":v},_getEditorArgs:function(t){if(t===b.LONGARRAY){return{constraints:{places:0}}}}});return i("extend-esri")&&h.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",j,e),j});