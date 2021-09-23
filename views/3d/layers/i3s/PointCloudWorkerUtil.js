/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../renderers/PointCloudClassBreaksRenderer","../../../../renderers/PointCloudStretchRenderer","../../../../renderers/PointCloudUniqueValueRenderer","./I3SBinaryReader","./LEPCC"],(function(e,o,r,t,n,l,i){"use strict";function s(e,o,l,i){const{rendererJSON:s,isRGBRenderer:a}=e;let u=null,c=null;if(o&&a)u=o;else if(o&&"pointCloudUniqueValueRenderer"===s.type){c=n.fromJSON(s);const e=c.colorUniqueValueInfos;u=new Uint8Array(3*i);const r=d(c.fieldTransformType);for(let t=0;t<i;t++){const n=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.indexOf(n)>=0){u[3*t]=e[o].color.r,u[3*t+1]=e[o].color.g,u[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===s.type){c=t.fromJSON(s);const e=c.stops;u=new Uint8Array(3*i);const r=d(c.fieldTransformType);for(let t=0;t<i;t++){const n=r?r(o[t]):o[t],l=e.length-1;if(n<e[0].value)u[3*t]=e[0].color.r,u[3*t+1]=e[0].color.g,u[3*t+2]=e[0].color.b;else if(n>=e[l].value)u[3*t]=e[l].color.r,u[3*t+1]=e[l].color.g,u[3*t+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(n<e[o].value){const r=(n-e[o-1].value)/(e[o].value-e[o-1].value);u[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),u[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),u[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===s.type){c=r.fromJSON(s);const e=c.colorClassBreakInfos;u=new Uint8Array(3*i);const t=d(c.fieldTransformType);for(let r=0;r<i;r++){const n=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(n>=e[o].minValue&&n<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else{u=new Uint8Array(3*i);for(let e=0;e<u.length;e++)u[e]=255}if(l&&c&&c.colorModulation){const e=c.colorModulation.minValue,o=c.colorModulation.maxValue,r=.3;for(let t=0;t<i;t++){const n=l[t],i=n>=o?1:n<=e?r:r+(1-r)*(n-e)/(o-e);u[3*t]=i*u[3*t],u[3*t+1]=i*u[3*t+1],u[3*t+2]=i*u[3*t+2]}}return u}function a(e,r){if(null==e.encoding||""===e.encoding){const t=l.createGeometryIndexFromSchema(r,e);if(o.isNone(t.vertexAttributes.position))return;const n=l.createTypedView(r,t.vertexAttributes.position),i=t.header.fields,s=[i.offsetX,i.offsetY,i.offsetZ],a=[i.scaleX,i.scaleY,i.scaleZ],u=n.length/3,c=new Float64Array(3*u);for(let e=0;e<u;e++)c[3*e]=n[3*e]*a[0]+s[0],c[3*e+1]=n[3*e+1]*a[1]+s[1],c[3*e+2]=n[3*e+2]*a[2]+s[2];return c}if("lepcc-xyz"===e.encoding)return i.decodeXYZ(r).result}function u(e,r,t){return o.isSome(e)&&e.attributeInfo.useElevation?c(r,t):o.isSome(e)?l.readBinaryAttribute(e.attributeInfo.storageInfo,e.buffer,t):null}function c(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function f(e,o,r,t,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:o}=t[e],r=n[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;-1!==o.values.indexOf(r)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=b(o.requiredSetBits),t=b(o.requiredClearBits);(r&e)===e&&0==(r&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,n=t>1,i=1===e,s=e===t;let a=!1;for(const r of o.includedReturns)if("last"===r&&s||"firstOfMany"===r&&i&&n||"lastOfMany"===r&&s&&n||"single"===r&&!n){a=!0;break}a||(l=!1);break}}}l&&(r[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],o[3*i]=o[3*s],o[3*i+1]=o[3*s+1],o[3*i+2]=o[3*s+2],i++)}return i}function d(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function b(e){let o=0;for(const r of e||[])o|=1<<r;return o}e.elevationFromPositions=c,e.evaluateRenderer=s,e.filterInPlace=f,e.getAttributeValues=u,e.readGeometry=a,Object.defineProperty(e,"__esModule",{value:!0})}));
