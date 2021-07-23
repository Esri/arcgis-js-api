// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

!function(e){function t(e){var t;return Array.isArray(e)?e.length>3?(t={x:e[0],y:e[1],w:Math.abs(e[0]-e[2]),h:Math.abs(e[1]-e[3])},"kdtree"==this.system&&(t={x:t.x+t.w/2,y:t.y+t.h/2})):(t={x:e[0],y:e[1],attributes:e[3]},"kdtree"!=this.system&&(t.w=0,t.h=0)):"x"in e&&"y"in e&&(t=e,"kdtree"==this.system||"h"in e&&"w"in e||(t.w=0,t.h=0)),t}function r(e){var t=(e=e||{}).data;if(delete e.data,merge(e,this),t){var r=e.indexOptions||{};merge({layerId:e.layerId},r),this.index=this.create(t,r)}}mixin(r,{system:"rtree",index:null,create:function(e,t){return this.index=this["_create_"+this.system](e,t||this.indexOptions),this.index},search:function(e,t){return this["_search_"+this.system](e,t)},insert:function(e,t,r){return e.geom&&(t=e.data,delete(e=e.geom).data),this["_insert_"+this.system](e,t,r)},remove:function(e,t){return e.geom&&(t=e.data,delete(e=e.geom).data),this["_remove_"+this.system](e,t)},serialize:function(){var e=this.index;return e.toJSON!==Object.prototype.toJSON?e.toJSON():e.serialize&&e.serialize()},load:function(e){return this.index=this["_load_"+this.system](e),this.index},_indexLibraries:{kdtree:{ns:"kdTree",script:"libs/kdTree.js"},rtree:{ns:"RTree",script:"libs/rtree.js"},quadtree:{ns:"Quadtree",script:"libs/quadtree.js"}},_create_rtree:function(r,i){this._indexLibraries.rtree.ns in e||importScripts(this._indexLibraries.rtree.script);for(var n,s=new RTree(i&&i.width),d=r.length;d--;)(n=r[d]).id=null!=n.id?n.id:this.idField&&n.attributes[this.idField],n.layerId=n.layerId||i.layerId,n.geometry?s.insert(t(geomToBbox(n.geometry)),n):s.insert(t(n),n);return s},_create_kdtree:function(r,i){this._indexLibraries.kdtree.ns in e||importScripts(this._indexLibraries.kdtree.script);for(var n,s,d=(i=i||{}).dist||function(e,t){var r=e.x-t.x,i=e.y-t.y;return Math.sqrt(r*r+i*i)},o=i.dimensions||["x","y"],a=r.length,h=[];a--;)s=null!=(n=r[a]).id?n.id:this.idField&&n.attributes[this.idField],n.geometry?(n.geometry=t(geomToBbox(n.geometry)),merge(n.attributes,n.geometry),n.geometry.id=s,n.geometry.layerId=i.layerId,h.push(n.geometry)):((n=t(n)).id=s,n.layerId=i.layerId,h.push(n));return new kdTree(h,d,o)},_create_quadtree:function(e,t){throw"Not Implimented"},_search_kdtree:function(e){var r=e;return r.geometry?r.point=geomToBbox(r.geometry):r.point.geometry&&(r.point=geomToBbox(r.point.geometry)),this.index.nearest(t(r.point),r.count||1,r.filter,r.distance)},_search_rtree:function(e,r){if(e.geometry)e=geomToBbox(e.geometry);else if(void 0!==e.xmin&&void 0!==e.ymax){var i=e;e=[i.xmin,i.ymin,i.xmax,i.ymax]}return this.index.search(t(e),!0===r)},_search_quadtree:function(e){throw"Not Implimented"},_insert_kdtree:function(e,r,i){return e.geometry&&((r=r||e.attributes).id=null!=r.id?r.id:this.idField&&r[this.idField],e=e.geometry),(e=t(e)).layerId=i,r&&("object"==typeof r?merge(r,e):Array.isArray(r)||(e.id=r)),this.index.insert(e),this.index.root},_insert_rtree:function(e,r,i){return e.geometry&&(null==r&&(r=e),e=geomToBbox(e.geometry)),"string"==typeof r||"number"==typeof r?r={id:r,layerId:i}:(r.id=null!=r.id?r.id:this.idField&&(r[this.idField]||r.attributes[this.idField]),r.layerId=i),this.index.insert(t(e),r)},_insert_quadtree:function(e,t){throw"Not Implimented"},_remove_kdtree:function(e,r){e=t(e),r&&("object"==typeof r?merge(r,e):Array.isArray(r)||(e.id=r));var i=this.index.remove(e);return i&&[i]},_remove_rtree:function(e,r){return this.index.remove(t(e),r)},_remove_quadtree:function(e,t){throw"Not Implimented"},_load_rtree:function(t){this._indexLibraries.rtree.ns in e||importScripts(this._indexLibraries.rtree.script);var r=this.index||(this.index=new RTree);return r.deserialize(t),r},_load_kdtree:function(e){return this._create_kdtree(e)}}),e.Indexer=r}(this);