/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e}from"../../core/maybe.js";import r from"../../rest/support/Query.js";async function t(r,t,o){t=t.clone(),r.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=u(r));const i=a(r),n=r.capabilities.query.supportsPagination;t.start=0,t.num=i;let s=null;for(;;){const a=await r.source.queryFeaturesJSON(t,o);if(e(s)?s=a:s.features=s.features.concat(a.features),s.exceededTransferLimit=a.exceededTransferLimit,!n||!a.exceededTransferLimit)break;t.start+=i}return s}function a(e){return u(e)*o(e)}function o(e){return e.capabilities.query.maxRecordCount||2e3}function u(e){return e.capabilities.query.supportsMaxRecordCountFactor?r.MAX_MAX_RECORD_COUNT_FACTOR:1}export{u as getMaxRecordCountFactor,a as getMaximumQuerySize,o as getMaximumRecordCount,t as queryAllJSON};
