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

define(["dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/has","../../../../../kernel"],function(a,t,e,d,n){var o={beforeInitializeElement:function(a,t){var d,n,o=t.gxePath,i=function(){t.hide=!0,t.notApplicable=!0,t.domNode.style.display="none"},r=function(){var a=t.getParent();a&&(a._isGxeDescriptor||a.initializeSection)&&(a.notApplicable=!0)},s=function(){for(var a=t,e=null;a;){if(a._isGxeTabs){e&&(e.notApplicable=!0);break}e=a,a=a.getParent()}};"/metadata"===o||"/metadata/Esri"===o||"/metadata/dataIdInfo"===o?d=null:"/metadata/dqInfo"===o||"/metadata/distInfo"===o?(i(),r()):"/metadata/contInfo"===o||"/metadata/eainfo"===o?(i(),r()):"/metadata/refSysInfo"===o?(i(),function(){var a,e,d=t.getParent();d&&(d._isGxeDescriptor||d.initializeSection)&&(d.notApplicable=!0,(a=d.getParent())&&a._isGxeTabs&&(e=a.getParent())&&e._isGxeDescriptor&&(e.notApplicable=!0))}()):"/metadata/spatRepInfo"===o||"/metadata/appSchInfo"===o||"/metadata/porCatInfo"===o?(i(),r()):"/metadata/mdContact"===o||"/metadata/mdMaint"===o||"/metadata/mdConst"===o?(i(),r()):"/metadata/dataIdInfo/idPoC"===o||"/metadata/dataIdInfo/resMaint"===o?(i(),r()):"/metadata/dataIdInfo/idAbs"===o?(n=t.getParent().getParent().getParent(),n.tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):"/metadata/dataIdInfo/suppInfo"===o||"/metadata/dataIdInfo/envirDesc"===o?i():"/metadata/dataIdInfo/dataLang"===o||"/metadata/dataIdInfo/dataChar"===o?(i(),r()):"/metadata/dataIdInfo/idStatus"===o||"/metadata/dataIdInfo/spatRpType"===o?(i(),r()):"/metadata/dataIdInfo/dataScale"===o?(i(),r()):"/metadata/dataIdInfo/searchKeys"===o?(n=t.getParent().getParent(),n.tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):"/metadata/dataIdInfo/tpCat"===o?(i(),r()):"/metadata/dataIdInfo/themeKeys"===o||"/metadata/dataIdInfo/placeKeys"===o?(i(),r()):"/metadata/dataIdInfo/tempKeys"===o||"/metadata/dataIdInfo/discKeys"===o?(i(),r()):"/metadata/dataIdInfo/stratKeys"===o||"/metadata/dataIdInfo/otherKeys"===o?(i(),r()):"/metadata/dataIdInfo/graphOver"===o?(i(),t.getParent().getParent().notApplicable=!0,t.getParent().getParent().getParent().getParent().notApplicable=!0):"/metadata/dataIdInfo/dsFormat"===o||"/metadata/dataIdInfo/idSpecUse"===o?(i(),r()):"/metadata/dataIdInfo/aggrInfo"===o?(i(),r()):"/metadata/Esri/locales"===o?i():"/metadata/Binary"===o?(t.getParent().notApplicable=!0,s()):"/metadata/Esri/CreaDate"===o?(t.getParent().notApplicable=!0,s()):"/metadata/Esri/ArcGISstyle"===o?(n=function(){for(var a=t;a;){if(a._isGxeTabs)return a;a=a.getParent()}return null}())&&(n.tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):(d=o.substring(10),-1===d.indexOf("/")?(i(),"mdHrLv"===d?r():"mdLang"===d&&s()):0===d.indexOf("dataIdInfo/")&&(d=d.substring(11),-1===d.indexOf("/")&&0===d.indexOf("sv")?i():0===d.indexOf("idCitation/")&&("idCitation/resTitle"==d?(n=t.getParent().getParent(),n.tabsNode.style.display="none",e.remove(n.domNode,"gxeTabs gxeIndent")):i())))}};return d("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.base.itemDescription",o,n),o});