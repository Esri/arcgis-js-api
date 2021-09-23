/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../symbols","../core/jsonMap","../core/lang","../core/Logger","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/has","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/ensureType","../layers/support/fieldUtils","./Renderer","./mixins/VisualVariablesMixin","./support/ClassBreakInfo","./support/commonProperties","./support/LegendOptions","../support/arcadeOnDemand"],(function(e,t,s,r,o,n,a,i,l,u,c,p,d,f,y,h,m,b,g,k,v,x){"use strict";var _;const B=n.getLogger("esri.renderers.ClassBreaksRenderer"),I="log",S="percent-of-total",F="field",V=new r.JSONMap({esriNormalizeByLog:I,esriNormalizeByPercentOfTotal:S,esriNormalizeByField:F}),E=y.ensureType(g);let T=_=function(t){function r(e){var s;return(s=t.call(this,e)||this)._compiledValueExpression={valueExpression:null,compiledFunction:null},s.backgroundFillSymbol=null,s.classBreakInfos=null,s.defaultLabel=null,s.defaultSymbol=null,s.field=null,s.isMaxInclusive=!0,s.legendOptions=null,s.normalizationField=null,s.normalizationTotal=null,s.type="class-breaks",s.valueExpression=null,s.valueExpressionTitle=null,s._set("classBreakInfos",[]),s}e._inheritsLoose(r,t);var n=r.prototype;return n.readClassBreakInfos=function(e,t,s){if(!Array.isArray(e))return;let r=t.minValue;return e.map((e=>{const t=new g;return t.read(e,s),null==t.minValue&&(t.minValue=r),null==t.maxValue&&(t.maxValue=t.minValue),r=t.maxValue,t}))},n.writeClassBreakInfos=function(e,t,s,r){const o=e.map((e=>e.write({},r)));this._areClassBreaksConsecutive()&&o.forEach((e=>delete e.classMinValue)),t[s]=o},n.castField=function(e){return null==e?e:"function"==typeof e?(B.error(".field: field must be a string value"),null):y.ensureString(e)},n.addClassBreakInfo=function(e,t,r){let n=null;n="number"==typeof e?new g({minValue:e,maxValue:t,symbol:s.ensureType(r)}):E(o.clone(e)),this.classBreakInfos.push(n),1===this.classBreakInfos.length&&this.notifyChange("minValue")},n.removeClassBreakInfo=function(e,t){const s=this.classBreakInfos.length;for(let r=0;r<s;r++){const s=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue];if(s[0]===e&&s[1]===t){this.classBreakInfos.splice(r,1);break}}},n.getBreakIndex=function(e,t){return this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))&&B.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)},n.getClassBreakInfo=function(){var t=e._asyncToGenerator((function*(e,t){let s=t;this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))&&(s={...s,arcade:yield x.loadArcade()});const r=this.getBreakIndex(e,s);return-1!==r?this.classBreakInfos[r]:null}));function s(e,s){return t.apply(this,arguments)}return s}(),n.getSymbol=function(e,t){if(this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade)))return void B.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this.getBreakIndex(e,t);return s>-1?this.classBreakInfos[s].symbol:this.defaultSymbol},n.getSymbolAsync=function(){var t=e._asyncToGenerator((function*(e,t){let s=t;if(this.valueExpression&&(a.isNone(t)||a.isNone(t.arcade))){const e=yield x.loadArcade(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&(yield t.enableGeometryOperations()),s={...s,arcade:e}}const r=this.getBreakIndex(e,s);return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol}));function s(e,s){return t.apply(this,arguments)}return s}(),n.getSymbols=function(){const e=[];return this.classBreakInfos.forEach((t=>{t.symbol&&e.push(t.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e},n.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")},n.getMeshHash=function(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${t}.${this.classBreakInfos.reduce(((e,t)=>e+t.getMeshHash()),"")}.${s}.${this.field}.${this.valueExpression}`},n.clone=function(){return new _({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:o.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:o.clone(this.visualVariables),legendOptions:o.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},n.collectRequiredFields=function(){var t=e._asyncToGenerator((function*(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];yield Promise.all(s)}));function s(e,s){return t.apply(this,arguments)}return s}(),n.collectSymbolFields=function(){var t=e._asyncToGenerator((function*(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),h.collectArcadeFieldNames(e,t,this.valueExpression)];h.collectField(e,t,this.field),h.collectField(e,t,this.normalizationField),yield Promise.all(s)}));function s(e,s){return t.apply(this,arguments)}return s}(),n._getBreakIndexForExpression=function(e,t){const{viewingMode:s,scale:r,spatialReference:o,arcade:n}=a.unwrapOr(t,{});let i=this._compiledValueExpression.valueExpression===this.valueExpression?this._compiledValueExpression.compiledFunction:null;const l=a.unwrap(n).arcadeUtils;if(!i){const e=l.createSyntaxTree(this.valueExpression);i=l.createFunction(e),this._compiledValueExpression.compiledFunction=i}this._compiledValueExpression.valueExpression=this.valueExpression;const u=l.executeFunction(i,l.createExecContext(e,l.getViewInfo({viewingMode:s,scale:r,spatialReference:o})));return this._getBreakIndexfromInfos(u)},n._getBreakIndexForField=function(e){const t=this.field,s=e.attributes,r=this.normalizationType;let o=parseFloat(s[t]);if(r){const e=this.normalizationTotal,t=parseFloat(s[this.normalizationField]);if(r===I)o=Math.log(o)*Math.LOG10E;else if(r!==S||isNaN(e)){if(r===F&&!isNaN(t)){if(isNaN(o)||isNaN(t))return-1;o/=t}}else o=o/e*100}return this._getBreakIndexfromInfos(o)},n._getBreakIndexfromInfos=function(e){const t=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let s=0;s<this.classBreakInfos.length;s++){const r=[this.classBreakInfos[s].minValue,this.classBreakInfos[s].maxValue];if(r[0]<=e&&(t?e<=r[1]:e<r[1]))return s}return-1},n._areClassBreaksConsecutive=function(){const e=this.classBreakInfos,t=e.length;for(let s=1;s<t;s++)if(e[s-1].maxValue!==e[s].minValue)return!1;return!0},e._createClass(r,[{key:"minValue",get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}},{key:"normalizationType",get:function(){let e=this._get("normalizationType");const t=!!this.normalizationField,s=null!=this.normalizationTotal;return t||s?(e=t&&F||s&&S||null,t&&s&&B.warn("warning: both normalizationField and normalizationTotal are set!")):e!==F&&e!==S||(e=null),e},set:function(e){this._set("normalizationType",e)}},{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}}]),r}(b.VisualVariablesMixin(m));return t.__decorate([i.property(k.rendererBackgroundFillSymbolProperty)],T.prototype,"backgroundFillSymbol",void 0),t.__decorate([i.property({type:[g]})],T.prototype,"classBreakInfos",void 0),t.__decorate([p.reader("classBreakInfos")],T.prototype,"readClassBreakInfos",null),t.__decorate([f.writer("classBreakInfos")],T.prototype,"writeClassBreakInfos",null),t.__decorate([i.property({type:String,json:{write:!0}})],T.prototype,"defaultLabel",void 0),t.__decorate([i.property(k.rendererSymbolProperty)],T.prototype,"defaultSymbol",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],T.prototype,"field",void 0),t.__decorate([l.cast("field")],T.prototype,"castField",null),t.__decorate([i.property({type:Boolean})],T.prototype,"isMaxInclusive",void 0),t.__decorate([i.property({type:v.default,json:{write:!0}})],T.prototype,"legendOptions",void 0),t.__decorate([i.property({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],T.prototype,"minValue",null),t.__decorate([i.property({type:String,json:{write:!0}})],T.prototype,"normalizationField",void 0),t.__decorate([i.property({type:Number,cast:e=>y.ensureNumber(e),json:{write:!0}})],T.prototype,"normalizationTotal",void 0),t.__decorate([i.property({type:V.apiValues,value:null,json:{type:V.jsonValues,read:V.read,write:V.write}})],T.prototype,"normalizationType",null),t.__decorate([c.enumeration({classBreaks:"class-breaks"})],T.prototype,"type",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],T.prototype,"valueExpression",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],T.prototype,"valueExpressionTitle",void 0),T=_=t.__decorate([d.subclass("esri.renderers.ClassBreaksRenderer")],T),T}));
