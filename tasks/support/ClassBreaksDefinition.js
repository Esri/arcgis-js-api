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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/kebabDictionary","../../core/accessorSupport/decorators","./ClassificationDefinition"],function(e,t,r,i,a,o,n){var s=a({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),l=a({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.breakCount=null,t.classificationField=null,t.classificationMethod=null,t.normalizationField=null,t.normalizationType=null,t.type="class-breaks-definition",t}return r(t,e),Object.defineProperty(t.prototype,"standardDeviationInterval",{set:function(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)},enumerable:!0,configurable:!0}),i([o.property({json:{write:!0}})],t.prototype,"breakCount",void 0),i([o.property({json:{write:!0}})],t.prototype,"classificationField",void 0),i([o.property({type:String,json:{read:s.read,write:s.write}})],t.prototype,"classificationMethod",void 0),i([o.property({json:{write:!0}})],t.prototype,"normalizationField",void 0),i([o.property({json:{read:l.read,write:l.write}})],t.prototype,"normalizationType",void 0),i([o.property({value:null,json:{write:!0}})],t.prototype,"standardDeviationInterval",null),i([o.property()],t.prototype,"type",void 0),t=i([o.subclass("esri.tasks.support.ClassBreaksDefinition")],t)}(o.declared(n))});