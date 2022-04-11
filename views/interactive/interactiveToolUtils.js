/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./interfaces"],(function(e,t,o){"use strict";const i=t.getLogger("esri.views.interactive.interactiveToolUtils");function l(e){return[e.on("before-add",(t=>{const o=t.item;if(null==o||e.includes(o))return i.warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),void t.preventDefault()})),e.on("after-remove",(e=>{const t=e.item;t.visible=!1,t.active&&(t.view.activeTool=null),t.destroy()}))]}function n(e){return e.visible&&e.getEditableFlag(o.EditableFlag.USER)&&e.getEditableFlag(o.EditableFlag.MANAGER)}e.areToolManipulatorsEditable=n,e.getToolCollectionHandles=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
