// COPYRIGHT © 2017 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./PointCloudRenderer","../Color"],function(e,r,o,n,l,t,u,i){var a=function(e){function r(r){var o=e.call(this)||this;return o.type="pointCloudUniqueValueRenderer",o.field=null,o.fieldTransformType=null,o.colorUniqueValueInfos=null,o}return o(r,e),r.prototype.readColorUniqueValueInfos=function(e,r,o){if(!Array.isArray(e))return null;for(var n=[],l=0,t=e;l<t.length;l++){var u=t[l];u&&"object"==typeof u&&n.push({values:u.values,label:u.label,description:u.description,color:i.fromJSON(u.color)})}return n},r.prototype.castColorUniqueValueInfos=function(e,r,o){if(!Array.isArray(e))return null;for(var n=[],l=0,u=e;l<u.length;l++){var a=u[l];a&&"object"==typeof a&&n.push({values:Array.isArray(a.values)?a.values.map(function(e){return t.ensureString(e)}):null,label:t.ensureString(a.label),description:t.ensureString(a.description),color:t.ensureType(i,a.color)})}return n},r.prototype.writeColorUniqueValueInfos=function(e,r,o,n){this.colorUniqueValueInfos&&(r.colorUniqueValueInfos=this.colorUniqueValueInfos.map(function(e){return{values:e.values,color:e.color&&e.color.toJSON(),label:e.label,description:e.description}}))},r}(l.declared(u));return n([l.property()],a.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],a.prototype,"field",void 0),n([l.property({json:{read:u.fieldTransformTypeKebabDict.read,write:u.fieldTransformTypeKebabDict.write},type:String})],a.prototype,"fieldTransformType",void 0),n([l.property({json:{write:!0}})],a.prototype,"colorUniqueValueInfos",void 0),n([l.reader("colorUniqueValueInfos")],a.prototype,"readColorUniqueValueInfos",null),n([l.cast("colorUniqueValueInfos")],a.prototype,"castColorUniqueValueInfos",null),n([l.writer("colorUniqueValueInfos")],a.prototype,"writeColorUniqueValueInfos",null),a=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],a)});