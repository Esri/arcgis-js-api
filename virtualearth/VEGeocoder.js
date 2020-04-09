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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/has","../kernel","../urlUtils","../tasks/Task","./VEGeocodeResult","../deferredUtils","../request"],(function(e,r,t,o,s,i,n,a,c,d,u){var l=e(a,{declaredClass:"esri.virtualearth.VEGeocoder",constructor:function(e){try{if(e=r.mixin({bingMapsKey:null},e||{}),this.url=n.getProtocolForWebResource()+"//serverapi.arcgisonline.com/veadaptor/production/services/geocode/geocode",this._url=n.urlToObject(this.url),this._queue=[],this.bingMapsKey=e.bingMapsKey,this.culture=e.culture||"en-US",this._errorHandler=r.hitch(this,this._errorHandler),this._addressToLocationsHandler=r.hitch(this,this._addressToLocationsHandler),!this.bingMapsKey)throw new Error("BingMapsKey must be provided.")}catch(e){throw this.onError(e),e}},addressToLocations:function(e,t,s){if(!this.bingMapsKey)return console.debug("Server token not retrieved. Queing request to be executed after server token retrieved."),void this._queue.push(arguments);var i=r.mixin({},this._url.query,{query:e,token:this.bingMapsKey,culture:this.culture}),n=this._addressToLocationsHandler,a=this._errorHandler,c=new o(d._dfdCanceller);return c._pendingDfd=u({url:this._url.path,content:i,callbackParamName:"callback",load:function(e,r){n(e,r,t,s,c)},error:function(e){a(e,s,c)}}),c},_addressToLocationsHandler:function(e,r,o,s,i){try{t.forEach(e,(function(r,t){e[t]=new c(r)})),this._successHandler([e],"onAddressToLocationsComplete",o,i)}catch(e){this._errorHandler(e,s,i)}},onAddressToLocationsComplete:function(){},setBingMapsKey:function(e){this.bingMapsKey=e},setCulture:function(e){this.culture=e}});return s("extend-esri")&&r.setObject("virtualearth.VEGeocoder",l,i),l}));