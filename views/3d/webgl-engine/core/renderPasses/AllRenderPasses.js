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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat3f64","../../../../../core/libs/gl-matrix-2/vec2f64","../../../../../core/libs/gl-matrix-2/vec4f64","../../../support/geometryUtils","../shaderLibrary/attributes/VertexPosition.glsl"],function(e,r,i,t,a,s,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){this.identifier=0,this.transparent=!1,this.integratedMesh=!1,this.viewTransform=new n.VertexPosition.ViewProjectionTransform,this.transformNormal_ViewFromGlobal=i.mat3f64.create(),this.cameraNearFar=t.vec2f64.create(),this.slicePlane=s.boundedPlane.create(),this.slicePlaneEnabled=!0,this.ambientOcclusionEnabled=!0,this.shadowsEnabled=!0}return e}();r.MaterialPassesParameters=o;var c=function(){function e(){this.identifier=1,this.viewTransform=new n.VertexPosition.ViewProjectionTransform,this.cameraNearFar=t.vec2f64.create(),this.slicePlane=s.boundedPlane.create()}return e}();r.ShadowMapPassParameters=c;var l=function(){function e(){this.identifier=2,this.viewTransform=new n.VertexPosition.ViewProjectionTransform,this.slicePlane=s.boundedPlane.create(),this.viewport=a.vec4f64.create()}return e}();r.HighlightPassParameters=l});