// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../request","../geometry/normalizeUtils","./Task","./RouteResult","./NAMessage","./NAServiceDescription"],function(e,r,s,t,a,o,n,i,l,u,c,p){var f=e([l,p],{declaredClass:"esri.tasks.RouteTask",_eventMap:{"solve-complete":["result"]},constructor:function(){this._url.orig=this._url.path,this._url.path+="/solve",this._handler=r.hitch(this,this._handler),this.registerConnectEvents()},__msigns:[{n:"solve",c:3,a:[{i:0,p:["stops.features","barriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(e,r,t,a,n){try{var i,l,p=[],f=[],h=e.directions||[],d=e.routes?e.routes.features:[],_=e.stops?e.stops.features:[],y=e.barriers?e.barriers.features:[],g=e.polygonBarriers?e.polygonBarriers.features:[],m=e.polylineBarriers?e.polylineBarriers.features:[],v=e.messages,b="esri.tasks.RouteTask.NULL_ROUTE_NAME",R=s.forEach,B=s.indexOf,k=!0,N=e.routes&&e.routes.spatialReference||e.stops&&e.stops.spatialReference||e.barriers&&e.barriers.spatialReference||e.polygonBarriers&&e.polygonBarriers.spatialReference||e.polylineBarriers&&e.polylineBarriers.spatialReference;R(h,function(e){p.push(i=e.routeName),f[i]={directions:e}}),R(d,function(e){-1===B(p,i=e.attributes.Name)&&(p.push(i),f[i]={}),f[i].route=e}),R(_,function(e){l=e.attributes,-1===B(p,i=l.RouteName||b)&&(p.push(i),f[i]={}),i!==b&&(k=!1),void 0===f[i].stops&&(f[i].stops=[]),f[i].stops.push(e)}),_.length>0&&k===!0&&(f[p[0]].stops=f[b].stops,delete f[b],p.splice(s.indexOf(p,b),1));var j=[];R(p,function(e){f[e].routeName=e===b?null:e,f[e].spatialReference=N,j.push(new u(f[e]))});var T=function(e){return R(e,function(r,s){r.geometry&&(r.geometry.spatialReference=N),e[s]=new o(r)}),e};R(v,function(e,r){v[r]=new c(e)});var x={routeResults:j,barriers:T(y),polygonBarriers:T(g),polylineBarriers:T(m),messages:v};this._successHandler([x],"onSolveComplete",t,n)}catch(C){this._errorHandler(C,a,n)}},solve:function(e,s,t,a){var o=a.assembly,i=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson(o&&o[0]))),l=this._handler,u=this._errorHandler;return n({url:this._url.path,content:i,callbackParamName:"callback",load:function(e,r){l(e,r,s,t,a.dfd)},error:function(e){u(e,t,a.dfd)}})},onSolveComplete:function(){}});return i._createWrappers(f),t("extend-esri")&&r.setObject("tasks.RouteTask",f,a),f});