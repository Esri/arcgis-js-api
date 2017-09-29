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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","dojo/query","dojo/dom-style","../VisibilityChecker","../../../ImageInfoUtil"],function(e,r,a,t,n,o,c){var u={},i=/^data:/i,g=/^url\s*\(/i,s=/url\("data:|url\(data:/i,l={getImages:function(e){for(var r=e.getElementsByTagName("img"),a=[],t=0;t<r.length;t++){var n=r[t];!i.test(n.src)&&o.checkNode(n)&&a.push(r[t])}return a},getBackgroundImageNodes:function(e){function r(e){if(e&&e.children)for(var t=0;t<e.children.length;t++){var c=e.children[t];if("IMG"!==c.nodeName&&o.checkNode(c)){var u=n.get(c,"backgroundImage");u&&g.test(u)&&!s.test(u)&&a.push(c),r(c)}}}var a=[];return r(e),a}},d={replaceImages:function(t){return a(t.map(function(a){return r(c.getRemoteImageDataUrl(a.src),function(r){if(r!==a.src){var t=a.src,n=new e;return a.onload=n.resolve,a.onerror=function(){a.src=t},a.src=r,n.promise}})}))}},m={replaceBackgroundNodes:function(t){return a(t.map(function(a){var t=n.get(a,"backgroundImage"),o=t.replace(/^url\s*\(/i,"").replace(")","").replace(/"/g,"").trim();return r(c.getRemoteImageDataUrl(o),function(r){if(r!==o){a.style.backgroundImage="url("+r+")";var t=new e;return setTimeout(t.resolve),t.promise}})}))}};return u.replaceImagesWithDataURL=function(e){var r=l.getImages(e),t=l.getBackgroundImageNodes(e);return a([d.replaceImages(r),m.replaceBackgroundNodes(t)])},u});