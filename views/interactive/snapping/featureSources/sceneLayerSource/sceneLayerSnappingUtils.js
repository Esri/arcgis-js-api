/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/sphere"],(function(e,n,t){"use strict";const d=1e3;function c(e,d,c){const s=t.create(),o=t.getCenter(s);return n.scaleAndAdd(o,o,e,.5),n.scaleAndAdd(o,o,d,.5),s[3]=n.distance(o,e),n.add(o,o,c),s}e.MAX_CANDIDATE_COUNT=d,e.boundsFromEdge=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
