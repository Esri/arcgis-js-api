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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

/**
     * Generates a continuous color {@link module:esri/renderers/Renderer} representing the age of features based
     * on one or more fields. The age of a feature is calculated based on a given `startTime` and `endTime`, one of which
     * must be a date field in the input `layer`. This method generates an Arcade expression and calculates statistics on the
     * output of the expression to accomplish this. The resulting
     * renderer contains a continuous color visual variable that maps optimal colors based on the indicated basemap
     * to data values based on the resulting statistics of the expression.
     *
     * You are required to provide a `layer`, `view`, `startTime`, and `endTime` to generate this renderer. Optionally, you can
     * set a `unit` and a `theme` for the visualization. Other options are provided for convenience for more involved custom visualization authoring
     * applications. For example, if you already generated statistics in another operation, you
     * can pass the statistics object to the `statistics` parameter to avoid making an extra call to the server.
     *
     * @memberof module:esri/renderers/smartMapping/creators/color
     * @instance
     * @since 4.9
     *
     * @param {Object} params - Input parameters for generating a continuous color visualization of age for time data
     * returned from start and/or end date field(s). See the table below for details of each parameter.
     *
     * @param {module:esri/layers/FeatureLayer | module:esri/layers/SceneLayer | module:esri/layers/CSVLayer | module:esri/layers/GeoJSONLayer} params.layer - The layer
     *   for which the visualization is generated.
     * @param {module:esri/views/View} params.view - The view instance in which the visualization will be rendered.
     * @param {Date | string | number} params.startTime - The name of the field, or a date value representing the start time in the
     *   age calculation. If a date value is specified, then the `endTime` parameter must reference a Date field in the layer.
     * @param {Date | string | number} params.endTime - The name of the field, or a date value representing the end time in the
     *   age calculation. If a date value is specified, then the `startTime` parameter must reference a Date field in the layer.
     * @param {string} [params.unit] - The time unit used to calculate the difference between `endTime` and `startTime`. If a unit
     *   is not specified, then a suggested unit is determined based on the spread and distribution of the data.
     *
     *   **Possible Values:** years | months | days | hours | minutes | seconds
     * @param {string|module:esri/Basemap} [params.basemap=gray] - The {@link module:esri/Map#basemap named string} or basemap object of
     *   the Esri basemap that will be paired with the output visualization.
     * @param {string} [params.theme] - Determines which values will be emphasized in the continuous ramp and the map.
     *   Possible values are listed below.
     *   | Value | Description | Example |
     *   | ----- | ----------- | ------- |
     *   | high-to-low | High values are emphasized with strong colors. | ![high-to-low](../../assets/img/apiref/renderers/sm-high-to-low.png) |
     *   | above-and-below | Values centered around a given point (e.g. the average) are visualized with weak colors while other values are emphasized with strong colors. | ![above-and-below](../../assets/img/apiref/renderers/sm-above-and-below.png) |
     *   | centered-on | Values centered around a given point (e.g. the average) are emphasized with strong colors while other values are visualized with weak colors. | ![centered-on](../../assets/img/apiref/renderers/sm-centered-on.png) |
     *   | extremes | High and low values are emphasized with strong colors. All others are visualized with weak colors. | ![extremes](../../assets/img/apiref/renderers/sm-extremes.png) |
     *
     * @param {boolean} [params.outlineOptimizationEnabled=false] - For polygon layers only. Indicates whether the
     *   polygon outline width should vary based on view scale. When set, a valid {@link module:esri/views/MapView}
     *   instance must be provided in the `view` parameter. This option is not supported for 3D
     *   {@link module:esri/views/SceneView SceneViews}.
     * @param {Object} [params.legendOptions] - Provides options for modifying {@link module:esri/widgets/Legend} properties describing
     *   the visualization.
     * @param {string} [params.legendOptions.title] - The title used to represent the age color ramp in the
     *   {@link module:esri/widgets/Legend}.
     * @param {boolean} [params.legendOptions.showLegend] - Indicates whether to include the age renderer in the legend.
     * @param {module:esri/renderers/smartMapping/statistics/summaryStatistics~SummaryStatisticsResult} [params.statistics] -
     *   A statistics object generated from the {@link module:esri/renderers/smartMapping/statistics/summaryStatistics} function.
     *   The `createAgeRenderer()` method generates an Arcade expression and executes a statistics query against the layer for the result of the expression.
     *   If statistics for the expression have already been generated, then pass the object here to avoid making a second statistics
     *   query.
     * @param {module:esri/renderers/smartMapping/symbology/color~ColorScheme} [params.colorScheme] - In authoring apps,
     *   the user may select a pre-defined color scheme. Pass the scheme object to this property to avoid getting one
     *   based on a `theme` and the `basemap`.
     * @param {string} [params.symbolType=2d] - The type of symbol to generate. This depends on the view
     *   in which you are working and the desired visualization. This parameter does not need to be specified for layers
     *   with a `mesh` geometry type. Possible values are described below.
     *
     *   | Value | Description |
     *   | ----- | ----------- |
     *   | 2d | Generates a visualization using 2D symbols such as {@link module:esri/symbols/SimpleMarkerSymbol}, {@link module:esri/symbols/SimpleLineSymbol}, or {@link module:esri/symbols/SimpleFillSymbol}. Use this option if generating a visualization for data in a {@link module:esri/views/MapView}. |
     *   | 3d-flat | Generates a visualization using 3D symbols with flat symbol layers such as {@link module:esri/symbols/IconSymbol3DLayer}, {@link module:esri/symbols/LineSymbol3DLayer}, or {@link module:esri/symbols/FillSymbol3DLayer}. Use this option if generating a 2D visualization for data in a {@link module:esri/views/SceneView}. |
     *   | 3d-volumetric | Generates a visualization using 3D symbols with volumetric symbol layers such as {@link module:esri/symbols/ObjectSymbol3DLayer}, {@link module:esri/symbols/PathSymbol3DLayer}, or {@link module:esri/symbols/ExtrudeSymbol3DLayer}. Use this option if generating a 3D visualization for data in a {@link module:esri/views/SceneView}. A SceneView instance must be provided to the `view` parameter if this option is used. |
     * @param {boolean} [params.defaultSymbolEnabled=true] - Enables the `defaultSymbol` on the renderer and assigns it to features
     *   with no value.
     * @param {string} [params.colorMixMode=replace] -
     *   **This option only applies to generating renderers for mesh SceneLayers**.
     *   Specifies how the symbol's color is applied to the geometry color/texture. See the documentation in
     *   {@link module:esri/symbols/FillSymbol3DLayer#material FillSymbol3DLayer.material} for more context.
     *   See the table below for possible values.
     *
     *   Value | Description
     *   ------|------------
     *   tint | Applies the symbol `color` to the desaturated geometry/texture color.
     *   replace | Removes the geometry/texture color and applies the symbol `color`.
     *   multiply | Multiplies geometry/texture color value with the symbol `color` value. The result is a darker color. Multiplying with white keeps the geometry color the same.
     *
     * @todo @param {string} [params.edgesType=none] - Indicates whether to add edges to the output renderer. This setting only applies
     * to mesh SceneLayers.
     *
     * **Possible Values:** solid | none
     *
     * @return {Promise<module:esri/renderers/smartMapping/creators/color~AgeRendererResult>} Resolves to an instance of [AgeRendererResult](#AgeRendererResult).
     *
     * @example
     *
     * const layer = new FeatureLayer({
     *   url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/311_Service_Requests_from_2015_50k/FeatureServer/0"
     * });
     *
     * // visualization based age of incidents closed passed their due date
     * // or the number of days an incident was overdue at the time of closure.
     *
     * const ageParams = {
     *   layer: layer,
     *   view: view,
     *   basemap: map.basemap,  // "gray"
     *   startTime: "Due_Date",
     *   endTime: "Closed_Date",
     *   unit: "days",
     *   theme: "above-and-below"
     * };
     *
     * // when the promise resolves, apply the renderer to the layer
     * colorRendererCreator.createAgeRenderer(ageParams)
     *   .then(function(response){
     *     layer.renderer = response.renderer;
     *   });
     *
     * @example
     *
     * const layer = new CSVLayer({
     *   url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",
     *   copyright: "USGS Earthquakes"
     * });
     *
     * // visualization based off current age of incident
     * const ageParams = {
     *   layer: layer,
     *   basemap: "topo",
     *   view: view,
     *   startTime: "time",
     *   endTime: Date.now(),
     *   legendOptions: {
     *     title: "Time since earthquake struck"
     *   }
     * };
     *
     * // when the promise resolves, apply the renderer to the layer
     * colorRendererCreator.createAgeRenderer(ageParams)
     *   .then(function(response){
     *     layer.renderer = response.renderer;
     *   });
     */

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../..","../../../pointCloudRenderers","../../../core/Error","../../../core/promiseUtils","../../../intl/substitute","./support/ageUtils","./support/utils","../heuristics/outline","../support/utils","../symbology/color","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/numberUtils","../../support/utils","../../visualVariables/ColorVariable"],function(e,r,o,i,t,a,l,n,s,u,c,d,m,p,y,f,v,h,b,g,w){function S(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return u.reject(m.createError("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return u.reject(m.createError("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e),i=[0,2,1,3],t=y.createLayerAdapter(r.layer,i);return r.layer=t,t?t.load().then(function(){if("mesh"!==t.geometryType&&r.worldScale&&(!r.view||"3d"!==r.view.type))return u.reject(m.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"));var e=y.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),o=m.verifyBasicFieldValidity(t,e,"color-visual-variable:invalid-parameters");return o?u.reject(o):r}):u.reject(m.createError("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(i).join(", ")))}function T(e){return t(this,void 0,void 0,function(){var r,t,a,l,n,u;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,t=[0,2,1,3],a=y.createLayerAdapter(r.layer,t),r.layer=a,!a)throw new s("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(t).join(", "));return[4,a.load()];case 1:if(i.sent(),l=a.geometryType,r.outlineOptimizationEnabled="polygon"===l&&r.outlineOptimizationEnabled,"mesh"===l)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==l)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}if(n=y.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),u=m.verifyBasicFieldValidity(a,n,"color-continuous-renderer:invalid-parameters"))throw u;return[2,r]}})})}function E(e){return t(this,void 0,void 0,function(){var r,t,a,l,n,u,c;return i(this,function(i){switch(i.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new s("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=y.getNormalizationType(r),t=[0,2,1,3],a=y.createLayerAdapter(r.layer,t),r.layer=a,!a)throw new s("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(t).join(", "));if(!(l=null!=r.minValue&&null!=r.maxValue)&&(null!=r.minValue||null!=r.maxValue))throw new s("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,a.load()];case 1:if(i.sent(),n=a.geometryType,r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}if(u=y.getFieldsList({field:r.field,normalizationField:r.normalizationField}),c=m.verifyBasicFieldValidity(a,u,"color-class-breaks-renderer:invalid-parameters"))throw c;return[2,r]}})})}function x(e){var r=o({},e);delete r.basemap,delete r.colorScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var i=r;return i.analyzeData=!(null!=r.minValue&&null!=r.maxValue),i}function V(e){if(!e||!e.layer)return u.reject(m.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e),i=[4],t=y.createLayerAdapter(r.layer,i);return r.layer=t,r.density=r.density||25,r.size=r.size||"100%",m.isValidPointSize(r.size)?t?t.load().then(function(){return r}):u.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(i).join(", "))):u.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function z(e){if(!(e&&e.layer&&e.field))return u.reject(m.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var r=e.field.toLowerCase();if("intensity"!==r&&"elevation"!==r)return u.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var i=o({},e),t=[4],a=y.createLayerAdapter(i.layer,t);return i.layer=a,i.density=i.density||25,i.size=i.size||"100%",m.isValidPointSize(i.size)?a?a.load().then(function(){return i}):u.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(t).join(", "))):u.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function M(e){var r=o({},e),i=r.symbolType.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var t=r;return t.worldScale=i,t}function I(e){return t(this,void 0,void 0,function(){var r,t,a,l,n;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new s("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,t=[0,2,1,3],a=y.createLayerAdapter(r.layer,t),r.layer=a,!a)throw new s("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+y.getLayerTypeLabels(t).join(", "));return[4,a.load()];case 1:if(i.sent(),l=a.geometryType,r.outlineOptimizationEnabled="polygon"===l&&r.outlineOptimizationEnabled,"mesh"===l)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else if("3d-volumetric-uniform"===r.symbolType&&"point"!==l)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(n=d.verifyDates(a,r.startTime,r.endTime,"color-age-renderer:invalid-parameters"))throw n;if(r.unit&&-1===d.supportedAgeUnits.indexOf(r.unit))throw new s("color-age-renderer:invalid-unit","Supported units are: "+d.supportedAgeUnits.join(", "));return[2,r]}})})}function F(e,r){var o=e.colorScheme,i=e.basemap;if(o)o=f.cloneScheme(o);else{var t=r||e.theme||_,a=f.getSchemes({theme:t,basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});if(a)if(i=a.basemapId,e.schemeId){var l=t+"/"+i+"/"+e.schemeId;o=f.getSchemeById({id:l,geometryType:e.geometryType})}else o=a.primaryScheme}return{scheme:o,basemapId:i}}function C(e,r,o){for(var i=(r-e)/(o-1),t=[e],a=1;a<=o-2;a++)t.push(e+a*i);return t.push(r),b.round(t,{strictBounds:!0})}function O(e,r){var o=r.layer,i=F({basemap:r.basemap,colorScheme:r.colorScheme,geometryType:o.geometryType,schemeId:"elevation"===r.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),t=i.scheme;if(!t)return u.reject(m.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme"));var a=m.createColors(t.colors,W);if(a.length<W)return u.reject(m.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors"));var l=m.getDefaultDataRange(e,!1,!0),n=l?C(l[0],l[1],5):m.createStopValues(e),s=g.createColorStops({values:n,isDate:!1,dateFormatOptions:null,colors:a,labelIndexes:[0,2,4]});return u.resolve({stops:s,basemapId:i.basemapId,statistics:e,defaultValuesUsed:!!l,colorScheme:f.cloneScheme(t)})}function L(e,r,o){var i=o.layer,t=o.field,a="function"==typeof t,l=t&&!a?i.getField(t):null,n=l&&l.type===H,s=F({basemap:o.basemap,theme:o.theme,geometryType:i.geometryType,colorScheme:o.colorScheme,worldScale:o.worldScale,view:o.view}),c=s.scheme;if(!c)return u.reject(m.createError("color-visual-variable:insufficient-info","Unable to find color scheme"));var d=m.createColors(c.colors,W);if(d.length<W)return u.reject(m.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors"));var p=m.getDefaultDataRange(e,n,!0),y=c.id.indexOf("seq-")>-1,b=p?C(p[0],p[1],5):m.createStopValues(e,y),S=[0,2,4],T=m.createColors(d,W),E=new w({field:t,valueExpression:o.valueExpression,valueExpressionTitle:o.valueExpressionTitle,normalizationField:r,stops:g.createColorStops({values:b,isDate:n,dateFormatOptions:n?g.timelineDateFormatOptions:null,colors:T,labelIndexes:S}),legendOptions:o.legendOptions}),x=new h({type:"color",minSliderValue:e.min,maxSliderValue:e.max,theme:c.theme}),V=new v({visualVariables:[x]});return u.resolve({basemapId:s.basemapId,visualVariable:E,statistics:e,defaultValuesUsed:!!p,colorScheme:f.cloneScheme(c),authoringInfo:V})}function j(e,r,o,i,t){var n=t.layer,s=t.field,u=n.geometryType,c=t.defaultSymbolEnabled,d=f.cloneScheme(e.colorScheme),p=r&&r.opacity,y=[e.visualVariable.clone()];return r&&r.visualVariables&&r.visualVariables.length&&y.push.apply(y,r.visualVariables.map(function(e){return e.clone()})),{renderer:new l.ClassBreaksRenderer({classBreakInfos:[{minValue:-G,maxValue:G,symbol:m.createSymbol(u,{type:t.symbolType,color:d.noDataColor,size:m.getSymbolSizeFromScheme(d,u),outline:m.getSymbolOutlineFromScheme(d,u,p),meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}})}],defaultLabel:c?a.other:null,defaultSymbol:c?m.createSymbol(u,{type:t.symbolType,color:d.noDataColor,size:m.getSymbolSizeFromScheme(d,u),outline:m.getSymbolOutlineFromScheme(d,u,p),meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}}):null,field:s,normalizationType:o,normalizationField:i,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,visualVariables:y,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:f.cloneScheme(e.colorScheme),basemapId:e.basemapId}}function q(e){return S(e).then(function(e){var r,o=e.normalizationField,i=o?"field":void 0;return r=e.statistics?u.resolve(e.statistics):m.getSummaryStatistics({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:i,normalizationField:o,minValue:e.minValue,maxValue:e.maxValue,view:e.view}),r.then(function(r){return L(r,o,e)})})}function k(e,r){var o,i=e.colorsForClassBreaks;if(i&&i.length>0&&(i.some(function(e){return e.numClasses===r&&(o=e.colors),!!o}),!o)){var t=i[i.length-1],a=r-t.numClasses;if(a>0){var l=t.colors[t.numClasses-1];o=t.colors.splice(0);for(var n=1;n<=a;n++)o.push(l)}}return o&&(o=m.createColors(o,o.length)),o}function B(e,r){return t(this,void 0,void 0,function(){var o,t,n,u,c,d,p,y,h,b,w,S,T,E;return i(this,function(i){if(o=e.layer,t=e.defaultSymbolEnabled,n=o.geometryType,u=F({basemap:e.basemap,geometryType:n,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),c=u.scheme,d=r.result,p=r.outlineResult,y=d.classBreakInfos,h=e.classificationMethod,b="standard-deviation"===h,w=e.normalizationType,!c)throw new s("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");if(!(S=k(c,y.length))||S.length!==y.length)throw new s("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");return T=p&&p.opacity,E=new l.ClassBreaksRenderer({classBreakInfos:y.map(function(r,o){return{minValue:r.minValue,maxValue:r.maxValue,symbol:m.createSymbol(n,{type:e.symbolType,color:S[o],size:m.getSymbolSizeFromScheme(c,n),outline:m.getSymbolOutlineFromScheme(c,n,T),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:r.label}}),defaultLabel:t?a.other:null,defaultSymbol:t?m.createSymbol(n,{type:e.symbolType,color:c.noDataColor,size:m.getSymbolSizeFromScheme(c,n),outline:m.getSymbolOutlineFromScheme(c,n,T),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:w,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===w?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new v({type:"class-breaks-color",classificationMethod:h,standardDeviationInterval:e.standardDeviationInterval})}),b||g.setLabelsForClassBreaks({classBreakInfos:E.classBreakInfos,classificationMethod:h,normalizationType:w,round:!0}),p&&p.visualVariables&&p.visualVariables.length&&(E.visualVariables=p.visualVariables.map(function(e){return e.clone()})),[2,{renderer:E,colorScheme:f.cloneScheme(c),classBreaksResult:d,defaultValuesUsed:r.defaultValuesUsed,basemapId:u.basemapId}]})})}function A(e){return t(this,void 0,void 0,function(){var r,o,t,a,l,n,s;return i(this,function(i){switch(i.label){case 0:return[4,T(e)];case 1:return r=i.sent(),o={layer:r.layer,view:r.view},[4,u.all([q(M(r)),r.outlineOptimizationEnabled?p(o):null])];case 2:return t=i.sent(),a=t[0],l=t[1],n=r.normalizationField,s=n?"field":void 0,[2,j(a,l,s,n,r)]}})})}function U(e){return t(this,void 0,void 0,function(){var r,o;return i(this,function(i){switch(i.label){case 0:return[4,E(e)];case 1:return r=i.sent(),[4,m.getClassBreaks(x(r),r.outlineOptimizationEnabled)];case 2:return o=i.sent(),[2,B(r,o)]}})})}function D(e){return V(e).then(function(e){return{renderer:new n.PointCloudRGBRenderer({field:"RGB",pointsPerInch:e.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(e.size)})}})}function R(e){return z(e).then(function(e){return(e.statistics?u.resolve(e.statistics):m.getSummaryStatistics({layer:e.layer,field:e.field})).then(function(r){return O(r,e)}).then(function(r){return{renderer:new n.PointCloudStretchRenderer({field:e.field,pointsPerInch:e.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(e.size),stops:r.stops}),basemapId:r.basemapId,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,colorScheme:r.colorScheme}})})}function P(e){return t(this,void 0,void 0,function(){var r,t,l,n,s,m,y,f,v,h,b,g,w,S,T,E,x,V,z,F,C;return i(this,function(i){switch(i.label){case 0:return[4,I(e)];case 1:return r=i.sent(),t=r.defaultSymbolEnabled,l=r.view,n=r.layer,s=r.startTime,m=r.endTime,y=r.symbolType,f=r.colorMixMode,v=r.edgesType,h={layer:r.layer,view:r.view},[4,u.all([r.unit?{unit:r.unit,statistics:null,valueExpression:null}:d.getSuggestedAgeUnit({view:l,layer:n,startTime:s,endTime:m}),r.outlineOptimizationEnabled?p(h):null])];case 2:return b=i.sent(),g=b[0],w=b[1],S=g.unit,T=g.statistics,E=g.valueExpression,x=E||d.getAgeExpressions({layer:n,startTime:s,endTime:m,unit:S}).valueExpression,V=c.substitute(a["ageInfo_"+S],{unit:S,startTime:d.formatDate(s,S,n),endTime:d.formatDate(m,S,n)}),[4,q(M({layer:n,basemap:r.basemap,valueExpression:x,symbolType:y,statistics:T,legendOptions:{title:V},colorScheme:r.colorScheme,theme:r.theme,view:l}))];case 3:return z=i.sent(),F={layer:n,valueExpression:x,defaultSymbolEnabled:t,symbolType:y,colorMixMode:f,edgesType:v},C=j(z,w,null,null,F),[2,o({},C,{unit:S})]}})})}Object.defineProperty(r,"__esModule",{value:!0});var H="date",_="high-to-low",G=Math.pow(2,53)-1,W=5;r.createVisualVariable=q,r.createContinuousRenderer=A,r.createClassBreaksRenderer=U,r.createPCTrueColorRenderer=D,r.createPCContinuousRenderer=R,r.createAgeRenderer=P});