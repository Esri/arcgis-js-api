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

define(["require","exports","../../core/libs/gl-matrix-2/mat4f64","./externalRenderers/ExternalRendererStore","./support/projectionUtils"],(function(e,r,n,t,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.bind=r.getRenderCamera=r.renderCoordinateTransformAt=r.fromRenderCoordinates=r.toRenderCoordinates=r.requestRender=r.remove=r.add=void 0;var d=new t;function i(e,r){d.add(e,r)}function a(e,r){d.remove(e,r)}function s(e){e._stage.renderView.setNeedsRender()}function f(e,r,n,t,d,i,a){return t=t||e.spatialReference,o.bufferToBuffer(r,t,n,d,e.renderCoordsHelper.spatialReference,i,a)?d:null}function u(e,r,n,t,d,i,a){return i=i||e.spatialReference,o.bufferToBuffer(r,e.renderCoordsHelper.spatialReference,n,t,i,d,a)?t:null}function c(e,r,t,d){return d||(d=n.mat4f64.create()),t=t||e.spatialReference,o.computeLinearTransformation(t,r,d,e.renderCoordsHelper.spatialReference)?d:null}r.add=i,r.remove=a,r.requestRender=s,r.toRenderCoordinates=f,r.fromRenderCoordinates=u,r.renderCoordinateTransformAt=c,r.getRenderCamera=function(e){return e.state.camera.clone()},r.bind=function(e){return{add:i.bind(this,e),remove:a.bind(this,e),requestRender:s.bind(this,e),toRenderCoordinates:f.bind(this,e),fromRenderCoordinates:u.bind(this,e),renderCoordinateTransformAt:c.bind(this,e)}}}));