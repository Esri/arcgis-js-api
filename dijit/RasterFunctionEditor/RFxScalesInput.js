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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/store/Memory","dojo/text!./templates/RFxScalesInput.html","dijit/form/ComboBox"],(function(t,e,i,s,o,a,n,r,l){var h=t([o,a,n],{templateString:l,declaredClass:"esri.dijit.RasterFunctionEditor.RFxScalesInput",evalOptions:{from:[1,1,1,1,1,1,1,1,1,1],to:[3,5,7,9,10,20,25,50,75,100]},startup:function(){this._initStore(),this.scalesComboBox.startup(),this.scalesComboBox.set("required",!1),this.scalesComboBox.set("validator",e.hitch(this,this.validator)),this.scalesComboBox.set("value",this.EvalFrom+"-"+this.EvalTo),this.inherited(arguments)},validator:function(t,e){if(""===t)return!1;t=t.replace(/\s/g,"");var i=this._getStoreItems(t);if(i&&i.length>0)return!0;var s=t.split("-");if(2!==s.length)return!1;var o=parseInt(s[0],10),a=parseInt(s[1],10);return!isNaN(o)&&!isNaN(a)&&(o<=a&&(this._addNewEvalValues(o,a),!0))},_onScalesChange:function(t){this.value&&t===this.value.name||(this.value=this.get("value"),this.emit("change",e.clone(this.value)))},_setEvalFromTo:function(t,e){this.EvalFrom=t,this.EvalTo=e},_addNewEvalValues:function(t,e){this.evalOptions.from.unshift(t),this.evalOptions.to.unshift(e),this._initStore()},_getStoreItems:function(t){return this.scalesComboBox.store&&this.scalesComboBox.store.query({name:t})},_initStore:function(){var t=[];this.evalOptions.to.forEach((function(e,i){t.push({id:i,name:this.evalOptions.from[i]+"-"+e})}),this);var e=new r({data:t,idProperty:"id"});this.scalesComboBox.set("store",e)}});return i("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxRasterInput",h,s),h}));