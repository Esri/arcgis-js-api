/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/mat3f32","../../../../chunks/vec2f32","../../../../chunks/mat3"],(function(e,t,o,s,n){"use strict";function a(e){if(t.isNone(e))return null;const a=t.isSome(e.offset)?e.offset:s.ZEROS,r=t.isSome(e.rotation)?e.rotation:0,i=t.isSome(e.scale)?e.scale:s.ONES,u=o.fromValues(1,0,0,0,1,0,a[0],a[1],1),c=o.fromValues(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),f=o.fromValues(i[0],0,0,0,i[1],0,0,0,1),l=o.create();return n.multiply(l,c,f),n.multiply(l,u,l),l}e.getTransformMatrix=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
