/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,o,t=[]){if(n>=o)return t;t.push(n);if(o-n<2)return t;const r=o-1;t.push(r);const u=e(n+1,r);for(;;){const n=u.next();if(n.done)break;t.push(n.value)}return t}function*e(n,o){if(n>=o)return;const t=n+Math.floor((o-n)/2);yield t;const r=e(n,t),u=e(t+1,o);for(;;){const n=r.next(),e=u.next();if(n.done&&e.done)break;n.done||(yield n.value),e.done||(yield e.value)}}export{n as breadthFirstBinaryPartitioning};
