/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/mat3f32","../../../../chunks/vec2f32","../../../../chunks/mat3"],(function(e,t,o,s,a){"use strict";function n(e){if(t.isNone(e))return null;const n=t.isSome(e.offset)?e.offset:s.ZEROS,i=t.isSome(e.rotation)?e.rotation:0,r=t.isSome(e.scale)?e.scale:s.ONES,u=o.fromValues(1,0,0,0,1,0,n[0],n[1],1),l=o.fromValues(Math.cos(i),-Math.sin(i),0,Math.sin(i),Math.cos(i),0,0,0,1),c=o.fromValues(r[0],0,0,0,r[1],0,0,0,1),f=o.create();return a.multiply(f,l,c),a.multiply(f,u,f),f}e.getTransformMatrix=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
