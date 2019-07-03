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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./Lightsources"],function(t,n,e,i,r,s,a){function c(t){return(t+1)*(t+1)}function o(t){return 2*t+1}function h(t){return e.clamp(Math.floor(Math.sqrt(t)-1),0,2)}function f(t,n,e){var i=t[0],r=t[1],s=t[2],a=e||[];return a.length=c(n),n>=0&&(a[0]=.28209479177),n>=1&&(a[1]=.4886025119*i,a[2]=.4886025119*s,a[3]=.4886025119*r),n>=2&&(a[4]=1.09254843059*i*r,a[5]=1.09254843059*r*s,a[6]=.31539156525*(3*s*s-1),a[7]=1.09254843059*i*s,a[8]=.54627421529*(i*i-r*r)),a}function g(t,n){var e=c(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=e;for(var r=0;r<e;r++)i.r[r]=i.g[r]=i.b[r]=0;return i}function l(t,n){for(var e=h(n.r.length),r=0,a=t;r<a.length;r++){var c=a[r];i.vec3.negate(L,c.direction),f(L,e,m),s.elementwiseProduct(m,M),s.scalarProduct(m,c.intensity[0],p),s.add(n.r,p),s.scalarProduct(m,c.intensity[1],p),s.add(n.g,p),s.scalarProduct(m,c.intensity[2],p),s.add(n.b,p)}return n}function u(t,n){f(L,0,m);for(var e=0,i=t;e<i.length;e++){var r=i[e];n.r[0]+=m[0]*M[0]*r.intensity[0]*4*Math.PI,n.g[0]+=m[0]*M[0]*r.intensity[1]*4*Math.PI,n.b[0]+=m[0]*M[0]*r.intensity[2]*4*Math.PI}return n}function d(t,n,e,r){g(n,r.sh),i.vec3.set(e.intensity,0,0,0);var c=!1,o=v,h=b,f=y;o.length=0,h.length=0,f.length=0;for(var d=0,m=t;d<m.length;d++){var p=m[d];p instanceof a.MainLight&&!c?(i.vec3.copy(e.direction,p.direction),e.intensity[0]=p.intensity[0],e.intensity[1]=p.intensity[1],e.intensity[2]=p.intensity[2],e.castShadows=p.castShadows,c=!0):p instanceof a.MainLight||p instanceof a.FillLight?o.push(p):p instanceof a.AmbientLight?h.push(p):p instanceof a.SphericalHarmonicsLight&&f.push(p)}l(o,r.sh),u(h,r.sh);for(var L=0,M=f;L<M.length;L++){var p=M[L];s.add(r.sh.r,p.sh.r),s.add(r.sh.g,p.sh.g),s.add(r.sh.b,p.sh.b)}}Object.defineProperty(n,"__esModule",{value:!0}),n.numberOfCoefficients=c,n.numberOfCoefficientsInBand=o,n.orderFromNumberOfCoefficients=h,n.computeCoefficients=f,n.initSHCoefficients=g,n.projectFillLights=l,n.projectAmbientLights=u,n.combineLights=d;var v=[],b=[],y=[],m=[0],p=[0],L=r.vec3f64.create(),M=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]});