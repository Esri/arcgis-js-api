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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../../../kernel","../../../base/InputBase","dojo/text!./templates/InputProfile.html","dojo/i18n!../../../nls/i18nBase","dojo/i18n!../../../nls/i18nArcGIS","dijit/Dialog","../../../editor/util/OkCancelBar","../../../base/ValidationTracker","../../../base/xml/xmlUtil","../base/arcgisStyles"],(function(e,t,i,a,n,o,r,s,l,d,c,u,h,f,p,m,g,y,_){var v=e([c],{i18nArcGIS:f,templateString:u,_inputValue:null,_displayValue:null,postCreate:function(){this.inherited(arguments)},connectXNode:function(e,t){this.inherited(arguments);var i=e.value;this._inputValue=i,this._displayValue=this._findDisplayValue(i),t?this.applyViewOnly():this.setNodeText(this.focusNode,this._displayValue)},_findDisplayValue:function(e){var t=_.findByName(e);return t?t.label:e},getDisplayValue:function(){return this._displayValue},getInputValue:function(){return this._inputValue},_onChangeProfileClick:function(){this._showDialog()},_reloadEditor:function(){var e=this.parentXNode.gxeDocument,i=e._editor.primaryToolbar;i._fadeOut(f.metadataStyle.updating,t.hitch(this,(function(){var a=new g({ignoreErrors:!0}),n=e.generateXml(a),o=null;if(n)try{o=y.parseFromString(n)}catch(e){o=null,console.error(e)}i.editor.loadEditor(e.documentType,o,!1,!1).then(t.hitch(this,(function(t){t.documentType.afterTransform(t,e),i._fadeIn()})),t.hitch(this,(function(e){i._fadeIn();var t=h.editor.transform.errorTransforming;i._handleError(t,e,!0)})))})))},_resetArcGISStyle:function(e,t){this._inputValue=t.name,this._displayValue=t.label,this.setNodeText(this.focusNode,this._displayValue);var i,o=this.parentXNode.parentElement.domNode,r=a("[data-gxe-path='/metadata/Esri/ArcGISProfile']",o);r&&1===r.length&&(i=n.byNode(r[0]))&&i.inputWidget.setInputValue(t.profile),e.hide(),this._reloadEditor()},_showDialog:function(){var e=null,a=f.metadataStyle.dialogTitle,n=r.create("div",{}),s=r.create("div",{class:"gxeTransformPane"},n),l=t.hitch(this,(function(i){if(this._inputValue!==i.name){var a=i.label,n=r.create("div",{},s),o=r.create("div",{class:"gxeClickableText gxeLine",onclick:t.hitch(this,(function(){this._resetArcGISStyle(e,i)}))},n);this.setI18nNodeText(o,a)}})),d=_.getAll();i.forEach(d,(function(e){"Item Description"!==e.name&&l(e)}));var c=new m({showOk:!1,onCancelClick:t.hitch(this,(function(){e&&e.hide()}))},r.create("div",{},n));e=new p({class:"gxeDialog gxePopupDialog",title:a,content:n}),this.isLeftToRight()||o.add(e.domNode,"gxeRtl"),this.own(e.on("hide",t.hitch(this,(function(){setTimeout(t.hitch(this,(function(){c.destroyRecursive(!1),e.destroyRecursive(!1)})),300)})))),e.show()}});return l("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputProfile",v,d),v}));