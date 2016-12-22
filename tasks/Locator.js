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

define(["dojo/_base/array","dojo/_base/lang","../request","./Task","../geometry/SpatialReference","./support/AddressCandidate"],function(e,t,s,n,a,o){var r=n.createSubclass({declaredClass:"esri.tasks.Locator",properties:{categories:{value:null,type:[String]},countryCode:{value:null,type:String},outSpatialReference:{value:null,type:a},url:{}},addressToLocations:function(e,n){var a,o=e.outFields,r=e.searchExtent,i=e.countryCode,c=e.magicKey,l=e.distance,u=e.categories,d=e.maxLocations,h=e.forStorage;e.location&&this.normalization&&(a=e.location.clone().normalize()),r&&(r=r.shiftCentralMeridian()),e=e.address;var p=this.outSpatialReference,f=this._encode(t.mixin({},this.parsedUrl.query,e,{f:"json",outSR:p&&JSON.stringify(p.toJSON()),outFields:o&&o.join(",")||null,searchExtent:r&&JSON.stringify(r.toJSON()),category:u&&u.join(",")||null,countryCode:i||null,magicKey:c||null,distance:l||null,location:a||null,maxLocations:d||null,forStorage:h||null})),g={query:f,callbackParamName:"callback"};return(this.requestOptions||n)&&(g=t.mixin({},this.requestOptions,n,g)),s(this.parsedUrl.path+"/findAddressCandidates",g).then(this._handleAddressToLocationsResponse)},suggestLocations:function(e,n){var a;e.hasOwnProperty("location")&&this.normalization&&(e.location=e.location.clone().normalize()),e.searchExtent&&(e.searchExtent=e.searchExtent.shiftCentralMeridian()),a=this._encode(t.mixin({},this.parsedUrl.query,{f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:e.searchExtent&&JSON.stringify(e.searchExtent.toJSON()),category:e.categories&&e.categories.join(",")||null,countryCode:e.countryCode||null,location:e.location||null,distance:e.distance||null},{f:"json"}));var o={query:a,callbackParamName:"callback"};return(this.requestOptions||n)&&(o=t.mixin({},this.requestOptions,n,o)),s(this.parsedUrl.path+"/suggest",o).then(this._handleSuggestLocationsResponse)},addressesToLocations:function(n,a){var o=this.outSpatialReference,r=[],i=n.categories,c=n.countryCode,l=n.addresses;e.forEach(l,function(e,t){r.push({attributes:e})});var u=this._encode(t.mixin({},this.parsedUrl.query,{category:i&&i.join(",")||null,sourceCountry:c||null},{addresses:JSON.stringify({records:r})},{f:"json",outSR:o&&JSON.stringify(o.toJSON())})),d={query:u,callbackParamName:"callback"};return(this.requestOptions||a)&&(d=t.mixin({},this.requestOptions,a,d)),s(this.parsedUrl.path+"/geocodeAddresses",d).then(this._handleAddressesToLocationsResponse)},locationToAddress:function(e,n,a){e&&this.normalization&&(e=e.clone().normalize());var o=this.outSpatialReference,r=this._encode(t.mixin({},this.parsedUrl.query,{outSR:o&&JSON.stringify(o.toJSON()),location:e&&JSON.stringify(e.toJSON()),distance:n,f:"json"})),i={query:r,callbackParamName:"callback"};return(this.requestOptions||a)&&(i=t.mixin({},this.requestOptions,a,i)),s(this.parsedUrl.path+"/reverseGeocode",i).then(this._handleLocationToAddressResponse)},_handleAddressToLocationsResponse:function(e){var t,s=e.data,n=s.candidates||[],a=s.spatialReference;return n.map(function(e){return t=e.location,t&&(t.spatialReference=a),o.fromJSON(e)})},_handleSuggestLocationsResponse:function(e){return e.data.suggestions||[]},_handleAddressesToLocationsResponse:function(e){var t,s=e.data,n=s.locations||[],a=s.spatialReference;return n.map(function(e){return t=e.location,t&&(t.spatialReference=a),o.fromJSON(e)})},_handleLocationToAddressResponse:function(e){var t=e.data;return o.fromJSON({address:t.address,location:t.location,score:100})}});return r});