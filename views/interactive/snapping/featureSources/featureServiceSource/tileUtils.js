/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec4f64","../../../../../chunks/boundedPlane"],(function(e,n,t,c){"use strict";function s(e,t){return c.fromAABoundingRect(t.extent,u),c.distance(u,n.set(o,e.x,e.y,0))}const u=c.create(),o=t.create();e.distanceToTile=s,Object.defineProperty(e,"__esModule",{value:!0})}));
