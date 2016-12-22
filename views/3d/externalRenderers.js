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

define(["require","exports","./externalRenderers/ExternalRendererStore","./support/projectionUtils","./webgl-engine/lib/gl-matrix"],function(e,r,n,t,o){function i(e,r){R.add(e,r)}function d(e,r){R.remove(e,r)}function a(e){e._stage.setNeedsRender()}function s(e,r,n,o,i,d,a){return o=o||e.spatialReference,t.bufferToBuffer(r,o,n,i,e.renderCoordsHelper.spatialReference,d,a)?i:null}function f(e,r,n,o,i,d,a){return d=d||e.spatialReference,t.bufferToBuffer(r,e.renderCoordsHelper.spatialReference,n,o,d,i,a)?o:null}function u(e,r,n,o){return o||(o=c.create()),n=n||e.spatialReference,t.computeLinearTransformation(n,r,o,e.renderCoordsHelper.spatialReference)?o:null}function l(e){return{add:i.bind(this,e),remove:d.bind(this,e),requestRender:a.bind(this,e),toRenderCoordinates:s.bind(this,e),fromRenderCoordinates:f.bind(this,e),renderCoordinateTransformAt:u.bind(this,e)}}var c=o.mat4d,R=new n;r.add=i,r.remove=d,r.requestRender=a,r.toRenderCoordinates=s,r.fromRenderCoordinates=f,r.renderCoordinateTransformAt=u,r.bind=l});