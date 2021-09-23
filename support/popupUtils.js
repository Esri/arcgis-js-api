/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../PopupTemplate","../layers/support/fieldUtils","../popup/content/AttachmentsContent","../popup/content/Content","../popup/content/CustomContent","../popup/content/FieldsContent","../popup/content/MediaContent","../popup/content/TextContent","../popup/FieldInfo","../popup/support/FieldInfoFormat"],(function(e,t,i,n,o,l,a,s,r,d,p){"use strict";const u=["oid","global-id"],c=["oid","global-id","guid"];function f({displayField:e,editFieldsInfo:i,fields:n,objectIdField:o,title:l},a){if(!n)return null;const s=I({editFieldsInfo:i,fields:n,objectIdField:o},a);if(!s.length)return null;const r=_({titleBase:l,fields:n,displayField:e}),d=L();return new t({title:r,content:d,fieldInfos:s})}const m=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],F=(e,{editFieldsInfo:t,objectIdField:i,visibleFieldNames:n})=>n?n.has(e.name):!y(e.name,t)&&((!i||e.name!==i)&&(!(u.indexOf(e.type)>-1)&&!m.some((t=>t.test(e.name)))));function b(e,t){const i=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===i&&(e=e.slice()),e.sort(w),e}function w(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function y(e,t){if(!e||!t)return!1;const{creationDateField:i,creatorField:n,editDateField:o,editorField:l}=t;return-1!==[i&&i.toLowerCase(),n&&n.toLowerCase(),o&&o.toLowerCase(),l&&l.toLowerCase()].indexOf(e.toLowerCase())}function C(e,t){return e.editable&&-1===c.indexOf(e.type)&&!y(e.name,t)}function g(e,t){return new a({fieldInfos:I(e,t).filter((e=>e.visible))})}function I({editFieldsInfo:e,fields:t,objectIdField:i},n){return b(t,(null==n?void 0:n.ignoreFieldTypes)||j).map((t=>new d({fieldName:t.name,isEditable:C(t,e),label:t.alias,format:$(t),visible:F(t,{editFieldsInfo:e,objectIdField:i,visibleFieldNames:null==n?void 0:n.visibleFieldNames})})))}function $(e){switch(e.type){case"small-integer":case"integer":case"single":return new p({digitSeparator:!0,places:0});case"double":return new p({digitSeparator:!0,places:2});case"date":return new p({dateFormat:"long-month-day-year"});default:return null}}function L(){return[new a,new n]}function _(e){const t=i.getDisplayFieldName(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n}function v(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())||void 0}const j=["geometry","blob","raster","guid","xml"];e.createFieldInfos=I,e.createFieldsContent=g,e.createPopupTemplate=f,Object.defineProperty(e,"__esModule",{value:!0})}));
