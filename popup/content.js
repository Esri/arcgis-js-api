/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./content/AttachmentsContent","./content/Content","./content/CustomContent","./content/ExpressionContent","./content/FieldsContent","./content/MediaContent","./content/RelationshipContent","./content/TextContent"],(function(t,n,e,o,s,i,C,a,c){"use strict";function l(t){return t instanceof e}const p={base:null,key:"type",typeMap:{attachment:n,media:C,text:c,expression:s,field:i,relationship:a}};t.AttachmentsContent=n,t.BaseContent=e,t.CustomContent=o,t.ExpressionContent=s,t.FieldsContent=i,t.MediaContent=C,t.RelationshipContent=a,t.TextContent=c,t.isContent=l,t.persistableTypes=p,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
