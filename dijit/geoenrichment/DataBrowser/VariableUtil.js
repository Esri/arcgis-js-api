// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-class"],function(a,e,t,r){return{getToggleGroups:function(a,t,r){var o={},n=[];return e.forEach(t,function(e){n.push(this.getToggleGroup(a,e,o,r))},this),{groups:n,hash:o}},getToggleGroup:function(a,t,r,o){r=r||{};var n=a&&a.getStates(t),s={value:t,states:n};if(r[t]=s,n){var g=!1;e.forEach(n.ids,function(a){t==a?g=!0:o||(r[a]=s)}),g||(t=s.value=n.ids[0],r[t]=s)}return s},createCategoryNode:function(a,e){var r=t.create("div",{"class":"DataCategoryItem DataBrowser_Clickable"},e),o=t.create("div",{"class":"DataCategoryItemIconMargins"},r);return r.icon=t.create("div",{"class":"DataCategoryItemIcon "+this.getCategoryImageClass(a)},o),t.create("div",{"class":"DataCategoryItemLabel",innerHTML:a&&a.name||""},r),r},updateCategoryNode:function(a,e){a.icon.className="DataCategoryItemIcon "+this.getCategoryImageClass(e),r[e.isSpecial?"add":"remove"](a,"DataCategoryItem_Special"),a.children[1].innerHTML=e&&e.name||""},getCategoryImageClass:function(a){return a&&"string"!=typeof a&&(a=a.id),a?"DataCategoryImage DataCategoryImage_"+a.toLowerCase().replace(/(\s|_|\d|\(|\))/g,""):"DataCategoryImage"},parseRangeValue:function(a){var e=a.split("-");e.length<2&&"+"==a.charAt(a.length-1)&&(e=[a.substr(0,a.length-1)]);var t=Number(e[0]),r=e.length<2?t:Number(e[1]);return isNaN(t)||isNaN(r)||t>r?null:{min:t,max:r}}}});