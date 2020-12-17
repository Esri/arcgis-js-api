/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./content/Content","./content/AttachmentsContent","./content/CustomContent","./content/FieldsContent","./content/MediaContent","./content/TextContent"],(function(t,e,n,o,s,c,C){"use strict";const i={base:null,key:"type",typeMap:{attachment:n,media:c,text:C,field:s}};t.BaseContent=e,t.AttachmentsContent=n,t.CustomContent=o,t.FieldsContent=s,t.MediaContent=c,t.TextContent=C,t.isContent=function(t){return t instanceof e},t.persistableTypes=i,Object.defineProperty(t,"__esModule",{value:!0})}));
