/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{PowerOfTwoResizeMode as e}from"./basicInterfaces.js";import{TextRenderer as r,getTextHelperCanvas as t}from"./TextRenderer.js";import{Texture as n}from"./Texture.js";import{TextureWrapMode as s}from"../../../webgl/enums.js";class i{constructor(e,t,n){this._renderer=new r(e,t,n)}get key(){return this._renderer.key}get baselineAnchorY(){return 1-this._renderer.firstRenderedBaselinePosition/this._renderer.renderedHeight}get displayWidth(){return this._renderer.displayWidth}get displayHeight(){return this._renderer.displayHeight}create(){const r=t(d,this._renderer.renderedWidth,this._renderer.renderedHeight),i=r.getContext("2d");return i.save(),this._renderer.render(i,0,0),i.restore(),new n(r,{wrap:{s:s.CLAMP_TO_EDGE,t:s.CLAMP_TO_EDGE},noUnpackFlip:!1,mipmap:!0,preMultiplyAlpha:!0,powerOfTwoResizeMode:e.PAD})}}const d={canvas:null};export{i as default};