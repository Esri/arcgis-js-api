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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/arrayUtils","../../core/Error","../../core/lang"],(function(t,i,e,a,n,l,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.tilemapDefinitionUrl=i.tilemapDefinitionId=i.Tilemap=void 0;var r=function(){function t(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return t.prototype.getAvailability=function(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;var e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,n=e>>3,l=this._tileAvailabilityBitSet;return n<0||n>l.length?"unknown":l[n]&1<<a?"available":"unavailable"},t.prototype._updateFromData=function(t){for(var i=this.location.width,e=this.location.height,a=!0,n=!0,l=Math.ceil(i*e/8),o=new Uint8Array(l),r=0,h=0;h<t.length;h++){var s=h%8;t[h]?(n=!1,o[r]|=1<<s):a=!1,7===s&&++r}n?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=o,this.byteSize+=o.length)},t.fromDefinition=function(i,o){var r=i.service.request||a,s=i.row,c=i.col,f=i.width,u=i.height,d={query:{f:"json"}};return o=o?e.__assign(e.__assign({},d),o):d,r(h(i),o).then((function(t){return t.data})).catch((function(t){if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:c,width:f,height:u},valid:!0,data:n.constant(f*u,0)};throw t})).then((function(i){if(i.location&&(i.location.top!==s||i.location.left!==c||i.location.width!==f||i.location.height!==u))throw new l("tilemap:location-mismatch","Tilemap response for different location than requested",{response:i,definition:{top:s,left:c,width:f,height:u}});return t.fromJSON(i)}))},t.fromJSON=function(i){t.validateJSON(i);var e=new t;return e.location=Object.freeze(o.clone(i.location)),e._updateFromData(i.data),Object.freeze(e)},t.validateJSON=function(t){if(!t||!t.location)throw new l("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new l("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new l("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new l("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new l("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},t}();function h(t){var i;if("vector-tile"===t.service.type)i=t.service.url+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height;else{var e=t.service.tileServers;i=(e&&e.length?e[t.row%e.length]:t.service.url)+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}var a=t.service.query;return a&&(i=i+"?"+a),i}i.Tilemap=r,i.tilemapDefinitionId=function(t){return t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height},i.tilemapDefinitionUrl=h,i.default=r}));