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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

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
     * @param {boolean} [params.sizeOptimizationEnabled=false] - For point and polyline layers only. Indicates whether
     *   symbol sizes should vary based on view scale. When set, a valid {@link module:esri/views/MapView}
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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../..","../../../pointCloudRenderers","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../intl/substitute","./support/utils","../heuristics/ageUnit","../heuristics/outline","../heuristics/sizeRange","../statistics/support/ageUtils","../support/utils","../symbology/color","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/numberUtils","../../support/utils","../../visualVariables/ColorVariable"],function(e,r,i,o,a,t,n,l,s,u,c,d,m,p,y,f,h,b,v,g,w,T,S,E){function x(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u;return o(this,function(o){switch(o.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(r=i({},e),a=[0,2,1,3],t=b.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:return o.sent(),n=t.geometryType,"mesh"===n||!r.worldScale||r.view&&"3d"===r.view.type?[4,b.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression})]:[2,c.reject(m.createError("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))];case 2:if(l=o.sent(),u=m.verifyBasicFieldValidity(t,l,"color-visual-variable:invalid-parameters"))throw u;return[2,r]}})})}function z(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u;return o(this,function(o){switch(o.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=i({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,a=[0,2,1,3],t=b.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:if(o.sent(),n=t.geometryType,r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&r.sizeOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[4,b.getFieldsList({field:r.field,normalizationField:r.normalizationField,valueExpression:r.valueExpression})];case 2:if(l=o.sent(),u=m.verifyBasicFieldValidity(t,l,"color-continuous-renderer:invalid-parameters"))throw u;return[2,r]}})})}function V(e){return a(this,void 0,void 0,function(){var r,a,t,n,l,u,c;return o(this,function(o){switch(o.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new s("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(r=i({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.classificationMethod=r.classificationMethod||"equal-interval",r.normalizationType=b.getNormalizationType(r),a=[0,2,1,3],t=b.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(a).join(", "));if(!(n=null!=r.minValue&&null!=r.maxValue)&&(null!=r.minValue||null!=r.maxValue))throw new s("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,t.load()];case 1:if(o.sent(),l=t.geometryType,r.outlineOptimizationEnabled="polygon"===l&&r.outlineOptimizationEnabled,"mesh"===l)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==l)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return[4,b.getFieldsList({field:r.field,normalizationField:r.normalizationField})];case 2:if(u=o.sent(),c=m.verifyBasicFieldValidity(t,u,"color-class-breaks-renderer:invalid-parameters"))throw c;return[2,r]}})})}function I(e){var r=i({},e);delete r.basemap,delete r.colorScheme,delete r.legendOptions,delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var o=r;return o.analyzeData=!(null!=r.minValue&&null!=r.maxValue),o}function M(e){if(!e||!e.layer)return c.reject(m.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var r=i({},e),o=[4],a=b.createLayerAdapter(r.layer,o);return r.layer=a,r.density=r.density||25,r.size=r.size||"100%",m.isValidPointSize(r.size)?a?a.load().then(function(){return r}):c.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(o).join(", "))):c.reject(m.createError("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function O(e){if(!(e&&e.layer&&e.field))return c.reject(m.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));var r=e.field.toLowerCase();if("intensity"!==r&&"elevation"!==r)return c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var o=i({},e),a=[4],t=b.createLayerAdapter(o.layer,a);return o.layer=t,o.density=o.density||25,o.size=o.size||"100%",m.isValidPointSize(o.size)?t?t.load().then(function(){return o}):c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(a).join(", "))):c.reject(m.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"))}function C(e){var r=i({},e),o=r.symbolType.indexOf("3d-volumetric")>-1;delete r.symbolType,delete r.defaultSymbolEnabled,delete r.colorMixMode,delete r.edgesType;var a=r;return a.worldScale=o,a}function F(e){return a(this,void 0,void 0,function(){var r,a,t,n,l;return o(this,function(o){switch(o.label){case 0:if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new s("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");if(r=i({},e),r.symbolType=r.symbolType||"2d",r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,a=[0,2,1,3],t=b.createLayerAdapter(r.layer,a),r.layer=t,!t)throw new s("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(a).join(", "));return[4,t.load()];case 1:if(o.sent(),n=t.geometryType,r.outlineOptimizationEnabled="polygon"===n&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=("point"===n||"multipoint"===n||"polyline"===n)&&r.sizeOptimizationEnabled,"mesh"===n)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else if("3d-volumetric-uniform"===r.symbolType&&"point"!==n)throw new s("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new s("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(l=h.verifyDates(t,r.startTime,r.endTime,"color-age-renderer:invalid-parameters"))throw l;if(r.unit&&-1===h.supportedAgeUnits.indexOf(r.unit))throw new s("color-age-renderer:invalid-unit","Supported units are: "+h.supportedAgeUnits.join(", "));return[2,r]}})})}function L(e,r){return a(this,void 0,void 0,function(){var i,a,t,n,l,s,c;return o(this,function(o){switch(o.label){case 0:return i=e.colorScheme,a=null,t=null,[4,m.getBasemapInfo(e.basemap,e.view)];case 1:return n=o.sent(),(a=u.isSome(n.basemapId)?n.basemapId:null,t=u.isSome(n.basemapTheme)?n.basemapTheme:null,i)?[2,{scheme:v.cloneScheme(i),basemapId:a,basemapTheme:t}]:(l=r||e.theme||N,s=v.getSchemes({theme:l,basemap:a,basemapTheme:t,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view}),s&&(a=s.basemapId,t=s.basemapTheme,e.schemeId?(c=l+"/"+a+"/"+e.schemeId,i=v.getSchemeById({id:c,geometryType:e.geometryType})):i=s.primaryScheme),[2,{scheme:i,basemapId:a,basemapTheme:t}])}})})}function q(e,r,i){for(var o=(r-e)/(i-1),a=[e],t=1;t<=i-2;t++)a.push(e+t*o);return a.push(r),T.round(a,{strictBounds:!0})}function k(e,r){return a(this,void 0,void 0,function(){var i,a,t,n,l,s,u;return o(this,function(o){switch(o.label){case 0:return i=r.layer,[4,L({basemap:r.basemap,colorScheme:r.colorScheme,geometryType:i.geometryType,schemeId:"elevation"===r.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"})];case 1:if(a=o.sent(),!(t=a.scheme))throw m.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");if(n=m.createColors(t.colors,K),n.length<K)throw m.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");return l=m.getDefaultDataRange(e,!1,!0),s=l?q(l[0],l[1],5):m.createStopValues(e),u=S.createColorStops({values:s,isDate:!1,dateFormatOptions:null,colors:n,labelIndexes:[0,2,4]}),[2,{stops:u,basemapId:a.basemapId,basemapTheme:a.basemapTheme,statistics:e,defaultValuesUsed:!!l,colorScheme:v.cloneScheme(t)}]}})})}function B(e,r,i){return a(this,void 0,void 0,function(){var a,t,n,l,s,u,c,d,p,y,f,h,b,T,S;return o(this,function(o){switch(o.label){case 0:return a=i.layer,t=i.field,n="function"==typeof t,l=t&&!n?a.getField(t):null,s=l&&l.type===W,[4,L({basemap:i.basemap,theme:i.theme,geometryType:a.geometryType,colorScheme:i.colorScheme,worldScale:i.worldScale,view:i.view})];case 1:if(u=o.sent(),!(c=u.scheme))throw m.createError("color-visual-variable:insufficient-info","Unable to find color scheme");if(d=m.createColors(c.colors,K),d.length<K)throw m.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors");return p=m.getDefaultDataRange(e,s,!0),y=c.id.indexOf("seq-")>-1,f=p?q(p[0],p[1],5):m.createStopValues(e,y),h=m.createColors(d,K),b=new E({field:t,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle,normalizationField:r,stops:f.map(function(e,r){return{value:e,color:h[r]}}),legendOptions:i.legendOptions}),T=new w({type:"color",minSliderValue:null!=i.minValue?i.minValue:e.min,maxSliderValue:null!=i.maxValue?i.maxValue:e.max,theme:c.theme}),S=new g({visualVariables:[T]}),[2,{basemapId:u.basemapId,basemapTheme:u.basemapTheme,visualVariable:b,statistics:e,defaultValuesUsed:!!p,colorScheme:v.cloneScheme(c),authoringInfo:S}]}})})}function A(e,r,i,o,a,l){var s=l.layer,u=l.field,c=s.geometryType,d=l.defaultSymbolEnabled,p=v.cloneScheme(e.colorScheme),y=r&&r.opacity,f=[e.visualVariable.clone()];return r&&r.visualVariables&&r.visualVariables.length&&f.push.apply(f,r.visualVariables.map(function(e){return e.clone()})),i&&i.minSize&&f.push(i.minSize),{renderer:new n.ClassBreaksRenderer({classBreakInfos:[{minValue:-J,maxValue:J,symbol:m.createSymbol(c,{type:l.symbolType,color:p.noDataColor,size:m.getSymbolSizeFromScheme(p,c),outline:m.getSymbolOutlineFromScheme(p,c,y),meshInfo:{colorMixMode:l.colorMixMode,edgesType:l.edgesType}})}],defaultLabel:d?t.other:null,defaultSymbol:d?m.createSymbol(c,{type:l.symbolType,color:p.noDataColor,size:m.getSymbolSizeFromScheme(p,c),outline:m.getSymbolOutlineFromScheme(p,c,y),meshInfo:{colorMixMode:l.colorMixMode,edgesType:l.edgesType}}):null,field:u,normalizationType:o,normalizationField:a,valueExpression:l.valueExpression,valueExpressionTitle:l.valueExpressionTitle,visualVariables:f,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariable:e.visualVariable.clone(),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,colorScheme:v.cloneScheme(e.colorScheme),basemapId:e.basemapId,basemapTheme:e.basemapTheme}}function R(e){return a(this,void 0,void 0,function(){var r,i,a,t,n;return o(this,function(o){switch(o.label){case 0:return[4,x(e)];case 1:return r=o.sent(),(i=r.normalizationField,a=i?"field":void 0,r.statistics)?(n=r.statistics,[3,4]):[3,2];case 2:return[4,m.getSummaryStatistics({layer:r.layer,field:r.field,valueExpression:r.valueExpression,sqlExpression:r.sqlExpression,sqlWhere:r.sqlWhere,normalizationType:a,normalizationField:i,minValue:r.minValue,maxValue:r.maxValue,view:r.view})];case 3:n=o.sent(),o.label=4;case 4:return t=n,[2,B(t,i,r)]}})})}function j(e,r){var i,o=e.colorsForClassBreaks;if(o&&o.length>0&&(o.some(function(e){return e.numClasses===r&&(i=e.colors),!!i}),!i)){var a=o[o.length-1],t=r-a.numClasses;if(t>0){var n=a.colors[a.numClasses-1];i=a.colors.splice(0);for(var l=1;l<=t;l++)i.push(n)}}return i&&(i=m.createColors(i,i.length)),i}function U(e,r){return a(this,void 0,void 0,function(){var i,a,l,u,c,d,p,y,f,h,b,w,T,E;return o(this,function(o){switch(o.label){case 0:return i=e.layer,a=e.defaultSymbolEnabled,l=i.geometryType,[4,L({basemap:e.basemap,geometryType:l,colorScheme:e.colorScheme,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view})];case 1:if(u=o.sent(),c=u.scheme,d=r.result,p=r.outlineResult,y=d.classBreakInfos,f=e.classificationMethod,h="standard-deviation"===f,b=e.normalizationType,!c)throw new s("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");if(!(w=j(c,y.length))||w.length!==y.length)throw new s("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");return T=p&&p.opacity,E=new n.ClassBreaksRenderer({classBreakInfos:y.map(function(r,i){return{minValue:r.minValue,maxValue:r.maxValue,symbol:m.createSymbol(l,{type:e.symbolType,color:w[i],size:m.getSymbolSizeFromScheme(c,l),outline:m.getSymbolOutlineFromScheme(c,l,T),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}),label:r.label}}),defaultLabel:a?t.other:null,defaultSymbol:a?m.createSymbol(l,{type:e.symbolType,color:c.noDataColor,size:m.getSymbolSizeFromScheme(c,l),outline:m.getSymbolOutlineFromScheme(c,l,T),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:b,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===b?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new g({type:"class-breaks-color",classificationMethod:f,standardDeviationInterval:e.standardDeviationInterval})}),h||S.setLabelsForClassBreaks({classBreakInfos:E.classBreakInfos,classificationMethod:f,normalizationType:b,round:!0}),p&&p.visualVariables&&p.visualVariables.length&&(E.visualVariables=p.visualVariables.map(function(e){return e.clone()})),[2,{renderer:E,colorScheme:v.cloneScheme(c),classBreaksResult:d,defaultValuesUsed:r.defaultValuesUsed,basemapId:u.basemapId,basemapTheme:u.basemapTheme}]}})})}function D(e){return a(this,void 0,void 0,function(){var r,i,a,t,n,l,s,u,d;return o(this,function(o){switch(o.label){case 0:return[4,z(e)];case 1:return r=o.sent(),i=r.layer,a=r.view,[4,c.all([R(C(r)),r.outlineOptimizationEnabled?y({layer:i,view:a}):null,r.sizeOptimizationEnabled?f({layer:i,view:a}):null])];case 2:return t=o.sent(),n=t[0],l=t[1],s=t[2],u=r.normalizationField,d=u?"field":void 0,[2,A(n,l,s,d,u,r)]}})})}function P(e){return a(this,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:return[4,V(e)];case 1:return r=o.sent(),[4,m.getClassBreaks(I(r),r.outlineOptimizationEnabled)];case 2:return i=o.sent(),[2,U(r,i)]}})})}function H(e){return M(e).then(function(e){return{renderer:new l.PointCloudRGBRenderer({field:"RGB",pointsPerInch:e.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(e.size)})}})}function _(e){return a(this,void 0,void 0,function(){var r,i,a,t,n;return o(this,function(o){switch(o.label){case 0:return[4,O(e)];case 1:return r=o.sent(),r.statistics?(a=r.statistics,[3,4]):[3,2];case 2:return[4,m.getSummaryStatistics({layer:r.layer,field:r.field})];case 3:a=o.sent(),o.label=4;case 4:return i=a,[4,k(i,r)];case 5:return t=o.sent(),n=new l.PointCloudStretchRenderer({field:r.field,pointsPerInch:r.density,pointSizeAlgorithm:m.getPointSizeAlgorithm(r.size),stops:t.stops}),[2,{renderer:n,basemapId:t.basemapId,basemapTheme:t.basemapTheme,statistics:t.statistics,defaultValuesUsed:t.defaultValuesUsed,colorScheme:t.colorScheme}]}})})}function G(e){return a(this,void 0,void 0,function(){var r,a,n,l,s,u,b,v,g,w,T,S,E,x,z,V,I,M,O,L,q;return o(this,function(o){switch(o.label){case 0:return[4,F(e)];case 1:return r=o.sent(),a=r.defaultSymbolEnabled,n=r.view,l=r.startTime,s=r.endTime,u=r.symbolType,b=r.colorMixMode,v=r.edgesType,g=r.layer,[4,c.all([r.unit?{unit:r.unit,statistics:null}:p({view:n,layer:g,startTime:l,endTime:s}),r.outlineOptimizationEnabled?y({layer:g,view:n}):null,r.sizeOptimizationEnabled?f({layer:g,view:n}):null])];case 2:return w=o.sent(),T=w[0],S=w[1],E=w[2],x=T.unit,z=T.statistics,V=h.getAgeExpressions({layer:g,startTime:l,endTime:s,unit:x}).valueExpression,I=d.substitute(t["ageInfo_"+x],{unit:x,startTime:m.formatDate(l,x,g),endTime:m.formatDate(s,x,g)}),[4,R(C({layer:g,basemap:r.basemap,valueExpression:V,symbolType:u,statistics:z,legendOptions:{title:I},colorScheme:r.colorScheme,theme:r.theme,view:n}))];case 3:return M=o.sent(),O={layer:g,valueExpression:V,defaultSymbolEnabled:a,symbolType:u,colorMixMode:b,edgesType:v},L=A(M,S,E,null,null,O),q=L.renderer.authoringInfo.visualVariables,q.forEach(function(e){return m.updateAgeRendererAuthoringInfoVV(e,l,s,x)}),[2,i({},L,{unit:x})]}})})}Object.defineProperty(r,"__esModule",{value:!0});var W="date",N="high-to-low",J=Math.pow(2,53)-1,K=5;r.createVisualVariable=R,r.createContinuousRenderer=D,r.createClassBreaksRenderer=P,r.createPCTrueColorRenderer=H,r.createPCContinuousRenderer=_,r.createAgeRenderer=G});