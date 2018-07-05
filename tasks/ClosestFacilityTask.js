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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../request","../core/lang","../core/promiseUtils","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ClosestFacilitySolveResult"],function(e,r,t,s,i,n,o){return i.createSubclass([n],{declaredClass:"esri.tasks.ClosestFacilityTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveClosestFacility",e}},url:{}},solve:function(i,n){var o=[],a=[],l={},c={};return i.incidents&&i.incidents.features&&this._collectGeometries(i.incidents.features,a,"incidents.features",l),i.facilities&&i.facilities.features&&this._collectGeometries(i.facilities.features,a,"facilities.features",l),i.pointBarriers&&i.pointBarriers.features&&this._collectGeometries(i.pointBarriers.features,a,"pointBarriers.features",l),i.polylineBarriers&&i.polylineBarriers.features&&this._collectGeometries(i.polylineBarriers.features,a,"polylineBarriers.features",l),i.polygonBarriers&&i.polygonBarriers.features&&this._collectGeometries(i.polygonBarriers.features,a,"polygonBarriers.features",l),s.normalizeCentralMeridian(a).then(function(e){for(var r in l){var s=l[r];o.push(r),c[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(c,o)?this.getServiceDescription():t.resolve({dontCheck:!0})}.bind(this)).then(function(t){t.hasZ||t.dontCheck||this._dropZValuesOffInputGeometry(c,o);var s=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},i.toJSON(c))),a={query:s,callbackParamName:"callback"};return(this.requestOptions||n)&&(a=r.mixin({},this.requestOptions,n,a)),e(this.parsedUrl.path,a)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){return o.fromJSON(e.data)}})});