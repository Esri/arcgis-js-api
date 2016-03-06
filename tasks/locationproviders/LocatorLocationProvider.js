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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/_base/array","../../request","./LocationProviderRemoteBase"],function(t,e,r,o,i){return t("esri.tasks.locationproviders.LocatorLocationProvider",i,{locator:null,addressFields:null,constructor:function(){this.geometryType="esriGeometryPoint"},_getFieldMapping:function(){return this.addressFields},_init:function(){if(this.locator){var t=this.getInherited(arguments);return o({url:this.locator.url,content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,function(e){this._batchSize=e.locatorProperties&&e.locatorProperties.SuggestedBatchSize||1,t.call(this)}))}},_batchWillOverflow:function(t){return t.length+1>this._batchSize},_locateBatch:function(t){var o=this,i=function(e){for(var r=[],i=0;i<e.length;i++){var s=e[i],n=1===o._batchSize?0:s.attributes.ResultID,a=t[n],c=a&&a.features;if(c&&s.score&&s.location){for(var l=0;l<c.length;l++){var u=c[l];u.geometry=s.location,r.push(u)}t[n]=null}}return r};return 1===this._batchSize?this.locator.addressToLocations({address:t[0].expression,outFields:""}).then(i):this.locator.addressesToLocations({addresses:r.map(t,function(t,r){return e.mixin(t.expression,{OBJECTID:r})}),outFields:""}).then(i)},_createQueryExpression:function(t){for(var e={},r=0;r<this._fields.length;r++){var o=this._fields[r];e[o.outField]=t.attributes[o.inField]}return e}})});