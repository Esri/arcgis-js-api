/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec3f64"],(function(e,t){"use strict";function n(e){const t=1e5,n=1e6;return Math.min(1,Math.max(0,(e-t)/(n-t)))}const a=1e4,i=t.fromValues(5802e-9,13558e-9,331e-7),o=3,r=t.fromValues(65e-8*o,1881e-9*o,85e-9*o),s=3996e-9,u=.085,c=1e5;e.atmosphereHeight=c,e.betaMie=s,e.betaOzone=r,e.betaRayleigh=i,e.computeInnerAltitudeFade=n,e.innerAtmosphereDepth=a,e.rayLeighScaleHeight=u,Object.defineProperty(e,"__esModule",{value:!0})}));
