/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/mathUtils","../../../../chunks/vec3"],(function(t,n,i){"use strict";function a(t,n){return 0!=(t&n)}function e(t,n,i,a,e,o){0!==t&&(i?(o.min=Math.min(o.min,n),o.max=Math.max(o.max,n)):null!=a?(o.min-=Math.max(0,(n-o.min)*(1-a)),o.max+=Math.max(0,(n-o.max)*(1-a))):e&&(o.min-=Math.max(0,n-o.min-e),o.max+=Math.max(0,n-o.max-e)))}const o={selection:0,interactionType:0,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};function r(t,a,e,o){return a=a||t.viewForward,i.copy(o,a),i.scale(o,o,n.sign(i.dot(a,e))),o}t.adjustRangeForInteraction=e,t.defaultApplyOptions=o,t.hasConstraintType=a,t.interactionDirectionTowardsConstraintMinimization=r,Object.defineProperty(t,"__esModule",{value:!0})}));
