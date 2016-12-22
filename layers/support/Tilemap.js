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

define(["require","exports","dojo/_base/lang","../../request","../../core/lang","../../core/Error"],function(t,i,e,a,l,n){function o(t){return t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}function r(t){var i=t.service.tileServers,e=i&&i.length?i[t.row%i.length]:t.service.url,a=e+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height,l=t.service.query;return l&&(a=a+"?"+l),a}var h=function(){function t(){this.location={left:0,top:0,width:0,height:0},this.byteSize=40}return t.prototype.getAvailability=function(t,i){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";var e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,n=this._tileAvailabilityBitSet;return 0>l||l>n.length?"unknown":n[l]&1<<a?"available":"unavailable"},t.prototype._updateFromData=function(t){for(var i=this.location.width,e=this.location.height,a=!0,l=!0,n=Math.ceil(i*e/8),o=new Uint8Array(n),r=0,h=0;h<t.length;h++){var s=h%8;t[h]?(l=!1,o[r]|=1<<s):a=!1,7===s&&++r}this._isAllUnvailable=l,this._isAllAvailable=a,this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=o,this.byteSize+=o.length)},t.fromDefinition=function(i,l){var o=i.service.request||a,h=i.row,s=i.col,c=i.width,f=i.height,m={failOk:!0,callbackParamName:"callback"};return l=l?e.mixin(m,l):m,o(r(i),l).then(function(i){var e=i.data;if(e.location&&(e.location.top!==h||e.location.left!==s||e.location.width!==c||e.location.height!==f))throw new n("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:h,left:s,width:c,height:f}});return t.fromJSON(i.data)})},t.fromJSON=function(i){t.validateJSON(i);var e=new t;return e.location=Object.freeze(l.clone(i.location)),e._updateFromData(i.data),Object.freeze(e)},t.validateJSON=function(t){if(!t||!t.location)throw new n("tilemap:missing-location","Location missing from tilemap response");if(!t.valid)throw new n("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new n("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new n("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new n("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},t}();i.Tilemap=h,i.tilemapDefinitionId=o,i.tilemapDefinitionUrl=r,Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=h});