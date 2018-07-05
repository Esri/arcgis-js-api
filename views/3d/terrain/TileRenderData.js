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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/aaBoundingBox","../lib/glMatrix"],function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.overlayTexOffset=n.vec2d.create(),this.texOffsetAndScale=n.vec4d.create(),this.geometryInfo={indices:null,vertexAttributes:null,boundingBox:r.empty(),numSurfaceIndices:0,numSkirtIndices:0,numWithoutSkirtIndices:0,numVertsPerRow:0,skirtLength:0,uvOffsetAndScale:n.vec4d.create()},this.init()}return e.prototype.init=function(){var e=this.geometryInfo;if(e.indices=null,e.vertexAttributes=null,r.empty(e.boundingBox),e.numSurfaceIndices=0,e.numSkirtIndices=0,e.numWithoutSkirtIndices=0,e.numVertsPerRow=0,this.geometryState=null,this.vao=null,this.texture=null,this.textureReference=null,n.vec4d.set4(0,0,1,1,this.texOffsetAndScale),this.opacity=1,this.overlays)for(var t=0,i=this.overlays;t<i.length;t++){var s=i[t];s.renderTargetId=null,s.highlightRenderTargetId=null,n.vec2d.set2(1,1,s.texScale),n.vec2d.set2(0,0,s.texOffset)}else{this.overlays=[null,null];for(var l=0;l<2;l++)this.overlays[l]={renderTargetId:null,highlightRenderTargetId:null,texScale:[1,1],texOffset:[0,0]}}this.overlayOpacity=1,this.localOrigin=null},e.prototype.updateGeometryState=function(e){return this.geometryState=e.geometryState(this.geometryState),this.geometryState},e.prototype.estimateGeometryMemoryUsage=function(){var e=this.geometryInfo;return e.indices.byteLength+e.vertexAttributes.byteLength},e}();t.TileRenderData=i});