/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./content/AttachmentsContent","./content/Content","./content/CustomContent","./content/ExpressionContent","./content/FieldsContent","./content/MediaContent","./content/TextContent"],(function(t,n,e,o,s,i,C,c){"use strict";function a(t){return t instanceof e}const p={base:null,key:"type",typeMap:{attachment:n,media:C,text:c,expression:s,field:i}};t.AttachmentsContent=n,t.BaseContent=e,t.CustomContent=o,t.ExpressionContent=s,t.FieldsContent=i,t.MediaContent=C,t.TextContent=c,t.isContent=a,t.persistableTypes=p,Object.defineProperty(t,"__esModule",{value:!0})}));
