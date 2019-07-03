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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","./Graphics3DSymbolCommonCode","./graphicUtils","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],function(e,t,a,r,n,o,i,s,l,c,u,v){function d(e,a,r,n){var o=e.stageObject,i=r.spatialReference;E.spatialReference=i;for(var l=o.getGeometryRecords(),u=l.length,v="absolute-height"!==a.mode,d=0,m=0;m<u;m++){var f=l[m].geometry,g=l[m].getShaderTransformation();b[0]=g[12],b[1]=g[13],b[2]=g[14],f.invalidateBoundingInfo();for(var I=f.data.getVertexAttr(),M=I[p.POSITION],S=M.data,R=I.mapPos.data,x=M.size,_=S.length/x,D=0,L=0,y=!1,O=0,G=0;G<_;G++){E.x=R[L++],E.y=R[L++],E.z=R[L++],h[0]=S[D],h[1]=S[D+1],h[2]=S[D+2];var V=s.computeElevation(r,E,a,n,v?A:null);if(v&&(O+=A.terrainElevation),T[0]=S[D]+b[0],T[1]=S[D+1]+b[1],T[2]=S[D+2]+b[2],n.setAltitude(V,T),S[D]=T[0]-b[0],S[D+1]=T[1]-b[1],S[D+2]=T[2]-b[2],c.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS)y=!0;else{var P=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(h[0]-S[D])>=P||Math.abs(h[1]-S[D+1])>=P||Math.abs(h[2]-S[D+2])>=P)&&(y=!0)}D+=x}d+=O/_,y&&o.geometryVertexAttrsUpdated(m)}return d/u}function m(e,r,o,i,v){var d=e.stageObject,m=r.centerPointInElevationSR,f=0,p=0;if(d.metadata.usesVerticalDistanceToGround)f=s.computeElevation(o,m,r,i,A),l.updateVertexAttributeAuxpos1w(d,A.verticalDistanceToGround),p=A.terrainElevation;else{var E="absolute-height"!==r.mode;f=s.computeElevation(o,m,r,i,E?A:null),E&&(p=A.terrainElevation)}var b=a.mat4.copy(M,d.objectTransformation),h=n.vec3.set(I,b[12],b[13],b[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(T[0]=m.x,T[1]=m.y,T[2]=f,u.computeLinearTransformation(m.spatialReference,T,b,i.spatialReference)&&(d.objectTransformation=b)):i.setAltitudeOfTransformation(f,b);var g=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(b[12]-h[0])>=g||Math.abs(b[13]-h[1])>=g||Math.abs(b[14]-h[2])>=g)&&(d.objectTransformation=b),p}function f(e,a,r,o,i){var l=a.centerPointInElevationSR,v=0,d=0,m="absolute-height"!==a.mode;v=s.computeElevation(r,l,a,o,m?A:null),m&&(d=A.terrainElevation);var f=e.graphics3DSymbolLayer.lodRenderer.instanceData,p=e.instanceIndex,E=g;f.getGlobalTransform(p,E);var b=n.vec3.set(I,E[12],E[13],E[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(T[0]=l.x,T[1]=l.y,T[2]=v,u.computeLinearTransformation(l.spatialReference,T,E,o.spatialReference)&&f.setGlobalTransform(p,E)):o.setAltitudeOfTransformation(v,E);var h=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(E[12]-b[0])>=h||Math.abs(E[13]-b[1])>=h||Math.abs(E[14]-b[2])>=h)&&f.setGlobalTransform(p,E),d}Object.defineProperty(t,"__esModule",{value:!0});var p=v.VertexAttrConstants,E=new i,T=o.vec3f64.create(),b=o.vec3f64.create(),h=o.vec3f64.create(),g=r.mat4f64.create(),I=o.vec3f64.create(),A={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=d,t.perObjectElevationAligner=m;var M=r.mat4f64.create();t.perLodInstanceElevationAligner=f,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});