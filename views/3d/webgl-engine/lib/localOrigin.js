/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64"],(function(e,n){"use strict";let t=function(e,n){this.vec3=e,this.id=n};e.LocalOrigin=t,e.fromValues=function(e,o,r,c){return new t(n.fromValues(e,o,r),c)},e.fromVector=function(e,o){return new t(n.clone(e),o)},Object.defineProperty(e,"__esModule",{value:!0})}));
