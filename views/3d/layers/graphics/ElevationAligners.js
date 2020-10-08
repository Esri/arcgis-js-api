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

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","./elevationAlignmentUtils","./graphicUtils","../support/uvUtils","../../support/debugFlags","../../support/projectionUtils","../../support/buffer/BufferView","../../webgl-engine/lib/Util"],(function(e,t,a,r,n,i,o,l,s,c,f,d,v,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iterativeUpdatesEnabled=t.updateThresholdInMeters=t.perLodInstanceElevationAligner=t.perObjectElevationAligner=t.perVertexElevationAligner=void 0;var m=p.VertexAttrConstants;t.perVertexElevationAligner=function(e,a,r,n){var i=e.stageObject,o=r.spatialReference;E.spatialReference=o;for(var l=i.geometryRecords,c=l.length,v="absolute-height"!==a.mode,p=0,A=0;A<c;A++){var h=l[A].geometry,I=l[A].getShaderTransformation();b[0]=I[12],b[1]=I[13],b[2]=I[14],h.invalidateBoundingInfo();for(var y=h.data.getVertexAttr(),M=y[m.POSITION],S=M.data,U=y.mapPos.data,x=M.size,D=S.length/x,O=0,P=0,R=!1,B=0,L=0;L<D;L++){E.x=U[P++],E.y=U[P++],E.z=U[P++],g[0]=S[O],g[1]=S[O+1],g[2]=S[O+2];var _=s.evaluateElevationAlignmentAtPoint(E,r,a,n,v?V:null);if(v&&(B+=V.sampledElevation),T[0]=S[O]+b[0],T[1]=S[O+1]+b[1],T[2]=S[O+2]+b[2],n.setAltitude(_,T),S[O]=T[0]-b[0],S[O+1]=T[1]-b[1],S[O+2]=T[2]-b[2],d.TESTS_DISABLE_UPDATE_THRESHOLDS)R=!0;else{var N=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(g[0]-S[O])>=N||Math.abs(g[1]-S[O+1])>=N||Math.abs(g[2]-S[O+2])>=N)&&(R=!0)}O+=x}if(y[m.BOUND1]){var j=y[m.BOUND1].data,w=y[m.BOUND2].data,G=y[m.BOUND3].data,C=y[m.UVMAPSPACE].data;f.createMapSpaceUVCoords(u.BufferViewVec4f.fromTypedArray(C),u.BufferViewVec3f64.fromTypedArray(S),n,u.BufferViewVec3f64.fromTypedArray(j),u.BufferViewVec3f64.fromTypedArray(w),u.BufferViewVec3f64.fromTypedArray(G))}p+=B/D,R&&i.geometryVertexAttrsUpdated(A)}return p/c},t.perObjectElevationAligner=function(e,a,n,o){var l=e.stageObject,f=a.centerPointInElevationSR,u=0,p=0;if(l.metadata.usesVerticalDistanceToGround)u=s.evaluateElevationAlignmentAtPoint(f,n,a,o,V),c.updateVertexAttributeAuxpos1w(l,V.verticalDistanceToGround),p=V.sampledElevation;else{var m="absolute-height"!==a.mode;u=s.evaluateElevationAlignmentAtPoint(f,n,a,o,m?V:null),m&&(p=V.sampledElevation)}var E=r.mat4.copy(A,l.objectTransformation),b=i.vec3.set(I,E[12],E[13],E[14]);d.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(T[0]=f.x,T[1]=f.y,T[2]=u,v.computeLinearTransformation(f.spatialReference,T,E,o.spatialReference)&&(l.objectTransformation=E)):o.setAltitudeOfTransformation(u,E);var g=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(E[12]-b[0])>=g||Math.abs(E[13]-b[1])>=g||Math.abs(E[14]-b[2])>=g)&&(l.objectTransformation=E),p};var A=n.mat4f64.create();t.perLodInstanceElevationAligner=function(e,r,n,o){var l=e.graphics3DSymbolLayer.lodRenderer;if(a.isNone(l))return 0;var c,f=r.centerPointInElevationSR,u=0,p="absolute-height"!==r.mode;c=s.evaluateElevationAlignmentAtPoint(f,n,r,o,p?V:null),p&&(u=V.sampledElevation);var m=l.instanceData,A=e.instanceIndex,E=h;m.getGlobalTransform(A,E);var b=i.vec3.set(I,E[12],E[13],E[14]);d.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(T[0]=f.x,T[1]=f.y,T[2]=c,v.computeLinearTransformation(f.spatialReference,T,E,o.spatialReference)&&m.setGlobalTransform(A,E)):o.setAltitudeOfTransformation(c,E);var g=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(E[12]-b[0])>=g||Math.abs(E[13]-b[1])>=g||Math.abs(E[14]-b[2])>=g)&&m.setGlobalTransform(A,E),u},t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0;var E=new l,T=o.vec3f64.create(),b=o.vec3f64.create(),g=o.vec3f64.create(),h=n.mat4f64.create(),I=o.vec3f64.create(),V={verticalDistanceToGround:0,sampledElevation:0}}));