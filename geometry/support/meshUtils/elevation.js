/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../geometry","../../../Ground","../../../core/maybe","../../../core/promiseUtils","../../../core/unitUtils","../../Mesh","../MeshComponent","../MeshVertexAttributes","../../Point"],(function(e,t,n,o,r,i,a,l,s,u,c){"use strict";function p(e,t,n){return f.apply(this,arguments)}function f(){return(f=t._asyncToGenerator((function*(e,t,n){let r;if(m(e)||e instanceof o){const o=yield d(e);r=yield o.createElevationSampler(t,{demResolution:n&&n.demResolution||"finest-contiguous"})}else r=e;return y(r,t,n)}))).apply(this,arguments)}function y(e,t,n){const o=a.getMetersPerUnitForSR(t.spatialReference),i=e.demResolution.min/o,c=Math.round(t.width/i),p=Math.round(t.height/i),f=c+1,y=p+1,d=new Float64Array(f*y*3),h=new Float32Array(f*y*2);let m=0,R=0;const g=new Uint32Array(c*p*2*3);let v=0,A=0;w.spatialReference=t.spatialReference;for(let a=0;a<y;a++){const n=t.ymin+t.height*(a/p);for(let o=0;o<f;o++){const i=t.xmin+t.width*(o/c);w.x=i,w.y=n,d[m++]=i,d[m++]=n,d[m++]=r.unwrapOr(e.elevationAt(w),0);const l=o/c,s=a/p;h[R++]=l,h[R++]=s,a!==p&&o!==c&&(g[A++]=v+1,g[A++]=v+f+1,g[A++]=v+f,g[A++]=v,g[A++]=v+1,g[A++]=v+f),v++}}return new l({vertexAttributes:new u.default({position:d,uv:h}),components:[new s({faces:g,shading:"smooth",material:n&&n.material||null})],spatialReference:t.spatialReference})}function d(e){return h.apply(this,arguments)}function h(){return(h=t._asyncToGenerator((function*(e){return m(e)?e.load():(yield e.load(),yield i.eachAlways(e.layers.map((e=>e.load()))),e)}))).apply(this,arguments)}function m(e){return"type"in e&&("elevation"===e.type||"base-elevation"===e.type)}const w=new c;e.create=p,Object.defineProperty(e,"__esModule",{value:!0})}));
