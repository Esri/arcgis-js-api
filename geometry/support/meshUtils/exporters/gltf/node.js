/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{k as s}from"../../../../../chunks/quat.js";import{a as t}from"../../../../../chunks/quatf64.js";import{c as o,a,O as r}from"../../../../../chunks/vec3f64.js";class i{constructor(s){this.mesh=s,this.name="",this.translation=o(),this.rotation=t(),this.scale=a(r),this._nodes=[]}addNode(s){if(this._nodes.includes(s))throw new Error("Node already added");this._nodes.push(s)}forEachNode(s){this._nodes.forEach(s)}set rotationAngles(t){s(this.rotation,t[0],t[1],t[2])}}export{i as Node};
