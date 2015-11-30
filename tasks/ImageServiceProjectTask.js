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
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/Deferred","dojo/_base/array","../kernel","../request","../deferredUtils","./Task","../urlUtils","../geometry/jsonUtils"],function(e,r,t,o,n,i,a,s,c,l,u){var d=e(c,{constructor:function(){this._handler=r.hitch(this,this._handler)},execute:function(e,t,n){var i=this._getImageServiceUrl(e),c=new o(s._dfdCanceller);if(i){i=l.urlToObject(i);var d=this._encode(r.mixin({},i.query,{f:"json"},e.toJson())),f=this._handler,m=this._errorHandler,g=u.getJsonType(e.geometries[0]),h=e.outSR;return c._pendingDfd=a({url:i.path+"/project",content:d,callbackParamName:"callback",load:function(e){f(e,g,h,t,n,c)},error:function(e){m(e,n,c)}}),c}},_handler:function(e,r,t,o,n,i){try{var a=this._decodeGeometries(e,r,t);this._successHandler([a],"onComplete",o,i)}catch(s){this._errorHandler(s,n,i)}},_encodeGeometries:function(e){var r,t=[],o=e.length;for(r=0;o>r;r++)t.push(e[r].toJson());return{geometryType:u.getJsonType(e[0]),geometries:t}},_decodeGeometries:function(e,t,o){var i=u.getGeometryType(t),a=e.geometries,s=[],c={spatialReference:o},l=r.mixin;return n.forEach(a,function(e,r){s[r]=new i(l(e,c))}),s},onComplete:function(){},_getImageServiceUrl:function(e){var r;return e&&e.geometries&&e.geometries.length&&e.outSR&&(e.geometries[0].spatialReference||e.geometries[0].spatialReference.url||e.outSR.url?e.geometries[0].spatialReference.url&&e.outSR.url&&e.geometries[0].spatialReference.url!==e.outSR.url?this.onError(new Error("Input and output spatial reference must be from one image service")):r=e.geometries[0].spatialReference&&e.geometries[0].spatialReference.url?e.geometries[0].spatialReference.url:e.outSR.url:this.onError(new Error("Spatial reference doesn't contain Image Service URL"))),r}});return t("extend-esri")&&r.setObject("tasks.ImageServiceProjectTask",d,i),d});