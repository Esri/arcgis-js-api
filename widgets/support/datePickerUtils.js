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

define(["require","exports","../../core/Error","../../intl/date"],(function(t,e,r,a){"use strict";function n(t){for(var e=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g],r=0;r<10;r++)t=t.replace(e[r],r.toString());return Number(t)}function o(t){return new r("could not parse date input, expecting the following format: "+a.formatDate(Date.now(),t))}Object.defineProperty(e,"__esModule",{value:!0}),e.parseDateIntoParts=void 0,e.parseDateIntoParts=function(t,e){var r=a.getDateTimeFormatter(e),i=Date.now(),f=r.formatToParts(i),u=new Set;f.filter((function(t){return"literal"===t.type})).forEach((function(t){var e=t.value;return u.add(e)}));for(var l=0,c={};f.length>0;)for(var g=f.shift(),s=g.type,h=g.value,d=0;d<h.length;d++,l++){var p=t.charAt(l);if(u.has(p)){l++;break}if("literal"===s)break;c[s]||(c[s]=[]),c[s].push(p)}var v={};try{v.day=n(c.day.join("")),v.month=n(c.month.join(""))-1,v.year=n((c.year||c.relatedYear).join(""))}catch(t){throw o(e)}if(isNaN(v.day)||isNaN(v.month)||isNaN(v.year))throw o(e);return v}}));