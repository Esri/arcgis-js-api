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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/promiseUtils","../core/queryUtils","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./mixins/NAServiceDescription","./support/ClosestFacilitySolveResult"],(function(e,r,t,i,s,o,n,a,u,c,l,p,f){var m=a.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return i(r,e),r.prototype.solve=function(e,r){var i=this,s=[],a=[],u={},l={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,a,"incidents.features",u),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",u),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",u),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",u),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",u),c.normalizeCentralMeridian(a).then((function(e){for(var r in u){var t=u[r];s.push(r),l[r]=e.slice(t[0],t[1])}return i._isInputGeometryZAware(l,s)?i.getServiceDescription():n.resolve({dontCheck:!0})})).then((function(n){("dontCheck"in n?n.dontCheck:n.hasZ)||i._dropZValuesOffInputGeometry(l,s);var a=function(r){l[r].forEach((function(t,i){e.get(r)[i].geometry=t}))};for(var u in l)a(u);var c={query:t({},i.parsedUrl.query,{f:"json"},m.toQueryParams(e))};return(i.requestOptions||r)&&(c=t({},i.requestOptions,r,c)),o(i.parsedUrl.path+"/solveClosestFacility",c)})).then((function(e){return f.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},s([u.property()],r.prototype,"url",void 0),r=s([u.subclass("esri.tasks.ClosestFacilityTask")],r)}(u.declared(p.NAServiceDescriptionMixin(l)))}));