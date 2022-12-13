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

define(["dojo/_base/declare","dojo/has","../../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/_base/Color","dojo/dom-construct","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/text!./templates/RFxCustomExtent.html","dojo/i18n!../../nls/jsapi","./utils"],(function(t,e,i,n,o,s,a,u,d,r,l,m,x,h,c){var j=t("esriCustomExtent",[n,o,s],{declaredClass:"esri.dijit.RasterFunctionEditor.CustomExtent",templateString:x,constructor:function(){this.inherited(arguments),this._i18n=h.rasterFunctions.rfxArgs},postCreate:function(){this.inherited(arguments)},_onChange:function(){},updateExtent:function(t){t&&(this.value=t,this.topInput.set("value",t.ymax),this.bottomInput.set("value",t.ymin),this.leftInput.set("value",t.xmin),this.rightInput.set("value",t.xmax))},_getValueAttr:function(){return this.value?{xmin:this.value.xmin,ymin:this.value.ymin,xmax:this.value.xmax,ymax:this.value.ymax}:void 0}});return e("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.CustomExtent",j,i),j}));