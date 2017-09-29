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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task"],function(e,r,t,a,s,n,o){var i=e(o,{declaredClass:"esri.tasks.ImageServiceMeasureTask",constructor:function(e){this._url.path+="/measure",this._handler=r.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["fromGeometry","toGeometry"]}],e:2}],_handler:function(e,r,t,a,s){try{var n=e;this._successHandler([n],"onComplete",t,s)}catch(o){this._errorHandler(o,a,s)}},execute:function(e,t,a,n){var o=n.assembly,i=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson(o&&o[0]))),c=this._handler,l=this._errorHandler;return s({url:this._url.path,content:i,callbackParamName:"callback",load:function(e,r){c(e,r,t,a,n.dfd)},error:function(e){l(e,a,n.dfd)}})},onComplete:function(){}});return n._createWrappers(i),t("extend-esri")&&r.setObject("tasks.ImageServiceMeasureTask",i,a),i});