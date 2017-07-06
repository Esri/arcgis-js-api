// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/store/util/SimpleQueryEngine","dojo/store/util/QueryResults"],function(t,n,e,i,r){function s(t,n,e){var i=t&&t(n);return!i||i.isFulfilled()?e():i.then(function(){return e()})}var u=t(null,{idProperty:"id",index:null,data:null,resolver:null,queryEngine:i,constructor:function(t){n.mixin(this,t),this.setData(this.data)},setData:function(t){this.data=[],this.index={},e.forEach(t,function(t,n){this.data[n]=t,this.index[this.getIdentity(t)]=n},this)},get:function(t){return this.data[this.index[t]]},getIdentity:function(t){return t[this.idProperty]},query:function(t,e){return r(s(this.resolver,t,n.hitch(this,this.syncQuery,t,e)))},syncQuery:function(t,n){return this.queryEngine(t,n)(this.data)}});return u.resolveCallback=s,u});