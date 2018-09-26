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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../request","../core/accessorSupport/decorators","../geometry/SpatialReference","./Task","./support/AddressCandidate"],function(e,t,o,r,n,s,a,i,u,c){function l(e){return e&&"number"==typeof e.x&&"number"==typeof e.x}function d(e){return e&&"number"==typeof e.xmin&&"number"==typeof e.ymin&&"number"==typeof e.xmax&&"number"==typeof e.ymax}function p(e){return e?e.clone().normalize():null}function f(e){return e?e.shiftCentralMeridian():null}return function(e){function t(t){var o=e.call(this,t)||this;return o.categories=null,o.countryCode=null,o.outSpatialReference=null,o.url=null,o}return o(t,e),t.prototype.addressToLocations=function(e,t){var o=e.address,r=e.categories,a=e.countryCode,i=e.distance,u=e.forStorage,c=e.location,l=e.magicKey,d=e.maxLocations,y=e.outFields,h=e.searchExtent,g=p(c),S=f(h),m=this,v=m.outSpatialReference,R=m.parsedUrl,x=m.requestOptions,O={f:"json",outSR:v?JSON.stringify(v.toJSON()):null,outFields:y?y.join(","):null,searchExtent:S?JSON.stringify(S.toJSON()):null,category:r?r.join(","):null,countryCode:a||null,magicKey:l||null,distance:i||null,location:g,maxLocations:d||null,forStorage:u||null},J=this._encode(n({},R.query,o,O)),N={query:J},q=n({},x,t,N),L=R.path+"/findAddressCandidates";return s(L,q).then(this._handleAddressToLocationsResponse)},t.prototype.suggestLocations=function(e,t){var o=this,r=o.parsedUrl,a=o.requestOptions,i=e.location,u=e.searchExtent,c=p(i),l=f(u),d={f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:l?JSON.stringify(l.toJSON()):null,category:e.categories?e.categories.join(","):null,countryCode:e.countryCode||null,location:c,distance:e.distance||null},y=this._encode(n({},r.query,d)),h={query:y},g=n({},a,t,h),S=r.path+"/suggest";return s(S,g).then(this._handleSuggestLocationsResponse)},t.prototype.addressesToLocations=function(e,t){var o=this,r=o.outSpatialReference,a=o.parsedUrl,i=o.requestOptions,u=e.addresses,c=e.categories,l=e.countryCode,d=[];Array.isArray(u)&&u.forEach(function(e){d.push({attributes:e})});var p={category:c?c.join(","):null,sourceCountry:l||null,addresses:JSON.stringify({records:d}),f:"json",outSR:r?JSON.stringify(r):null},f=this._encode(n({},a.query,p)),y={query:f},h=n({},i,t,y),g=a.path+"/geocodeAddresses";return s(g,h).then(this._handleAddressesToLocationsResponse)},t.prototype.locationToAddress=function(e,t,o){var r=p(e),a=void 0!==r,i=void 0!==t&&a,u=this,c=u.outSpatialReference,l=u.parsedUrl,d=u.requestOptions,f={outSR:c?JSON.stringify(c.toJSON()):null,location:a?JSON.stringify(r.toJSON()):null,distance:i?t:null,f:"json"},y=this._encode(n({},l.query,f)),h={query:y},g=n({},d,o,h),S=l.path+"/reverseGeocode";return s(S,g).then(this._handleLocationToAddressResponse)},t.prototype._handleAddressToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.candidates,r=t.spatialReference;return o?o.map(function(e){if(e){var t=e.extent,o=e.location,n=!t||d(t);if(l(o)&&n)return t&&(t.spatialReference=r),o.spatialReference=r,c.fromJSON(e)}}):[]},t.prototype._handleSuggestLocationsResponse=function(e){var t=e.data;return t?t.suggestions||[]:[]},t.prototype._handleAddressesToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.locations,r=t.spatialReference;return o?o.map(function(e){var t=e.location;return t&&(t.spatialReference=r),c.fromJSON(e)}):[]},t.prototype._handleLocationToAddressResponse=function(e){var t=e.data;if(t){var o=t.address,r=t.location,n=o&&o.Match_addr||"";return c.fromJSON({address:n,attributes:o||{},location:r,score:100})}},r([a.property()],t.prototype,"categories",void 0),r([a.property()],t.prototype,"countryCode",void 0),r([a.property({type:i})],t.prototype,"outSpatialReference",void 0),r([a.property()],t.prototype,"url",void 0),t=r([a.subclass("esri.tasks.Locator")],t)}(a.declared(u))});