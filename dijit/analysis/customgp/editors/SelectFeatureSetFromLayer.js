// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["dojo/_base/declare","dojo/Deferred","dojo/Evented","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/on","dijit/_TemplatedMixin","../BaseEditor","dijit/form/Select","dijit/form/ToggleButton","dojo/text!./SelectFeatureSetFromLayer.html","esri/dijit/analysis/utils","esri/tasks/query","esri/toolbars/draw","esri/layers/FeatureLayer","esri/graphic","esri/symbols/PictureMarkerSymbol","esri/symbols/jsonUtils"],function(e,t,s,a,i,r,l,o,n,y,h,d,p,u,c,m,L,f,_){var w=e([n,o,s],{templateString:d,editorName:"SelectFeatureSetFromLayer",postCreate:function(){this.inherited(arguments),this.spatialFilterByFeatures=new y({"class":"longInput esriMediumlabel2 esriAnalysisSelect"}),this._analysisSelect=this.spatialFilterByFeatures,this.analysisLayers=this.config.analysisLayers,this.analysisLayers=i.filter(this.analysisLayers,function(e){return this.param.defaultValue&&this.param.defaultValue.geometryType===e.geometryType},this),this.analysisLayer=this.analysisLayers[0],p.populateAnalysisLayers(this,"analysisLayer","analysisLayers",{posIncrement:1}),this.showBrowseLayers=!0,this.showReadyToUseLayers=!0,this.portalUrl=this.config.portalUrl,p.addReadyToUseLayerOption(this,[this._analysisSelect]),this.own(l(this.spatialFilterByFeatures,"change",a.hitch(this,this._onLayerChanged))),this.spatialFilterByFeatures.placeAt(this.layerChooseNode);var e=this.param.defaultValue.geometryType.toLowerCase(),t=-1!==e.indexOf("polygon")?"polygon":-1!==e.indexOf("point")?"point":"polyline";this._type=t,this._drawBtn=new h({"class":"esriActionButton",iconClass:"toolbarIcon "+t+"Icon"}),this._drawBtn.placeAt(this.drawBtnNode),l(this._drawBtn,"change",a.hitch(this,this._handleDrawBtnChange)),"point"===this._type?this.drawnLayerName=this.nls.drawnPointLayer:"polyline"===this._type?this.drawnLayerName=this.nls.drawnPolylineLayer:"polygon"===this._type?this.drawnLayerName=this.nls.drawnPolygonLayer:this.drawnLayerName=this.nls.drawnLayerName,this._initDefaultSymbols()},_handleDrawBtnChange:function(e){e?(this.emit("drawtool-activate",{}),this._featureLayer||this._createFeatColl(),this._drawtoolbar.activate("point"===this._type?c.POINT:"polyline"===this._type?c.FREEHAND_POLYLINE:c.POLYGON)):this._drawtoolbar.deactivate()},_onLayerChanged:function(e){var t,s,a;"browse"===e?(t=this._browsedlg.browseItems.get("query"),s=this.param.defaultValue.geometryType.toLowerCase(),a=-1!==s.indexOf("point")?"point":-1!==s.indexOf("polygon")?"polygon":"line",t.custom=['tags:"'+a+'"'],this._browsedlg.browseItems.set("query",t),this._browsedlg.show()):"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[this.param.defaultValue.geometryType],this._browseLyrsdlg.show()):this.analysisLayer=this.analysisLayers[e]},_handleBrowseItemsSelect:function(e){e&&e.selection&&p.addAnalysisReadyLayer({item:e.selection,layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this})},_createFeatColl:function(){var e=this.createFeatureCollection(this.drawnLayerName);this._featureLayer=new m(e,{id:this.drawnLayerName}),this.map.addLayer(this._featureLayer),r.connect(this._featureLayer,"onClick",a.hitch(this,function(e){this.map.infoWindow.setFeatures([e.graphic])}))},createFeatureCollection:function(e){var t;return t={layerDefinition:null,featureSet:{features:[],geometryType:this.param.defaultValue.geometryType}},t.layerDefinition={objectIdField:"OBJECTID",templates:[],type:"Feature Layer",drawingInfo:{},name:e,hasAttachments:!1,capabilities:"Query",types:[],geometryType:this.param.defaultValue.geometryType,fields:this.param.defaultValue.fields},t},_initDefaultSymbols:function(){var e={style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18},t={style:"esriSLSSolid",color:[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},s={style:"esriSFSSolid",color:[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol||(this.pointSymbol=_.fromJson(e)),this.polylineSymbol||(this.polylineSymbol=_.fromJson(t)),this.polygonSymbol||(this.polygonSymbol=_.fromJson(s))},_createGraphic:function(e){var t,s=e.type,a=null;return a="point"===s||"multipoint"===s?this.pointSymbol:"line"===s||"polyline"===s?this.polylineSymbol:this.polygonSymbol,t=new L(e,a)},_addFeatures:function(e){var t=this._createGraphic(e),s=[];if(this.map.graphics.add(t),s.push(t),this._featureLayer.applyEdits(s,null,null),0===this.analysisLayers.length||this.analysisLayers[this.analysisLayers.length-1]!==this._featureLayer){var a=this.analysisLayers.push(this._featureLayer),r=this._analysisSelect.getOptions();this._analysisSelect.removeOption(r),r=i.map(r,function(e){return e.selected=!1,e}),r.push({value:a,label:this._featureLayer.name,selected:!0}),this._analysisSelect.addOption(r),this._onLayerChanged(a)}this._drawBtn.set("checked",!1)},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),i.forEach(this.analysisLayers,function(e,t){return e===this._featureLayer?(this._analysisSelect.removeOption({value:t+1,label:this._featureLayer.name}),void this.analysisLayers.splice(t,1)):void 0},this)),this._handleDrawBtnChange(!1)},getGPValue:function(){var e=this.analysisLayers[this._analysisSelect.get("value")-1];return this.wrapValueToDeferred(p.constructAnalysisInputLyrObj(e,!0))},_setMapAttr:function(e){this.map=e,this._drawtoolbar=new c(this.map),r.connect(this._drawtoolbar,"onDrawEnd",a.hitch(this,this._addFeatures))}});return w});