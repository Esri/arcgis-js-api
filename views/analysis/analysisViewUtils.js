/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{removeMaybe as o,isNone as t}from"../../core/maybe.js";import{createTask as i,onAbort as e}from"../../core/promiseUtils.js";import{watch as n,whenOnce as r,syncAndInitial as a}from"../../core/reactiveUtils.js";function s(t,n,a){const s=v(t,n);t.view.activeTool=s;let c=e(a,(()=>l(t,n)));return i((async i=>{await r((()=>!s.active),i),c=o(c),l(t,n)}),a)}function c(o,t){return n((()=>o.interactive),(()=>l(o,t)),a)}function l(o,t){o.interactive?v(o,t):m(o)}function v(o,t){m(o);const{view:i,analysis:e}=o,n=new t({view:i,analysis:e,analysisViewData:o});return o.tool=n,i.tools.add(n),n}function m(o){const{view:i,tool:e}=o;t(e)||(i.tools.remove(e),o.tool=null)}export{s as activateTemporaryAnalysisViewTool,c as connectAnalysisViewToTool,m as removeAnalysisViewTool};
