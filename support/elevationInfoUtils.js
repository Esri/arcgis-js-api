/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e,isSome as t,unwrapOr as n}from"../core/maybe.js";import{getMetersPerUnit as o}from"../symbols/support/unitConversionUtils.js";function r(t,n){return e(n)||!n.mode?t?"absolute-height":"on-the-ground":n.mode}function s(e,n){return r(!!t(e)&&e.hasZ,n)}function i(e){const t=l(e);return s(e.geometry,t)}function u(e){const r=l(e),i=s(e.geometry,r);return{mode:i,offset:t(r)&&"on-the-ground"!==i?n(r.offset,0)*o(n(r.unit,"meters")):0}}function a(e){if("on-the-ground"===i(e))return!1;const n=l(e),o=t(n)&&n.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!o||"0"===o)}function l(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function c(o,r,s){if(e(s)||!s.mode)return;const i=o.hasZ?o.z:0,u=t(s.offset)?s.offset:0;switch(s.mode){case"absolute-height":return i-u;case"on-the-ground":return 0;case"relative-to-ground":return i-(n(r.elevationProvider.getElevation(o.x,o.y,o.z,o.spatialReference,"ground"),0)+u);case"relative-to-scene":return i-(n(r.elevationProvider.getElevation(o.x,o.y,o.z,o.spatialReference,"scene"),0)+u)}}function f(e,t,n,o=null){return g(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,o)}function v(e,t,n,o,r=null){return g(e,t[0],t[1],t.length>2?t[2]:0,n,o,r)}function g(n,o,r,s,i,u,a=null){if(e(u))return;const l=t(a)?a.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:c}=d(o,r,s,i,n,u);return h(c,o,r,s,i,n,a,l)}function d(e,o,r,s,i,u){const a=t(u.offset)?u.offset:0;switch(u.mode){case"absolute-height":return{absoluteZ:r+a,elevation:0};case"on-the-ground":{const t=n(i.elevationProvider.getElevation(e,o,0,s,"ground"),0);return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const t=n(i.elevationProvider.getElevation(e,o,r,s,"ground"),0);return{absoluteZ:r+t+a,elevation:t}}case"relative-to-scene":{const t=n(i.elevationProvider.getElevation(e,o,r,s,"scene"),0);return{absoluteZ:r+t+a,elevation:t}}}}function h(e,o,r,s,i,u,a,l){const c=t(a)&&t(a.offset)?a.offset:0;switch(l){case"absolute-height":return e-c;case"relative-to-ground":return e-(n(u.elevationProvider.getElevation(o,r,s,i,"ground"),0)+c);case"relative-to-scene":return e-(n(u.elevationProvider.getElevation(o,r,s,i,"scene"),0)+c)}}const m={mode:"absolute-height",offset:0};export{m as absoluteHeightElevationInfo,f as getConvertedElevation,v as getConvertedElevationFromVector,r as getEffectiveElevationMode,s as getGeometryEffectiveElevationMode,u as getGraphicEffectiveElevationInfo,i as getGraphicEffectiveElevationMode,c as getZForElevationMode,a as hasGraphicFeatureExpressionInfo,d as zValueInAbsoluteHeightMode};