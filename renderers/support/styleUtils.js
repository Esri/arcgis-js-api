/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{result as e}from"../../core/asyncUtils.js";import{throwIfAborted as r}from"../../core/promiseUtils.js";import o from"../../core/Warning.js";async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await e(s.populateFromStyle());if(r(n),!1===a.ok){const e=a.error;i&&i.messages&&i.messages.push(new o("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i.origin)}}}export{t as loadStyleRenderer};
