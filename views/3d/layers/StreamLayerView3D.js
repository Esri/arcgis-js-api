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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/support/Query","./FeatureLikeLayerView3D","./LayerView3D","../../layers/LayerView","../../layers/StreamLayerView"],(function(e,r,t,o,n,a,i,s,c,p,u,l,y,d,h){return function(r){function l(){var e=null!==r&&r.apply(this,arguments)||this;return e.asyncGraphicsUpdates=!0,e.hasZ=!0,e.hasM=!1,e}return t(l,r),Object.defineProperty(l.prototype,"connectionError",{get:function(){var e=this.get("controller.connection.errorString");if(e)return new i("stream-controller",e)},enumerable:!0,configurable:!0}),l.prototype.createQuery=function(){return new u({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})},l.prototype.queryLatestObservations=function(e,r){return a(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),s.get(r,"signal"))]}))}))},l.prototype.createController=function(){return a(this,void 0,void 0,(function(){var r,t;return n(this,(function(o){switch(o.label){case 0:return[4,c.create((function(r){e(["../../../layers/graphics/controllers/StreamController"],r)}))];case 1:return r=o.sent().default,[4,(t=new r({layer:this.layer,layerView:this})).when()];case 2:return o.sent(),[2,t]}}))}))},o([p.property({readOnly:!0})],l.prototype,"asyncGraphicsUpdates",void 0),o([p.property({dependsOn:["controller.connection.errorString"],readOnly:!0})],l.prototype,"connectionError",null),o([p.property()],l.prototype,"controller",void 0),o([p.property({readOnly:!0})],l.prototype,"hasZ",void 0),o([p.property({readOnly:!0})],l.prototype,"hasM",void 0),l=o([p.subclass("esri.views.3d.layers.StreamLayerView3D")],l)}(p.declared(h.StreamLayerView(l.FeatureLikeLayerView3D(y.LayerView3D(d)))))}));