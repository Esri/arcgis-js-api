/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./content/AttachmentsContent","./content/Content","./content/CustomContent","./content/ExpressionContent","./content/FieldsContent","./content/MediaContent","./content/TextContent"],(function(t,e,n,o,s,i,C,c){"use strict";function a(t){return t instanceof n}const l={base:null,key:"type",typeMap:{attachment:e,media:C,text:c,expression:s,field:i}};t.AttachmentsContent=e,t.BaseContent=n,t.CustomContent=o,t.ExpressionContent=s,t.FieldsContent=i,t.MediaContent=C,t.TextContent=c,t.isContent=a,t.persistableTypes=l,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
