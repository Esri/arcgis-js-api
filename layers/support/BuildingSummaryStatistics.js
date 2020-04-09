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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/JSONSupport","../../core/Loadable","../../core/Logger","../../core/maybe","../../core/Promise","../../core/promiseUtils","../../core/accessorSupport/decorators"],(function(e,r,t,o,i,n,p,s,u,l,a,y,c,d){var m=l.getLogger("esri.layers.support.BuildingSummaryStatistics"),f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.fieldName=null,r.modelName=null,r.label=null,r.min=null,r.max=null,r.mostFrequentValues=null,r.subLayerIds=null,r}return t(r,e),o([d.property({type:String})],r.prototype,"fieldName",void 0),o([d.property({type:String})],r.prototype,"modelName",void 0),o([d.property({type:String})],r.prototype,"label",void 0),o([d.property({type:Number})],r.prototype,"min",void 0),o([d.property({type:Number})],r.prototype,"max",void 0),o([d.property({json:{read:function(e){return Array.isArray(e)&&(e.every((function(e){return"string"==typeof e}))||e.every((function(e){return"number"==typeof e})))?e.slice():null}}})],r.prototype,"mostFrequentValues",void 0),o([d.property({type:[Number]})],r.prototype,"subLayerIds",void 0),r=o([d.subclass("esri.layers.support.BuildingFieldStatistics")],r)}(d.declared(s.JSONSupport));return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.url=null,r}return t(r,e),Object.defineProperty(r.prototype,"fields",{get:function(){return this.loaded?this._get("fields"):(m.error("building summary statistics are not loaded"),null)},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),c.resolve(this)},r.prototype._fetchService=function(e){return n(this,void 0,void 0,(function(){var r,t;return i(this,(function(o){switch(o.label){case 0:return[4,p(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=o.sent(),t=r.data,this.read(t,{origin:"service"}),[2]}}))}))},o([d.property({constructOnly:!0,type:String})],r.prototype,"url",void 0),o([d.property({readOnly:!0,type:[f],json:{read:{source:"summary"}}})],r.prototype,"fields",null),r=o([d.subclass("esri.layers.support.BuildingSummaryStatistics")],r)}(d.declared(u.LoadableMixin(y.EsriPromiseMixin(s.JSONSupport))))}));