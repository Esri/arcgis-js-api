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

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

define(["dojo/sniff"],function(t){function e(){return!t("safari")||t("safari")>=7}var n={},o=o||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var n=t.document||document,o=function(){return t.URL||t.webkitURL||t},r=n.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in r,a=function(e){var o=n.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(o)},c=t.webkitRequestFileSystem,u=t.requestFileSystem||c||t.mozRequestFileSystem,s=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},f=0,d=function(e){var n=function(){"string"==typeof e?o().revokeObjectURL(e):e.remove()};t.chrome?n():setTimeout(n,10)},l=function(t,e,n){e=[].concat(e);for(var o=e.length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,n||t)}catch(t){s(t)}}},v=function(n,s){var v,p,w,y=this,m=n.type,b=!1,g=function(){l(y,"writestart progress write writeend".split(" "))},h=function(){if(!b&&v||(v=o().createObjectURL(n)),p)p.location.href=v;else{void 0===t.open(v,"_blank")&&"undefined"!=typeof safari&&(t.location.href=v)}y.readyState=y.DONE,g(),d(v)},O=function(t){return function(){if(y.readyState!==y.DONE)return t.apply(this,arguments)}},S={create:!0,exclusive:!1};return e()?(y.readyState=y.INIT,s||(s="download"),i?(v=o().createObjectURL(n),r.href=v,r.download=s,r.target="_blank",a(r),y.readyState=y.DONE,g(),void d(v)):(t.chrome&&m&&"application/octet-stream"!==m&&(w=n.slice||n.webkitSlice,n=w.call(n,0,n.size,"application/octet-stream"),b=!0),c&&"download"!==s&&(s+=".download"),("application/octet-stream"===m||c)&&(p=t),u?(f+=n.size,void u(t.TEMPORARY,f,O(function(t){t.root.getDirectory("saved",S,O(function(t){var e=function(){t.getFile(s,S,O(function(t){t.createWriter(O(function(e){e.onwriteend=function(e){p.location.href=t.toURL(),y.readyState=y.DONE,l(y,"writeend",e),d(t)},e.onerror=function(){var t=e.error;t.code!==t.ABORT_ERR&&h()},"writestart progress write abort".split(" ").forEach(function(t){e["on"+t]=y["on"+t]}),e.write(n),y.abort=function(){e.abort(),y.readyState=y.DONE},y.readyState=y.WRITING}),h)}),h)};t.getFile(s,{create:!1},O(function(t){t.remove(),e()}),O(function(t){t.code===t.NOT_FOUND_ERR?e():h()}))}),h)}),h)):void h())):void alert("The File APIs are not fully supported in this browser.")},p=v.prototype,w=function(t,e){return new v(t,e)};return p.abort=function(){var t=this;t.readyState=t.DONE,l(t,"abort")},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,w}}(window);return n.saveAs=o,n.savingSupported=e,n.saveTextFile=function(t,e,o){n.saveAs(new Blob([t],{type:o||"text/plain"}),e||"text.txt")},n});