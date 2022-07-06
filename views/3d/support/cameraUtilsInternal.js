/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{rad2deg as t,acosClamped as s}from"../../../core/mathUtils.js";import{n,e as a,c as o,g as c,b as i,l as r,f as e}from"../../../chunks/vec3.js";import{c as f}from"../../../chunks/vec3f64.js";const l=f(),u=f();function h(){return{direction:f(),up:f()}}function m(f,h,m,p,b){let d=n(l,f),g=a(d,p);const j=g>0;g=Math.abs(g),g>.99&&(g=Math.abs(a(h,p)),g<.99?(o(d,h),j&&c(d,d,-1)):d=null);let k=0;if(d){c(u,p,a(p,d)),i(d,d,u);const n=a(d,b)/(r(d)*r(b));e(u,d,b);k=(a(u,p)>0?1:-1)*t(s(n))}const v=t(s(-a(p,f)/r(f)));return m?(m.heading=k,m.tilt=v,m):{heading:k,tilt:v}}export{h as createDirectionUp,m as directionToHeadingTilt};
