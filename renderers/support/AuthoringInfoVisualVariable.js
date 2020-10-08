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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/cast"],(function(e,t,r,o,n,i,p){"use strict";var s=new o.default({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),l=new o.default({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),a={key:function(e){return"number"==typeof e?"number":"string"},typeMap:{number:Number,string:String},base:null},u=["high-to-low","above-and-below","centered-on","extremes"],y=["seconds","minutes","hours","days","months","years"];return function(e){function t(t){var r=e.call(this,t)||this;return r.endTime=null,r.field=null,r.maxSliderValue=null,r.minSliderValue=null,r.startTime=null,r.type=null,r.units=null,r}var o;return r.__extends(t,e),o=t,t.prototype.castEndTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},t.prototype.castStartTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},Object.defineProperty(t.prototype,"style",{get:function(){return"color"===this.type?this._get("style"):null},set:function(e){this._set("style",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"theme",{get:function(){return"color"===this.type?this._get("theme")||"high-to-low":null},set:function(e){this._set("theme",e)},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new o({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})},r.__decorate([i.property({types:a,json:{write:!0}})],t.prototype,"endTime",void 0),r.__decorate([p.cast("endTime")],t.prototype,"castEndTime",null),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"maxSliderValue",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"minSliderValue",void 0),r.__decorate([i.property({types:a,json:{write:!0}})],t.prototype,"startTime",void 0),r.__decorate([p.cast("startTime")],t.prototype,"castStartTime",null),r.__decorate([i.property({type:s.apiValues,value:null,dependsOn:["type"],json:{type:s.jsonValues,read:s.read,write:s.write}})],t.prototype,"style",null),r.__decorate([i.property({type:u,value:null,dependsOn:["type"],json:{type:u,write:!0}})],t.prototype,"theme",null),r.__decorate([i.property({type:l.apiValues,json:{type:l.jsonValues,read:l.read,write:l.write}})],t.prototype,"type",void 0),r.__decorate([i.property({type:y,json:{type:y,write:!0}})],t.prototype,"units",void 0),t=o=r.__decorate([i.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],t)}(n.JSONSupport)}));