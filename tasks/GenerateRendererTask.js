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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","dojo/_base/array","../core/declare","dojo/_base/lang","dojo/Deferred","dojo/number","../request","../renderers/support/jsonUtils","./QueryTask","./Task","./support/StatisticDefinition","./support/Query"],function(e,i,r,s,a,t,n,l,o,u,c,f){var d=r(u,{declaredClass:"esri.tasks.GenerateRendererTask",constructor:function(){this._handler=s.hitch(this,this._handler),this._handleExecuteResponse=this._handleExecuteResponse.bind(this)},normalizeCtorArgs:function(e,i){if(s.isObject(e)&&("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.CSVLayer"===e.declaredClass)){var r=e,a=s.mixin({featureLayer:r},i);return"string"==typeof r.url&&"esri.layers.CSVLayer"!==r.declaredClass&&(a.url=r.url),a}return this.inherited(arguments)},_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/generateRenderer",e},source:null,gdbVersion:null,checkValueRange:null,_handleExecuteResponse:function(e){var i,r=e.data;if(i="esri.renderer.ClassBreaksRenderer"===r.declaredClass||"esri.renderer.UniqueValueRenderer"===r.declaredClass?r:l.fromJSON(r),!this.checkValueRange)return this._processRenderer(i,this._prefix,this._unitLabel,this._formatLabel,this._precision);var a=new o(this.url),t=new c({statisticType:"min",onStatisticField:this._field}),n=new c({statisticType:"max",onStatisticField:this._field}),u=new f({outStatistics:[t,n]});return a.execute(u).then(s.hitch(this,function(e){var r=e.features[0].attributes;for(var s in r)if(0===s.toLowerCase().indexOf("min"))var a=r[s];else var t=r[s];return this._processRenderer(i,this._prefix,this._unitLabel,this._formatLabel,this._precision,a,t)}))},_processRenderer:function(e,r,s,a,n,l,o){return"esri.renderer.ClassBreaksRenderer"===e.declaredClass?i.forEach(e.infos,function(i,u){0===u&&void 0!==l&&null!==l&&(i.minValue=l),u===e.infos.length-1&&void 0!==o&&null!==o&&(i.classMaxValue=i.maxValue=o),n&&(i.classMaxValue=i.maxValue=Math.round(i.maxValue/n)*n,i.minValue=Math.round(i.minValue/n)*n),a&&(i.label=t.format(i.minValue)+" - "+t.format(i.maxValue)),r&&(i.label=r+" "+i.label),s&&(i.label=i.label+" "+s)}):i.forEach(e.infos,function(i,n){0===n&&void 0!==l&&null!==l&&(i.value=l),n===e.infos.length-1&&void 0!==o&&null!==o&&(i.value=o),a&&(i.label=t.format(i.value)),r&&(i.label=r+" "+i.label),s&&(i.label=i.label+" "+s)}),e},execute:function(i){{var r;this.featureLayer}if(this._precision=i.precision,this._prefix=i.prefix,this._unitLabel=i.unitLabel,this._formatLabel=i.formatLabel,this._features=i.features||this._getCollectionFeatures(),this._features){r=new a;var t=this._features;return e(["./support/generateRenderer"],function(e){var s;"esri.tasks.support.ClassBreaksDefinition"===i.classificationDefinition.declaredClass?s=e.createClassBreaksRenderer({features:t,definition:i.classificationDefinition}):"esri.tasks.support.UniqueValueDefinition"===i.classificationDefinition.declaredClass&&(s=e.createUniqueValueRenderer({features:t,definition:i.classificationDefinition})),s?r.resolve(this._handleExecuteResponse(s)):r.reject()}),r.promise}var l=s.mixin(i.toJSON(),{f:"json"});if(this._field="esri.tasks.support.ClassBreaksDefinition"===i.classificationDefinition.declaredClass?i.classificationDefinition.classificationField:i.classificationDefinition.attributeField,this.source){var o={source:this.source.toJSON()};l.layer=JSON.stringify(o)}return this.gdbVersion&&(l.gdbVersion=this.gdbVersion),n(this.parsedUrl.path,{query:l,callbackParamName:"callback"}).then(this._handleExecuteResponse)},_getCollectionFeatures:function(){var e=this.featureLayer;return e&&e.hasMemorySource&&e.graphics}});return d});