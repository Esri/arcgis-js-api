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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

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
     * @param {module:esri/layers/FeatureLayer | module:esri/layers/SceneLayer | module:esri/layers/CSVLayer} params.layer - The layer
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

define(["require","exports","../../../core/tsSupport/assignHelper","dojo/i18n!../../nls/smartMapping","../../../core/lang","../../../core/numberUtils","../../../core/promiseUtils","../../ClassBreaksRenderer","../../PointCloudRGBRenderer","../../PointCloudStretchRenderer","./support/ageUtils","./support/utils","../support/utils","../symbology/color","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/utils","../../visualVariables/ColorVariable"],function(e,r,o,a,t,l,i,n,s,c,u,d,m,p,y,f,v,b){function h(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return i.reject(d.createError("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return i.reject(d.createError("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e),a=[0,1,2],t=m.createLayerAdapter(r.layer,a);return r.layer=t,t?t.load().then(function(){var e=t.geometryType;if("mesh"!==e&&r.worldScale){if("polyline"===e||"polygon"===e)return i.reject(d.createError("color-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));if(!r.view||"3d"!==r.view.type)return i.reject(d.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))}var o=m.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),a=d.verifyBasicFieldValidity(t,o,"color-visual-variable:invalid-parameters");return a?i.reject(a):r}):i.reject(d.createError("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(a).join(", ")))}function g(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return i.reject(d.createError("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return i.reject(d.createError("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var a=[0,1,2],t=m.createLayerAdapter(r.layer,a);return r.layer=t,t?t.load().then(function(){var e=t.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return i.reject(d.createError("color-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return i.reject(d.createError("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=m.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),l=d.verifyBasicFieldValidity(t,a,"color-continuous-renderer:invalid-parameters");return l?i.reject(l):r}):i.reject(d.createError("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(a).join(", ")))}function T(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return i.reject(d.createError("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(e.valueExpression&&!e.view)return i.reject(d.createError("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=m.getNormalizationType(r);var a=[0,1,2],t=m.createLayerAdapter(r.layer,a);return r.layer=t,t?null!=r.minValue&&null!=r.maxValue||null==r.minValue&&null==r.maxValue?t.load().then(function(){var e=t.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return i.reject(d.createError("color-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return i.reject(d.createError("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=m.getFieldsList({field:r.field,normalizationField:r.normalizationField}),l=d.verifyBasicFieldValidity(t,a,"color-class-breaks-renderer:invalid-parameters");return l?i.reject(l):r}):i.reject(d.createError("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range")):i.reject(d.createError("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(a).join(", ")))}function E(e){var r=o({},e);delete r.basemap,delete r.colorScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var a=r;return a.analyzeData=!(null!=r.minValue&&null!=r.maxValue),a}function x(e){if(!e||!e.layer)return i.reject(d.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e),a=[3],t=m.createLayerAdapter(r.layer,a);return r.layer=t,r.density=r.density||25,r.size=r.size||"100%",d.isValidPointSize(r.size)?t?t.load().then(function(){return r}):i.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(a).join(", "))):i.reject(d.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function S(e){if(!(e&&e.layer&&e.field))return i.reject(d.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var r=e.field.toLowerCase();if("intensity"!==r&&"elevation"!==r)return i.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var a=o({},e),t=[3],l=m.createLayerAdapter(a.layer,t);return a.layer=l,a.density=a.density||25,a.size=a.size||"100%",d.isValidPointSize(a.size)?l?l.load().then(function(){return a}):i.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(t).join(", "))):i.reject(d.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function w(e){var r=o({},e),a=r.symbolType.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var t=r;return t.worldScale=a,t}function V(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))return i.reject(d.createError("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required"));var r=o({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var a=[0,1,2],t=m.createLayerAdapter(r.layer,a);return r.layer=t,t?t.load().then(function(){var e=t.geometryType,o=r.symbolType.indexOf("3d")>-1;if("mesh"===e)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if(o&&("polyline"===e||"polygon"===e))return i.reject(d.createError("color-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return i.reject(d.createError("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}var a=u.verifyDates(t,r.startTime,r.endTime,"color-age-renderer:invalid-parameters");return a?i.reject(a):r.unit&&-1===u.supportedAgeUnits.indexOf(r.unit)?i.reject(d.createError("color-age-renderer:invalid-unit","Supported units are: "+u.supportedAgeUnits.join(", "))):r}):i.reject(d.createError("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(a).join(", ")))}function j(e,r){var o=e.colorScheme,a=e.basemap;if(o)o=p.cloneScheme(o);else{var t=r||e.theme||R,l=p.getSchemes({theme:t,basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});if(l)if(a=l.basemapId,e.schemeId){var i=t+"/"+a+"/"+e.schemeId;o=p.getSchemeById({id:i,geometryType:e.geometryType})}else o=l.primaryScheme}return{scheme:o,basemapId:a}}function z(e,r,o){for(var a=(r-e)/(o-1),t=[e],i=1;i<=o-2;i++)t.push(e+i*a);return t.push(r),l.round(t,{strictBounds:!0})}function I(e,r){var o=r.layer,a=j({basemap:r.basemap,colorScheme:r.colorScheme,geometryType:o.geometryType,schemeId:"elevation"===r.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"}),t=a.scheme;if(!t)return i.reject(d.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme"));var l=d.createColors(t.colors,_);if(l.length<_)return i.reject(d.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors"));var n=d.getDefaultDataRange(e,!1,!0),s=n?z(n[0],n[1],5):d.createStopValues(e),c=v.createColorStops({values:s,isDate:!1,dateFormatOptions:null,colors:l,labelIndexes:[0,2,4]});return i.resolve({stops:c,basemapId:a.basemapId,statistics:e,defaultValuesUsed:!!n,colorScheme:p.cloneScheme(t)})}function M(e,r,o){var a=o.layer,t=o.field,l="function"==typeof t,n=t&&!l?a.getField(t):null,s=n&&n.type===D,c=j({basemap:o.basemap,theme:o.theme,geometryType:a.geometryType,colorScheme:o.colorScheme,worldScale:o.worldScale,view:o.view}),u=c.scheme;if(!u)return i.reject(d.createError("color-visual-variable:insufficient-info","Unable to find color scheme"));var m=d.createColors(u.colors,_);if(m.length<_)return i.reject(d.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors"));var h=d.getDefaultDataRange(e,s,!0),g=u.id.indexOf("seq-")>-1,T=h?z(h[0],h[1],5):d.createStopValues(e,g),E=[0,2,4],x=d.createColors(m,_),S=new b({field:t,valueExpression:o.valueExpression,valueExpressionTitle:o.valueExpressionTitle,normalizationField:r,stops:v.createColorStops({values:T,isDate:s,dateFormatOptions:s?v.timelineDateFormatOptions:null,colors:x,labelIndexes:E}),legendOptions:o.legendOptions}),w=new f({type:"color",minSliderValue:e.min,maxSliderValue:e.max,theme:u.theme}),V=new y({visualVariables:[w]});return i.resolve({basemapId:c.basemapId,visualVariable:S,statistics:e,defaultValuesUsed:!!h,colorScheme:p.cloneScheme(u),authoringInfo:V})}function C(e,r,o,t){var l=t.layer,i=t.field,s=l.geometryType,c=t.defaultSymbolEnabled,u=p.cloneScheme(e.colorScheme);return{renderer:new n({classBreakInfos:[{minValue:-P,maxValue:P,symbol:d.createSymbol(u,u.noDataColor,s,t.symbolType,t.colorMixMode,t.edgesType)}],defaultLabel:c?a.other:null,defaultSymbol:c?d.createSymbol(u,u.noDataColor,s,t.symbolType,t.colorMixMode,t.edgesType):null,field:i,normalizationType:r,normalizationField:o,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,visualVariables:[e.visualVariable.clone()],authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:p.cloneScheme(e.colorScheme),basemapId:e.basemapId}}function L(e){return h(e).then(function(e){var r,o=e.normalizationField,a=o?"field":void 0;return r=e.statistics?i.resolve(e.statistics):d.getSummaryStatistics({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:a,normalizationField:o,minValue:e.minValue,maxValue:e.maxValue,view:e.view}),r.then(function(r){return M(r,o,e)})})}function F(e,r){var o,a=e.colorsForClassBreaks;if(a&&a.length>0&&(a.some(function(e){return e.numClasses===r&&(o=e.colors),!!o}),!o)){var t=a[a.length-1],l=r-t.numClasses;if(l>0){var i=t.colors[t.numClasses-1];o=t.colors.splice(0);for(var n=1;n<=l;n++)o.push(i)}}return o&&(o=d.createColors(o,o.length)),o}function q(e,r){var o=e.layer,t=e.defaultSymbolEnabled,l=o.geometryType,s=j({basemap:e.basemap,geometryType:l,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view}),c=s.scheme,u=r.result,m=u.classBreakInfos,f=e.classificationMethod,b="standard-deviation"===f,h=e.normalizationType;if(!c)return i.reject(d.createError("color-class-breaks-renderer:insufficient-info","Unable to find color scheme"));var g=F(c,m.length);if(!g||g.length!==m.length)return i.reject(d.createError("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors"));var T=new n({classBreakInfos:m.map(function(r,o){return{minValue:r.minValue,maxValue:r.maxValue,symbol:d.createSymbol(c,g[o],l,e.symbolType,e.colorMixMode,e.edgesType),label:r.label}}),defaultLabel:t?a.other:null,defaultSymbol:t?d.createSymbol(c,c.noDataColor,l,e.symbolType,e.colorMixMode,e.edgesType):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:h,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===h?u.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new y({type:"class-breaks-color",classificationMethod:f,standardDeviationInterval:e.standardDeviationInterval})});return b||v.setLabelsForClassBreaks({classBreakInfos:T.classBreakInfos,classificationMethod:f,normalizationType:h,round:!0}),i.resolve({renderer:T,colorScheme:p.cloneScheme(c),classBreaksResult:u,defaultValuesUsed:r.defaultValuesUsed,basemapId:s.basemapId})}function k(e){return g(e).then(function(e){return L(w(e)).then(function(r){var o=e.normalizationField;return C(r,o?"field":void 0,o,e)})})}function O(e){return T(e).then(function(e){return d.getClassBreaks(E(e)).then(function(r){return q(e,r)})})}function B(e){return x(e).then(function(e){return{renderer:new s({field:"RGB",pointsPerInch:e.density,pointSizeAlgorithm:d.getPointSizeAlgorithm(e.size)})}})}function A(e){return S(e).then(function(e){return(e.statistics?i.resolve(e.statistics):d.getSummaryStatistics({layer:e.layer,field:e.field})).then(function(r){return I(r,e)}).then(function(r){return{renderer:new c({field:e.field,pointsPerInch:e.density,pointSizeAlgorithm:d.getPointSizeAlgorithm(e.size),stops:r.stops}),basemapId:r.basemapId,statistics:r.statistics,defaultValuesUsed:r.defaultValuesUsed,colorScheme:r.colorScheme}})})}function U(e){return V(e).then(function(e){var r=e.defaultSymbolEnabled,l=e.view,n=e.layer,s=e.startTime,c=e.endTime,d=e.symbolType,m=e.colorMixMode,p=e.edgesType;return(e.unit?i.resolve({unit:e.unit,statistics:null,valueExpression:null}):u.getSuggestedAgeUnit({view:l,layer:n,startTime:s,endTime:c})).then(function(l){var i=l.unit,y=l.statistics,f=l.valueExpression,v=f||u.getAgeExpressions({layer:n,startTime:s,endTime:c,unit:i}).valueExpression,b=t.substitute({unit:i,startTime:u.formatDate(s,i,n),endTime:u.formatDate(c,i,n)},a["ageInfo_"+i]);return L(w({layer:n,basemap:e.basemap,valueExpression:v,symbolType:d,statistics:y,legendOptions:{title:b},colorScheme:e.colorScheme,theme:e.theme,view:e.view})).then(function(e){var a=C(e,null,null,{layer:n,valueExpression:v,defaultSymbolEnabled:r,symbolType:d,colorMixMode:m,edgesType:p});return o({},a,{unit:i})})})})}Object.defineProperty(r,"__esModule",{value:!0});var D="date",R="high-to-low",P=Math.pow(2,53)-1,_=5;r.createVisualVariable=L,r.createContinuousRenderer=k,r.createClassBreaksRenderer=O,r.createPCTrueColorRenderer=B,r.createPCContinuousRenderer=A,r.createAgeRenderer=U});