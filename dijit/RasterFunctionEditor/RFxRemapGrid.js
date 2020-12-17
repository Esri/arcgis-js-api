// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../analysis/RemapGrid"],(function(t,s,e,a,n){var i=t("RFxRemapGrid",[n],{inputArgs:{},constructor:function(t){this.inherited(arguments),this.own(this.on("change",s.hitch(this,this._updateInputArgs)))},postCreate:function(){this.inherited(arguments),this._setArgVisibilities(),this._setRanges()},_setArgVisibilities:function(){var t,s="none";for(var e in this.inputArgs)this.inputArgs.hasOwnProperty(e)&&((t=this.inputArgs[e]).hasOwnProperty("isPublic")&&!t.isPublic||(s="block"));this.domNode.style.display=s},_setRanges:function(){var t={},s=this.inputArgs;s&&(s.InputRanges&&(t.InputRanges=s.InputRanges.value),s.OutputValues&&(t.OutputValues=s.OutputValues.value),s.NoDataRanges&&(t.NoDataRanges=s.NoDataRanges.value),this.set("ranges",t))},_updateInputArgs:function(){var t=this.get("ranges"),s=this.inputArgs;s&&t&&(s.InputRanges&&(s.InputRanges.value=t.InputRanges),s.OutputValues&&(s.OutputValues.value=t.OutputValues),s.NoDataRanges&&(s.NoDataRanges.value=t.NoDataRanges))}});return e("extend-esri")&&s.setObject("dijit.RasterFunctionEditor.RFxRemapGrid",i,a),i}));