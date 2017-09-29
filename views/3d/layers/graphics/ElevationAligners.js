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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/Point","../../lib/glMatrix","../../support/projectionUtils","../../webgl-engine/lib/Util","./Graphics3DSymbolCommonCode","./graphicUtils"],function(e,t,a,r,n,i,o,s){function l(e,a,r,n){var i=r.spatialReference;v.spatialReference=i;for(var s=e.getGeometryRecords(),l=s.length,d="absolute-height"!==a.mode,c=0,f=0;l>f;f++){var g=s[f].geometry,M=s[f].getShaderTransformation();h[0]=M[12],h[1]=M[13],h[2]=M[14],g.invalidateBoundingInfo();for(var T=g.getData().getVertexAttr(),E=T[u.POSITION],x=E.data,A=T.mapPos.data,I=E.size,y=x.length/I,O=0,j=0,R=!1,U=0,V=0;y>V;V++){v.x=A[j++],v.y=A[j++],v.z=A[j++],m[0]=x[O],m[1]=x[O+1],m[2]=x[O+2];var D=o.computeElevation(r,v,a,n,d?b:null);d&&(U+=b.terrainElevation),p[0]=x[O]+h[0],p[1]=x[O+1]+h[1],p[2]=x[O+2]+h[2],n.setAltitude(D,p,0),x[O]=p[0]-h[0],x[O+1]=p[1]-h[1],x[O+2]=p[2]-h[2];var G=t.updateThresholdInMeters/n.unitInMeters;(Math.abs(m[0]-x[O])>=G||Math.abs(m[1]-x[O+1])>=G||Math.abs(m[2]-x[O+2])>=G)&&(R=!0),O+=I}c+=U/y,R&&e.geometryVertexAttrsUpdated(f)}return c/l}function d(e,a,r,i,l){var d=a.centerPointInElevationSR,u=0,c=0;if(e.metadata.usesVerticalDistanceToGround)u=o.computeElevation(r,d,a,i,b),s.updateVertexAttributeAuxpos1w(e,b.verticalDistanceToGround),c=b.terrainElevation;else{var v="absolute-height"!==a.mode;u=o.computeElevation(r,d,a,i,v?b:null),v&&(c=b.terrainElevation)}var h=e.getObjectTransformation(),m=[h[12],h[13],h[14]];t.iterativeUpdatesEnabled?i.setAltitudeOfTransformation(u,h):(p[0]=d.x,p[1]=d.y,p[2]=u,n.computeLinearTransformation(d.spatialReference,p,h,i.spatialReference)&&e.setObjectTransformation(h));var f=t.updateThresholdInMeters/i.unitInMeters;return(Math.abs(h[12]-m[0])>=f||Math.abs(h[13]-m[1])>=f||Math.abs(h[14]-m[2])>=f)&&e.setObjectTransformation(h),c}Object.defineProperty(t,"__esModule",{value:!0});var u=i.VertexAttrConstants,c=r.vec3d,v=new a,p=c.create(),h=c.create(),m=c.create(),b={verticalDistanceToGround:0,terrainElevation:0};t.perVertexElevationAligner=l,t.perObjectElevationAligner=d,t.updateThresholdInMeters=.01,t.iterativeUpdatesEnabled=!0});