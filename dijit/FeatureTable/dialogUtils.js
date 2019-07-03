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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../lang","../FeatureAttachments","./dataUtils","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/dom-construct","dojo/dom-style","dojo/io-query","dojo/number","dojo/on","dojo/string","dijit/Dialog","dijit/form/Button","dijit/layout/BorderContainer","dijit/layout/TabContainer","dijit/layout/ContentPane","dojo/i18n!../../nls/jsapi"],function(e,t,a,i,s,n,o,l,r,d,c,u,f,m,g,v,b,h){return{i18nStrings:h.widgets.FeatureTable,generateDialog:function(e){var t=new f({title:e.title,content:e.content,baseClass:e.css.dialog});return o.create("div",{className:"break"},t.containerNode),t},hideDialog:function(e){e&&e.hide()},destroyDialog:function(e){e&&e.destroy()},generateAttachmentsDialog:function(e){var a,i,s,n,l,r=this.i18nStrings,d=e.layer,u=e.featureId,f=e.attachments||null,g=e.editable,v=e.css;return a=o.create("div"),s=this.generateDialog({title:r.photosAndFiles,content:a,css:v}),i=new t({layer:d,featureId:u,attachments:f,editable:g},a),c(s,"hide",function(e){i.destroy()}),l=new m({label:r.close,class:v.closeButton}),c(l,"click",function(){s.hide()}),n=i._uploadButton.domNode,l.placeAt(n,"after"),i.startup(),s.show(),{dialog:s,featureAttachments:i}},generateStatisticsDialog:function(t){var s,n,l,r,f,g,v,b,h=this.i18nStrings,j=t.data,D=t.css,y=t.fieldInfo,N=y.alias||y.name,p=j.features[0].attributes,w={pattern:"#,###,###,##0.########"},A={};for(f in p)p.hasOwnProperty(f)&&(A[f.toLowerCase()]=p[f]);return s=[{title:h.numberOfValues,value:e.isDefined(A.countfield)?d.format(A.countfield,w):""},{title:h.sumOfValues,value:e.isDefined(A.sumfield)?d.format(A.sumfield,w):""},{title:h.minimum,value:e.isDefined(A.minfield)?d.format(A.minfield,w):""},{title:h.maximum,value:e.isDefined(A.maxfield)?d.format(A.maxfield,w):""},{title:h.average,value:e.isDefined(A.avgfield)?d.format(d.round(A.avgfield,a.getRoundingPrecision(A.avgfield)),w):""},{title:h.standardDeviation,value:e.isDefined(A.stddevfield)?d.format(d.round(A.stddevfield,a.getRoundingPrecision(A.stddevfield)),w):""}],l=o.create("div",{className:D.statisticsTableContainer}),o.create("div",{className:D.statisticsHeader,innerHTML:u.substitute(h.fieldLabel,{fieldName:N})},l),o.create("div",{className:D.statisticsHorizontalBreak},l),g=o.create("table",{className:D.statisticsAttrTable,style:{cellpadding:0,cellspacing:0}},l),v=o.create("tbody",{},g),i.forEach(s,function(e){b=o.create("tr",{valign:"top"},v),o.create("td",{className:D.statisticsAttrName,innerHTML:e.title},b),o.create("td",{className:D.statisticsAttrValue,innerHTML:e.value},b)}),o.create("div",{className:D.statisticsBreak},l),n=new m({label:h.close,baseClass:D.closeButton}),c(n,"click",function(){var e=r;e.hide().then(function(){e.destroyRecursive(),n=null})}),n.placeAt(l),r=this.generateDialog({title:h.statistics,content:l,css:D}),r.show(),{dialog:r,statistics:p}}}});