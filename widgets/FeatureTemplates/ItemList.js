// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../support/jsxFactory","../support/widgetUtils"],(function(e,t,i,r,s){Object.defineProperty(t,"__esModule",{value:!0});var n="esri-item-list",l="esri-item-list__list",a="esri-item-list__group",o="esri-item-list__scroller",c="esri-item-list__group-header",u="esri-item-list__list-item",m="esri-item-list__list-item-container",d="esri-item-list__list-item-label",f="esri-item-list__no-matches-message",v="esri-item-list__filter-container",x="esri-item-list__filter-placeholder",I="esri-item-list__filter-input",p="esri-item-list__filter-placeholder-text",g="esri-icon-search",_="esri-widget",h="esri-input";function y(e){var t=e.identify,i=e.item,s=e.grouped,n=e.filterText,l=e.onItemSelect,a=e.onItemMouseEnter,o=e.onItemMouseLeave,c=e.renderIcon,d=(t&&t(i)||i.id)+"__"+i.label;return r.tsx("li",{"aria-level":s?"2":"",class:u,"data-item":i,key:d,onclick:function(e){var t=e.currentTarget["data-item"];l&&l(t)},onmouseenter:function(e){var t=e.currentTarget["data-item"];a&&a(t)},onkeydown:function(e){if("Enter"===e.key||"Space"===e.key){var t=e.currentTarget["data-item"];l&&l(t)}},onmouseleave:function(e){var t=e.currentTarget["data-item"];o&&o(t)},tabIndex:0},r.tsx("div",{class:m},c&&c({item:i}),b({text:i.label,match:n})))}function M(e){var t=e.group,i=e.identify,n=e.onItemMouseLeave,o=e.onItemMouseEnter,u=e.onItemSelect,m=e.filterText,d=e.renderIcon,f=(i&&i(t)||t.id)+"-heading";return r.tsx("section",{"aria-labelledby":f,class:a,key:t.label},r.tsx("h4",{"aria-level":"1",id:f,class:s.classes(c)},b({text:t.label,match:m})),r.tsx("ul",{class:l},t.items.map((function(e){return y({item:e,identify:i,grouped:!0,onItemMouseLeave:n,onItemMouseEnter:o,onItemSelect:u,renderIcon:d,filterText:m})}))))}function b(e){var t=e.match,i=e.text,s=null;if(t){var n=i.toLowerCase(),l=t.toLowerCase(),a=n.indexOf(l);if(-1===a)s=i;else{var o=i.substring(0,a),c=i.substr(a,t.length),u=i.substring(a+t.length);s=r.tsx("span",null,o,r.tsx("strong",null,c),u)}}else s=i;return r.tsx("span",{class:d},s)}t.ItemList=function(e){var t=e.id,i=e.identify,a=e.filterEnabled,c=void 0===a||a,u=e.items,m=e.messages,d=e.filterText,b=void 0===d?"":d,T=e.onFilterChange,L=e.renderIcon,k=e.onItemMouseLeave,E=e.onItemMouseEnter,S=e.onItemSelect;return r.tsx("div",{class:s.classes(n,_)},c?function(e){var t=e.id+"-placeholder";return r.tsx("div",{class:v,key:"filter"},r.tsx("input",{"aria-labelledby":t,class:s.classes(h,I),oninput:function(t){var i=t.currentTarget;e.onFilterChange&&e.onFilterChange(i.value)},value:e.filterText,type:"search"}),e.filterText?null:r.tsx("div",{class:x,id:t,key:"placeholder"},r.tsx("span",{class:g,"aria-hidden":"true"}),r.tsx("div",{class:p},e.messages.filterPlaceholder)))}({filterText:b,messages:m,onFilterChange:T,id:t}):null,function(e){var t=e.identify,i=e.items,n=e.renderIcon,a=e.filterText,c=e.onItemMouseLeave,u=e.onItemMouseEnter,m=e.onItemSelect;if(0===i.length)return r.tsx("div",{class:f,key:"no-matches"},e.messages.noMatches);if(d=i[0],d.items)return r.tsx("div",{class:o,key:"item-container"},i.map((function(e){return M({group:e,filterText:a,identify:t,renderIcon:n,onItemMouseLeave:c,onItemMouseEnter:u,onItemSelect:m})})));var d;return r.tsx("ul",{class:s.classes(l,o),key:"item-container"},i.map((function(e){return y({item:e,identify:t,grouped:!0,onItemMouseLeave:c,onItemMouseEnter:u,onItemSelect:m,renderIcon:n,filterText:a})})))}({identify:i,items:u,messages:m,filterText:b,renderIcon:L,onItemMouseLeave:k,onItemMouseEnter:E,onItemSelect:S}))},t.renderItem=y,t.renderGroup=M,t.renderLabel=b}));