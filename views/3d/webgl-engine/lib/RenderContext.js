// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var s=function(){function e(e,t,s,r,n,h){this.camera=null,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.options=null,this.renderOccludedMask=i,this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=s,this.shadowMap=r,this.ssaoHelper=n,this.sliceHelper=h}return e.prototype.resetRenderOccludedMask=function(){this.renderOccludedMask=i},Object.defineProperty(e.prototype,"isHighlightPass",{get:function(){return 4===this.pass},enumerable:!0,configurable:!0}),e}(),i=5;return s});