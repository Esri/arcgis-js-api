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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define([],function(){var e={},n={provideParentInfo:function(e,n,o,a,i,s){t.collectStatistics(n),e._parentBox={x:function(){switch(i){case"floating":return n.style.left+s.left;case"page":return t.calcX(n,o,a)+s.left}}(),y:function(){switch(i){case"floating":return n.style.spaceBefore+s.top;case"page":return t.calcY(n,o,a)+s.top}}(),w:t.calcFullWidth(n,o,a),h:t.calcFullHeight(n,o,a)},e._parentStyle={backgroundColor:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n]=e.style.fields[n]||{}).backgroundColor}(o,a.field)}},sanitize:function(e){t.sanitize(e)}},t={collectStatistics:function(e){if(!e._measureInfo){var n,o={},a={};e.data.columns.forEach(function(e){n&&(a[n.field]=e),n=e,o[e.field]=e});var i={},s={},l={},c={},r={},f={};e.data.data.forEach(function(n,o){e.data.columns.forEach(function(e,a){var u=r[a]||0,d=f[o]||0,g=t._getDataHeight(n,e.field),h=t._getFieldWidth(n,e);u+=g,d+=h,r[a]=u,f[o]=d;var p=a+"_"+o;s[p]=u,i[p]=d,l[p]=i[a-1+"_"+o]||0,c[p]=s[a+"_"+(o-1)]||0})}),e._measureInfo={xPositions:l,yPositions:c,columnsHash:o,nextColumnHash:a}}},calcX:function(e,n,t){var o=e.data.columns.indexOf(t),a=e.data.data.indexOf(n);return e._measureInfo.xPositions[o+"_"+a]||0},calcY:function(e,n,t){var o=e.data.columns.indexOf(t),a=e.data.data.indexOf(n);return e._measureInfo.yPositions[o+"_"+a]||0},_getFieldWidth:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n.field]=e.style.fields[n.field]||{}).width||n.style.width},calcFullWidth:function(e,n,o){var a=o.field,i=t._getFieldWidth(n,e._measureInfo.columnsHash[a]),s=n.columnSpans&&n.columnSpans[a]||1;if(s>1)for(var l,c=0;c<s-1;c++)l=e._measureInfo.nextColumnHash[l?l.field:a],i+=t._getFieldWidth(n,l);return i},_getDataHeight:function(e,n){return e.style.fields=e.style.fields||{},(e.style.fields[n]=e.style.fields[n]||{}).height||e.style.height},calcFullHeight:function(e,n,o){var a=o.field,i=e.data.data.indexOf(n),s=t._getDataHeight(n,a),l=n.rowSpans&&n.rowSpans[a]||1;if(l>1)for(var c,r=i+1,f=0;f<l-1;f++)c=e.data.data[r++],s+=t._getDataHeight(c,a);return s},sanitize:function(e){delete e._measureInfo}};return e.collectSectionJsons=function(n,t){t=t||{};var o=[];return n?n.sections?n.sections:n.sectionsTables?(n.sectionsTables.forEach(function(a){e._processTableJson(a,o,"page",n.documentOptions,t),!1!==t.backgroundForeground&&(a.backgroundSectionJson&&o.push(a.backgroundSectionJson),a.foregroundSectionJson&&o.push(a.foregroundSectionJson)),!1!==t.floatingTables&&a.backgroundFloatingTablesSectionJson&&a.backgroundFloatingTablesSectionJson.stack.forEach(function(a){"table"===a.id&&e._processTableJson(a,o,"floating",n.documentOptions,t)}),!1!==t.floatingTables&&a.foregroundFloatingTablesSectionJson&&a.foregroundFloatingTablesSectionJson.stack.forEach(function(a){"table"===a.id&&e._processTableJson(a,o,"floating",n.documentOptions,t)})}),o.filter(function(e){return!!e.stack})):[]:[]},e._processTableJson=function(e,t,o,a,i){e.data.data.forEach(function(s){s.fieldInfos&&e.data.columns.forEach(function(l){var c=s.fieldInfos[l.field];c&&c.sectionJson&&(i.processFieldInfoFunc&&i.processFieldInfoFunc(c),!1!==i.saveParentInfo&&n.provideParentInfo(c.sectionJson,e,s,l,o,a),t.push(c.sectionJson))})}),n.sanitize(e)},e.getParentBox=function(e){return e&&e._parentBox},e.getParentStyle=function(e){return e&&e._parentStyle},e});