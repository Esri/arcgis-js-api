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
     * @param {module:esri/views/View} params.view - The view where the input layer is rendered. This method
     *   inspects the view's background (i.e. basemap, web map background, or view container) to determine optimal
     *   colors for the output renderer.
     * @param {string|module:esri/Basemap} [params.basemap=gray] - The {@link module:esri/Map#basemap named string} or
     *   basemap object of the Esri basemap that will be paired with the output visualization. Determines optimal
     *   colors for the output renderer.
     * @param {Date | string | number} params.startTime - The name of the field, or a date value representing the start time in the
     *   age calculation. If a date value is specified, then the `endTime` parameter must reference a Date field in the layer.
     * @param {Date | string | number} params.endTime - The name of the field, or a date value representing the end time in the
     *   age calculation. If a date value is specified, then the `startTime` parameter must reference a Date field in the layer.
     * @param {string} [params.unit] - The time unit used to calculate the difference between `endTime` and `startTime`. If a unit
     *   is not specified, then a suggested unit is determined based on the spread and distribution of the data.
     *
     *   **Possible Values:** years | months | days | hours | minutes | seconds
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
     * @deprecatedParameters {"params.basemap": "since version 4.13. Use `view` instead."}
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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../..","../../../pointCloudRenderers","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../intl/substitute","./support/utils","../heuristics/ageUnit","../heuristics/outline","../statistics/support/ageUtils","../support/utils","../symbology/color","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/numberUtils","../../support/utils","../../visualVariables/ColorVariable"],function(e,r,o,i,a,t,n,l,s,u,c,d,m,p,y,f,h,b,v,g,w,T,S){function x(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(r=o({},e),a=[0,2,1,3],t=h.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:return i.sent(),n=t.geometryType,"mesh"===n||!r.worldScale||r.view&&"3d"===r.view.type?[4,h.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression})]:[2,c.reject(m.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))];case 2:if(l=i.sent(),u=m.verifyBasicFieldValidity(t,l,"color-visual-variable:invalid-parameters"))throw u;return[2,r]}})})}function E(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,a=[0,2,1,3],t=h.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:if(i.sent(),n=t.geometryType,r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[4,h.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression})];case 2:if(l=i.sent(),u=m.verifyBasicFieldValidity(t,l,"color-continuous-renderer:invalid-parameters"))throw u;return[2,r]}})})}function V(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u,c;return i(this,function(i){switch(i.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new s("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=h.getNormalizationType(r),a=[0,2,1,3],t=h.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", "));if(!(n=null!=r.minValue&&null!=r.maxValue)&&(null!=r.minValue||null!=r.maxValue))throw new s("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,t.load()];case 1:if(i.sent(),l=t.geometryType,r.outlineOptimizationEnabled="polygon"===l&&r.outlineOptimizationEnabled,"mesh"===l)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==l)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[4,h.getFieldsList({field:r.field,normalizationField:r.normalizationField})];case 2:if(u=i.sent(),c=m.verifyBasicFieldValidity(t,u,"color-class-breaks-renderer:invalid-parameters"))throw c;return[2,r]}})})}function z(e){var r=o({},e);delete r.basemap,delete r.colorScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var i=r;return i.analyzeData=!(null!=r.minValue&&null!=r.maxValue),i}function I(e){if(!e||!e.layer)return c.reject(m.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var r=o({},e),i=[4],a=h.createLayerAdapter(r.layer,i);return r.layer=a,r.density=r.density||25,r.size=r.size||"100%",m.isValidPointSize(r.size)?a?a.load().then(function(){return r}):c.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(i).join(", "))):c.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function M(e){if(!(e&&e.layer&&e.field))return c.reject(m.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var r=e.field.toLowerCase();if("intensity"!==r&&"elevation"!==r)return c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var i=o({},e),a=[4],t=h.createLayerAdapter(i.layer,a);return i.layer=t,i.density=i.density||25,i.size=i.size||"100%",m.isValidPointSize(i.size)?t?t.load().then(function(){return i}):c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", "))):c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function C(e){var r=o({},e),i=r.symbolType.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var a=r;return a.worldScale=i,a}function F(e){return a(this,void 0,void 0,function(){var r,a,t,n,l;return i(this,function(i){switch(i.label){case 0:if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new s("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");if(r=o({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,a=[0,2,1,3],t=h.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:if(i.sent(),n=t.geometryType,r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(l=f.verifyDates(t,r.startTime,r.endTime,"color-age-renderer:invalid-parameters"))throw l;if(r.unit&&-1===f.supportedAgeUnits.indexOf(r.unit))throw new s("color-age-renderer:invalid-unit","Supported units are: "+f.supportedAgeUnits.join(", "));return[2,r]}})})}function O(e,r){return a(this,void 0,void 0,function(){var o,a,t,n,l,s,c;return i(this,function(i){switch(i.label){case 0:return o=e.colorScheme,a=null,t=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return n=i.sent(),(a=u.isSome(n.basemapId)?n.basemapId:null,t=u.isSome(n.basemapTheme)?n.basemapTheme:null,o)?[2,{scheme:b.cloneScheme(o),basemapId:a,basemapTheme:t}]:(l=r||e.theme||W,s=b.getSchemes({theme:l,basemap:a,basemapTheme:t,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view}),s&&(a=s.basemapId,t=s.basemapTheme,e.schemeId?(c=l+"/"+a+"/"+e.schemeId,o=b.getSchemeById({id:c,geometryType:e.geometryType})):o=s.primaryScheme),[2,{scheme:o,basemapId:a,basemapTheme:t}])}})})}function L(e,r,o){for(var i=(r-e)/(o-1),a=[e],t=1;t<=o-2;t++)a.push(e+t*i);return a.push(r),w.round(a,{strictBounds:!0})}function q(e,r){return a(this,void 0,void 0,function(){var o,a,t,n,l,s,u;return i(this,function(i){switch(i.label){case 0:return o=r.layer,[4,O({basemap:r.basemap,colorScheme:r.colorScheme,geometryType:o.geometryType,schemeId:"elevation"===r.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"})];case 1:return a=i.sent(),(t=a.scheme)?(n=m.createColors(t.colors,J),n.length<J?[2,c.reject(m.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors"))]:(l=m.getDefaultDataRange(e,!1,!0),s=l?L(l[0],l[1],5):m.createStopValues(e),u=T.createColorStops({values:s,isDate:!1,dateFormatOptions:null,colors:n,labelIndexes:[0,2,4]}),[2,{stops:u,basemapId:a.basemapId,basemapTheme:a.basemapTheme,statistics:e,defaultValuesUsed:!!l,colorScheme:b.cloneScheme(t)}])):[2,c.reject(m.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme"))]}})})}function j(e,r,o){return a(this,void 0,void 0,function(){var a,t,n,l,s,u,d,p,y,f,h,w,T,x,E;return i(this,function(i){switch(i.label){case 0:return a=o.layer,t=o.field,n="function"==typeof t,l=t&&!n?a.getField(t):null,s=l&&l.type===G,[4,O({basemap:o.basemap,theme:o.theme,geometryType:a.geometryType,colorScheme:o.colorScheme,worldScale:o.worldScale,view:o.view})];case 1:return u=i.sent(),(d=u.scheme)?(p=m.createColors(d.colors,J),p.length<J?[2,c.reject(m.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors"))]:(y=m.getDefaultDataRange(e,s,!0),f=d.id.indexOf("seq-")>-1,h=y?L(y[0],y[1],5):m.createStopValues(e,f),w=m.createColors(p,J),T=new S({field:t,valueExpression:o.valueExpression,valueExpressionTitle:o.valueExpressionTitle,normalizationField:r,stops:h.map(function(e,r){return{value:e,color:w[r]}}),legendOptions:o.legendOptions}),x=new g({type:"color",minSliderValue:e.min,maxSliderValue:e.max,theme:d.theme}),E=new v({visualVariables:[x]}),[2,{basemapId:u.basemapId,basemapTheme:u.basemapTheme,visualVariable:T,statistics:e,defaultValuesUsed:!!y,colorScheme:b.cloneScheme(d),authoringInfo:E}])):[2,c.reject(m.createError("color-visual-variable:insufficient-info","Unable to find color scheme"))]}})})}function k(e,r,o,i,a){var l=a.layer,s=a.field,u=l.geometryType,c=a.defaultSymbolEnabled,d=b.cloneScheme(e.colorScheme),p=r&&r.opacity,y=[e.visualVariable.clone()];return r&&r.visualVariables&&r.visualVariables.length&&y.push.apply(y,r.visualVariables.map(function(e){return e.clone()})),{renderer:new n.ClassBreaksRenderer({classBreakInfos:[{minValue:-N,maxValue:N,symbol:m.createSymbol(u,{type:a.symbolType,color:d.noDataColor,size:m.getSymbolSizeFromScheme(d,u),outline:m.getSymbolOutlineFromScheme(d,u,p),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}})}],defaultLabel:c?t.other:null,defaultSymbol:c?m.createSymbol(u,{type:a.symbolType,color:d.noDataColor,size:m.getSymbolSizeFromScheme(d,u),outline:m.getSymbolOutlineFromScheme(d,u,p),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}):null,field:s,normalizationType:o,normalizationField:i,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,visualVariables:y,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:b.cloneScheme(e.colorScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}function B(e){return a(this,void 0,void 0,function(){var r,o,a,t,n;return i(this,function(i){switch(i.label){case 0:return[4,x(e)];case 1:return r=i.sent(),(o=r.normalizationField,a=o?"field":void 0,r.statistics)?(n=r.statistics,[3,4]):[3,2];case 2:return[4,m.getSummaryStatistics({layer:r.layer,field:r.field,valueExpression:r.valueExpression,sqlExpression:r.sqlExpression,sqlWhere:r.sqlWhere,normalizationType:a,normalizationField:o,minValue:r.minValue,maxValue:r.maxValue,view:r.view})];case 3:n=i.sent(),i.label=4;case 4:return t=n,[2,j(t,o,r)]}})})}function A(e,r){var o,i=e.colorsForClassBreaks;if(i&&i.length>0&&(i.some(function(e){return e.numClasses===r&&(o=e.colors),!!o}),!o)){var a=i[i.length-1],t=r-a.numClasses;if(t>0){var n=a.colors[a.numClasses-1];o=a.colors.splice(0);for(var l=1;l<=t;l++)o.push(n)}}return o&&(o=m.createColors(o,o.length)),o}function R(e,r){return a(this,void 0,void 0,function(){var o,a,l,u,c,d,p,y,f,h,g,w,S,x;return i(this,function(i){switch(i.label){case 0:return o=e.layer,a=e.defaultSymbolEnabled,l=o.geometryType,[4,O({basemap:e.basemap,geometryType:l,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view})];case 1:if(u=i.sent(),c=u.scheme,d=r.result,p=r.outlineResult,y=d.classBreakInfos,f=e.classificationMethod,h="standard-deviation"===f,g=e.normalizationType,!c)throw new s("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");if(!(w=A(c,y.length))||w.length!==y.length)throw new s("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");return S=p&&p.opacity,x=new n.ClassBreaksRenderer({classBreakInfos:y.map(function(r,o){return{minValue:r.minValue,maxValue:r.maxValue,symbol:m.createSymbol(l,{type:e.symbolType,color:w[o],size:m.getSymbolSizeFromScheme(c,l),outline:m.getSymbolOutlineFromScheme(c,l,S),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:r.label}}),defaultLabel:a?t.other:null,defaultSymbol:a?m.createSymbol(l,{type:e.symbolType,color:c.noDataColor,size:m.getSymbolSizeFromScheme(c,l),outline:m.getSymbolOutlineFromScheme(c,l,S),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:g,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===g?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new v({type:"class-breaks-color",classificationMethod:f,standardDeviationInterval:e.standardDeviationInterval})}),h||T.setLabelsForClassBreaks({classBreakInfos:x.classBreakInfos,classificationMethod:f,normalizationType:g,round:!0}),p&&p.visualVariables&&p.visualVariables.length&&(x.visualVariables=p.visualVariables.map(function(e){return e.clone()})),[2,{renderer:x,colorScheme:b.cloneScheme(c),classBreaksResult:d,defaultValuesUsed:r.defaultValuesUsed,basemapId:u.basemapId,basemapTheme:u.basemapTheme}]}})})}function U(e){return a(this,void 0,void 0,function(){var r,o,a,t,n,l,s;return i(this,function(i){switch(i.label){case 0:return[4,E(e)];case 1:return r=i.sent(),o={layer:r.layer,view:r.view},[4,c.all([B(C(r)),r.outlineOptimizationEnabled?y(o):null])];case 2:return a=i.sent(),t=a[0],n=a[1],l=r.normalizationField,s=l?"field":void 0,[2,k(t,n,s,l,r)]}})})}function D(e){return a(this,void 0,void 0,function(){var r,o;return i(this,function(i){switch(i.label){case 0:return[4,V(e)];case 1:return r=i.sent(),[4,m.getClassBreaks(z(r),r.outlineOptimizationEnabled)];case 2:return o=i.sent(),[2,R(r,o)]}})})}function P(e){return I(e).then(function(e){return{renderer:new l.PointCloudRGBRenderer({field:"RGB",pointsPerInch:e.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(e.size)})}})}function H(e){return a(this,void 0,void 0,function(){var r,o,a,t,n;return i(this,function(i){switch(i.label){case 0:return[4,M(e)];case 1:return r=i.sent(),r.statistics?(a=r.statistics,[3,4]):[3,2];case 2:return[4,m.getSummaryStatistics({layer:r.layer,field:r.field})];case 3:a=i.sent(),i.label=4;case 4:return o=a,[4,q(o,r)];case 5:return t=i.sent(),n=new l.PointCloudStretchRenderer({field:r.field,pointsPerInch:r.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(r.size),stops:t.stops}),[2,{renderer:n,basemapId:t.basemapId,basemapTheme:t.basemapTheme,statistics:t.statistics,defaultValuesUsed:t.defaultValuesUsed,colorScheme:t.colorScheme}]}})})}function _(e){return a(this,void 0,void 0,function(){var r,a,n,l,s,u,h,b,v,g,w,T,S,x,E,V,z,I,M,O,L;return i(this,function(i){switch(i.label){case 0:return[4,F(e)];case 1:return r=i.sent(),a=r.defaultSymbolEnabled,n=r.view,l=r.startTime,s=r.endTime,u=r.symbolType,h=r.colorMixMode,b=r.edgesType,v=r.layer,g={layer:r.layer,view:r.view},[4,c.all([r.unit?{unit:r.unit,statistics:null}:p({view:n,layer:v,startTime:l,endTime:s}),r.outlineOptimizationEnabled?y(g):null])];case 2:return w=i.sent(),T=w[0],S=w[1],x=T.unit,E=T.statistics,V=f.getAgeExpressions({layer:v,startTime:l,endTime:s,unit:x}).valueExpression,z=d.substitute(t["ageInfo_"+x],{unit:x,startTime:m.formatDate(l,x,v),endTime:m.formatDate(s,x,v)}),[4,B(C({layer:v,basemap:r.basemap,valueExpression:V,symbolType:u,statistics:E,legendOptions:{title:z},colorScheme:r.colorScheme,theme:r.theme,view:n}))];case 3:return I=i.sent(),M={layer:v,valueExpression:V,defaultSymbolEnabled:a,symbolType:u,colorMixMode:h,edgesType:b},O=k(I,S,null,null,M),L=O.renderer.authoringInfo.visualVariables,L.forEach(function(e){return m.updateAgeRendererAuthoringInfoVV(e,l,s,x)}),[2,o({},O,{unit:x})]}})})}Object.defineProperty(r,"__esModule",{value:!0});var G="date",W="high-to-low",N=Math.pow(2,53)-1,J=5;r.createVisualVariable=B,r.createContinuousRenderer=U,r.createClassBreaksRenderer=D,r.createPCTrueColorRenderer=P,r.createPCContinuousRenderer=H,r.createAgeRenderer=_});