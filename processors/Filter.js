// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","../core/Accessoire","../core/Collection"],function(e,n,r){var t=e([n],{declaredClass:"esri.processors.Filter",_changeHandler:null,input:null,_inputSetter:function(e,n){return Array.isArray(e)&&(e=new r(e)),this._changeHandler&&(this._changeHandler.remove(),this._changeHandler=null),e&&e.isInstanceOf(r)?(this._changeHandler=e.on("change",this.run.bind(this)),e):e?n:null},output:null,run:function(e){this.output&&(e.added.length&&this.output.addMany(e.added.slice()),e.removed.length&&this.output.removeMany(e.removed.slice()))}});return t});