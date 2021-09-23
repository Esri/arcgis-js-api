/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../ensureType","./serializableProperty/originAliases","./serializableProperty/reader","./serializableProperty/shorthands","./serializableProperty/writer"],(function(r,e,i,n,t,o){"use strict";function s(r,e){return c(r,"read",e)}function a(r,e){return c(r,"write",e)}function c(r,e,i){let n=r&&r.json;if(r&&r.json&&r.json.origins&&i){const t=r.json.origins[i.origin];t&&("any"===e||e in t)&&(n=t)}return n}function p(r){const e=y(r);if(r.json.origins)for(const i in r.json.origins){const t=r.json.origins[i];n.create(e,t,!1),o.create(e,t)}n.create(e,r.json,!0),o.create(e,r.json)}function y(r){return r.type?f(r):u(r)}function f(r){if(!r.type)return;let i=0,n=r.type;for(;Array.isArray(n)&&!e.isOneOf(n);)n=n[0],i++;return{type:n,ndimArray:i}}function u(r){if(!r.types)return;let e=0,i=r.types;for(;Array.isArray(i);)i=i[0],e++;return{types:i,ndimArray:e}}const l={processPrototypePropertyMetadata(r,e){t.process(e)&&(i.process(e),p(e))}};r.SerializablePropertyExtension=l,r.default=l,r.originSpecificPropertyDefinition=c,r.originSpecificReadPropertyDefinition=s,r.originSpecificWritePropertyDefinition=a,Object.defineProperty(r,"__esModule",{value:!0})}));
