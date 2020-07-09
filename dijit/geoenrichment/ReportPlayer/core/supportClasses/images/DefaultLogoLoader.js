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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/utils/ColorUtil"],(function(o,r,e){return{_identifyDefaultLogoBackground:function(o){return!o||e.isTransparent(o.backgroundColor)?"transparent":e.isLightColor(o.backgroundColor)?"light":"dark"},_loadLogo:function(e){var t=new r;return o(["./"+e],(function(o){t.resolve(o)})),t.promise},getDefaultLogo:function(o){switch(this._identifyDefaultLogoBackground(o)){case"light":return this._loadLogo("DefaultLogoGraphicReportDark");case"dark":return this._loadLogo("DefaultLogoGraphicReportLight");default:return this._loadLogo("DefaultLogoGraphicReportGeneric")}}}}));