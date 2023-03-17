/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,n,a,r){"use strict";let o=function(t){function a(e,a,o){var i;(i=t.call(this,!0)||this)._view=e,i.pointerAction=a;const p=i._view.mapViewNavigation;return i._dragEventSeparator=new n.DragEventSeparator({start:(t,e)=>{p.rotate.begin(i._view,e.data),e.stopPropagation()},update:(t,e)=>{p.rotate.update(i._view,e.data),e.stopPropagation()},end:(t,e)=>{p.rotate.end(),e.stopPropagation()},condition:(t,e)=>1===t&&r.eventMatchesPointerAction(e.data,i.pointerAction)}),i.registerIncoming("drag",o,(t=>i._dragEventSeparator.handle(t))),i}return e._inheritsLoose(a,t),a}(a.InputHandler);t.DragRotate=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
