// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task","./ClosestFacilitySolveResult","./NAServiceDescription"],function(e,s,t,r,i,a,l,n,o){var c=e([l,o],{declaredClass:"esri.tasks.ClosestFacilityTask",_eventMap:{"solve-complete":["result"]},constructor:function(e){this._url.orig=this._url.path,this._url.path+="/solveClosestFacility",this._handler=s.hitch(this,this._handler),this.registerConnectEvents()},__msigns:[{n:"solve",c:3,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(e,s,t,r,i){try{var a=new n(e);this._successHandler([a],"onSolveComplete",t,i)}catch(l){this._errorHandler(l,r,i)}},solve:function(e,t,r,a){var l=a.assembly,n=this._encode(s.mixin({},this._url.query,{f:"json"},e.toJson(l&&l[0]))),o=this._handler,c=this._errorHandler;return i({url:this._url.path,content:n,callbackParamName:"callback",load:function(e,s){o(e,s,t,r,a.dfd)},error:function(e){c(e,r,a.dfd)}})},onSolveComplete:function(){}});return a._createWrappers(c),t("extend-esri")&&s.setObject("tasks.ClosestFacilityTask",c,r),c});