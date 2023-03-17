/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,n,o=[]){if(e>=n)return o;o.push(e);if(n-e<2)return o;const r=n-1;o.push(r);const i=t(e+1,r);for(;;){const e=i.next();if(e.done)break;o.push(e.value)}return o}function*t(e,n){if(e>=n)return;const o=e+Math.floor((n-e)/2);yield o;const r=t(e,o),i=t(o+1,n);for(;;){const e=r.next(),n=i.next();if(e.done&&n.done)break;e.done||(yield e.value),n.done||(yield n.value)}}e.breadthFirstBinaryPartitioning=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
