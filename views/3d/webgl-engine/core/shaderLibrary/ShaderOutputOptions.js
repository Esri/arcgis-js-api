/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const u=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"},{output:7,name:"alpha"}];t.ShaderOutputTypes=u,t.getShaderOutputID=function(t,e){return t+"_"+u.find((t=>t.output===e)).name},Object.defineProperty(t,"__esModule",{value:!0})}));
