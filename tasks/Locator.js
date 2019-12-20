// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../request","../core/accessorSupport/decorators","../geometry/SpatialReference","./Task","./support/AddressCandidate"],function(e,t,o,n,r,s,a,i,u,c){function l(e){return e&&"number"==typeof e.x&&"number"==typeof e.y}function p(e){return e&&"number"==typeof e.xmin&&"number"==typeof e.ymin&&"number"==typeof e.xmax&&"number"==typeof e.ymax}function d(e){return e?e.clone().normalize():null}function f(e){return e?e.shiftCentralMeridian():null}return function(e){function t(t){var o=e.call(this,t)||this;return o.outSpatialReference=null,o.url=null,o}return o(t,e),t.prototype.addressToLocations=function(e,t){var o=e.address,n=e.categories,a=e.countryCode,i=e.forStorage,u=e.location,c=e.locationType,l=e.magicKey,p=e.maxLocations,y=e.outFields,h=e.searchExtent,g=d(u),S=f(h),m=this,R=m.outSpatialReference,v=m.parsedUrl,O=m.requestOptions,x={f:"json",outSR:R?JSON.stringify(R.toJSON()):null,outFields:y?y.join(","):null,searchExtent:S?JSON.stringify(S.toJSON()):null,category:n?n.join(","):null,countryCode:a||null,magicKey:l||null,location:g,locationType:c||null,maxLocations:p||null,forStorage:i||null},T=this._encode(r({},v.query,o,x)),J={query:T},N=r({},O,t,J),q=v.path+"/findAddressCandidates";return s(q,N).then(this._handleAddressToLocationsResponse)},t.prototype.suggestLocations=function(e,t){var o=this,n=o.parsedUrl,a=o.requestOptions,i=e.location,u=e.searchExtent,c=d(i),l=f(u),p={f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:l?JSON.stringify(l.toJSON()):null,category:e.categories?e.categories.join(","):null,countryCode:e.countryCode||null,location:c},y=this._encode(r({},n.query,p)),h={query:y},g=r({},a,t,h),S=n.path+"/suggest";return s(S,g).then(this._handleSuggestLocationsResponse)},t.prototype.addressesToLocations=function(e,t){var o=this,n=o.outSpatialReference,a=o.parsedUrl,i=o.requestOptions,u=e.addresses,c=e.categories,l=e.locationType,p=e.countryCode,d=[];Array.isArray(u)&&u.forEach(function(e){d.push({attributes:e})});var f={category:c?c.join(","):null,sourceCountry:p||null,addresses:JSON.stringify({records:d}),locationType:l||null,f:"json",outSR:n?JSON.stringify(n):null},y=this._encode(r({},a.query,f)),h={query:y},g=r({},i,t,h),S=a.path+"/geocodeAddresses";return s(S,g).then(this._handleAddressesToLocationsResponse)},t.prototype.locationToAddress=function(e,t){var o=e.locationType,n=e.location,a=d(n),i=void 0!==a,u=this,c=u.outSpatialReference,l=u.parsedUrl,p=u.requestOptions,f={outSR:c?JSON.stringify(c.toJSON()):null,location:i?JSON.stringify(a.toJSON()):null,locationType:o||null,f:"json"},y=this._encode(r({},l.query,f)),h={query:y},g=r({},p,t,h),S=l.path+"/reverseGeocode";return s(S,g).then(this._handleLocationToAddressResponse)},t.prototype._handleAddressToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.candidates,n=t.spatialReference;return o?o.map(function(e){if(e){var t=e.extent,o=e.location,r=!t||p(t);if(l(o)&&r)return t&&(t.spatialReference=n),o.spatialReference=n,c.fromJSON(e)}}):[]},t.prototype._handleSuggestLocationsResponse=function(e){var t=e.data;return t?t.suggestions||[]:[]},t.prototype._handleAddressesToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.locations,n=t.spatialReference;return o?o.map(function(e){var t=e.location;return t&&(t.spatialReference=n),c.fromJSON(e)}):[]},t.prototype._handleLocationToAddressResponse=function(e){var t=e.data;if(t){var o=t.address,n=t.location,r=o&&o.Match_addr||"";return c.fromJSON({address:r,attributes:o||{},location:n,score:100})}},n([a.property({type:i})],t.prototype,"outSpatialReference",void 0),n([a.property()],t.prototype,"url",void 0),t=n([a.subclass("esri.tasks.Locator")],t)}(a.declared(u))});