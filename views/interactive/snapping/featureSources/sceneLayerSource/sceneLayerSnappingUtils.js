/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/sphere"],(function(e,n,t){"use strict";const d=1e3;function s(e,d,s){const c=t.create(),o=t.getCenter(c);return n.scaleAndAdd(o,o,e,.5),n.scaleAndAdd(o,o,d,.5),c[3]=n.distance(o,e),n.add(o,o,s),c}e.MAX_CANDIDATE_COUNT=d,e.boundsFromEdge=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
