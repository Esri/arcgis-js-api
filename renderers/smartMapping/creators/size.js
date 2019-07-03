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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","dojo/i18n!../../nls/smartMapping","../..","../../../core/Error","../../../core/promiseUtils","../../../core/screenUtils","../../../intl/substitute","./support/ageUtils","./support/utils","../heuristics/outline","../heuristics/sizeRange","../support/utils","../symbology/size","../../support/AuthoringInfo","../../support/AuthoringInfoVisualVariable","../../support/utils","../../visualVariables/SizeVariable"],function(e,i,a,r,n,l,t,s,o,u,m,d,p,y,c,b,v,f,h,w,z){function S(e){return n(this,void 0,void 0,function(){var i,n,l,t,o,u;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),n=[0,2,1,3],l=b.createLayerAdapter(i.layer,n),i.layer=l,!l)throw new s("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(n).join(", "));return"height"===i.axis&&(i.sizeOptimizationEnabled=!1),[4,l.load()];case 1:if(r.sent(),"mesh"===(t=l.geometryType))throw new s("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(i.worldScale){if("polyline"===t||"polygon"===t)throw new s("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers");if(!i.view||"3d"!==i.view.type)throw new s("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true")}if(o=b.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),u=p.verifyBasicFieldValidity(l,o,"size-visual-variable:invalid-parameters"))throw u;return[2,i]}})})}function g(e){return n(this,void 0,void 0,function(){var i,n,l,t,o,u,m;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))throw new s("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(e.valueExpression&&!e.sqlExpression&&!e.view)throw new s("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,n=[0,2,1,3],l=b.createLayerAdapter(i.layer,n),i.layer=l,!l)throw new s("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(n).join(", "));return[4,l.load()];case 1:if(r.sent(),t=l.geometryType,o=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===t&&i.outlineOptimizationEnabled,"mesh"===t)throw new s("size-continuous-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(o&&("polyline"===t||"polygon"===t))throw new s("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new s("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(u=b.getFieldsList({field:i.field,normalizationField:i.normalizationField,valueExpression:i.valueExpression}),m=p.verifyBasicFieldValidity(l,u,"size-continuous-renderer:invalid-parameters"))throw m;return[2,i]}})})}function x(e){return n(this,void 0,void 0,function(){var i,n,l,t,o,u,m,d;return r(this,function(r){switch(r.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new s("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,i.classificationMethod=i.classificationMethod||"equal-interval",i.normalizationType=b.getNormalizationType(i),n=[0,2,1,3],l=b.createLayerAdapter(i.layer,n),i.layer=l,!l)throw new s("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(n).join(", "));if(!(t=null!=i.minValue&&null!=i.maxValue)&&(null!=i.minValue||null!=i.maxValue))throw new s("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,l.load()];case 1:if(r.sent(),o=l.geometryType,u=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===o&&i.outlineOptimizationEnabled,"mesh"===o)throw new s("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(u&&("polyline"===o||"polygon"===o))throw new s("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new s("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(m=b.getFieldsList({field:i.field,normalizationField:i.normalizationField}),d=p.verifyBasicFieldValidity(l,m,"size-class-breaks-renderer:invalid-parameters"))throw d;return[2,i]}})})}function T(e){var i=a({},e);delete i.basemap,delete i.sizeScheme,delete i.legendOptions,delete i.symbolType,delete i.defaultSymbolEnabled;var r=i;return r.analyzeData=!(null!=i.minValue&&null!=i.maxValue),r}function E(e){var i=a({},e),r=i.symbolType.indexOf("3d-volumetric")>-1,n=i;return n.worldScale=r,r&&(n.axis="3d-volumetric-uniform"===i.symbolType?"all":"height"),delete i.symbolType,delete i.defaultSymbolEnabled,n}function V(e){return n(this,void 0,void 0,function(){var i,n,l,t,o,u;return r(this,function(r){switch(r.label){case 0:if(!(e&&e.layer&&e.view&&e.startTime&&e.endTime))throw new s("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");if(i=a({},e),i.symbolType=i.symbolType||"2d",i.defaultSymbolEnabled=null==i.defaultSymbolEnabled||i.defaultSymbolEnabled,n=[0,2,1,3],l=b.createLayerAdapter(i.layer,n),i.layer=l,!l)throw new s("size-age-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(n).join(", "));return[4,l.load()];case 1:if(r.sent(),t=l.geometryType,o=i.symbolType.indexOf("3d")>-1,i.outlineOptimizationEnabled="polygon"===t&&i.outlineOptimizationEnabled,"mesh"===t)throw new s("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(o&&("polyline"===t||"polygon"===t))throw new s("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(i.symbolType.indexOf("3d-volumetric")>-1&&(!i.view||"3d"!==i.view.type))throw new s("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(u=d.verifyDates(l,i.startTime,i.endTime,"size-age-renderer:invalid-parameters"))throw u;if(i.unit&&-1===d.supportedAgeUnits.indexOf(i.unit))throw new s("size-age-renderer:invalid-unit","Supported units are: "+d.supportedAgeUnits.join(", "));return[2,i]}})})}function F(e){var i=e.sizeScheme,a=e.basemap;if(i)i=v.cloneScheme(i);else{var r=v.getSchemes({basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view});i=r&&r.primaryScheme,a=r&&r.basemapId}return{scheme:i,basemapId:a}}function O(e,i){var a;switch(i){case"point":case"multipoint":var r=e;a=[r.minSize,r.maxSize];break;case"polyline":var n=e;a=[n.minWidth,n.maxWidth];break;case"polygon":var l=e;a=[l.marker.minSize,l.marker.maxSize]}return a}function k(e,i,a,l){return n(this,void 0,void 0,function(){var n,t,o,u,m,d,y,c,b,w,S,g,x,T,E,V,k,I,q,L;return r(this,function(r){if(n=l.layer,t=l.field,o="function"==typeof t,u=t&&!o?n.getField(t):null,m=u&&u.type===R,d=n.geometryType,y=F({basemap:l.basemap,geometryType:d,sizeScheme:l.sizeScheme,worldScale:l.worldScale,view:l.view}),c=y.scheme,!c)throw new s("size-visual-variable:insufficient-info","Unable to find size scheme");return b=i&&[i.minSize,i.maxSize],w=b||O(c,d),S=p.getDefaultDataRange(e,m,!1),g=S||[e.min,e.max],x=[],T="height"===l.axis,E=T?l.axis:void 0,V=w[0],k=w[1],T&&"number"==typeof V&&"number"==typeof k&&(I=p.getSizeRangeForAxis({minSize:V,maxSize:k},E),x.push(new z({axis:"width-and-depth",minSize:I.minSize})),k=I.maxSize),x.unshift(new z({field:t,valueExpression:l.valueExpression,valueExpressionTitle:l.valueExpressionTitle,valueUnit:"unknown",normalizationField:a,axis:E,minSize:V,maxSize:k,minDataValue:g[0],maxDataValue:g[1],legendOptions:l.legendOptions})),q=new h({type:"size",minSliderValue:e.min,maxSliderValue:e.max}),L=new f({visualVariables:[q]}),[2,{basemapId:y.basemapId,visualVariables:x,statistics:e,defaultValuesUsed:!!S,sizeScheme:v.cloneScheme(c),authoringInfo:L}]})})}function I(e,i,a,r,n){var s=n.layer,o=n.field,u=s.geometryType,m=n.defaultSymbolEnabled,d=v.cloneScheme(e.sizeScheme),y="polygon"===u,c=y?d.marker:d,b=y?d.background:null,f=y?"point":u,h=i&&i.opacity,w=e.visualVariables.map(function(e){return e.clone()});return i&&i.visualVariables&&i.visualVariables.length&&w.push.apply(w,i.visualVariables.map(function(e){return e.clone()})),{renderer:new t.ClassBreaksRenderer({backgroundFillSymbol:b&&p.createSymbol(u,{type:n.symbolType,color:b.color,outline:p.getSymbolOutlineFromScheme(b,u,h)}),classBreakInfos:[{minValue:-C,maxValue:C,symbol:p.createSymbol(f,{type:n.symbolType,color:c.color,size:p.getSymbolSizeFromScheme(c,f),outline:p.getSymbolOutlineFromScheme(c,f,h)})}],defaultLabel:m?l.other:null,defaultSymbol:m?p.createSymbol(f,{type:n.symbolType,color:c.noDataColor,size:p.getSymbolSizeFromScheme(c,f,!0),outline:p.getSymbolOutlineFromScheme(c,f,h)}):null,field:o,normalizationField:r,normalizationType:a,valueExpression:n.valueExpression,valueExpressionTitle:n.valueExpressionTitle,visualVariables:w,authoringInfo:e.authoringInfo&&e.authoringInfo.clone()}),visualVariables:e.visualVariables.map(function(e){return e.clone()}),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,sizeScheme:v.cloneScheme(e.sizeScheme),basemapId:e.basemapId}}function q(e,i){for(var a=u.toPt(e.minSize),r=u.toPt(e.maxSize),n=(r-a)/(i>=4?i-1:i),l=[],t=0;t<i;t++)l.push(a+n*t);return l}function L(e,i){var a=e.layer,r=e.defaultSymbolEnabled,n=a.geometryType,s="polygon"===n,o=e.symbolType.indexOf("3d-volumetric")>-1,u=F({basemap:e.basemap,geometryType:n,sizeScheme:e.sizeScheme,worldScale:o,view:e.view}),m=u.scheme,d=i.result,y=i.outlineResult,c=d.classBreakInfos,b=e.classificationMethod,h=e.normalizationType,z=s?m.marker:m,S=s?m.background:null,g=s?"point":n,x=O(z,g),T=o&&p.getSizeRangeForAxis({minSize:x[0],maxSize:x[1]},"height"),E=q({minSize:x[0],maxSize:o?T.maxSize:x[1]},c.length),V=y&&y.opacity,k=new t.ClassBreaksRenderer({backgroundFillSymbol:S&&p.createSymbol(n,{type:e.symbolType,color:S.color,outline:p.getSymbolOutlineFromScheme(S,n,V)}),classBreakInfos:c.map(function(i,a){return{minValue:i.minValue,maxValue:i.maxValue,symbol:p.createSymbol(g,{type:e.symbolType,color:z.color,size:E[a],widthAndDepth:T&&T.minSize,outline:p.getSymbolOutlineFromScheme(z,g,V)}),label:i.label}}),defaultLabel:r?l.other:null,defaultSymbol:r?p.createSymbol(g,{type:e.symbolType,color:z.noDataColor,size:p.getSymbolSizeFromScheme(z,g,!0),widthAndDepth:T&&T.minSize,outline:p.getSymbolOutlineFromScheme(z,g,V)}):null,field:e.field,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationType:h,normalizationField:e.normalizationField,normalizationTotal:"percent-of-total"===h?d.normalizationTotal:void 0,legendOptions:e.legendOptions,authoringInfo:new f({type:"class-breaks-size",classificationMethod:b,standardDeviationInterval:e.standardDeviationInterval})});return"standard-deviation"!==b&&w.setLabelsForClassBreaks({classBreakInfos:k.classBreakInfos,classificationMethod:b,normalizationType:h,round:!0}),y&&y.visualVariables&&y.visualVariables.length&&(k.visualVariables=y.visualVariables.map(function(e){return e.clone()})),{renderer:k,sizeScheme:v.cloneScheme(m),classBreaksResult:d,defaultValuesUsed:i.defaultValuesUsed,basemapId:u.basemapId}}function A(e){return n(this,void 0,void 0,function(){var i,a,n,l,t,s,u,m;return r(this,function(r){switch(r.label){case 0:return[4,S(e)];case 1:return i=r.sent(),a=i.view,n=i.layer,l=i.normalizationField,t=l?"field":void 0,[4,o.all([i.statistics?i.statistics:p.getSummaryStatistics({layer:n,field:i.field,valueExpression:i.valueExpression,sqlExpression:i.sqlExpression,sqlWhere:i.sqlWhere,normalizationType:t,normalizationField:l,minValue:i.minValue,maxValue:i.maxValue,view:a}),i.sizeOptimizationEnabled?c({view:a,layer:n}):null])];case 2:return s=r.sent(),u=s[0],m=s[1],[2,k(u,m,l,i)]}})})}function B(e){return n(this,void 0,void 0,function(){var i,a,n,l,t,s,u;return r(this,function(r){switch(r.label){case 0:return[4,g(e)];case 1:return i=r.sent(),a={layer:i.layer,view:i.view},[4,o.all([A(E(i)),i.outlineOptimizationEnabled?y(a):null])];case 2:return n=r.sent(),l=n[0],t=n[1],s=i.normalizationField,u=s?"field":void 0,[2,I(l,t,u,s,i)]}})})}function D(e){return n(this,void 0,void 0,function(){var i,a;return r(this,function(r){switch(r.label){case 0:return[4,x(e)];case 1:return i=r.sent(),[4,p.getClassBreaks(T(i),i.outlineOptimizationEnabled)];case 2:return a=r.sent(),[2,L(i,a)]}})})}function U(e){return n(this,void 0,void 0,function(){var i,n,t,s,u,p,c,b,v,f,h,w,z,S,g,x,T,F,O,k,q,L;return r(this,function(r){switch(r.label){case 0:return[4,V(e)];case 1:return i=r.sent(),(n=i.defaultSymbolEnabled,t=i.view,s=i.layer,u=i.startTime,p=i.endTime,c=i.symbolType,b={layer:i.layer,view:i.view},z=(w=o).all,i.unit)?(S={unit:i.unit,statistics:null,valueExpression:null},[3,4]):[3,2];case 2:return[4,d.getSuggestedAgeUnit({view:t,layer:s,startTime:u,endTime:p})];case 3:S=r.sent(),r.label=4;case 4:return[4,z.apply(w,[[S,i.outlineOptimizationEnabled?y(b):null]])];case 5:return v=r.sent(),f=v[0],h=v[1],g=f.unit,x=f.statistics,T=f.valueExpression,F=T||d.getAgeExpressions({layer:s,startTime:u,endTime:p,unit:g}).valueExpression,O=m.substitute(l["ageInfo_"+g],{unit:g,startTime:d.formatDate(u,g,s),endTime:d.formatDate(p,g,s)}),[4,A(E({layer:s,basemap:i.basemap,valueExpression:F,symbolType:c,statistics:x,legendOptions:{title:O},sizeScheme:i.sizeScheme,view:i.view}))];case 6:return k=r.sent(),q={layer:s,valueExpression:F,defaultSymbolEnabled:n,symbolType:c},L=I(k,h,null,null,q),[2,a({},L,{unit:g})]}})})}Object.defineProperty(i,"__esModule",{value:!0});var R="date",C=Math.pow(2,53)-1;i.createVisualVariables=A,i.createContinuousRenderer=B,i.createClassBreaksRenderer=D,i.createAgeRenderer=U});