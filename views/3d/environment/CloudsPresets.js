/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{RayMarchingSteps as i}from"./CloudsTechniqueConfiguration.js";class s{constructor(i,s,t,e,n,o,h,r,c=.5){this.coverage=i,this.density=s,this.absorption=t,this.cloudSize=e,this.detailSize=n,this.smoothness=o,this.cloudHeight=h,this.raymarchingStepType=r,this.median=c}}const t={sunny:new s([0,.6],[.03,.03],[0,0],[.9,.9],[.8,.8],[.7,.7],[.05,.05],i.SIXTEEN),cloudy:new s([.3,.65],[.2,.4],[0,0],[.85,.85],[.75,.75],[.3,.4],[1,1],i.TWOHUNDRED,.6),rainy:new s([.6,.8],[.5,.8],[.1,.5],[.9,.9],[.75,.75],[.5,.5],[1,1],i.TWOHUNDRED,.4),snowy:new s([.25,.75],[.3,.3],[0,0],[.95,.95],[.7,.7],[.69,.75],[.3,1],i.HUNDRED,.65),foggy:new s([.8,.8],[.5,.5],[0,0],[.95,.95],[.9,.9],[.55,.55],[.3,.3],i.SIXTEEN)};export{s as CloudPresets,t as cloudPresets};
