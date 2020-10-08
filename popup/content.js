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

define(["require","exports","./content/AttachmentsContent","./content/Content","./content/CustomContent","./content/FieldsContent","./content/MediaContent","./content/TextContent"],(function(t,e,n,o,s,C,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.persistableTypes=e.isContent=e.TextContent=e.MediaContent=e.FieldsContent=e.CustomContent=e.BaseContent=e.AttachmentsContent=void 0,e.AttachmentsContent=n,e.BaseContent=o,e.CustomContent=s,e.FieldsContent=C,e.MediaContent=i,e.TextContent=a,e.isContent=function(t){return t instanceof o},e.persistableTypes={base:null,key:"type",typeMap:{attachment:n,media:i,text:a,field:C}}}));