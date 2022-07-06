/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Momentum as e}from"./Momentum.js";import{MomentumEstimator as t}from"./MomentumEstimator.js";class r extends e{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends t{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}export{r as ZoomMomentum,s as ZoomMomentumEstimator};
