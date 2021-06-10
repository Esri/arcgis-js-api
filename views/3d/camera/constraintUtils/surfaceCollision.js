/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../../../../chunks/vec3","../intersectionUtils"],(function(e,t,n,r){"use strict";function i(e,t,i=0){const c=e.state.constraints;if(!c.collision.enabled)return!1;const s=r.surfaceElevationBelowRenderLocation(e,t.eye),l=e.renderCoordsHelper.getAltitude(t.eye),a=s+c.collision.elevationMargin;if(l>=a)return!1;const u=n.length(t.eye);if(n.subtract(o,t.center,t.eye),e.renderCoordsHelper.setAltitude(a,t.eye),1===i)n.add(t.center,t.eye,o);else if(2===i){const e=(u-l+a)/u;n.scale(t.center,t.center,e)}return t.markViewDirty(),!0}const o=t.create();e.applySurfaceCollisionConstraint=i,Object.defineProperty(e,"__esModule",{value:!0})}));
