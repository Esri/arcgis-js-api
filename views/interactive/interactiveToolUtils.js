/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/Logger","./interfaces"],(function(e,t,o){"use strict";function i(e){return[e.on("before-add",(o=>{const i=o.item;if(null==i||e.includes(i))return t.getLogger("esri.views.interactive.interactiveToolUtils").warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),void o.preventDefault();i.onAdd()})),e.on("after-remove",(e=>{const t=e.item;t.active&&(t.view.activeTool=null),t.destroy()}))]}function l(e){return e.visible&&e.getEditableFlag(o.EditableFlag.USER)&&e.getEditableFlag(o.EditableFlag.MANAGER)}e.areToolManipulatorsEditable=l,e.getToolCollectionHandles=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
