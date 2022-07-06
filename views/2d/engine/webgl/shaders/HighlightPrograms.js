/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{resolveIncludes as e}from"./sources/resolver.js";const t={shaders:{vertexShader:e("highlight/textured.vert"),fragmentShader:e("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},r={shaders:{vertexShader:e("highlight/textured.vert"),fragmentShader:e("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};export{r as blur,t as highlight};
