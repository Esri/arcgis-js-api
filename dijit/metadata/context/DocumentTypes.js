// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../kernel","dijit/_WidgetBase","../types/arcgis/base/DocumentType"],function(e,t,i,n,a,s,o){var r=e([s],{index:null,list:null,postCreate:function(){this.inherited(arguments),this._initializeTypes()},_initializeTypes:function(){var e=this.list=[],t=this.index={},i=function(i){t[i.key]=i,e.push(i)};i(new o({interrogationRules:[{path:"/metadata/Esri/ArcGISFormat",must:!0}]}))}});return n("extend-esri")&&t.setObject("dijit.metadata.context.DocumentTypes",r,a),r});