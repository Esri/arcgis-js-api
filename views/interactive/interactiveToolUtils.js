/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,t){"use strict";function a(e){return[e.on("after-add",(e=>{const t=e.item;t.view&&t.view.ready&&!t.attached&&t.attach()})),e.on("after-remove",(e=>{const t=e.item;t.active&&(t.view.activeTool=null),t.attached&&t.detach()}))]}function o(e){return e.visible&&e.getEditableFlag(0)&&e.getEditableFlag(1)}function n(e){return t.isNone(e)?{}:"function"==typeof e?e():e}e.areToolManipulatorsEditable=o,e.evaluateToolConstructorArguments=n,e.getToolAttachDetachHandles=a,Object.defineProperty(e,"__esModule",{value:!0})}));
