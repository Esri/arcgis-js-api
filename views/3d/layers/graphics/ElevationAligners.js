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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils","./ElevationInfo"],function(e,t,a,n,r,i,o,s,l){function c(e,a,n){var r=e.stageObject,i=e.elevationInfo,s=a.spatialReference;g.spatialReference=s;for(var c=r.getGeometryRecords(),v=c.length,d=i.mode!==l.MODES.ABSOLUTE_HEIGHT,p=0,T=0;v>T;T++){var O=c[T].geometry,h=c[T].getShaderTransformation();f[0]=h[12],f[1]=h[13],f[2]=h[14],O.invalidateBoundingInfo();for(var I=O.getData().getVertexAttr(),A=I[u.POSITION],M=A.data,j=I.mapPos.data,x=A.size,D=M.length/x,G=0,S=0,U=!1,V=0,y=0;D>y;y++){g.x=j[S++],g.y=j[S++],g.z=j[S++],E[0]=M[G],E[1]=M[G+1],E[2]=M[G+2];var R=o.computeElevation(a,g,i,d?m:null);d&&(V+=m.terrainElevation),b[0]=M[G]+f[0],b[1]=M[G+1]+f[1],b[2]=M[G+2]+f[2],n.setAltitude(R,b,0),M[G]=b[0]-f[0],M[G+1]=b[1]-f[1],M[G+2]=b[2]-f[2];var P=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(E[0]-M[G])>=P||Math.abs(E[1]-M[G+1])>=P||Math.abs(E[2]-M[G+2])>=P)&&(U=!0),G+=x}p+=V/D,U&&r.geometryVertexAttrsUpdated(T)}e.alignedTerrainElevation=p/v}function v(e,a,n){var i=e.elevationInfo,c=i.centerPointInElevationSR,v=0,d=0;if(e.stageObject.metadata.usesVerticalDistanceToGround)v=o.computeElevation(a,c,i,m),s.updateVertexAttributeAuxpos1w(e.stageObject,m.verticalDistanceToGround),d=m.terrainElevation;else{var u=i.mode!==l.MODES.ABSOLUTE_HEIGHT;v=o.computeElevation(a,c,i,u?m:null),u&&(d=m.terrainElevation)}var p=e.stageObject.getObjectTransformation(),g=[p[12],p[13],p[14]];t.iterativeUpdatesEnabled?n.setAltitudeOfTransformation(v,p):(b[0]=c.x,b[1]=c.y,b[2]=v,r.computeLinearTransformation(c.spatialReference,b,p,n.spatialReference)&&e.stageObject.setObjectTransformation(p));var f=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(p[12]-g[0])>=f||Math.abs(p[13]-g[1])>=f||Math.abs(p[14]-g[2])>=f)&&e.stageObject.setObjectTransformation(p),e.alignedTerrainElevation=d}function d(e,t,a){var n=e.elevationInfo,r=n.centerPointInElevationSR,i={verticalDistanceToGround:0};o.computeElevation(t,r,n,i),s.updateVertexAttributeAuxpos1w(e.stageObject,i.verticalDistanceToGround)}var u=i.VertexAttrConstants,p=n.vec3d,g=new a,b=p.create(),f=p.create(),E=p.create(),m={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=c,t.perObjectElevationAligner=v,t.perObjectVerticalDistanceToGroundAligner=d,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});