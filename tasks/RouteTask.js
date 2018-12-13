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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["../geometry/support/normalizeUtils","../Graphic","../request","../core/lang","../core/promiseUtils","./support/NAMessage","./support/RouteResult","./Task","./support/NAServiceDescription"],function(e,r,s,t,o,i,a,n,l){return n.createSubclass([l],{declaredClass:"esri.tasks.RouteTask",properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return t.endsWith(e.path,"/solve")||(e.path+="/solve"),e}},url:{}},solve:function(r,i){var a=[],n=[],l={},u={};return r.stops&&r.stops.features&&this._collectGeometries(r.stops.features,n,"stops.features",l),r.barriers&&r.barriers.features&&this._collectGeometries(r.barriers.features,n,"barriers.features",l),r.polylineBarriers&&r.polylineBarriers.features&&this._collectGeometries(r.polylineBarriers.features,n,"polylineBarriers.features",l),r.polygonBarriers&&r.polygonBarriers.features&&this._collectGeometries(r.polygonBarriers.features,n,"polygonBarriers.features",l),e.normalizeCentralMeridian(n).then(function(e){for(var r in l){var s=l[r];a.push(r),u[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(u,a)?this.getServiceDescription():o.resolve({dontCheck:!0})}.bind(this)).then(function(e){e.hasZ||e.dontCheck||this._dropZValuesOffInputGeometry(u,a);var o=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"},r.toJSON(u))),n={query:o};return(this.requestOptions||i)&&(n=t.mixin({},this.requestOptions,i,n)),s(this.parsedUrl.path,n)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(e,r,s,t){t[s]=[r.length,r.length+e.length],e.forEach(function(e){r.push(e.geometry)})},_handleSolveResponse:function(e){var s,t,o=[],n=[],l=e.data,u=l.directions||[],p=l.routes?l.routes.features:[],f=l.stops?l.stops.features:[],c=l.barriers?l.barriers.features:[],h=l.polygonBarriers?l.polygonBarriers.features:[],y=l.polylineBarriers?l.polylineBarriers.features:[],m=l.messages,d="esri.tasks.RouteTask.NULL_ROUTE_NAME",g=!0,B=l.routes&&l.routes.spatialReference||l.stops&&l.stops.spatialReference||l.barriers&&l.barriers.spatialReference||l.polygonBarriers&&l.polygonBarriers.spatialReference||l.polylineBarriers&&l.polylineBarriers.spatialReference;u.forEach(function(e){o.push(s=e.routeName),n[s]={directions:e}}),p.forEach(function(e){-1===o.indexOf(s=e.attributes.Name)&&(o.push(s),n[s]={}),n[s].route=e}),f.forEach(function(e){t=e.attributes,-1===o.indexOf(s=t.RouteName||d)&&(o.push(s),n[s]={}),s!==d&&(g=!1),void 0===n[s].stops&&(n[s].stops=[]),n[s].stops.push(e)}),f.length>0&&!0===g&&(n[o[0]].stops=n[d].stops,delete n[d],o.splice(o.indexOf(d),1));var v=[];o.forEach(function(e,r){n[e].routeName=e===d?null:e,n[e].spatialReference=B,v.push(a.fromJSON(n[e]))});var R=function(e){return(e||[]).forEach(function(s,t){s.geometry&&(s.geometry.spatialReference=B),e[t]=r.fromJSON(s)}),e};return(m||[]).forEach(function(e,r){m[r]=i.fromJSON(e)}),{routeResults:v,barriers:R(c),polygonBarriers:R(h),polylineBarriers:R(y),messages:m}}})});