/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as t}from"../../../../core/maybe.js";import{generateUID as i}from"../../../../core/uid.js";import{I as r}from"../../../../chunks/mat4f64.js";import{b as o}from"../../../../chunks/vec3.js";import{c as s}from"../../../../chunks/vec3f64.js";import{f as e}from"../../../../chunks/vec4f64.js";import{projectBuffer as a}from"../../../../geometry/projection.js";import{PrimitiveType as n}from"./basicInterfaces.js";import{Geometry as h}from"./Geometry.js";import{fromValues as m}from"./LocalOriginFactory.js";import{Object3D as c}from"./Object3D.js";import{gridLocalOriginFactory as d}from"./testUtils.js";import{VertexAttribute as g}from"./VertexAttribute.js";import{WebGLLayer as f}from"./WebGLLayer.js";import{RibbonLineMaterial as _}from"../materials/RibbonLineMaterial.js";class j{constructor(t,r=125e4){this._originSR=t,this._gridSize=r,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+i()}getOrigin(i){const r=this._origins.get(this._rootOriginId);if(null==r){const r=d.rootOrigin;if(t(r))return this._origins.set(this._rootOriginId,m(r[0],r[1],r[2],this._rootOriginId)),this.getOrigin(i);const o=m(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,o),o}const s=this._gridSize,e=Math.round(i[0]/s),a=Math.round(i[1]/s),n=Math.round(i[2]/s),h=`${e}/${a}/${n}`;let c=this._origins.get(h);const g=.5*s;if(o(p,i,r.vec3),p[0]=Math.abs(p[0]),p[1]=Math.abs(p[1]),p[2]=Math.abs(p[2]),p[0]<g&&p[1]<g&&p[2]<g){if(c){const t=Math.max(...p);o(p,i,c.vec3),p[0]=Math.abs(p[0]),p[1]=Math.abs(p[1]),p[2]=Math.abs(p[2]);if(Math.max(...p)<t)return c}return r}return c||(c=m(e*s,a*s,n*s,h),this._origins.set(h,c)),c}_drawOriginBox(t,i=e(1,1,0,1)){const o=window.view,s=o._stage,m=i.toString();if(!this._objects.has(m)){this._material=new _({width:2,color:i}),s.add(this._material);const t=new f({isPickable:!1}),r=new c({castShadow:!1});s.add(r),t.add(r),s.add(t),this._objects.set(m,r)}const d=this._objects.get(m),j=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],p=j.length,b=new Array(3*p),l=new Uint16Array(2*(p-1)),u=.5*this._gridSize;for(let r=0;r<p;r++)b[3*r+0]=t[0]+(1&j[r]?u:-u),b[3*r+1]=t[1]+(2&j[r]?u:-u),b[3*r+2]=t[2]+(4&j[r]?u:-u),r>0&&(l[2*r+0]=r-1,l[2*r+1]=r);a(b,this._originSR,0,b,o.renderSpatialReference,0,p);const M=new h([[g.POSITION,{size:3,data:b,exclusive:!0}]],[[g.POSITION,l]],n.Line);s.add(M),d.addGeometry(M,this._material,r)}}const p=s();export{j as GridLocalOriginFactory};