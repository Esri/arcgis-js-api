/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec3f64","../../../core/workers/workers","../../../layers/support/ElevationSampler","../../../chunks/triangle","../../../views/3d/support/geometryUtils","./ElevationSamplerWorker"],(function(e,t,n,r,a,o,i,l,s){"use strict";async function c(e,t){const n=await m(),r=await h.createIndex(e,n);return p(n),new u(e,r,t)}let u=function(e){function r(t,r,a){var o;return(o=e.call(this)||this).rindex=r,o.demResolution={min:0,max:0},o.spatialReference=t.spatialReference.clone(),o.extent=t.extent.clone(),o.noDataValue=n.isSome(a)&&a.noDataValue||0,o}return t._inheritsLoose(r,e),r.prototype.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);let n=Number.NEGATIVE_INFINITY;return l.ray.fromValues([t.x,t.y,0],[0,0,-1],d),this.rindex.search({minX:t.x,maxX:t.x,minY:t.y,maxY:t.y},(e=>{i.intersectRay(e,d,E)&&E[2]>n&&(n=E[2])})),n===Number.NEGATIVE_INFINITY?this.noDataValue:n},r}(o.ElevationSamplerBase);function m(){return++x,f(),y||(y=a.open("ElevationSamplerWorker").catch((()=>null)),y)}function p(e){--x,n.isSome(e)&&0===x&&(v=setTimeout((()=>{e.close(),y=null,v=0}),I))}function f(){v&&(clearTimeout(v),v=0)}const h=new s.ElevationSamplerWorker;let x=0,y=null,v=0;const I=1e4,d=l.ray.fromValues([0,0,0],[0,0,-1]),E=r.create();e.create=c,Object.defineProperty(e,"__esModule",{value:!0})}));
