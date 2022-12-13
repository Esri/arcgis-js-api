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

define(["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","dojo/has","../kernel"],(function(t,e,a,o,r){var s=t(null,{declaredClass:"esri.tasks.Date",constructor:function(t){t&&(t.format&&(this.format=t.format),this.date=a.parse(t.date,{selector:"date",datePattern:this.format}))},date:new Date,format:"EEE MMM dd HH:mm:ss zzz yyyy",toJson:function(){return{date:a.format(this.date,{selector:"date",datePattern:this.format}),format:this.format}}});return o("extend-esri")&&e.setObject("tasks.Date",s,r),s}));