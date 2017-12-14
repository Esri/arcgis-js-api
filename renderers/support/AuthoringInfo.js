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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary","./AuthoringInfoVisualVariable"],function(e,t,r,i,s,a,n,o){var l=n({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),u=n({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size"}),p=function(e){function t(t){var r=e.call(this)||this;return r.lengthUnit=null,r.visualVariables=null,r}return r(t,e),a=t,Object.defineProperty(t.prototype,"classificationMethod",{get:function(){if("class-breaks-size"===this.type||"class-breaks-color"===this.type){var e=this._get("classificationMethod");return e?e:"manual"}return null},set:function(e){this._set("classificationMethod",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fields",{get:function(){return"predominance"===this.type?this._get("fields"):null},set:function(e){this._set("fields",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"standardDeviationInterval",{get:function(){return"standard-deviation"===this.classificationMethod?this._get("standardDeviationInterval"):null},set:function(e){this._set("standardDeviationInterval",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._get("type")},set:function(e){var t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new a({classificationMethod:this.classificationMethod,fields:this.fields&&this.fields.slice(0),lengthUnit:this.lengthUnit,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(function(e){return e.clone()})})},i([s.property({type:String,value:null,dependsOn:["type"],json:{read:l.read,write:l.write}})],t.prototype,"classificationMethod",null),i([s.property({type:[String],value:null,dependsOn:["type"],json:{write:!0}})],t.prototype,"fields",null),i([s.property({type:String,json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],t.prototype,"lengthUnit",void 0),i([s.property({type:Number,value:null,dependsOn:["classificationMethod"],json:{write:!0}})],t.prototype,"standardDeviationInterval",null),i([s.property({type:String,value:null,json:{read:u.read,write:u.write}})],t.prototype,"type",null),i([s.property({type:[o],json:{write:!0}})],t.prototype,"visualVariables",void 0),t=a=i([s.subclass("esri.renderers.support.AuthoringInfo")],t);var a}(s.declared(a));return p});