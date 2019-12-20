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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","dojo/io-query","../kernel","../layers/ArcGISDynamicMapServiceLayer"],function(e,t,a,i,s,r,n){var o=e(n,{declaredClass:"esri.tasks._GPResultImageLayer",constructor:function(e,a){a&&a.imageParameters&&a.imageParameters.extent&&(this.initialExtent=this.fullExtent=a.imageParameters.extent,this.spatialReference=this.initialExtent.spatialReference),this.getImageUrl=t.hitch(this,this.getImageUrl),this.loaded=!0,this.onLoad(this)},getImageUrl:function(e,i,r,n){var o=this._url.path+"?",l=this._params,c=e.spatialReference.wkid;n(o+s.objectToQuery(t.mixin(l,{f:"image",bbox:a.toJson(e.toJson()),bboxSR:c,imageSR:c,size:i+","+r})))}});return i("extend-esri")&&t.setObject("tasks._GPResultImageLayer",o,r),o});