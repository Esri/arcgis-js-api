// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/Evented","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/on","dijit/_TemplatedMixin","../BaseEditor","../common/dijit/DrawLayer","dijit/form/Select","dijit/form/ToggleButton","dojo/text!./SelectFeatureSetFromLayer.html","esri/dijit/analysis/utils","esri/tasks/query","esri/toolbars/draw","esri/layers/FeatureLayer","esri/graphic","esri/symbols/PictureMarkerSymbol","esri/symbols/jsonUtils","../../mixins/browselayers/BrowseLayerMixin","../../AnalysisRegistry"],(function(e,t,a,s,i,r,n,o,l,h,y,d,u,p,m,c,w,g,L,f,_,S){return e([l,o,a,_],{templateString:u,editorName:"SelectFeatureSetFromLayer",cssClass:{featureSetSelect:"fullSpread esriAnalysisSelect esriLongLabel longInputGP",layerChooseCtr:"layerChooseCtr"},constructor:function(e){this.inherited(arguments),e.cssClass&&s.mixin(this.cssClass,e.cssClass)},postCreate:function(){var e;this.inherited(arguments),this.spatialFilterByFeatures=new y({class:this.cssClass.featureSetSelect}),this._analysisSelect=this.spatialFilterByFeatures,this.analysisLayers=this.config.analysisLayers,this.param&&this.param.filter&&this.param.filter.list?this.analysisLayers=i.filter(this.analysisLayers,(function(e){return-1!==i.indexOf(this.param.filter.list,e.geometryType)}),this):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(this.analysisLayers=i.filter(this.analysisLayers,(function(e){return this.param.defaultValue&&this.param.defaultValue.geometryType===e.geometryType}),this)),this.analysisLayer||(this.analysisLayer=this.analysisLayers&&this.analysisLayers[0]),p.populateAnalysisLayers(this,"analysisLayer","analysisLayers",{posIncrement:1}),this.showBrowseLayers=!this.widget||this.widget.showBrowseLayers,this.showReadyToUseLayers=!this.widget||this.widget.showReadyToUseLayers,this.useArcGISComponents=!!this.widget&&this.widget.useArcGISComponents,this.helpFileName=this.widget&&this.widget.helpFileName,this.isBrowseInDialog=this.widget&&this.widget.isBrowseInDialog,this.portalUrl=this.config.portalUrl,this.isSingleTenant=!0,this.showGeoAnalyticsParams=this.config.showGeoAnalyticsParams,p.addReadyToUseLayerOption(this,[this._analysisSelect]),this.own(n(this.spatialFilterByFeatures,"change",s.hitch(this,this._onLayerChanged))),this.spatialFilterByFeatures.placeAt(this.layerChooseNode),this.showDrawOption=void 0===this.config.showDrawOption||this.config.showDrawOption,this.showDrawOption&&(e=this._getGeometryType(),this._drawBtn=new h({types:e||["polygon","point","polyline"],selectBtnNode:this.selectBtnNode,drawBtnNode:this.drawBtnNode}),n(this._drawBtn,"change",s.hitch(this,this._handleDrawBtnChange)),this._type=e,this._updateDrawnLayerName(),this._initDefaultSymbols()),this.on("add-ready-to-use-layer",s.hitch(this,(function(e){this.widget&&this.widget.emit("add-ready-to-use-layer",e)})))},_getGeometryType:function(){var e;return this.param&&this.param.filter&&this.param.filter.list?this.param.filter.list.map((function(e){return-1!==(e=e.toLowerCase()).indexOf("point")?"point":-1!==e.indexOf("polygon")?"polygon":"polyline"})):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType?(e=this.param.defaultValue.geometryType&&this.param.defaultValue.geometryType.toLowerCase())&&(-1!==e.indexOf("polygon")?"polygon":-1!==e.indexOf("point")?"point":"polyline"):null},_updateDrawnLayerName:function(){var e,t=[],a=this.widget&&this.widget.drawLayer;a&&a.length>0&&(t=i.filter(a,(function(e){return e.geometryType&&-1!==e.geometryType.toLowerCase().indexOf(this._type)}),this)),e=0===t.length?"":"_"+t.length,"point"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawPointLayerName?this.widget.drawPointLayerName:this.nls?this.nls.drawnPointLayer:this.i18n.drawnPointLayer):"polyline"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawLineLayerName?this.widget.drawLineLayerName:this.nls?this.nls.drawnPolylineLayer:this.i18n.drawnPolylineLayer):"polygon"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawPolyLayerName?this.widget.drawPolyLayerName:this.nls?this.nls.drawnPolygonLayer:this.i18n.drawnPolygonLayer):this.set("drawnLayerName",this.widget&&this.widget.drawnLayerName?this.widget.drawnLayerName:this.nls?this.nls.drawnLayerName:this.i18n.drawnLayerName),""!==e&&this._type&&this.set("drawnLayerName",this.get("drawnLayerName")+e)},_handleDrawBtnChange:function(e,t){this._type!=t&&(this._removeDrawnFeatColl(),this._type=t),e?(this.emit("drawtool-activate",{}),this._featureLayer||this._createFeatColl(),this._drawtoolbar.activate("point"===this._type?c.POINT:"polyline"===this._type?c.FREEHAND_POLYLINE:c.POLYGON)):this._drawtoolbar.deactivate()},_onLayerChanged:function(e){var t,a;t=this._getGeometryType(),"browse"===e||"browselayers"===e?this.param&&this.param.filter&&this.param.filter.list?(t=t.map((function(e){return"polyline"===e?"line":e})),this._createBrowseItems({browseValue:e,isDialog:this.isBrowseInDialog},{tags:t,geometryTypes:this.param.filter.list},this._analysisSelect)):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType?(a="point"===t?S.GeometryTypes.Point:"polygon"===t?S.GeometryTypes.Polygon:S.GeometryTypes.Line,"polyline"===t&&(t="line"),this._createBrowseItems({browseValue:e,isDialog:this.isBrowseInDialog},{tags:[t],geometryTypes:[a]},this._analysisSelect)):this._createBrowseItems({browseValue:e,isDialog:this.isBrowseInDialog},{},this._analysisSelect):(this.analysisLayer=this.analysisLayers[e-1],this.emit("analysislayer-change",{analysisLayer:this.analysisLayer}))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&p.addAnalysisReadyLayer({item:e.selection,layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,posIncrement:1,widget:this},t)},_createFeatColl:function(){this._updateDrawnLayerName(),this._initDefaultSymbols();var e=this.createFeatureCollection(this.drawnLayerName);this._featureLayer=new w(e,{id:this.drawnLayerName}),this.map.addLayer(this._featureLayer),r.connect(this._featureLayer,"onClick",s.hitch(this,(function(e){this.map.infoWindow.setFeatures([e.graphic])}))),this.widget&&this.widget.set("drawLayer",this._featureLayer)},createFeatureCollection:function(e){var t,a=S.GeometryTypes[this._type&&"polyline"===this._type?"Line":this._type.charAt(0).toUpperCase()+this._type.substr(1)];return(t={layerDefinition:null,featureSet:{features:[],geometryType:a||this.param.defaultValue.geometryType}}).layerDefinition={objectIdField:"OBJECTID",templates:[],type:"Feature Layer",drawingInfo:{},name:e,hasAttachments:!1,capabilities:"Query",types:[],geometryType:a||this.param.defaultValue.geometryType,fields:this.param.defaultValue.fields||[]},t},_getRandomColor:function(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]},_initDefaultSymbols:function(){var e=this.drawnLayerName&&-1!==this.drawnLayerName.search(/_[0-9]$/),t={style:"esriSMSCircle",color:e?this._getRandomColor():[0,0,128,128],name:"Circle",outline:{color:e?this._getRandomColor():[0,0,128,255],width:1},type:"esriSMS",size:18},a={style:"esriSLSSolid",color:e?this._getRandomColor():[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},s={style:"esriSFSSolid",color:e?this._getRandomColor():[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:e?this._getRandomColor():[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol=f.fromJson(t),this.polylineSymbol=f.fromJson(a),this.polygonSymbol=f.fromJson(s)},_createGraphic:function(e){return new g(e)},_addFeatures:function(e){var t=this._createGraphic(e),a=[];if(a.push(t),this._featureLayer.applyEdits(a,null,null),0===this.analysisLayers.length||this.analysisLayers[this.analysisLayers.length-1]!==this._featureLayer){var s=this.analysisLayers.push(this._featureLayer),r=this._analysisSelect.getOptions();this._analysisSelect.removeOption(r),(r=i.map(r,(function(e){return e.selected=!1,e}))).push({value:s,label:this._featureLayer.name,selected:!0}),this._analysisSelect.addOption(r),this._onLayerChanged(s)}this._drawBtn.set("checked",!1),this._drawtoolbar.deactivate()},_removeDrawnFeatColl:function(){if(this._featureLayer){this.map.removeLayer(this._featureLayer),i.forEach(this.analysisLayers,(function(e,t){if(e===this._featureLayer)return this._analysisSelect.removeOption({value:t+1,label:this._featureLayer.name}),void this.analysisLayers.splice(t,1)}),this);var e=this.widget.get("drawLayer");void 0!==e&&e.length>0&&(e=i.filter(e,(function(e){return e.name!==this._featureLayer.name}),this),this.widget.drawLayer=e),this._featureLayer=null}},clear:function(){this._removeDrawnFeatColl(),this._handleDrawBtnChange(!1)},_setDrawnLayerNameAttr:function(e){this.drawnLayerName=e},_getDrawnLayerNameAttr:function(){return this._featureLayer?this._featureLayer.name:this.drawnLayerName},_getDrawLayerAttr:function(){return this._featureLayer},getGPValue:function(){return this.wrapValueToDeferred(this.getSelectedLayer())},getSelectedLayer:function(){var e=this.analysisLayers[this._analysisSelect.get("value")-1];return e?p.constructAnalysisInputLyrObj(e,!0):null},_setMapAttr:function(e){this.map=e,this._drawtoolbar=new c(this.map),r.connect(this._drawtoolbar,"onDrawEnd",s.hitch(this,this._addFeatures))},_setAnalysisLayerAttr:function(e){this._set("analysisLayer",e)},_getAnalysisLayerAttr:function(){return this.analysisLayers&&this.analysisLayers[this._analysisSelect.get("value")-1]}})}));