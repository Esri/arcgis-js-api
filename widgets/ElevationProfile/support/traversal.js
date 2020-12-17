/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function*n(e,t){if(e>=t)return;const o=e+Math.floor((t-e)/2);yield o;const r=n(e,o),u=n(o+1,t);for(;;){const e=r.next(),n=u.next();if(e.done&&n.done)break;e.done||(yield e.value),n.done||(yield n.value)}}e.getIndices=function(e,t,o=[]){if(e>=t)return o;if(o.push(e),t-e<2)return o;const r=t-1;o.push(r);const u=n(e+1,r);for(;;){const e=u.next();if(e.done)break;o.push(e.value)}return o},Object.defineProperty(e,"__esModule",{value:!0})}));
