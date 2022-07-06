/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{TransparencyPassType as n}from"./basicInterfaces.js";import{BlendFactor as r,CompareFunction as t}from"../../../webgl/enums.js";import{separateBlendingParams as e,simpleBlendingParams as o,defaultDepthWriteParams as u}from"../../../webgl/renderState.js";const c=e(r.SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),N=o(r.ONE,r.ONE),A=o(r.ZERO,r.ONE_MINUS_SRC_ALPHA);function E(r){return r===n.FrontFace?null:r===n.Alpha?A:N}function S(r){return r===n.FrontFace?u:null}const _=5e5,f={factor:-1,units:-2};function i(n){return n?f:null}function l(r,e=t.LESS){return r===n.NONE||r===n.FrontFace?e:t.LEQUAL}export{f as OITPolygonOffset,_ as OITPolygonOffsetLimit,A as blendingAlpha,N as blendingColor,c as blendingDefault,i as getOITPolygonOffset,E as oitBlending,l as oitDepthTest,S as oitDepthWrite};
