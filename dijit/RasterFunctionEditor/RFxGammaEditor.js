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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel","./RFxArgSlider"],(function(t,a,e,i,r,s){var n=t("RFxGammaSlider",[s],{min:-1,max:10,value:1,constructor:function(t){var e;this.inherited(arguments),a.mixin(this,t),(e=this.inputArgs&&this.inputArgs.Gamma)&&(this.gammaArg=e,this.label=e.name,this.value=e.value&&e.value[0]||this.value)},_setValueAttr:function(t){var a=[];if(this.value=t,this.inputArgs&&this.inputArgs.Raster)var e=this.inputArgs.Raster.input,i=e.store&&e.store.get(e.value),r=i&&i.bandCount;if(r)for(;r--;)a.push(t);else a=[t];this.gammaArg&&(this.gammaArg.value=a)}});return i("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxGammaEditor",n,r),n}));