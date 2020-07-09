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

define(["require","exports","tslib","../request","../core/promiseUtils","../core/accessorSupport/decorators","../layers/support/layerSourceUtils","../renderers/support/jsonUtils","./QueryTask","./Task","./support/Query","./support/StatisticDefinition"],(function(e,t,r,s,i,n,a,o,l,u,c,p){return function(e){function t(t){var r=e.call(this,t)||this;return r._field=null,r.checkValueRange=null,r.gdbVersion=null,r.source=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"parsedUrl",{get:function(){var e=this._parseUrl(this.url);return e.path+="/generateRenderer",e},enumerable:!0,configurable:!0}),t.prototype.execute=function(e,t){var i=this,n=e.classificationDefinition,o=r.__assign(r.__assign({},e.toJSON()),{f:"json"});if("esri.tasks.support.ClassBreaksDefinition"===n.declaredClass?this._field=n.classificationField:this._field=n.attributeField,this.source){var l={source:a.sourceToJSON(this.source)};o.layer=JSON.stringify(l)}this.gdbVersion&&(o.gdbVersion=this.gdbVersion),o.classificationDef&&(o.classificationDef=JSON.stringify(o.classificationDef));var u={query:o};return(this.requestOptions||t)&&(u=r.__assign(r.__assign(r.__assign({},this.requestOptions),t),u)),s(this.parsedUrl.path,u).then((function(e){return i._handleExecuteResponse(e)}))},t.prototype._handleExecuteResponse=function(e){var t=this,r=e&&e.data;if(r){if(!this.checkValueRange){var s=this._processRendererJSON(r);return i.resolve(s)}var n=new l(this.url),a=new p({statisticType:"min",onStatisticField:this._field}),o=new p({statisticType:"max",onStatisticField:this._field}),u=new c({outStatistics:[a,o]});return n.execute(u).then((function(e){var s=e.features[0].attributes,i=null,n=null;for(var a in s)0===a.toLowerCase().indexOf("min")?i=s[a]:n=s[a];return t._processRendererJSON(r,i,n)}))}},t.prototype._processRendererJSON=function(e,t,r){if("classBreaks"===e.type){var s=o.fromJSON(e);return{classBreaks:s.classBreakInfos.map((function(e,i){return 0===i&&null!=t&&(e.minValue=t),i===s.classBreakInfos.length-1&&null!=r&&(e.maxValue=r),{minValue:e.minValue,maxValue:e.maxValue,label:e.label}})),normalizationTotal:s.normalizationTotal}}return{uniqueValues:e.uniqueValueInfos.map((function(s,i){return 0===i&&null!=t&&(s.value=t),i===e.uniqueValueInfos.length-1&&null!=r&&(s.value=r),{count:s.count,value:s.value,label:s.label}}))}},r.__decorate([n.property()],t.prototype,"checkValueRange",void 0),r.__decorate([n.property()],t.prototype,"gdbVersion",void 0),r.__decorate([n.property()],t.prototype,"source",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["url"]})],t.prototype,"parsedUrl",null),t=r.__decorate([n.subclass("esri.tasks.GenerateRendererTask")],t)}(u)}));