/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3","../../../../chunks/vec3f64","../lib/LongVectorMath","./Lightsources"],(function(t,n,e,i,o,s){"use strict";function c(t){return(t+1)*(t+1)}function r(t){return n.clamp(Math.floor(Math.sqrt(t)-1),0,2)}function a(t,n,e){const i=t[0],o=t[1],s=t[2],r=e||[];return r.length=c(n),n>=0&&(r[0]=.28209479177),n>=1&&(r[1]=.4886025119*i,r[2]=.4886025119*s,r[3]=.4886025119*o),n>=2&&(r[4]=1.09254843059*i*o,r[5]=1.09254843059*o*s,r[6]=.31539156525*(3*s*s-1),r[7]=1.09254843059*i*s,r[8]=.54627421529*(i*i-o*o)),r}function f(t,n){const e=c(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=e;for(let o=0;o<e;o++)i.r[o]=i.g[o]=i.b[o]=0;return i}function h(t,n){const i=r(n.r.length);for(const s of t)e.negate(p,s.direction),a(p,i,y),o.elementwiseProduct(y,L),o.scalarProduct(y,s.intensity[0],m),o.add(n.r,m),o.scalarProduct(y,s.intensity[1],m),o.add(n.g,m),o.scalarProduct(y,s.intensity[2],m),o.add(n.b,m);return n}function u(t,n){a(p,0,y);for(const e of t)n.r[0]+=y[0]*L[0]*e.intensity[0]*4*Math.PI,n.g[0]+=y[0]*L[0]*e.intensity[1]*4*Math.PI,n.b[0]+=y[0]*L[0]*e.intensity[2]*4*Math.PI;return n}function g(t,n,i,c){f(n,c),e.set(i.intensity,0,0,0);let r=!1;const a=d,g=l,y=b;a.length=0,g.length=0,y.length=0;for(const o of t)o instanceof s.MainLight&&!r?(e.copy(i.direction,o.direction),i.intensity[0]=o.intensity[0],i.intensity[1]=o.intensity[1],i.intensity[2]=o.intensity[2],i.castShadows=o.castShadows,r=!0):o instanceof s.MainLight||o instanceof s.FillLight?a.push(o):o instanceof s.AmbientLight?g.push(o):o instanceof s.SphericalHarmonicsAmbientLight&&y.push(o);h(a,c),u(g,c);for(const e of y)o.add(c.r,e.r),o.add(c.g,e.g),o.add(c.b,e.b)}const d=[],l=[],b=[],y=[0],m=[0],p=i.create(),L=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];t.combineLights=g,t.computeCoefficients=a,t.initSHCoefficients=f,t.numberOfCoefficients=c,t.orderFromNumberOfCoefficients=r,t.projectAmbientLights=u,t.projectFillLights=h,Object.defineProperty(t,"__esModule",{value:!0})}));
