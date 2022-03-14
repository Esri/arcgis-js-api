// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,a,t,r){var i={composeAttributesFromFieldInfos:function(e,a){return e&&e.filter((function(e){return e.visible})).map((function(e){return{name:e.fieldName,alias:e.label,places:e.format&&e.format.places,digitSeparator:e.format&&e.format.digitSeparator,dateFormat:e.format&&e.format.dateFormat,value:a[e.fieldName],type:(t=e.format,t&&t.dateFormat?"esriFieldTypeDate":t&&void 0!==t.places?t.places>0?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString"),domain:null,length:void 0};var t}))},formatAttributeValue:function(e,i){var o,l=(i=i||{}).hasOwnProperty("unavailableDataValue")?i.unavailableDataValue:"";if(!e||null===e.value||void 0===e.value)return l;if(!i.skipFormattedValue&&e.formattedValue&&e.formattedValue!==l)return e.formattedValue;var n=e.domain&&"codedValue"===e.domain.type?new a(e.domain):null;if(n)(o=n.getName(e.value))||(o=e.value+"");else if("esriFieldTypeString"===e.type)o=e.value;else if("esriFieldTypeDate"===e.type)o=t.formatDateShort(e.value);else{var u=i.format;o=r.formatNumber(e.value,{places:u&&void 0!==u.decimals?u.decimals:e.places,noSeparator:u&&void 0!==u.useThousandsSeparator?!u.useThousandsSeparator:!1===e.digitSeparator,preserveTrailingZeroes:!0})}return null==o?l:o},formatAttributeValueForStudyArea:function(e){var a;return e&&null!==e.value&&void 0!==e.value||(a=!0),a||(a=e.domain&&"codedValue"===e.domain.type||"esriFieldTypeDate"===e.type),a?i.formatAttributeValue(e):e.value},getAttributeTypeForStudyArea:function(e){return"esriFieldTypeDate"===e.type?"esriFieldTypeString":e.type},attributeToJson:function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain)),places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}},attributeFromJson:function(e){return{name:e.name,alias:e.alias,type:e.type,value:e.value,domain:e.domain,places:e.places,digitSeparator:e.digitSeparator,dateFormat:e.dateFormat,length:e.length}}};return i}));