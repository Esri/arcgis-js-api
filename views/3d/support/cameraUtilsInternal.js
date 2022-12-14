/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../chunks/vec3","../../../chunks/vec3f64"],(function(e,t,c,o){"use strict";const n=o.create(),a=o.create();function i(){return{direction:o.create(),up:o.create()}}function r(e,o,i,r,d){let l=c.normalize(n,e),s=c.dot(l,r);const u=s>0;s=Math.abs(s),s>.99&&(s=Math.abs(c.dot(o,r)),s<.99?(c.copy(l,o),u&&c.scale(l,l,-1)):l=null);let g=0;if(l){c.scale(a,r,c.dot(r,l)),c.subtract(l,l,a);const e=c.dot(l,d)/(c.length(l)*c.length(d));c.cross(a,l,d);g=(c.dot(a,r)>0?1:-1)*t.rad2deg(t.acosClamped(e))}const h=t.rad2deg(t.acosClamped(-c.dot(r,e)/c.length(e)));return i?(i.heading=g,i.tilt=h,i):{heading:g,tilt:h}}e.createDirectionUp=i,e.directionToHeadingTilt=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
