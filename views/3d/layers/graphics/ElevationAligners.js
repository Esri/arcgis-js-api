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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/Point","./elevationAlignmentUtils","./graphicUtils","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],(function(e,t,a,r,n,i,o,l,s,c,v,d){Object.defineProperty(t,"__esModule",{value:!0});var u=d.VertexAttrConstants;t.perVertexElevationAligner=function(e,a,r,n){var i=e.stageObject,o=r.spatialReference;f.spatialReference=o;for(var s=i.geometryRecords,v=s.length,d="absolute-height"!==a.mode,m=0,b=0;b<v;b++){var A=s[b].geometry,h=s[b].getShaderTransformation();g[0]=h[12],g[1]=h[13],g[2]=h[14],A.invalidateBoundingInfo();for(var I=A.data.getVertexAttr(),M=I[u.POSITION],S=M.data,x=I.mapPos.data,R=M.size,P=S.length/R,_=0,D=0,L=!1,y=0,O=0;O<P;O++){f.x=x[D++],f.y=x[D++],f.z=x[D++],E[0]=S[_],E[1]=S[_+1],E[2]=S[_+2];var V=l.evaluateElevationAlignmentAtPoint(f,r,a,n,d?T:null);if(d&&(y+=T.sampledElevation),p[0]=S[_]+g[0],p[1]=S[_+1]+g[1],p[2]=S[_+2]+g[2],n.setAltitude(V,p),S[_]=p[0]-g[0],S[_+1]=p[1]-g[1],S[_+2]=p[2]-g[2],c.TESTS_DISABLE_UPDATE_THRESHOLDS)L=!0;else{var U=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(E[0]-S[_])>=U||Math.abs(E[1]-S[_+1])>=U||Math.abs(E[2]-S[_+2])>=U)&&(L=!0)}_+=R}m+=y/P,L&&i.geometryVertexAttrsUpdated(b)}return m/v},t.perObjectElevationAligner=function(e,r,i,o){var d=e.stageObject,u=r.centerPointInElevationSR,f=0,g=0;if(d.metadata.usesVerticalDistanceToGround)f=l.evaluateElevationAlignmentAtPoint(u,i,r,o,T),s.updateVertexAttributeAuxpos1w(d,T.verticalDistanceToGround),g=T.sampledElevation;else{var E="absolute-height"!==r.mode;f=l.evaluateElevationAlignmentAtPoint(u,i,r,o,E?T:null),E&&(g=T.sampledElevation)}var b=a.mat4.copy(m,d.objectTransformation),h=n.vec3.set(A,b[12],b[13],b[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=u.x,p[1]=u.y,p[2]=f,v.computeLinearTransformation(u.spatialReference,p,b,o.spatialReference)&&(d.objectTransformation=b)):o.setAltitudeOfTransformation(f,b);var I=t.updateThresholdInMeters/o.unitInMeters;return(Math.abs(b[12]-h[0])>=I||Math.abs(b[13]-h[1])>=I||Math.abs(b[14]-h[2])>=I)&&(d.objectTransformation=b),g};var m=r.mat4f64.create();t.perLodInstanceElevationAligner=function(e,a,r,i){var o,s=a.centerPointInElevationSR,d=0,u="absolute-height"!==a.mode;o=l.evaluateElevationAlignmentAtPoint(s,r,a,i,u?T:null),u&&(d=T.sampledElevation);var m=e.graphics3DSymbolLayer.lodRenderer.instanceData,f=e.instanceIndex,g=b;m.getGlobalTransform(f,g);var E=n.vec3.set(A,g[12],g[13],g[14]);c.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=s.x,p[1]=s.y,p[2]=o,v.computeLinearTransformation(s.spatialReference,p,g,i.spatialReference)&&m.setGlobalTransform(f,g)):i.setAltitudeOfTransformation(o,g);var h=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(g[12]-E[0])>=h||Math.abs(g[13]-E[1])>=h||Math.abs(g[14]-E[2])>=h)&&m.setGlobalTransform(f,g),d},t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0;var f=new o,p=i.vec3f64.create(),g=i.vec3f64.create(),E=i.vec3f64.create(),b=r.mat4f64.create(),A=i.vec3f64.create(),T={verticalDistanceToGround:0,sampledElevation:0}}));