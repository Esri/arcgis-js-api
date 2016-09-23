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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../geometry/support/normalizeUtils","../Graphic","../request","./support/NAMessage","./support/RouteResult","./Task","./support/NAServiceDescription","dojo/Deferred","dojo/_base/array","dojo/_base/lang"],function(e,r,s,t,a,o,i,n,p,u){var l=o.createSubclass([i],{declaredClass:"esri.tasks.RouteTask",__msigns:[{n:"solve",c:1,a:[{i:0,p:["stops.features","barriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solve",e}},url:{}},solve:function(e,r){var t=new n,a=new n,o=this.__msigns[0].a[0].p,i=r&&r.assembly&&r.assembly[0]||{};return this._isInputGeometryZAware(i,o)?a=this.getServiceDescription():a.resolve({dontCheck:!0}),a.then(u.hitch(this,function(r){r.hasZ||r.dontCheck||this._dropZValuesOffInputGeometry(i,o);var a=this._encode(u.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(i)));s(this.parsedUrl.path,{query:a,callbackParamName:"callback"}).then(u.hitch(this,function(e){t.resolve(this._handleSolveResponse(e))}),t.reject)}),t.reject),t.promise},_handleSolveResponse:function(e){var s,o,i=[],n=[],u=e.data,l=u.directions||[],c=u.routes?u.routes.features:[],f=u.stops?u.stops.features:[],h=u.barriers?u.barriers.features:[],d=u.polygonBarriers?u.polygonBarriers.features:[],m=u.polylineBarriers?u.polylineBarriers.features:[],y=u.messages,g="esri.tasks.RouteTask.NULL_ROUTE_NAME",v=p.forEach,R=p.indexOf,b=!0,_=u.routes&&u.routes.spatialReference||u.stops&&u.stops.spatialReference||u.barriers&&u.barriers.spatialReference||u.polygonBarriers&&u.polygonBarriers.spatialReference||u.polylineBarriers&&u.polylineBarriers.spatialReference;v(l,function(e){i.push(s=e.routeName),n[s]={directions:e}}),v(c,function(e){-1===R(i,s=e.attributes.Name)&&(i.push(s),n[s]={}),n[s].route=e}),v(f,function(e){o=e.attributes,-1===R(i,s=o.RouteName||g)&&(i.push(s),n[s]={}),s!==g&&(b=!1),void 0===n[s].stops&&(n[s].stops=[]),n[s].stops.push(e)}),f.length>0&&b===!0&&(n[i[0]].stops=n[g].stops,delete n[g],i.splice(p.indexOf(i,g),1));var N=[];v(i,function(e,r){n[e].routeName=e===g?null:e,n[e].spatialReference=_,N.push(a.fromJSON(n[e]))});var B=function(e){return v(e,function(s,t){s.geometry&&(s.geometry.spatialReference=_),e[t]=r.fromJSON(s)}),e};return v(y,function(e,r){y[r]=t.fromJSON(e)}),{routeResults:N,barriers:B(h),polygonBarriers:B(d),polylineBarriers:B(m),messages:y}}});return e._createWrappers(l),l});