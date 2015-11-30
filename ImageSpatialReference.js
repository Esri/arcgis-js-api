// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./lang","./SpatialReference"],function(i,e,s,r,c,n){var t=i(n,{declaredClass:"esri.ImageSpatialReference",constructor:function(i){i&&(e.isObject(i)&&e.mixin(this,i),this.url||console.error("ImageSpatialReference: must provide image service URL."))},icsid:null,ics:null,_isWebMercator:function(){return!1},_isWrappable:function(){return!1},equals:function(i){var e=!1;return i&&(this.icsid&&i.icsid?e=this.icsid===i.icsid:this.ics&&i.ics&&(e=this.ics===i.ics)),e},toJson:function(i){var e=null,s=c.isDefined;return i=s(i)?i:!0,s(this.icsid)?e={icsid:this.icsid}:s(this.ics)&&(e={ics:this.ics}),s(this.url)&&s(e)&&i&&(e.url=this.url),e}});return s("extend-esri")&&(r.ImageSpatialReference=t),t});