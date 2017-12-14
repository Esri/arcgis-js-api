// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang","dojo/on","dojo/sniff"],function(c,e,t){var o=t("touch"),n=function(c,t,n,u){if(o){var a;switch(t){case"click":a="touchstart,click";break;case"mousedown":a="touchstart,mousedown";break;case"mouseup":a="touchend,mouseup";break;case"clickend":a="touchend,click";break;default:return e(c,t,n,u)}var i=!1,r=function(c){"touchstart"===c.type||"touchend"===c.type?(n.call(this,c),i=!0,setTimeout(function(){i=!1},500)):i||n.call(this,c)};return e(c,a,r,u)}return"clickend"==t&&(t="click"),e(c,t,n,u)};return c.mixin(n,e)});