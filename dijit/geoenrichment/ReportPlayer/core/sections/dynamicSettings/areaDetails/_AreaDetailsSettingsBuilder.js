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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],(function(t,n,e){var o={provideAreaDetailsSettings:function(o){var r=o.getInfographic();return r&&r.getType()===e.AREA_DETAILS?n(r.getContentInitPromise(),(function(){var e=r.getInnerInfographic();return n(e.getUpdatePromise(),(function(){if(!e.getNumItemsTotal())return null;var r={hasTitle:e.hasTitle(),filter:{getNumItemsTotal:function(){return e.getNumItemsTotal()},getNumItemsShown:function(){return e.getNumItemsShown()},onContentUpdated:function(){}}};return t.after(o,"fromJson",(function(){var i=o.getInfographic();n(i.getContentInitPromise(),(function(){e=i.getInnerInfographic(),t.after(e,"onContentUpdated",(function(){r.filter.onContentUpdated()}))}))})),t.after(e,"onContentUpdated",(function(){r.filter.onContentUpdated()})),r}))})):null}};return o}));
