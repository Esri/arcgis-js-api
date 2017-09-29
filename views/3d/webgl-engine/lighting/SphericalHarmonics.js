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

define(["require","exports","./Lightsources","../lib/LongVectorMath","../../lib/glMatrix","../../support/mathUtils"],function(t,n,e,i,r,s){function a(t){return(t+1)*(t+1)}function o(t){return 2*t+1}function c(t){return s.clamp(Math.floor(Math.sqrt(t)-1),0,2)}function h(t,n,e){var i=t[0],r=t[1],s=t[2],o=e||[];return o.length=a(n),n>=0&&(o[0]=.28209479177),n>=1&&(o[1]=.4886025119*i,o[2]=.4886025119*s,o[3]=.4886025119*r),n>=2&&(o[4]=1.09254843059*i*r,o[5]=1.09254843059*r*s,o[6]=.31539156525*(3*s*s-1),o[7]=1.09254843059*i*s,o[8]=.54627421529*(i*i-r*r)),o}function f(t,n){var e=a(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=e;for(var r=0;e>r;r++)i.r[r]=i.g[r]=i.b[r]=0;return i}function u(t,n){for(var e=c(n.r.length),r=0,s=t;r<s.length;r++){var a=s[r];d.negate(a.direction,L),h(L,e,m),i.elementwiseProduct(m,M),i.scalarProduct(m,a.intensity[0],p),i.add(n.r,p),i.scalarProduct(m,a.intensity[1],p),i.add(n.g,p),i.scalarProduct(m,a.intensity[2],p),i.add(n.b,p)}return n}function g(t,n){h(L,0,m);for(var e=0,i=t;e<i.length;e++){var r=i[e];n.r[0]+=m[0]*M[0]*r.intensity[0]*4*Math.PI,n.g[0]+=m[0]*M[0]*r.intensity[1]*4*Math.PI,n.b[0]+=m[0]*M[0]*r.intensity[2]*4*Math.PI}return n}function l(t,n,r,s){f(n,s.sh),d.set3(0,0,0,r.intensity);var a=!1,o=b,c=v,h=y;o.length=0,c.length=0,h.length=0;for(var l=0,m=t;l<m.length;l++){var p=m[l];p instanceof e.MainLight&&!a?(d.set(p.direction,r.direction),r.intensity[0]=p.intensity[0],r.intensity[1]=p.intensity[1],r.intensity[2]=p.intensity[2],r.castShadows=p.castShadows,a=!0):p instanceof e.MainLight||p instanceof e.FillLight?o.push(p):p instanceof e.AmbientLight?c.push(p):p instanceof e.SphericalHarmonicsLight&&h.push(p)}u(o,s.sh),g(c,s.sh);for(var L=0,M=h;L<M.length;L++){var p=M[L];i.add(s.sh.r,p.sh.r),i.add(s.sh.g,p.sh.g),i.add(s.sh.b,p.sh.b)}}Object.defineProperty(n,"__esModule",{value:!0});var d=r.vec3d;n.numberOfCoefficients=a,n.numberOfCoefficientsInBand=o,n.orderFromNumberOfCoefficients=c,n.computeCoefficients=h,n.initSHCoefficients=f,n.projectFillLights=u,n.projectAmbientLights=g,n.combineLights=l;var b=[],v=[],y=[],m=[0],p=[0],L=d.create(),M=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]});