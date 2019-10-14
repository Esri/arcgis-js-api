// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/asyncUtils","../core/promiseUtils","../core/queryUtils","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./mixins/NAServiceDescription","./support/ClosestFacilitySolveResult"],function(e,r,t,i,s,o,a,n,u,c,l,p,f,m){var y=u.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this)||this;return t.url=null,t}return i(r,e),r.prototype.solve=function(e,r){var i=this,s=[],u=[],c={},p={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,u,"incidents.features",c),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,u,"facilities.features",c),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,u,"pointBarriers.features",c),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,u,"polylineBarriers.features",c),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,u,"polygonBarriers.features",c),a.safeCast(l.normalizeCentralMeridian(u)).then(function(e){for(var r in c){var t=c[r];s.push(r),p[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(p,s)?a.safeCast(i.getServiceDescription()):n.resolve({dontCheck:!0})}).then(function(a){("dontCheck"in a?a.dontCheck:a.hasZ)||i._dropZValuesOffInputGeometry(p,s);for(var n in p)!function(r){p[r].forEach(function(t,i){e.get(r)[i].geometry=t})}(n);var u={query:t({},i.parsedUrl.query,{f:"json"},y.toQueryParams(e))};return(i.requestOptions||r)&&(u=t({},i.requestOptions,r,u)),o(i.parsedUrl.path+"/solveClosestFacility",u)}).then(function(e){return m.fromJSON(e.data)})},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},s([c.property()],r.prototype,"url",void 0),r=s([c.subclass("esri.tasks.ClosestFacilityTask")],r)}(c.declared(f.NAServiceDescriptionMixin(p)))});