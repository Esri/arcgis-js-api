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

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable"],function(n,t,e){return n(e,{_benchmarkIndex:0,_noTextLimit:!1,constructor:function(n){t.mixin(this,n)},getAreaIndex:function(){return this._benchmarkIndex},setAreaIndex:function(n){n!==this._benchmarkIndex&&(this._benchmarkIndex=n,this.onChanged())},setNoTextLimit:function(n){this._noTextLimit=n},hasNoTextLimit:function(){return this._noTextLimit},onChanged:function(){}})});