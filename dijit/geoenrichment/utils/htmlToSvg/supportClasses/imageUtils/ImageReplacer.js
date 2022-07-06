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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","../dom-style","../VisibilityChecker","../../../ImageInfoUtil"],(function(e,r,n,t,i,o){var a={},c=/^data:/i,l=/dijit\/geoenrichment\//i,u=/^url\s*\(/i,s=/url\(["']data:|url\(data:/i,m=function(e,r,n){for(var t=e.getElementsByTagName("img"),o=[],a=0;a<t.length;a++){var u=t[a];if(c.test(u.src)===!!r&&i.checkNode(u)){if(!r&&n&&!l.test(u.src))continue;o.push(t[a])}}return o},f=function(e,r,n){var o=[];return function e(a){if(a&&a.children)for(var c=0;c<a.children.length;c++){var m=a.children[c];if("IMG"!==m.nodeName&&i.checkNode(m)){var f=t.get(m,"backgroundImage");if(f&&u.test(f)&&s.test(f)===!!r){if(m.__url=f.replace(/^url\s*\(/i,"").replace(")","").replace(/"/g,"").trim(),!r&&n&&!l.test(m.__url))continue;o.push(m)}e(m)}}}(e),o},g=function(t,i){return n(t.map((function(n){return r(o.getRemoteImageDataUrl(n.src),(function(r){function t(){i.hideUrlImages&&(n.style.display="none")}if(r!==n.src){var o=n.src,a=new e;return n.onload=function(){n.onload=n.onerror=null,a.resolve()},n.onerror=function(){n.onload=n.onerror=null,n.src=o,t()},n.src=r,a.promise}t()}))})))},d=function(t,i){return n(t.map((function(n){var t=n.__url;return delete n.__url,r(o.getRemoteImageDataUrl(t),(function(r){if(r!==t){n.style.backgroundImage="url("+r+")";var o=new e;return setTimeout(o.resolve),o.promise}i.hideUrlImages&&(n.style.display="none")}))})))},h=function(e,r,n){e.forEach((function(e){var r=n.getItemResourceUrl(e.src);r&&(e.src=r)})),r.forEach((function(e){var r=e.__url;delete e.__url;var t=n.getItemResourceUrl(r);t&&(e.style.backgroundImage="url("+t+")")}))};return a.replaceImagesWithDataURL=function(e,r){var t=m(e,!1,!r.convertUrlImages),i=f(e,!1,!r.convertUrlImages),o=r.getItemResourceUrl&&m(e,!0),a=r.getItemResourceUrl&&f(e,!0);return n([t&&g(t,r),i&&d(i,r),(o||a)&&h(o,a,r)])},a}));