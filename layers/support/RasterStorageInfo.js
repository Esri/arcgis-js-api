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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Point"],(function(o,e,r,t,p,i){return function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.blockWidth=void 0,e.blockHeight=void 0,e.compression=null,e.origin=null,e.firstPyramidLevel=null,e.maximumPyramidLevel=null,e.pyramidScalingFactor=2,e.pyramidBlockWidth=null,e.pyramidBlockHeight=null,e.tileInfo=null,e.blockBoundary=null,e}return r.__extends(e,o),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"blockWidth",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"blockHeight",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],e.prototype,"compression",void 0),r.__decorate([p.property({type:i,json:{write:!0}})],e.prototype,"origin",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"firstPyramidLevel",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"maximumPyramidLevel",void 0),r.__decorate([p.property()],e.prototype,"pyramidScalingFactor",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"pyramidBlockWidth",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],e.prototype,"pyramidBlockHeight",void 0),r.__decorate([p.property({json:{write:!0}})],e.prototype,"tileInfo",void 0),r.__decorate([p.property()],e.prototype,"blockBoundary",void 0),e=r.__decorate([p.subclass("esri.layers.support.RasterStorageInfo")],e)}(t.JSONSupport)}));