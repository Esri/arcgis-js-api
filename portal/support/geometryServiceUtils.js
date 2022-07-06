/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../config.js";import e from"../../core/Error.js";import t from"../Portal.js";import{project as o}from"../../rest/geometryService/project.js";import i from"../../rest/support/ProjectParameters.js";async function n(o=null,i){if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!o)throw new e("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||t.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new e("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new i;s.geometries=[r],s.outSpatialReference=t;const m=await o(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new e("internal:geometry-service-projection-failed")}export{n as getGeometryServiceURL,a as projectGeometry};
