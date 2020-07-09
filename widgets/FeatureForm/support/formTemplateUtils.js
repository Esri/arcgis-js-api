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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../FieldConfig","../FieldGroupConfig"],(function(e,i,n,t){function r(e,i,l,o){return void 0===o&&(o=!0),e.map((function(e){if("field"===e.type)return function(e,i,t){var r=e.description,l=e.domain,o=e.editable,p=e.fieldName,s=e.hint,u=e.input,d=e.label,a=e.requiredExpression,f=e.visibilityExpression,m=i[a]||null,y=i[f]||null,c=new n({description:r,domain:l,editable:o,hint:s,label:d,name:p,requiredExpression:m,visibilityExpression:y});return u&&("text-area"===u.type||"text-box"===u.type?(c.editorType=u.type,c.minLength=u.minLength,c.maxLength=u.maxLength):t.push({type:"unsupported-input-type",details:u})),c}(e,i,l);if("group"===e.type){if(!o)return l.push({type:"nested-group",details:e}),null;var p=i[e.visibilityExpression]||null;return new t({description:e.description,state:e.initialState,fieldConfig:r(e.elements,i,l,!1),label:e.label,visibilityExpression:p})}return l.push({type:"unsupported-element-type",details:e}),null})).filter((function(e){return!!e}))}Object.defineProperty(i,"__esModule",{value:!0}),i.fieldConfigsFromFormTemplate=function(e){var i,n={},t=[];return null===(i=e.expressionInfos)||void 0===i||i.map((function(e){return n[e.name]=e.expression})),{config:r(e.elements,n,t),encounteredUnsupportedTypes:t}}}));