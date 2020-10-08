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

define(["require","exports","tslib","../request","../core/promiseUtils","../core/queryUtils","../core/accessorSupport/decorators","../geometry/support/normalizeUtils","./Task","./mixins/NAServiceDescription","./support/ClosestFacilitySolveResult"],(function(e,r,t,i,s,n,a,o,u,c,l){"use strict";var p=n.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.url=null,t}return t.__extends(r,e),r.prototype.solve=function(e,r){var n=this,a=[],u=[],c={},f={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,u,"incidents.features",c),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,u,"facilities.features",c),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,u,"pointBarriers.features",c),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,u,"polylineBarriers.features",c),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,u,"polygonBarriers.features",c),o.normalizeCentralMeridian(u).then((function(e){for(var r in c){var t=c[r];a.push(r),f[r]=e.slice(t[0],t[1])}return n._isInputGeometryZAware(f,a)?n.getServiceDescription():s.resolve({dontCheck:!0})})).then((function(s){("dontCheck"in s?s.dontCheck:s.hasZ)||n._dropZValuesOffInputGeometry(f,a);var o=function(r){f[r].forEach((function(t,i){e.get(r)[i].geometry=t}))};for(var u in f)o(u);var c={query:t.__assign(t.__assign(t.__assign({},n.parsedUrl.query),{f:"json"}),p.toQueryParams(e))};return(n.requestOptions||r)&&(c=t.__assign(t.__assign(t.__assign({},n.requestOptions),r),c)),i(n.parsedUrl.path+"/solveClosestFacility",c)})).then((function(e){return l.fromJSON(e.data)}))},r.prototype._collectGeometries=function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach((function(e){r.push(e.geometry)}))},t.__decorate([a.property()],r.prototype,"url",void 0),r=t.__decorate([a.subclass("esri.tasks.ClosestFacilityTask")],r)}(c.NAServiceDescriptionMixin(u))}));