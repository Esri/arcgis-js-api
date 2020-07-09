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

define(["require","exports","../../../..","../../../../../core/mathUtils","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64"],(function(t,e,r,i,s,o){function n(t,e){t.vertexAttributes.normal||(t.vertexAttributes.normal=new Float32Array(t.vertexAttributes.position.length));for(var r=e.faces.length/3,o=0;o<r;++o){var n=e.faces[3*o+0],b=e.faces[3*o+1],l=e.faces[3*o+2],m=s.vec3.set(a,t.vertexAttributes.position[3*n+0],t.vertexAttributes.position[3*n+1],t.vertexAttributes.position[3*n+2]),A=s.vec3.set(v,t.vertexAttributes.position[3*b+0],t.vertexAttributes.position[3*b+1],t.vertexAttributes.position[3*b+2]),c=s.vec3.set(x,t.vertexAttributes.position[3*l+0],t.vertexAttributes.position[3*l+1],t.vertexAttributes.position[3*l+2]),f=s.vec3.subtract(A,A,m),N=s.vec3.subtract(c,c,m),p=s.vec3.cross(f,f,N);i.isNaN(t.vertexAttributes.normal[3*n+0])&&(t.vertexAttributes.normal[3*n+0]=0),i.isNaN(t.vertexAttributes.normal[3*n+1])&&(t.vertexAttributes.normal[3*n+1]=0),i.isNaN(t.vertexAttributes.normal[3*n+2])&&(t.vertexAttributes.normal[3*n+2]=0),i.isNaN(t.vertexAttributes.normal[3*b+0])&&(t.vertexAttributes.normal[3*b+0]=0),i.isNaN(t.vertexAttributes.normal[3*b+1])&&(t.vertexAttributes.normal[3*b+1]=0),i.isNaN(t.vertexAttributes.normal[3*b+2])&&(t.vertexAttributes.normal[3*b+2]=0),i.isNaN(t.vertexAttributes.normal[3*l+0])&&(t.vertexAttributes.normal[3*l+0]=0),i.isNaN(t.vertexAttributes.normal[3*l+1])&&(t.vertexAttributes.normal[3*l+1]=0),i.isNaN(t.vertexAttributes.normal[3*l+2])&&(t.vertexAttributes.normal[3*l+2]=0),t.vertexAttributes.normal[3*n+0]+=p[0],t.vertexAttributes.normal[3*n+1]+=p[1],t.vertexAttributes.normal[3*n+2]+=p[2],t.vertexAttributes.normal[3*b+0]+=p[0],t.vertexAttributes.normal[3*b+1]+=p[1],t.vertexAttributes.normal[3*b+2]+=p[2],t.vertexAttributes.normal[3*l+0]+=p[0],t.vertexAttributes.normal[3*l+1]+=p[1],t.vertexAttributes.normal[3*l+2]+=p[2]}for(o=0;o<t.vertexAttributes.normal.length;o+=3)s.vec3.set(u,t.vertexAttributes.normal[o],t.vertexAttributes.normal[o+1],t.vertexAttributes.normal[o+2]),s.vec3.normalize(u,u),t.vertexAttributes.normal[o+0]=u[0],t.vertexAttributes.normal[o+1]=u[1],t.vertexAttributes.normal[o+2]=u[2]}Object.defineProperty(e,"__esModule",{value:!0}),e.smoothNormalsMesh=function(t){if(t.components){for(var e=0,r=t.components;e<r.length;e++){var i=r[e];"smooth"===i.shading&&i.faces&&n(t,i)}t.vertexAttributesChanged()}},e.computeOrigin=function(t){var e=t.extent.xmax-t.extent.width/2,i=t.extent.ymax-t.extent.height/2,s=t.extent.zmin;return new r.Point({x:e,y:i,z:s,spatialReference:t.extent.spatialReference})};var a=o.vec3f64.create(),v=o.vec3f64.create(),x=o.vec3f64.create(),u=o.vec3f64.create()}));