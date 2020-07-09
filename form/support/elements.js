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

define(["require","exports","../../core/accessorSupport/ensureType","../elements/AttachmentElement","../elements/Element","../elements/FieldElement","../elements/GroupElement","../elements/RelationshipElement"],(function(e,t,n,r,p,a,i,u){Object.defineProperty(t,"__esModule",{value:!0});var l={base:p.Element,key:"type",typeMap:{attachment:r,field:a,group:i,relationship:u}},o={base:l.base,key:l.key,typeMap:{attachment:l.typeMap.attachment,field:l.typeMap.field,relationship:l.typeMap.relationship}};t.fromJSON=function(e,t){if(void 0===t&&(t=!0),!e)return null;var n=t?l.typeMap:o.typeMap;return e.filter((function(e){return n[e.type]})).map((function(e){return n[e.type].fromJSON(e)}))},t.toJSON=function(e,t){if(void 0===t&&(t=!0),!e)return null;var n=t?l.typeMap:o.typeMap;return e.filter((function(e){return n[e.type]})).map((function(e){return e.toJSON()}))},t.ensureType=function(e,t){return void 0===t&&(t=!0),e?e.map((function(e){return n.ensureOneOfType(t?l:o,e)})):null}}));