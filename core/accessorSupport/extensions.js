/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./extensions/serializableProperty"],(function(t,e){"use strict";const o=[e.SerializablePropertyExtension];t.instanceCreated=function(t,e){const s=Object.getOwnPropertyNames(e);for(const r of o)r.instanceCreated&&r.instanceCreated(t,e,s)},t.processClassMetadatas=function(t,e){for(const s of o)if(s.processClassPropertyMetadata)for(const o in t){const r=t[o];s.processClassPropertyMetadata(o,r,t,e)}},t.processPrototypeMetadatas=function(t,e){for(const s of o)if(s.processPrototypePropertyMetadata)for(const o in t){const r=t[o];s.processPrototypePropertyMetadata(o,r,t,e)}},Object.defineProperty(t,"__esModule",{value:!0})}));
