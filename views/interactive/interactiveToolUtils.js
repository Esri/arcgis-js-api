/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./interfaces"],(function(e,t,o){"use strict";function l(e){return[e.on("before-add",(o=>{const l=o.item;if(null==l||e.includes(l))return t.getLogger("esri.views.interactive.interactiveToolUtils").warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),void o.preventDefault();l.onAdd()})),e.on("after-remove",(e=>{const t=e.item;t.active&&(t.view.activeTool=null),t.destroy()}))]}function i(e){return e.visible&&null!=e.getEditableFlag&&e.getEditableFlag(o.EditableFlag.USER)&&e.getEditableFlag(o.EditableFlag.MANAGER)}e.areToolManipulatorsEditable=i,e.getToolCollectionHandles=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
