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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../../geometry/Point","../../lib/glMatrix","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode"],function(e,t,a,n){var r=a.VertexAttrConstants,o=t.vec3d,i=new e,s=o.create(),l=o.create(),c=o.create(),g=function(e,t,a){var o=e.stageObject,g=e.elevationInfo,v=t.spatialReference;i.spatialReference=v;for(var b=o.getGeometryRecords(),f=b.length,m=0;f>m;m++){var d=b[m].geometry,u=b[m].transformation;l[0]=u[12],l[1]=u[13],l[2]=u[14],d.invalidateBoundingInfo();for(var h=d.getData().getVertexAttr(),p=h[r.POSITION].data,M=h.mapPos.data,O=p.length/2,I=0,A=0,j=!1,x=0;O>x;x++){i.x=M[A++],i.y=M[A++],i.z=M[A++],c[0]=p[I],c[1]=p[I+1],c[2]=p[I+2];var y=n.computeElevation(t,i,g);s[0]=p[I]+l[0],s[1]=p[I+1]+l[1],s[2]=p[I+2]+l[2],a.setAltitude(y,s,0),p[I]=s[0]-l[0],p[I+1]=s[1]-l[1],p[I+2]=s[2]-l[2];var E=.01/a.unitInMeters;(Math.abs(c[0]-p[I])>E||Math.abs(c[1]-p[I+1])>E||Math.abs(c[2]-p[I+2])>E)&&(j=!0),I+=3}j&&o.geometryVertexAttrsUpdated(m)}},v=function(e,t,a){var r=e.elevationInfo,o=r.centerPointInElevationSR,i=n.computeElevation(t,o,r),s=e.stageObject.getObjectTransformation(),l=[s[12],s[13],s[14]];a.setAltitudeOfTransformation(i,s);var c=.01/a.unitInMeters;(Math.abs(s[12]-l[0])>c||Math.abs(s[13]-l[1])>c||Math.abs(s[14]-l[2])>c)&&e.stageObject.setObjectTransformation(s)};return{perVertexElevationAligner:g,perObjectElevationAligner:v}});