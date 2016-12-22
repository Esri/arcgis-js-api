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

define(["require","exports","dojo/Deferred","./now"],function(e,r,o,i){function n(e,r){var n;(!r||0>=r)&&(r=500);var t=new o(function(){n&&clearTimeout(n)}),u=function(){if(!t.isFulfilled()){for(var o=i(),f=!1;!f&&i()-o<r;)f=e()===!0;f?t.resolve():n=setTimeout(u,0)}};return n=setTimeout(u,0),t.promise}return n});