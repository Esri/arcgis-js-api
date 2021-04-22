/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../Point","../../../../../geometry","../../../../../core/mathUtils","../../../../../chunks/vec3f64","../../../../../chunks/vec3"],(function(t,e,r,s,i,o){"use strict";function n(t){if(t.components){for(const e of t.components)"smooth"===e.shading&&e.faces&&a(t,e);t.vertexAttributesChanged()}}function a(t,e){t.vertexAttributes.normal||(t.vertexAttributes.normal=new Float32Array(t.vertexAttributes.position.length));const r=e.faces.length/3;for(let i=0;i<r;++i){const r=e.faces[3*i+0],n=e.faces[3*i+1],a=e.faces[3*i+2],u=o.set(x,t.vertexAttributes.position[3*r+0],t.vertexAttributes.position[3*r+1],t.vertexAttributes.position[3*r+2]),l=o.set(b,t.vertexAttributes.position[3*n+0],t.vertexAttributes.position[3*n+1],t.vertexAttributes.position[3*n+2]),m=o.set(v,t.vertexAttributes.position[3*a+0],t.vertexAttributes.position[3*a+1],t.vertexAttributes.position[3*a+2]),A=o.subtract(l,l,u),c=o.subtract(m,m,u),f=o.cross(A,A,c);s.isNaN(t.vertexAttributes.normal[3*r+0])&&(t.vertexAttributes.normal[3*r+0]=0),s.isNaN(t.vertexAttributes.normal[3*r+1])&&(t.vertexAttributes.normal[3*r+1]=0),s.isNaN(t.vertexAttributes.normal[3*r+2])&&(t.vertexAttributes.normal[3*r+2]=0),s.isNaN(t.vertexAttributes.normal[3*n+0])&&(t.vertexAttributes.normal[3*n+0]=0),s.isNaN(t.vertexAttributes.normal[3*n+1])&&(t.vertexAttributes.normal[3*n+1]=0),s.isNaN(t.vertexAttributes.normal[3*n+2])&&(t.vertexAttributes.normal[3*n+2]=0),s.isNaN(t.vertexAttributes.normal[3*a+0])&&(t.vertexAttributes.normal[3*a+0]=0),s.isNaN(t.vertexAttributes.normal[3*a+1])&&(t.vertexAttributes.normal[3*a+1]=0),s.isNaN(t.vertexAttributes.normal[3*a+2])&&(t.vertexAttributes.normal[3*a+2]=0),t.vertexAttributes.normal[3*r+0]+=f[0],t.vertexAttributes.normal[3*r+1]+=f[1],t.vertexAttributes.normal[3*r+2]+=f[2],t.vertexAttributes.normal[3*n+0]+=f[0],t.vertexAttributes.normal[3*n+1]+=f[1],t.vertexAttributes.normal[3*n+2]+=f[2],t.vertexAttributes.normal[3*a+0]+=f[0],t.vertexAttributes.normal[3*a+1]+=f[1],t.vertexAttributes.normal[3*a+2]+=f[2]}for(let s=0;s<t.vertexAttributes.normal.length;s+=3)o.set(l,t.vertexAttributes.normal[s],t.vertexAttributes.normal[s+1],t.vertexAttributes.normal[s+2]),o.normalize(l,l),t.vertexAttributes.normal[s+0]=l[0],t.vertexAttributes.normal[s+1]=l[1],t.vertexAttributes.normal[s+2]=l[2]}function u(t){const r=t.extent.xmax-t.extent.width/2,s=t.extent.ymax-t.extent.height/2,i=t.extent.zmin;return new e({x:r,y:s,z:i,spatialReference:t.extent.spatialReference})}const x=i.create(),b=i.create(),v=i.create(),l=i.create();t.computeOrigin=u,t.smoothNormalsMesh=n,Object.defineProperty(t,"__esModule",{value:!0})}));
