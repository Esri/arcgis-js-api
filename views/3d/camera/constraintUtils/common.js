/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3"],(function(n,t){"use strict";function i(n,t){return 0!=(n&t)}function a(n,t,i,a,e,o){0!==n&&(i?(o.min=Math.min(o.min,t),o.max=Math.max(o.max,t)):null!=a?(o.min-=Math.max(0,(t-o.min)*(1-a)),o.max+=Math.max(0,(t-o.max)*(1-a))):e&&(o.min-=Math.max(0,t-o.min-e),o.max+=Math.max(0,t-o.max-e)))}const e={selection:0,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};function o(n,i,a,e){return i=i||n.viewForward,t.copy(e,i),t.scale(e,e,Math.sign(t.dot(i,a))),e}n.adjustRangeForInteraction=a,n.defaultApplyOptions=e,n.hasConstraintType=i,n.interactionDirectionTowardsConstraintMinimization=o,Object.defineProperty(n,"__esModule",{value:!0})}));
