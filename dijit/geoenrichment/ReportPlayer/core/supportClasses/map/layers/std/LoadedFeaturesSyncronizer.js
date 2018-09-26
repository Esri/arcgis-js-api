// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/promise/all","esri/graphic","esri/layers/GraphicsLayer","esri/geometry/jsonUtils","esri/renderers/jsonUtils","esri/renderers/SimpleRenderer","esri/dijit/PopupTemplate","./DefaultSymbolRenderer","./FeatureGeometryLoader","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../../../dataProvider/supportClasses/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/SymbolUtil"],function(e,r,t,o,i,n,a,l,s,u,h,c,d,y,f){return e(null,{controller:null,layerSorter:null,map:null,countryID:null,hierarchy:null,calculatorFieldName:null,_levelIdToLayerCache:null,_showFeaturesCache:null,_isDestroyed:!1,constructor:function(e){r.mixin(this,e),this._levelIdToLayerCache={},this._showFeaturesCache={}},syncWithShownFeatures:function(){function e(e){return e.StdGeographyLevel+";"+e.StdGeographyID}if(this._isDestroyed)return void console.log(new Error("Attempt to use syncronizer after destroying."));var r=this.controller.getShownFeatureAttributes(),t={};r&&r.forEach(function(r){var o=e(r);t[o]=r,this._showFeaturesCache[o]||this._addFeatureByAttributes(r)},this);for(var o in this._showFeaturesCache)t[o]||this._removeFeatureByAttributes(this._showFeaturesCache[o]);this._showFeaturesCache=t},loadAllFeatures:function(){var e=this;return o(this.controller.getAllFeatureAttributes().map(function(r){return e._getGeometryJsonByAttributes(r)}))},_addFeatureByAttributes:function(e){var o=e.StdGeographyLevel,n=(e.StdGeographyID,e.StdGeographyName),c=this._getLayerForLevelId(o);if(c){var d=this.controller.getAttributeFields().map(function(r){return{label:r.label,value:r.formatFunction(e[r.name])}}),m=new u({title:n||"",fieldInfos:[],description:y.buildAttributesTable(null,d)}),g=new i({attributes:e,geometry:null});g.setInfoTemplate(m);var p;if(!c.renderer){var v=this.controller.getRendererJson(this.calculatorFieldName),_=v?l.fromJson(r.clone(v)):h.getDefaultStdRenderer(),F=_.getSymbol(g);p=f.simpleFillSymbolToPictureFillSymbol(F).then(function(e){c.setRenderer(new s(e||F))})}t(this._getGeometryJsonByAttributes(e),function(e){e&&(g.setGeometry(a.fromJson(e)),t(p,function(){c.add(g)}))})}},_getGeometryJsonByAttributes:function(e){var r=this,t=e.StdGeographyLevel,o=e.StdGeographyID,i="stdGeometry_"+this.map.spatialReference.wkid,n=e[i]&&JSON.parse(e[i]);return n||c.canLoad()&&c.getFeatureGeometry({countryID:this.countryID,hierarchy:this.hierarchy,levelId:t,featureId:o,outSR:{wkid:this.map.spatialReference.wkid}}).then(function(t){return r._isDestroyed?null:(e[i]=JSON.stringify(t),t)})},_removeFeatureByAttributes:function(e){var r=this._levelIdToLayerCache[e.StdGeographyLevel];if(r){var t=r.graphics.filter(function(r){return r.attributes.StdGeographyID===e.StdGeographyID})[0];t&&r.remove(t)}},_getLayerForLevelId:function(e){if(!this._levelIdToLayerCache[e]){if(!this._canShowLayerForLevelId(e))return null;var r=this._levelIdToLayerCache[e]=new n;this.layerSorter.registerLayerInfo({layer:r,type:this.layerSorter.STD_POLYGONS,preferredIndex:this.controller.getLayerIndex(this.calculatorFieldName,e),geometryType:"esriGeometryPolygon"}),this._provideNameForLayer(r,e),this.onLayerCreated(r,e)}return this._levelIdToLayerCache[e]},_canShowLayerForLevelId:function(e){var r=this.controller.getRendererJson(this.calculatorFieldName);if(r){var t=r.uniqueValueInfos.filter(function(r){return r.value===e})[0];if(t&&!t.symbol.color[3]&&(!t.symbol.outline||!t.symbol.outline.color[3]))return!1}return!0},_provideNameForLayer:function(e,r){e.name=d.getGeographiesModel().getLevelPluralName(r),e.onVisibilityChange()},onLayerCreated:function(e,r){},destroy:function(){this._isDestroyed=!0,this.controller=null,this._levelIdToLayerCache=null}})});