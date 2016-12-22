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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/json","dojo/Deferred","../../request"],function(e,t,r,a,s){var l=e(null,{declaredClass:"esri.tasks._NAServiceDescription",_sd:null,getServiceDescription:function(e,l){var o=new a;if(this._sd)return o.resolve(this._sd),o.promise;if(this.url&&this.parsedUrl){var n,i=this.url,u=(this.parsedUrl.path.match(/\/solve$/)||[]).length?"Route":(this.parsedUrl.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",d=function(e){s(e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:u},callbackParamName:"callback"}).then(function(e){var t=[],a=null;if(e&&e.data&&e.data.results&&e.data.results.length){e=e.data;for(var s=0;s<e.results.length;s++)if("supportedTravelModes"===e.results[s].paramName){if(e.results[s].value&&e.results[s].value.features)for(var l=0;l<e.results[s].value.features.length;l++)if(e.results[s].value.features[l].attributes){var i=r.parse(e.results[s].value.features[l].attributes.TravelMode);t.push(i)}}else"defaultTravelMode"===e.results[s].paramName&&(a=e.results[s].value)}n.supportedTravelModes=t,n.defaultTravelMode=a,o.resolve(n)},function(e){console.log("Could not read from the routingUtilities service."),o.reject(e)})};s(i,{query:{f:"json"},callbackParamName:"callback"}).then(function(t){n=t.data,n.supportedTravelModes||(n.supportedTravelModes=[]);for(var r=0;r<n.supportedTravelModes.length;r++)n.supportedTravelModes[r].id||(n.supportedTravelModes[r].id=n.supportedTravelModes[r].itemId);l?o.resolve(n):e?d(e):n.currentVersion>=10.4?s(i+("/"===i[i.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){n.supportedTravelModes=e.data.supportedTravelModes,n.defaultTravelMode=e.data.defaultTravelMode,o.resolve(n)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),o.reject(e)}):s(i.substring(0,i.indexOf("/rest/")+6)+"info",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e.data.owningSystemUrl?(i=e.data.owningSystemUrl,s(i+("/"===i[i.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e&&e.data&&e.data.helperServices&&e.data.helperServices.routingUtilities&&e.data.helperServices.routingUtilities.url?d(e.data.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),o.resolve(n))},function(e){console.log("Could not get to the portal's self."),o.reject(e)})):o.resolve(n)},function(e){console.log("Could not get to the NAServer service description."),o.reject(e)})},function(e){o.reject(e)})}else o.reject("NA Task has no URL specified.");return o.then(t.hitch(this,function(e){this._sd=e}),t.hitch(this,function(){this._sd=null})),o.promise},_isInputGeometryZAware:function(e,t){for(var r=0;r<t.length;r++){var a=e[t[r]];if(a&&a.length)for(var s=0;s<a.length;s++)if(a[s].hasZ)return!0}return!1},_dropZValuesOffInputGeometry:function(e,t){var r,a;for(r=0;r<t.length;r++){var s=e[t[r]];if(s&&s.length)for(a=0;a<s.length;a++)s[a].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}});return l});