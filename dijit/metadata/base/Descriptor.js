// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./Templated","../context/DescriptorMixin","../../../kernel"],function(e,t,r,s,i,n,o){var a=e([i,n],{_escapeSingleQuotes:!0,_isGxeDescriptor:!0,_replicas:null,postCreate:function(){this.inherited(arguments),this._replicas=[]},destroy:function(){try{r.forEach(this._replicas,function(e){try{e.destroyRecursive(!1)}catch(t){console.error(t)}})}catch(e){console.error(e)}this._replicas=[],this.inherited(arguments)},newInstance:function(){var e=new this.constructor;return this._replicas.push(e),e}});return s("extend-esri")&&t.setObject("dijit.metadata.base.Descriptor",a,o),a});