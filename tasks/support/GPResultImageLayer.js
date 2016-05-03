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

define(["../../core/declare","dojo/_base/lang","dojo/io-query","../../layers/MapImageLayer"],function(e,a,r,t){var i=e(t,{declaredClass:"esri.tasks.support.GPResultImageLayer",constructor:function(){this.getImageUrl=a.hitch(this,this.getImageUrl)},getImageUrl:function(e,t,i,s){var o=this.parsedUrl.path+"?",n=this._params,g=e.spatialReference.wkid;s(o+r.objectToQuery(a.mixin(n,{f:"image",bbox:JSON.stringify(e.toJSON()),bboxSR:g,imageSR:g,size:t+","+i})))}});return i});