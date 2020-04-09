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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/promiseUtils","../core/accessorSupport/decorators","../layers/support/layerSourceUtils","../renderers/support/jsonUtils","./QueryTask","./Task","./support/Query","./support/StatisticDefinition"],(function(e,r,t,s,n,i,a,o,l,u,c,p,f,d){return function(e){function r(r){var t=e.call(this,r)||this;return t._field=null,t.checkValueRange=null,t.gdbVersion=null,t.source=null,t}return s(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._parseUrl(this.url);return e.path+="/generateRenderer",e},enumerable:!0,configurable:!0}),r.prototype.execute=function(e,r){var s=this,n=e.classificationDefinition,a=t({},e.toJSON(),{f:"json"});if("esri.tasks.support.ClassBreaksDefinition"===n.declaredClass?this._field=n.classificationField:this._field=n.attributeField,this.source){var o={source:l.sourceToJSON(this.source)};a.layer=JSON.stringify(o)}this.gdbVersion&&(a.gdbVersion=this.gdbVersion),a.classificationDef&&(a.classificationDef=JSON.stringify(a.classificationDef));var u={query:a};return(this.requestOptions||r)&&(u=t({},this.requestOptions,r,u)),i(this.parsedUrl.path,u).then((function(e){return s._handleExecuteResponse(e)}))},r.prototype._handleExecuteResponse=function(e){var r=this,t=e&&e.data;if(t){if(!this.checkValueRange){var s=this._processRendererJSON(t);return a.resolve(s)}var n=new c(this.url),i=new d({statisticType:"min",onStatisticField:this._field}),o=new d({statisticType:"max",onStatisticField:this._field}),l=new f({outStatistics:[i,o]});return n.execute(l).then((function(e){var s=e.features[0].attributes,n=null,i=null;for(var a in s)0===a.toLowerCase().indexOf("min")?n=s[a]:i=s[a];return r._processRendererJSON(t,n,i)}))}},r.prototype._processRendererJSON=function(e,r,t){if("classBreaks"===e.type){var s=u.fromJSON(e);return{classBreaks:s.classBreakInfos.map((function(e,n){return 0===n&&null!=r&&(e.minValue=r),n===s.classBreakInfos.length-1&&null!=t&&(e.maxValue=t),{minValue:e.minValue,maxValue:e.maxValue,label:e.label}})),normalizationTotal:s.normalizationTotal}}return{uniqueValues:e.uniqueValueInfos.map((function(s,n){return 0===n&&null!=r&&(s.value=r),n===e.uniqueValueInfos.length-1&&null!=t&&(s.value=t),{count:s.count,value:s.value,label:s.label}}))}},n([o.property()],r.prototype,"checkValueRange",void 0),n([o.property()],r.prototype,"gdbVersion",void 0),n([o.property()],r.prototype,"source",void 0),n([o.property({readOnly:!0,dependsOn:["url"]})],r.prototype,"parsedUrl",null),r=n([o.subclass("esri.tasks.GenerateRendererTask")],r)}(o.declared(p))}));