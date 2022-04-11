/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,s){"use strict";const t={shaders:{vertexShader:s.resolveIncludes("stencil/stencil.vert"),fragmentShader:s.resolveIncludes("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};e.stencil=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
