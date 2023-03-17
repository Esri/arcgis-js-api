// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/io-query","dojo/has","dojo/_base/Deferred","dojo/DeferredList","../deferredUtils","../request","../kernel","./WCSCapabilities","./WCSCoverageDescription"],(function(e,i,s,t,n,r,o,a,c,l,h){var u=function(e,i,s){var t;if(s){for(t=0;t<e.length;t++)if(e[t][s].toLowerCase()===i.toLowerCase())return e[t]}else for(t=0;t<e.length;t++)if(e[t].toLowerCase()===i.toLowerCase())return e[t]},v=e(null,{declaredClass:"esri.layers.WCSConnection",url:null,supportedVersions:["1.0.0","1.1.0","1.1.1","2.0.1"],version:null,name:null,onlineResources:null,coverages:null,supportedFormats:null,profiles:null,supportedInterpolations:null,onConnected:null,constructor:function(e,t){if(e){var n=e.indexOf("?");n>-1&&n<=e.length-1?(this.optionalParameters=s.queryToObject(e.substring(n+1,e.length)),this.url=e.substring(0,n+1)):this.url=e}this.optionalParameters=this.optionalParameters||{},t&&i.mixin(this.optionalParameters,t),this.optionalParameters.version&&(this.version=this.optionalParameters.version);var r=this.optionalParameters;Object.keys(r).forEach((function(e){r[e]||delete r[e]})),this.connect=i.hitch(this,this.connect),this.url&&this.connect(this.version)},_getCapabilities:function(e){var s=new n,t=i.mixin({},this.optionalParameters);if(e)var r={version:e,AcceptVersions:e};var o=["service","request","coverageId","coverage","identifier"];return Object.keys(t).forEach((function(e){o.some((function(i){return i.toLowerCase()===e.toLowerCase()}))&&delete t[e]})),a({url:this.url,content:i.mixin({request:"GetCapabilities",service:"WCS"},t,r),handleAs:"xml"}).then(i.hitch(this,(function(e){var i=new l(e);s.resolve(i)})),(function(e){s.reject(e)})),s.promise},_getCapabilitiesHelper:function(e){var s;if(e)s=this._getCapabilities(e);else{var t=new n;s=t.promise,this._getCapabilities().then(i.hitch(this,(function(e){!this.version&&this.url.toLowerCase().indexOf("wcsserver")>-1&&1===e.supportedVersions.length&&"2.0.1"===e.supportedVersions[0]?this._getCapabilities().then(i.hitch(this,(function(e){t.resolve(e)})),i.hitch(this,(function(e){t.reject(e)}))):t.resolve(e)})),i.hitch(this,(function(e){t.reject(e)})))}return s},_describeCoverage:function(){var e=new n,s=this.coverageId||this.optionalParameters.coverage||this.optionalParameters.coverageId||this.optionalParameters.identifiers||this.coverages.map((function(e){return e.id})).join(","),t=this.version,o={request:"DescribeCoverage",service:"WCS",version:t};switch(t){case"1.0.0":o=i.mixin(o,{coverage:s});break;case"1.1.0":case"1.1.1":case"1.1.2":o=i.mixin(o,{identifiers:s});break;case"2.0.1":o=i.mixin(o,{coverageId:s})}var c=i.mixin({},this.optionalParameters),l=["service","request"];Object.keys(c).forEach((function(e){l.some((function(i){return i.toLowerCase()===e.toLowerCase()}))&&delete c[e]}));var h=a({url:this._onlineResources?this._onlineResources.describeCoverage:this.url,content:i.mixin(o,c),handleAs:"xml"});if("2.0.1"===t){var v=s;s.indexOf(",")>-1?v=s.split(",").map((function(e){return 0===e.toLowerCase().indexOf("coverage")?e.slice(8):e})).join(","):0===s.toLowerCase().indexOf("coverage")&&(v=s.slice(8));var p=a({url:this._onlineResources?this._onlineResources.describeCoverage:this.url,content:i.mixin(o,c,{identifiers:v,version:"1.1.1"}),handleAs:"xml"});h=new r([h,p])}return h.then(i.hitch(this,(function(i){var s,t,n,r,o,a,c,l,h,v,p;if("2.0.1"===this.version){if(s=i[0][0]&&i[0][1]?this._parseCoverageDescriptions(i[0][1],this.version):null,(t=i[1][0]&&i[1][1]?this._parseCoverageDescriptions(i[1][1],"1.1.1"):null)&&t.length)for(h=0;h<s.length;h++)if(n=s[h].multidimensionalInfo,r=t[h].multidimensionalInfo,n&&r)for(p=0;p<n.variables.length;p++)if(o=n.variables[p],a=u(r.variables,o.name,"name"))for(v=0;v<o.dimensions.length;v++)c=o.dimensions[v],(l=u(a.dimensions,c.name,"name"))&&(c.values=c.values||l.values,c.values&&(c.hasRegularIntervals=!1))}else s=this._parseCoverageDescriptions(i,this.version);e.resolve(s)})),(function(i){e.reject(i)})),e.promise},_parseCoverageDescriptions:function(e,i){var s,t,n=[];for(s="1.0.0"===i?e.getElementsByTagNameNS("*","CoverageOffering"):e.getElementsByTagNameNS("*","CoverageDescription"),t=0;t<s.length;t++)n.push(new h(s[t],i));return n},connect:function(e){var s=new n((function(){return"cancelled"}));this._connectPromise&&this._connectPromise.cancel(),e=e||this.version,this.version=e||this.version;var t=function(e){s.reject(e),this._connectPromise=null,this.onConnectionFailed&&this.onConnectionFailed(e)};return this._getCapabilitiesHelper(e).then(i.hitch(this,(function(e){if(!s.isCanceled()){if(this.supportedInterpolations=e.supportedInterpolations,this.supportedVersions=e.supportedVersions,this.url.toLowerCase().indexOf("wcsserver")>-1?("2.0.1"===this.supportedVersions[0]&&1===this.supportedVersions.length&&(this.supportedVersions=["1.0.0","1.1.0","1.1.1","2.0.1"]),this.version=this.version||e.version||this.supportedVersions.reduce((function(e,i){return e>i?e:i}))):this.version=this.version||"1.0.0",this.name=this.name||e.name,this.version=this.version||e.version,this.onlineResources=this.onlineResources||e.onlineResources,this.coverages=this.coverages||e.coverages,void 0===this.coverages||null===this.coverages||0===this.coverages.length)throw"No valid coverages";this.supportedFormats=this.supportedFormats||e.supportedFormats,this.profiles=this.profiles||e.profiles,this._describeCoverage().then(i.hitch(this,(function(e){s.isCanceled()||(e?(e.forEach(i.hitch(this,(function(e){e.lonLatEnvelope=u(this.coverages,e.id,"id").lonLatEnvelope||e.lonLatEnvelope}))),this.coverages=e,s.resolve(this),this._connectPromise=null,this.onConnected&&this.onConnected()):t("cannot parse coverage descriptions"))})),t)}})),t),this._connectPromise=s.promise,this._connectPromise}});return t("extend-esri")&&i.setObject("layers.WCSConnection",v,c),v}));