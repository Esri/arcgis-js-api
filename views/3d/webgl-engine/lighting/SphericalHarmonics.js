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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./Lightsources"],(function(n,t,i,e,r,a,s){function c(n){return(n+1)*(n+1)}function o(n){return i.clamp(Math.floor(Math.sqrt(n)-1),0,2)}function h(n,t,i){var e=n[0],r=n[1],a=n[2],s=i||[];return s.length=c(t),t>=0&&(s[0]=.28209479177),t>=1&&(s[1]=.4886025119*e,s[2]=.4886025119*a,s[3]=.4886025119*r),t>=2&&(s[4]=1.09254843059*e*r,s[5]=1.09254843059*r*a,s[6]=.31539156525*(3*a*a-1),s[7]=1.09254843059*e*a,s[8]=.54627421529*(e*e-r*r)),s}function f(n,t){var i=c(n),e=t||{r:[],g:[],b:[]};e.r.length=e.g.length=e.b.length=i;for(var r=0;r<i;r++)e.r[r]=e.g[r]=e.b[r]=0;return e}function l(n,t){for(var i=o(t.r.length),r=0,s=n;r<s.length;r++){var c=s[r];e.vec3.negate(p,c.direction),h(p,i,v),a.elementwiseProduct(v,y),a.scalarProduct(v,c.intensity[0],b),a.add(t.r,b),a.scalarProduct(v,c.intensity[1],b),a.add(t.g,b),a.scalarProduct(v,c.intensity[2],b),a.add(t.b,b)}return t}function g(n,t){h(p,0,v);for(var i=0,e=n;i<e.length;i++){var r=e[i];t.r[0]+=v[0]*y[0]*r.intensity[0]*4*Math.PI,t.g[0]+=v[0]*y[0]*r.intensity[1]*4*Math.PI,t.b[0]+=v[0]*y[0]*r.intensity[2]*4*Math.PI}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.numberOfCoefficients=c,t.numberOfCoefficientsInBand=function(n){return 2*n+1},t.orderFromNumberOfCoefficients=o,t.computeCoefficients=h,t.initSHCoefficients=f,t.projectFillLights=l,t.projectAmbientLights=g,t.combineLights=function(n,t,i){f(t,i.sphericalHarmonics.sh),e.vec3.set(i.main.intensity,0,0,0);var r=!1,c=u,o=d,h=m;c.length=0,o.length=0,h.length=0;for(var v=0,b=n;v<b.length;v++){(L=b[v])instanceof s.MainLight&&!r?(e.vec3.copy(i.main.direction,L.direction),i.main.intensity[0]=L.intensity[0],i.main.intensity[1]=L.intensity[1],i.main.intensity[2]=L.intensity[2],i.main.castShadows=L.castShadows,r=!0):L instanceof s.MainLight||L instanceof s.FillLight?c.push(L):L instanceof s.AmbientLight?o.push(L):L instanceof s.SphericalHarmonicsLight&&h.push(L)}l(c,i.sphericalHarmonics.sh),g(o,i.sphericalHarmonics.sh);for(var p=0,y=h;p<y.length;p++){var L=y[p];a.add(i.sphericalHarmonics.sh.r,L.sh.r),a.add(i.sphericalHarmonics.sh.g,L.sh.g),a.add(i.sphericalHarmonics.sh.b,L.sh.b)}};var u=[],d=[],m=[],v=[0],b=[0],p=r.vec3f64.create(),y=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]}));