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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","../request","./Task","../geometry/SpatialReference","./support/AddressCandidate"],function(e,t,n,a,s,o){function r(e){return e&&e.hasOwnProperty("x")&&"NaN"!==e.x&&e.hasOwnProperty("y")&&"NaN"!==e.y}function i(e){return!e||e.hasOwnProperty("xmin")&&"NaN"!==e.xmin&&e.hasOwnProperty("ymin")&&"NaN"!==e.ymin&&e.hasOwnProperty("xmax")&&"NaN"!==e.xmax&&e.hasOwnProperty("ymax")&&"NaN"!==e.ymax}var c=a.createSubclass({declaredClass:"esri.tasks.Locator",properties:{categories:{value:null,type:[String]},countryCode:{value:null,type:String},outSpatialReference:{value:null,type:s},url:{}},addressToLocations:function(e,a){var s,o=e.outFields,r=e.searchExtent,i=e.countryCode,c=e.magicKey,l=e.distance,u=e.categories,d=e.maxLocations,h=e.forStorage;e.location&&this.normalization&&(s=e.location.clone().normalize()),r&&(r=r.shiftCentralMeridian()),e=e.address;var p=this.outSpatialReference,f=this._encode(t.mixin({},this.parsedUrl.query,e,{f:"json",outSR:p&&JSON.stringify(p.toJSON()),outFields:o&&o.join(",")||null,searchExtent:r&&JSON.stringify(r.toJSON()),category:u&&u.join(",")||null,countryCode:i||null,magicKey:c||null,distance:l||null,location:s||null,maxLocations:d||null,forStorage:h||null})),y={query:f,callbackParamName:"callback"};return(this.requestOptions||a)&&(y=t.mixin({},this.requestOptions,a,y)),n(this.parsedUrl.path+"/findAddressCandidates",y).then(this._handleAddressToLocationsResponse)},suggestLocations:function(e,a){var s;e.hasOwnProperty("location")&&this.normalization&&(e.location=e.location.clone().normalize()),e.searchExtent&&(e.searchExtent=e.searchExtent.shiftCentralMeridian()),s=this._encode(t.mixin({},this.parsedUrl.query,{f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:e.searchExtent&&JSON.stringify(e.searchExtent.toJSON()),category:e.categories&&e.categories.join(",")||null,countryCode:e.countryCode||null,location:e.location||null,distance:e.distance||null},{f:"json"}));var o={query:s,callbackParamName:"callback"};return(this.requestOptions||a)&&(o=t.mixin({},this.requestOptions,a,o)),n(this.parsedUrl.path+"/suggest",o).then(this._handleSuggestLocationsResponse)},addressesToLocations:function(a,s){var o=this.outSpatialReference,r=[],i=a.categories,c=a.countryCode,l=a.addresses;e.forEach(l,function(e,t){r.push({attributes:e})});var u=this._encode(t.mixin({},this.parsedUrl.query,{category:i&&i.join(",")||null,sourceCountry:c||null},{addresses:JSON.stringify({records:r})},{f:"json",outSR:o&&JSON.stringify(o.toJSON())})),d={query:u,callbackParamName:"callback"};return(this.requestOptions||s)&&(d=t.mixin({},this.requestOptions,s,d)),n(this.parsedUrl.path+"/geocodeAddresses",d).then(this._handleAddressesToLocationsResponse)},locationToAddress:function(e,a,s){e&&this.normalization&&(e=e.clone().normalize());var o=this.outSpatialReference,r=this._encode(t.mixin({},this.parsedUrl.query,{outSR:o&&JSON.stringify(o.toJSON()),location:e&&JSON.stringify(e.toJSON()),distance:a,f:"json"})),i={query:r,callbackParamName:"callback"};return(this.requestOptions||s)&&(i=t.mixin({},this.requestOptions,s,i)),n(this.parsedUrl.path+"/reverseGeocode",i).then(this._handleLocationToAddressResponse)},_handleAddressToLocationsResponse:function(e){var t,n,a=e.data,s=a.candidates||[],c=a.spatialReference;return s.map(function(e){return t=e.extent,n=e.location,r(n)&&i(t)?(t&&(t.spatialReference=c),n&&(n.spatialReference=c),o.fromJSON(e)):void 0}).filter(function(e){return!!e})},_handleSuggestLocationsResponse:function(e){return e.data.suggestions||[]},_handleAddressesToLocationsResponse:function(e){var t,n=e.data,a=n.locations||[],s=n.spatialReference;return a.map(function(e){return t=e.location,t&&(t.spatialReference=s),o.fromJSON(e)})},_handleLocationToAddressResponse:function(e){var t=e.data,n=t.address||{},a=t.location,s=n.Match_addr||"";return o.fromJSON({address:s,attributes:n,location:a,score:100})}});return c});