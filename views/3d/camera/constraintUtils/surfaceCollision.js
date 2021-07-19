/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../intersectionUtils"],(function(e,t,n,r){"use strict";function c(e,n,c=0){const i=e.state.constraints;if(!i.collision.enabled)return!1;const l=r.surfaceElevationBelowRenderLocation(e,n.eye),a=e.renderCoordsHelper.getAltitude(n.eye),u=l+i.collision.elevationMargin;if(a>=u)return!1;const d=t.length(n.eye);if(t.subtract(o,n.center,n.eye),n.eye=e.renderCoordsHelper.setAltitude(s,u,n.eye),1===c)n.center=t.add(o,n.eye,o);else if(2===c){const e=(d-a+u)/d;n.center=t.scale(o,n.center,e)}return!0}const o=n.create(),s=n.create();e.applySurfaceCollisionConstraint=c,Object.defineProperty(e,"__esModule",{value:!0})}));
