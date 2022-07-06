/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Bloom as o}from"./Bloom.js";import{Blur as e}from"./Blur.js";import{Colorize as t}from"./Colorize.js";import{DropShadow as s}from"./DropShadow.js";import{Opacity as r}from"./Opacity.js";function c(o){switch(o){case"bloom":case"blur":case"opacity":case"drop-shadow":return o;default:return"colorize"}}const f={colorize:()=>new t,blur:()=>new e,bloom:()=>new o,opacity:()=>new r,"drop-shadow":()=>new s};class i{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach((o=>o.dispose())),this._effectMap.clear()}getPostProcessingEffects(o){if(!o||0===o.length)return[];const e=[];for(const t of o){const o=c(t.type);let s=this._effectMap.get(o);s||(s=f[o](),this._effectMap.set(o,s)),e.push({postProcessingEffect:s,effect:t})}return e}}export{i as EffectManager};
