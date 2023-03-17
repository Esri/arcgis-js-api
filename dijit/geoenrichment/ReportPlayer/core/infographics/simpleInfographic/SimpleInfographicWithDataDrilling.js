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

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","dojo/on","dojo/dom-class","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil","../../grid/coreUtils/GridDataUtil","../utils/InfographicJsonUtil","./SimpleInfographic","./SimpleInfographicViewModes","../../dataDrilling/DataDrillingVisualizer","../../dataDrilling/DataDrillingButtonsBuilder","../../supportClasses/WidgetQueryUtil","dojo/i18n!esri/nls/jsapi"],(function(i,e,t,n,o,s,d,l,r,a,u,h,c,g){return g=g.geoenrichment.dijit.ReportPlayer.Infographics,i(r,{allowDataDrilling:!0,ddVisualizer:null,ddButtonsBuilder:null,postCreate:function(){var i=this;this.inherited(arguments),o.isMobileDevice()&&this.own(t(window,"resize, orientationchange",(function(){i._setViewMode({mode:a.VIEW_MAIN,showAnimation:!1})}))),this.ddVisualizer=new u({viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex,domNode:this.domNode,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,getInfographicJson:function(){return i._currentInfographicJson},onClose:function(){i._setViewMode({mode:a.VIEW_MAIN,showAnimation:!0})}}),this.own(this.ddVisualizer),this.ddButtonsBuilder=new h({parentWidget:this}),this._setViewMode({mode:a.VIEW_MAIN,skipVisualizer:!0})},_destroySections:function(){this.ddVisualizer.destroyContent(),this.ddButtonsBuilder.destroyButtons(),this.inherited(arguments)},_createSection:function(i,e,t,n,o,s,d){var l=this.inherited(arguments);return this.allowDataDrilling&&this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&!c.isDataDrillingView(this)&&d&&this._addDataDrillingHandlers(l,l.getTrueTables()[d.variableIndex]),l},_addDataDrillingHandlers:function(i,e){var t=this,o=d.getFieldInfo(e.getFirstCell()),r=l.getDataDrilling(this._currentInfographicJson,o.templateName),u=r&&r.sectionJson?r:null;u&&(n.add(this.domNode,"hasDataDrilling"),i.getTrueTables().forEach((function(i){i.getCells().forEach((function(i){s.setTooltipToNode(i.domNode,null)}))})),this.ddButtonsBuilder.setDataDrillingButtonForSection(i,(function(i){t._setViewMode({mode:a.VIEW_DATA_DRILLING,showAnimation:!0,triggerButton:i,customSectionJson:u.sectionJson,fieldInfo:o})})))},_mode:null,_isAnimationRunning:!1,_setViewMode:function(i){var t=i.mode,n=i.showAnimation,o=i.triggerButton,s=i.customSectionJson,d=i.fieldInfo,l=i.skipVisualizer;if(this._mode!==t&&!this._isAnimationRunning){this._isAnimationRunning=!0;var r=t===a.VIEW_DATA_DRILLING;return e(!l&&this.ddVisualizer.play(r,n,o,s,d),function(){this._isAnimationRunning=!1,this._mode=t,this.onViewModeChanged(t)}.bind(this))}},notifyPanelScaleChanged:function(i){this.ddButtonsBuilder.notifyPanelScaleChanged(i)},onViewModeChanged:function(i){}})}));