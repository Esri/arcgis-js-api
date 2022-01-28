/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/boundedPlane"],(function(e,t,n,r,s){"use strict";function c(e){return t.isSome(e)&&t.isSome(e.dist)}function i(e){return(t,r,c)=>(n.lerp(a,t,r,c),!s.extrusionContainsPoint(e,a))}function o(e){return c(e)&&0===e.intersector&&!!e.target}function u(e){return c(e)&&1===e.intersector&&!!e.target&&t.isSome(e.target.center)}const a=r.create();e.isHudIntersectorResult=u,e.isObjectIntersectorResult=o,e.isValidIntersectorResult=c,e.sliceFilterPredicate=i,Object.defineProperty(e,"__esModule",{value:!0})}));
