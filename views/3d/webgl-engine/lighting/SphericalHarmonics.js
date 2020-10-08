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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../lib/LongVectorMath","./Lightsources"],(function(i,t,n,e,r,s,c){"use strict";function a(i){return(i+1)*(i+1)}function o(i){return n.clamp(Math.floor(Math.sqrt(i)-1),0,2)}function h(i,t,n){var e=i[0],r=i[1],s=i[2],c=n||[];return c.length=a(t),t>=0&&(c[0]=.28209479177),t>=1&&(c[1]=.4886025119*e,c[2]=.4886025119*s,c[3]=.4886025119*r),t>=2&&(c[4]=1.09254843059*e*r,c[5]=1.09254843059*r*s,c[6]=.31539156525*(3*s*s-1),c[7]=1.09254843059*e*s,c[8]=.54627421529*(e*e-r*r)),c}function f(i,t){var n=a(i),e=t||{r:[],g:[],b:[]};e.r.length=e.g.length=e.b.length=n;for(var r=0;r<n;r++)e.r[r]=e.g[r]=e.b[r]=0;return e}function l(i,t){for(var n=o(t.r.length),r=0,c=i;r<c.length;r++){var a=c[r];e.vec3.negate(v,a.direction),h(v,n,b),s.elementwiseProduct(b,y),s.scalarProduct(b,a.intensity[0],p),s.add(t.r,p),s.scalarProduct(b,a.intensity[1],p),s.add(t.g,p),s.scalarProduct(b,a.intensity[2],p),s.add(t.b,p)}return t}function u(i,t){h(v,0,b);for(var n=0,e=i;n<e.length;n++){var r=e[n];t.r[0]+=b[0]*y[0]*r.intensity[0]*4*Math.PI,t.g[0]+=b[0]*y[0]*r.intensity[1]*4*Math.PI,t.b[0]+=b[0]*y[0]*r.intensity[2]*4*Math.PI}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.combineLights=t.projectAmbientLights=t.projectFillLights=t.initSHCoefficients=t.computeCoefficients=t.orderFromNumberOfCoefficients=t.numberOfCoefficientsInBand=t.numberOfCoefficients=void 0,t.numberOfCoefficients=a,t.numberOfCoefficientsInBand=function(i){return 2*i+1},t.orderFromNumberOfCoefficients=o,t.computeCoefficients=h,t.initSHCoefficients=f,t.projectFillLights=l,t.projectAmbientLights=u,t.combineLights=function(i,t,n){f(t,n.sphericalHarmonics.sh),e.vec3.set(n.main.intensity,0,0,0);var r=!1,a=g,o=m,h=d;a.length=0,o.length=0,h.length=0;for(var b=0,p=i;b<p.length;b++){(L=p[b])instanceof c.MainLight&&!r?(e.vec3.copy(n.main.direction,L.direction),n.main.intensity[0]=L.intensity[0],n.main.intensity[1]=L.intensity[1],n.main.intensity[2]=L.intensity[2],n.main.castShadows=L.castShadows,r=!0):L instanceof c.MainLight||L instanceof c.FillLight?a.push(L):L instanceof c.AmbientLight?o.push(L):L instanceof c.SphericalHarmonicsLight&&h.push(L)}l(a,n.sphericalHarmonics.sh),u(o,n.sphericalHarmonics.sh);for(var v=0,y=h;v<y.length;v++){var L=y[v];s.add(n.sphericalHarmonics.sh.r,L.sh.r),s.add(n.sphericalHarmonics.sh.g,L.sh.g),s.add(n.sphericalHarmonics.sh.b,L.sh.b)}};var g=[],m=[],d=[],b=[0],p=[0],v=r.vec3f64.create(),y=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]}));