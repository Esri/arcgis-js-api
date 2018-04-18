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

define([],function(){var n={},e={provideParentInfo:function(n,e,o,t,s,i){if(!e._measureInfo){var r,f={},a={};e.data.columns.forEach(function(n){r&&(a[r.field]=n),r=n,f[n.field]=n}),e._measureInfo={columnsHash:f,nextColumnHash:a}}f=e._measureInfo.columnsHash,a=e._measureInfo.nextColumnHash,n._parentBox={x:function(){switch(i){case"floating":return e.style.left}return 0}(),y:function(){switch(i){case"floating":return e.style.spaceBefore}return 0}(),w:function(){function n(n,e){return n.style.fields=n.style.fields||{},(n.style.fields[e.field]=n.style.fields[e.field]||{}).width||e.style.width}var e=n(o,f[s]),t=o.columnSpans&&o.columnSpans[s]||1;if(t>1)for(var i,r=0;r<t-1;r++)i=a[i?i.field:s],e+=n(o,i);return e}(),h:function(){function n(n,e){return n.style.fields=n.style.fields||{},(n.style.fields[e]=n.style.fields[e]||{}).height||n.style.height}var i=n(o,s),r=o.rowSpans&&o.rowSpans[s]||1;if(r>1)for(var f,a=t+1,l=0;l<r-1;l++)f=e.data.data[a++],i+=n(f,s);return i}()},n._parentStyle={backgroundColor:function(n,e){return n.style.fields=n.style.fields||{},(n.style.fields[e]=n.style.fields[e]||{}).backgroundColor}(o,s)}},sanitize:function(n){delete n._measureInfo}};return n.collectSectionJsons=function(e,o){o=o||{};var t=[];return e?e.sections?e.sections:e.sectionsTables?(e.sectionsTables.forEach(function(e){n._processTableJson(e,t,"page",o),!1!==o.backgroundForeground&&(e.backgroundSectionJson&&t.push(e.backgroundSectionJson),e.foregroundSectionJson&&t.push(e.foregroundSectionJson)),!1!==o.floatingTables&&e.floatingTablesSectionJson&&e.floatingTablesSectionJson.stack.forEach(function(e){"table"===e.id&&n._processTableJson(e,t,"floating",o)})}),t.filter(function(n){return!!n.stack})):[]:[]},n._processTableJson=function(n,o,t,s){n.data.data.forEach(function(i,r){i.fieldInfos&&Object.keys(i.fieldInfos).forEach(function(f){var a=i.fieldInfos[f];s.processFieldInfoFunc&&s.processFieldInfoFunc(a);i.style.fields;a&&a.sectionJson&&(!1!==s.saveParentInfo&&e.provideParentInfo(a.sectionJson,n,i,r,f,t),o.push(a.sectionJson))})}),e.sanitize(n)},n.getParentBox=function(n){return n&&n._parentBox},n.getParentStyle=function(n){return n&&n._parentStyle},n});