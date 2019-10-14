// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

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
     * @param {module:esri/views/View} params.view - The view where the input layer is rendered. This method
     *   inspects the view's background (i.e. basemap, web map background, or view container) to determine optimal
     *   colors for the output renderer.
     * @param {Date | string | number} params.startTime - The name of the field, or a date value representing the start time in the
     *   age calculation. If a date value is specified, then the `endTime` parameter must reference a Date field in the layer.
     * @param {Date | string | number} params.endTime - The name of the field, or a date value representing the end time in the
     *   age calculation. If a date value is specified, then the `startTime` parameter must reference a Date field in the layer.
     * @param {string} [params.unit] - The time unit used to calculate the difference between `endTime` and `startTime`. If a unit
     *   is not specified, then a suggested unit is determined based on the spread and distribution of the data.
     *
     *   **Possible Values:** years | months | days | hours | minutes | seconds
     * @param {string|module:esri/Basemap} [params.basemap=gray] - The {@link module:esri/Map#basemap named string} or
     *   basemap object of the Esri basemap that will be paired with the output visualization. Determines optimal
     *   colors for the output renderer.
     * @param {boolean} [params.outlineOptimizationEnabled=false] - Only for polygon layers. Indicates whether the
     *   polygon outline width should vary based on view scale. When set, a valid {@link module:esri/views/MapView}
     *   instance must be provided in the `view` parameter. This option is not supported for 3D
     *   {@link module:esri/views/SceneView SceneViews}.
     * @param {boolean} [params.sizeOptimizationEnabled=false] - Only for polygon layers in 2D MapViews. Indicates whether
     *   icon sizes should vary based on view scale. When set, a valid {@link module:esri/views/MapView}
     *   instance must be provided in the `view` parameter. This option is not supported for 3D
     *   {@link module:esri/views/SceneView SceneViews}.
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
     * @deprecatedParameters {"params.basemap": "since version 4.13. Use `view` instead."}
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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../..","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/screenUtils","../../../intl/substitute","./support/utils","../heuristics/ageUnit","../heuristics/outline","../heuristics/sizeRange","../statistics/support/ageUtils","../support/utils","../symbology/size","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/utils","../../visualVariables/SizeVariable"],function(e,i,a,r,n,t,s,l,o,u,m,d,p,c,y,b,f,v,h,w,z,S,g){function x(e){return n(this,void 0,void 0,function(){var i,n,t,s,o,u;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new l("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new l("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),n=[0,2,1,3],t=v.createLayerAdapter(i.layer,n),i.layer=t,!t)throw new l("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+v.getLayerTypeLabels(n).join(", "));return"height"===i.axis&&(i.sizeOptimizationEnabled=!1),[4,t.load()];case 1:if(r.sent(),"mesh"===(s=t.geometryType))throw new l("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(i.worldScale){if("polyline"===s||"polygon"===s)throw new l("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers");if(!i.view||"3d"!==i.view.type)throw new l("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true")}return[4,v.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(o=r.sent(),u=p.verifyBasicFieldValidity(t,o,"size-visual-variable:invalid-parameters"))throw u;return[2,i]}})})}function T(e){return n(this,void 0,void 0,function(){var i,n,t,s,o,u,m;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new l("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new l("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,n=[0,2,1,3],t=v.createLayerAdapter(i.layer,n),i.layer=t,!t)throw new l("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+v.getLayerTypeLabels(n).join(", "));return[4,t.load()];case 1:if(r.sent(),s=t.geometryType,o=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===s&&i.outlineOptimizationEnabled,"mesh"===s)throw new l("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(o&&("polyline"===s||"polygon"===s))throw new l("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new l("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");return[4,v.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression})];case 2:if(u=r.sent(),m=p.verifyBasicFieldValidity(t,u,"size-continuous-renderer:invalid-parameters"))throw m;return[2,i]}})})}function E(e){return n(this,void 0,void 0,function(){var i,n,t,s,o,u,m,d;return r(this,function(r){switch(r.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new l("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new l("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,i.classificationMethod=i.classificationMethod||"equal-interval",i.normalizationType=v.getNormalizationType(i),n=[0,2,1,3],t=v.createLayerAdapter(i.layer,n),i.layer=t,!t)throw new l("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+v.getLayerTypeLabels(n).join(", "));if(!(s=null!=i.minValue&&null!=i.maxValue)&&(null!=i.minValue||null!=i.maxValue))throw new l("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,t.load()];case 1:if(r.sent(),o=t.geometryType,u=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===o&&i.outlineOptimizationEnabled,"mesh"===o)throw new l("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(u&&("polyline"===o||"polygon"===o))throw new l("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new l("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");return[4,v.getFieldsList({field:i.field,normalizationField:i.normalizationField})];case 2:if(m=r.sent(),d=p.verifyBasicFieldValidity(t,m,"size-class-breaks-renderer:invalid-parameters"))throw d;return[2,i]}})})}function V(e){var i=a({},e);delete i.basemap,delete i.sizeScheme,delete i.legendOptions,delete i.symbolType,delete i.defaultSymbolEnabled;var r=i;return r.analyzeData=!(null!=i.minValue&&null!=i.maxValue),r}function F(e){var i=a({},e),r=i.symbolType.indexOf("3d-volumetric")>-1,n=i;return n.worldScale=r,r&&(n.axis="3d-volumetric-uniform"===i.symbolType?"all":"height"),delete i.symbolType,delete i.defaultSymbolEnabled,n}function O(e){return n(this,void 0,void 0,function(){var i,n,t,s,o,u;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new l("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,n=[0,2,1,3],t=v.createLayerAdapter(i.layer,n),i.layer=t,!t)throw new l("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+v.getLayerTypeLabels(n).join(", "));return[4,t.load()];case 1:if(r.sent(),s=t.geometryType,o=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===s&&i.outlineOptimizationEnabled,"mesh"===s)throw new l("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(o&&("polyline"===s||"polygon"===s))throw new l("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new l("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(u=f.verifyDates(t,i.startTime,i.endTime,"size-age-renderer:invalid-parameters"))throw u;if(i.unit&&-1===f.supportedAgeUnits.indexOf(i.unit))throw new l("size-age-renderer:invalid-unit","Supported units are: "+f.supportedAgeUnits.join(", "));return[2,i]}})})}function k(e){return n(this,void 0,void 0,function(){var i,a,n,t,s;return r(this,function(r){switch(r.label){case 0:return i=e.sizeScheme,a=null,n=null,[4,p.getBasemapInfo(e.basemap,e.view)];case 1:return t=r.sent(),(a=o.isSome(t.basemapId)?t.basemapId:null,n=o.isSome(t.basemapTheme)?t.basemapTheme:null,i)?[2,{scheme:h.cloneScheme(i),basemapId:a,basemapTheme:n}]:(s=h.getSchemes({basemap:a,basemapTheme:n,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view}),s&&(i=s.primaryScheme,a=s.basemapId,n=s.basemapTheme),[2,{scheme:i,basemapId:a,basemapTheme:n}])}})})}function I(e,i){var a;switch(i){case"point":case"multipoint":var r=e;a=[r.minSize,r.maxSize];break;case"polyline":var n=e;a=[n.minWidth,n.maxWidth];break;case"polygon":var t=e;a=[t.marker.minSize,t.marker.maxSize]}return a}function q(e,i,a,t){return n(this,void 0,void 0,function(){var n,s,o,u,m,d,c,y,b,f,v,S,x,T,E,V,F,O,q,L;return r(this,function(r){switch(r.label){case 0:return n=t.layer,s=t.field,o="function"==typeof s,u=s&&!o?n.getField(s):null,m=u&&u.type===M,d=n.geometryType,[4,k({basemap:t.basemap,geometryType:d,sizeScheme:t.sizeScheme,worldScale:t.worldScale,view:t.view})];case 1:if(c=r.sent(),!(y=c.scheme))throw new l("size-visual-variable:insufficient-info","Unable to find size scheme");return b=i&&[i.minSize,i.maxSize],f=b||I(y,d),v=p.getDefaultDataRange(e,m,!1),S=v||[e.min,e.max],x=[],T="height"===t.axis,E=T?t.axis:void 0,V=f[0],F=f[1],T&&"number"==typeof V&&"number"==typeof F&&(O=p.getSizeRangeForAxis({minSize:V,maxSize:F},E),x.push(new g({axis:"width-and-depth",minSize:O.minSize})),F=O.maxSize),x.unshift(new g({field:s,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,valueUnit:"unknown",normalizationField:a,axis:E,minSize:V,maxSize:F,minDataValue:S[0],maxDataValue:S[1],legendOptions:t.legendOptions})),q=new z({type:"size",minSliderValue:e.min,maxSliderValue:e.max}),L=new w({visualVariables:[q]}),[2,{basemapId:c.basemapId,basemapTheme:c.basemapTheme,visualVariables:x,statistics:e,defaultValuesUsed:!!v,sizeScheme:h.cloneScheme(y),authoringInfo:L}]}})})}function L(e,i,a,r,n){var l=n.layer,o=n.field,u=l.geometryType,m=n.defaultSymbolEnabled,d=h.cloneScheme(e.sizeScheme),c="polygon"===u,y=c?d.marker:d,b=c?d.background:null,f=c?"point":u,v=i&&i.opacity,w=e.visualVariables.map(function(e){return e.clone()});return i&&i.visualVariables&&i.visualVariables.length&&w.push.apply(w,i.visualVariables.map(function(e){return e.clone()})),{renderer:new s.ClassBreaksRenderer({backgroundFillSymbol:b&&p.createSymbol(u,{type:n.symbolType,color:b.color,outline:p.getSymbolOutlineFromScheme(b,u,v)}),classBreakInfos:[{minValue:-j,maxValue:j,symbol:p.createSymbol(f,{type:n.symbolType,color:y.color,size:p.getSymbolSizeFromScheme(y,f),outline:p.getSymbolOutlineFromScheme(y,f,v)})}],defaultLabel:m?t.other:null,defaultSymbol:m?p.createSymbol(f,{type:n.symbolType,color:y.noDataColor,size:p.getSymbolSizeFromScheme(y,f,!0),outline:p.getSymbolOutlineFromScheme(y,f,v)}):null,field:o,normalizationField:r,normalizationType:a,valueExpression:n.valueExpression,valueExpressionTitle:n.valueExpressionTitle,visualVariables:w,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariables:e.visualVariables.map(function(e){return e.clone()}),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,sizeScheme:h.cloneScheme(e.sizeScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}function A(e,i){for(var a=m.toPt(e.minSize),r=m.toPt(e.maxSize),n=(r-a)/(i>=4?i-1:i),t=[],s=0;s<i;s++)t.push(a+n*s);return t}function B(e,i){return n(this,void 0,void 0,function(){var a,n,l,o,u,m,d,c,y,b,f,v,z,g,x,T,E,V,F,O;return r(this,function(r){switch(r.label){case 0:return a=e.layer,n=e.defaultSymbolEnabled,l=a.geometryType,o="polygon"===l,u=e.symbolType.indexOf("3d-volumetric")>-1,[4,k({basemap:e.basemap,geometryType:l,sizeScheme:e.sizeScheme,worldScale:u,view:e.view})];case 1:return m=r.sent(),d=m.scheme,c=i.result,y=i.outlineResult,b=c.classBreakInfos,f=e.classificationMethod,v=e.normalizationType,z=o?d.marker:d,g=o?d.background:null,x=o?"point":l,T=I(z,x),E=u&&p.getSizeRangeForAxis({minSize:T[0],maxSize:T[1]},"height"),V=A({minSize:T[0],maxSize:u?E.maxSize:T[1]},b.length),F=y&&y.opacity,O=new s.ClassBreaksRenderer({backgroundFillSymbol:g&&p.createSymbol(l,{type:e.symbolType,color:g.color,outline:p.getSymbolOutlineFromScheme(g,l,F)}),classBreakInfos:b.map(function(i,a){return{minValue:i.minValue,maxValue:i.maxValue,symbol:p.createSymbol(x,{type:e.symbolType,color:z.color,size:V[a],widthAndDepth:E&&E.minSize,outline:p.getSymbolOutlineFromScheme(z,x,F)}),label:i.label}}),defaultLabel:n?t.other:null,defaultSymbol:n?p.createSymbol(x,{type:e.symbolType,color:z.noDataColor,size:p.getSymbolSizeFromScheme(z,x,!0),widthAndDepth:E&&E.minSize,outline:p.getSymbolOutlineFromScheme(z,x,F)}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:v,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===v?c.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new w({type:"class-breaks-size",classificationMethod:f,standardDeviationInterval:e.standardDeviationInterval})}),"standard-deviation"!==f&&S.setLabelsForClassBreaks({classBreakInfos:O.classBreakInfos,classificationMethod:f,normalizationType:v,round:!0}),y&&y.visualVariables&&y.visualVariables.length&&(O.visualVariables=y.visualVariables.map(function(e){return e.clone()})),[2,{renderer:O,sizeScheme:h.cloneScheme(d),classBreaksResult:c,defaultValuesUsed:i.defaultValuesUsed,basemapId:m.basemapId,basemapTheme:m.basemapTheme}]}})})}function D(e){return n(this,void 0,void 0,function(){var i,a,n,t,s,l,o,m;return r(this,function(r){switch(r.label){case 0:return[4,x(e)];case 1:return i=r.sent(),a=i.view,n=i.layer,t=i.normalizationField,s=t?"field":void 0,[4,u.all([i.statistics?i.statistics:p.getSummaryStatistics({layer:n,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:s,normalizationField:t,minValue:i.minValue,maxValue:i.maxValue,view:a}),i.sizeOptimizationEnabled?b({view:a,layer:n}):null])];case 2:return l=r.sent(),o=l[0],m=l[1],[2,q(o,m,t,i)]}})})}function U(e){return n(this,void 0,void 0,function(){var i,a,n,t,s,l,o;return r(this,function(r){switch(r.label){case 0:return[4,T(e)];case 1:return i=r.sent(),a={layer:i.layer,view:i.view},[4,u.all([D(F(i)),i.outlineOptimizationEnabled?y(a):null])];case 2:return n=r.sent(),t=n[0],s=n[1],l=i.normalizationField,o=l?"field":void 0,[2,L(t,s,o,l,i)]}})})}function R(e){return n(this,void 0,void 0,function(){var i,a;return r(this,function(r){switch(r.label){case 0:return[4,E(e)];case 1:return i=r.sent(),[4,p.getClassBreaks(V(i),i.outlineOptimizationEnabled)];case 2:return a=r.sent(),[2,B(i,a)]}})})}function C(e){return n(this,void 0,void 0,function(){var i,n,s,l,o,m,b,v,h,w,z,S,g,x,T,E,V,k,I,q,A,B;return r(this,function(r){switch(r.label){case 0:return[4,O(e)];case 1:return i=r.sent(),(n=i.defaultSymbolEnabled,s=i.view,l=i.startTime,o=i.endTime,m=i.symbolType,b=i.layer,v={layer:i.layer,view:i.view},g=(S=u).all,i.unit)?(x={unit:i.unit,statistics:null,valueExpression:null},[3,4]):[3,2];case 2:return[4,c({view:s,layer:b,startTime:l,endTime:o})];case 3:x=r.sent(),r.label=4;case 4:return[4,g.apply(S,[[x,i.outlineOptimizationEnabled?y(v):null]])];case 5:return h=r.sent(),w=h[0],z=h[1],T=w.unit,E=w.statistics,V=f.getAgeExpressions({layer:b,startTime:l,endTime:o,unit:T}).valueExpression,k=d.substitute(t["ageInfo_"+T],{unit:T,startTime:p.formatDate(l,T,b),endTime:p.formatDate(o,T,b)}),[4,D(F({layer:b,basemap:i.basemap,valueExpression:V,symbolType:m,statistics:E,legendOptions:{title:k},sizeScheme:i.sizeScheme,view:i.view}))];case 6:return I=r.sent(),q={layer:b,valueExpression:V,defaultSymbolEnabled:n,symbolType:m},A=L(I,z,null,null,q),B=A.renderer.authoringInfo.visualVariables,B.forEach(function(e){return p.updateAgeRendererAuthoringInfoVV(e,l,o,T)}),[2,a({},A,{unit:T})]}})})}Object.defineProperty(i,"__esModule",{value:!0});var M="date",j=Math.pow(2,53)-1;i.createVisualVariables=D,i.createContinuousRenderer=U,i.createClassBreaksRenderer=R,i.createAgeRenderer=C});