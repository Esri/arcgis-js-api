/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./legacyTimeZoneMap","../chunks/datetime"],(function(e,t,n){"use strict";function o(e,n="system"){if(!e||!t.legacyTimeZoneMap.has(e.timeZone))return n;const o=t.legacyTimeZoneMap.get(e.timeZone);return a(e.timeZone)||e.respectsDaylightSaving?o:i(o)}function i(e){const t=n.DateTime.local().setZone(e),o=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);if(0===o)return"Etc/UTC";return`Etc/GMT${n.FixedOffsetZone.instance(-o).formatOffset(0,"narrow")}`}function a(e){return e.startsWith("UTC")}e.convertLegacyTimeZone=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
