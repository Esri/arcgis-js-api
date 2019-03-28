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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

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

define(["require","exports","../../../core/tsSupport/assignHelper","dojo/i18n!../../nls/smartMapping","../..","../../../pointCloudRenderers","../../../core/lang","../../../core/numberUtils","../../../core/promiseUtils","./support/ageUtils","./support/utils","../support/utils","../symbology/color","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/utils","../../visualVariables/ColorVariable"],function(e,r,o,a,l,t,i,n,s,c,u,d,m,p,y,f,v){function b(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(u.createError("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return s.reject(u.createError("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e),a=[0,2,1,3],l=d.createLayerAdapter(r.layer,a);return r.layer=l,l?l.load().then(function(){var e=l.geometryType;if("mesh"!==e&&r.worldScale){if("polyline"===e||"polygon"===e)return s.reject(u.createError("color-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));if(!r.view||"3d"!==r.view.type)return s.reject(u.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))}var o=d.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),a=u.verifyBasicFieldValidity(l,o,"color-visual-variable:invalid-parameters");return a?s.reject(a):r}):s.reject(u.createError("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(a).join(", ")))}function h(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return s.reject(u.createError("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return s.reject(u.createError("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var a=[0,2,1,3],l=d.createLayerAdapter(r.layer,a);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return s.reject(u.createError("color-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return s.reject(u.createError("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=d.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),t=u.verifyBasicFieldValidity(l,a,"color-continuous-renderer:invalid-parameters");return t?s.reject(t):r}):s.reject(u.createError("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(a).join(", ")))}function g(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return s.reject(u.createError("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(e.valueExpression&&!e.view)return s.reject(u.createError("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=d.getNormalizationType(r);var a=[0,2,1,3],l=d.createLayerAdapter(r.layer,a);return r.layer=l,l?null!=r.minValue&&null!=r.maxValue||null==r.minValue&&null==r.maxValue?l.load().then(function(){var e=l.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return s.reject(u.createError("color-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return s.reject(u.createError("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=d.getFieldsList({field:r.field,normalizationField:r.normalizationField}),t=u.verifyBasicFieldValidity(l,a,"color-class-breaks-renderer:invalid-parameters");return t?s.reject(t):r}):s.reject(u.createError("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range")):s.reject(u.createError("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(a).join(", ")))}function S(e){var r=o({},e);delete r.basemap,delete r.colorScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var a=r;return a.analyzeData=!(null!=r.minValue&&null!=r.maxValue),a}function T(e){if(!e||!e.layer)return s.reject(u.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e),a=[4],l=d.createLayerAdapter(r.layer,a);return r.layer=l,r.density=r.density||25,r.size=r.size||"100%",u.isValidPointSize(r.size)?l?l.load().then(function(){return r}):s.reject(u.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(a).join(", "))):s.reject(u.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function E(e){if(!(e&&e.layer&&e.field))return s.reject(u.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var r=e.field.toLowerCase();if("intensity"!==r&&"elevation"!==r)return s.reject(u.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var a=o({},e),l=[4],t=d.createLayerAdapter(a.layer,l);return a.layer=t,a.density=a.density||25,a.size=a.size||"100%",u.isValidPointSize(a.size)?t?t.load().then(function(){return a}):s.reject(u.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(l).join(", "))):s.reject(u.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function x(e){var r=o({},e),a=r.symbolType.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var l=r;return l.worldScale=a,l}function w(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))return s.reject(u.createError("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var a=[0,2,1,3],l=d.createLayerAdapter(r.layer,a);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return s.reject(u.createError("color-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return s.reject(u.createError("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=c.verifyDates(l,r.startTime,r.endTime,"color-age-renderer:invalid-parameters");return a?s.reject(a):r.unit&&-1===c.supportedAgeUnits.indexOf(r.unit)?s.reject(u.createError("color-age-renderer:invalid-unit","Supported units are: "+c.supportedAgeUnits.join(", "))):r}):s.reject(u.createError("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+d.getLayerTypeLabels(a).join(", ")))}function V(e,r){var o=e.colorScheme,a=e.basemap;if(o)o=m.cloneScheme(o);else{var l=r||e.theme||D,t=m.getSchemes({theme:l,basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});if(t)if(a=t.basemapId,e.schemeId){var i=l+"/"+a+"/"+e.schemeId;o=m.getSchemeById({id:i,geometryType:e.geometryType})}else o=t.primaryScheme}return{scheme:o,basemapId:a}}function z(e,r,o){for(var a=(r-e)/(o-1),l=[e],t=1;t<=o-2;t++)l.push(e+t*a);return l.push(r),n.round(l,{strictBounds:!0})}function j(e,r){var o=r.layer,a=V({basemap:r.basemap,colorScheme:r.colorScheme,geometryType:o.geometryType,schemeId:"elevation"===r.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),l=a.scheme;if(!l)return s.reject(u.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme"));var t=u.createColors(l.colors,P);if(t.length<P)return s.reject(u.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors"));var i=u.getDefaultDataRange(e,!1,!0),n=i?z(i[0],i[1],5):u.createStopValues(e),c=f.createColorStops({values:n,isDate:!1,dateFormatOptions:null,colors:t,labelIndexes:[0,2,4]});return s.resolve({stops:c,basemapId:a.basemapId,statistics:e,defaultValuesUsed:!!i,colorScheme:m.cloneScheme(l)})}function M(e,r,o){var a=o.layer,l=o.field,t="function"==typeof l,i=l&&!t?a.getField(l):null,n=i&&i.type===U,c=V({basemap:o.basemap,theme:o.theme,geometryType:a.geometryType,colorScheme:o.colorScheme,worldScale:o.worldScale,view:o.view}),d=c.scheme;if(!d)return s.reject(u.createError("color-visual-variable:insufficient-info","Unable to find color scheme"));var b=u.createColors(d.colors,P);if(b.length<P)return s.reject(u.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors"));var h=u.getDefaultDataRange(e,n,!0),g=d.id.indexOf("seq-")>-1,S=h?z(h[0],h[1],5):u.createStopValues(e,g),T=[0,2,4],E=u.createColors(b,P),x=new v({field:l,valueExpression:o.valueExpression,valueExpressionTitle:o.valueExpressionTitle,normalizationField:r,stops:f.createColorStops({values:S,isDate:n,dateFormatOptions:n?f.timelineDateFormatOptions:null,colors:E,labelIndexes:T}),legendOptions:o.legendOptions}),w=new y({type:"color",minSliderValue:e.min,maxSliderValue:e.max,theme:d.theme}),j=new p({visualVariables:[w]});return s.resolve({basemapId:c.basemapId,visualVariable:x,statistics:e,defaultValuesUsed:!!h,colorScheme:m.cloneScheme(d),authoringInfo:j})}function I(e,r,o,t){var i=t.layer,n=t.field,s=i.geometryType,c=t.defaultSymbolEnabled,d=m.cloneScheme(e.colorScheme);return{renderer:new l.ClassBreaksRenderer({classBreakInfos:[{minValue:-R,maxValue:R,symbol:u.createSymbol(s,{type:t.symbolType,color:d.noDataColor,size:u.getSymbolSizeFromScheme(d,s),outline:u.getSymbolOutlineFromScheme(d,s),meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}})}],defaultLabel:c?a.other:null,defaultSymbol:c?u.createSymbol(s,{type:t.symbolType,color:d.noDataColor,size:u.getSymbolSizeFromScheme(d,s),outline:u.getSymbolOutlineFromScheme(d,s),meshInfo:{colorMixMode:t.colorMixMode,edgesType:t.edgesType}}):null,field:n,normalizationType:r,normalizationField:o,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,visualVariables:[e.visualVariable.clone()],authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:m.cloneScheme(e.colorScheme),basemapId:e.basemapId}}function F(e){return b(e).then(function(e){var r,o=e.normalizationField,a=o?"field":void 0;return r=e.statistics?s.resolve(e.statistics):u.getSummaryStatistics({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:a,normalizationField:o,minValue:e.minValue,maxValue:e.maxValue,view:e.view}),r.then(function(r){return M(r,o,e)})})}function C(e,r){var o,a=e.colorsForClassBreaks;if(a&&a.length>0&&(a.some(function(e){return e.numClasses===r&&(o=e.colors),!!o}),!o)){var l=a[a.length-1],t=r-l.numClasses;if(t>0){var i=l.colors[l.numClasses-1];o=l.colors.splice(0);for(var n=1;n<=t;n++)o.push(i)}}return o&&(o=u.createColors(o,o.length)),o}function L(e,r){var o=e.layer,t=e.defaultSymbolEnabled,i=o.geometryType,n=V({basemap:e.basemap,geometryType:i,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),c=n.scheme,d=r.result,y=d.classBreakInfos,v=e.classificationMethod,b="standard-deviation"===v,h=e.normalizationType;if(!c)return s.reject(u.createError("color-class-breaks-renderer:insufficient-info","Unable to find color scheme"));var g=C(c,y.length);if(!g||g.length!==y.length)return s.reject(u.createError("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors"));var S=new l.ClassBreaksRenderer({classBreakInfos:y.map(function(r,o){return{minValue:r.minValue,maxValue:r.maxValue,symbol:u.createSymbol(i,{type:e.symbolType,color:g[o],size:u.getSymbolSizeFromScheme(c,i),outline:u.getSymbolOutlineFromScheme(c,i),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:r.label}}),defaultLabel:t?a.other:null,defaultSymbol:t?u.createSymbol(i,{type:e.symbolType,color:c.noDataColor,size:u.getSymbolSizeFromScheme(c,i),outline:u.getSymbolOutlineFromScheme(c,i),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:h,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===h?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new p({type:"class-breaks-color",classificationMethod:v,standardDeviationInterval:e.standardDeviationInterval})});return b||f.setLabelsForClassBreaks({classBreakInfos:S.classBreakInfos,classificationMethod:v,normalizationType:h,round:!0}),s.resolve({renderer:S,colorScheme:m.cloneScheme(c),classBreaksResult:d,defaultValuesUsed:r.defaultValuesUsed,basemapId:n.basemapId})}function O(e){return h(e).then(function(e){return F(x(e)).then(function(r){var o=e.normalizationField;return I(r,o?"field":void 0,o,e)})})}function q(e){return g(e).then(function(e){return u.getClassBreaks(S(e)).then(function(r){return L(e,r)})})}function k(e){return T(e).then(function(e){return{renderer:new t.PointCloudRGBRenderer({field:"RGB",pointsPerInch:e.density,pointSizeAlgorithm:u.getPointSizeAlgorithm(e.size)})}})}function B(e){return E(e).then(function(e){return(e.statistics?s.resolve(e.statistics):u.getSummaryStatistics({layer:e.layer,field:e.field})).then(function(r){return j(r,e)}).then(function(r){return{renderer:new t.PointCloudStretchRenderer({field:e.field,pointsPerInch:e.density,pointSizeAlgorithm:u.getPointSizeAlgorithm(e.size),stops:r.stops}),basemapId:r.basemapId,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,colorScheme:r.colorScheme}})})}function A(e){return w(e).then(function(e){var r=e.defaultSymbolEnabled,l=e.view,t=e.layer,n=e.startTime,u=e.endTime,d=e.symbolType,m=e.colorMixMode,p=e.edgesType;return(e.unit?s.resolve({unit:e.unit,statistics:null,valueExpression:null}):c.getSuggestedAgeUnit({view:l,layer:t,startTime:n,endTime:u})).then(function(l){var s=l.unit,y=l.statistics,f=l.valueExpression,v=f||c.getAgeExpressions({layer:t,startTime:n,endTime:u,unit:s}).valueExpression,b=i.substitute({unit:s,startTime:c.formatDate(n,s,t),endTime:c.formatDate(u,s,t)},a["ageInfo_"+s]);return F(x({layer:t,basemap:e.basemap,valueExpression:v,symbolType:d,statistics:y,legendOptions:{title:b},colorScheme:e.colorScheme,theme:e.theme,view:e.view})).then(function(e){var a=I(e,null,null,{layer:t,valueExpression:v,defaultSymbolEnabled:r,symbolType:d,colorMixMode:m,edgesType:p});return o({},a,{unit:s})})})})}Object.defineProperty(r,"__esModule",{value:!0});var U="date",D="high-to-low",R=Math.pow(2,53)-1,P=5;r.createVisualVariable=F,r.createContinuousRenderer=O,r.createClassBreaksRenderer=q,r.createPCTrueColorRenderer=k,r.createPCContinuousRenderer=B,r.createAgeRenderer=A});