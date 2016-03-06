// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../../kernel","dijit/_WidgetBase","./ISO19139A1_ROW4","./ISO19139A1_ROW6","./ISO19139A1_ROW7","./ISO19139A1_ROW9","./ISO19139A1_ROW10_11_12","./ISO19139A1_ROW15","./ISO19139A1_ROW18","./INSPIRE_AccessLimitation","./INSPIRE_ConformanceResult","./INSPIRE_DomainConsistency","./INSPIRE_LineageStatement","./INSPIRE_UseLimitation","./FGDC_DescIfTemporal","./FGDC_Keywords","./FGDC_Reports","./FGDC_Temporal","./NAP_Contact","./GEN_BoundingBox","./GEN_ReportResult"],function(e,a,t,n,o,d,s,i,I,r,c,f,m,w,_,g,R,A,p,O,S,C,N,l,u){var P=e(d,{postCreate:function(){this.inherited(arguments)},connectXNode:function(e,n){var o=n.gxePath,d=e.isAgsISO19139||e.isAgsINSPIRE||e.isAgsNAP,P=e.isAgsINSPIRE,E=e.isAgsNAP,D=e.isAgsFGDC;if(!e.isViewOnly){var q=function(e){a.isArray(e)?t.forEach(e,function(e){e.parentXNode=n,e.startup()}):(e.parentXNode=n,e.startup()),n.conditionalValidator=e},G=!1;"/metadata/mdConst/LegConsts"===o?q(new I):"/metadata/dataIdInfo/resConst/LegConsts"===o?q(new I):"/metadata/dataIdInfo/aggrInfo"===o?q(new i):"/metadata/spatRepInfo/Georect/chkPtDesc"===o&&q(new f),d&&("/metadata/dataIdInfo"===o?q(P?[new l,new w,new A]:new s):"/metadata/dqInfo"===o?P&&q(new g):"/metadata/dqInfo/dqScope/scpLvl"===o?q(new r):"/metadata/dqInfo/dataLineage"===o?P||q(new c):"/metadata/dqInfo/dataLineage/statement"===o?P&&q(new R):"/metadata/dqInfo/report"===o?q(P?[new _,new u]:new u):"/metadata/distInfo"===o&&G&&q(new m)),D&&("/metadata/dataIdInfo"===o?q([new O,new l,new C]):"/metadata/dqInfo"===o?q(new S):"/metadata/dqInfo/report"===o?q(new u):"exDesc"===n.target&&q(new p)),E&&"rpCntInfo"===n.target&&q(new N)}}});return n("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.base.conditionals.Conditionals",P,o),P});