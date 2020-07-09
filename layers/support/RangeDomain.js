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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","./Domain"],(function(e,r,n,t,a){return function(e){function r(r){var n=e.call(this,r)||this;return n.maxValue=null,n.minValue=null,n.type="range",n}var a;return n.__extends(r,e),a=r,r.prototype.clone=function(){return new a({maxValue:this.maxValue,minValue:this.minValue,name:this.name})},n.__decorate([t.property({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,r){return r.range&&r.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,r,n){r[n]=[this.minValue||0,e]}}}})],r.prototype,"maxValue",void 0),n.__decorate([t.property({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,r){return r.range&&r.range[0]}},write:{target:"range",writer:function(e,r,n){r[n]=[e,this.maxValue||0]}}}})],r.prototype,"minValue",void 0),n.__decorate([t.enumeration({range:"range"})],r.prototype,"type",void 0),r=a=n.__decorate([t.subclass("esri.layers.support.RangeDomain")],r)}(a)}));