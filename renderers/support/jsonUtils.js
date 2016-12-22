// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Warning","../SimpleRenderer","../UniqueValueRenderer","../ClassBreaksRenderer"],function(e,n,r,u){function t(e){return e?s[e.type]||null:null}var s={simple:n,uniqueValue:r,classBreaks:u},o={fromJson:function(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(n){console.warn(n.stack)}return o.fromJSON(e)},read:function(n,r,u){if(n&&(n.styleName||n.styleUrl)&&"uniqueValue"!==n.type)return u&&u.messages&&u.messages.push(new e("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+n.type+"'",{definition:n,context:u})),null;var s=t(n);if(s){var o=new s;return o.read(n,u),o}return u&&u.messages&&n&&u.messages.push(new e("renderer:unsupported","Renderers of type '"+(n.type||"unknown")+"' are not supported",{definition:n,context:u})),null},fromJSON:function(e){var n=t(e);return n?n.fromJSON(e):null}};return o});