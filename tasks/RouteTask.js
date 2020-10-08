// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../request","../core/promiseUtils","../core/queryUtils","../core/string","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./mixins/NAServiceDescription","./support/RouteResultsContainer"],(function(e,r,t,s,i,o,n,a,u,l,p,c){"use strict";var f=o.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype.solve=function(e,r){var o=this,a=[],l=[],p={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,l,"stops.features",p),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,l,"pointBarriers.features",p),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,l,"polylineBarriers.features",p),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,l,"polygonBarriers.features",p),u.normalizeCentralMeridian(l).then((function(e){for(var r in p){var t=p[r];a.push(r),c[r]=e.slice(t[0],t[1])}return o._isInputGeometryZAware(c,a)?o.getServiceDescription():i.resolve({dontCheck:!0})})).then((function(i){("dontCheck"in i?i.dontCheck:i.hasZ)||o._dropZValuesOffInputGeometry(c,a);var u=function(r){c[r].forEach((function(t,s){e.get(r)[s].geometry=t}))};for(var l in c)u(l);var p={query:t.__assign(t.__assign(t.__assign({},o.parsedUrl.query),{f:"json"}),f.toQueryParams(e))};(o.requestOptions||r)&&(p=t.__assign(t.__assign(t.__assign({},o.requestOptions),r),p));var m=o.parsedUrl.path,d=n.endsWith(m,"/solve")?m:m+"/solve";return s(d,p)})).then((function(e){return o._handleSolveResponse(e)}))},r.prototype._collectGeometries=function(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},r.prototype._handleSolveResponse=function(e){var r,t,s=[],i=[],o=e.data,n=o.directions,a=void 0===n?[]:n,u=o.routes,l=void 0===u?{}:u,p=l.features,f=void 0===p?[]:p,m=l.spatialReference,d=void 0===m?null:m,h=o.stops,y=void 0===h?{}:h,g=y.features,v=void 0===g?[]:g,_=y.spatialReference,B=void 0===_?null:_,R=o.barriers,b=o.polygonBarriers,N=o.polylineBarriers,A=o.messages,S="esri.tasks.RouteTask.NULL_ROUTE_NAME",k=!0,O=f&&d||v&&B||R&&R.spatialReference||b&&b.spatialReference||N&&N.spatialReference;a.forEach((function(e){s.push(r=e.routeName),i[r]={directions:e}})),f.forEach((function(e){-1===s.indexOf(r=e.attributes.Name)&&(s.push(r),i[r]={}),e.geometry&&(e.geometry.spatialReference=O),i[r].route=e})),v.forEach((function(e){t=e.attributes,-1===s.indexOf(r=t.RouteName||S)&&(s.push(r),i[r]={}),r!==S&&(k=!1),e.geometry&&(e.geometry.spatialReference=O),null==i[r].stops&&(i[r].stops=[]),i[r].stops.push(e)})),v.length>0&&!0===k&&(i[s[0]].stops=i[S].stops,delete i[S],s.splice(s.indexOf(S),1));var q=s.map((function(e){return i[e].routeName=e===S?null:e,i[e]}));return c.fromJSON({routeResults:q,pointBarriers:R,polygonBarriers:b,polylineBarriers:N,messages:A})},r=t.__decorate([a.subclass("esri.tasks.RouteTask")],r)}(p.NAServiceDescriptionMixin(l))}));