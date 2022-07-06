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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/store/util/SimpleQueryEngine","dojo/store/util/QueryResults"],(function(t,e,n,i,r){function s(t,e,n){var i=t&&t(e);return!i||i.isFulfilled()?n():i.then((function(){return n()}))}var o=t(null,{idProperty:"id",index:null,data:null,indexIgnoreCase:!0,resolver:null,queryEngine:i,constructor:function(t){e.mixin(this,t),this.setData(this.data)},setData:function(t){this.data=[],this.index={},n.forEach(t,(function(t,e){this.data[e]=t;var n=this.getIdentity(t);this.indexIgnoreCase&&(n=n.toUpperCase()),this.index[n]=e}),this)},get:function(t){return this.indexIgnoreCase&&t&&(t=t.toUpperCase()),this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},query:function(t,n){return r(s(this.resolver,t,e.hitch(this,this.syncQuery,t,n)))},syncQuery:function(t,e){return this.queryEngine(t,e)(this.data)}});return o.resolveCallback=s,o}));