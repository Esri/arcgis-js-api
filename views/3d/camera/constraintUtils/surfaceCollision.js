/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{l as e,b as E,a as t,g as n}from"../../../../chunks/vec3.js";import{c as r}from"../../../../chunks/vec3f64.js";import{surfaceElevationBelowRenderLocation as s}from"../intersectionUtils.js";function o(r,o,l=i.EYE){const a=r.state.constraints;if(!a.collision.enabled)return!1;const N=s(r,o.eye),A=r.renderCoordsHelper.getAltitude(o.eye),C=N+a.collision.elevationMargin;if(A>=C)return!1;const f=e(o.eye);if(E(c,o.center,o.eye),o.eye=r.renderCoordsHelper.setAltitude(_,C,o.eye),l===i.EYE_AND_CENTER)o.center=t(c,o.eye,c);else if(l===i.EYE_AND_CENTER_SCALE){const e=(f-A+C)/f;o.center=n(c,o.center,e)}return!0}var i;!function(e){e[e.EYE=0]="EYE",e[e.EYE_AND_CENTER=1]="EYE_AND_CENTER",e[e.EYE_AND_CENTER_SCALE=2]="EYE_AND_CENTER_SCALE"}(i||(i={}));const c=r(),_=r();export{i as Mode,o as applySurfaceCollisionConstraint};
