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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/libs/gl-matrix-2/mat4f64","./externalRenderers/ExternalRendererStore","./support/projectionUtils"],function(e,r,n,t,o){function i(e,r){c.add(e,r)}function d(e,r){c.remove(e,r)}function a(e){e._stage.setNeedsRender()}function s(e,r,n,t,i,d,a){return t=t||e.spatialReference,o.bufferToBuffer(r,t,n,i,e.renderCoordsHelper.spatialReference,d,a)?i:null}function f(e,r,n,t,i,d,a){return d=d||e.spatialReference,o.bufferToBuffer(r,e.renderCoordsHelper.spatialReference,n,t,d,i,a)?t:null}function u(e,r,t,i){return i||(i=n.mat4f64.create()),t=t||e.spatialReference,o.computeLinearTransformation(t,r,i,e.renderCoordsHelper.spatialReference)?i:null}function l(e){return{add:i.bind(this,e),remove:d.bind(this,e),requestRender:a.bind(this,e),toRenderCoordinates:s.bind(this,e),fromRenderCoordinates:f.bind(this,e),renderCoordinateTransformAt:u.bind(this,e)}}Object.defineProperty(r,"__esModule",{value:!0});var c=new t;r.add=i,r.remove=d,r.requestRender=a,r.toRenderCoordinates=s,r.fromRenderCoordinates=f,r.renderCoordinateTransformAt=u,r.bind=l});