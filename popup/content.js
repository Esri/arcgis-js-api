/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./content/AttachmentsContent","./content/Content","./content/CustomContent","./content/FieldsContent","./content/MediaContent","./content/TextContent"],(function(t,e,n,o,s,c,C){"use strict";function i(t){return t instanceof n}const a={base:null,key:"type",typeMap:{attachment:e,media:c,text:C,field:s}};t.AttachmentsContent=e,t.BaseContent=n,t.CustomContent=o,t.FieldsContent=s,t.MediaContent=c,t.TextContent=C,t.isContent=i,t.persistableTypes=a,Object.defineProperty(t,"__esModule",{value:!0})}));
