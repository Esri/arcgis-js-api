/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/jsonMap"],(function(e,t){"use strict";const o=new t.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});e.analyzeRings=function(e,t,o){const n=[],i=[];let r=0,l=0;for(const s of e){const e=l;let c=s[0][0],y=s[0][1];n[l++]=c,n[l++]=y;let p=0;for(let e=1;e<s.length;++e){const t=c,o=y;c=s[e][0],y=s[e][1],p+=y*t-c*o,n[l++]=c,n[l++]=y}t(p/2),p>0?(e-r>0&&(o(r,e,n,i),r=e),i.length=0):p<0&&e-r>0?i.push(.5*(e-r)):l=e}l-r>0&&o(r,l,n,i)},e.toJSONGeometryType=function(e){return o.toJSON(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
