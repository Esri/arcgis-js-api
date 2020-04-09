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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/decorateHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/assignHelper","../request","../core/promiseUtils","../core/queryUtils","../core/string","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./mixins/NAServiceDescription","./support/RouteResultsContainer"],(function(e,r,t,s,o,i,a,n,u,l,p,c,f,m){var d=n.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});return function(e){function r(r){return e.call(this,r)||this}return s(r,e),r.prototype.solve=function(e,r){var t=this,s=[],n=[],l={},c={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,n,"stops.features",l),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,n,"pointBarriers.features",l),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,n,"polylineBarriers.features",l),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,n,"polygonBarriers.features",l),p.normalizeCentralMeridian(n).then((function(e){for(var r in l){var o=l[r];s.push(r),c[r]=e.slice(o[0],o[1])}return t._isInputGeometryZAware(c,s)?t.getServiceDescription():a.resolve({dontCheck:!0})})).then((function(a){("dontCheck"in a?a.dontCheck:a.hasZ)||t._dropZValuesOffInputGeometry(c,s);var n=function(r){c[r].forEach((function(t,s){e.get(r)[s].geometry=t}))};for(var l in c)n(l);var p={query:o({},t.parsedUrl.query,{f:"json"},d.toQueryParams(e))};(t.requestOptions||r)&&(p=o({},t.requestOptions,r,p));var f=t.parsedUrl.path,m=u.endsWith(f,"/solve")?f:f+"/solve";return i(m,p)})).then((function(e){return t._handleSolveResponse(e)}))},r.prototype._collectGeometries=function(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},r.prototype._handleSolveResponse=function(e){var r,t,s=[],o=[],i=e.data,a=i.directions,n=void 0===a?[]:a,u=i.routes,l=void 0===u?{}:u,p=l.features,c=void 0===p?[]:p,f=l.spatialReference,d=void 0===f?null:f,h=i.stops,y=void 0===h?{}:h,v=y.features,g=void 0===v?[]:v,B=y.spatialReference,R=void 0===B?null:B,b=i.barriers,N=i.polygonBarriers,S=i.polylineBarriers,A=i.messages,_="esri.tasks.RouteTask.NULL_ROUTE_NAME",k=!0,E=c&&d||g&&R||b&&b.spatialReference||N&&N.spatialReference||S&&S.spatialReference;n.forEach((function(e){s.push(r=e.routeName),o[r]={directions:e}})),c.forEach((function(e){-1===s.indexOf(r=e.attributes.Name)&&(s.push(r),o[r]={}),e.geometry&&(e.geometry.spatialReference=E),o[r].route=e})),g.forEach((function(e){t=e.attributes,-1===s.indexOf(r=t.RouteName||_)&&(s.push(r),o[r]={}),r!==_&&(k=!1),e.geometry&&(e.geometry.spatialReference=E),null==o[r].stops&&(o[r].stops=[]),o[r].stops.push(e)})),g.length>0&&!0===k&&(o[s[0]].stops=o[_].stops,delete o[_],s.splice(s.indexOf(_),1));var O=s.map((function(e){return o[e].routeName=e===_?null:e,o[e]}));return m.fromJSON({routeResults:O,pointBarriers:b,polygonBarriers:N,polylineBarriers:S,messages:A})},r=t([l.subclass("esri.tasks.RouteTask")],r)}(l.declared(f.NAServiceDescriptionMixin(c)))}));