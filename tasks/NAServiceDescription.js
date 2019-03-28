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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/json","dojo/Deferred","dojo/_base/lang","../request"],function(e,t,r,s,l){return e(null,{declaredClass:"esri.tasks._NAServiceDescription",_sd:null,getServiceDescription:function(e,o){var a=new r;if(this._sd)a.resolve(this._sd);else if(this._url&&this._url.orig){var n,i=this._url.orig,u=(this._url.path.match(/\/solve$/)||[]).length?"Route":(this._url.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",c=function(e){l({url:e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",content:{f:"json",serviceName:u},callbackParamName:"callback"}).then(function(e){var r=[],s=null;if(e&&e.results&&e.results.length)for(var l=0;l<e.results.length;l++)if("supportedTravelModes"===e.results[l].paramName){if(e.results[l].value&&e.results[l].value.features)for(var o=0;o<e.results[l].value.features.length;o++)if(e.results[l].value.features[o].attributes){var i=t.parse(e.results[l].value.features[o].attributes.TravelMode);r.push(i)}}else"defaultTravelMode"===e.results[l].paramName&&(s=e.results[l].value);n.supportedTravelModes=r,n.defaultTravelMode=s,a.resolve(n)},function(e){console.log("Could not read from the routingUtilities service."),a.reject(e)})};l({url:i,content:{f:"json"},callbackParamName:"callback"}).then(function(t){n=t,n.supportedTravelModes||(n.supportedTravelModes=[]);for(var r=0;r<n.supportedTravelModes.length;r++)n.supportedTravelModes[r].id||(n.supportedTravelModes[r].id=n.supportedTravelModes[r].itemId);o?a.resolve(n):e?c(e):n.currentVersion>=10.4?l({url:i+("/"===i[i.length-1]?"":"/")+"retrieveTravelModes",content:{f:"json"},callbackParamName:"callback"}).then(function(e){n.supportedTravelModes=e.supportedTravelModes,n.defaultTravelMode=e.defaultTravelMode,a.resolve(n)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),a.reject(e)}):l({url:i.substring(0,i.indexOf("/rest/")+6)+"info",content:{f:"json"},callbackParamName:"callback"}).then(function(e){e.owningSystemUrl?(i=e.owningSystemUrl,l({url:i+("/"===i[i.length-1]?"":"/")+"sharing/rest/portals/self",content:{f:"json"},callbackParamName:"callback"}).then(function(e){e&&e.helperServices&&e.helperServices.routingUtilities&&e.helperServices.routingUtilities.url?c(e.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),a.resolve(n))},function(e){console.log("Could not get to the portal's self."),a.reject(e)})):a.resolve(n)},function(e){console.log("Could not get to the NAServer service description."),a.reject(e)})},function(e){a.reject(e)})}else a.reject("NA Task has no URL specified.");return a.then(s.hitch(this,function(e){this._sd=e}),s.hitch(this,function(){this._sd=null})),a.promise},getOwningSystemUrl:function(){var e=new r;if(this._url&&this._url.orig){var t=this._url.orig;l({url:t.substring(0,t.indexOf("/rest/")+6)+"info",content:{f:"json"},callbackParamName:"callback"}).promise.always(function(t){e.resolve(t.owningSystemUrl)})}else e.resolve(void 0);return e.promise}})});