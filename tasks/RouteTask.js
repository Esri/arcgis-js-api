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

define(["../geometry/support/normalizeUtils","../Graphic","../request","../core/promiseUtils","./support/NAMessage","./support/RouteResult","./Task","./support/NAServiceDescription","dojo/Deferred","dojo/_base/array","dojo/_base/lang"],function(e,r,s,t,o,i,a,n,l,u,p){var c=a.createSubclass([n],{declaredClass:"esri.tasks.RouteTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solve",e}},url:{}},solve:function(r,o){var i=[],a=[],n={},l={};return r.stops&&r.stops.features&&this._collectGeometries(r.stops.features,a,"stops.features",n),r.barriers&&r.barriers.features&&this._collectGeometries(r.barriers.features,a,"barriers.features",n),r.polylineBarriers&&r.polylineBarriers.features&&this._collectGeometries(r.polylineBarriers.features,a,"polylineBarriers.features",n),r.polygonBarriers&&r.polygonBarriers.features&&this._collectGeometries(r.polygonBarriers.features,a,"polygonBarriers.features",n),e.normalizeCentralMeridian(a).then(function(e){for(var r in n){var s=n[r];i.push(r),l[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(l,i)?this.getServiceDescription():t.resolve({dontCheck:!0})}.bind(this)).then(function(e){e.hasZ||e.dontCheck||this._dropZValuesOffInputGeometry(l,i);var t=this._encode(p.mixin({},this.parsedUrl.query,{f:"json"},r.toJSON(l))),a={query:t,callbackParamName:"callback"};return(this.requestOptions||o)&&(a=p.mixin({},this.requestOptions,o,a)),s(this.parsedUrl.path,a)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,s,t){t[s]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){var s,t,a=[],n=[],l=e.data,p=l.directions||[],c=l.routes?l.routes.features:[],f=l.stops?l.stops.features:[],h=l.barriers?l.barriers.features:[],m=l.polygonBarriers?l.polygonBarriers.features:[],y=l.polylineBarriers?l.polylineBarriers.features:[],d=l.messages,g="esri.tasks.RouteTask.NULL_ROUTE_NAME",b=u.forEach,B=u.indexOf,v=!0,R=l.routes&&l.routes.spatialReference||l.stops&&l.stops.spatialReference||l.barriers&&l.barriers.spatialReference||l.polygonBarriers&&l.polygonBarriers.spatialReference||l.polylineBarriers&&l.polylineBarriers.spatialReference;b(p,function(e){a.push(s=e.routeName),n[s]={directions:e}}),b(c,function(e){-1===B(a,s=e.attributes.Name)&&(a.push(s),n[s]={}),n[s].route=e}),b(f,function(e){t=e.attributes,-1===B(a,s=t.RouteName||g)&&(a.push(s),n[s]={}),s!==g&&(v=!1),void 0===n[s].stops&&(n[s].stops=[]),n[s].stops.push(e)}),f.length>0&&v===!0&&(n[a[0]].stops=n[g].stops,delete n[g],a.splice(u.indexOf(a,g),1));var _=[];b(a,function(e,r){n[e].routeName=e===g?null:e,n[e].spatialReference=R,_.push(i.fromJSON(n[e]))});var N=function(e){return b(e,function(s,t){s.geometry&&(s.geometry.spatialReference=R),e[t]=r.fromJSON(s)}),e};return b(d,function(e,r){d[r]=o.fromJSON(e)}),{routeResults:_,barriers:N(h),polygonBarriers:N(m),polylineBarriers:N(y),messages:d}}});return c});