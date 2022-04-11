/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/boundedPlane","./IntersectorInterfaces"],(function(e,t,r,n,s,c){"use strict";function o(e){return t.isSome(e)&&t.isSome(e.dist)}function i(e){return(t,n,c)=>(r.lerp(l,t,n,c),!s.extrusionContainsPoint(e,l))}function u(e){return o(e)&&e.intersector===c.IntersectorType.OBJECT&&!!e.target}function a(e){return o(e)&&e.intersector===c.IntersectorType.HUD&&!!e.target&&t.isSome(e.target.center)}const l=n.create();e.isHudIntersectorResult=a,e.isObjectIntersectorResult=u,e.isValidIntersectorResult=o,e.sliceFilterPredicate=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
