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

define(["../request","../core/lang","../core/promiseUtils","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ServiceAreaSolveResult"],function(e,r,t,i,s,a,o){return s.createSubclass([a],{declaredClass:"esri.tasks.ServiceAreaTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveServiceArea",e}},url:{}},solve:function(s,a){var o=[],n=[],l={},c={};return s.facilities&&s.facilities.features&&this._collectGeometries(s.facilities.features,n,"facilities.features",l),s.pointBarriers&&s.pointBarriers.features&&this._collectGeometries(s.pointBarriers.features,n,"pointBarriers.features",l),s.polylineBarriers&&s.polylineBarriers.features&&this._collectGeometries(s.polylineBarriers.features,n,"polylineBarriers.features",l),s.polygonBarriers&&s.polygonBarriers.features&&this._collectGeometries(s.polygonBarriers.features,n,"polygonBarriers.features",l),i.normalizeCentralMeridian(n).then(function(e){for(var r in l){var i=l[r];o.push(r),c[r]=e.slice(i[0],i[1])}return this._isInputGeometryZAware(c,o)?this.getServiceDescription():t.resolve({dontCheck:!0})}.bind(this)).then(function(t){t.hasZ||t.dontCheck||this._dropZValuesOffInputGeometry(c,o);var i=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},s.toJSON(c))),n={query:i,callbackParamName:"callback"};return(this.requestOptions||a)&&(n=r.mixin({},this.requestOptions,a,n)),e(this.parsedUrl.path,n)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,t,i){i[t]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){return o.fromJSON(e.data)}})});