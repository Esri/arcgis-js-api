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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators","../../../layers/graphics/controllers/StreamController","../../../tasks/support/Query","./FeatureLikeLayerView3D","./LayerView3D","../../layers/LayerView","../../layers/StreamLayerView","@dojo/framework/shim/Promise"],(function(e,r,t,o,n,a,i,s,c,p,y,l){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.asyncGraphicsUpdates=!0,r.hasZ=!0,r.hasM=!1,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"connectionError",{get:function(){var e=this.get("controller.connection.errorString");if(e)return new o("stream-controller",e)},enumerable:!1,configurable:!0}),r.prototype.createQuery=function(){return new s({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})},r.prototype.queryLatestObservations=function(e,r){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),n.get(r,"signal"))},r.prototype.createController=function(){return new i.default({layer:this.layer,layerView:this})},r.prototype.beforeSetController=function(){},t.__decorate([a.property({readOnly:!0})],r.prototype,"asyncGraphicsUpdates",void 0),t.__decorate([a.property({dependsOn:["controller.connection.errorString"],readOnly:!0})],r.prototype,"connectionError",null),t.__decorate([a.property()],r.prototype,"controller",void 0),t.__decorate([a.property({readOnly:!0})],r.prototype,"hasZ",void 0),t.__decorate([a.property({readOnly:!0})],r.prototype,"hasM",void 0),r=t.__decorate([a.subclass("esri.views.3d.layers.StreamLayerView3D")],r)}(l.StreamLayerView(c.FeatureLikeLayerView3D(p.LayerView3D(y))))}));