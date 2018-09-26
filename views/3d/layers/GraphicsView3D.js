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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./graphics/Graphics3DGraphicLikeLayerView","../../layers/GraphicsView"],function(r,e,t,p,i,o,a,s){return function(r){function e(e){var t=r.call(this)||this;return t.graphics3d=null,t.slicePlaneEnabled=!1,t.supportsDraping=!0,t.overlayUpdating=!1,t.mockLayerId="__sceneView.graphics-"+Date.now().toString(16),t}return t(e,r),e.prototype.initialize=function(){var r={id:this.mockLayerId,uid:this.mockLayerId};this.graphics3d=new a({owner:this,layer:r}),this.graphics3d.setup()},e.prototype.destroy=function(){this.graphics3d&&(this.graphics3d.destroy(),this.graphics3d=null)},Object.defineProperty(e.prototype,"updating",{get:function(){return!(this.graphics3d&&!this.graphics3d.updating&&!this.overlayUpdating)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"drawingOrder",{set:function(r){this.graphics3d.graphicsCore.setDrawingOrder(r),this._set("drawingOrder",r)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphics},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"graphics3DGraphicsKeys",{get:function(){return this.graphics3d.graphicsCore.graphics3DGraphicsKeys},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},enumerable:!0,configurable:!0}),e.prototype.getRenderingInfo=function(r){return{symbol:r.symbol||null}},e.prototype.getGraphicFromGraphicUid=function(r){return this.graphics3d.getGraphicFromGraphicUid(r)},e.prototype.whenGraphicBounds=function(r,e){return this.graphics3d.whenGraphicBounds(r,e)},e.prototype.queryGraphics=function(){return i.resolve(this.loadedGraphics)},p([o.property({aliasOf:"view.graphics"})],e.prototype,"graphics",void 0),p([o.property({aliasOf:"graphics"})],e.prototype,"loadedGraphics",void 0),p([o.property({readOnly:!0,dependsOn:["graphics3d.updating","overlayUpdating"]})],e.prototype,"updating",null),p([o.property({constructOnly:!0})],e.prototype,"view",void 0),p([o.property()],e.prototype,"graphics3d",void 0),p([o.property({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0),p([o.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],e.prototype,"hasDraped",void 0),p([o.property({type:Boolean})],e.prototype,"supportsDraping",void 0),p([o.property({type:Boolean})],e.prototype,"overlayUpdating",void 0),p([o.property()],e.prototype,"drawingOrder",null),e=p([o.subclass("esri.views.3d.layers.GraphicsView3D")],e)}(o.declared(s))});