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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../request","../geometry/normalizeUtils","./Task","./ImageServiceIdentifyResult"],(function(e,t,r,n,a,s,i,o){var c=e(i,{declaredClass:"esri.tasks.ImageServiceIdentifyTask",constructor:function(e){this._url.path+="/identify",this._handler=t.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["geometry"]}],e:2}],_handler:function(e,t,r,n,a){try{var s=new o(e);this._successHandler([s],"onComplete",r,a)}catch(e){this._errorHandler(e,n,a)}},execute:function(e,r,n,s){var i=s.assembly,o=this._encode(t.mixin({},this._url.query,{f:"json"},e.toJson(i&&i[0]))),c=this._handler,l=this._errorHandler;return a({url:this._url.path,content:o,callbackParamName:"callback",load:function(e,t){c(e,t,r,n,s.dfd)},error:function(e){l(e,n,s.dfd)}})},onComplete:function(){}});return s._createWrappers(c),r("extend-esri")&&t.setObject("tasks.ImageServiceIdentifyTask",c,n),c}));