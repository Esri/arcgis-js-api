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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","./KeywordFilter","./TagFilter"],(function(t,i,r,e){return t(null,{variables:null,keywordFilter:null,filters:null,idProperty:"fullName",_filterHash:null,initialize:function(t,a){this.variables=t;var h=this.variables.length,s=0;this.keywordFilter=new r,this.keywordFilter.totalCount=h,this.keywordFilter.bitIndex=s++;var l=[];for(var n in a){var o=new e(a[n]);o.totalCount=h,o.bitIndex=s++,l.push(o)}return this._filterHash={},i.forEach(t,(function(t){this._filterHash[t[this.idProperty]]=0,i.forEach(l,(function(i){i.match(t)}),this)}),this),this.applyFilter(this.keywordFilter),this.filters=[],i.forEach(l,(function(t){t.activate()&&(this.filters.push(t),this.applyFilter(t))}),this),s},applyFilter:function(t){var r=1<<t.bitIndex,e=0,a=!t.isActive();i.forEach(this.variables,(function(i){var h=t.match(i,!0);!0===h&&e++,a||h?this._filterHash[i[this.idProperty]]&=~r:this._filterHash[i[this.idProperty]]|=r}),this),t.matchCount=e},match:function(t){return!this._filterHash[t[this.idProperty]]},getMatchingVariables:function(){var t=[];return i.forEach(this.variables,(function(i){this.match(i)&&t.push(i)}),this),t}})}));