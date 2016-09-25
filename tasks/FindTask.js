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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/has","../kernel","../request","../deferredUtils","./Task","./FindResult"],function(e,r,n,s,t,a,i,o,d,l){var c=e(d,{declaredClass:"esri.tasks.FindTask",constructor:function(e,n){this._url.path+="/find",this._handler=r.hitch(this,this._handler),this.gdbVersion=n&&n.gdbVersion},_handler:function(e,r,s,t,a){try{var i=[];n.forEach(e.results,function(e,r){i[r]=new l(e)}),this._successHandler([i],"onComplete",s,a)}catch(o){this._errorHandler(o,t,a)}},execute:function(e,n,t){var a=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson())),d=this._handler,l=this._errorHandler;this.gdbVersion&&(a.gdbVersion=this.gdbVersion);var c=new s(o._dfdCanceller);return c._pendingDfd=i({url:this._url.path,content:a,callbackParamName:"callback",load:function(e,r){d(e,r,n,t,c)},error:function(e){l(e,t,c)}}),c},onComplete:function(){}});return t("extend-esri")&&r.setObject("tasks.FindTask",c,a),c});