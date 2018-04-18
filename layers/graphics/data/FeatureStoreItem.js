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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","@dojo/shim/iterator","./FeatureSetReader"],function(t,e,r,o){function i(t){var e=o.createFeatureSetReader(t),i=[];return r.forOf(e.oids(),function(t){i.push(new n(e,t))}),i}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.reader=t,this.oid=e,this.count=1,this.bounds=void 0}return t.prototype.getBounds=function(){return void 0===this.bounds&&(this.bounds=this.reader.getBounds(this.oid)),this.bounds},t.prototype.getCentroid=function(){return this.reader.getCentroid(this.oid)},t.prototype.getCentroidQuantized=function(t,e,r){return this.reader.getCentroidQuantized(this.oid,t,e,r)},t.prototype.getGeometry=function(){return this.reader.getGeometry(this.oid)},t.prototype.getGeometryQuantized=function(t,e,r){return this.reader.getGeometryQuantized(this.oid,t,e,r)},t.prototype.getAttributes=function(){return this.reader.getAttributes(this.oid)},t}();e.default=n,e.createFromFeatureSet=i});