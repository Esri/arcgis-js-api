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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./DataSource"],function(e,a,r,o,s,t){var n=e(t,{declaredClass:"esri.layers.TableDataSource",toJson:function(){var e={type:"table",workspaceId:this.workspaceId,dataSourceName:this.dataSourceName,gdbVersion:this.gdbVersion};return s.fixJson(e)}});return r("extend-esri")&&a.setObject("layers.TableDataSource",n,o),n});