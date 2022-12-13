/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64"],(function(t,i){"use strict";let e=function(t=i.create()){this.intensity=t},n=function(t=i.create(),e=i.fromValues(.57735,.57735,.57735)){this.intensity=t,this.direction=e},s=function(t=i.create(),e=i.fromValues(.57735,.57735,.57735),n=!0,s=1,h=1){this.intensity=t,this.direction=e,this.castShadows=n,this.specularStrength=s,this.environmentStrength=h},h=function(){this.r=[0],this.g=[0],this.b=[0]};t.AmbientLight=e,t.FillLight=n,t.MainLight=s,t.SphericalHarmonicsAmbientLight=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
