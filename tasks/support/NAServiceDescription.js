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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["dojo/_base/declare","../../core/promiseUtils","../../request"],function(e,t,r){return e(null,{declaredClass:"esri.tasks.support.NAServiceDescription",_sd:null,getServiceDescription:function(e,s){if(this._sd)return t.resolve(this._sd);var o=t.create(function(t,o){if(this.url&&this.parsedUrl){var a,l=this.url,n=(this.parsedUrl.path.match(/\/solve$/)||[]).length?"Route":(this.parsedUrl.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",i=function(e){r(e+("/"===e[e.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n}}).then(function(e){var r=[],s=null;if(e&&e.data&&e.data.results&&e.data.results.length){e=e.data;for(var o=0;o<e.results.length;o++)if("supportedTravelModes"===e.results[o].paramName){if(e.results[o].value&&e.results[o].value.features)for(var l=0;l<e.results[o].value.features.length;l++)if(e.results[o].value.features[l].attributes){var n=JSON.parse(e.results[o].value.features[l].attributes.TravelMode);r.push(n)}}else"defaultTravelMode"===e.results[o].paramName&&(s=e.results[o].value)}a.supportedTravelModes=r,a.defaultTravelMode=s,t(a)},function(e){console.log("Could not read from the routingUtilities service."),o(e)})};r(l,{query:{f:"json"}}).then(function(n){a=n.data,a.supportedTravelModes||(a.supportedTravelModes=[]);for(var u=0;u<a.supportedTravelModes.length;u++)a.supportedTravelModes[u].id||(a.supportedTravelModes[u].id=a.supportedTravelModes[u].itemId);s?t(a):e?i(e):a.currentVersion>=10.4?r(l+("/"===l[l.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}}).then(function(e){a.supportedTravelModes=e.data.supportedTravelModes,a.defaultTravelMode=e.data.defaultTravelMode,t(a)},function(e){console.log("Could not get to the NAServer's retrieveTravelModes."),o(e)}):r(l.substring(0,l.indexOf("/rest/")+6)+"info",{query:{f:"json"}}).then(function(e){e.data.owningSystemUrl?(l=e.data.owningSystemUrl,r(l+("/"===l[l.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}).then(function(e){e&&e.data&&e.data.helperServices&&e.data.helperServices.routingUtilities&&e.data.helperServices.routingUtilities.url?i(e.data.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),t(a))},function(e){console.log("Could not get to the portal's self."),o(e)})):t(a)},function(e){console.log("Could not get to the NAServer service description."),o(e)})},function(e){o(e)})}else o("NA Task has no URL specified.")}.bind(this));return o.then(function(e){this._sd=e}.bind(this),function(){this._sd=null}.bind(this)),o},_isInputGeometryZAware:function(e,t){for(var r=0;r<t.length;r++){var s=e[t[r]];if(s&&s.length)for(var o=0;o<s.length;o++)if(s[o].hasZ)return!0}return!1},_dropZValuesOffInputGeometry:function(e,t){var r,s;for(r=0;r<t.length;r++){var o=e[t[r]];if(o&&o.length)for(s=0;s<o.length;s++)o[s].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}})});