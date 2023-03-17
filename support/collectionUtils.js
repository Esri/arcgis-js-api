/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/CollectionFlattener"],(function(e,t){"use strict";function n(e){return new t({getCollections:()=>[e.tables,e.layers],getChildrenFunction:e=>{const t=[];return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return!!t&&"tables"in t&&t.tables.includes(e)}})}e.createFlattenedTablesCollection=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
