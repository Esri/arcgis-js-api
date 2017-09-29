// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","../../request"],function(e,t,r,a){var s=e(null,{declaredClass:"esri.tasks.support.NAServiceDescription",_sd:null,getServiceDescription:function(e,s){var l=new r;if(this._sd)return l.resolve(this._sd),l.promise;if(this.url&&this.parsedUrl){var o,n=this.url,i=(this.parsedUrl.path.match(/\/solve$/)||[]).length?"Route":(this.parsedUrl.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",u=function(e){a(e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i},callbackParamName:"callback"}).then(function(e){var t=[],r=null;if(e&&e.data&&e.data.results&&e.data.results.length){e=e.data;for(var a=0;a<e.results.length;a++)if("supportedTravelModes"===e.results[a].paramName){if(e.results[a].value&&e.results[a].value.features)for(var s=0;s<e.results[a].value.features.length;s++)if(e.results[a].value.features[s].attributes){var n=JSON.parse(e.results[a].value.features[s].attributes.TravelMode);t.push(n)}}else"defaultTravelMode"===e.results[a].paramName&&(r=e.results[a].value)}o.supportedTravelModes=t,o.defaultTravelMode=r,l.resolve(o)},function(e){console.log("Could not read from the routingUtilities service."),l.reject(e)})};a(n,{query:{f:"json"},callbackParamName:"callback"}).then(function(t){o=t.data,o.supportedTravelModes||(o.supportedTravelModes=[]);for(var r=0;r<o.supportedTravelModes.length;r++)o.supportedTravelModes[r].id||(o.supportedTravelModes[r].id=o.supportedTravelModes[r].itemId);s?l.resolve(o):e?u(e):o.currentVersion>=10.4?a(n+("/"===n[n.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){o.supportedTravelModes=e.data.supportedTravelModes,o.defaultTravelMode=e.data.defaultTravelMode,l.resolve(o)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),l.reject(e)}):a(n.substring(0,n.indexOf("/rest/")+6)+"info",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e.data.owningSystemUrl?(n=e.data.owningSystemUrl,a(n+("/"===n[n.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"},callbackParamName:"callback"}).then(function(e){e&&e.data&&e.data.helperServices&&e.data.helperServices.routingUtilities&&e.data.helperServices.routingUtilities.url?u(e.data.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),l.resolve(o))},function(e){console.log("Could not get to the portal's self."),l.reject(e)})):l.resolve(o)},function(e){console.log("Could not get to the NAServer service description."),l.reject(e)})},function(e){l.reject(e)})}else l.reject("NA Task has no URL specified.");return l.then(t.hitch(this,function(e){this._sd=e}),t.hitch(this,function(){this._sd=null})),l.promise},_isInputGeometryZAware:function(e,t){for(var r=0;r<t.length;r++){var a=e[t[r]];if(a&&a.length)for(var s=0;s<a.length;s++)if(a[s].hasZ)return!0}return!1},_dropZValuesOffInputGeometry:function(e,t){var r,a;for(r=0;r<t.length;r++){var s=e[t[r]];if(s&&s.length)for(a=0;a<s.length;a++)s[a].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}});return s});