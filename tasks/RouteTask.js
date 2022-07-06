// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../request","../geometry/normalizeUtils","./Task","./RouteResult","./NAMessage","./NAServiceDescription"],(function(e,r,s,t,a,o,i,n,l,u,c,p){var h=e([l,p],{declaredClass:"esri.tasks.RouteTask",_eventMap:{"solve-complete":["result"]},constructor:function(e){this._url.orig=this._url.path,this._url.path+="/solve",this._handler=r.hitch(this,this._handler),this.registerConnectEvents()},__msigns:[{n:"solve",c:3,a:[{i:0,p:["stops.features","barriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(e,r,t,a,i){try{var n,l,p=[],h=[],f=e.directions||[],d=e.routes?e.routes.features:[],_=e.stops?e.stops.features:[],m=e.barriers?e.barriers.features:[],y=e.polygonBarriers?e.polygonBarriers.features:[],g=e.polylineBarriers?e.polylineBarriers.features:[],v=e.messages,b="esri.tasks.RouteTask.NULL_ROUTE_NAME",k=s.forEach,R=s.indexOf,B=!0,N=e.routes&&e.routes.spatialReference||e.stops&&e.stops.spatialReference||e.barriers&&e.barriers.spatialReference||e.polygonBarriers&&e.polygonBarriers.spatialReference||e.polylineBarriers&&e.polylineBarriers.spatialReference;this._chk=e.checksum,k(f,(function(e){p.push(n=e.routeName),h[n]={directions:e}})),k(d,(function(e){-1===R(p,n=e.attributes.Name)&&(p.push(n),h[n]={}),h[n].route=e})),k(_,(function(e){l=e.attributes,-1===R(p,n=l.RouteName||b)&&(p.push(n),h[n]={}),n!==b&&(B=!1),void 0===h[n].stops&&(h[n].stops=[]),h[n].stops.push(e)})),_.length>0&&!0===B&&(h[p[0]].stops=h[b].stops,delete h[b],p.splice(s.indexOf(p,b),1));var j=[];k(p,(function(e,r){h[e].routeName=e===b?null:e,h[e].spatialReference=N,j.push(new u(h[e]))}));var T=function(e){return k(e,(function(r,s){r.geometry&&(r.geometry.spatialReference=N),e[s]=new o(r)})),e};k(v,(function(e,r){v[r]=new c(e)}));var x={routeResults:j,barriers:T(m),polygonBarriers:T(y),polylineBarriers:T(g),messages:v};this._successHandler([x],"onSolveComplete",t,i)}catch(e){this._errorHandler(e,a,i)}},solve:function(e,s,t,a){var o=a.assembly,n=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson(o&&o[0]),this._chk?{checksum:this._chk}:{})),l=this._handler,u=this._errorHandler;return i({url:this._url.path,timeout:25e4,content:n,callbackParamName:"callback",load:function(e,r){l(e,r,s,t,a.dfd)},error:function(e){u(e,t,a.dfd)}})},onSolveComplete:function(){}});return n._createWrappers(h),t("extend-esri")&&r.setObject("tasks.RouteTask",h,a),h}));