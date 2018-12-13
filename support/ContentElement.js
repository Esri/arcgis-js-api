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

define(["require","exports","./ContentElement/Attachments","./ContentElement/ContentElement","./ContentElement/Fields","./ContentElement/Media","./ContentElement/Text"],function(e,t,n,l,o,m,C){function E(e){return e instanceof t.BaseContentElement}Object.defineProperty(t,"__esModule",{value:!0}),t.AttachmentsContentElement=n,t.BaseContentElement=l,t.FieldsContentElement=o,t.MediaContentElement=m,t.TextContentElement=C,t.isContentElement=E,t.types={base:null,key:"type",typeMap:{attachment:t.AttachmentsContentElement,fields:t.FieldsContentElement,media:t.MediaContentElement,text:t.TextContentElement}}});