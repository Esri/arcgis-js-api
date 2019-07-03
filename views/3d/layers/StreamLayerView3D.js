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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Graphic","../../../core/Collection","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/support/Query","./FeatureLikeLayerView3D","../../layers/StreamLayerView"],function(e,r,t,o,a,i,s,p,n,c,l,u,y){return function(r){function u(){return r.call(this)||this}return t(u,r),u.prototype.createQuery=function(){return new l({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})},u.prototype.createController=function(){return i(this,void 0,void 0,function(){var r,t,o;return a(this,function(a){switch(a.label){case 0:return r=p.ofType(s),[4,n.create(function(r){e(["../../../layers/graphics/controllers/StreamController"],r)})];case 1:return t=a.sent(),o=new t({layer:this.layer,layerView:this,graphics:new r}),[4,o.when()];case 2:return a.sent(),[2,o]}})})},o([c.property()],u.prototype,"controller",void 0),o([c.property({aliasOf:"controller.graphics",readOnly:!0})],u.prototype,"graphics",void 0),o([c.property({readOnly:!0,aliasOf:"layer.capabilities.data.supportsZ"})],u.prototype,"hasZ",void 0),o([c.property({readOnly:!0,aliasOf:"layer.capabilities.data.supportsM"})],u.prototype,"hasM",void 0),u=o([c.subclass("esri.views.3d.layers.StreamLayerView3D")],u)}(c.declared(u,y))});