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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../core/accessorSupport/decorators","../../geometry/Point","./DimensionalDefinition"],function(e,t,o,r,i,n,s,a,p,c){var l=n({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),d=n({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});return function(e){function t(t){var o=e.call(this)||this;return o.ascending=!0,o.lockRasterIds=null,o.method=null,o.multidimensionalDefinition=null,o.objectIds=null,o.operation=null,o.sortField=null,o.sortValue=null,o.viewpoint=null,o.where=null,o}o(t,e),i=t,t.prototype.writeAscending=function(e,t,o,r){e||(t[o]=!1)},t.prototype.readMethod=function(e,t){var o=t.mosaicMethod||t.defaultMosaicMethod,r=o.toLowerCase();switch(r){case"byattribute":o="attribute";break;case"lockraster":o="lock-raster";break;case"center":case"northwest":case"nadir":case"viewpoint":case"seamline":case"none":o=r}return d.fromJSON(o)},t.prototype.readOperation=function(e,t){return l.fromJSON(t.mosaicOperation||t.mosaicOperator&&t.mosaicOperator.toLowerCase())},t.prototype.clone=function(){return new i({ascending:this.ascending,lockRasterIds:s.clone(this.lockRasterIds),method:this.method,multidimensionalDefinition:s.clone(this.multidimensionalDefinition),objectIds:s.clone(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:s.clone(this.viewpoint),where:this.where})};var i;return r([a.property({type:Boolean})],t.prototype,"ascending",void 0),r([a.writer("ascending")],t.prototype,"writeAscending",null),r([a.property({type:[Number],json:{write:!0}})],t.prototype,"lockRasterIds",void 0),r([a.property({json:{write:{target:"mosaicMethod",writer:d.write}}})],t.prototype,"method",void 0),r([a.reader("method",["mosaicMethod","defaultMosaicMethod"])],t.prototype,"readMethod",null),r([a.property({type:[c],json:{write:!0}})],t.prototype,"multidimensionalDefinition",void 0),r([a.property({json:{read:{source:"fids"},write:{target:"fids"}}})],t.prototype,"objectIds",void 0),r([a.property({json:{read:{reader:l.read},write:{target:"mosaicOperation",writer:l.write}}})],t.prototype,"operation",void 0),r([a.reader("operation",["mosaicOperation","mosaicOperator"])],t.prototype,"readOperation",null),r([a.property({type:String,json:{write:!0}})],t.prototype,"sortField",void 0),r([a.property({json:{write:!0}})],t.prototype,"sortValue",void 0),r([a.property({type:p,json:{write:!0}})],t.prototype,"viewpoint",void 0),r([a.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),t=i=r([a.subclass("esri.layers.support.MosaicRule")],t)}(a.declared(i))});