/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../support/elevationInfoUtils"],(function(e,o,n){"use strict";function t(e,t=n.getGraphicEffectiveElevationInfo(e)){return"on-the-ground"!==t.mode&&!(o.isNone(e.geometry)||!e.geometry.hasZ)}function r(e,n){let t=null;const r=e.events.on("grab-changed",(r=>{o.isSome(t)&&(t.remove(),t=null),"start"===r.action?(t=e.disableDisplay(),n&&n(r)):n&&n(r)}));return{remove(){o.isSome(t)&&t.remove(),r.remove()}}}e.canMoveZ=t,e.disableDisplayOnGrab=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
