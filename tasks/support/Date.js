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

define(["../../core/declare","dojo/date/locale","../../core/JSONSupporter"],function(t,e,a){var r=t(a,{declaredClass:"esri.tasks.support.Date",date:new Date,format:"EEE MMM dd HH:mm:ss zzz yyyy",_dateReader:function(t,a){return e.parse(t,{selector:"date",datePattern:a.format||this.format})},toJSON:function(){return{date:e.format(this.date,{selector:"date",datePattern:this.format}),format:this.format}}});return r});