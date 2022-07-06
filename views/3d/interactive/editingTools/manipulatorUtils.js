/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e,isSome as o}from"../../../../core/maybe.js";import{getGraphicEffectiveElevationInfo as r}from"../../../../support/elevationInfoUtils.js";function t(o,t=r(o)){return"on-the-ground"!==t.mode&&!(e(o.geometry)||!o.geometry.hasZ)}function n(e,r){let t=null;const n=e.events.on("grab-changed",(n=>{o(t)&&(t.remove(),t=null),"start"===n.action?(t=e.disableDisplay(),r&&r(n)):r&&r(n)}));return{remove(){o(t)&&t.remove(),n.remove()}}}export{t as canMoveZ,n as disableDisplayOnGrab};
