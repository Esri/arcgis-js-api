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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./PointCloudRenderer","../Color"],function(r,e,o,t,p,s,l,n){var a=function(r){function e(e){var o=r.call(this)||this;return o.type="pointCloudStretchRenderer",o.field=null,o.fieldTransformType=null,o.stops=null,o}return o(e,r),e.prototype.readStops=function(r,e,o){if(!Array.isArray(r))return null;for(var t=[],p=0,s=r;p<s.length;p++){var l=s[p];l&&"object"==typeof l&&t.push({label:l.label,value:l.value,color:n.fromJSON(l.color)})}return t},e.prototype.castStops=function(r,e,o){if(!Array.isArray(r))return null;for(var t=[],p=0,l=r;p<l.length;p++){var a=l[p];a&&"object"==typeof a&&t.push({label:s.ensureString(a.label),value:s.ensureNumber(a.value),color:s.ensureType(n,a.color)})}return t},e.prototype.writeStops=function(r,e,o,t){if(this.stops){e.stops=[];for(var p=0;p<this.stops.length;p++){var s=this.stops[p];e.stops.push({}),e.stops[p].value=s.value,e.stops[p].color=s.color&&s.color.toJSON(),null!=s.label&&(e.stops[p].label=s.label)}}},e}(p.declared(l));return t([p.property()],a.prototype,"type",void 0),t([p.property({json:{write:!0},type:String})],a.prototype,"field",void 0),t([p.property({json:{read:l.fieldTransformTypeKebabDict.read,write:l.fieldTransformTypeKebabDict.write},type:String})],a.prototype,"fieldTransformType",void 0),t([p.property({json:{write:!0}})],a.prototype,"stops",void 0),t([p.reader("stops")],a.prototype,"readStops",null),t([p.cast("stops")],a.prototype,"castStops",null),t([p.writer("stops")],a.prototype,"writeStops",null),a=t([p.subclass("esri.renderers.PointCloudStretchRenderer")],a)});