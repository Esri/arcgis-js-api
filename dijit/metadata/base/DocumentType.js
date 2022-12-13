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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dijit/_WidgetBase","../../../kernel"],(function(e,n,t,i,a,r){var o=e([a],{caption:null,description:null,key:null,metadataStandardName:null,metadataStandardVersion:null,namespaces:null,postCreate:function(){this.inherited(arguments),this.namespaces=[],this.initialize(),this.initializeNamespaces()},addNamespace:function(e,n){this.namespaces.push({prefix:e,uri:n})},afterInitializeAttribute:function(e,n){},afterInitializeElement:function(e,n){},afterTransform:function(e,n){},beforeInitializeAttribute:function(e,n){},beforeInitializeElement:function(e,n){},getCaption:function(){return null},getKey:function(){return this.key},getNamespaces:function(){return this.namespaces},initialize:function(){},initializeNamespaces:function(){},newPortalItemTransformer:function(e){return null},newRootDescriptor:function(){return null}});return i("extend-esri")&&n.setObject("dijit.metadata.base.DocumentType",o,r),o}));