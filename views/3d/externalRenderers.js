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

define(["require","exports","../../core/libs/gl-matrix-2/mat4f64","./externalRenderers/ExternalRendererStore","./support/projectionUtils"],(function(e,r,n,t,o){Object.defineProperty(r,"__esModule",{value:!0});var i=new t;function d(e,r){i.add(e,r)}function a(e,r){i.remove(e,r)}function s(e){e._stage.renderView.setNeedsRender()}function f(e,r,n,t,i,d,a){return t=t||e.spatialReference,o.bufferToBuffer(r,t,n,i,e.renderCoordsHelper.spatialReference,d,a)?i:null}function u(e,r,n,t,i,d,a){return d=d||e.spatialReference,o.bufferToBuffer(r,e.renderCoordsHelper.spatialReference,n,t,d,i,a)?t:null}function l(e,r,t,i){return i||(i=n.mat4f64.create()),t=t||e.spatialReference,o.computeLinearTransformation(t,r,i,e.renderCoordsHelper.spatialReference)?i:null}r.add=d,r.remove=a,r.requestRender=s,r.toRenderCoordinates=f,r.fromRenderCoordinates=u,r.renderCoordinateTransformAt=l,r.bind=function(e){return{add:d.bind(this,e),remove:a.bind(this,e),requestRender:s.bind(this,e),toRenderCoordinates:f.bind(this,e),fromRenderCoordinates:u.bind(this,e),renderCoordinateTransformAt:l.bind(this,e)}}}));