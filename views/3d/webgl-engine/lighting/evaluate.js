/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../../../../chunks/vec3","../lib/LongVectorMath","./SphericalHarmonics"],(function(t,e,n,c,o){"use strict";function r(t,c,o,r){const i=e.create(),s=e.create(),d=a(t,c);n.scale(s,c.intensity,d),n.add(i,i,s);for(const e of o){const c=a(t,e);n.scale(s,e.intensity,c),n.add(i,i,s)}for(const e of r)n.scale(s,e.intensity,Math.PI),n.add(i,i,s);return i}function i(t,r,i){const s=e.create(),d=e.create(),u=o.orderFromNumberOfCoefficients(i.r.length),f=a(t,r);n.scale(d,r.intensity,f),n.add(s,s,d);const l=o.computeCoefficients(t,u);return s[0]+=c.dotProduct(l,i.r),s[1]+=c.dotProduct(l,i.g),s[2]+=c.dotProduct(l,i.b),s}function a(t,e){return Math.max(-n.dot(e.direction,t),0)}t.evaluateGroundTruth=r,t.evaluateSphericalHarmonics=i,Object.defineProperty(t,"__esModule",{value:!0})}));
