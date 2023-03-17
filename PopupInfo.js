// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/i18n","dojo/has","dojo/Deferred","dojo/sniff","dojo/promise/all","dojox/html/entities","./lang","./kernel","./request","./promiseList","./ArcadeExpression","./tasks/query","./tasks/QueryTask","./tasks/RelationshipQuery","./tasks/StatisticDefinition","./arcadeProfiles/popupProfile","./layers/support/attributeUtils","dojo/i18n!dojo/cldr/nls/number"],(function(e,t,r,i,a,n,s,o,l,d,h,f,u,c,m,p,y,g,_,M,F,E){var P=e(null,{declaredClass:"esri.PopupInfo",_reNewline:/(\n)/gi,_reExprField:/^\s*expression\//i,_reExprFieldPattern:/\{expression\/([^\}]+)\}/gi,_exprPrefix:"expression/",_relatedFieldPrefix:"relationships/",_aggregatedFeaturesVariable:"$aggregatedfeatures",initialize:function(e,i){if(e){t.mixin(this,i),this.info=e,this.title=this.getTitle,this.content=this.getContent,this._exprCache=this._compileExpressions(this.info.expressionInfos);var a=this._fieldLabels={},n=this._fieldsMap={};this.info.fieldInfos&&r.forEach(this.info.fieldInfos,(function(e){var t=e.fieldName.toLowerCase(),r=this._isExpressionField(t)?this.getExpressionInfo(t):null;a[t]=r?r.title:e.label,n[t]=e}),this),this.titleHasRelatedFields=!(!this.info.title||-1===this.info.title.indexOf("{"+this._relatedFieldPrefix)),this.titleHasAsyncExpressions=this._titleHasAsyncExpressions(),this.contentHasAsyncExpressions=this._contentHasAyncExpressions()}},toJson:function(){return i.fromJson(i.toJson(this.info))},getTitle:function(){},getContent:function(){},getFieldInfo:function(e){var t,i=this.info&&this.info.fieldInfos;return r.some(i,(function(r){return r.fieldName===e&&(t=r),!!t})),t},getExpressionInfo:function(e){var t;if(e=this._getExprField(e))return e=e.toLowerCase(),r.some(this.info.expressionInfos,(function(r){return r.name.toLowerCase()===e&&(t=r),!!t})),t},getExpressionFieldsInTitle:function(){return this._getExprFieldsFromTemplatedString(this.info.title)},getExpressionFieldsInContent:function(){var e=this._collectExprFieldsFromTemplatedString(this.info.description,[]);return!!this.info.description||r.forEach(this.info.fieldInfos,(function(t){t.visible&&this._collectExprField(t.fieldName,e)}),this),r.forEach(this.info.mediaInfos,(function(t){this._collectExprFieldsFromTemplatedString(t.title,e),this._collectExprFieldsFromTemplatedString(t.caption,e);var i=t.value;i&&(this._collectExprFieldsFromTemplatedString(i.linkURL,e),this._collectExprFieldsFromTemplatedString(i.sourceURL,e),r.forEach(i.fields,(function(t){this._collectExprField(t,e)}),this),this._collectExprField(i.normalizeField,e),this._collectExprField(i.tooltipField,e))}),this),e},getRequiredExpressionFields:function(){return this.getExpressionFieldsInTitle().concat(this.getExpressionFieldsInContent())},hasGeometryOperations:function(){return r.some(this._getArcadeExpressions(),(function(e){return e.hasGeometryOperations()}))},hasAsyncExpressions:function(){return r.some(this._getArcadeExpressions(),(function(e){return e.async}))},initializeArcadeEngine:function(){return M.initialize(this._getArcadeExpressions())},getComponents:function(e,i){var a=this.info,n={initArcadeEngine:this.initializeArcadeEngine()};if(a.fieldInfos){var s=r.filter(a.fieldInfos,(function(e){return-1!==e.fieldName.indexOf(this._relatedFieldPrefix)}),this);s&&s.length>0&&(n.relatedInfo=this._getRelatedRecords({graphic:e,fieldsInfo:s}))}return this._needFullResolutionFeature(e)&&(n.fullResolutionFeature=this._getFullResolutionFeature(e)),this._needAggregatedFeaturesLayer(e)&&(n.aggregatedFeaturesLayer=this._getAggregatedFeaturesLayer(e)),c(n).then(t.hitch(this,(function(r){var a=r.fullResolutionFeature,n=i&&i.evaluateAllExpressions,s=n?null:this.getRequiredExpressionFields(),o=(n?this.hasAsyncExpressions():this._hasAsyncExpressions(s))?this._fetchAttributesAsync(e,a,s,r.aggregatedFeaturesLayer):this._fetchAttributes(e,a,s);return c([o]).then(t.hitch(this,(function(t){return this._getPopupValues(e,t[0])})))})))},getAttachments:function(e){var t=e.getSourceLayer(),r=e.attributes;if(this.info.showAttachments&&t&&t.hasAttachments&&t.objectIdField){var i=r&&r[t.objectIdField];if(i)return t.queryAttachmentInfos(i)}},_needAggregatedFeaturesLayer:function(e){return!!e.isAggregate()&&r.some(this._getArcadeExpressions(),(function(e){return e.hasVariable(this._aggregatedFeaturesVariable)}),this)},_getAggregatedFeaturesLayer:function(e){return e.getAggregationSourceLayer().getFeatureCollectionLayer(e.getChildGraphics()).always((function(e){return e instanceof Error?null:e}))},_needFullResolutionFeature:function(e){var t=e.getSourceLayer();return!!t&&("function"==typeof t.getMaxAllowableOffset&&t.getMaxAllowableOffset()>0&&this.hasGeometryOperations())},_getFullResolutionFeature:function(e){var t=e.getSourceLayer(),r=t.objectIdField,i=e.attributes,a=i&&r&&i[r];if(null==a)return null;var n=new p;return n.where=r+"="+a,n.maxAllowableOffset=0,n.outFields=[r],t._enableCacheHint(n),t.queryFeatures(n).then((function(e){return e.features&&e.features[0]}))},_isExpressionField:function(e){return this._reExprField.test(e)},_getExprField:function(e){return this._isExpressionField(e)?e.replace(this._reExprField,""):null},_collectExprField:function(e,t){var r=this._getExprField(e);return r&&t.push(r),t},_collectExprFieldsFromTemplatedString:function(e,t){var r=this._getExprFieldsFromTemplatedString(e);return r.length&&Array.prototype.push.apply(t,r),t},_getExprFieldsFromTemplatedString:function(e){var t=e?e.match(this._reExprFieldPattern):null;return r.map(t,(function(e){return e.replace(this._reExprFieldPattern,"$1")}),this)},_titleHasAsyncExpressions:function(){return this._hasAsyncExpressions(this.getExpressionFieldsInTitle())},_contentHasAyncExpressions:function(){return this._hasAsyncExpressions(this.getExpressionFieldsInContent())},_hasAsyncExpressions:function(e){return r.some(e,(function(e){var t=this._exprCache[e];return!(!t||!t.async)}),this)},_compileExpressions:function(e){var t={};return r.forEach(e,(function(e){var r=e.returnType&&e.returnType.toLowerCase();t[e.name]=new m({expression:e.expression,returnType:"number"===r?"number":"string",profile:M})})),t},_getArcadeExpressions:function(){var e=[];for(var t in this._exprCache)e.push(this._exprCache[t]);return e},_fetchAttributesAsync:function(e,r,i,a){var n=this._fetchAttributes(e,r,i,a),s={};for(var o in n){var l=n[o];l&&l.then&&(s[o]=l)}return c(s).then(t.hitch(this,(function(e){for(var t in e){var r=e[t];n[t]=r instanceof Error?null:this._processArcadeResult(r)}return n})))},_processArcadeResult:function(e){return"string"==typeof e&&(e=d.encode(e)),e},_fetchAttributes:function(e,i,a,n){var s=t.clone(e.attributes)||{},o=i&&i.geometry,l=this._exprPrefix,d=this._exprCache;return a=a||r.map(this.info.expressionInfos,(function(e){return e.name})),r.forEach(a,(function(t){var r=l+t,i=d[t],a=i?e.evaluateExpression(i,this._getEvalOptions(i,e,o,n)):null;s[r]=this._processArcadeResult(a)}),this),s},_getEvalOptions:function(e,t,r,i){var a=e.hasGeometryOperations(),n=t.getSourceLayer(),s=n&&(n.getMap()||n.parentLayer&&n.parentLayer.getMap());i&&(i._map=s);var o=M.getEvalOptions({expression:e,feature:t,layer:n,aggregatedFeaturesLayer:i,map:s,spatialReference:s&&s.spatialReference}),l=o.context.vars.$feature,d=!(!a||!r);return l&&d&&(l._geometry=r),o.skipCache=d,o},_getPopupValues:function(e,i,a){i=i||this._fetchAttributes(e);var n,s,o,l,d,f,u,c=this.info,m=e.getSourceLayer(),p=t.clone(i),y="",g="",_=m&&m._getDateOpts&&m._getDateOpts().properties,M={dateFormat:{properties:_=_&&_.slice(0),formatter:"DateFormat"+this._insertOffset(this._dateFormats.shortDateShortTime)},format:null};if(this._relatedInfo)for(l in this._relatedInfo)if(this._relatedInfo.hasOwnProperty(l)){var F=this._relatedInfo[l],E=this._relatedLayersInfo[l];F&&(r.forEach(F.relatedFeatures,(function(e){for(d in e.attributes)if(e.attributes.hasOwnProperty(d)&&"esriRelCardinalityOneToOne"===E.relation.cardinality){var t=this._toRelatedFieldName([E.relation.id,d]);i[t]=p[t]=e.attributes[d]}}),this),r.forEach(F.relatedStatsFeatures,(function(e){for(d in e.attributes)if(e.attributes.hasOwnProperty(d)){var t=this._toRelatedFieldName([E.relation.id,d]);i[t]=p[t]=e.attributes[d]}}),this))}for(s in p){var P=this._fieldsMap[s.toLowerCase()],x=this._getLayerFieldInfo(m,s);P&&x&&(P.fieldName=x.name);var L=p[s];if(p[s]=this._formatValue(L,s,M),_&&P&&P.format&&P.format.dateFormat){var I=r.indexOf(_,s);I>-1&&_.splice(I,1)}}if(m){var v=m.typeIdField;for(s in i)if(i.hasOwnProperty(s)&&-1===s.indexOf(this._relatedFieldPrefix)&&(o=i[s],h.isDefined(o))){var T=this._getDomainName(m,e,s,o);if(h.isDefined(T))p[s]=T;else if(s===v){var b=this._getTypeName(m,e,o);h.isDefined(b)&&(p[s]=b)}}}return c.title&&(y=this._processFieldsInLinks(this._fixTokens(c.title,m),i),y=t.trim(this._removeEmptyHref(h.substitute(p,y,M)||""))),a?{title:y}:(c.description&&(g=this._processFieldsInLinks(this._fixTokens(c.description,m),i),g=t.trim(this._removeEmptyHref(h.substitute(p,g,M)||""))),c.fieldInfos&&(n=[],r.forEach(c.fieldInfos,(function(e){(s=e.fieldName)&&e.visible&&n.push([this._fieldLabels[s.toLowerCase()]||s,h.substitute(p,"${"+s+"}",M)||""])}),this)),c.mediaInfos&&(f=[],r.forEach(c.mediaInfos,(function(e){switch(u=0,o=e.value,e.type){case"image":var a=o.sourceURL;a=a&&t.trim(this._removeEmptyHref(h.substitute(i,this._fixTokens(a,m)))),u=!!a;break;case"piechart":case"linechart":case"columnchart":case"barchart":var n,s=o.normalizeField;o.fields=r.map(o.fields,(function(e){return(n=this._getLayerFieldInfo(m,e))?n.name:e}),this),s&&(n=this._getLayerFieldInfo(m,s),o.normalizeField=n?n.name:s),u=r.some(o.fields,(function(e){return h.isDefined(i[e])||-1!==e.indexOf(this._relatedFieldPrefix)&&this._relatedInfo}),this);break;default:return}if(u){e=t.clone(e),o=e.value;var l,d,c=e.title?this._processFieldsInLinks(this._fixTokens(e.title,m),i):"",y=e.caption?this._processFieldsInLinks(this._fixTokens(e.caption,m),i):"";if(e.title=c?t.trim(this._removeEmptyHref(h.substitute(p,c,M)||"")):"",e.caption=y?t.trim(this._removeEmptyHref(h.substitute(p,y,M)||"")):"","image"===e.type)o.sourceURL=h.substitute(i,this._fixTokens(o.sourceURL,m)),o.linkURL&&(o.linkURL=t.trim(h.substitute(i,this._fixTokens(o.linkURL,m))||""));else r.forEach(o.fields,(function(e,t){if(-1!==e.indexOf(this._relatedFieldPrefix))(d=this._getRelatedChartInfos(e,o,i,M))instanceof Array?o.fields=d:o.fields[t]=d;else{var r=i[e];r=void 0===r?null:r,l=i[o.normalizeField]||0,r&&l&&(r/=l),o.fields[t]={y:r,tooltip:(this._fieldLabels[e.toLowerCase()]||e)+":<br/>"+this._formatValue(r,e,M,!!l)}}}),this);f.push(e)}}),this)),{title:y,description:g,hasDescription:!!c.description,fields:n&&n.length?n:null,mediaInfos:f&&f.length?f:null,formatted:p,editSummary:!1!==c.showLastEditInfo&&m&&m.getEditSummary?m.getEditSummary(e):""})},_getRelatedChartInfos:function(e,t,i,a){var n,s,o,l,d,f,u;return n=[],d=(u=this._fromRelatedFieldName(e))[0],s=this._relatedInfo[d],f=this._relatedLayersInfo[d],s&&r.forEach(s.relatedFeatures,(function(r){var s,d,f=r.attributes;for(d in f)if(f.hasOwnProperty(d)&&d===u[1]){if(s={},l=f[d],t.normalizeField&&(o=-1!==t.normalizeField.indexOf(this._relatedFieldPrefix)?f[this._fromRelatedFieldName(t.normalizeField)[1]]:i[t.normalizeField]),l&&o&&(l/=o),t.tooltipField)if(-1!==t.tooltipField.indexOf(this._relatedFieldPrefix)){var c=this._fromRelatedFieldName(t.tooltipField)[1],m=h.isDefined(f[c])?this._formatValue(f[c],t.tooltipField,a,!!o):c;s.tooltip=m+":<br/>"+this._formatValue(l,c,a,!!o)}else s.tooltip=(this._fieldLabels[e.toLowerCase()]||e)+":<br/>"+this._formatValue(l,t.tooltipField,a,!!o);else s.tooltip=l;s.y=l,n.push(s)}}),this),"esriRelCardinalityOneToMany"===f.relation.cardinality||"esriRelCardinalityManyToMany"===f.relation.cardinality?n:n[0]},_dateFormats:{shortDate:"(datePattern: 'M/d/y', selector: 'date')",shortDateShortTime:"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')",shortDateShortTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLongTime:"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLongTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')",shortDateLE:"(datePattern: 'd/M/y', selector: 'date')",shortDateLEShortTime:"(datePattern: 'd/M/y', timePattern: 'h:mm a', selector: 'date and time')",shortDateLEShortTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLELongTime:"(datePattern: 'd/M/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLELongTime24:"(datePattern: 'd/M/y', timePattern: 'H:mm:ss', selector: 'date and time')",longMonthDayYear:"(datePattern: 'MMMM d, y', selector: 'date')",longMonthDayYearShortTime:"(datePattern: 'MMMM d, y', timePattern: 'h:mm a', selector: 'date and time')",longMonthDayYearShortTime24:"(datePattern: 'MMMM d, y', timePattern: 'H:mm', selector: 'date and time')",longMonthDayYearLongTime:"(datePattern: 'MMMM d, y', timePattern: 'h:mm:ss a', selector: 'date and time')",longMonthDayYearLongTime24:"(datePattern: 'MMMM d, y', timePattern: 'H:mm:ss', selector: 'date and time')",dayShortMonthYear:"(datePattern: 'd MMM y', selector: 'date')",dayShortMonthYearShortTime:"(datePattern: 'd MMM y', timePattern: 'h:mm a', selector: 'date and time')",dayShortMonthYearShortTime24:"(datePattern: 'd MMM y', timePattern: 'H:mm', selector: 'date and time')",dayShortMonthYearLongTime:"(datePattern: 'd MMM y', timePattern: 'h:mm:ss a', selector: 'date and time')",dayShortMonthYearLongTime24:"(datePattern: 'd MMM y', timePattern: 'H:mm:ss', selector: 'date and time')",longDate:"(datePattern: 'EEEE, MMMM d, y', selector: 'date')",longDateShortTime:"(datePattern: 'EEEE, MMMM d, y', timePattern: 'h:mm a', selector: 'date and time')",longDateShortTime24:"(datePattern: 'EEEE, MMMM d, y', timePattern: 'H:mm', selector: 'date and time')",longDateLongTime:"(datePattern: 'EEEE, MMMM d, y', timePattern: 'h:mm:ss a', selector: 'date and time')",longDateLongTime24:"(datePattern: 'EEEE, MMMM d, y', timePattern: 'H:mm:ss', selector: 'date and time')",longMonthYear:"(datePattern: 'MMMM y', selector: 'date')",shortMonthYear:"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},_dateFormatsJson:{shortDate:{datePattern:"M/d/y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",selector:"date and time"},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",selector:"date and time"},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",selector:"date and time"},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",selector:"date and time"},shortDateLE:{datePattern:"d/M/y",selector:"date"},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",selector:"date and time"},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",selector:"date and time"},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",selector:"date and time"},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",selector:"date and time"},longMonthDayYear:{datePattern:"MMMM d, y",selector:"date"},longMonthDayYearShortTime:{datePattern:"MMMM d, y",timePattern:"h:mm a",selector:"date and time"},longMonthDayYearShortTime24:{datePattern:"MMMM d, y",timePattern:"H:mm",selector:"date and time"},longMonthDayYearLongTime:{datePattern:"MMMM d, y",timePattern:"h:mm:ss a",selector:"date and time"},longMonthDayYearLongTime24:{datePattern:"MMMM d, y",timePattern:"H:mm:ss",selector:"date and time"},dayShortMonthYear:{datePattern:"d MMM y",selector:"date"},dayShortMonthYearShortTime:{datePattern:"d MMM y",timePattern:"h:mm a",selector:"date and time"},dayShortMonthYearShortTime24:{datePattern:"d MMM y",timePattern:"H:mm",selector:"date and time"},dayShortMonthYearLongTime:{datePattern:"d MMM y",timePattern:"h:mm:ss a",selector:"date and time"},dayShortMonthYearLongTime24:{datePattern:"d MMM y",timePattern:"H:mm:ss",selector:"date and time"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},longDateShortTime:{datePattern:"EEEE, MMMM d, y",timePattern:"h:mm a",selector:"date and time"},longDateShortTime24:{datePattern:"EEEE, MMMM d, y",timePattern:"H:mm",selector:"date and time"},longDateLongTime:{datePattern:"EEEE, MMMM d, y",timePattern:"h:mm:ss a",selector:"date and time"},longDateLongTime24:{datePattern:"EEEE, MMMM d, y",timePattern:"H:mm:ss",selector:"date and time"},longMonthYear:{datePattern:"MMMM y",selector:"date"},shortMonthYear:{datePattern:"MMM y",selector:"date"},year:{datePattern:"y",selector:"date"}},_reHref:/href\s*=\s*(\")([^\"]+)\"/gi,_reHrefApos:/href\s*=\s*(\')([^\']+)\'/gi,_fixTokens:function(e,t){var r=this;return e.replace(/(\{([^\{\r\n]+)\})/g,(function(e,i,a){var n=r._getLayerFieldInfo(t,a);return"$"+(n?"{"+n.name+"}":i)}))},_encodeAttributes:function(e,r){var i,a,n,s=t.clone(e)||{};for(i in s)(a=s[i])&&"string"==typeof a&&(n=(n=r?a:encodeURIComponent(a)).replace(/\'/g,"&apos;"),s[i]=n);return s},_processFieldsInLinks:function(e,r){var i=this._encodeAttributes(r),a=this._encodeAttributes(r,!0),n=t.hitch(this,this._addValuesToHref,r,i,a);return e&&(e=e.replace(this._reHref,n).replace(this._reHrefApos,n)),e},_addValuesToHref:function(e,r,i,a,n,s){return s=s&&t.trim(s),a=h.substitute(s&&0===s.indexOf("${")?"'"===n?i:e:r,a)},_getLayerFieldInfo:function(e,t){return e&&e.getField?e.getField(t):null},_formatValue:function(e,i,a,n){var s=this._fieldsMap[i.toLowerCase()],o=s&&s.format,l=-1!==r.indexOf(a.dateFormat.properties,i),d=!("number"!=typeof e||l||o&&o.dateFormat);if(!h.isDefined(e)||!s||!h.isDefined(o))return this._applyFormatting(e,d);var f,u=o.hasOwnProperty("places")||o.hasOwnProperty("digitSeparator"),c=!o.hasOwnProperty("digitSeparator")||o.digitSeparator;if(u&&!l)f={formatType:"NumberFormat",places:h.isDefined(o.places)&&(!n||o.places>0)?Number(o.places):1/0};else{if(!o.dateFormat)return this._applyFormatting(e,d);f=t.mixin({formatType:"DateFormat",utcOffset:this.utcOffset},this._dateFormatsJson[o.dateFormat]||this._dateFormatsJson.shortDateShortTime)}var m=this._applyFormatFunctions(e,f,a);return u&&e.constructor.toString().indexOf("Array")>-1&&(m="",r.forEach(e,t.hitch(this,(function(e,t){t&&(m+=" "),m+=this._applyFormatFunctions(e,f,a)})))),u&&!c&&E.group&&(m=m.replace(new RegExp("\\"+E.group,"g"),"")),l&&(m='<span class="esriDateValue">'+m+"</span>"),this._applyFormatting(m,d)},_applyFormatFunctions:function(e,t,r){t&&r&&(r.format={myKey:t});var i=h.substitute({myKey:e},"${myKey}",r)||"";return t&&r&&(r.format=null),i},_applyFormatting:function(e,t){return t?this._forceLTR(e):this._applyPreWrap(e)},_forceLTR:function(e){var t=o("ie");return t&&t<=10?e:"<span class='esriNumericValue'>"+e+"</span>"},_applyPreWrap:function(e){return"string"==typeof e?e.replace(this._reNewline,"<span class='charNewLine'>$1</span>"):e},_insertOffset:function(e){return e&&(e=h.isDefined(this.utcOffset)?e.replace(/\)\s*$/,", utcOffset:"+this.utcOffset+")"):e),e},_getDomainName:function(e,t,r,i){var a=e.getDomain&&e.getDomain(r,{feature:t});return a&&a.codedValues?a.getName(i):null},_getTypeName:function(e,t,r){var i=e.getType&&e.getType(t);return i&&i.name},_getRelatedRecords:function(e){var r,i=e.graphic;return this._relatedLayersInfoPromise||(this._relatedLayersInfoPromise=this._getRelatedLayersInfo(e).then(t.hitch(this,(function(e){for(r in e)e.hasOwnProperty(r)&&e[r]&&(this._relatedLayersInfo[r].relatedLayerInfo=e[r])})))),this._relatedLayersInfoPromise.then(t.hitch(this,(function(){return this._queryRelatedLayers(i)}))).then(t.hitch(this,(function(e){return this._setRelatedRecords(i,e),e})))},_getRelatedLayersInfo:function(e){var t,i,a=e.graphic,n=e.fieldsInfo,s={};for(i in t=a.getSourceLayer(),this._relatedLayersInfo||(this._relatedLayersInfo={}),r.forEach(n,(function(e){var i,a,n,s,o;i=this._fromRelatedFieldName(e.fieldName),a=i[0],n=i[1],a&&(!this._relatedLayersInfo[a]&&t&&t.relationships&&(r.some(t.relationships,(function(e){if(e.id==a)return o=e,!0})),o&&(this._relatedLayersInfo[a]={relation:o,relatedFields:[],outStatistics:[]})),this._relatedLayersInfo[a]&&(this._relatedLayersInfo[a].relatedFields.push(n),e.statisticType&&((s=new _).statisticType=e.statisticType,s.onStatisticField=n,s.outStatisticFieldName=n,this._relatedLayersInfo[a].outStatistics.push(s))))}),this),this._relatedLayersInfo){var o,d;if(this._relatedLayersInfo.hasOwnProperty(i))this._relatedLayersInfo[i]&&(o=this._relatedLayersInfo[i].relation,d=t.url.replace(/[0-9]+$/,o.relatedTableId),this._relatedLayersInfo[i].relatedLayerUrl=d,s[i]=u({url:d,content:{f:"json"},callbackParamName:"callback"}))}return l(s)},_queryRelatedLayers:function(e){var t,r={};for(t in this._relatedLayersInfo)this._relatedLayersInfo.hasOwnProperty(t)&&(r[t]=this._queryRelatedLayer({graphic:e,relatedInfo:this._relatedLayersInfo[t]}));return l(r)},_queryRelatedLayer:function(e){var i,a,n,o,d,h,f,u,c,m,g,_,M,F,E;i=e.graphic,a=i.getSourceLayer(),n=a.url.match(/[0-9]+$/g)[0],_=e.relatedInfo,m=_.relatedLayerInfo,M=_.relatedLayerUrl,F=_.relation;var P=r.filter(m.relationships,(function(e){return e.relatedTableId===parseInt(n,10)}));return 1===P.length?o=P[0]:P.length>1&&r.some(P,(function(e){return e.id===F.id&&(o=e),!!o})),o&&(d=new p,r.some(m.fields,(function(e){if(e.name===o.keyField)return u=-1!==r.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)?"number":"string",!0})),o.relationshipTableId&&o.keyFieldInRelationshipTable?(E=new s,this._queryRelatedRecords(i,o).then(t.hitch(this,(function(e){var n,s;(n=e[i.attributes[a.objectIdField]])?(s=r.map(n.features,(function(e){return e.attributes[m.objectIdField]}),this),_.outStatistics&&_.outStatistics.length>0&&m.supportsStatistics&&((c=new p).where=this._chunkWhereInClause(m.objectIdField,s,1e3),c.outFields=d.outFields,c.outStatistics=_.outStatistics),c&&(h=new y(M)).execute(c).then(t.hitch(this,(function(e){var t=[];t.push(n),t.push(e),E.resolve(t)})))):E.resolve()})))):(f="string"===u?o.keyField+"='"+i.attributes[F.keyField]+"'":o.keyField+"="+i.attributes[F.keyField],d.where=f,d.outFields=_.relatedFields,_.outStatistics&&_.outStatistics.length>0&&m.supportsStatistics&&((c=new p).where=d.where,c.outFields=d.outFields,c.outStatistics=_.outStatistics),h=new y(M),(g=[]).push(h.execute(d)),c&&g.push(h.execute(c)))),g?l(g):E?E.promise:void 0},_setRelatedRecords:function(e,t){var r;for(r in this._relatedInfo=[],t)if(t.hasOwnProperty(r)&&t[r]){var i=t[r];this._relatedInfo[r]={},this._relatedInfo[r].relatedFeatures=i[0].features,h.isDefined(i[1])&&(this._relatedInfo[r].relatedStatsFeatures=i[1].features)}},_handlerErrorResponse:function(e,t){e.reject(t)},_fromRelatedFieldName:function(e){var t=[];return-1!==e.indexOf(this._relatedFieldPrefix)&&(t=e.split("/").slice(1)),t},_toRelatedFieldName:function(e){var t="";return e&&e.length>0&&(t=this._relatedFieldPrefix+e[0]+"/"+e[1]),t},_queryRelatedRecords:function(e,t){var r=e.getSourceLayer(),i=new g;return i.outFields=["*"],i.relationshipId=t.id,i.objectIds=[e.attributes[r.objectIdField]],r.queryRelatedFeatures(i)},_removeEmptyHref:function(e){return e.replace(/href=(""|'')/gi,"")},_chunkWhereInClause:function(e,t,r){for(var i=0,a=[];i<t.length;)a.push(e+" IN ("+t.slice(i,r+i)+")"),i+=r;return a.join(" OR ")}});return n("extend-esri")&&(f.PopupInfo=f.PopupInfoTemplate=P),P}));