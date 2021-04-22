/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec4f64","../../../../3d/support/geometryUtils"],(function(e,n,t,c){"use strict";function o(e,t){return c.boundedPlane.fromAABoundingRect(t.extent,d),c.boundedPlane.distance(d,n.set(u,e.x,e.y,0))}const d=c.boundedPlane.create(),u=t.create();e.distanceToTile=o,Object.defineProperty(e,"__esModule",{value:!0})}));
