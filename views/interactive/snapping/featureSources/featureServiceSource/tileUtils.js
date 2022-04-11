/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec4f64","../../../../../chunks/boundedPlane"],(function(e,n,t,c){"use strict";function o(e,t){return c.fromAABoundingRect(t.extent,u),c.distance(u,n.set(s,e.x,e.y,0))}const u=c.create(),s=t.create();e.distanceToTile=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
