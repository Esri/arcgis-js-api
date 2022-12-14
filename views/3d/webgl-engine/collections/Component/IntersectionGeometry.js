/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as t,isNone as o}from"../../../../../core/maybe.js";import{t as s}from"../../../../../chunks/vec3.js";import{c as e}from"../../../../../chunks/vec3f64.js";import{create as n}from"../../../../../geometry/support/aaBoundingBox.js";import{BufferViewVec3f as i}from"../../../../../geometry/support/buffer/BufferView.js";import{componentMinimalSizeForIntersectionData as r,ComponentIntersectionData as p}from"./ComponentIntersectionData.js";import{getVisibility as m}from"../../lib/ComponentUtils.js";import{generateDefaultIndexArray as a}from"../../lib/geometryDataUtils.js";import{computeInvDir as c,intersectAabbInvDir as h,intersectTriangles as f}from"../../materials/internal/MaterialUtil.js";class _{constructor(o,s){this._indices=t(o.indices)?o.indices:a(o.positions.length/3),this._positions=new i(o.positions),this._components=s,this._componentIntersectionData=new Array(s.count)}getComponentAabb(o,s){if(t(this._perComponentAabbs)){for(let t=0;t<6;t++)s[t]=this._perComponentAabbs[6*o+t];return s}return this._computePerComponentAabbs(),this.getComponentAabb(o,s)}getComponentPositions(t,o){o.indices=this._indices,o.data=this._positions.typedBuffer,o.stride=this._positions.typedBufferStride,o.startIndex=this._components.offsets[t],o.endIndex=this._components.offsets[t+1]}intersect(e,n,i,a,_,u,l){const C={data:this._positions.typedBuffer,stride:this._positions.typedBufferStride,size:3},A=this._indices,y=this._components.offsets,g=c(e,n,b),j=e[2],B=n[2];this._components.visibility.forEachComponent((c=>{if(!m(this._components.pickability,c))return!0;const b=this.getComponentAabb(c,d);if(t(u)){const o=u[c];t(_)?_.componentOffset=o:(e[2]=j-o,n[2]=B-o)}if(t(_)&&_.applyToAabb(b),!h(b,e,g,i))return!0;const x=y[c]/3,I=y[c+1]/3,M=(t,o,e)=>{l(c,t,s(o,o,a),e)},D=I-x;return o(_)&&D>r?(null==this._componentIntersectionData[c]&&(this._componentIntersectionData[c]=new p(this._indices,x,I,C)),this._componentIntersectionData[c].intersectRay({r0:e,r1:n},M)):f(e,n,x,I,A,C,void 0,_,M),!0}))}_computePerComponentAabbs(){const t=this._components.count;this._perComponentAabbs=new Float32Array(6*t);const o=this._indices,s=this._positions.typedBuffer,e=this._positions.typedBufferStride,n=this._components.offsets;let i=0;for(let r=0;r<t;r++){const t=n[r],p=n[r+1];let m=1/0,a=1/0,c=1/0,h=-1/0,f=-1/0,_=-1/0;for(let n=t;n<p;n++){const t=o[n]*e,i=s[t],r=s[t+1],p=s[t+2];m=Math.min(m,i),a=Math.min(a,r),c=Math.min(c,p),h=Math.max(h,i),f=Math.max(f,r),_=Math.max(_,p)}this._perComponentAabbs[i++]=m,this._perComponentAabbs[i++]=a,this._perComponentAabbs[i++]=c,this._perComponentAabbs[i++]=h,this._perComponentAabbs[i++]=f,this._perComponentAabbs[i++]=_}}get positions(){return this._positions}get indices(){return this._indices}}const b=e(),d=n();export{_ as default};