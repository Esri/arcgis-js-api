/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../../core/maybe.js";import{BindType as r}from"../shaderTechnique/BindType.js";class i{constructor(i,s,t,a,n=null){this.name=i,this.type=s,this.arraySize=n,this.bind={[r.Pass]:null,[r.Draw]:null},e(t)&&e(a)&&(this.bind[t]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}export{i as Uniform};
