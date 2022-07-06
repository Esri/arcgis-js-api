/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{px2pt as t}from"../../core/screenUtils.js";import{getTextBounds as e}from"../../views/2d/support/engineHelpers.js";async function n(n,o){await o.when();const r=n.clone();r.text="9";const s=await e(r,o),i=4;return t(s.width)*i}export{n as default};
