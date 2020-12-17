/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const t={name:"integrate",shaders:{vertexShader:r.resolveIncludes("fx/integrate.vert"),fragmentShader:r.resolveIncludes("fx/integrate.frag")},attributes:{a_position:0}};e.integrateProgram=t,Object.defineProperty(e,"__esModule",{value:!0})}));
