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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Point"],(function(r,o,e,t,p,i,y,l){return function(r){function o(){var o=null!==r&&r.apply(this,arguments)||this;return o.blockWidth=void 0,o.blockHeight=void 0,o.compression=null,o.origin=null,o.firstPyramidLevel=null,o.maximumPyramidLevel=null,o.pyramidScalingFactor=2,o.pyramidBlockWidth=null,o.pyramidBlockHeight=null,o.tileInfo=null,o.blockBoundary=null,o}return t(o,r),p([y.property({type:Number,json:{write:!0}})],o.prototype,"blockWidth",void 0),p([y.property({type:Number,json:{write:!0}})],o.prototype,"blockHeight",void 0),p([y.property({type:String,json:{write:!0}})],o.prototype,"compression",void 0),p([y.property({type:l,json:{write:!0}})],o.prototype,"origin",void 0),p([y.property({type:Number,json:{write:!0}})],o.prototype,"firstPyramidLevel",void 0),p([y.property({type:Number,json:{write:!0}})],o.prototype,"maximumPyramidLevel",void 0),p([y.property()],o.prototype,"pyramidScalingFactor",void 0),p([y.property({type:Number,json:{write:!0}})],o.prototype,"pyramidBlockWidth",void 0),p([y.property({type:Number,json:{write:!0}})],o.prototype,"pyramidBlockHeight",void 0),p([y.property({json:{write:!0}})],o.prototype,"tileInfo",void 0),p([y.property()],o.prototype,"blockBoundary",void 0),o=p([y.subclass("esri.layers.support.RasterStorageInfo")],o)}(y.declared(i.JSONSupport))}));