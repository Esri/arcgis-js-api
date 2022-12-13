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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],(function(n,t,e){var r={provideDynamicInfogarphicSettings:function(r){var i=r.getInfographic();return i&&e.isDynamicWithFiltering(i.getType())?t(i.getContentInitPromise(),(function(){var e=i.getInnerInfographic();return t(e.getFilterRanges(),(function(t){if(!(e.getNumAreasTotal()>1&&t&&t.length))return null;var r={filter:{filterRanges:t,getNumAreasTotal:function(){return e.getNumAreasTotal()},getNumAreasShown:function(){return e.getNumAreasShown()},onContentUpdated:function(){}}};return n.after(e,"onContentUpdated",(function(){r.filter.onContentUpdated()})),r}))})):null}};return r}));