/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../../../Color.js";import{pt2px as s}from"../../../../core/screenUtils.js";const o={main:new t([255,127,0])};class i{constructor(){this.color=o.main,this.opacity=.5,this.radius=5}}class r{constructor(){this.fontSize=14}get height(){return 1.5*s(this.fontSize)}get offset(){return this.height+20}}class e{constructor(){this.pointManipulators=new i,this.labels=new r}}const n=new e;export{n as settings};
