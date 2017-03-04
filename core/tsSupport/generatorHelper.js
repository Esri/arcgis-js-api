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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define([],function(){return function(e,n){function r(e){return function(n){return t([e,n])}}function t(r){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,a&&(l=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(l=l.call(a,r[1])).done)return l;switch(a=0,l&&(r=[0,l.value]),r[0]){case 0:case 1:l=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,a=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(l=u.trys,!(l=l.length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){u=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){u.label=r[1];break}if(6===r[0]&&u.label<l[1]){u.label=l[1],l=r;break}if(l&&u.label<l[2]){u.label=l[2],u.ops.push(r);break}l[2]&&u.ops.pop(),u.trys.pop();continue}r=n.call(e,u)}catch(t){r=[6,t],a=0}finally{o=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,a,l,u={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return{next:r(0),"throw":r(1),"return":r(2)}}});