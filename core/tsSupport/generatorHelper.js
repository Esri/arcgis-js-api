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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define([],function(){return function(e,n){function t(e){return function(n){return r([e,n])}}function r(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,l&&(a=l[2&t[0]?"return":t[0]?"throw":"next"])&&!(a=a.call(l,t[1])).done)return a;switch(l=0,a&&(t=[0,a.value]),t[0]){case 0:case 1:a=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,l=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){i.label=t[1];break}if(6===t[0]&&i.label<a[1]){i.label=a[1],a=t;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(t);break}a[2]&&i.ops.pop(),i.trys.pop();continue}t=n.call(e,i)}catch(r){t=[6,r],l=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var o,l,a,u,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:t(0),"throw":t(1),"return":t(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u}});