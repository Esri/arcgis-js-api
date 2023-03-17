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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../promiseList","../arcade/Feature","../support/expressionUtils","./utils"],(function(e,a,r,t,s,n,l,i){var o=new(e(null,{declaredClass:"esri.arcadeProfiles.PopupProfile",defaults:{globals:{featureSet:["$layer","$datastore","$map","$aggregatedfeatures"],async:["$layer","$datastore","$map","$aggregatedfeatures"]},context:{vars:{$feature:"any",$layer:"any",$datastore:"any",$map:"any",$aggregatedfeatures:"any"}}},initialize:function(e){var a=[];return i.hasGeometryOperations(e)&&a.push(l.enableGeometryOperations()),(i.hasFeatureSetOperations(e)||i.hasVariables(e,this.defaults.globals.featureSet))&&a.push(l.enableFeatureSetOperations()),i.isAsync(e)&&a.push(l.enableAsyncOperations()),s(a)},isAsync:function(e){var a=[e];return i.hasFeatureSetOperations(a)||i.hasVariables(a,this.defaults.globals.async)},parse:function(e){return l.createSyntaxTree(e.expression)},compile:function(e){var r=a.clone(this.defaults.context);return r.useAsync=e.async,e.syntaxTree?l.createFunction(e.syntaxTree,r):null},getEvalOptions:function(e){var a,r,t,s=e.expression,o=e.feature,u=e.layer,c=e.aggregatedFeaturesLayer,p=e.map,f=e.spatialReference,y=o&&s.hasVariable("$feature")?n.createFromGraphicLikeObject(o.geometry,o.attributes,u):null;if(u){var g={spatialReference:f};if(s.hasVariable("$layer")&&(a=u.getMap()?l.createFeatureSetFromLayer(u,g):l.createFeatureSetFromLayerUrl(u.url,g)),s.hasVariable("$datastore")){var d=i.getServiceUrl(u.url);r=d?l.createFeatureSetCollectionFromServiceUrl(d,g):null}s.hasVariable("$aggregatedfeatures")&&c&&(t=c.getMap()?l.createFeatureSetFromLayer(c,g):null)}return{context:{vars:{$feature:y,$layer:a,$datastore:r,$map:p&&s.hasVariable("$map")?l.createFeatureSetCollectionFromMap(p):null,$aggregatedfeatures:t},spatialReference:f}}}}));return r("extend-esri")&&a.setObject("arcadeProfiles.popupProfile",o,t),o}));