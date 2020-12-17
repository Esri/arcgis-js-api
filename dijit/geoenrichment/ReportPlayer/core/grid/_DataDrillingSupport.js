// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","../dataDrilling/DataDrillingVisualizer","../dataDrilling/DataDrillingButtonsBuilder","./coreUtils/GridDataUtil","../supportClasses/WidgetQueryUtil"],(function(i,t,e,l,n){return i(null,{_ddButtonsBuilder:null,_trySetupDataDrilling:function(i){var t=this;this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&!n.isDataDrillingView(this)&&l.getDataDrilling(i)&&(this._ddButtonsBuilder=this._ddButtonsBuilder||new e({parentWidget:this}),this._ddButtonsBuilder.setDataDrillingButtonForTableCell(i,(function(){t._showDataDrilling(i)})))},_showDataDrilling:function(i){var e=new t({viewModel:this.viewModel,theme:this.theme,parentWidget:this,domNode:this.domNode,currentFeatureIndex:this.currentFeatureIndex,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,onClose:function(){e.play(!1,!0)}});e.play(!0,!0,null,l.getDataDrilling(i).sectionJson)}})}));