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

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["./utils","dojo/_base/array","./resultrenderers/simpleResultRenderers"],function(e,r,a){function t(e){return"result map service"===e.dataType?"AddResultImageLayer":"GPFeatureRecordSetLayer"===e.dataType?"DrawResultFeatureSet":"GPRecordSet"===e.dataType?"RecordSetTable":"error"===e?"Error":"SimpleResultRenderer"}var n,s,d={};return d.createResultRenderer=function(d,u,l){var o,i=t(d),p={param:d,widgetUID:l.uid,map:n,nls:s,config:l.config};if("DrawResultFeatureSet"===i)p.value=u.value,o=new a.DrawResultFeatureSet(p);else if("RecordSetTable"===i)p.value=u.value,o=new a.RecordSetTable(p);else if("SimpleResultRenderer"===i){var R="",f=u.value;Array.isArray(f)||(f=[f]),r.forEach(f,function(r){""!==R&&(R+="<br>"),["GPLong","GPDouble","GPString","GPBoolean"].some(function(e){return d.dataType.indexOf(e)>=0})?R+=e.sanitizeHTML(r):d.dataType.indexOf("GPLinearUnit")>=0?R+=r.distance+"&nbsp;"+r.units:d.dataType.indexOf("GPDate")>=0?R+=new Date(r).toLocaleTimeString():d.dataType.indexOf("GPRecordSet")>=0?R+="table":(d.dataType.indexOf("GPDataFile")>=0||d.dataType.indexOf("GPRasterDataLayer")>=0)&&(r.url?R+='<a style="word-wrap:break-word;" target="_blank" href="'+r.url+'">'+r.url+"</a>":R+=d.paramName+": null")}),p.message=R,o=new a.SimpleResultRenderer(p)}else"AddResultImageLayer"===i?(p.layer=u,o=new a.AddResultImageLayer(p)):"UnsupportRenderer"===i?(p.message="type "+d.dataType+" is not supported for now.",o=new a.UnsupportRenderer(p)):"Error"===i?(p.message=s.error,o=new a.ErrorResultRenderer(p)):(p.message="unknown renderer name: "+i,o=new a.UnsupportRenderer(p));return o},d.setMap=function(e){n=e},d.setNls=function(e){s=e},d});