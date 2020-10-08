// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task","./ServiceAreaSolveResult","./NAServiceDescription"],(function(e,r,s,t,a,i,n,o,l){var c=e([n,l],{declaredClass:"esri.tasks.ServiceAreaTask",_eventMap:{"solve-complete":["result"]},constructor:function(e){this._url.orig=this._url.path,this._url.path+="/solveServiceArea",this._handler=r.hitch(this,this._handler),this.registerConnectEvents()},__msigns:[{n:"solve",c:3,a:[{i:0,p:["facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(e,r,s,t,a){try{var i=new o(e);this._successHandler([i],"onSolveComplete",s,a)}catch(e){this._errorHandler(e,t,a)}},solve:function(e,s,t,i){var n=i.assembly,o=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson(n&&n[0]))),l=this._handler,c=this._errorHandler;return a({url:this._url.path,content:o,callbackParamName:"callback",load:function(e,r){l(e,r,s,t,i.dfd)},error:function(e){c(e,t,i.dfd)}})},onSolveComplete:function(){}});return i._createWrappers(c),s("extend-esri")&&r.setObject("tasks.ServiceAreaTask",c,t),c}));