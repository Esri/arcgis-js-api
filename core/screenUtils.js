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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define([],function(){var t=/^(\d+(\.\d+)?)\s*((px)|(pt))?$/i,n="screenUtils.toPt: input not recognized!",e={DPI:96,pt2px:function(t){return t/72*e.DPI},px2pt:function(t){return 72*t/e.DPI},toPt:function(r){var o=r;if("string"==typeof o)if(t.test(o)){var i=o.match(t),p=Number(i[1]),u=i[3]&&i[3].toLowerCase();o="px"===u?e.px2pt(p):p}else console.warn(n),o=null;return o}};return e});