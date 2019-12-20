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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dstore/Memory","dstore/Trackable","dstore/Tree","../../kernel"],function(e,t,r,o,i,n,a){var c=e([o,i]),d={createHierarchicalStore:function(e){var t=this.createSyncStore(e,n);return t.getRootCollection=function(){return this.root.filter({parent:void 0})},t.getRootCollection()},createSyncStore:function(r,o){return r=r||{},r.data&&(r=t.mixin({},r,{data:t.clone(r.data)})),new(o?e([c,o]):c)(r)},createStore:function(e){for(var r={identifier:"id",label:"id",items:[]},o=0,i=e.length;o<i;o++)r.items.push(t.mixin({id:o},e[o%i]));return this.createSyncStore({data:r})}};return r("extend-esri")&&t.setObject("dijit.analysis.storeUtils",d,a),d});