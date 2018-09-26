// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../request","../core/lang","../core/promiseUtils","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ServiceAreaSolveResult"],function(e,r,t,i,s,o,n){return s.createSubclass([o],{declaredClass:"esri.tasks.ServiceAreaTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveServiceArea",e}},url:{}},solve:function(s,o){var n=[],a=[],l={},u={};return s.facilities&&s.facilities.features&&this._collectGeometries(s.facilities.features,a,"facilities.features",l),s.pointBarriers&&s.pointBarriers.features&&this._collectGeometries(s.pointBarriers.features,a,"pointBarriers.features",l),s.polylineBarriers&&s.polylineBarriers.features&&this._collectGeometries(s.polylineBarriers.features,a,"polylineBarriers.features",l),s.polygonBarriers&&s.polygonBarriers.features&&this._collectGeometries(s.polygonBarriers.features,a,"polygonBarriers.features",l),i.normalizeCentralMeridian(a).then(function(e){for(var r in l){var i=l[r];n.push(r),u[r]=e.slice(i[0],i[1])}return this._isInputGeometryZAware(u,n)?this.getServiceDescription():t.resolve({dontCheck:!0})}.bind(this)).then(function(t){t.hasZ||t.dontCheck||this._dropZValuesOffInputGeometry(u,n);var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},s.toJSON(u))),a={query:i};return(this.requestOptions||o)&&(a=r.mixin({},this.requestOptions,o,a)),e(this.parsedUrl.path,a)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){return n.fromJSON(e.data)}})});