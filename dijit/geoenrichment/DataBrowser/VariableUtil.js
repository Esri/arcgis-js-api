// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/dom-construct"],(function(e,a){return{getToggleGroups:function(a,t,r){var n={},o=[];return e.forEach(t,(function(e){o.push(this.getToggleGroup(a,e,n,r))}),this),{groups:o,hash:n}},getToggleGroup:function(a,t,r,n){r=r||{};var o=a&&a.getStates(t),s={value:t,states:o};if(r[t]=s,o){var g=!1;e.forEach(o.ids,(function(e){t==e?g=!0:n||(r[e]=s)})),g||(t=s.value=o.ids[0],r[t]=s)}return s},createCategoryNode:function(e,t){var r=a.create("div",{class:"DataCategoryItem DataBrowser_Clickable"},t),n=a.create("div",{class:"DataCategoryItemIconMargins"},r);return r.icon=a.create("div",{class:"DataCategoryItemIcon "+this.getCategoryImageClass(e)},n),a.create("div",{class:"DataCategoryItemLabel TrimWithEllipses",innerHTML:e&&e.name||""},r),r},updateCategoryNode:function(e,a){e.icon.className="DataCategoryItemIcon "+this.getCategoryImageClass(a),e.children[1].innerHTML=a&&a.name||""},getCategoryImageClass:function(e){e&&"string"!=typeof e&&(e=e.id);var a="DataCategoryImage";return e&&(e=(e=e.toLowerCase().replace(/(\s|_|\d|\(|\))/g,"")).split(/\W+/)[0])&&(a+=" DataCategoryImage_"+e),a},parseRangeValue:function(e){var a=e.split("-");a.length<2&&"+"==e.charAt(e.length-1)&&(a=[e.substr(0,e.length-1)]);var t=Number(a[0]),r=a.length<2?t:Number(a[1]);return isNaN(t)||isNaN(r)||t>r?null:{min:t,max:r}}}}));