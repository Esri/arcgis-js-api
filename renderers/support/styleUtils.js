/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Warning","../../core/promiseUtils","../../core/asyncUtils"],(function(e,r,t,n){"use strict";e.loadStyleRenderer=async function(e,i,o){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const c=await n.result(s.populateFromStyle());if(t.throwIfAborted(o),!1===c.ok){const t=c.error;i&&i.messages&&i.messages.push(new r("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:i})),e.clear("renderer",i.origin)}}},Object.defineProperty(e,"__esModule",{value:!0})}));
