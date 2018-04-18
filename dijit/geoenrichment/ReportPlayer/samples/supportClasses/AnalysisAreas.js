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

define(["dojo/Deferred","require","../../dataProvider/supportClasses/AnalysisAreaJsonUtil"],function(e,r,a){function t(e,r){return{name:"Area name "+(e+1),shortName:"Area name (short)",description:"Area description",address:"Area address",latitude:"Area Lat.",longitude:"Area Long.",feature:{geometry:{rings:[r],spatialReference:{wkid:102100}},attributes:{ATTR_1:1000.12345,ATTR_2:2000.12345,ATTR_3:3000.12345},symbol:{color:[255*Math.random(),255*Math.random(),255*Math.random(),50],outline:{color:[255*Math.random(),255*Math.random(),255*Math.random(),255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"},infoTemplate:{fieldInfos:[{fieldName:"ATTR_1",label:"Attribute 1",format:{places:1},visible:!0},{fieldName:"ATTR_2",label:"Attribute 2",format:{places:2},visible:!0},{fieldName:"ATTR_3",label:"Attribute 3",format:{places:3},visible:!0}]}}}}function i(){return{name:"Area name",shortName:"Area name (short)",description:"Area description",address:"Area address",latitude:"Area Lat.",longitude:"Area Long.",geographies:[{id:"32",levelId:"US.States"},{id:"06",levelId:"US.States"}]}}var s={},n=[[[-10800107.01591563,3862641.714572819],[-10716918.351420047,4636712.237704219],[-9901669.439363334,4969050.952364072],[-9909988.305812893,4278585.037050734],[-10800107.01591563,3862641.714572819]],[[-10800107.01591563,3962641.714572819],[-10716918.351420047,4536712.237704219],[-9901669.439363334,4769050.952364072],[-9909988.305812893,4078585.037050734],[-10800107.01591563,3962641.714572819]]],o=[[[-8238372.646123883,4971599.356069453],[-8236117.753789412,4970600.8973874515],[-8235730.791333708,4968556.206880769],[-8240211.912117044,4969607.216019718],[-8238372.646123883,4971599.356069453]],[[-13032302.66381737,3851406.1422664886],[-13046519.951078394,3860043.526462702],[-13035016.17832149,3868451.59957406],[-13032302.66381737,3851406.1422664886]],[[-8230561.737296041,4970041.951618072],[-8217605.661001721,4967137.344543238],[-8231746.5112344595,4958347.086290455],[-8230561.737296041,4970041.951618072]],[[-13031433.192620628,3862145.544740542],[-13024114.34716233,3860005.3079485595],[-13031719.831476696,3855113.338138315],[-13031433.192620628,3862145.544740542]]];return s.getAreas=function(s){for(var l=[],d=0;d<s.numAreas;d++){var u=s.big?n:o,m=u[d]||u[0],A=s.isGeographyId?i():t(d,m);l.push(A)}return s.initialize&&(l=a.areasFromJson(l),l.forEach(function(a){a.feature&&(a.feature.getLayer=function(){return{hasAttachments:!0,queryAttachmentInfos:function(){var a=new e;return r(["../../core/supportClasses/images/DefaultAttachment"],function(e){a.resolve([{url:e}])}),a.promise}}})})),l},s});