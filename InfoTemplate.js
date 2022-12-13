// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./lang"],(function(t,n,e,i,o){var s=t(null,{declaredClass:"esri.InfoTemplate",constructor:function(t,e){t&&n.isObject(t)&&!n.isFunction(t)?n.mixin(this,t):(this.title=t||"${*}",this.content=e||"${*}")},setTitle:function(t){return this.title=t,this},setContent:function(t){return this.content=t,this},toJson:function(){return o.fixJson({title:this.title,content:this.content})}});return e("extend-esri")&&(i.InfoTemplate=s),s}));