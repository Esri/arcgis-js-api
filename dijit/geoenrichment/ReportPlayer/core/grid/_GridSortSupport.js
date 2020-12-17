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

define(["dojo/_base/declare","./coreUtils/sorting/GridSortUtil"],(function(t,n){return t(null,{presetSorting:null,ignorePresetSorting:!1,allowSorting:!1,canSortCellFunc:null,_applySortingToStoreData:function(){!this.ignorePresetSorting&&n.applySortingToStoreData(this)},_buildSortControls:function(){n.buildSortControls(this)},getSorting:function(){return n.getSorting(this)},setSorting:function(t,o){return n.setSorting(this,t,o)},getSortRowIndexMapping:function(){return n.getSortRowIndexMapping(this)},onSortingChanged:function(t){}})}));