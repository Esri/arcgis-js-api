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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","../geometry/support/normalizeUtils","../Graphic","../request","./support/NAMessage","./support/RouteResult","./Task","./support/NAServiceDescription","dojo/Deferred","dojo/_base/array","dojo/_base/lang"],function(e,r,s,t,a,o,i,n,u,p,l){var c=e([i,n],{declaredClass:"esri.tasks.RouteTask",__msigns:[{n:"solve",c:1,a:[{i:0,p:["stops.features","barriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/solve",e},url:null,solve:function(e,r){var s=new u,a=new u,o=this.__msigns[0].a[0].p,i=r&&r.assembly&&r.assembly[0]||{};return this._isInputGeometryZAware(i,o)?a=this.getServiceDescription():a.resolve({dontCheck:!0}),a.then(l.hitch(this,function(r){r.HasZ||r.dontCheck||this._dropZValuesOffInputGeometry(i,o);var a=this._encode(l.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(i)));t(this.parsedUrl.path,{query:a,callbackParamName:"callback"}).then(l.hitch(this,function(e){s.resolve(this._handleSolveResponse(e))}),s.reject)},s.reject)),s.promise},_handleSolveResponse:function(e){var r,t,i=[],n=[],u=e.data,l=u.directions||[],c=u.routes?u.routes.features:[],f=u.stops?u.stops.features:[],h=u.barriers?u.barriers.features:[],d=u.polygonBarriers?u.polygonBarriers.features:[],m=u.polylineBarriers?u.polylineBarriers.features:[],y=u.messages,g="esri.tasks.RouteTask.NULL_ROUTE_NAME",v=p.forEach,R=p.indexOf,_=!0,b=u.routes&&u.routes.spatialReference||u.stops&&u.stops.spatialReference||u.barriers&&u.barriers.spatialReference||u.polygonBarriers&&u.polygonBarriers.spatialReference||u.polylineBarriers&&u.polylineBarriers.spatialReference;v(l,function(e){i.push(r=e.routeName),n[r]={directions:e}}),v(c,function(e){-1===R(i,r=e.attributes.Name)&&(i.push(r),n[r]={}),n[r].route=e}),v(f,function(e){t=e.attributes,-1===R(i,r=t.RouteName||g)&&(i.push(r),n[r]={}),r!==g&&(_=!1),void 0===n[r].stops&&(n[r].stops=[]),n[r].stops.push(e)}),f.length>0&&_===!0&&(n[i[0]].stops=n[g].stops,delete n[g],i.splice(p.indexOf(i,g),1));var N=[];v(i,function(e){n[e].routeName=e===g?null:e,n[e].spatialReference=b,N.push(o.fromJSON(n[e]))});var B=function(e){return v(e,function(r,t){r.geometry&&(r.geometry.spatialReference=b),e[t]=s.fromJSON(r)}),e};return v(y,function(e,r){y[r]=a.fromJSON(e)}),{routeResults:N,barriers:B(h),polygonBarriers:B(d),polylineBarriers:B(m),messages:y}}});return r._createWrappers(c),c});