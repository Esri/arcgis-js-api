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

define(["require","exports","../lib/glMatrix","../support/aaBoundingBox"],function(t,e,i,n){var r=i.vec2d;return function(){function t(){this.overlayTexOffset=r.create(),this.texOffset=r.create(),this.geometryInfo={indices:null,vertexAttributes:null,boundingBox:n.create(n.NEGATIVE_INFINITY),numSurfaceIndices:0,numSkirtIndices:0,numWithoutSkirtIndices:0,numVertsPerRow:0},this.init()}return t.prototype.init=function(){var t=this.geometryInfo;t.indices=null,t.vertexAttributes=null,n.set(t.boundingBox,n.NEGATIVE_INFINITY),t.numSurfaceIndices=0,t.numSkirtIndices=0,t.numWithoutSkirtIndices=0,t.numVertsPerRow=0,this.geometryState=null,this.vao=null,this.texture=null,this.textureReference=null,r.set2(0,0,this.texOffset),this.texScale=1,this.overlayTexId=null,this.highlightOverlayTexId=null,this.overlayTexScale=[1,1],this.overlayOpacity=1,this.localOrigin=null},t.prototype.updateGeometryState=function(t){return this.geometryState=t.geometryState(this.geometryState),this.geometryState},t.prototype.estimateGeometryMemoryUsage=function(){var t=this.geometryInfo;return t.indices.byteLength+t.vertexAttributes.byteLength},t}()});