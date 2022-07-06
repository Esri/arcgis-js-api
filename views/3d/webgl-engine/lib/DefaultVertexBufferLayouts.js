/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{VertexAttribute as O}from"./VertexAttribute.js";import{DataType as e}from"../../../webgl/enums.js";import{VertexElementDescriptor as T}from"../../../webgl/VertexElementDescriptor.js";const n=[new T(O.POSITION,3,e.FLOAT,0,12)],w=[new T(O.POSITION,3,e.FLOAT,0,20),new T(O.UV0,2,e.FLOAT,12,20)],I=[new T(O.POSITION,3,e.FLOAT,0,32),new T(O.NORMAL,3,e.FLOAT,12,32),new T(O.UV0,2,e.FLOAT,24,32)],r=[new T(O.POSITION,3,e.FLOAT,0,16),new T(O.COLOR,4,e.UNSIGNED_BYTE,12,16)],t=[new T(O.POSITION,2,e.FLOAT,0,8)],A=[new T(O.POSITION,2,e.FLOAT,0,16),new T(O.UV0,2,e.FLOAT,8,16)];export{t as Pos2,A as Pos2Tex,n as Pos3,r as Pos3Col,I as Pos3NormalTex,w as Pos3Tex};
