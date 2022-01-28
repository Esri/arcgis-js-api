/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,n,a,r){"use strict";let o=function(t){function a(e,a,o){var i;(i=t.call(this,!0)||this).view=e,i.pointerAction=a;const p=i.view.mapViewNavigation;return i.dragEventSeparator=new n.DragEventSeparator({start:(t,e)=>{p.rotate.begin(i.view,e.data),e.stopPropagation()},update:(t,e)=>{p.rotate.update(i.view,e.data),e.stopPropagation()},end:(t,e)=>{p.rotate.end(),e.stopPropagation()},condition:(t,e)=>1===t&&r.eventMatchesPointerAction(e.data,i.pointerAction)}),i.registerIncoming("drag",o,(t=>i.dragEventSeparator.handle(t))),i}return e._inheritsLoose(a,t),a}(a.InputHandler);t.DragRotate=o,Object.defineProperty(t,"__esModule",{value:!0})}));
