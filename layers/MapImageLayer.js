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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/io-query","dojo/Deferred","../config","../request","../core/urlUtils","../core/promiseUtils","./DynamicLayer","./mixins/ArcGISDynamicService","./mixins/PortalLayer"],function(e,t,r,o,n,a,i,s,l,c){var u=s.createSubclass([l,c],{declaredClass:"esri.layers.MapImageLayer",portalLoaderModule:"portal/loaders/MapImageLayerLoader",normalizeCtorArgs:function(t,r){return"string"==typeof t?e.mixin({url:t},r):t},load:function(){this.addResolvingPromise(this.loadFromPortal(this._fetchService.bind(this)))},properties:{alwaysRefetch:!1},getImageUrl:function(r,i){var s=this.parsedUrl.path+"/export",l=e.mixin({},this.parsedUrl.query,this.getExportImageParameters(r),{f:"image",token:this.token,_ts:this.alwaysRefetch?(new Date).getTime():null}),c=a.addProxy(s+"?"+t.objectToQuery(l));if(c.length>o.request.maxUrlLength){l.f="json";var u=this,h=n(s,{query:l,responseType:"json",callbackParamName:"callback"});h.then(function(e){i(a.addProxy(e.data.href+"?token="+u.token))})}else i(c)},fetchImage:function(e){var t,o=!1,n=new r(function(){o=!0,t&&(t=t.onload=t.onerror=t.onabort=null)});return this.supportsRotation||delete e.rotation,this.getImageUrl(e,function(r){o||(t=document.createElement("img"),t.setAttribute("alt",""),t.setAttribute("width",e.width),t.setAttribute("height",e.height),t.onload=function(){t.onload=t.onerror=t.onabort=null,n.resolve({options:e,img:t}),t=null},t.onerror=t.onabort=function(){t.onload=t.onerror=t.onabort=null,n.reject(new Error("Unable to load image: "+t.src)),t=null},t.src=r)}),n.promise},_fetchService:function(){return i.resolve().then(function(){return this.resourceInfo||n(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data)}.bind(this))}});return u});