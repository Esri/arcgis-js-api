/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../Color.js";import{toPt as o}from"../../core/screenUtils.js";import{Integer as t}from"../../core/accessorSupport/ensureType.js";import{transparencyToOpacity as e,opacityToTransparency as n}from"../../webdoc/support/opacityUtils.js";function s(o,t){const n=null!=t.transparency?e(t.transparency):1,s=t.color;return s&&Array.isArray(s)?new r([s[0]||0,s[1]||0,s[2]||0,n]):null}function c(r,o){o.color=r.toJSON().slice(0,3);const t=n(r.a);0!==t&&(o.transparency=t)}const p={type:r,json:{type:[t],default:null,read:{source:["color","transparency"],reader:s},write:{target:{color:{type:[t]},transparency:{type:t}},writer:c}}},a={type:Number,cast:o,json:{write:!0}};export{p as colorAndTransparencyProperty,a as screenSizeProperty};
