/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{parseUrl as t}from"../utils.js";import{executeAttachmentQuery as r,processAttachmentQueryResult as e}from"./operations/queryAttachments.js";import o from"../support/AttachmentQuery.js";async function a(a,m,n){const s=t(a);return r(s,o.from(m),{...n}).then((t=>e(t.data.attachmentGroups,s.path)))}export{a as executeAttachmentQuery};
