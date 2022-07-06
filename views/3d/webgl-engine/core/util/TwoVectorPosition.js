/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as s,v as t,s as h,a as e,g as i}from"../../../../../chunks/vec3.js";import{c as o}from"../../../../../chunks/vec3f32.js";import{c as r}from"../../../../../chunks/vec3f64.js";class c{constructor(s){this._low=o(),this._high=o(),s&&this.set(s)}get low(){return this._low}get high(){return this._high}set(h){const e=this._low,i=this._high;s(e,h),t(i,h,e)}setElements(s,t,e){h(n,s,t,e),this.set(n)}get(s){return e(s,this._low,this._high)}getLowScaled(s){return i(s,this._low,1)}}const n=r();export{c as TwoVectorPosition};
