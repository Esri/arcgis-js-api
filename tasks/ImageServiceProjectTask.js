// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/Deferred","dojo/_base/array","../kernel","../request","../deferredUtils","./Task","../urlUtils","../geometry/jsonUtils"],(function(e,r,t,o,n,i,s,a,c,l,u){var m=e(c,{constructor:function(e){this._handler=r.hitch(this,this._handler)},execute:function(e,t,n){var i=new o(a._dfdCanceller),c=this._url||this._getImageServiceUrl(e);if(c){var l=this._encode(r.mixin({},c.query,{f:"json"},e.toJson())),m=this._handler,d=this._errorHandler,f=u.getJsonType(e.geometries[0]),g=e.outSR;i._pendingDfd=s({url:c.path+"/project",content:l,callbackParamName:"callback",load:function(e){m(e,f,g,t,n,i)},error:function(e){d(e,n,i)}})}else i.reject("Input arguments do not contain image service URL.");return i},_handler:function(e,r,t,o,n,i){try{var s=this._decodeGeometries(e,r,t);this._successHandler([s],"onComplete",o,i)}catch(e){this._errorHandler(e,n,i)}},_encodeGeometries:function(e){var r,t=[],o=e.length;for(r=0;r<o;r++)t.push(e[r].toJson());return{geometryType:u.getJsonType(e[0]),geometries:t}},_decodeGeometries:function(e,t,o){var i=u.getGeometryType(t),s=e.geometries,a=[],c={spatialReference:o},l=r.mixin;return n.forEach(s,(function(e,r){a[r]=new i(l(e,c))})),a},onComplete:function(){},_getImageServiceUrl:function(e){var r;return e&&e.geometries&&e.geometries.length&&e.outSR&&(e.geometries[0].spatialReference||e.geometries[0].spatialReference.url||e.outSR.url?e.geometries[0].spatialReference.url&&e.outSR.url&&e.geometries[0].spatialReference.url!==e.outSR.url?this.onError(new Error("Input and output spatial reference must be from one image service")):r=e.geometries[0].spatialReference&&e.geometries[0].spatialReference.url?e.geometries[0].spatialReference.url:e.outSR.url:this.onError(new Error("Spatial reference doesn't contain Image Service URL"))),r&&(r=l.urlToObject(r)),r}});return t("extend-esri")&&r.setObject("tasks.ImageServiceProjectTask",m,i),m}));