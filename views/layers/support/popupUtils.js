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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(e,i){function t(e){var i=e.popupTemplate,t=i.requiredFields,d=i.lastEditInfoEnabled,n=e.objectIdField,o=e.editFieldsInfo;if(t&&1===t.length&&"*"===t[0])return t;var u=t&&t.filter(function(i){return r(e,i)});return o&&d&&(o.creatorField&&u.push(o.creatorField),o.creationDateField&&u.push(o.creationDateField),o.editorField&&u.push(o.editorField),o.editDateField&&u.push(o.editDateField)),u&&n&&r(e,n)&&-1===u.indexOf(n)&&u.push(n),u}function r(e,i){if(!e.fields)return!1;var t=i.toLowerCase();return e.fields.some(function(e){return e.name.toLowerCase()===t})}Object.defineProperty(i,"__esModule",{value:!0}),i.getRequiredFields=t});