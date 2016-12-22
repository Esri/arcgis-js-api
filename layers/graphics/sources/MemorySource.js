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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../core/Collection","../../../core/Promise","../../../core/promiseUtils","../../../core/Error","../../../tasks/support/FeatureSet","../../../Graphic","../QueryEngine"],function(e,r,t,n,u,i,s){var y="MemorySource",o="Not ready to execute query",c=e.ofType(i).createSubclass([r],{properties:{layer:{value:null},_queryEngine:{value:null,dependsOn:["layer.loaded"],get:function(){return this.get("layer.loaded")?new s({features:this,objectIdField:this.layer.objectIdField}):null}}},queryFeatures:function(e){return this._queryEngine?this._queryEngine.queryFeatures(e).then(function(e){var r=new u;return r.features=e,r}):this._rejectQuery(o)},queryObjectIds:function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery(o)},queryFeatureCount:function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery(o)},queryExtent:function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery(o)},_rejectQuery:function(e){return t.reject(new n(y,e))}});return c});