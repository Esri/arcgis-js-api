/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as e}from"../../shaderModules/interfaces.js";import{VertexAttribute as t}from"../../../lib/VertexAttribute.js";function o(o){o.attributes.add(t.POSITION,"vec3"),o.vertex.code.add(e`vec3 positionModel() { return position; }`)}export{o as PositionAttribute};
