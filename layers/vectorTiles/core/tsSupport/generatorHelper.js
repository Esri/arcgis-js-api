// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define([],function(){return function(e,n){function r(e){return function(n){return t([e,n])}}function t(r){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,l&&(a=2&r[0]?l.return:r[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,r[1])).done)return a;switch(l=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,l=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=n.call(e,i)}catch(e){r=[6,e],l=0}finally{o=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,l,a,u,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u}});