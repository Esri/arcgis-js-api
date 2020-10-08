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

define(["require","exports","../../core/accessorSupport/ensureType","../elements/AttachmentElement","../elements/Element","../elements/FieldElement","../elements/RelationshipElement"],(function(e,t,n,r,p,u,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ensureType=t.toJSON=t.fromJSON=t.buildTypeMaps=void 0,t.buildTypeMaps=function(e){return{typesWithGroup:{base:p.Element,key:"type",typeMap:{attachment:r,field:u,group:e,relationship:o}},typesWithoutGroup:{base:p.Element,key:"type",typeMap:{attachment:r,field:u,relationship:o}}}},t.fromJSON=function(e,t,n){if(void 0===n&&(n=!0),!e)return null;var r=n?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter((function(e){return r[e.type]})).map((function(e){return r[e.type].fromJSON(e)}))},t.toJSON=function(e,t,n){if(void 0===n&&(n=!0),!e)return null;var r=n?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter((function(e){return r[e.type]})).map((function(e){return e.toJSON()}))},t.ensureType=function(e,t,r){return void 0===r&&(r=!0),e?e.map((function(e){return n.ensureOneOfType(r?t.typesWithGroup:t.typesWithoutGroup,e)})):null}}));