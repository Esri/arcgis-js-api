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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../support/mathUtils","../lib/LongVectorMath","./Lightsources"],function(t,n,e,i,r,s){function a(t){return(t+1)*(t+1)}function o(t){return 2*t+1}function c(t){return i.clamp(Math.floor(Math.sqrt(t)-1),0,2)}function h(t,n,e){var i=t[0],r=t[1],s=t[2],o=e||[];return o.length=a(n),n>=0&&(o[0]=.28209479177),n>=1&&(o[1]=.4886025119*i,o[2]=.4886025119*s,o[3]=.4886025119*r),n>=2&&(o[4]=1.09254843059*i*r,o[5]=1.09254843059*r*s,o[6]=.31539156525*(3*s*s-1),o[7]=1.09254843059*i*s,o[8]=.54627421529*(i*i-r*r)),o}function f(t,n){var e=a(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=e;for(var r=0;r<e;r++)i.r[r]=i.g[r]=i.b[r]=0;return i}function g(t,n){for(var i=c(n.r.length),s=0,a=t;s<a.length;s++){var o=a[s];e.vec3.negate(p,o.direction),h(p,i,y),r.elementwiseProduct(y,L),r.scalarProduct(y,o.intensity[0],m),r.add(n.r,m),r.scalarProduct(y,o.intensity[1],m),r.add(n.g,m),r.scalarProduct(y,o.intensity[2],m),r.add(n.b,m)}return n}function u(t,n){h(p,0,y);for(var e=0,i=t;e<i.length;e++){var r=i[e];n.r[0]+=y[0]*L[0]*r.intensity[0]*4*Math.PI,n.g[0]+=y[0]*L[0]*r.intensity[1]*4*Math.PI,n.b[0]+=y[0]*L[0]*r.intensity[2]*4*Math.PI}return n}function l(t,n,i,a){f(n,a.sh),e.vec3.set(i.intensity,0,0,0);var o=!1,c=d,h=v,l=b;c.length=0,h.length=0,l.length=0;for(var y=0,m=t;y<m.length;y++){var p=m[y];p instanceof s.MainLight&&!o?(e.vec3.copy(i.direction,p.direction),i.intensity[0]=p.intensity[0],i.intensity[1]=p.intensity[1],i.intensity[2]=p.intensity[2],i.castShadows=p.castShadows,o=!0):p instanceof s.MainLight||p instanceof s.FillLight?c.push(p):p instanceof s.AmbientLight?h.push(p):p instanceof s.SphericalHarmonicsLight&&l.push(p)}g(c,a.sh),u(h,a.sh);for(var L=0,M=l;L<M.length;L++){var p=M[L];r.add(a.sh.r,p.sh.r),r.add(a.sh.g,p.sh.g),r.add(a.sh.b,p.sh.b)}}Object.defineProperty(n,"__esModule",{value:!0}),n.numberOfCoefficients=a,n.numberOfCoefficientsInBand=o,n.orderFromNumberOfCoefficients=c,n.computeCoefficients=h,n.initSHCoefficients=f,n.projectFillLights=g,n.projectAmbientLights=u,n.combineLights=l;var d=[],v=[],b=[],y=[0],m=[0],p=e.vec3f64.create(),L=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]});