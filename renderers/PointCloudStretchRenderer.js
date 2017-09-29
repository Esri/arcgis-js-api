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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","../core/accessorSupport/ensureType","./PointCloudRenderer","../Color"],function(e,r,t,o,p,s,l,n,i,a){var u=function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.fieldTransformType=null,t.stops=null,t}return t(r,e),u=r,r.prototype.writeType=function(e,r,t,o){r.type="pointCloudStretchRenderer"},r.prototype.readStops=function(e,r,t){if(!Array.isArray(e))return null;for(var o=[],p=0,s=e;p<s.length;p++){var l=s[p];l&&"object"==typeof l&&o.push({label:l.label,value:l.value,color:a.fromJSON(l.color)})}return o},r.prototype.castStops=function(e,r,t){if(!Array.isArray(e))return null;for(var o=[],p=0,s=e;p<s.length;p++){var l=s[p];l&&"object"==typeof l&&o.push({label:n.ensureString(l.label),value:n.ensureNumber(l.value),color:n.ensureType(a,l.color)})}return o},r.prototype.writeStops=function(e,r,t,o){if(this.stops){r.stops=[];for(var p=0;p<this.stops.length;p++){var s=this.stops[p];r.stops.push({}),r.stops[p].value=s.value,r.stops[p].color=s.color&&s.color.toJSON(),null!=s.label&&(r.stops[p].label=s.label)}}},r.prototype.clone=function(){return new u(s.mixin(this.cloneProperties(),{field:l.clone(this.field),fieldTransformType:l.clone(this.fieldTransformType),stops:l.clone(this.stops)}))},o([p.property()],r.prototype,"type",void 0),o([p.writer("type")],r.prototype,"writeType",null),o([p.property({json:{write:!0},type:String})],r.prototype,"field",void 0),o([p.property({json:{read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),o([p.property({json:{write:!0}})],r.prototype,"stops",void 0),o([p.reader("stops")],r.prototype,"readStops",null),o([p.cast("stops")],r.prototype,"castStops",null),o([p.writer("stops")],r.prototype,"writeStops",null),r=u=o([p.subclass("esri.renderers.PointCloudStretchRenderer")],r);var u}(p.declared(i));return u});