/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as i}from"../../../../chunks/mat3f64.js";import{f as t}from"../../../../chunks/vec3f64.js";import{MaterialParameters as s}from"../lib/Material.js";class v extends s{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=t(1,1,1),this.vvSizeMaxSize=t(100,100,100),this.vvSizeOffset=t(0,0,0),this.vvSizeFactor=t(1,1,1),this.vvSizeValue=t(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=i()}}const o=8;export{v as VisualVariablePassParameters,o as vvColorNumber};
