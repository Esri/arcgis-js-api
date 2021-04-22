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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["./utils","dojo/_base/array","./resultrenderers/simpleResultRenderers"],(function(e,r,a){var t,n,s={};return s.createResultRenderer=function(s,u,d){var l,i=function(e){if("result map service"===e.dataType)return"AddResultImageLayer";return"GPFeatureRecordSetLayer"===e.dataType?"DrawResultFeatureSet":"GPRecordSet"===e.dataType?"RecordSetTable":"error"===e?"Error":"SimpleResultRenderer"}(s),o={param:s,widgetUID:d.uid,map:t,nls:n,config:d.config};if("DrawResultFeatureSet"===i)o.value=u.value,l=new a.DrawResultFeatureSet(o);else if("RecordSetTable"===i)o.value=u.value,l=new a.RecordSetTable(o);else if("SimpleResultRenderer"===i){var p="",R=u.value;Array.isArray(R)||(R=[R]),r.forEach(R,(function(r){""!==p&&(p+="<br>"),["GPLong","GPDouble","GPString","GPBoolean"].some((function(e){return s.dataType.indexOf(e)>=0}))?p+=e.sanitizeHTML(r):s.dataType.indexOf("GPLinearUnit")>=0?p+=r.distance+"&nbsp;"+r.units:s.dataType.indexOf("GPDate")>=0?p+=new Date(r).toLocaleTimeString():s.dataType.indexOf("GPRecordSet")>=0?p+="table":(s.dataType.indexOf("GPDataFile")>=0||s.dataType.indexOf("GPRasterDataLayer")>=0)&&(r.url?p+='<a style="word-wrap:break-word;" target="_blank" href="'+r.url+'">'+r.url+"</a>":p+=s.paramName+": null")})),o.message=p,l=new a.SimpleResultRenderer(o)}else"AddResultImageLayer"===i?(o.layer=u,l=new a.AddResultImageLayer(o)):"UnsupportRenderer"===i?(o.message="type "+s.dataType+" is not supported for now.",l=new a.UnsupportRenderer(o)):"Error"===i?(o.message=n.error,l=new a.ErrorResultRenderer(o)):(o.message="unknown renderer name: "+i,l=new a.UnsupportRenderer(o));return l},s.setMap=function(e){t=e},s.setNls=function(e){n=e},s}));