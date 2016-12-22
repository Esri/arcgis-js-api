// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix"],function(t,e,i){var r=i.vec2d,n=function(){function t(){this.overlayTexOffset=r.create(),this.texOffset=r.create(),this.geometryInfo={geometry:null,numSurfaceIndices:0,numSkirtIndices:0,numWithoutSkirtIndices:0,numVertsPerRow:0},this.init()}return t.prototype.init=function(){this.geometryInfo.geometry=null,this.geometryInfo.numSurfaceIndices=0,this.geometryInfo.numSkirtIndices=0,this.geometryInfo.numWithoutSkirtIndices=0,this.geometryInfo.numVertsPerRow=0,this.geometryState=null,this.vao=null,this.texture=null,this.textureReference=null,r.set2(0,0,this.texOffset),this.texScale=1,this.overlayTexId=null,this.overlayTexScale=[1,1],this.overlayOpacity=1,this.localOrigin=null},t.prototype.updateGeometryState=function(t){return this.geometryState=t.geometryState(this.geometryState),this.geometryState},t}();return n});