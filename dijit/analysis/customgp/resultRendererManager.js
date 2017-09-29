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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

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

define(["./utils","dojo/_base/array","./resultrenderers/simpleResultRenderers"],function(e,r,a){function t(e){return"result map service"===e.dataType?"AddResultImageLayer":"GPFeatureRecordSetLayer"===e.dataType?"DrawResultFeatureSet":"GPRecordSet"===e.dataType?"RecordSetTable":"error"===e?"Error":"SimpleResultRenderer"}var n,s,u={};return u.createResultRenderer=function(u,d,l){var i,o=t(u),p={param:u,widgetUID:l.uid,map:n,nls:s,config:l.config};if("DrawResultFeatureSet"===o)p.value=d.value,i=new a.DrawResultFeatureSet(p);else if("RecordSetTable"===o)p.value=d.value,i=new a.RecordSetTable(p);else if("SimpleResultRenderer"===o){var R="",f=d.value;Array.isArray(f)||(f=[f]),r.forEach(f,function(r){""!==R&&(R+="<br>"),["GPLong","GPDouble","GPString","GPBoolean"].some(function(e){return u.dataType.indexOf(e)>=0})?R+=e.sanitizeHTML(r):u.dataType.indexOf("GPLinearUnit")>=0?R+=r.distance+"&nbsp;"+r.units:u.dataType.indexOf("GPDate")>=0?R+=new Date(r).toLocaleTimeString():u.dataType.indexOf("GPRecordSet")>=0?R+="table":(u.dataType.indexOf("GPDataFile")>=0||u.dataType.indexOf("GPRasterDataLayer")>=0)&&(R+=r.url?'<a target="_blank" href="'+r.url+'">'+r.url+"</a>":u.paramName+": null")}),p.message=R,i=new a.SimpleResultRenderer(p)}else"AddResultImageLayer"===o?(p.layer=d,i=new a.AddResultImageLayer(p)):"UnsupportRenderer"===o?(p.message="type "+u.dataType+" is not supported for now.",i=new a.UnsupportRenderer(p)):"Error"===o?(p.message=s.error,i=new a.ErrorResultRenderer(p)):(p.message="unknown renderer name: "+o,i=new a.UnsupportRenderer(p));return i},u.setMap=function(e){n=e},u.setNls=function(e){s=e},u});