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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","../core/accessorSupport/ensureType","./PointCloudRenderer","../Color"],function(e,r,o,n,l,t,i,u,s,a){var p=c=function(e){function r(r){var o=e.call(this)||this;return o.type="pointCloudUniqueValueRenderer",o.field=null,o.fieldTransformType=null,o.colorUniqueValueInfos=null,o}return o(r,e),r.prototype.readColorUniqueValueInfos=function(e,r,o){if(!Array.isArray(e))return null;for(var n=[],l=0,t=e;l<t.length;l++){var i=t[l];i&&"object"==typeof i&&n.push({values:i.values,label:i.label,description:i.description,color:a.fromJSON(i.color)})}return n},r.prototype.castColorUniqueValueInfos=function(e,r,o){if(!Array.isArray(e))return null;for(var n=[],l=0,t=e;l<t.length;l++){var i=t[l];i&&"object"==typeof i&&n.push({values:Array.isArray(i.values)?i.values.map(function(e){return u.ensureString(e)}):null,label:u.ensureString(i.label),description:u.ensureString(i.description),color:u.ensureType(a,i.color)})}return n},r.prototype.writeColorUniqueValueInfos=function(e,r,o,n){this.colorUniqueValueInfos&&(r.colorUniqueValueInfos=this.colorUniqueValueInfos.map(function(e){return{values:e.values,color:e.color&&e.color.toJSON(),label:e.label,description:e.description}}))},r.prototype.clone=function(){return new c(t.mixin(this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos)}))},r}(l.declared(s));n([l.property()],p.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],p.prototype,"field",void 0),n([l.property({json:{read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write},type:String})],p.prototype,"fieldTransformType",void 0),n([l.property({json:{write:!0}})],p.prototype,"colorUniqueValueInfos",void 0),n([l.reader("colorUniqueValueInfos")],p.prototype,"readColorUniqueValueInfos",null),n([l.cast("colorUniqueValueInfos")],p.prototype,"castColorUniqueValueInfos",null),n([l.writer("colorUniqueValueInfos")],p.prototype,"writeColorUniqueValueInfos",null),p=c=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],p);var c;return p});