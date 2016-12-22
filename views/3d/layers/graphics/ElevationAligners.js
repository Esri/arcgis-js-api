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

define(["require","exports","../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils"],function(e,t,a,r,n,o,i,s){function c(e,t,a){var r=e.stageObject,n=e.elevationInfo,o=t.spatialReference;p.spatialReference=o;for(var s=r.getGeometryRecords(),c=s.length,l=0;c>l;l++){var u=s[l].geometry,v=s[l].getShaderTransformation();g[0]=v[12],g[1]=v[13],g[2]=v[14],u.invalidateBoundingInfo();for(var h=u.getData().getVertexAttr(),T=h[d.POSITION].data,O=h.mapPos.data,j=T.length/2,I=0,x=0,A=!1,M=0;j>M;M++){p.x=O[x++],p.y=O[x++],p.z=O[x++],f[0]=T[I],f[1]=T[I+1],f[2]=T[I+2];var E=i.computeElevation(t,p,n);b[0]=T[I]+g[0],b[1]=T[I+1]+g[1],b[2]=T[I+2]+g[2],a.setAltitude(E,b,0),T[I]=b[0]-g[0],T[I+1]=b[1]-g[1],T[I+2]=b[2]-g[2];var D=m.updateThresholdInMeters/a.unitInMeters;(Math.abs(f[0]-T[I])>=D||Math.abs(f[1]-T[I+1])>=D||Math.abs(f[2]-T[I+2])>=D)&&(A=!0),I+=3}A&&r.geometryVertexAttrsUpdated(l)}}function l(e,t,a){var r=e.elevationInfo,o=r.centerPointInElevationSR,c=0;if(e.stageObject.metadata.usesVerticalDistanceToGround){var l={verticalDistanceToGround:0};c=i.computeElevation(t,o,r,l),s.updateVertexAttributeAuxpos1w(e.stageObject,l.verticalDistanceToGround)}else c=i.computeElevation(t,o,r);var u=e.stageObject.getObjectTransformation(),d=[u[12],u[13],u[14]];m.iterativeUpdatesEnabled?a.setAltitudeOfTransformation(c,u):(b[0]=o.x,b[1]=o.y,b[2]=c,n.computeLinearTransformation(o.spatialReference,b,u,a.spatialReference)&&e.stageObject.setObjectTransformation(u));var v=m.updateThresholdInMeters/a.unitInMeters;(Math.abs(u[12]-d[0])>=v||Math.abs(u[13]-d[1])>=v||Math.abs(u[14]-d[2])>=v)&&e.stageObject.setObjectTransformation(u)}function u(e,t,a){var r=e.elevationInfo,n=r.centerPointInElevationSR,o={verticalDistanceToGround:0};i.computeElevation(t,n,r,o),s.updateVertexAttributeAuxpos1w(e.stageObject,o.verticalDistanceToGround)}var d=o.VertexAttrConstants,v=r.vec3d,p=new a,b=v.create(),g=v.create(),f=v.create(),m={perVertexElevationAligner:c,perObjectElevationAligner:l,perObjectVerticalDistanceToGroundAligner:u,updateThresholdInMeters:.01,iterativeUpdatesEnabled:!0};return m});