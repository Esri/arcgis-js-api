// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel","../../Evented","../../graphic","../../lang","../../Color","../../graphicsUtils","../../dijit/PopupTemplate","../../dijit/Legend/utils","../../renderers/ClassBreaksRenderer","../../symbols/SimpleMarkerSymbol","../support/attributeUtils","../GraphicsLayer","../Field","./GeohashAggregation","./statUtils","dojo/i18n!../../nls/jsapi"],(function(e,t,i,r,n,s,a,l,o,u,h,c,p,d,_,f,g,m,v,y){var b=y.layers.clusters,S=y.widgets.popup,C=b.numFeatures,I="esriFieldTypeDate",F=Math.pow(2,53)-1,G=e(s,{declaredClass:"esri.layers.clustering.ClusterManager",layer:null,aggregationInfo:null,container:null,defaults:{clusterRadius:80,markerSymbol:{color:[77,77,77,255],size:6,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSCircle",outline:{color:[255,255,255,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}}},_initialized:!1,_map:null,_eventHandles:null,_clusterRadius:null,_renderer:null,_statisticInfos:null,_fields:null,_infoTemplate:null,_clusterGenerator:null,_singleGraphics:null,constructor:function(e){this._eventHandles=[],this.layer=e.layer,this.setAggregationInfo(e.aggregationInfo)},initialize:function(e){this._initialized=!0,this._map=e,this._removeFromPopup(this.layer),this.container=this._createContainer(),this._clusterGenerator=this._createClusterGenerator(),this._initClusterGenerator(),this._createLayerEventListeners(),this._createMapEventListeners(),this._createPopupEventListeners()},destroy:function(e){this._clearSingleGraphics(),this._removeClusterBoundary(),this._destroyEventListeners(),this._removeFromPopup(this.container),this._removeFromPopup(this.layer),this._resetClusterNav(),this._destroyClusterGenerator(e),this._destroyContainer(),this.layer=this.aggregationInfo=this._map=null},setAggregationInfo:function(e){this.aggregationInfo=e?t.mixin({},e):null,this._applyAggregationInfo()},getClusterRenderer:function(){return this._renderer},getClusterFields:function(){return this._fields||[]},getFeaturesInCluster:function(e){var t=e&&e.getAggregationInfo();return this._clusterGenerator?this._clusterGenerator.getFeaturesInCluster(t):[]},getAggregateGraphics:function(){return this.container?this.container.graphics.slice(0):[]},getSingleGraphics:function(){return this._singleGraphics?this._singleGraphics.slice(0):[]},redraw:function(){this.container&&this.container.redraw()},isClusteringEnabled:function(){return!(!this._clusterGenerator||!this._clusterGenerator.clustersEnabled)},isClusteringActive:function(){return!!(this._clusterGenerator&&this._clusterGenerator.getNumFeatures()>0)},toggleFeatureVisibility:function(e){this._clusterGenerator&&this._clusterGenerator.toggleFeatureVisibility(e)},_createContainer:function(){var e=this.layer,t=new f._GraphicsLayer({_child:!0,id:e.id+"_clusters",visible:e.visible,minScale:e.minScale,maxScale:e.maxScale,infoTemplate:this._infoTemplate});return t.fields=this._fields,t.setRenderer(this._renderer),t.loaded=!0,t.onLoad(t),t._setMap(this._map,e._div),e._childLayer=t,t},_destroyContainer:function(){var e=this.container;e&&(e.clear(),e._unsetMap(this._map,this.layer._div),this.layer._childLayer=null),this.container=null},_createClusterGenerator:function(){return new m({map:this._map,layer:this.layer,clusterRadius:this._clusterRadius,statisticInfos:this._statisticInfos})},_initClusterGenerator:function(){var e=this._clusterGenerator;e.loaded?this._awaitClusterGenerator():this._eventHandles.push(e.on("load",t.hitch(this,(function(){this._awaitClusterGenerator()}))),e.on("load-error",t.hitch(this,(function(e){console.log(e.error)}))))},_destroyClusterGenerator:function(e){this._clusterGenerator&&this._clusterGenerator.destroy(e),this._clusterGenerator=null},_awaitClusterGenerator:function(){var e=this._clusterGenerator;e.started?(this._applyRenderer(),this._initClusterUpdates()):this._eventHandles.push(e.on("start",t.hitch(this,(function(){this._applyRenderer(),this._initClusterUpdates()}))))},_applyAggregationInfo:function(){this._applyClusterRadius(),this._applyRenderer(),this._clusterGenerator&&!this._clusterGenerator.isUpdateScheduled()&&this.redraw()},_applyClusterRadius:function(){var e=this.aggregationInfo;this._clusterRadius=e&&e.clusterRadius||this.defaults.clusterRadius,this._clusterGenerator&&this._clusterGenerator.setClusterRadius(this._clusterRadius),this._computeClusterRadius()},_computeClusterRadius:function(){var e=this.aggregationInfo||{};e.clusterRadius=this._clusterRadius,this.aggregationInfo=e},_applyRenderer:function(){var e=this.container,t=this._getClusterRendererInfo(),r=this._compareStatInfos(this._statisticInfos,t.statisticInfos);r&&(this._statisticInfos=t.statisticInfos,this._clusterGenerator&&(this._clusterGenerator.setStatisticInfos(i.map(this._statisticInfos,(function(e){return{attributeInfo:e.attributeInfo,statisticType:e.statisticType}}))),e&&i.forEach(e.graphics,(function(e){this._applyClusterAttributes(e,e.getAggregationInfo())}),this))),this._renderer=t.renderer,this._applyFields(),this._applyInfoTemplate(!!r&&this._initialized),e&&(e.setRenderer(this._renderer),this.emit("renderer-change"))},_applyFields:function(){this._fields=this._getFields(this._statisticInfos),this.container&&(this.container.fields=this._fields)},_applyInfoTemplate:function(e){var t,i=this.aggregationInfo,r=i&&i.disablePopup;if(this.layer.infoTemplate&&!r){var n=i&&i.infoTemplate||this._infoTemplate;t=e||!n?this._createInfoTemplate():this._updateInfoTemplate(n)}else t=null;this._infoTemplate=t,this.container&&this.container.setInfoTemplate(this._infoTemplate),this._computeInfoTemplate()},_computeInfoTemplate:function(){var e=this.aggregationInfo||{};e.infoTemplate=this._infoTemplate,this.aggregationInfo=e},_getClusterRendererInfo:function(){var e=this.layer&&this.layer.renderer;return e?this._createClusterRenderer(e):this._getDefaultClusterRenderer()},_getDefaultClusterRenderer:function(){var e=this._createContinuousCountRenderer();return this._addSizeByCountVariable(e),{renderer:e,statisticInfos:[]}},_createContinuousCountRenderer:function(e){var i=new p(null,"cluster_count");return i.addBreak({minValue:-F,maxValue:F,symbol:e?new e.constructor(e.toJson()):new d(t.clone(this.defaults.markerSymbol))}),i},_createClusterRenderer:function(e){if(!this._isSupportedRenderer(e))return this._getDefaultClusterRenderer();var t,i=[];if(this._isSimpleRenderer(e))t=this._createContinuousCountRenderer(e.symbol);else{t=new e.constructor(e.toJson());var r,n=this._getRendererAttributeInfo(e);this._isCBRenderer(t)?(r=v.getClusterField(n,"avg"),i.push(this._getStatInfo(n,"avg")),t.normalizationType=null,t.normalizationField=null,t.normalizationTotal=null):this._isUVRenderer(t)&&(r=v.getClusterField(n,"type"),i.push(this._getStatInfo(n,"type"))),t.attributeField=r,t.setValueExpression(null),t.valueExpressionTitle=null,t.setVisualVariables(null),this._setRendererTitle(t,e)}var s=this._getSupportedVariables(e),a=this._createClusterVariables(s.allVars,i);return t.setVisualVariables(a),s.sizeVars.length||this._isCBSizeRenderer(t)||this._addSizeByCountVariable(t),{renderer:t,statisticInfos:i}},_isSupportedRenderer:function(e){if(this._isSimpleRenderer(e))return!0;if(this._isCBRenderer(e)){var t=e.normalizationType;return!("function"==typeof e.attributeField||t&&"field"!==t)}return!!this._isUVRenderer(e)&&("function"!=typeof e.attributeField&&!e.attributeField2)},_isSimpleRenderer:function(e){return e.declaredClass.toLowerCase().indexOf("simplerenderer")>-1},_isCBRenderer:function(e){return e.declaredClass.toLowerCase().indexOf("classbreaksrenderer")>-1},_isUVRenderer:function(e){return e.declaredClass.toLowerCase().indexOf("uniquevaluerenderer")>-1},_isCBSizeRenderer:function(e){var t=e.infos;if(!this._isCBRenderer(e)||!t||t.length<2)return!1;var r=1/0,n=-1/0;return i.forEach(t,(function(e){var t=e.symbol;if(t){var i=0;switch(t.type){case"simplemarkersymbol":i=t.size;break;case"picturemarkersymbol":i=(t.width+t.height)/2}r=Math.min(r,i),n=Math.max(n,i)}})),r!==1/0&&n!==-1/0&&r!==n},_getRendererAttributeInfo:function(e){var t=e.attributeField,i=t?this.layer.getField(t):null;return{field:t,attributeType:i&&i.type===I?"date":null,rotationType:null,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle,normalizationField:e.normalizationField}},_setRendererTitle:function(e,i){e.legendOptions=t.clone(i.legendOptions),e.legendOptions&&e.legendOptions.title||(e.legendOptions=e.legendOptions||{},e.legendOptions.title=c.getRendererTitle(i,this.layer))},_getSupportedVariables:function(e){var t=e.getVisualVariablesForType("colorInfo",!1)||[],r=e.getVisualVariablesForType("sizeInfo",!1)||[],n=e.getVisualVariablesForType("opacityInfo",!1)||[],s=e.getVisualVariablesForType("rotationInfo",!1)||[];return t=i.filter(t,this._variableFilter),r=i.filter(r,this._variableFilter),n=i.filter(n,this._variableFilter),s=i.filter(s,this._variableFilter),{sizeVars:r,allVars:t.concat(r).concat(n).concat(s)}},_variableFilter:function(e){return"function"!=typeof e.field&&!_.viewScaleRE.test(e.valueExpression)},_createClusterVariables:function(e,t){return i.map(e,(function(e){return this._createVarForAvg(e,t)}),this)},_createVarForAvg:function(e,i){var r=t.clone(e),n=this._getVariableAttributeInfo(e);r.field=v.getClusterField(n,"avg"),r.normalizationField=null,r.valueExpression=null,r.valueExpressionTitle=null;var s=this._getStatInfo(n,"avg");return this._addStatInfo(i,s),this._setVariableTitle(r,e),r},_getVariableAttributeInfo:function(e){var t="rotationInfo"===e.type,i=t?"angle":null,r=t?e.rotationType:null,n=e.legendOptions&&e.legendOptions.title,s=e.field,a=s?this.layer.getField(s):null;return a&&a.type===I&&(i="date"),{field:s,attributeType:i,rotationType:r,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle||e.valueExpression&&n,normalizationField:e.normalizationField}},_setVariableTitle:function(e,t){e.legendOptions&&e.legendOptions.title||(e.legendOptions=e.legendOptions||{},e.legendOptions.title=c.getVisualVariableTitle(t,this.layer))},_getStatInfo:function(e,t){return{statisticHash:v.getStatisticHash(e,t),attributeInfo:e,statisticType:t}},_addStatInfo:function(e,t){var i=this._findStatInfo(e,t);i?i.attributeInfo.valueExpressionTitle||(i.attributeInfo.valueExpressionTitle=t.attributeInfo.valueExpressionTitle):e.push(t)},_findStatInfo:function(e,t){var r;return i.some(e,(function(e){return e.statisticHash===t.statisticHash&&(r=e),!!r})),r},_compareStatInfos:function(e,t){var r=i.filter(e,(function(e){return!this._findStatInfo(t,e)}),this),n=i.filter(t,(function(t){return!this._findStatInfo(e,t)}),this);return n.length||r.length?{added:n,removed:r}:null},_addSizeByCountVariable:function(e){var t=this._createSizeByCountVariable();t&&this._addVariable(e,t)},_getSizeByCountVariable:function(e){var t=e.getVisualVariablesForType("sizeInfo",!1)||[];return i.filter(t,(function(e){return"cluster_count"===e.field}))[0]},_updateSizeByCountVariable:function(){var e=this._renderer,t=this._getSizeByCountVariable(e);if(t){var i=this._createSizeByCountVariable();i&&this._replaceVariable(e,t,i)}},_createSizeByCountVariable:function(){var e,t=this._clusterGenerator;if(t){var i=t.getCurrentLodStats();if(i){var r=t.getNumFeatures(),n=t.clusters,s=i.min,a=i.max;1===i.count&&s===r||1===n.length&&n[0].count===r?(s=1,a=r):s&&s===a&&(a=2*s),e={type:"sizeInfo",field:"cluster_count",valueUnit:"unknown",minSize:12,maxSize:50,minDataValue:s,maxDataValue:a,legendOptions:{title:C}}}}return e},_addVariable:function(e,t){var i=e.visualVariables||[];i.push(t),e.setVisualVariables(i)},_replaceVariable:function(e,t,r){var n=e.visualVariables,s=i.indexOf(n,t);s>-1&&n.splice(s,1),n.push(r),e.setVisualVariables(n)},_getFields:function(e){var t=[new g({name:"cluster_count",type:"esriFieldTypeInteger"})];return i.forEach(e,(function(e){var i,r=e.statisticType,n=e.attributeInfo;"avg"===r?i="date"===n.attributeType?I:"esriFieldTypeDouble":"type"===r&&(i=n.field?this.layer.getField(n.field).type:"esriFieldTypeString"),t.push(new g({name:v.getClusterField(n,r),type:i}))}),this),t},_createInfoTemplate:function(){var e=this._statisticInfos,t=this._renderer,r=[{fieldName:"cluster_count",label:C,visible:!0,format:{digitSeparator:!0,places:0}}],n=[],s=[l.substitute({count:"{cluster_count}"},b.countSummary)],a=this._isUVRenderer(t)?t.infos:[];return i.forEach(e,(function(e){var t,i,l=e.statisticType,o=e.attributeInfo,u=v.getClusterField(o,l),h=this._getFieldLabel(e);if("avg"===l)t={fieldName:u,label:h,visible:!0,format:"date"===o.attributeType?{dateFormat:"shortDateShortTime"}:{digitSeparator:!0,places:1}},i=this._getFieldSummary(e,u);else if("type"===l){var c="expression/"+u;t={fieldName:c,visible:!0},n.push({name:u,title:h,returnType:"string",expression:this._getExpression(a,u)}),i=this._getFieldSummary(e,c)}t&&r.push(t),i&&s.push(i)}),this),this._createPopupTemplate({fieldInfos:r,expressionInfos:n,description:s.join("<br/><br/>")})},_updateInfoTemplate:function(e){var t=e.toJson(),r=this._isUVRenderer(this._renderer)?this._renderer.infos:[];return i.forEach(this._statisticInfos,(function(e){var i=e.statisticType,n=e.attributeInfo,s=v.getClusterField(n,i);if("type"===i){var a=this._findExpressionInfo(s,t);a&&(a.expression=this._getExpression(r,s))}}),this),this._createPopupTemplate(t)},_createPopupTemplate:function(e){var i=new h(e),r=i.title;return i.setTitle(t.hitch(this,(function(e){var t=this._map&&this._map.infoWindow;if("esri.dijit.PopupMobile"===(t&&t.declaredClass)&&!i.info.title){var n=e.attributes,s=n&&n.cluster_count;return null==s?"":l.substitute({count:s},b.countTitle)}return r.call(i,e)}))),i},_findExpressionInfo:function(e,t){var r;return i.some(t.expressionInfos,(function(t){return t.name===e&&(r=t),!!r})),r},_escapeDoubleQuotes:function(e){return e?e.replace(/"/g,'\\"'):""},_getExpression:function(e,t){return["var uvInfos = ["+this._getObjects(e).join(", ")+"];",'var predominantType = Text($feature["'+t+'"]);','var label = "'+this._escapeDoubleQuotes(b.predominantNoneValue)+'";',"for (var i = 0; i < Count(uvInfos); i++) {","if (uvInfos[i].value == predominantType) {","label = uvInfos[i].label;","break;","}","}","return label;"].join("\n")},_getObjects:function(e){return i.map(e,(function(e){return'{"value": "'+String(e.value)+'","label": "'+this._escapeDoubleQuotes(String(e.label))+'"}'}),this)},_getFieldLabel:function(e){var t,i=e.statisticType,r=e.attributeInfo,n=r.field,s=r.normalizationField,a="";if("avg"===i?t=s?b.avgNormFieldLabel:b.avgFieldLabel:"type"===i&&(t=b.predominantFieldLabel),t){var o=r.valueExpression?r.valueExpressionTitle:this.layer.getFieldLabel(n),u=s&&this.layer.getFieldLabel(s);a=l.substitute({fieldLabel:o||"",normFieldLabel:u||""},t)}return a},_getFieldSummary:function(e,t){var i,r=e.statisticType,n=e.attributeInfo,s=n.field,a=n.normalizationField,o="";if("avg"===r?i=a?b.avgNormFieldSummary:b.avgFieldSummary:"type"===r&&(i=b.predominantFieldSummary),i){var u=n.valueExpression?n.valueExpressionTitle:this.layer.getFieldLabel(s),h=a&&this.layer.getFieldLabel(a);o=l.substitute({fieldLabel:u||"",normFieldLabel:h||"",fieldValue:"{"+t+"}"},i)}return o},_removeFromPopup:function(e){var t=this._map.infoWindow,r=t.features;if(r&&r.length){var n=i.filter(r,(function(t){return t.getLayer()!==e}));n.length<r.length&&(n.length?t.setFeatures(n):(t.clearFeatures(),t.hide()))}},_resetClusterNav:function(){this._resetClusterNavPartial(),this._popupClusterGraphic=null},_resetClusterNavPartial:function(){this._map.infoWindow.removeActions&&this._map.infoWindow.removeActions(this._popupActions),this._hideSingleGraphic(this._popupSingleGraphic),this._popupSingleGraphic=null},_addClusterBoundary:function(e,t){var i=t.clusterFillSymbol;i&&(i=new i.constructor(i.toJson()));var r=new a(e,i);this._map.graphics.add(r),this._clusterBoundary=r},_removeClusterBoundary:function(){this._map.graphics.remove(this._clusterBoundary),this._clusterBoundary=null},_createBrowseFeaturesAction:function(){return this._map.infoWindow.addActions([{title:S.NLS_browseFeatures,className:"browseFeatures",callback:t.hitch(this,(function(e){e.preventDefault();var t=this._map.infoWindow,i=t.getSelectedFeature(),r=i.getChildGraphics(),n=t.getCurrentAnchor();t.setFeatures(r,{anchor:n});var s=u.graphicsExtent(r);s&&(this._addClusterBoundary(s,t),t.show(this._getPopupLocation(s,n))),this._popupClusterGraphic=i}))}])[0]},_getPopupLocation:function(e,t){var i=e.getCenter();return(t=t.toLowerCase()).indexOf("top")>-1?i.update(i.x,e.ymax):t.indexOf("bottom")>-1?i.update(i.x,e.ymin):t.indexOf("left")>-1?i.update(e.xmin,i.y):i.update(e.xmax,i.y),i},_createViewSummaryAction:function(){return this._map.infoWindow.addActions([{title:S.NLS_viewSummary,className:"viewSummary",callback:t.hitch(this,(function(e){e.preventDefault();var t=this._popupClusterGraphic,i=this._map.infoWindow;i.setFeatures([t]),i.show(t.geometry),this._popupClusterGraphic=null}))}])[0]},_initClusterUpdates:function(){this._updateSizeVariable(),this._updateClusterGraphics(),this._eventHandles.push(this._clusterGenerator.on("update-end",t.hitch(this,(function(e){(e.mapLevelChange||e.indexChange)&&this._updateSizeVariable(),this._updateClusterGraphics()}))),this._clusterGenerator.on("index-complete",t.hitch(this,(function(){this._updateSizeVariable()}))))},_updateClusterGraphics:function(){this._hideSingleGraphics();var e=[],t=[];i.forEach(this._clusterGenerator.clusters,(function(i){var r=new a(i.centroid);if(r.setAggregationSourceLayer(this.layer),r.setAggregationInfo(i),this._applyClusterAttributes(r,i),1===i.count){var n=this._getSingleGraphic(r);t.push(n)}else e.push(r)}),this),this._showSingleGraphics(t),this._addGraphics(e)},_addGraphics:function(e){var t=this.container;t.clear(),i.forEach(e,(function(e){t.add(e)}))},_getSingleGraphic:function(e){var t=this._clusterGenerator.getCell(e.getAggregationInfo().primary).features[0],i=this.layer.renderer,r=i&&i.getSymbol(t),n=this._getSizeByCountVariable(this._renderer);if(r&&n){var s=n?this._renderer.getSize(e,{sizeInfo:n,shape:r.style,resolution:this._map.getResolutionInMeters(),scale:this._map.getScale()}):null;t.setSize(s)}return t},_showSingleGraphics:function(e){i.forEach(e,this._showSingleGraphic),this._singleGraphics=e},_hideSingleGraphics:function(){i.forEach(this._singleGraphics,(function(e){e.setSize(null),this._hideSingleGraphic(e)}),this),this._singleGraphics=null},_clearSingleGraphics:function(){i.forEach(this._singleGraphics,(function(e){e.setSize(null)})),this._singleGraphics=null},_showSingleGraphic:function(e){e&&e._resume()},_hideSingleGraphic:function(e){e&&e._suspend()},_updateSizeVariable:function(){this.isClusteringEnabled()&&(this._updateSizeByCountVariable(),this.emit("renderer-change"))},_applyClusterAttributes:function(e,t){e.setAttributes(t.attributes)},_createLayerEventListeners:function(){var e=this.layer;this._eventHandles.push(e.on("visibility-change",t.hitch(this,(function(e){this.container.setVisibility(e.visible)}))),e.on("scale-range-change",t.hitch(this,(function(){this.container.setScaleRange(this.layer.minScale,this.layer.maxScale)}))),e.on("renderer-change",t.hitch(this,(function(){this._applyRenderer()}))),e.on("info-template-change",t.hitch(this,(function(){this._applyInfoTemplate()}))))},_createMapEventListeners:function(){this._eventHandles.push(this._map.on("zoom-start",t.hitch(this,(function(){this._removeClusterBoundary(),this._removeFromPopup(this.container),this._removeFromPopup(this.layer),this._resetClusterNav(),this.container.clear(),this._hideSingleGraphics()}))))},_createPopupEventListeners:function(){var e=this._map.infoWindow;this._eventHandles.push(e.on("selection-change",t.hitch(this,(function(){this._resetClusterNavPartial();var e,t=this._map.infoWindow.getSelectedFeature(),i=t&&t.getLayer();i&&(i===this.container?(this._removeClusterBoundary(),this._map.infoWindow.addActions&&(e=this._createBrowseFeaturesAction())):i===this.layer&&t._isSuspended()?(this._map.infoWindow.addActions&&(e=this._createViewSummaryAction()),this._popupSingleGraphic=t,this._showSingleGraphic(this._popupSingleGraphic)):this._removeClusterBoundary(),this._popupActions=e?[e]:null)}))),e.on("clear-features",t.hitch(this,(function(e){this._resetClusterNav(),e.isIntermediate||this._removeClusterBoundary()}))),e.on("hide",t.hitch(this,(function(){this._popupSingleGraphic&&this._popupSingleGraphic._suspend(),this._clusterBoundary&&this._clusterBoundary.hide()}))),e.on("show",t.hitch(this,(function(){this._popupSingleGraphic&&this._popupSingleGraphic._resume(),this._clusterBoundary&&this._clusterBoundary.show()}))))},_destroyEventListeners:function(){i.forEach(this._eventHandles,(function(e){e.remove()}))}});return r("extend-esri")&&t.setObject("layers.clustering.ClusterManager",G,n),G}));