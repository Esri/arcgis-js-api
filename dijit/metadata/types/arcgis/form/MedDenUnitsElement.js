// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/has","../../../../../kernel","../../../form/OpenElement","dojo/i18n!../../../nls/i18nBase"],function(e,t,a,n,i,r,o,s,d){var l=e([s],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(e,a,n){var i=null===n||0===t.trim(n).length;if(i){var r=this._hasDensityValue();if(r){var o=d.validation.pattern,s=d.validation.empty;a.isValid=!1,a.message=o.replace("{label}",a.label).replace("{message}",s)}}},_hasDensityValue:function(){var e=this.parentElement.gxePath+"/medDensity",r=this.domNode.parentNode,o=n("[data-gxe-path='"+e+"']",r),s=a.some(o,function(e){var a,n=i.byNode(e);return n&&n.inputWidget?(a=n.inputWidget.getInputValue(),!(null===a||0===t.trim(a).length)):void 0});return s}});return r("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.MedDenUnitsElement",l,o),l});