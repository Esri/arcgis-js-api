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

define(["require","dojo/_base/lang","dojo/Deferred","../request","../renderers/support/jsonUtils","./QueryTask","./Task","./support/StatisticDefinition","./support/Query"],function(e,r,s,i,t,a,n,l,u){var o=n.createSubclass({declaredClass:"esri.tasks.GenerateRendererTask",constructor:function(){this._handler=r.hitch(this,this._handler),this._handleExecuteResponse=this._handleExecuteResponse.bind(this)},normalizeCtorArgs:function(e,s){if(r.isObject(e)&&("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.CSVLayer"===e.declaredClass)){var i=e,t=r.mixin({featureLayer:i},s);return"string"==typeof i.url&&"esri.layers.CSVLayer"!==i.declaredClass&&(t.url=i.url),t}return this.inherited(arguments)},properties:{checkValueRange:{value:null},gdbVersion:{value:null,type:String},source:{value:null},parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/generateRenderer",e}}},execute:function(t,a){var n;if(this._features=t.features||this._getCollectionFeatures(),this._features){n=new s;var l=this._features;return e(["./support/generateRenderer"],function(e){var r;"esri.tasks.support.ClassBreaksDefinition"===t.classificationDefinition.declaredClass?r=e.createClassBreaksRenderer({features:l,definition:t.classificationDefinition}):"esri.tasks.support.UniqueValueDefinition"===t.classificationDefinition.declaredClass&&(r=e.createUniqueValueRenderer({features:l,definition:t.classificationDefinition})),r?n.resolve(this._handleExecuteResponse(r)):n.reject()}),n.promise}var u=r.mixin(t.toJSON(),{f:"json"});if("esri.tasks.support.ClassBreaksDefinition"===t.classificationDefinition.declaredClass?this._field=t.classificationDefinition.classificationField:this._field=t.classificationDefinition.attributeField,this.source){var o={source:this.source};u.layer=JSON.stringify(o)}this.gdbVersion&&(u.gdbVersion=this.gdbVersion);var c={query:u,callbackParamName:"callback"};return(this.requestOptions||a)&&(c=r.mixin({},this.requestOptions,a,c)),i(this.parsedUrl.path,c).then(this._handleExecuteResponse)},_handleExecuteResponse:function(e){var s,i=e.data;if(s="esri.renderer.ClassBreaksRenderer"===i.declaredClass||"esri.renderer.UniqueValueRenderer"===i.declaredClass?i:t.fromJSON(i),!this.checkValueRange)return this._processRenderer(s);var n=new a(this.url),o=new l({statisticType:"min",onStatisticField:this._field}),c=new l({statisticType:"max",onStatisticField:this._field}),d=new u({outStatistics:[o,c]});return n.execute(d).then(r.hitch(this,function(e){var r=e.features[0].attributes;for(var i in r)if(0===i.toLowerCase().indexOf("min"))var t=r[i];else var a=r[i];return this._processRenderer(s,t,a)}))},_processRenderer:function(e,r,s){return"esri.renderer.ClassBreaksRenderer"===e.declaredClass?e.classBreakInfos.forEach(function(i,t){0===t&&void 0!==r&&null!==r&&(i.minValue=r),t===e.classBreakInfos.length-1&&void 0!==s&&null!==s&&(i.maxValue=s)}):e.uniqueValueInfos.forEach(function(i,t){0===t&&void 0!==r&&null!==r&&(i.value=r),t===e.uniqueValueInfos.length-1&&void 0!==s&&null!==s&&(i.value=s)}),e},_getCollectionFeatures:function(){var e=this.featureLayer;return e&&e.hasMemorySource&&e.graphics}});return o});