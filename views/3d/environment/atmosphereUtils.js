/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as e}from"../../../chunks/vec3f64.js";function t(e){const t=1e5,n=1e6;return Math.min(1,Math.max(0,(e-t)/(n-t)))}const n=1e4,o=e(5802e-9,13558e-9,331e-7),c=3,r=e(65e-8*c,1881e-9*c,85e-9*c),s=3996e-9,a=.085,f=1e5;export{f as atmosphereHeight,s as betaMie,r as betaOzone,o as betaRayleigh,t as computeInnerAltitudeFade,n as innerAtmosphereDepth,a as rayLeighScaleHeight};
