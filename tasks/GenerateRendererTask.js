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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","dojo/_base/lang","dojo/Deferred","../request","../renderers/support/jsonUtils","./QueryTask","./Task","./support/StatisticDefinition","./support/Query"],function(e,i,s,r,t,a,n,l,u){var o=n.createSubclass({declaredClass:"esri.tasks.GenerateRendererTask",constructor:function(){this._handler=i.hitch(this,this._handler),this._handleExecuteResponse=this._handleExecuteResponse.bind(this)},normalizeCtorArgs:function(e,s){if(i.isObject(e)&&("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.CSVLayer"===e.declaredClass)){var r=e,t=i.mixin({featureLayer:r},s);return"string"==typeof r.url&&"esri.layers.CSVLayer"!==r.declaredClass&&(t.url=r.url),t}return this.inherited(arguments)},properties:{checkValueRange:{value:null},gdbVersion:{value:null,type:String},source:{value:null},parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/generateRenderer",e}}},execute:function(t,a){var n;if(this._features=t.features||this._getCollectionFeatures(),this._features){n=new s;var l=this._features;return e(["./support/generateRenderer"],function(e){var i;"esri.tasks.support.ClassBreaksDefinition"===t.classificationDefinition.declaredClass?i=e.createClassBreaksRenderer({features:l,definition:t.classificationDefinition}):"esri.tasks.support.UniqueValueDefinition"===t.classificationDefinition.declaredClass&&(i=e.createUniqueValueRenderer({features:l,definition:t.classificationDefinition})),i?n.resolve(this._handleExecuteResponse(i)):n.reject()}),n.promise}var u=i.mixin(t.toJSON(),{f:"json"});if("esri.tasks.support.ClassBreaksDefinition"===t.classificationDefinition.declaredClass?this._field=t.classificationDefinition.classificationField:this._field=t.classificationDefinition.attributeField,this.source){var o={source:this.source};u.layer=JSON.stringify(o)}this.gdbVersion&&(u.gdbVersion=this.gdbVersion),u.classificationDef&&(u.classificationDef=JSON.stringify(u.classificationDef));var c={query:u,callbackParamName:"callback"};return(this.requestOptions||a)&&(c=i.mixin({},this.requestOptions,a,c)),r(this.parsedUrl.path,c).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var s,r=e.data;if(s="esri.renderers.ClassBreaksRenderer"===r.declaredClass||"esri.renderers.UniqueValueRenderer"===r.declaredClass?r:t.fromJSON(r),!this.checkValueRange)return this._processRenderer(s);var n=new a(this.url),o=new l({statisticType:"min",onStatisticField:this._field}),c=new l({statisticType:"max",onStatisticField:this._field}),f=new u({outStatistics:[o,c]});return n.execute(f).then(i.hitch(this,function(e){var i=e.features[0].attributes;for(var r in i)if(0===r.toLowerCase().indexOf("min"))var t=i[r];else var a=i[r];return this._processRenderer(s,t,a)}))},_processRenderer:function(e,i,s){return"classBreaks"===e.type?e.classBreakInfos.forEach(function(r,t){0===t&&void 0!==i&&null!==i&&(r.minValue=i),t===e.classBreakInfos.length-1&&void 0!==s&&null!==s&&(r.maxValue=s)}):e.uniqueValueInfos.forEach(function(r,t){0===t&&void 0!==i&&null!==i&&(r.value=i),t===e.uniqueValueInfos.length-1&&void 0!==s&&null!==s&&(r.value=s)}),e},_getCollectionFeatures:function(){var e=this.featureLayer;return e&&e.hasMemorySource&&e.graphics}});return o});