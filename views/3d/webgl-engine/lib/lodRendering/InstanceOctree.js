/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"../../../../../chunks/mat4f64.js";import{m as e}from"../../../../../chunks/vec3.js";import{w as s,c as i}from"../../../../../chunks/sphere.js";import{maxScale as r}from"../../../support/mathUtils.js";import h from"../Octree.js";class n extends h{constructor(e,r){super((t=>s(this._instanceData.view.boundingSphere.getVec(t,this._tmpSphere))),{maximumDepth:25}),this._tmpSphere=i(),this._tmpMat4=t(),this._instanceData=e,this._boundingSphere=r}addInstance(t){const s=this._instanceData.view.boundingSphere,i=this._instanceData.getCombinedModelTransform(t,this._tmpMat4);e(this._tmpSphere,this._boundingSphere.center,i),this._tmpSphere[3]=this._boundingSphere.radius*r(i),s.setVec(t,this._tmpSphere),this.add([t])}removeInstance(t){this.remove([t])}}export{n as InstanceOctree};
