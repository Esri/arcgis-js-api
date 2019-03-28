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
     * Generates a continuous size {@link module:esri/renderers/Renderer} representing the age of features based
     * on one or more fields. The age of a feature is calculated based on a given `startTime` and `endTime`, one of which
     * must be a date field in the input `layer`. This method generates an Arcade expression and calculates statistics on the
     * output of the expression to accomplish this. The resulting
     * renderer contains a continuous size visual variable that maps optimal sizes based on the indicated basemap
     * to data values based on the resulting statistics of the expression.
     *
     * You are required to provide a `layer`, `view`, `startTime`, and `endTime` to generate this renderer. Optionally, you can
     * set a `unit` for the visualization. Other options are provided for convenience for more involved custom visualization authoring
     * applications. For example, if you already generated statistics in another operation, you
     * can pass the statistics object to the `statistics` parameter to avoid making an extra call to the server.
     *
     * @memberof module:esri/renderers/smartMapping/creators/size
     * @instance
     * @since 4.9
     *
     * @param {Object} params - Input parameters for generating a continuous size visualization of age for time data
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
     * @param {Object} [params.legendOptions] - Provides options for modifying {@link module:esri/widgets/Legend} properties describing
     *   the visualization.
     * @param {string} [params.legendOptions.title] - The title used to represent the age size ramp in the
     *   {@link module:esri/widgets/Legend}.
     * @param {boolean} [params.legendOptions.showLegend] - Indicates whether to include the age renderer in the legend.
     * @param {module:esri/renderers/smartMapping/statistics/summaryStatistics~SummaryStatisticsResult} [params.statistics] -
     *   A statistics object generated from the {@link module:esri/renderers/smartMapping/statistics/summaryStatistics} function.
     *   The `createAgeRenderer()` method generates an Arcade expression and executes a statistics query against the layer for the result of the expression.
     *   If statistics for the expression have already been generated, then pass the object here to avoid making a second statistics
     *   query.
     * @param {module:esri/renderers/smartMapping/symbology/size~SizeScheme} [params.sizeScheme] - In authoring apps,
     *   the user may select a pre-defined size scheme. Pass the scheme object to this property to avoid getting one based on the `basemap`.
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
     *
     * @return {Promise<module:esri/renderers/smartMapping/creators/size~AgeRendererResult>} Resolves to an instance of [AgeRendererResult](#AgeRendererResult).
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
     *   unit: "days"
     * };
     *
     * // when the promise resolves, apply the renderer to the layer
     * sizeRendererCreator.createAgeRenderer(ageParams)
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
     * sizeRendererCreator.createAgeRenderer(ageParams)
     *   .then(function(response){
     *     layer.renderer = response.renderer;
     *   });
     */

define(["require","exports","../../../core/tsSupport/assignHelper","dojo/i18n!../../nls/smartMapping","../..","../../../core/lang","../../../core/promiseUtils","../../../core/screenUtils","./support/ageUtils","./support/utils","../support/utils","../symbology/size","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/utils","../../visualVariables/SizeVariable"],function(e,r,a,i,l,t,n,s,o,u,m,d,p,c,y,v){function f(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return n.reject(u.createError("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return n.reject(u.createError("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified"));var r=a({},e),i=[0,2,1,3],l=m.createLayerAdapter(r.layer,i);return r.layer=l,l?l.load().then(function(){var e=l.geometryType;if("mesh"===e)return n.reject(u.createError("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));if(r.worldScale){if("polyline"===e||"polygon"===e)return n.reject(u.createError("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));if(!r.view||"3d"!==r.view.type)return n.reject(u.createError("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))}var a=m.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),i=u.verifyBasicFieldValidity(l,a,"size-visual-variable:invalid-parameters");return i?n.reject(i):r}):n.reject(u.createError("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(i).join(", ")))}function b(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return n.reject(u.createError("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(e.valueExpression&&!e.sqlExpression&&!e.view)return n.reject(u.createError("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=a({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var i=[0,2,1,3],l=m.createLayerAdapter(r.layer,i);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,a=r.symbolType.indexOf("3d")>-1;if("mesh"===e)return n.reject(u.createError("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));if(a&&("polyline"===e||"polygon"===e))return n.reject(u.createError("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return n.reject(u.createError("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform"));var i=m.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression}),t=u.verifyBasicFieldValidity(l,i,"size-continuous-renderer:invalid-parameters");return t?n.reject(t):r}):n.reject(u.createError("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(i).join(", ")))}function S(e){if(!e||!e.layer||!e.field&&!e.valueExpression)return n.reject(u.createError("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));if(e.valueExpression&&!e.view)return n.reject(u.createError("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var r=a({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=m.getNormalizationType(r);var i=[0,2,1,3],l=m.createLayerAdapter(r.layer,i);return r.layer=l,l?null!=r.minValue&&null!=r.maxValue||null==r.minValue&&null==r.maxValue?l.load().then(function(){var e=l.geometryType,a=r.symbolType.indexOf("3d")>-1;if("mesh"===e)return n.reject(u.createError("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));if(a&&("polyline"===e||"polygon"===e))return n.reject(u.createError("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return n.reject(u.createError("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform"));var i=m.getFieldsList({field:r.field,normalizationField:r.normalizationField}),t=u.verifyBasicFieldValidity(l,i,"size-class-breaks-renderer:invalid-parameters");return t?n.reject(t):r}):n.reject(u.createError("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range")):n.reject(u.createError("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(i).join(", ")))}function h(e){var r=a({},e);delete r.basemap,delete r.sizeScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled;var i=r;return i.analyzeData=!(null!=r.minValue&&null!=r.maxValue),i}function z(e){var r=a({},e),i=r.symbolType.indexOf("3d-volumetric")>-1,l=r;return l.worldScale=i,i&&(l.axis="3d-volumetric-uniform"===r.symbolType?"all":"height"),delete r.symbolType,delete r.defaultSymbolEnabled,l}function g(e){if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))return n.reject(u.createError("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required"));var r=a({},e);r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled;var i=[0,2,1,3],l=m.createLayerAdapter(r.layer,i);return r.layer=l,l?l.load().then(function(){var e=l.geometryType,a=r.symbolType.indexOf("3d")>-1;if("mesh"===e)return n.reject(u.createError("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type"));if(a&&("polyline"===e||"polygon"===e))return n.reject(u.createError("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))return n.reject(u.createError("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform"));var i=o.verifyDates(l,r.startTime,r.endTime,"size-age-renderer:invalid-parameters");return i?n.reject(i):r.unit&&-1===o.supportedAgeUnits.indexOf(r.unit)?n.reject(u.createError("size-age-renderer:invalid-unit","Supported units are: "+o.supportedAgeUnits.join(", "))):r}):n.reject(u.createError("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+m.getLayerTypeLabels(i).join(", ")))}function E(e){var r=e.sizeScheme,a=e.basemap;if(r)r=d.cloneScheme(r);else{var i=d.getSchemes({basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});r=i&&i.primaryScheme,a=i&&i.basemapId}return{scheme:r,basemapId:a}}function x(e,r){var a;switch(r){case"point":case"multipoint":var i=e;a=[i.minSize,i.maxSize];break;case"polyline":var l=e;a=[l.minWidth,l.maxWidth];break;case"polygon":var t=e;a=[t.marker.minSize,t.marker.maxSize]}return a}function T(e,r,a){var i=a.layer,l=a.field,t="function"==typeof l,s=l&&!t?i.getField(l):null,o=s&&s.type===q,m=i.geometryType,y=E({basemap:a.basemap,geometryType:m,sizeScheme:a.sizeScheme,worldScale:a.worldScale,view:a.view}),f=y.scheme;if(!f)return n.reject(u.createError("size-visual-variable:insufficient-info","Unable to find size scheme"));var b=x(f,m),S=u.getDefaultDataRange(e,o,!1),h=S||[e.min,e.max],z=[],g="height"===a.axis,T=g?a.axis:void 0,w=b[0],V=b[1];if(g){var j=u.getSizeRangeForAxis({minSize:w,maxSize:V},T);z.push(new v({axis:"width-and-depth",minSize:j.minSize})),V=j.maxSize}z.unshift(new v({field:l,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,valueUnit:"unknown",normalizationField:r,axis:T,minSize:w,maxSize:V,minDataValue:h[0],maxDataValue:h[1],legendOptions:a.legendOptions}));var F=new c({type:"size",minSliderValue:e.min,maxSliderValue:e.max}),k=new p({visualVariables:[F]});return n.resolve({basemapId:y.basemapId,visualVariables:z,statistics:e,defaultValuesUsed:!!S,sizeScheme:d.cloneScheme(f),authoringInfo:k})}function w(e,r,a,t){var n=t.layer,s=t.field,o=n.geometryType,m=t.defaultSymbolEnabled,p=d.cloneScheme(e.sizeScheme),c="polygon"===o,y=c?p.marker:p,v=c?p.background:null,f=c?"point":o;return{renderer:new l.ClassBreaksRenderer({backgroundFillSymbol:v&&u.createSymbol(o,{type:t.symbolType,color:v.color,outline:u.getSymbolOutlineFromScheme(v,o)}),classBreakInfos:[{minValue:-L,maxValue:L,symbol:u.createSymbol(f,{type:t.symbolType,color:y.color,size:u.getSymbolSizeFromScheme(y,f),outline:u.getSymbolOutlineFromScheme(y,f)})}],defaultLabel:m?i.other:null,defaultSymbol:m?u.createSymbol(f,{type:t.symbolType,color:y.noDataColor,size:u.getSymbolSizeFromScheme(y,f,!0),outline:u.getSymbolOutlineFromScheme(y,f)}):null,field:s,normalizationField:a,normalizationType:r,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,visualVariables:e.visualVariables.map(function(e){return e.clone()}),authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariables:e.visualVariables.map(function(e){return e.clone()}),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,sizeScheme:d.cloneScheme(e.sizeScheme),basemapId:e.basemapId}}function V(e,r){for(var a=s.toPt(e.minSize),i=s.toPt(e.maxSize),l=(i-a)/(r>=4?r-1:r),t=[],n=0;n<r;n++)t.push(a+l*n);return t}function j(e,r){var a=e.layer,t=e.defaultSymbolEnabled,s=a.geometryType,o="polygon"===s,m=e.symbolType.indexOf("3d-volumetric")>-1,c=E({basemap:e.basemap,geometryType:s,sizeScheme:e.sizeScheme,worldScale:m,view:e.view}),v=c.scheme,f=r.result,b=f.classBreakInfos,S=e.classificationMethod,h=e.normalizationType,z=o?v.marker:v,g=o?v.background:null,T=o?"point":s,w=x(z,T),j=u.getSizeRangeForAxis({minSize:w[0],maxSize:w[1]},"height"),F=V({minSize:w[0],maxSize:m?j.maxSize:w[1]},b.length),k=new l.ClassBreaksRenderer({backgroundFillSymbol:g&&u.createSymbol(s,{type:e.symbolType,color:g.color,outline:u.getSymbolOutlineFromScheme(g,s)}),classBreakInfos:b.map(function(r,a){return{minValue:r.minValue,maxValue:r.maxValue,symbol:u.createSymbol(T,{type:e.symbolType,color:z.color,size:F[a],widthAndDepth:j.minSize,outline:u.getSymbolOutlineFromScheme(z,T)}),label:r.label}}),defaultLabel:t?i.other:null,defaultSymbol:t?u.createSymbol(T,{type:e.symbolType,color:z.noDataColor,size:u.getSymbolSizeFromScheme(z,T,!0),widthAndDepth:j.minSize,outline:u.getSymbolOutlineFromScheme(z,T)}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:h,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===h?f.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new p({type:"class-breaks-size",classificationMethod:S,standardDeviationInterval:e.standardDeviationInterval})});return"standard-deviation"!==S&&y.setLabelsForClassBreaks({classBreakInfos:k.classBreakInfos,classificationMethod:S,normalizationType:h,round:!0}),n.resolve({renderer:k,sizeScheme:d.cloneScheme(v),classBreaksResult:f,defaultValuesUsed:r.defaultValuesUsed,basemapId:c.basemapId})}function F(e){return f(e).then(function(e){var r,a=e.normalizationField,i=a?"field":void 0;return r=e.statistics?n.resolve(e.statistics):u.getSummaryStatistics({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:i,normalizationField:a,minValue:e.minValue,maxValue:e.maxValue,view:e.view}),r.then(function(r){return T(r,a,e)})})}function k(e){return b(e).then(function(e){return F(z(e)).then(function(r){var a=e.normalizationField;return w(r,a?"field":void 0,a,e)})})}function I(e){return S(e).then(function(e){return u.getClassBreaks(h(e)).then(function(r){return j(e,r)})})}function O(e){return g(e).then(function(e){var r=e.defaultSymbolEnabled,l=e.view,s=e.layer,u=e.startTime,m=e.endTime,d=e.symbolType;return(e.unit?n.resolve({unit:e.unit,statistics:null,valueExpression:null}):o.getSuggestedAgeUnit({view:l,layer:s,startTime:u,endTime:m})).then(function(l){var n=l.unit,p=l.statistics,c=l.valueExpression,y=c||o.getAgeExpressions({layer:s,startTime:u,endTime:m,unit:n}).valueExpression,v=t.substitute({unit:n,startTime:o.formatDate(u,n,s),endTime:o.formatDate(m,n,s)},i["ageInfo_"+n]);return F(z({layer:s,basemap:e.basemap,valueExpression:y,symbolType:d,statistics:p,legendOptions:{title:v},sizeScheme:e.sizeScheme,view:e.view})).then(function(e){var i=w(e,null,null,{layer:s,valueExpression:y,defaultSymbolEnabled:r,symbolType:d});return a({},i,{unit:n})})})})}Object.defineProperty(r,"__esModule",{value:!0});var q="date",L=Math.pow(2,53)-1;r.createVisualVariables=F,r.createContinuousRenderer=k,r.createClassBreaksRenderer=I,r.createAgeRenderer=O});