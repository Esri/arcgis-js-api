// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../layers/support/RangeDomain","../FieldConfig","../FieldGroupConfig"],(function(e,i,n,t,r){"use strict";function l(e,i,o,u){return void 0===u&&(u=!0),e.map((function(e){if("field"===e.type)return function(e,i,r){var l=e.description,o=e.domain,u=e.editable,a=e.fieldName,p=e.hint,s=e.input,d=e.label,m=e.requiredExpression,f=e.visibilityExpression,y=i[m]||null,g=i[f]||null,c=new t({description:l,domain:o,editable:u,hint:p,label:d,name:a,requiredExpression:y,visibilityExpression:g});if(s)if("text-area"===s.type||"text-box"===s.type)c.editorType=s.type,c.minLength=s.minLength,c.maxLength=s.maxLength;else if("datetime-picker"===s.type){c.editorType=s.type,c.includeTime=s.includeTime;var v=s.max,x=s.min;if(v||x){var b="range"===(null==o?void 0:o.type)?Math.min(null==v?void 0:v.getTime(),o.maxValue):null==v?void 0:v.getTime(),h="range"===(null==o?void 0:o.type)?Math.max(null==x?void 0:x.getTime(),o.minValue):null==x?void 0:x.getTime();c.domain=new n({maxValue:b,minValue:h,name:"__internal-range-domain-based-on-datetime-picker-input__"})}}else r.push({type:"unsupported-input-type",details:s});return c}(e,i,o);if("group"===e.type){if(!u)return o.push({type:"nested-group",details:e}),null;var a=i[e.visibilityExpression]||null;return new r({description:e.description,state:e.initialState,fieldConfig:l(e.elements,i,o,!1),label:e.label,visibilityExpression:a})}return o.push({type:"unsupported-element-type",details:e}),null})).filter((function(e){return!!e}))}Object.defineProperty(i,"__esModule",{value:!0}),i.fieldConfigsFromFormTemplate=void 0,i.fieldConfigsFromFormTemplate=function(e){var i,n={},t=[];return null===(i=e.expressionInfos)||void 0===i||i.map((function(e){return n[e.name]=e.expression})),{config:l(e.elements,n,t),encounteredUnsupportedTypes:t}}}));