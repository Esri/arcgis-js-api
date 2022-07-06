// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["../../declare","dojo/number","./utils/ObjectUtil"],(function(t,n,i){var s=t("esri.dijit.geoenrichment.ReportData",null,{title:null,_cols:null,_rows:null,_indexes:null,constructor:function(){this._cols=[],this._rows=[]},addCol:function(t){this._indexes=null,this._cols.push(t)},getColCount:function(){return this._cols.length},getCol:function(t){return this._cols[t]},addRow:function(t){this._rows.push(t)},getRow:function(t){return this._rows[t]},getRowCount:function(){return this._rows.length},findField:function(t){if(!this._indexes){this._indexes={};for(var n=this._cols.length,i=0;i<n;i++)this._indexes[this._cols[i].name]=i}return this._indexes[t]},getValue:function(t,n){return i.isNumber(n)?this._rows[t][n]:this._rows[t][this.findField(n)]},formatValue:function(t,n){var s=i.isNumber(n)?n:this.findField(n);return this.getCol(s).format(this._rows[t][s])},clearRows:function(t){i.isNumber(t)?this._rows.splice(t,this._rows.length-t):this._rows=[]},clearCols:function(){this.clearRows(),this._cols=[],this._indexes=null}}),e=t(null,{name:null,alias:null,fullName:null,constructor:function(t){this.name=t.name,this.alias=t.alias||t.name,this.fullName=t.fullName||null}}),o=t([e],{decimals:0,constructor:function(t){this.decimals=t.decimals||0},format:function(t){return n.format(t,{places:this.decimals})}});s.NumericColumn=o;var l=t([o],{format:function(t){return n.format(t/100,{places:this.decimals,type:"percent"})}});s.PercentColumn=l;var r=t([o],{constructor:function(t){this.symbol=t.symbol||"$"},format:function(t){return n.format(t,{places:this.decimals,type:"currency",symbol:this.symbol})}});s.CurrencyColumn=r;var u=t([e],{format:function(t){return t}});return s.StringColumn=u,s}));