/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],(function(e,r,t,n,o){"use strict";function c(e,t){const n=null!=t.transparency?o.transparencyToOpacity(t.transparency):1,c=t.color;return c&&Array.isArray(c)?new r([c[0]||0,c[1]||0,c[2]||0,n]):null}function a(e,r){r.color=e.toJSON().slice(0,3);const t=o.opacityToTransparency(e.a);0!==t&&(r.transparency=t)}const s={type:r,json:{type:[n.Integer],default:null,read:{source:["color","transparency"],reader:c},write:{target:{color:{type:[n.Integer]},transparency:{type:n.Integer}},writer:a}}},p={type:Number,cast:t.toPt,json:{write:!0}};e.colorAndTransparencyProperty=s,e.screenSizeProperty=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
