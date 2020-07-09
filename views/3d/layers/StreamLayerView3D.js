// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators","../../../tasks/support/Query","./FeatureLikeLayerView3D","./LayerView3D","../../layers/LayerView","../../layers/StreamLayerView","@dojo/framework/shim/Promise"],(function(e,r,t,o,n,a,i,s,c,y,p){return function(r){function s(){var e=null!==r&&r.apply(this,arguments)||this;return e.asyncGraphicsUpdates=!0,e.hasZ=!0,e.hasM=!1,e}return t.__extends(s,r),Object.defineProperty(s.prototype,"connectionError",{get:function(){var e=this.get("controller.connection.errorString");if(e)return new o("stream-controller",e)},enumerable:!0,configurable:!0}),s.prototype.createQuery=function(){return new i({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})},s.prototype.queryLatestObservations=function(e,r){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),n.get(r,"signal"))},s.prototype.createController=function(){return t.__awaiter(this,void 0,void 0,(function(){var r,o;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(r,t){e(["../../../layers/graphics/controllers/StreamController"],r,t)}))];case 1:return r=t.sent().default,[4,(o=new r({layer:this.layer,layerView:this})).when()];case 2:return t.sent(),[2,o]}}))}))},t.__decorate([a.property({readOnly:!0})],s.prototype,"asyncGraphicsUpdates",void 0),t.__decorate([a.property({dependsOn:["controller.connection.errorString"],readOnly:!0})],s.prototype,"connectionError",null),t.__decorate([a.property()],s.prototype,"controller",void 0),t.__decorate([a.property({readOnly:!0})],s.prototype,"hasZ",void 0),t.__decorate([a.property({readOnly:!0})],s.prototype,"hasM",void 0),s=t.__decorate([a.subclass("esri.views.3d.layers.StreamLayerView3D")],s)}(p.StreamLayerView(s.FeatureLikeLayerView3D(c.LayerView3D(y))))}));