// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,o){return e(null,{isVariableInShape:!1,iconTableIndex:-1,descTableIndex:-1,backgroundColor:null,_section:null,setSection:function(e){this._section=e},getIconTable:function(){return this._section.getTables()[this.iconTableIndex]},getOutsideShapeTextColor:function(){var e=[],t=this.getIconTable().getFirstCell().content;if(t.isShape){var l=t.getShapeStyle();l.fillColor&&(void 0===l.fillAlpha||l.fillAlpha>.05)&&e.push(l.fillColor),l.borderColor&&l.borderWidth>0&&(void 0===l.borderAlpha||l.borderAlpha>.1)&&e.push(l.borderColor)}e.push(this._section.viewModel.getStaticInfographicDefaultStyles().variableLabelStyle.color);var i,r,n=this._section.viewModel.getDocumentDefaultStyles();return[this.backgroundColor,n.backgroundColor].some((function(e){if(e&&!o.isTransparent(e))return i=e,!0})),e.some((function(e){if(e&&!o.isTransparent(e)&&!o.colorsEqual(e,i))return r=e,!0})),r||n.color}})}));