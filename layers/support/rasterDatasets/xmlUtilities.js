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

define(["require","exports"],(function(e,n){function t(e,n){if(!e||!n)return[];var t,i=n;if(n.indexOf("/")>-1?(i=n.slice(0,n.indexOf("/")),n=n.slice(n.indexOf("/")+1)):n="",!(t=n?r(e,i).getElementsByTagNameNS("*",n):e.getElementsByTagNameNS("*",i))||0===t.length)return[];for(var l=[],u=0;u<t.length;u++)l.push(t[u]||t.item[u]);return l}function r(e,n){if(!e||!n)return null;var i=n;n.indexOf("/")>-1?(i=n.slice(0,n.indexOf("/")),n=n.slice(n.indexOf("/")+1)):n="";var l=t(e,i);return l.length>0?n?r(l[0],n):l[0]:null}Object.defineProperty(n,"__esModule",{value:!0}),n.getElements=t,n.getElement=r,n.getElementValue=function(e,n){var t,i=r(e,n);return i&&(t=i.textContent||i.nodeValue||i.innerText)?t.trim():null},n.getElementValues=function(e,n){for(var r,i=t(e,n),l=[],u=0;u<i.length;u++)(r=i[u].textContent||i[u].nodeValue||i[u].innerText)&&""!==(r=r.trim())&&l.push(r);return l}}));