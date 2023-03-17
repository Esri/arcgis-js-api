/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../chunks/vec3","../../../chunks/vec3f64"],(function(t,e,c,n){"use strict";const o=n.create(),a=n.create();function r(){return{direction:n.create(),up:n.create()}}function i(t,n,r,i,d){let l=c.normalize(o,t),s=c.dot(l,i);const u=s>0;s=Math.abs(s),s>.99&&(s=Math.abs(c.dot(n,i)),s<.99?(c.copy(l,n),u&&c.scale(l,l,-1)):l=null);let g=0;if(l){c.scale(a,i,c.dot(i,l)),c.subtract(l,l,a);const t=c.dot(l,d)/(c.length(l)*c.length(d));c.cross(a,l,d);g=(c.dot(a,i)>0?1:-1)*e.rad2deg(e.acosClamped(t))}const h=e.rad2deg(e.acosClamped(-c.dot(i,t)/c.length(t)));return r?(r.heading=g,r.tilt=h,r):{heading:g,tilt:h}}t.createDirectionUp=r,t.directionToHeadingTilt=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
