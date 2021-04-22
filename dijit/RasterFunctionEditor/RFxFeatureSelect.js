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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./utils","../analysis/AnalysisRegistry","../analysis/utils","../analysis/mixins/browselayers/BrowseLayerMixin","dojo/i18n!../../nls/jsapi"],(function(e,t,i,s,r,a,o,n,l,y,h,u,p,d,c,m){var g=e("esri.dijit.RasterFunctionEditor.RFxFeatureSelect",[l,y,h,c],{templateString:"<div><div data-dojo-type='dijit/form/Select' data-dojo-attach-point= '_layerSelect'></div></div>",geometryTypes:{point:p.GeometryTypes.Point,polygon:p.GeometryTypes.Polygon,line:p.GeometryTypes.Line,multiPoint:p.GeometryTypes.MultiPoint},value:null,isRequired:!0,showBrowseLayers:!0,useArcGISComponents:!0,constructor:function(e){this.inherited(arguments),this._i18n=m.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._populateLayerSelect()},_setInputLayersAttr:function(e){this.inputLayers=e&&e.map((function(e){return e}))},_populateLayerSelect:function(){var e=[];this.isRequired||e.push({value:"",label:" "});var t=this.geometryType&&"point"===this.geometryType?this._i18n.rfxFeatureSelect.addPointLayer:this._i18n.rfxFeatureSelect.addFeatureLayer;if(this.inputLayers&&r.forEach(this.inputLayers,(function(t,i){this.geometryType?this._isLayerGeometryTypeSupported(t.geometryType)&&e.push({value:i+1,label:t.name}):e.push({value:i+1,label:t.name})}),this),this._layerSelect.addOption(e),this.value){var i=this._getSelectedLayer(),a=i&&i.name,o=a&&e.filter((function(e){return e.label===a}))[0];this._layerSelect.set("value",o&&o.value)}else this._layerChange();d.addReadyToUseLayerOption(this,[this._layerSelect]),this.own(this._layerSelect.on("change",s.hitch(this,this._handleFeatureLayerChange))),setTimeout(s.hitch(this,(function(){this._layerSelect&&this._layerSelect.updateOption({value:"browselayers",label:t,selected:!1})})),1e3),this.on("add-ready-to-use-layer",s.hitch(this,(function(e){this.emit("add-layer",e)})))},_handleFeatureLayerChange:function(e){if("browselayers"===e||"browse"===e){var t=[],i=[];this.geometryType&&(Array.isArray(this.geometryType)?(i=this.geometryType,this.geometryType.forEach(function(e){t.push(this.geometryTypes[e])}.bind(this))):(i.push(this.geometryType),t.push(this.geometryTypes[this.geometryType]))),this._createBrowseItems({browseValue:e,disableLAAL:!0},{geometryTypes:t,tags:i},this._layerSelect)}else this._layerChange()},_handleBrowseItemsSelect:function(e){e&&e.selection&&d.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._layerSelect,posIncrement:1,browseDialog:e.dialog||this._browsedlg,widget:this})},_isLayerGeometryTypeSupported:function(e){if(e&&this.geometryType)return Array.isArray(this.geometryType)?this.geometryType.some(function(t){return this.geometryTypes[t]===e||t===e}.bind(this)):this.geometryTypes[this.geometryType]===e||this.geometryType===e},_getSelectedLayer:function(){if(this.value&&this.inputLayers)return this.inputLayers.filter(function(e){return e.url.indexOf(this.value.url)>-1||this.value.url.indexOf(e.url)>-1}.bind(this))[0]},_layerChange:function(){var e=this._layerSelect.value;""===e?this.value=e:e>0&&(this.value=u.getRasterJsonFromLayer(this.inputLayers[e-1])),this.emit("change")},_setBrowsePropertiesAttr:function(e){this.isSingleTenant=!0,this.map=e.map?e.map:this.map,this.portalUrl=e.portalUrl?e.portalUrl:this.portalUrl,this.portalSelf=e.portalSelf?e.portalSelf:this.portalSelf}});return t("extend-esri")&&s.setObject("dijit.RasterFunctionEditor.RFxFeatureSelect",g,i),g}));