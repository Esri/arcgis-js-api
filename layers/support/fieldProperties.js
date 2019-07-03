// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","../../core/Logger","./Field","./fieldUtils"],function(e,i,r,t,l,s){function d(){return{fields:{type:[l],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var e=this._userOutFields;if(!e||!e.length)return null;if(r.includes(e,"*"))return["*"];if(!this.fields)return e;for(var i=0,t=e;i<t.length;i++){var l=t[i];s.hasField(this.fields,l)||n.error("field-attributes-layer:invalid-field","Invalid field "+l+" found in outFields",{layer:this,outFields:e})}return s.fixFields(this.fields,e)}}}}Object.defineProperty(i,"__esModule",{value:!0});var n=t.getLogger("esri.layers.support.fieldProperties");i.defineFieldProperties=d});