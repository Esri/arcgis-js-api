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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","dojo/query","dojo/dom-style","../VisibilityChecker","../../../ImageInfoUtil"],function(e,r,a,n,t,o,c){var u={},g=/^data:/i,i=/^url\s*\(/i,d=/url\("data:|url\(data:/i,s={getImages:function(e){for(var r=e.getElementsByTagName("img"),a=[],n=0;n<r.length;n++){var t=r[n];!g.test(t.src)&&o.checkNode(t)&&a.push(r[n])}return a},getBackgroundImageNodes:function(e){function r(e){if(e&&e.children)for(var n=0;n<e.children.length;n++){var c=e.children[n];if("IMG"!==c.nodeName&&o.checkNode(c)){var u=t.get(c,"backgroundImage");u&&i.test(u)&&!d.test(u)&&(c.__backgroundImage=u,a.push(c)),r(c)}}}var a=[];return r(e),a}},l={replaceImages:function(n){return a(n.map(function(a){return r(c.getRemoteImageDataUrl(a.src),function(r){if(r!==a.src){var n=a.src,t=new e;return a.onload=t.resolve,a.onerror=function(){a.src=n},a.src=r,t.promise}})}))}},m={replaceBackgroundNodes:function(n){return a(n.map(function(a){var n=a.__backgroundImage;delete a.__backgroundImage;var t=n.replace(/^url\s*\(/i,"").replace(")","").replace(/"/g,"").trim();return r(c.getRemoteImageDataUrl(t),function(r){if(r!==t){a.style.backgroundImage="url("+r+")";var n=new e;return setTimeout(n.resolve),n.promise}})}))}};return u.replaceImagesWithDataURL=function(e){var r=s.getImages(e),n=s.getBackgroundImageNodes(e);return a([l.replaceImages(r),m.replaceBackgroundNodes(n)])},u});