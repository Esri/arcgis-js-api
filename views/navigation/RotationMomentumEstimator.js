/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MomentumEstimator as t}from"./MomentumEstimator.js";class a extends t{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}export{a as RotationMomentumEstimator};
