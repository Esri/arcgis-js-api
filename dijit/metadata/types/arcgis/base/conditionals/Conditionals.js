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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../../kernel","dijit/_WidgetBase","./ISO19139A1_ROW4","./ISO19139A1_ROW6","./ISO19139A1_ROW7","./ISO19139A1_ROW9","./ISO19139A1_ROW10_11_12","./ISO19139A1_ROW15","./ISO19139A1_ROW18","./INSPIRE_AccessLimitation","./INSPIRE_ConformanceResult","./INSPIRE_DomainConsistency","./INSPIRE_LineageStatement","./INSPIRE_UseLimitation","./FGDC_DescIfTemporal","./FGDC_Keywords","./FGDC_Reports","./FGDC_Temporal","./NAP_Contact","./GEN_BoundingBox","./GEN_ReportResult"],function(e,a,t,n,o,d,s,i,I,r,c,_,f,w,m,g,R,A,p,O,S,C,N,l,P){var u=e(d,{postCreate:function(){this.inherited(arguments)},connectXNode:function(e,n){var o=n.gxePath,d=e.isAgsISO19139||e.isAgsINSPIRE||e.isAgsNAP,f=e.isAgsINSPIRE,u=e.isAgsNAP,E=e.isAgsFGDC;if(!e.isViewOnly){var D=function(e){a.isArray(e)?t.forEach(e,function(e){e.parentXNode=n,e.startup()}):(e.parentXNode=n,e.startup()),n.conditionalValidator=e};"/metadata/mdConst/LegConsts"===o?D(new I):"/metadata/dataIdInfo/resConst/LegConsts"===o?D(new I):"/metadata/dataIdInfo/aggrInfo"===o?D(new i):"/metadata/spatRepInfo/Georect/chkPtDesc"===o&&D(new _),d&&("/metadata/dataIdInfo"===o?D(f?[new l,new w,new A]:new s):"/metadata/dqInfo"===o?f&&D(new g):"/metadata/dqInfo/dqScope/scpLvl"===o?D(new r):"/metadata/dqInfo/dataLineage"===o?f||D(new c):"/metadata/dqInfo/dataLineage/statement"===o?f&&D(new R):"/metadata/dqInfo/report"===o&&D(f?[new m,new P]:new P)),E&&("/metadata/dataIdInfo"===o?D([new O,new l,new C]):"/metadata/dqInfo"===o?D(new S):"/metadata/dqInfo/report"===o?D(new P):"exDesc"===n.target&&D(new p)),u&&"rpCntInfo"===n.target&&D(new N)}}});return n("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.base.conditionals.Conditionals",u,o),u});