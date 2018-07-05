// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","../../request"],function(e,t,r){return e(null,{declaredClass:"esri.tasks.support.NAServiceDescription",_sd:null,getServiceDescription:function(e,a){var s=new t;if(this._sd)return s.resolve(this._sd),s.promise;if(this.url&&this.parsedUrl){var l,o=this.url,n=(this.parsedUrl.path.match(/\/solve$/)||[]).length?"Route":(this.parsedUrl.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",i=function(e){r(e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n},callbackParamName:"callback"}).then(function(e){var t=[],r=null;if(e&&e.data&&e.data.results&&e.data.results.length){e=e.data;for(var a=0;a<e.results.length;a++)if("supportedTravelModes"===e.results[a].paramName){if(e.results[a].value&&e.results[a].value.features)for(var o=0;o<e.results[a].value.features.length;o++)if(e.results[a].value.features[o].attributes){var n=JSON.parse(e.results[a].value.features[o].attributes.TravelMode);t.push(n)}}else"defaultTravelMode"===e.results[a].paramName&&(r=e.results[a].value)}l.supportedTravelModes=t,l.defaultTravelMode=r,s.resolve(l)},function(e){console.log("Could not read from the routingUtilities service."),s.reject(e)})};r(o,{query:{f:"json"},callbackParamName:"callback"}).then(function(t){l=t.data,l.supportedTravelModes||(l.supportedTravelModes=[]);for(var n=0;n<l.supportedTravelModes.length;n++)l.supportedTravelModes[n].id||(l.supportedTravelModes[n].id=l.supportedTravelModes[n].itemId);a?s.resolve(l):e?i(e):l.currentVersion>=10.4?r(o+("/"===o[o.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){l.supportedTravelModes=e.data.supportedTravelModes,l.defaultTravelMode=e.data.defaultTravelMode,s.resolve(l)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),s.reject(e)}):r(o.substring(0,o.indexOf("/rest/")+6)+"info",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e.data.owningSystemUrl?(o=e.data.owningSystemUrl,r(o+("/"===o[o.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e&&e.data&&e.data.helperServices&&e.data.helperServices.routingUtilities&&e.data.helperServices.routingUtilities.url?i(e.data.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),s.resolve(l))},function(e){console.log("Could not get to the portal's self."),s.reject(e)})):s.resolve(l)},function(e){console.log("Could not get to the NAServer service description."),s.reject(e)})},function(e){s.reject(e)})}else s.reject("NA Task has no URL specified.");return s.then(function(e){this._sd=e}.bind(this),function(){this._sd=null}.bind(this)),s.promise},_isInputGeometryZAware:function(e,t){for(var r=0;r<t.length;r++){var a=e[t[r]];if(a&&a.length)for(var s=0;s<a.length;s++)if(a[s].hasZ)return!0}return!1},_dropZValuesOffInputGeometry:function(e,t){var r,a;for(r=0;r<t.length;r++){var s=e[t[r]];if(s&&s.length)for(a=0;a<s.length;a++)s[a].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}})});