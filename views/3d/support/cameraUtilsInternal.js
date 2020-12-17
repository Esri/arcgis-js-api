/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../chunks/vec3f64","../../../chunks/vec3"],(function(e,t,c,n){"use strict";const o=c.create(),a=c.create();e.createDirectionUp=function(){return{direction:c.create(),up:c.create()}},e.directionToHeadingTilt=function(e,c,r,i,d){let s=o;n.normalize(s,e);let l=n.dot(s,i);const u=l>0;l=Math.abs(l),l>.99&&(l=Math.abs(n.dot(c,i)),l<.99?(n.copy(s,c),u&&n.scale(s,s,-1)):s=null);let h=0;if(s){n.scale(a,i,n.dot(i,s)),n.subtract(s,s,a);const e=n.dot(s,d)/(n.length(s)*n.length(d));n.cross(a,s,d);h=(n.dot(a,i)>0?1:-1)*t.rad2deg(t.acosClamped(e))}const g=t.rad2deg(t.acosClamped(-n.dot(i,e)/n.length(e)));return r?(r.heading=h,r.tilt=g,r):{heading:h,tilt:g}},Object.defineProperty(e,"__esModule",{value:!0})}));
