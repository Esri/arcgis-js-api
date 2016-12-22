// COPYRIGHT © 2016 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./PointCloudRenderer"],function(r,e,o,t,l,p){var s=function(r){function e(e){r.call(this),this.type="pointCloudStretchRenderer",this.field=null,this.fieldTransformType=null,this.stops=null}return o(e,r),e.prototype.readStops=function(r,e,o){if(!Array.isArray(r))return null;for(var t=[],l=0,p=r;l<p.length;l++){var s=p[l];if(s&&"object"==typeof s){var n=null!=s.label?String(s.label):null,i=null!=s.value?parseFloat(s.value):null,u=Array.isArray(s.color)&&s.color.length>=3&&s.color.length<=4&&s.color.every(function(r){return"number"==typeof r})?s.color.slice():null;t.push({label:n,value:i,color:u})}}return t},e.prototype.writeStops=function(r,e,o){if(this.stops){e.stops=[];for(var t=0;t<this.stops.length;t++){var l=this.stops[t];e.stops.push({}),e.stops[t].value=l.value,e.stops[t].color=l.color&&l.color.slice(),null!=l.label&&(e.stops[t].label=l.label)}}},t([l.property()],e.prototype,"type",void 0),t([l.property({json:{writable:!0},type:String})],e.prototype,"field",void 0),t([l.property({json:{writable:!0},type:String})],e.prototype,"fieldTransformType",void 0),t([l.property({json:{writable:!0}})],e.prototype,"stops",void 0),t([l.read("stops")],e.prototype,"readStops",null),t([l.write("stops")],e.prototype,"writeStops",null),e=t([l.subclass("esri.renderer.PointCloudStretchRenderer")],e)}(l.declared(p));return s});