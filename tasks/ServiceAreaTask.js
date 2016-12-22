// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","../request","../core/promiseUtils","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ServiceAreaSolveResult"],function(e,r,t,s,i,a,o,n){var l=a.createSubclass([o],{declaredClass:"esri.tasks.ServiceAreaTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveServiceArea",e}},url:{}},solve:function(r,a){var o=[],n=[],l={},u={};return r.facilities&&r.facilities.features&&this._collectGeometries(r.facilities.features,n,"facilities.features",l),r.pointBarriers&&r.pointBarriers.features&&this._collectGeometries(r.pointBarriers.features,n,"pointBarriers.features",l),r.polylineBarriers&&r.polylineBarriers.features&&this._collectGeometries(r.polylineBarriers.features,n,"polylineBarriers.features",l),r.polygonBarriers&&r.polygonBarriers.features&&this._collectGeometries(r.polygonBarriers.features,n,"polygonBarriers.features",l),i.normalizeCentralMeridian(n).then(function(e){for(var r in l){var t=l[r];o.push(r),u[r]=e.slice(t[0],t[1])}return this._isInputGeometryZAware(u,o)?this.getServiceDescription():s.resolve({dontCheck:!0})}.bind(this)).then(function(s){s.hasZ||s.dontCheck||this._dropZValuesOffInputGeometry(u,o);var i=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},r.toJSON(u))),n={query:i,callbackParamName:"callback"};return(this.requestOptions||a)&&(n=e.mixin({},this.requestOptions,a,n)),t(this.parsedUrl.path,n)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){return n.fromJSON(e.data)}});return l});