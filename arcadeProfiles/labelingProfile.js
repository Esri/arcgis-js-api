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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../promiseList","../arcade/Feature","../support/expressionUtils","./utils"],(function(e,r,t,a,n,s,i,o){var l=new(e(null,{declaredClass:"esri.arcadeProfiles.LabelingProfile",defaults:{context:{vars:{$feature:"any"}}},initialize:function(e){var r=[];return o.hasGeometryOperations(e)&&r.push(i.enableGeometryOperations()),n(r)},isAsync:function(e){return!1},parse:function(e){return i.createSyntaxTree(e.expression)},compile:function(e){var t=r.clone(this.defaults.context);return e.syntaxTree?i.createFunction(e.syntaxTree,t):null},getEvalOptions:function(e){var r=e.feature;return{context:{vars:{$feature:r&&e.expression.hasVariable("$feature")?s.createFromGraphicLikeObject(r.geometry,r.attributes,e.layer):null},spatialReference:e.spatialReference}}}}));return t("extend-esri")&&r.setObject("arcadeProfiles.labelingProfile",l,a),l}));