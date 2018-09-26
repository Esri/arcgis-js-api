// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/Error","../../core/lang","../../core/promiseUtils"],function(t,i,e,a,l,o,n){function r(t){return t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}function h(t){var i;if("vector-tile"===t.service.type)i=t.service.url+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height;else{var e=t.service.tileServers;i=(e&&e.length?e[t.row%e.length]:t.service.url)+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}var a=t.service.query;return a&&(i=i+"?"+a),i}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(){this.location={left:0,top:0,width:0,height:0},this.byteSize=40}return t.prototype.getAvailability=function(t,i){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";var e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"},t.prototype._updateFromData=function(t){for(var i=this.location.width,e=this.location.height,a=!0,l=!0,o=Math.ceil(i*e/8),n=new Uint8Array(o),r=0,h=0;h<t.length;h++){var s=h%8;t[h]?(l=!1,n[r]|=1<<s):a=!1,7===s&&++r}this._isAllUnvailable=l,this._isAllAvailable=a,this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=n,this.byteSize+=n.length)},t.fromDefinition=function(i,o){var r=i.service.request||a,s=i.row,c=i.col,f=i.width,u=i.height,d={query:{f:"json"},callbackParamName:"callback"};return o=o?e({},d,o):d,r(h(i),o).then(function(t){return t.data}).catch(function(t){return t&&t.details&&422===t.details.httpStatus?{location:{top:s,left:c,width:f,height:u},valid:!0,data:function(){for(var t=[],i=0,e=f*u;i<e;i++)t[i]=0;return t}()}:n.reject(t)}).then(function(i){if(i.location&&(i.location.top!==s||i.location.left!==c||i.location.width!==f||i.location.height!==u))throw new l("tilemap:location-mismatch","Tilemap response for different location than requested",{response:i,definition:{top:s,left:c,width:f,height:u}});return t.fromJSON(i)})},t.fromJSON=function(i){t.validateJSON(i);var e=new t;return e.location=Object.freeze(o.clone(i.location)),e._updateFromData(i.data),Object.freeze(e)},t.validateJSON=function(t){if(!t||!t.location)throw new l("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new l("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new l("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new l("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new l("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},t}();i.Tilemap=s,i.tilemapDefinitionId=r,i.tilemapDefinitionUrl=h,i.default=s});