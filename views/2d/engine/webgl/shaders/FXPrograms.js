/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{resolveIncludes as e}from"./sources/resolver.js";const r={shaders:{vertexShader:e("fx/integrate.vert"),fragmentShader:e("fx/integrate.frag")},attributes:new Map([["a_position",0]])};export{r as integrateProgram};
