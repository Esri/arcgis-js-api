/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../chunks/vec3","../../../chunks/vec3f64"],(function(e,t,c,n){"use strict";const o=n.create(),a=n.create();function r(){return{direction:n.create(),up:n.create()}}function i(e,n,r,i,d){let s=c.normalize(o,e),l=c.dot(s,i);const u=l>0;l=Math.abs(l),l>.99&&(l=Math.abs(c.dot(n,i)),l<.99?(c.copy(s,n),u&&c.scale(s,s,-1)):s=null);let h=0;if(s){c.scale(a,i,c.dot(i,s)),c.subtract(s,s,a);const e=c.dot(s,d)/(c.length(s)*c.length(d));c.cross(a,s,d);h=(c.dot(a,i)>0?1:-1)*t.rad2deg(t.acosClamped(e))}const g=t.rad2deg(t.acosClamped(-c.dot(i,e)/c.length(e)));return r?(r.heading=h,r.tilt=g,r):{heading:h,tilt:g}}e.createDirectionUp=r,e.directionToHeadingTilt=i,Object.defineProperty(e,"__esModule",{value:!0})}));
