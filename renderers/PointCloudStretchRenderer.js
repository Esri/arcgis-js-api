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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../core/lang","../core/accessorSupport/ensureType","./PointCloudRenderer","../Color"],function(e,r,o,t,s,p,l,n,i,a){var u=c=function(e){function r(r){var o=e.call(this)||this;return o.type="pointCloudStretchRenderer",o.field=null,o.fieldTransformType=null,o.stops=null,o}return o(r,e),r.prototype.readStops=function(e,r,o){if(!Array.isArray(e))return null;for(var t=[],s=0,p=e;s<p.length;s++){var l=p[s];l&&"object"==typeof l&&t.push({label:l.label,value:l.value,color:a.fromJSON(l.color)})}return t},r.prototype.castStops=function(e,r,o){if(!Array.isArray(e))return null;for(var t=[],s=0,p=e;s<p.length;s++){var l=p[s];l&&"object"==typeof l&&t.push({label:n.ensureString(l.label),value:n.ensureNumber(l.value),color:n.ensureType(a,l.color)})}return t},r.prototype.writeStops=function(e,r,o,t){if(this.stops){r.stops=[];for(var s=0;s<this.stops.length;s++){var p=this.stops[s];r.stops.push({}),r.stops[s].value=p.value,r.stops[s].color=p.color&&p.color.toJSON(),null!=p.label&&(r.stops[s].label=p.label)}}},r.prototype.clone=function(){return new c(p.mixin(this.cloneProperties(),{field:l.clone(this.field),fieldTransformType:l.clone(this.fieldTransformType),stops:l.clone(this.stops)}))},r}(s.declared(i));t([s.property()],u.prototype,"type",void 0),t([s.property({json:{write:!0},type:String})],u.prototype,"field",void 0),t([s.property({json:{read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write},type:String})],u.prototype,"fieldTransformType",void 0),t([s.property({json:{write:!0}})],u.prototype,"stops",void 0),t([s.reader("stops")],u.prototype,"readStops",null),t([s.cast("stops")],u.prototype,"castStops",null),t([s.writer("stops")],u.prototype,"writeStops",null),u=c=t([s.subclass("esri.renderers.PointCloudStretchRenderer")],u);var c;return u});