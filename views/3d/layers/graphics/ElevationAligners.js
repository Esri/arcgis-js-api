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

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","./Graphics3DSymbolCommonCode","./graphicUtils","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],function(e,t,a,r,n,o,i,s,l,c,u,v){function d(e,a,r,n){var o=e.stageObject,i=r.spatialReference;b.spatialReference=i;for(var l=o.geometryRecords,u=l.length,v="absolute-height"!==a.mode,d=0,m=0;m<u;m++){var f=l[m].geometry,g=l[m].getShaderTransformation();T[0]=g[12],T[1]=g[13],T[2]=g[14],f.invalidateBoundingInfo();for(var I=f.data.getVertexAttr(),M=I[p.POSITION],S=M.data,x=I.mapPos.data,R=M.size,D=S.length/R,_=0,y=0,L=!1,O=0,V=0;V<D;V++){b.x=x[y++],b.y=x[y++],b.z=x[y++],h[0]=S[_],h[1]=S[_+1],h[2]=S[_+2];var G=s.computeElevation(r,b,a,n,v?A:null);if(v&&(O+=A.terrainElevation),E[0]=S[_]+T[0],E[1]=S[_+1]+T[1],E[2]=S[_+2]+T[2],n.setAltitude(G,E),S[_]=E[0]-T[0],S[_+1]=E[1]-T[1],S[_+2]=E[2]-T[2],c.TESTS_DISABLE_UPDATE_THRESHOLDS)L=!0;else{var P=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(h[0]-S[_])>=P||Math.abs(h[1]-S[_+1])>=P||Math.abs(h[2]-S[_+2])>=P)&&(L=!0)}_+=R}d+=O/D,L&&o.geometryVertexAttrsUpdated(m)}return d/u}function m(e,r,o,i){var v=e.stageObject,d=r.centerPointInElevationSR,m=0,f=0;if(v.metadata.usesVerticalDistanceToGround)m=s.computeElevation(o,d,r,i,A),l.updateVertexAttributeAuxpos1w(v,A.verticalDistanceToGround),f=A.terrainElevation;else{var p="absolute-height"!==r.mode;m=s.computeElevation(o,d,r,i,p?A:null),p&&(f=A.terrainElevation)}var b=a.mat4.copy(M,v.objectTransformation),T=n.vec3.set(I,b[12],b[13],b[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(E[0]=d.x,E[1]=d.y,E[2]=m,u.computeLinearTransformation(d.spatialReference,E,b,i.spatialReference)&&(v.objectTransformation=b)):i.setAltitudeOfTransformation(m,b);var h=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(b[12]-T[0])>=h||Math.abs(b[13]-T[1])>=h||Math.abs(b[14]-T[2])>=h)&&(v.objectTransformation=b),f}function f(e,a,r,o){var i=a.centerPointInElevationSR,l=0,v=0,d="absolute-height"!==a.mode;l=s.computeElevation(r,i,a,o,d?A:null),d&&(v=A.terrainElevation);var m=e.graphics3DSymbolLayer.lodRenderer.instanceData,f=e.instanceIndex,p=g;m.getGlobalTransform(f,p);var b=n.vec3.set(I,p[12],p[13],p[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(E[0]=i.x,E[1]=i.y,E[2]=l,u.computeLinearTransformation(i.spatialReference,E,p,o.spatialReference)&&m.setGlobalTransform(f,p)):o.setAltitudeOfTransformation(l,p);var T=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(p[12]-b[0])>=T||Math.abs(p[13]-b[1])>=T||Math.abs(p[14]-b[2])>=T)&&m.setGlobalTransform(f,p),v}Object.defineProperty(t,"__esModule",{value:!0});var p=v.VertexAttrConstants,b=new i,E=o.vec3f64.create(),T=o.vec3f64.create(),h=o.vec3f64.create(),g=r.mat4f64.create(),I=o.vec3f64.create(),A={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=d,t.perObjectElevationAligner=m;var M=r.mat4f64.create();t.perLodInstanceElevationAligner=f,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});