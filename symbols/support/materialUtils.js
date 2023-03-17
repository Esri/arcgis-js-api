/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],(function(r,e,t,n,o){"use strict";function c(r,t){const n=null!=t.transparency?o.transparencyToOpacity(t.transparency):1,c=t.color;return c&&Array.isArray(c)?new e([c[0]||0,c[1]||0,c[2]||0,n]):null}function a(r,e){e.color=r.toJSON().slice(0,3);const t=o.opacityToTransparency(r.a);0!==t&&(e.transparency=t)}const s={type:e,json:{type:[n.Integer],default:null,read:{source:["color","transparency"],reader:c},write:{target:{color:{type:[n.Integer]},transparency:{type:n.Integer}},writer:a}}},p={type:Number,cast:t.toPt,json:{write:!0}};r.colorAndTransparencyProperty=s,r.screenSizeProperty=p,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
