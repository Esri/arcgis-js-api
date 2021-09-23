/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request","../core/queryUtils","../geometry/support/normalizeUtils","./networkService","./utils"],(function(e,r,t,s,i,o,a){"use strict";const n=s.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function l(e,r,t){return u.apply(this,arguments)}function u(){return(u=r._asyncToGenerator((function*(e,r,s){const l=[],u=[],c={},p={},m=a.parseUrl(e),{path:f}=m;r.stops&&r.stops.features&&o.collectGeometries(r.stops.features,u,"stops.features",c),r.pointBarriers&&r.pointBarriers.features&&o.collectGeometries(r.pointBarriers.features,u,"pointBarriers.features",c),r.polylineBarriers&&r.polylineBarriers.features&&o.collectGeometries(r.polylineBarriers.features,u,"polylineBarriers.features",c),r.polygonBarriers&&r.polygonBarriers.features&&o.collectGeometries(r.polygonBarriers.features,u,"polygonBarriers.features",c);const y=yield i.normalizeCentralMeridian(u);for(const t in c){const e=c[t];l.push(t),p[t]=y.slice(e[0],e[1])}if(o.isInputGeometryZAware(p,l)){let e=null;try{e=yield o.fetchServiceDescription(f,r.apiKey,s)}catch{}e&&!e.hasZ&&o.dropZValuesOffInputGeometry(p,l)}for(const t in p)p[t].forEach(((e,s)=>{r.get(t)[s].geometry=e}));const d={...s,query:{...m.query,...n.toQueryParams(r),f:"json"}},B=f.endsWith("/solve")?f:`${f}/solve`,b=yield t(B,d);return o.handleSolveResponse(b)}))).apply(this,arguments)}e.solve=l,Object.defineProperty(e,"__esModule",{value:!0})}));
