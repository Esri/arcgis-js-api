/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{VTLMaterial as r}from"./VTLMaterial.js";import{DataType as t}from"../../../../webgl/enums.js";import{VertexElementDescriptor as e}from"../../../../webgl/VertexElementDescriptor.js";class T extends r{constructor(r){super(r)}geometryInfo(){return T.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return T.ATTRIBUTES}attributesInfo(){return T.ATTRIBUTES_INFO}}T.ATTRIBUTES=[],T.GEOMETRY_LAYOUT=[new e("a_pos",2,t.BYTE,0,2)],T.ATTRIBUTES_INFO={};export{T as VTLBackgroundMaterial};
