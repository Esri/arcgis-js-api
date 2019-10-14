// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./Lightsources"],function(n,t,i,e,r,a,s){function c(n){return(n+1)*(n+1)}function o(n){return 2*n+1}function h(n){return i.clamp(Math.floor(Math.sqrt(n)-1),0,2)}function f(n,t,i){var e=n[0],r=n[1],a=n[2],s=i||[];return s.length=c(t),t>=0&&(s[0]=.28209479177),t>=1&&(s[1]=.4886025119*e,s[2]=.4886025119*a,s[3]=.4886025119*r),t>=2&&(s[4]=1.09254843059*e*r,s[5]=1.09254843059*r*a,s[6]=.31539156525*(3*a*a-1),s[7]=1.09254843059*e*a,s[8]=.54627421529*(e*e-r*r)),s}function l(n,t){var i=c(n),e=t||{r:[],g:[],b:[]};e.r.length=e.g.length=e.b.length=i;for(var r=0;r<i;r++)e.r[r]=e.g[r]=e.b[r]=0;return e}function g(n,t){for(var i=h(t.r.length),r=0,s=n;r<s.length;r++){var c=s[r];e.vec3.negate(L,c.direction),f(L,i,p),a.elementwiseProduct(p,M),a.scalarProduct(p,c.intensity[0],y),a.add(t.r,y),a.scalarProduct(p,c.intensity[1],y),a.add(t.g,y),a.scalarProduct(p,c.intensity[2],y),a.add(t.b,y)}return t}function u(n,t){f(L,0,p);for(var i=0,e=n;i<e.length;i++){var r=e[i];t.r[0]+=p[0]*M[0]*r.intensity[0]*4*Math.PI,t.g[0]+=p[0]*M[0]*r.intensity[1]*4*Math.PI,t.b[0]+=p[0]*M[0]*r.intensity[2]*4*Math.PI}return t}function d(n,t,i){l(t,i.sphericalHarmonics.sh),e.vec3.set(i.main.intensity,0,0,0);var r=!1,c=m,o=v,h=b;c.length=0,o.length=0,h.length=0;for(var f=0,d=n;f<d.length;f++){var p=d[f];p instanceof s.MainLight&&!r?(e.vec3.copy(i.main.direction,p.direction),i.main.intensity[0]=p.intensity[0],i.main.intensity[1]=p.intensity[1],i.main.intensity[2]=p.intensity[2],i.main.castShadows=p.castShadows,r=!0):p instanceof s.MainLight||p instanceof s.FillLight?c.push(p):p instanceof s.AmbientLight?o.push(p):p instanceof s.SphericalHarmonicsLight&&h.push(p)}g(c,i.sphericalHarmonics.sh),u(o,i.sphericalHarmonics.sh);for(var y=0,L=h;y<L.length;y++){var p=L[y];a.add(i.sphericalHarmonics.sh.r,p.sh.r),a.add(i.sphericalHarmonics.sh.g,p.sh.g),a.add(i.sphericalHarmonics.sh.b,p.sh.b)}}Object.defineProperty(t,"__esModule",{value:!0}),t.numberOfCoefficients=c,t.numberOfCoefficientsInBand=o,t.orderFromNumberOfCoefficients=h,t.computeCoefficients=f,t.initSHCoefficients=l,t.projectFillLights=g,t.projectAmbientLights=u,t.combineLights=d;var m=[],v=[],b=[],p=[0],y=[0],L=r.vec3f64.create(),M=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]});