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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","dojo/store/Memory","dojo/data/ObjectStore","dijit/form/Select"],(function(e,t,a,s,i,r,n){var l=e([n],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxScaleSelect",startup:function(){this.inherited(arguments),this.setScaleOptions()},setScaleOptions:function(){!this.evalValues||2!==this.evalValues.length||isNaN(parseInt(this.evalValues[0],10))||isNaN(parseInt(this.evalValues[1],10))||this.evalValues[0]>this.evalValues[1]||(this.set("labelAttr","name"),this.set("store",this._getScaleStore(this.evalValues)),this.reset())},_getScaleStore:function(e){for(var t=parseInt(e[0],10),a=parseInt(e[1],10),s=[],n=t;n<=a;n++)s.push({name:n.toString(),value:n});return s.push({name:"NODATA",value:"NODATA"}),new r(new i({data:s,idProperty:"name"}))}});return a("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxRasterInput",l,s),l}));