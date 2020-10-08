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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../support/jsxFactory","../support/widgetUtils"],(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderLabel=t.renderGroup=t.renderItem=t.ItemList=void 0;var s="esri-item-list",n="esri-item-list__list",l="esri-item-list__group",a="esri-item-list__scroller",o="esri-item-list__group-header",c="esri-item-list__list-item",u="esri-item-list__list-item-container",m="esri-item-list__list-item-label",d="esri-item-list__no-matches-message",f="esri-item-list__filter-container",v="esri-item-list__filter-placeholder",I="esri-item-list__filter-input",x="esri-item-list__filter-placeholder-text",g="esri-icon-search",p="esri-widget",_="esri-input";function h(e){var t=e.identify,i=e.item,s=e.grouped,n=e.filterText,l=e.onItemSelect,a=e.onItemMouseEnter,o=e.onItemMouseLeave,m=e.renderIcon,d=(t&&t(i)||i.id)+"__"+i.label;return r.tsx("li",{"aria-level":s?"2":"",class:c,"data-item":i,key:d,onclick:function(e){var t=e.currentTarget["data-item"];l&&l(t)},onmouseenter:function(e){var t=e.currentTarget["data-item"];a&&a(t)},onkeydown:function(e){if("Enter"===e.key||"Space"===e.key){var t=e.currentTarget["data-item"];l&&l(t)}},onmouseleave:function(e){var t=e.currentTarget["data-item"];o&&o(t)},tabIndex:0},r.tsx("div",{class:u},m&&m({item:i}),M({text:i.label,match:n})))}function y(e){var t=e.group,s=e.identify,a=e.onItemMouseLeave,c=e.onItemMouseEnter,u=e.onItemSelect,m=e.filterText,d=e.renderIcon,f=(s&&s(t)||t.id)+"-heading";return r.tsx("section",{"aria-labelledby":f,class:l,key:t.label},r.tsx("h4",{"aria-level":"1",id:f,class:i.classes(o)},M({text:t.label,match:m})),r.tsx("ul",{class:n},t.items.map((function(e){return h({item:e,identify:s,grouped:!0,onItemMouseLeave:a,onItemMouseEnter:c,onItemSelect:u,renderIcon:d,filterText:m})}))))}function M(e){var t=e.match,i=e.text,s=null;if(t){var n=i.toLowerCase(),l=t.toLowerCase(),a=n.indexOf(l);if(-1===a)s=i;else{var o=i.substring(0,a),c=i.substr(a,t.length),u=i.substring(a+t.length);s=r.tsx("span",null,o,r.tsx("strong",null,c),u)}}else s=i;return r.tsx("span",{class:m},s)}t.ItemList=function(e){var t=e.id,l=e.identify,o=e.filterEnabled,c=void 0===o||o,u=e.items,m=e.messages,M=e.filterText,b=void 0===M?"":M,T=e.onFilterChange,L=e.renderIcon,k=e.onItemMouseLeave,E=e.onItemMouseEnter,S=e.onItemSelect;return r.tsx("div",{class:i.classes(s,p)},c?function(e){var t=e.id+"-placeholder";return r.tsx("div",{class:f,key:"filter"},r.tsx("input",{"aria-labelledby":t,class:i.classes(_,I),oninput:function(t){var r=t.currentTarget;e.onFilterChange&&e.onFilterChange(r.value)},value:e.filterText,type:"search"}),e.filterText?null:r.tsx("div",{class:v,id:t,key:"placeholder"},r.tsx("span",{class:g,"aria-hidden":"true"}),r.tsx("div",{class:x},e.messages.filterPlaceholder)))}({filterText:b,messages:m,onFilterChange:T,id:t}):null,function(e){var t=e.identify,s=e.items,l=e.renderIcon,o=e.filterText,c=e.onItemMouseLeave,u=e.onItemMouseEnter,m=e.onItemSelect;if(0===s.length)return r.tsx("div",{class:d,key:"no-matches"},e.messages.noMatches);if(f=s[0],f.items)return r.tsx("div",{class:a,key:"item-container"},s.map((function(e){return y({group:e,filterText:o,identify:t,renderIcon:l,onItemMouseLeave:c,onItemMouseEnter:u,onItemSelect:m})})));var f;return r.tsx("ul",{class:i.classes(n,a),key:"item-container"},s.map((function(e){return h({item:e,identify:t,grouped:!0,onItemMouseLeave:c,onItemMouseEnter:u,onItemSelect:m,renderIcon:l,filterText:o})})))}({identify:l,items:u,messages:m,filterText:b,renderIcon:L,onItemMouseLeave:k,onItemMouseEnter:E,onItemSelect:S}))},t.renderItem=h,t.renderGroup=y,t.renderLabel=M}));