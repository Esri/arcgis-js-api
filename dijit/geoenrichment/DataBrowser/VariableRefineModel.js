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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","./KeywordFilter","./TagFilter"],function(t,i,r,e,a){return t(null,{variables:null,keywordFilter:null,filters:null,idProperty:"fullName",_filterHash:null,initialize:function(t,i){this.variables=t;var s=this.variables.length,h=0;this.keywordFilter=new e,this.keywordFilter.totalCount=s,this.keywordFilter.bitIndex=h++;var l=[];for(var n in i){var o=new a(i[n]);o.totalCount=s,o.bitIndex=h++,l.push(o)}return this._filterHash={},r.forEach(t,function(t){this._filterHash[t[this.idProperty]]=0,r.forEach(l,function(i){i.match(t)},this)},this),this.applyFilter(this.keywordFilter),this.filters=[],r.forEach(l,function(t){t.activate()&&(this.filters.push(t),this.applyFilter(t))},this),h},applyFilter:function(t){var i=1<<t.bitIndex,e=0,a=!t.isActive();r.forEach(this.variables,function(r){var s=t.match(r,!0);s===!0&&e++,a||s?this._filterHash[r[this.idProperty]]&=~i:this._filterHash[r[this.idProperty]]|=i},this),t.matchCount=e},match:function(t){return!this._filterHash[t[this.idProperty]]},getMatchingVariables:function(){var t=[];return r.forEach(this.variables,function(i){this.match(i)&&t.push(i)},this),t}})});