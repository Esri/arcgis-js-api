// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../TimeExtent","../../core/compilerUtils","../../core/jsonMap"],function(e,t,s,i,r){function n(e,t,s){var i=new Date(e.getTime());if(t&&s){var r=u[s];i[r.setter](i[r.getter]()+t*r.multiplier)}return i}function a(e,s){switch(s){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getTime()-e.getTime()%t.millisecondsPerTimeUnit.seconds);case"minutes":return new Date(e.getTime()-e.getTime()%t.millisecondsPerTimeUnit.minutes);case"hours":return new Date(e.getTime()-e.getTime()%t.millisecondsPerTimeUnit.hours);case"days":return new Date(e.getUTCFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getUTCFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getUTCFullYear(),e.getMonth(),1);case"years":return new Date(e.getUTCFullYear(),0,1);case"decades":return new Date(e.getUTCFullYear()-e.getUTCFullYear()%10,0,1);case"centuries":return new Date(e.getUTCFullYear()-e.getUTCFullYear()%100,0,1);default:return i.neverReached(s),null}}function l(e,t){var s=new Date(e.getTime());switch(t.unit){case"milliseconds":s.setUTCMilliseconds(s.getUTCMilliseconds()+t.value);break;case"seconds":s.setSeconds(s.getSeconds()+t.value);break;case"minutes":s.setMinutes(s.getMinutes()+t.value);break;case"hours":s.setHours(s.getHours()+t.value);break;case"days":s.setDate(s.getDate()+t.value);break;case"weeks":s.setDate(s.getDate()+7*t.value);break;case"months":s.setMonth(s.getMonth()+t.value);break;case"years":s.setFullYear(s.getFullYear()+t.value);break;case"decades":s.setFullYear(s.getFullYear()+10*t.value);break;case"centuries":s.setFullYear(s.getFullYear()+100*t.value);break;default:i.neverReached(t.unit)}return s}Object.defineProperty(t,"__esModule",{value:!0});var u={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};t.timeUnitKebabDictionary=r.strict()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:null}),t.offsetDate=n,t.combinedViewLayerTimeExtentProperty={type:s,dependsOn:["view?.timeExtent","layer?.timeInfo","layer?.timeExtent","layer?.useViewTime"],readOnly:!0,get:function(){if(!this.layer||!this.layer.timeInfo)return null;var e=this.view?this.view.timeExtent:null,t=this.layer.useViewTime?e:this.layer.timeExtent,s=this._get("timeExtent");return t&&t.equals(s)?s:t}},t.millisecondsPerTimeUnit={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},t.truncateDate=a,t.appendDate=l});