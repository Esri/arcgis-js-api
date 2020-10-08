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

define(["require","exports"],(function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.stencilToolTransparentOccluderParams=s.stencilToolMaskOccluderParams=s.stencilToolMaskBaseParams=s.stencilBaseAllZerosParams=s.replaceBitWhenDepthTestPasses=s.renderWhenBitIsNotSet=s.stencilWriteMaskOff=s.stencilWriteMaskOn=s.depthCompareAlways=s.depthCompareLess=void 0,s.depthCompareLess={func:513},s.depthCompareAlways={func:519},s.stencilWriteMaskOn={mask:255},s.stencilWriteMaskOff={mask:0},s.renderWhenBitIsNotSet=function(e){return{function:{func:517,ref:e,mask:e},operation:{fail:7680,zFail:7680,zPass:7680}}},s.replaceBitWhenDepthTestPasses=function(e){return{function:{func:519,ref:e,mask:e},operation:{fail:7680,zFail:7680,zPass:7681}}},s.stencilBaseAllZerosParams={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},s.stencilToolMaskBaseParams={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},s.stencilToolMaskOccluderParams={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},s.stencilToolTransparentOccluderParams={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}}}));