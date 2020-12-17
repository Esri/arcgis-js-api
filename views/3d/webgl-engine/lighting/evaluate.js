/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../../../../chunks/vec3","../lib/LongVectorMath","./SphericalHarmonics"],(function(t,e,n,c,o){"use strict";function r(t,e){return Math.max(-n.dot(e.direction,t),0)}t.evaluateGroundTruth=function(t,c,o,i){const a=e.create(),s=e.create(),d=r(t,c);n.scale(s,c.intensity,d),n.add(a,a,s);for(const e of o){const c=r(t,e);n.scale(s,e.intensity,c),n.add(a,a,s)}for(const t of i)n.scale(s,t.intensity,Math.PI),n.add(a,a,s);return a},t.evaluateSphericalHarmonics=function(t,i,a){const s=e.create(),d=e.create(),u=o.orderFromNumberOfCoefficients(a.r.length),f=r(t,i);n.scale(d,i.intensity,f),n.add(s,s,d);const l=o.computeCoefficients(t,u);return s[0]+=c.dotProduct(l,a.r),s[1]+=c.dotProduct(l,a.g),s[2]+=c.dotProduct(l,a.b),s},Object.defineProperty(t,"__esModule",{value:!0})}));
