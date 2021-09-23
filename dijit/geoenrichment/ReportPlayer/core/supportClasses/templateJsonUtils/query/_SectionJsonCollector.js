// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridDataUtil","../../tableJson/TableJsonUtil"],(function(e,n,t,o){var i={},s=function(e,n,t,o,i,s){var l,a;c.collectStatistics(n),e._parentBox={x:function(){switch(i){case"floating":return n.style.left+s.left;case"page":return c.calcX(n,t,o)+s.left}}(),y:function(){switch(i){case"floating":return n.style.top+s.top;case"page":return c.calcY(n,t,o)+s.top}}(),w:c.calcFullWidth(n,t,o),h:c.calcFullHeight(n,t,o)},e._parentStyle={backgroundColor:(l=t,a=o.field,l.style.fields=l.style.fields||{},(l.style.fields[a]=l.style.fields[a]||{}).backgroundColor)}},l=function(e){c.sanitize(e)},c={collectStatistics:function(e){if(!e._measureInfo){var n,t={},o={};e.columns.forEach((function(e){n&&(o[n.field]=e),n=e,t[e.field]=e}));var i={},s={},l={},a={},r={},f={};e.rows.forEach((function(n,t){e.columns.forEach((function(e,o){var u=r[o]||0,d=f[t]||0;u+=c._getDataHeight(n,e.field),d+=c._getFieldWidth(n,e),r[o]=u,f[t]=d;var g=o+"_"+t;s[g]=u,i[g]=d,l[g]=i[o-1+"_"+t]||0,a[g]=s[o+"_"+(t-1)]||0}))})),e._measureInfo={xPositions:l,yPositions:a,columnsHash:t,nextColumnHash:o}}},calcX:function(e,n,t){var o=e.columns.indexOf(t),i=e.rows.indexOf(n);return e._measureInfo.xPositions[o+"_"+i]||0},calcY:function(e,n,t){var o=e.columns.indexOf(t),i=e.rows.indexOf(n);return e._measureInfo.yPositions[o+"_"+i]||0},calcFullWidth:function(e,n,t){var o=t.field,i=c._getFieldWidth(n,e._measureInfo.columnsHash[o]),s=n.columnSpans&&n.columnSpans[o]||1;if(s>1)for(var l,a=0;a<s-1;a++)l=e._measureInfo.nextColumnHash[l?l.field:o],i+=c._getFieldWidth(n,l);return i},_getFieldWidth:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n.field]=e.style.fields[n.field]||{}).width||n.style.width},calcFullHeight:function(e,n,t){var o=t.field,i=e.rows.indexOf(n),s=c._getDataHeight(n,o),l=n.rowSpans&&n.rowSpans[o]||1;if(l>1)for(var a,r=i+1,f=0;f<l-1;f++)a=e.rows[r++],s+=c._getDataHeight(a,o);return s},_getDataHeight:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n]=e.style.fields[n]||{}).height||e.style.height},sanitize:function(e){delete e._measureInfo}},a=function(e,i,s,l,c){var a=[],r=[];function f(e){var l=e.rows[0].fieldInfos[e.columns[0].field];return!!(t.isTextLikeCell(l)||t.isShapeCell(l)||t.isImageCell(l))&&n.checkRectsIntersect([s,{x:e.style.left+i.left,y:e.style.top+i.top,w:o.getTableWidth(e),h:o.getTableHeight(e)}])}function u(e){return n.checkRectsIntersect([s,{x:e.style.left+i.left,y:e.style.top+i.top,w:e.style.width,h:e.style.height}])}return e.backgroundFloatingTablesSectionJson&&e.backgroundFloatingTablesSectionJson.stack.forEach((function(e,n){(-1===l||c||l!==n)&&(("table"===e.id&&f(e)||"img"===e.id&&u(e))&&(-1===l||c||l>n?a.push(e):r.push(e)))})),e.foregroundFloatingTablesSectionJson&&e.foregroundFloatingTablesSectionJson.stack.forEach((function(e,n){if(c&&l===n)return!0;("table"===e.id&&f(e)||"img"===e.id&&u(e))&&(c&&l>n?a.push(e):r.push(e))})),{elementJsonsBehind:a,elementJsonsAbove:r}};return i.collectSectionJsons=function(e,n){n=n||{};var t=[];return e?e.sections?e.sections:e.sectionsTables?(n.processSectionJson=n.processSectionJson||function(){},e.sectionsTables.forEach((function(o,s){var l=function(){!1!==n.backgroundForeground&&o.backgroundSectionJson&&o.backgroundSectionJson.stack&&t.push(o.backgroundSectionJson)},c=function(l){var c=[];!1!==n.floatingTables&&o.backgroundFloatingTablesSectionJson&&o.backgroundFloatingTablesSectionJson.stack.forEach((function(t,s){"table"===t.id&&i._processTableJson(t,c,"floating",e.documentOptions,n,o,s,!1)})),l&&c.reverse(),c.forEach((function(e){n.processSectionJson(e,{pageIndex:s,source:"foreground",floatingIndex:e.__floatingIndex}),delete e.__floatingIndex})),t=t.concat(c)},a=function(){var l=[];i._processTableJson(o,l,"page",e.documentOptions,n,o),l.forEach((function(e){n.processSectionJson(e,{pageIndex:s,source:"grid",index:e.__inGridIndex}),delete e.__inGridIndex})),t=t.concat(l)},r=function(l){var c=[];!1!==n.floatingTables&&o.foregroundFloatingTablesSectionJson&&o.foregroundFloatingTablesSectionJson.stack.forEach((function(t,s){"table"===t.id&&i._processTableJson(t,c,"floating",e.documentOptions,n,o,s,!0)})),l&&c.reverse(),c.forEach((function(e){n.processSectionJson(e,{pageIndex:s,source:"foreground",floatingIndex:e.__floatingIndex}),delete e.__floatingIndex})),t=t.concat(c)},f=function(){!1!==n.backgroundForeground&&o.foregroundSectionJson&&o.foregroundSectionJson.stack&&t.push(o.foregroundSectionJson)};n.topFirst?(f(),r(!0),a(),c(!0),l()):(l(),c(),a(),r(),f())})),t):[]:[]},i._processTableJson=function(n,t,o,i,c,r,f,u){n.rows.forEach((function(l,d){l.fieldInfos&&n.columns.forEach((function(g,h){var p=l.fieldInfos[g.field];if(p&&p.sectionJson&&p.sectionJson.stack){if(c.processFieldInfoFunc&&c.processFieldInfoFunc(p),(!1!==c.saveParentInfo||c.populateWithFloatingElementsBehind)&&s(p.sectionJson,n,l,g,o,i),c.populateWithFloatingElementsBehind){var _,b=e.clone(p.sectionJson);"page"===o?_=a(r,i,b._parentBox,-1,void 0):"floating"===o&&(_=a(r,i,b._parentBox,f,u));var m=function(n){return(n=e.clone(n)).isContextFloatingElement=!0,n.style.left=n.style.left+i.left-b._parentBox.x,"table"===n.id?n.style.top=n.style.top+i.top-b._parentBox.y:"img"!==n.id&&"map"!==n.id||(n.style.top=n.style.top+i.top-b._parentBox.y),n},x=_.elementJsonsBehind.map(m),y=_.elementJsonsAbove.map(m);b.stack=x.concat(b.stack),b.stack=b.stack.concat(y),t.push(b)}else t.push(p.sectionJson);var J=t[t.length-1];"page"===o?J.__inGridIndex=d*n.columns.length+h:J.__floatingIndex=f}}))})),l(n)},i.getParentBox=function(e){return e&&e._parentBox},i.setParentBox=function(e,n){e._parentBox=n},i.getParentStyle=function(e){return e&&e._parentStyle},i}));