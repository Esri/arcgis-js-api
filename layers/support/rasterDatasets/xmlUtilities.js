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

define(["require","exports"],(function(e,n){"use strict";function t(e,n){if(!e||!n)return[];var t,l=n;if(n.indexOf("/")>-1?(l=n.slice(0,n.indexOf("/")),n=n.slice(n.indexOf("/")+1)):n="",!(t=n?r(e,l).getElementsByTagNameNS("*",n):e.getElementsByTagNameNS("*",l))||0===t.length)return[];for(var u=[],i=0;i<t.length;i++)u.push(t[i]||t.item[i]);return u}function r(e,n){if(!e||!n)return null;var l=n;n.indexOf("/")>-1?(l=n.slice(0,n.indexOf("/")),n=n.slice(n.indexOf("/")+1)):n="";var u=t(e,l);return u.length>0?n?r(u[0],n):u[0]:null}function l(e,n){void 0===n&&(n=null);var t,l=n?r(e,n):e;return l&&(t=l.textContent||l.nodeValue)?t.trim():null}function u(e,n){for(var r,l=t(e,n),u=[],i=0;i<l.length;i++)(r=l[i].textContent||l[i].nodeValue)&&""!==(r=r.trim())&&u.push(r);return u}Object.defineProperty(n,"__esModule",{value:!0}),n.getNodeNameIgnoreNS=n.isSameTagIgnoreNS=n.getElementNumericValues=n.getSpaceDelimitedNumericValues=n.getElementValues=n.getElementValue=n.getElement=n.getElements=void 0,n.getElements=t,n.getElement=r,n.getElementValue=l,n.getElementValues=u,n.getSpaceDelimitedNumericValues=function(e,n){return void 0===n&&(n=null),l(e,n).split(" ").map((function(e){return Number(e)}))},n.getElementNumericValues=function(e,n){return u(e,n).map((function(e){return Number(e)}))},n.isSameTagIgnoreNS=function(e,n){var t,r=null===(t=null==e?void 0:e.nodeName)||void 0===t?void 0:t.toLowerCase(),l=n.toLowerCase();return r.slice(r.lastIndexOf(":")+1)===l},n.getNodeNameIgnoreNS=function(e){return e.nodeName.slice(e.nodeName.lastIndexOf(":")+1)}}));