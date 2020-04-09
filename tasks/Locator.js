// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../request","../core/accessorSupport/decorators","../geometry/SpatialReference","./Task","./support/AddressCandidate"],(function(e,t,o,n,r,s,a,i,u,c){function l(e){return e?e.clone().normalize():null}function p(e){return e?e.shiftCentralMeridian():null}return function(e){function t(t){var o=e.call(this,t)||this;return o.outSpatialReference=null,o.url=null,o}return o(t,e),t.prototype.addressToLocations=function(e,t){var o=e.address,n=e.categories,a=e.countryCode,i=e.forStorage,u=e.location,c=e.locationType,d=e.magicKey,f=e.maxLocations,y=e.outFields,h=e.searchExtent,g=l(u),S=p(h),m=this.outSpatialReference,R=this.parsedUrl,v=this.requestOptions,O={f:"json",outSR:m?JSON.stringify(m.toJSON()):null,outFields:y?y.join(","):null,searchExtent:S?JSON.stringify(S.toJSON()):null,category:n?n.join(","):null,countryCode:a||null,magicKey:d||null,location:g,locationType:c||null,maxLocations:f||null,forStorage:i||null},x=this._encode(r({},R.query,o,O)),T=r({},v,t,{query:x}),J=R.path+"/findAddressCandidates";return s(J,T).then(this._handleAddressToLocationsResponse)},t.prototype.suggestLocations=function(e,t){var o=this.parsedUrl,n=this.requestOptions,a=e.location,i=e.searchExtent,u=l(a),c=p(i),d={f:"json",text:e.text,maxSuggestions:e.maxSuggestions,searchExtent:c?JSON.stringify(c.toJSON()):null,category:e.categories?e.categories.join(","):null,countryCode:e.countryCode||null,location:u},f=this._encode(r({},o.query,d)),y=r({},n,t,{query:f}),h=o.path+"/suggest";return s(h,y).then(this._handleSuggestLocationsResponse)},t.prototype.addressesToLocations=function(e,t){var o=this.outSpatialReference,n=this.parsedUrl,a=this.requestOptions,i=e.addresses,u=e.categories,c=e.locationType,l=e.countryCode,p=[];Array.isArray(i)&&i.forEach((function(e){p.push({attributes:e})}));var d={category:u?u.join(","):null,sourceCountry:l||null,addresses:JSON.stringify({records:p}),locationType:c||null,f:"json",outSR:o?JSON.stringify(o):null},f=this._encode(r({},n.query,d)),y=r({},a,t,{query:f}),h=n.path+"/geocodeAddresses";return s(h,y).then(this._handleAddressesToLocationsResponse)},t.prototype.locationToAddress=function(e,t){var o=e.locationType,n=l(e.location),a=void 0!==n,i=this.outSpatialReference,u=this.parsedUrl,c=this.requestOptions,p={outSR:i?JSON.stringify(i.toJSON()):null,location:a?JSON.stringify(n.toJSON()):null,locationType:o||null,f:"json"},d=this._encode(r({},u.query,p)),f=r({},c,t,{query:d}),y=u.path+"/reverseGeocode";return s(y,f).then(this._handleLocationToAddressResponse)},t.prototype._handleAddressToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.candidates,n=t.spatialReference;return o?o.map((function(e){if(e){var t=e.extent,o=e.location,r=!t||function(e){return e&&"number"==typeof e.xmin&&"number"==typeof e.ymin&&"number"==typeof e.xmax&&"number"==typeof e.ymax}(t);if(function(e){return e&&"number"==typeof e.x&&"number"==typeof e.y}(o)&&r)return t&&(t.spatialReference=n),o.spatialReference=n,c.fromJSON(e)}})):[]},t.prototype._handleSuggestLocationsResponse=function(e){var t=e.data;return t&&t.suggestions||[]},t.prototype._handleAddressesToLocationsResponse=function(e){var t=e.data;if(!t)return[];var o=t.locations,n=t.spatialReference;return o?o.map((function(e){var t=e.location;return t&&(t.spatialReference=n),c.fromJSON(e)})):[]},t.prototype._handleLocationToAddressResponse=function(e){var t=e.data;if(t){var o=t.address,n=t.location,r=o&&o.Match_addr||"";return c.fromJSON({address:r,attributes:o||{},location:n,score:100})}},n([a.property({type:i})],t.prototype,"outSpatialReference",void 0),n([a.property()],t.prototype,"url",void 0),t=n([a.subclass("esri.tasks.Locator")],t)}(a.declared(u))}));