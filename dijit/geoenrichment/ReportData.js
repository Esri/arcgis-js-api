// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["../../declare","dojo/number","./lang"],function(t,n,s){var i=t("esri.dijit.geoenrichment.ReportData",null,{title:null,_cols:null,_rows:null,_indexes:null,constructor:function(){this._cols=[],this._rows=[]},addCol:function(t){this._indexes=null,this._cols.push(t)},getColCount:function(){return this._cols.length},getCol:function(t){return this._cols[t]},addRow:function(t){this._rows.push(t)},getRow:function(t){return this._rows[t]},getRowCount:function(){return this._rows.length},findField:function(t){if(!this._indexes){this._indexes={};for(var n=this._cols.length,s=0;n>s;s++)this._indexes[this._cols[s].name]=s}return this._indexes[t]},getValue:function(t,n){return s.isNumber(n)?this._rows[t][n]:this._rows[t][this.findField(n)]},formatValue:function(t,n){var i=s.isNumber(n)?n:this.findField(n);return this.getCol(i).format(this._rows[t][i])},clearRows:function(t){s.isNumber(t)?this._rows.splice(t,this._rows.length-t):this._rows=[]},clearCols:function(){this.clearRows(),this._cols=[],this._indexes=null}}),e=t(null,{name:null,alias:null,fullName:null,constructor:function(t){this.name=t.name,this.alias=t.alias||t.name,this.fullName=t.fullName||null}}),o=t([e],{decimals:0,constructor:function(t){this.decimals=t.decimals||0},format:function(t){return n.format(t,{places:this.decimals})}});i.NumericColumn=o;var l=t([o],{format:function(t){return n.format(t/100,{places:this.decimals,type:"percent"})}});i.PercentColumn=l;var r=t([o],{constructor:function(t){this.symbol=t.symbol||"$"},format:function(t){return n.format(t,{places:this.decimals,type:"currency",symbol:this.symbol})}});i.CurrencyColumn=r;var u=t([e],{format:function(t){return t}});return i.StringColumn=u,i});