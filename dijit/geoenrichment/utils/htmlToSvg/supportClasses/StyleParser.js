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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define([],(function(){return{_splitTrim:function(r,t,i){var n=String(r).split(t).map((function(r){return r.trim()}));return i?n.filter((function(r){return!!r})):n},parseStyleString:function(r){var t=this;r=r||"";var i=this._splitTrim(r,";",!0),n={};return i.forEach((function(r){var i=t._splitTrim(r,":");n[i[0]]=i[1]})),n}}}));