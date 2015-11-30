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
define(["dojo/_base/declare","dojo/json","dojo/Deferred","../request"],function(e,r,t,l){var s=e(null,{declaredClass:"esri.tasks._NAServiceDescription",getServiceDescription:function(e,s){var o=new t;if(this._url&&this._url.orig){var a,n=this._url.orig,i=(this._url.path.match(/\/solve$/)||[]).length?"Route":(this._url.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",u=function(e){l({url:e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",content:{f:"json",serviceName:i},callbackParamName:"callback"}).then(function(e){var t=[],l=null;if(e&&e.results&&e.results.length)for(var s=0;s<e.results.length;s++)if("supportedTravelModes"===e.results[s].paramName){if(e.results[s].value&&e.results[s].value.features)for(var n=0;n<e.results[s].value.features.length;n++)if(e.results[s].value.features[n].attributes){var i=r.parse(e.results[s].value.features[n].attributes.TravelMode);t.push(i)}}else"defaultTravelMode"===e.results[s].paramName&&(l=e.results[s].value);a.supportedTravelModes=t,a.defaultTravelMode=l,o.resolve(a)},function(e){console.log("Could not read from the routingUtilities service."),o.reject(e)})};l({url:n,content:{f:"json"},callbackParamName:"callback"}).then(function(r){a=r,a.supportedTravelModes||(a.supportedTravelModes=[]);for(var t=0;t<a.supportedTravelModes.length;t++)a.supportedTravelModes[t].id||(a.supportedTravelModes[t].id=a.supportedTravelModes[t].itemId);s?o.resolve(a):e?u(e):a.currentVersion>=10.4?l({url:n+("/"===n[n.length-1]?"":"/")+"retrieveTravelModes",content:{f:"json"},callbackParamName:"callback"}).then(function(e){a.supportedTravelModes=e.supportedTravelModes,a.defaultTravelMode=e.defaultTravelMode,o.resolve(a)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),o.reject(e)}):l({url:n.substring(0,n.indexOf("/rest/")+6)+"info",content:{f:"json"},callbackParamName:"callback"}).then(function(e){e.owningSystemUrl?(n=e.owningSystemUrl,l({url:n+("/"===n[n.length-1]?"":"/")+"sharing/portals/self",content:{f:"json"},callbackParamName:"callback"}).then(function(e){e&&e.helperServices&&e.helperServices.routingUtilities&&e.helperServices.routingUtilities.url?u(e.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),o.resolve(a))},function(e){console.log("Could not get to the portal's self."),o.reject(e)})):o.resolve(a)},function(e){console.log("Could not get to the NAServer service description."),o.reject(e)})},function(e){o.reject(e)})}else o.reject("NA Task has no URL specified.");return o.promise}});return s});