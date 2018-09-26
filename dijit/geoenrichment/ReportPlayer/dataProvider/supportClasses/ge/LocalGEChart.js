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

define(["dojo/_base/declare","./LocalGEBase","../AreaDataUtil"],function(a,e,t){return a(e,{_cacheData:!0,_areaIdToFeatureCache:null,constructor:function(a,e,r,i){var o;if(r){var s=t.combineAreaDataObjectCalculators(e,a,{removeDuplicates:!0});o={},o[a]={data:s.thisAreas[0],comparisonLevels:s.comparisonLevels}}else o=e[i||0];this._initGE(null,o,a)},getFieldValueAt:function(a,e){if(!this._areaIdToFeatureCache){this._areaIdToFeatureCache=[];this.getData().features.forEach(function(a){a.attributes.StdGeographyID&&(this._areaIdToFeatureCache[a.attributes.StdGeographyID]=a)},this)}var t=this._areaIdToFeatureCache[e];return t&&t.attributes[a]||0}})});