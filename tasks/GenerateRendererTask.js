// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/promiseUtils","../core/accessorSupport/decorators","../layers/support/layerSourceUtils","../renderers/support/jsonUtils","./QueryTask","./Task","./support/Query","./support/StatisticDefinition"],function(e,r,t,s,i,n,a,o,l,u,c,p,d,f){return function(e){function r(r){var t=e.call(this,r)||this;return t._field=null,t.checkValueRange=null,t.gdbVersion=null,t.source=null,t}return s(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._parseUrl(this.url);return e.path+="/generateRenderer",e},enumerable:!0,configurable:!0}),r.prototype.execute=function(e,r){var s=e.classificationDefinition,i=t({},e.toJSON(),{f:"json"});if("esri.tasks.support.ClassBreaksDefinition"===s.declaredClass?this._field=s.classificationField:this._field=s.attributeField,this.source){var a={source:l.sourceToJSON(this.source)};i.layer=JSON.stringify(a)}this.gdbVersion&&(i.gdbVersion=this.gdbVersion),i.classificationDef&&(i.classificationDef=JSON.stringify(i.classificationDef));var o={query:i,callbackParamName:"callback"};return(this.requestOptions||r)&&(o=t({},this.requestOptions,r,o)),n(this.parsedUrl.path,o).then(this._handleExecuteResponse.bind(this))},r.prototype._handleExecuteResponse=function(e){var r=this,t=e&&e.data;if(t){if(!this.checkValueRange){var s=this._processRendererJSON(t);return a.resolve(s)}var i=new c(this.url),n=new f({statisticType:"min",onStatisticField:this._field}),o=new f({statisticType:"max",onStatisticField:this._field}),l=new d({outStatistics:[n,o]});return i.execute(l).then(function(e){var s=e.features[0].attributes,i=null,n=null;for(var a in s)0===a.toLowerCase().indexOf("min")?i=s[a]:n=s[a];return r._processRendererJSON(t,i,n)})}},r.prototype._processRendererJSON=function(e,r,t){if("classBreaks"===e.type){var s=u.fromJSON(e);return{classBreaks:s.classBreakInfos.map(function(e,i){return 0===i&&void 0!==r&&null!==r&&(e.minValue=r),i===s.classBreakInfos.length-1&&void 0!==t&&null!==t&&(e.maxValue=t),{minValue:e.minValue,maxValue:e.maxValue,label:e.label}}),normalizationTotal:s.normalizationTotal}}return{uniqueValues:e.uniqueValueInfos.map(function(s,i){return 0===i&&void 0!==r&&null!==r&&(s.value=r),i===e.uniqueValueInfos.length-1&&void 0!==t&&null!==t&&(s.value=t),{count:s.count,value:s.value,label:s.label}})}},i([o.property()],r.prototype,"checkValueRange",void 0),i([o.property()],r.prototype,"gdbVersion",void 0),i([o.property()],r.prototype,"source",void 0),i([o.property({readOnly:!0,dependsOn:["url"]})],r.prototype,"parsedUrl",null),r=i([o.subclass("esri.tasks.GenerateRendererTask")],r)}(o.declared(p))});