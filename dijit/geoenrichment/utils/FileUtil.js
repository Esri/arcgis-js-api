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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

define(["dojo/sniff"],function(t){function e(){return!t("safari")||t("safari")>=7}var n={},o=o||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var n=t.document||document,o=function(){return t.URL||t.webkitURL||t},r=n.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in r,a=function(e){var o=n.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(o)},c=t.webkitRequestFileSystem,u=t.requestFileSystem||c||t.mozRequestFileSystem,s=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},f="application/octet-stream",d=0,l=10,v=function(e){var n=function(){"string"==typeof e?o().revokeObjectURL(e):e.remove()};t.chrome?n():setTimeout(n,l)},w=function(t,e,n){e=[].concat(e);for(var o=e.length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,n||t)}catch(i){s(i)}}},p=function(n,s){var l,p,y,m=this,b=n.type,g=!1,h=function(){w(m,"writestart progress write writeend".split(" "))},O=function(){if((g||!l)&&(l=o().createObjectURL(n)),p)p.location.href=l;else{var e=t.open(l,"_blank");void 0===e&&"undefined"!=typeof safari&&(t.location.href=l)}m.readyState=m.DONE,h(),v(l)},S=function(t){return function(){return m.readyState!==m.DONE?t.apply(this,arguments):void 0}},E={create:!0,exclusive:!1};return e()?(m.readyState=m.INIT,s||(s="download"),i?(l=o().createObjectURL(n),r.href=l,r.download=s,r.target="_blank",a(r),m.readyState=m.DONE,h(),void v(l)):(t.chrome&&b&&b!==f&&(y=n.slice||n.webkitSlice,n=y.call(n,0,n.size,f),g=!0),c&&"download"!==s&&(s+=".download"),(b===f||c)&&(p=t),u?(d+=n.size,void u(t.TEMPORARY,d,S(function(t){t.root.getDirectory("saved",E,S(function(t){var e=function(){t.getFile(s,E,S(function(t){t.createWriter(S(function(e){e.onwriteend=function(e){p.location.href=t.toURL(),m.readyState=m.DONE,w(m,"writeend",e),v(t)},e.onerror=function(){var t=e.error;t.code!==t.ABORT_ERR&&O()},"writestart progress write abort".split(" ").forEach(function(t){e["on"+t]=m["on"+t]}),e.write(n),m.abort=function(){e.abort(),m.readyState=m.DONE},m.readyState=m.WRITING}),O)}),O)};t.getFile(s,{create:!1},S(function(t){t.remove(),e()}),S(function(t){t.code===t.NOT_FOUND_ERR?e():O()}))}),O)}),O)):void O())):void alert("The File APIs are not fully supported in this browser.")},y=p.prototype,m=function(t,e){return new p(t,e)};return y.abort=function(){var t=this;t.readyState=t.DONE,w(t,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,m}}(window);return n.saveAs=o,n.savingSupported=e,n.saveTextFile=function(t,e,o){n.saveAs(new Blob([t],{type:o||"text/plain"}),e||"text.txt")},n});