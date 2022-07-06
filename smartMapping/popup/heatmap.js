/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../PopupTemplate.js";import r from"../../core/Error.js";import{fetchMessageBundle as a}from"../../intl/messages.js";import{getFieldAndExpressionInfos as t,getContentFromFieldInfos as n}from"./support/utils.js";async function o(e){const{layer:a,renderer:t}=e;await a.load();const n=t||a.renderer;if("heatmap"!==n.type)throw new r("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:a,renderer:n}}async function p(r){const[{renderer:p,layer:i},s]=await Promise.all([o(r),a("esri/smartMapping/t9n/smartMapping")]);if(!p.field)return null;const{fieldInfos:m}=await t({renderer:p,layer:i}),l=new e({content:await n(i,{fieldInfos:m}),fieldInfos:m});return{primaryTemplate:{name:"heatmap",title:s.heatmap,value:l},secondaryTemplates:[]}}export{p as getTemplates};
