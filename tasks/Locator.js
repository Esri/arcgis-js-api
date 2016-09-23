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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","../request","./Task","../geometry/SpatialReference","./support/AddressCandidate"],function(e,t,a,n,o,s){var r=n.createSubclass({declaredClass:"esri.tasks.Locator",properties:{categories:{value:null,type:[String]},countryCode:{value:null,type:String},outSpatialReference:{value:null,type:o},url:{}},addressToLocations:function(e,n,o){var s,r,i,c,l,d,u;e.address&&(n=e.outFields,o=e.searchExtent,u=e.countryCode,s=e.magicKey,r=e.distance,d=e.categories,e.location&&this.normalization&&(i=e.location.clone().normalize()),c=e.maxLocations,l=e.forStorage,e=e.address),o&&(o=o.shiftCentralMeridian());var h=this.outSpatialReference,f=this._encode(t.mixin({},this.parsedUrl.query,e,{f:"json",outSR:h&&JSON.stringify(h.toJSON()),outFields:n&&n.join(",")||null,searchExtent:o&&JSON.stringify(o.toJSON()),category:d&&d.join(",")||null,countryCode:u||null,magicKey:s||null,distance:r||null,location:i||null,maxLocations:c||null,forStorage:l||null}));return a(this.parsedUrl.path+"/findAddressCandidates",{query:f,callbackParamName:"callback"}).then(this._handleAddressToLocationsResponse)},suggestLocations:function(e){var n;return e.hasOwnProperty("location")&&this.normalization&&(e.location=e.location.clone().normalize()),e.searchExtent&&(e.searchExtent=e.searchExtent.shiftCentralMeridian()),n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:e.searchExtent&&JSON.stringify(e.searchExtent.toJSON()),category:e.categories&&e.categories.join(",")||null,countryCode:e.countryCode||null,location:e.location||null,distance:e.distance||null},{f:"json"})),a(this.parsedUrl.path+"/suggest",{query:n,callbackParamName:"callback"}).then(this._handleSuggestLocationsResponse)},addressesToLocations:function(n){var o=this.outSpatialReference,s=[],r=n.categories,i=n.countryCode,c=n.addresses;e.forEach(c,function(e,t){s.push({attributes:e})});var l=this._encode(t.mixin({},this.parsedUrl.query,{category:r&&r.join(",")||null,sourceCountry:i||null},{addresses:JSON.stringify({records:s})},{f:"json",outSR:o&&JSON.stringify(o.toJSON())}));return a(this.parsedUrl.path+"/geocodeAddresses",{query:l,callbackParamName:"callback"}).then(this._handleAddressesToLocationsResponse)},locationToAddress:function(e,n){e&&this.normalization&&(e=e.clone().normalize());var o=this.outSpatialReference,s=this._encode(t.mixin({},this.parsedUrl.query,{outSR:o&&JSON.stringify(o.toJSON()),location:e&&JSON.stringify(e.toJSON()),distance:n,f:"json"}));return a(this.parsedUrl.path+"/reverseGeocode",{query:s,callbackParamName:"callback"}).then(this._handleLocationToAddressResponse)},_handleAddressToLocationsResponse:function(e){var t,a=e.data,n=a.candidates||[],o=a.spatialReference;return n.map(function(e){return t=e.location,t&&(t.spatialReference=o),s.fromJSON(e)})},_handleSuggestLocationsResponse:function(e){return e.data.suggestions||[]},_handleAddressesToLocationsResponse:function(e){var t,a=e.data,n=a.locations||[],o=a.spatialReference;return n.map(function(e){return t=e.location,t&&(t.spatialReference=o),s.fromJSON(e)})},_handleLocationToAddressResponse:function(e){var t=e.data;return s.fromJSON({address:t.address,location:t.location,score:100})}});return r});