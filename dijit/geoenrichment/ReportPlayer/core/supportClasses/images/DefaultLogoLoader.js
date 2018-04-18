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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/when","./DefaultLogoGraphicReportGeneric","./DefaultLogoGraphicReportLight","./DefaultLogoGraphicReportDark","esri/dijit/geoenrichment/utils/ColorUtil"],function(r,t,o,e,i){return{_identifyDefaultLogoBackground:function(r){return!r||i.isTransparent(r.backgroundColor)?"transparent":i.isLightColor(r.backgroundColor)?"light":"dark"},getDefaultLogo:function(i){switch(this._identifyDefaultLogoBackground(i)){case"light":return r(e);case"dark":return r(o);default:return r(t)}}}});