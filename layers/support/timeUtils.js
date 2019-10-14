// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../TimeExtent","../../core/compilerUtils","../../core/jsonMap"],function(e,t,s,r,i){function n(e,t,s){var r=new Date(e.getTime());if(t&&s){var i=a[s],n=i.getter,l=i.setter,u=i.multiplier;r[l](r[n]()+t*u)}return r}function l(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return r.neverReached(t),null}}Object.defineProperty(t,"__esModule",{value:!0});var a={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};t.timeUnitKebabDictionary=i.strict()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:null}),t.offsetDate=n,t.combinedViewLayerTimeExtentProperty={type:s,dependsOn:["view?.timeExtent","layer?.timeInfo","layer?.timeExtent","layer?.useViewTime"],readOnly:!0,get:function(){if(!this.layer||!this.layer.timeInfo)return null;var e=this.view?this.view.timeExtent:null,t=this.layer.useViewTime?e:this.layer.timeExtent,s=this._get("timeExtent");return t&&t.equals(s)?s:t}},t.millisecondsPerTimeUnit={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},t.truncateDate=l});