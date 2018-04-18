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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/graphics/controllers/StreamController","./GraphicLayerView3DBase","../../layers/StreamLayerView"],function(r,e,t,o,a,c,l,n,i,s){return function(r){function e(){var e=r.call(this)||this;return e.labelingEnabled=!0,e}return t(e,r),e.prototype.createController=function(){var r=this;return this.layer.createGraphicsController({layerView:this}).then(function(e){if(e instanceof n)return r.controller=e,e;throw new Error("Invalid controller created.")}).catch(function(r){return c.reject(new a("streamlayerview3d:create-controller",r.message))})},o([l.property()],e.prototype,"controller",void 0),o([l.property({aliasOf:"controller.graphics",readOnly:!0})],e.prototype,"graphics",void 0),e=o([l.subclass("esri.views.3d.layers.StreamLayerView3D")],e)}(l.declared(s,i))});