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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../core/HandleRegistry","../../../core/promiseUtils","../../../core/Error","../../../layers/graphics/QueryEngine","./LayerView2D","./GraphicsView2D"],function(e,r,t,i,n,s){var h=n.createSubclass({declaredClass:"esri.views.2d.layers.GraphicsLayerView2D",classMetadata:{properties:{updating:{dependsOn:["_controller.isQueryInProgress","_controller._socketConnector.status"],getter:function(){return this.get("_controller.isQueryInProgress")===!0||0===this.get("_controller._socketConnector.status")}}}},constructor:function(){this._rendererChanged=this._rendererChanged.bind(this),this._handlesGLV=new e},initialize:function(){this._createController().then(this._startup.bind(this)).otherwise(function(){console.log("GraphicsLayerView2D: unable to startup graphics layer view.")})},destroy:function(){this._handlesGLV.destroy(),this._controller&&this._controller.destroy&&this._controller.destroy(),this._graphicsView&&this._graphicsView.destroy(),this._handlesGLV=this._controller=this._graphicsView=null},layer:null,view:null,_controller:null,_graphics:null,_graphicsView:null,_handlesGLV:null,hitTest:function(e,r){return this._graphicsView?this._graphicsView.hitTest(e,r):null},queryGraphics:function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()},queryFeatures:function(e){return this._queryEngine?this._queryEngine.queryFeatures(e):this._rejectQuery()},queryObjectIds:function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery()},queryFeatureCount:function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery()},queryExtent:function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery()},_startup:function(){this._queryEngine=new i({features:this._graphics,objectIdField:this.layer.objectIdField}),this._createGraphicsView(),this._setupWatchers()},_createController:function(){return this.layer.createGraphicsController({layerView:this}).then(function(e){this._controller=e,this._graphics=e.graphics}.bind(this)).otherwise(function(){console.log("GraphicsLayerView2D: unable to create controller.")})},_createGraphicsView:function(){this._graphicsView=new s({view:this,graphics:this._graphics,renderer:this.layer.renderer})},_setupWatchers:function(){this._handlesGLV.add(this.layer.watch("renderer",this._rendererChanged))},_rendererChanged:function(){this._graphicsView.renderer=this.layer.renderer},_rejectQuery:function(e){return r.reject(new t("GraphicsLayerView2D","Not ready to execute query"))}});return h});