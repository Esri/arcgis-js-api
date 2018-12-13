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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/Point","./Graphics3DSymbolCommonCode","./graphicUtils","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],function(e,t,a,r,n,o,i,s,l){function c(e,a,r,o){var s=e.stageObject,l=r.spatialReference;f.spatialReference=l;for(var c=s.getGeometryRecords(),u=c.length,v="absolute-height"!==a.mode,m=0,b=0;b<u;b++){var g=c[b].geometry,I=c[b].getShaderTransformation();E[0]=I[12],E[1]=I[13],E[2]=I[14],g.invalidateBoundingInfo();for(var A=g.data.getVertexAttr(),M=A[d.POSITION],S=M.data,R=A.mapPos.data,O=M.size,_=S.length/O,x=0,D=0,L=!1,y=0,G=0;G<_;G++){f.x=R[D++],f.y=R[D++],f.z=R[D++],T[0]=S[x],T[1]=S[x+1],T[2]=S[x+2];var V=n.computeElevation(r,f,a,o,v?h:null);if(v&&(y+=h.terrainElevation),p[0]=S[x]+E[0],p[1]=S[x+1]+E[1],p[2]=S[x+2]+E[2],o.setAltitude(V,p),S[x]=p[0]-E[0],S[x+1]=p[1]-E[1],S[x+2]=p[2]-E[2],i.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS)L=!0;else{var P=t.updateThresholdInMeters/o.unitInMeters;(Math.abs(T[0]-S[x])>=P||Math.abs(T[1]-S[x+1])>=P||Math.abs(T[2]-S[x+2])>=P)&&(L=!0)}x+=O}m+=y/_,L&&s.geometryVertexAttrsUpdated(b)}return m/u}function u(e,r,l,c,u){var v=e.stageObject,d=r.centerPointInElevationSR,f=0,E=0;if(v.metadata.usesVerticalDistanceToGround)f=n.computeElevation(l,d,r,c,h),o.updateVertexAttributeAuxpos1w(v,h.verticalDistanceToGround),E=h.terrainElevation;else{var T="absolute-height"!==r.mode;f=n.computeElevation(l,d,r,c,T?h:null),T&&(E=h.terrainElevation)}var m=v.getObjectTransformation(),g=a.vec3.set(b,m[12],m[13],m[14]);i.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=d.x,p[1]=d.y,p[2]=f,s.computeLinearTransformation(d.spatialReference,p,m,c.spatialReference)&&v.setObjectTransformation(m)):c.setAltitudeOfTransformation(f,m);var I=t.updateThresholdInMeters/c.unitInMeters;return(Math.abs(m[12]-g[0])>=I||Math.abs(m[13]-g[1])>=I||Math.abs(m[14]-g[2])>=I)&&v.setObjectTransformation(m),E}function v(e,r,o,l,c){var u=r.centerPointInElevationSR,v=0,d=0,f="absolute-height"!==r.mode;v=n.computeElevation(o,u,r,l,f?h:null),f&&(d=h.terrainElevation);var E=e.graphics3DSymbolLayer.lodRenderer.instanceData,T=e.instanceIndex,g=m;E.getGlobalTransform(T,g);var I=a.vec3.set(b,g[12],g[13],g[14]);i.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=u.x,p[1]=u.y,p[2]=v,s.computeLinearTransformation(u.spatialReference,p,g,l.spatialReference)&&E.setGlobalTransform(T,g)):l.setAltitudeOfTransformation(v,g);var A=t.updateThresholdInMeters/l.unitInMeters;return(Math.abs(g[12]-I[0])>=A||Math.abs(g[13]-I[1])>=A||Math.abs(g[14]-I[2])>=A)&&E.setGlobalTransform(T,g),d}Object.defineProperty(t,"__esModule",{value:!0});var d=l.VertexAttrConstants,f=new r,p=a.vec3f64.create(),E=a.vec3f64.create(),T=a.vec3f64.create(),m=a.mat4f64.create(),b=a.vec3f64.create(),h={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=c,t.perObjectElevationAligner=u,t.perLodInstanceElevationAligner=v,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});