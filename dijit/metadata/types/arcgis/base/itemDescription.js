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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/has","../../../../../kernel"],(function(a,t,e,d,n){var o={beforeInitializeElement:function(a,t){var d,n,o,i,r,s=t.gxePath,I=function(){t.hide=!0,t.notApplicable=!0,t.domNode.style.display="none"},m=function(){var a=t.getParent();a&&(a._isGxeDescriptor||a.initializeSection)&&(a.notApplicable=!0)},f=function(){for(var a=t,e=null;a;){if(a._isGxeTabs){e&&(e.notApplicable=!0);break}e=a,a=a.getParent()}};"/metadata"===s||"/metadata/Esri"===s||"/metadata/dataIdInfo"===s?d=null:"/metadata/dqInfo"===s||"/metadata/distInfo"===s?(I(),m()):"/metadata/contInfo"===s||"/metadata/eainfo"===s?(I(),m()):"/metadata/refSysInfo"===s?(I(),(r=t.getParent())&&(r._isGxeDescriptor||r.initializeSection)&&(r.notApplicable=!0,(o=r.getParent())&&o._isGxeTabs&&(i=o.getParent())&&i._isGxeDescriptor&&(i.notApplicable=!0))):"/metadata/spatRepInfo"===s||"/metadata/appSchInfo"===s||"/metadata/porCatInfo"===s?(I(),m()):"/metadata/mdContact"===s||"/metadata/mdMaint"===s||"/metadata/mdConst"===s?(I(),m()):"/metadata/dataIdInfo/idPoC"===s||"/metadata/dataIdInfo/resMaint"===s?(I(),m()):"/metadata/dataIdInfo/idAbs"===s?((n=t.getParent().getParent().getParent()).tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):"/metadata/dataIdInfo/suppInfo"===s||"/metadata/dataIdInfo/envirDesc"===s?I():"/metadata/dataIdInfo/dataLang"===s||"/metadata/dataIdInfo/dataChar"===s?(I(),m()):"/metadata/dataIdInfo/idStatus"===s||"/metadata/dataIdInfo/spatRpType"===s?(I(),m()):"/metadata/dataIdInfo/dataScale"===s?(I(),m()):"/metadata/dataIdInfo/searchKeys"===s?((n=t.getParent().getParent()).tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):"/metadata/dataIdInfo/tpCat"===s?(I(),m()):"/metadata/dataIdInfo/themeKeys"===s||"/metadata/dataIdInfo/placeKeys"===s?(I(),m()):"/metadata/dataIdInfo/tempKeys"===s||"/metadata/dataIdInfo/discKeys"===s?(I(),m()):"/metadata/dataIdInfo/stratKeys"===s||"/metadata/dataIdInfo/otherKeys"===s?(I(),m()):"/metadata/dataIdInfo/graphOver"===s?(I(),t.getParent().getParent().notApplicable=!0,t.getParent().getParent().getParent().getParent().notApplicable=!0):"/metadata/dataIdInfo/dsFormat"===s||"/metadata/dataIdInfo/idSpecUse"===s?(I(),m()):"/metadata/dataIdInfo/aggrInfo"===s?(I(),m()):"/metadata/Esri/locales"===s?I():"/metadata/Binary"===s?(t.getParent().notApplicable=!0,f()):"/metadata/Esri/CreaDate"===s?(t.getParent().notApplicable=!0,f()):"/metadata/Esri/ArcGISstyle"===s?(n=function(){for(var a=t;a;){if(a._isGxeTabs)return a;a=a.getParent()}return null}())&&(n.tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):-1===(d=s.substring(10)).indexOf("/")?(I(),"mdHrLv"===d?m():"mdLang"===d&&f()):0===d.indexOf("dataIdInfo/")&&(-1===(d=d.substring(11)).indexOf("/")&&0===d.indexOf("sv")?I():0===d.indexOf("idCitation/")&&("idCitation/resTitle"==d?((n=t.getParent().getParent()).tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):I()))}};return d("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.base.itemDescription",o,n),o}));