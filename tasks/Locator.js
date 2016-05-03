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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/array","../core/declare","dojo/_base/lang","../request","./Task","./support/AddressCandidate"],function(e,a,t,n,o,s){var r=a(o,{declaredClass:"esri.tasks.Locator",categories:null,countryCode:null,outSpatialReference:null,url:null,addressToLocations:function(e,a,o){var s,r,i,c,l,d,u;e.address&&(a=e.outFields,o=e.searchExtent,u=e.countryCode,s=e.magicKey,r=e.distance,d=e.categories,e.location&&this.normalization&&(i=e.location.clone().normalize()),c=e.maxLocations,l=e.forStorage,e=e.address),o&&(o=o.shiftCentralMeridian());var h=this.outSpatialReference,f=this._encode(t.mixin({},this.parsedUrl.query,e,{f:"json",outSR:h&&JSON.stringify(h.toJSON()),outFields:a&&a.join(",")||null,searchExtent:o&&JSON.stringify(o.toJSON()),category:d&&d.join(",")||null,countryCode:u||null,magicKey:s||null,distance:r||null,location:i||null,maxLocations:c||null,forStorage:l||null}));return n(this.parsedUrl.path+"/findAddressCandidates",{query:f,callbackParamName:"callback"}).then(this._handleAddressToLocationsResponse)},_handleAddressToLocationsResponse:function(e){var a,t=e.data,n=t.candidates||[],o=t.spatialReference;return n.map(function(e){return a=e.location,a&&(a.spatialReference=o),s.fromJSON(e)})},suggestLocations:function(e){var a;return e.hasOwnProperty("location")&&this.normalization&&(e.location=e.location.clone().normalize()),e.searchExtent&&(e.searchExtent=e.searchExtent.shiftCentralMeridian()),a=this._encode(t.mixin({},this.parsedUrl.query,{f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:e.searchExtent&&JSON.stringify(e.searchExtent.toJSON()),category:e.categories&&e.categories.join(",")||null,countryCode:e.countryCode||null,location:e.location||null,distance:e.distance||null},{f:"json"})),n(this.parsedUrl.path+"/suggest",{query:a,callbackParamName:"callback"}).then(this._handleSuggestLocationsResponse)},_handleSuggestLocationsResponse:function(e){return e.data.suggestions||[]},addressesToLocations:function(a){var o=this.outSpatialReference,s=[],r=a.categories,i=a.countryCode,c=a.addresses;e.forEach(c,function(e){s.push({attributes:e})});var l=this._encode(t.mixin({},this.parsedUrl.query,{category:r&&r.join(",")||null,sourceCountry:i||null},{addresses:JSON.stringify({records:s})},{f:"json",outSR:o&&JSON.stringify(o.toJSON())}));return n(this.parsedUrl.path+"/geocodeAddresses",{query:l,callbackParamName:"callback"}).then(this._handleAddressesToLocationsResponse)},_handleAddressesToLocationsResponse:function(e){var a,t=e.data,n=t.locations||[],o=t.spatialReference;return n.map(function(e){return a=e.location,a&&(a.spatialReference=o),s.fromJSON(e)})},locationToAddress:function(e,a){e&&this.normalization&&(e=e.clone().normalize());var o=this.outSpatialReference,s=this._encode(t.mixin({},this.parsedUrl.query,{outSR:o&&JSON.stringify(o.toJSON()),location:e&&JSON.stringify(e.toJSON()),distance:a,f:"json"}));return n(this.parsedUrl.path+"/reverseGeocode",{query:s,callbackParamName:"callback"}).then(this._handleLocationToAddressResponse)},_handleLocationToAddressResponse:function(e){var a=e.data;return s.fromJSON({address:a.address,location:a.location,score:100})}});return r});