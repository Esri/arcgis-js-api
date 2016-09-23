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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","dojo/io-query","dojo/Deferred","../core/urlUtils","../core/promiseUtils","../config","../request","./DynamicLayer","./mixins/ArcGISDynamicMapService","./mixins/OperationalLayer","./mixins/PortalLayer"],function(e,r,t,o,n,a,i,l,s,p,c,d,u,h,y,g){function f(){return u}var m=function(e){function r(r,t){e.call(this),this.alwaysRefetch=!1,this.legendEnabled=!0,this.operationalLayerType="ArcGISMapServiceLayer"}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a.mixin({url:e},r):e},r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]}).then(function(){return e._fetchService()})),this},r.prototype.readLegendEnabled=function(e,r){return null!=r.showLegend?r.showLegend:!0},r.prototype.writeLegendEnabled=function(e,r){e||(r.showLegend=!1)},r.prototype.getImageUrl=function(e,r){var t=this,o=this.parsedUrl.path+"/export",n=a.mixin({},this.parsedUrl.query,this.createExportImageParameters(e),{f:"image",token:this.token,_ts:this.alwaysRefetch?(new Date).getTime():null}),l=s.addProxy(o+"?"+i.objectToQuery(n));l.length>c.request.maxUrlLength?(n.f="json",d(o,{query:n,responseType:"json",callbackParamName:"callback"}).then(function(e){return s.addProxy(e.data.href+"?token="+t.token)}).then(r)):r(l)},r.prototype.fetchImage=function(e){var r,t=!1,o=new l(function(){t=!0,r&&(r=r.onload=r.onerror=r.onabort=null)});return this.version<10.3&&delete e.rotation,this.getImageUrl(e,function(n){t||(r=document.createElement("img"),r.setAttribute("alt",""),r.setAttribute("width",e.width.toString()),r.setAttribute("height",e.height.toString()),r.onload=function(t){r.onload=r.onerror=r.onabort=null,o.resolve({options:e,img:r}),r=null},r.onerror=r.onabort=function(e){r.onload=r.onerror=r.onabort=null,o.reject(new Error("Unable to load image: "+r.src)),r=null},r.src=n)}),o.promise},r.prototype._fetchService=function(){var e=this;return p.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:d(e.parsedUrl.path,{query:a.mixin({f:"json"},e.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},o([n.property()],r.prototype,"alwaysRefetch",void 0),o([n.property({type:Boolean})],r.prototype,"legendEnabled",void 0),o([n.read("legendEnabled",["showLegend"])],r.prototype,"readLegendEnabled",null),o([n.write("legendEnabled")],r.prototype,"writeLegendEnabled",null),o([n.property()],r.prototype,"operationalLayerType",void 0),r=o([n.subclass("esri.layers.MapImageLayer")],r)}(n.declared(f(),h,y,g));return m});