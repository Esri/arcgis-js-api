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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/graphic","esri/layers/GraphicsLayer","esri/geometry/jsonUtils","esri/renderers/jsonUtils","esri/renderers/SimpleRenderer","esri/dijit/PopupTemplate","./DefaultSymbolRenderer","./FeatureGeometryLoader","./LabelsLayer","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/SymbolUtil"],(function(e,r,t,o,a,i,l,s,n,u,h,y,c,d,m,g){return e(null,{controller:null,layerSorter:null,map:null,countryID:null,hierarchy:null,calculatorFieldName:null,_levelIdToLayerCache:null,_shownFeaturesCache:null,_isDestroyed:!1,_layersPreloaded:!1,constructor:function(e){r.mixin(this,e),this._levelIdToLayerCache={},this._shownFeaturesCache={}},syncWithShownFeatures:function(){if(this._isDestroyed)console.log(new Error("Attempt to use syncronizer after destroying."));else{var e=this.controller.getShownFeatureAttributes();this._preloadAllLayers();var r=this._shownFeaturesCache;for(var t in this._shownFeaturesCache={},e&&e.forEach((function(e){var t=this._getAttrsKey(e);this._shownFeaturesCache[t]=e,r[t]||this._addFeatureByAttributes(e)}),this),r)this._shownFeaturesCache[t]||this._removeFeatureByAttributes(r[t])}},_getAttrsKey:function(e){return e.StdGeographyLevel+";"+e.StdGeographyID},loadAllFeatures:function(){var e=this;return o(this.controller.getAllFeatureAttributes().map((function(r){return e._getGeometryJsonByAttributes(r)})))},_addFeatureByAttributes:function(e){var o=this,i=e.StdGeographyLevel,y=(e.StdGeographyID,e.StdGeographyName),c=this._getLayerForLevelId(i),d=c&&c.graphicsLayer,f=c&&c.labelsLayer;if(d){var p,L=this.controller.getAttributeFields().map((function(r){return{label:r.label,value:r.formatFunction(e[r.name])}})),v=new u({title:y||"",fieldInfos:[],description:m.buildAttributesTable(null,L)}),_=new a({attributes:e,geometry:null});if(_.setInfoTemplate(v),!d._rendererPromise){var S=this.controller.getRendererJson(this.calculatorFieldName),F=(S?s.fromJson(r.clone(S)):h.getDefaultStdRenderer()).getSymbol(_);d._rendererPromise=p=g.simpleFillSymbolToPictureFillSymbol(F).then((function(e){d.setRenderer(new n(e||F))}));var b=this.controller.getLabelRendererJson(this.calculatorFieldName);b?f.setRenderer(new n(s.fromJson(r.clone(b)).getSymbol(_))):f.setVisualSettings({color:F.color.toCss()})}t(this._getGeometryJsonByAttributes(e),(function(r){r&&(_.setGeometry(l.fromJson(r)),t(p,(function(){o._shownFeaturesCache[o._getAttrsKey(e)]&&d.add(_)})))}))}},_getGeometryJsonByAttributes:function(e){var r=this,t=e.StdGeographyLevel,o=e.StdGeographyID,a=this.controller.buildGeometryFieldName(this.map.spatialReference.wkid),i=e[a];i||(this.controller.provideGeometryFromCalculatorData(e,a),i=e[a]);var l="string"==typeof i?JSON.parse(i):i;return l||y.canLoad()&&y.getFeatureGeometry({countryID:this.countryID,hierarchy:this.hierarchy,levelId:t,featureId:o,outSR:{wkid:this.map.spatialReference.wkid}}).then((function(t){return r._isDestroyed?null:(e[a]=JSON.stringify(t),r.controller.saveGeometryInCalculatorData(e,a),t)}))},_removeFeatureByAttributes:function(e){var r=this._levelIdToLayerCache[e.StdGeographyLevel],t=r&&r.graphicsLayer;if(t){var o=t.graphics.filter((function(r){return r.attributes.StdGeographyID===e.StdGeographyID}))[0];o&&t.remove(o)}},_preloadAllLayers:function(){if(!this._layersPreloaded){var e={};this.controller.getAllFeatureAttributes().forEach((function(r){e[r.StdGeographyLevel]=1})),Object.keys(e).forEach(this._getLayerForLevelId.bind(this)),this._layersPreloaded=!0}},_getLayerForLevelId:function(e){if(!this._levelIdToLayerCache[e]){if(!this._canShowLayerForLevelId(e))return null;var r=new i;this._provideNameForLayer(r,e,!0),this.layerSorter.registerLayerInfo({layer:r,type:this.layerSorter.STD_POLYGONS,preferredIndex:this.controller.getLayerIndex(this.calculatorFieldName,e),geometryType:"esriGeometryPolygon"});var t=new c;t.setLabelField("StdGeographyName"),t.setSourceGraphicsLayer(r),t.setVisualSettings(c.getDefaultVisualSettings(e)),this._provideNameForLayer(t,e,!1),this.layerSorter.registerLayerInfo({layer:t,type:this.layerSorter.STD_POLYGON_LABELS,preferredIndex:this.controller.getLayerIndex(this.calculatorFieldName,e),geometryType:"esriGeometryPoint"}),this._levelIdToLayerCache[e]={graphicsLayer:r,labelsLayer:t},this.onLayerCreated(r,e)}return this._levelIdToLayerCache[e]},_canShowLayerForLevelId:function(e){var r=this.controller.getRendererJson(this.calculatorFieldName);if(r){var t=r.uniqueValueInfos.filter((function(r){return r.value===e}))[0];if(t&&!t.symbol.color[3]&&(!t.symbol.outline||!t.symbol.outline.color[3]))return!1}return!0},_provideNameForLayer:function(e,r,t){e.name=d.getGeographiesModel().getLevelPluralName(r),t&&e.onVisibilityChange()},onLayerCreated:function(e,r){},destroy:function(){this._isDestroyed=!0,this.controller=null,this._levelIdToLayerCache=null}})}));