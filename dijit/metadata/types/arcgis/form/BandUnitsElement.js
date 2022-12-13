// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/has","../../../../../kernel","../../../base/etc/docUtil","../../../form/OpenElement","dojo/i18n!../../../nls/i18nBase"],(function(t,e,n,i,a,r,d,s){var l=t([d],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){this.inherited(arguments);var t=this._findMinInputWgt();t&&this.own(n.after(t,"emitInteractionOccurred",e.hitch(this,(function(){this.inputWidget&&this.inputWidget.emitInteractionOccurred()}))))}},beforeValidateValue:function(t,n,i){if(null===i||0===e.trim(i).length){var a=this._findMinInputWgt().getInputValue();if(!(null===a||0===e.trim(a).length)){var r=s.validation.pattern,d=s.validation.empty;n.isValid=!1,n.message=r.replace("{label}",n.label).replace("{message}",d)}}},_findMinInputWgt:function(){var t=this.parentElement.parentElement,e=t.parentElement.gxePath+"/",n=t.domNode.parentNode;return r.findInputWidget(e+"minVal",n)}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.BandUnitsElement",l,a),l}));