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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task","./IdentifyResult"],function(e,t,r,s,n,i,a,o,c){var d=e(o,{declaredClass:"esri.tasks.IdentifyTask",_eventMap:{complete:["results"]},constructor:function(e,r){this._url.path+="/identify",this._handler=t.hitch(this,this._handler),this.gdbVersion=r&&r.gdbVersion,this.registerConnectEvents()},__msigns:[{n:"execute",c:3,a:[{i:0,p:["geometry"]}],e:2}],_handler:function(e,t,s,n,i){try{var a=[];r.forEach(e.results,function(e,t){a[t]=new c(e)}),this._successHandler([a],"onComplete",s,i)}catch(e){this._errorHandler(e,n,i)}},execute:function(e,r,s,n){var a=n.assembly,o=this._encode(t.mixin({},this._url.query,{f:"json"},e.toJson(a&&a[0]))),c=this._handler,d=this._errorHandler;return this.gdbVersion&&(o.gdbVersion=this.gdbVersion),i({url:this._url.path,content:o,callbackParamName:"callback",load:function(e,t){c(e,t,r,s,n.dfd)},error:function(e){d(e,s,n.dfd)}})},onComplete:function(){}});return a._createWrappers(d),s("extend-esri")&&t.setObject("tasks.IdentifyTask",d,n),d});