// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../../core/Collection","../../../core/Promise","../../../core/promiseUtils","../../../core/Error","../../../tasks/support/FeatureSet","../../../Graphic","../QueryEngine"],function(e,r,t,u,n,i,s){return e.ofType(i).createSubclass([r],{declaredClass:"esri.layers.graphics.sources.MemorySource",properties:{layer:{value:null},_queryEngine:{value:null,dependsOn:["layer.loaded"],get:function(){return this.get("layer.loaded")?new s({features:this,spatialReference:this.layer.spatialReference,objectIdField:this.layer.objectIdField}):null}}},queryFeatures:function(e){return this._queryEngine?this._queryEngine.queryFeatures(e).then(function(e){var r=new n;return r.features=e,r}):this._rejectQuery("Not ready to execute query")},queryObjectIds:function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery("Not ready to execute query")},queryFeatureCount:function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery("Not ready to execute query")},queryExtent:function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery("Not ready to execute query")},_rejectQuery:function(e){return t.reject(new u("MemorySource",e))}})});