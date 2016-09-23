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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils"],function(e,t,a,r,n,o){function i(e,t,a){var r=e.stageObject,o=e.elevationInfo,i=t.spatialReference;d.spatialReference=i;for(var s=r.getGeometryRecords(),l=s.length,g=0;l>g;g++){var f=s[g].geometry,m=s[g].transformation;p[0]=m[12],p[1]=m[13],p[2]=m[14],f.invalidateBoundingInfo();for(var h=f.getData().getVertexAttr(),O=h[c.POSITION].data,M=h.mapPos.data,T=O.length/2,j=0,I=0,x=!1,A=0;T>A;A++){d.x=M[I++],d.y=M[I++],d.z=M[I++],u[0]=O[j],u[1]=O[j+1],u[2]=O[j+2];var E=n.computeElevation(t,d,o);v[0]=O[j]+p[0],v[1]=O[j+1]+p[1],v[2]=O[j+2]+p[2],a.setAltitude(E,v,0),O[j]=v[0]-p[0],O[j+1]=v[1]-p[1],O[j+2]=v[2]-p[2];var y=b.updateThresholdInMeters/a.unitInMeters;(Math.abs(u[0]-O[j])>=y||Math.abs(u[1]-O[j+1])>=y||Math.abs(u[2]-O[j+2])>=y)&&(x=!0),j+=3}x&&r.geometryVertexAttrsUpdated(g)}}function s(e,t,r){var i=e.elevationInfo,s=i.centerPointInElevationSR,c=0;if(e.stageObject.metadata.usesVerticalDistanceToGround){var l={verticalDistanceToGround:0};c=n.computeElevation(t,s,i,l),o.updateVertexAttributeAuxpos1w(e.stageObject,l.verticalDistanceToGround)}else c=n.computeElevation(t,s,i);var d=e.stageObject.getObjectTransformation(),p=[d[12],d[13],d[14]];b.iterativeUpdatesEnabled?r.setAltitudeOfTransformation(c,d):(v[0]=s.x,v[1]=s.y,v[2]=c,a.computeLinearTransformation(s.spatialReference,v,d,r.spatialReference)&&e.stageObject.setObjectTransformation(d));var u=b.updateThresholdInMeters/r.unitInMeters;(Math.abs(d[12]-p[0])>=u||Math.abs(d[13]-p[1])>=u||Math.abs(d[14]-p[2])>=u)&&e.stageObject.setObjectTransformation(d)}var c=r.VertexAttrConstants,l=t.vec3d,d=new e,v=l.create(),p=l.create(),u=l.create(),b={perVertexElevationAligner:i,perObjectElevationAligner:s,updateThresholdInMeters:.01,iterativeUpdatesEnabled:!0};return b});