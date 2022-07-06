/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Logger.js";import{EditableFlag as t}from"./interfaces.js";const o=e.getLogger("esri.views.interactive.interactiveToolUtils");function i(e){return[e.on("before-add",(t=>{const i=t.item;if(null==i||e.includes(i))return o.warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),void t.preventDefault();i.onAdd()})),e.on("after-remove",(e=>{const t=e.item;t.visible=!1,t.active&&(t.view.activeTool=null),t.destroy()}))]}function r(e){return e.visible&&e.getEditableFlag(t.USER)&&e.getEditableFlag(t.MANAGER)}export{r as areToolManipulatorsEditable,i as getToolCollectionHandles};
