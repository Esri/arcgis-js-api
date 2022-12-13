/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const t=e=>e.replace("-","_").toUpperCase(),n=e=>`#define ${t(e)}\n`;function s(e){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:n(e)+r.resolveIncludes("blend/blend.vert"),fragmentShader:n(e)+r.resolveIncludes("blend/blend.frag")}}}e.createProgramTemplate=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
