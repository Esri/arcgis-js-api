// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils"],function(e,t,a,r,n,i,o,l){function s(e,a,r,n){var i=r.spatialReference;p.spatialReference=i;for(var l=e.getGeometryRecords(),s=l.length,u="absolute-height"!==a.mode,c=0,v=0;s>v;v++){var m=l[v].geometry,E=l[v].getShaderTransformation();g[0]=E[12],g[1]=E[13],g[2]=E[14],m.invalidateBoundingInfo();for(var T=m.getData().getVertexAttr(),M=T[d.POSITION],x=M.data,A=T.mapPos.data,I=M.size,y=x.length/I,O=0,j=0,R=!1,U=0,V=0;y>V;V++){p.x=A[j++],p.y=A[j++],p.z=A[j++],b[0]=x[O],b[1]=x[O+1],b[2]=x[O+2];var D=o.computeElevation(r,p,a,u?h:null);u&&(U+=h.terrainElevation),f[0]=x[O]+g[0],f[1]=x[O+1]+g[1],f[2]=x[O+2]+g[2],n.setAltitude(D,f,0),x[O]=f[0]-g[0],x[O+1]=f[1]-g[1],x[O+2]=f[2]-g[2];var G=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(b[0]-x[O])>=G||Math.abs(b[1]-x[O+1])>=G||Math.abs(b[2]-x[O+2])>=G)&&(R=!0),O+=I}c+=U/y,R&&e.geometryVertexAttrsUpdated(v)}return c/s}function u(e,a,r,i){var s=a.centerPointInElevationSR,u=0,c=0;if(e.metadata.usesVerticalDistanceToGround)u=o.computeElevation(r,s,a,h),l.updateVertexAttributeAuxpos1w(e,h.verticalDistanceToGround),c=h.terrainElevation;else{var d="absolute-height"!==a.mode;u=o.computeElevation(r,s,a,d?h:null),d&&(c=h.terrainElevation)}var v=e.getObjectTransformation(),p=[v[12],v[13],v[14]];t.iterativeUpdatesEnabled?i.setAltitudeOfTransformation(u,v):(f[0]=s.x,f[1]=s.y,f[2]=u,n.computeLinearTransformation(s.spatialReference,f,v,i.spatialReference)&&e.setObjectTransformation(v));var g=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(v[12]-p[0])>=g||Math.abs(v[13]-p[1])>=g||Math.abs(v[14]-p[2])>=g)&&e.setObjectTransformation(v),c}function c(e,t,a,r){var n=e(t.stageObject,t.elevationInfo,a,r);null!=n&&(t.alignedTerrainElevation=n)}Object.defineProperty(t,"__esModule",{value:!0});var d=i.VertexAttrConstants,v=r.vec3d,p=new a,f=v.create(),g=v.create(),b=v.create(),h={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=s,t.perObjectElevationAligner=u,t.applyElevationAligner=c,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});