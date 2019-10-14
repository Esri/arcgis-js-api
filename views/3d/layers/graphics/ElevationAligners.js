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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","./Graphics3DSymbolCommonCode","./graphicUtils","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],function(e,t,a,r,n,o,i,s,l,c,u,v){function d(e,a,r,n){var o=e.stageObject,i=r.spatialReference;b.spatialReference=i;for(var l=o.geometryRecords,u=l.length,v="absolute-height"!==a.mode,d=0,m=0;m<u;m++){var f=l[m].geometry,g=l[m].getShaderTransformation();T[0]=g[12],T[1]=g[13],T[2]=g[14],f.invalidateBoundingInfo();for(var I=f.data.getVertexAttr(),M=I[p.POSITION],S=M.data,x=I.mapPos.data,R=M.size,D=S.length/R,_=0,y=0,L=!1,O=0,V=0;V<D;V++){b.x=x[y++],b.y=x[y++],b.z=x[y++],h[0]=S[_],h[1]=S[_+1],h[2]=S[_+2];var G=s.computeElevation(r,b,a,n,v?A:null);if(v&&(O+=A.terrainElevation),E[0]=S[_]+T[0],E[1]=S[_+1]+T[1],E[2]=S[_+2]+T[2],n.setAltitude(G,E),S[_]=E[0]-T[0],S[_+1]=E[1]-T[1],S[_+2]=E[2]-T[2],c.TESTS_DISABLE_UPDATE_THRESHOLDS)L=!0;else{var P=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(h[0]-S[_])>=P||Math.abs(h[1]-S[_+1])>=P||Math.abs(h[2]-S[_+2])>=P)&&(L=!0)}_+=R}d+=O/D,L&&o.geometryVertexAttrsUpdated(m)}return d/u}function m(e,r,o,i,v){var d=e.stageObject,m=r.centerPointInElevationSR,f=0,p=0;if(d.metadata.usesVerticalDistanceToGround)f=s.computeElevation(o,m,r,i,A),l.updateVertexAttributeAuxpos1w(d,A.verticalDistanceToGround),p=A.terrainElevation;else{var b="absolute-height"!==r.mode;f=s.computeElevation(o,m,r,i,b?A:null),b&&(p=A.terrainElevation)}var T=a.mat4.copy(M,d.objectTransformation),h=n.vec3.set(I,T[12],T[13],T[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(E[0]=m.x,E[1]=m.y,E[2]=f,u.computeLinearTransformation(m.spatialReference,E,T,i.spatialReference)&&(d.objectTransformation=T)):i.setAltitudeOfTransformation(f,T);var g=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(T[12]-h[0])>=g||Math.abs(T[13]-h[1])>=g||Math.abs(T[14]-h[2])>=g)&&(d.objectTransformation=T),p}function f(e,a,r,o,i){var l=a.centerPointInElevationSR,v=0,d=0,m="absolute-height"!==a.mode;v=s.computeElevation(r,l,a,o,m?A:null),m&&(d=A.terrainElevation);var f=e.graphics3DSymbolLayer.lodRenderer.instanceData,p=e.instanceIndex,b=g;f.getGlobalTransform(p,b);var T=n.vec3.set(I,b[12],b[13],b[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(E[0]=l.x,E[1]=l.y,E[2]=v,u.computeLinearTransformation(l.spatialReference,E,b,o.spatialReference)&&f.setGlobalTransform(p,b)):o.setAltitudeOfTransformation(v,b);var h=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(b[12]-T[0])>=h||Math.abs(b[13]-T[1])>=h||Math.abs(b[14]-T[2])>=h)&&f.setGlobalTransform(p,b),d}Object.defineProperty(t,"__esModule",{value:!0});var p=v.VertexAttrConstants,b=new i,E=o.vec3f64.create(),T=o.vec3f64.create(),h=o.vec3f64.create(),g=r.mat4f64.create(),I=o.vec3f64.create(),A={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=d,t.perObjectElevationAligner=m;var M=r.mat4f64.create();t.perLodInstanceElevationAligner=f,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});