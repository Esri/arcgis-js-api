/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3f64","../../../../chunks/vec3","./Lightsources","../lib/LongVectorMath"],(function(n,t,i,e,s,c){"use strict";function o(n){return(n+1)*(n+1)}function r(n){return 2*n+1}function a(n){return t.clamp(Math.floor(Math.sqrt(n)-1),0,2)}function h(n,t,i){const e=n[0],s=n[1],c=n[2],r=i||[];return r.length=o(t),t>=0&&(r[0]=.28209479177),t>=1&&(r[1]=.4886025119*e,r[2]=.4886025119*c,r[3]=.4886025119*s),t>=2&&(r[4]=1.09254843059*e*s,r[5]=1.09254843059*s*c,r[6]=.31539156525*(3*c*c-1),r[7]=1.09254843059*e*c,r[8]=.54627421529*(e*e-s*s)),r}function f(n,t){const i=o(n),e=t||{r:[],g:[],b:[]};e.r.length=e.g.length=e.b.length=i;for(let s=0;s<i;s++)e.r[s]=e.g[s]=e.b[s]=0;return e}function u(n,t){const i=a(t.r.length);for(const s of n)e.negate(L,s.direction),h(L,i,b),c.elementwiseProduct(b,M),c.scalarProduct(b,s.intensity[0],y),c.add(t.r,y),c.scalarProduct(b,s.intensity[1],y),c.add(t.g,y),c.scalarProduct(b,s.intensity[2],y),c.add(t.b,y);return t}function l(n,t){h(L,0,b);for(const i of n)t.r[0]+=b[0]*M[0]*i.intensity[0]*4*Math.PI,t.g[0]+=b[0]*M[0]*i.intensity[1]*4*Math.PI,t.b[0]+=b[0]*M[0]*i.intensity[2]*4*Math.PI;return t}function d(n,t,i){f(t,i.sphericalHarmonics.sh),e.set(i.main.intensity,0,0,0);let o=!1;const r=g,a=m,h=p;r.length=0,a.length=0,h.length=0;for(const c of n)c instanceof s.MainLight&&!o?(e.copy(i.main.direction,c.direction),i.main.intensity[0]=c.intensity[0],i.main.intensity[1]=c.intensity[1],i.main.intensity[2]=c.intensity[2],i.main.castShadows=c.castShadows,o=!0):c instanceof s.MainLight||c instanceof s.FillLight?r.push(c):c instanceof s.AmbientLight?a.push(c):c instanceof s.SphericalHarmonicsLight&&h.push(c);u(r,i.sphericalHarmonics.sh),l(a,i.sphericalHarmonics.sh);for(const e of h)c.add(i.sphericalHarmonics.sh.r,e.sh.r),c.add(i.sphericalHarmonics.sh.g,e.sh.g),c.add(i.sphericalHarmonics.sh.b,e.sh.b)}const g=[],m=[],p=[],b=[0],y=[0],L=i.create(),M=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];n.combineLights=d,n.computeCoefficients=h,n.initSHCoefficients=f,n.numberOfCoefficients=o,n.numberOfCoefficientsInBand=r,n.orderFromNumberOfCoefficients=a,n.projectAmbientLights=l,n.projectFillLights=u,Object.defineProperty(n,"__esModule",{value:!0})}));
