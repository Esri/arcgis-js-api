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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","../dom-style","../VisibilityChecker","../../../ImageInfoUtil"],function(e,r,a,n,t,o){var c={},u=/^data:/i,g=/^url\s*\(/i,i=/url\("data:|url\(data:/i,s={getImages:function(e){for(var r=e.getElementsByTagName("img"),a=[],n=0;n<r.length;n++){var o=r[n];!u.test(o.src)&&t.checkNode(o)&&a.push(r[n])}return a},getBackgroundImageNodes:function(e){function r(e){if(e&&e.children)for(var o=0;o<e.children.length;o++){var c=e.children[o];if("IMG"!==c.nodeName&&t.checkNode(c)){var u=n.get(c,"backgroundImage");u&&g.test(u)&&!i.test(u)&&(c.__backgroundImage=u,a.push(c)),r(c)}}}var a=[];return r(e),a}},l={replaceImages:function(n){return a(n.map(function(a){return r(o.getRemoteImageDataUrl(a.src),function(r){if(r!==a.src){var n=a.src,t=new e;return a.onload=t.resolve,a.onerror=function(){a.src=n},a.src=r,t.promise}})}))}},d={replaceBackgroundNodes:function(n){return a(n.map(function(a){var n=a.__backgroundImage;delete a.__backgroundImage;var t=n.replace(/^url\s*\(/i,"").replace(")","").replace(/"/g,"").trim();return r(o.getRemoteImageDataUrl(t),function(r){if(r!==t){a.style.backgroundImage="url("+r+")";var n=new e;return setTimeout(n.resolve),n.promise}})}))}};return c.replaceImagesWithDataURL=function(e){var r=s.getImages(e),n=s.getBackgroundImageNodes(e);return a([l.replaceImages(r),d.replaceBackgroundNodes(n)])},c});