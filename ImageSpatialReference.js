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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./lang","./SpatialReference"],function(i,s,n,e,c,t){var r=i(t,{declaredClass:"esri.ImageSpatialReference",constructor:function(i){i&&s.isObject(i)&&s.mixin(this,i)},icsid:null,icsns:null,ics:null,_isWebMercator:function(){return!1},_isWrappable:function(){return!1},equals:function(i){var s=!1;return i&&(this.icsid&&i.icsid?(s=this.icsid===i.icsid,(this.icsns||i.icsns)&&(s=s&&this.icsns===i.icsns)):this.ics&&i.ics&&(s=this.ics===i.ics)),s},toJson:function(i){var s=null,n=c.isDefined;return i=!n(i)||i,n(this.icsid)?(s={icsid:this.icsid},n(this.icsns)&&(s.icsns=this.icsns)):n(this.ics)&&(s={ics:this.ics}),n(this.url)&&n(s)&&i&&(s.url=this.url),s}});return n("extend-esri")&&(e.ImageSpatialReference=r),r});