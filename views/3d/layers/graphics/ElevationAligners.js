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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/Point","./Graphics3DSymbolCommonCode","./graphicUtils","../../lib/gl-matrix","../../support/debugFlags","../../support/projectionUtils","../../webgl-engine/lib/Util"],function(e,t,a,r,n,i,o,s,l){function c(e,a,n,i){var s=e.stageObject,l=n.spatialReference;E.spatialReference=l;for(var c=s.getGeometryRecords(),d=c.length,u="absolute-height"!==a.mode,f=0,g=0;g<d;g++){var b=c[g].geometry,h=c[g].getShaderTransformation();T[0]=h[12],T[1]=h[13],T[2]=h[14],b.invalidateBoundingInfo();for(var A=b.data.getVertexAttr(),S=A[v.POSITION],R=S.data,x=A.mapPos.data,O=S.size,_=R.length/O,D=0,L=0,M=!1,y=0,V=0;V<_;V++){E.x=x[L++],E.y=x[L++],E.z=x[L++],m[0]=R[D],m[1]=R[D+1],m[2]=R[D+2];var P=r.computeElevation(n,E,a,i,u?I:null);if(u&&(y+=I.terrainElevation),p[0]=R[D]+T[0],p[1]=R[D+1]+T[1],p[2]=R[D+2]+T[2],i.setAltitude(P,p),R[D]=p[0]-T[0],R[D+1]=p[1]-T[1],R[D+2]=p[2]-T[2],o.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS)M=!0;else{var j=t.updateThresholdInMeters/i.unitInMeters;(Math.abs(m[0]-R[D])>=j||Math.abs(m[1]-R[D+1])>=j||Math.abs(m[2]-R[D+2])>=j)&&(M=!0)}D+=O}f+=y/_,M&&s.geometryVertexAttrsUpdated(g)}return f/d}function d(e,a,i,l,c){var d=e.stageObject,u=a.centerPointInElevationSR,v=0,E=0;if(d.metadata.usesVerticalDistanceToGround)v=r.computeElevation(i,u,a,l,I),n.updateVertexAttributeAuxpos1w(d,I.verticalDistanceToGround),E=I.terrainElevation;else{var T="absolute-height"!==a.mode;v=r.computeElevation(i,u,a,l,T?I:null),T&&(E=I.terrainElevation)}var m=d.getObjectTransformation(),f=[m[12],m[13],m[14]];o.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=u.x,p[1]=u.y,p[2]=v,s.computeLinearTransformation(u.spatialReference,p,m,l.spatialReference)&&d.setObjectTransformation(m)):l.setAltitudeOfTransformation(v,m);var g=t.updateThresholdInMeters/l.unitInMeters;return(Math.abs(m[12]-f[0])>=g||Math.abs(m[13]-f[1])>=g||Math.abs(m[14]-f[2])>=g)&&d.setObjectTransformation(m),E}function u(e,t,a,n,i){var l=t.centerPointInElevationSR,c=0,d=0,u="absolute-height"!==t.mode;c=r.computeElevation(a,l,t,n,u?I:null),u&&(d=I.terrainElevation);var v=e.graphics3DSymbolLayer.lodRenderer.instanceData;return v.getTranslation(e.instanceIndex,f),o.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES?(p[0]=l.x,p[1]=l.y,p[2]=c,s.computeLinearTransformation(l.spatialReference,p,g,n.spatialReference)&&v.setTransform(e.instanceIndex,g)):n.setAltitude(c,f),v.setTranslation(e.instanceIndex,f),d}Object.defineProperty(t,"__esModule",{value:!0});var v=l.VertexAttrConstants,E=new a,p=i.vec3d.create(),T=i.vec3d.create(),m=i.vec3d.create(),f=i.vec3d.create(),g=i.mat4d.create(),I={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=c,t.perObjectElevationAligner=d,t.perLodInstanceElevationAligner=u,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});