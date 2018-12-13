// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../promiseList","../arcade/Feature","../arcade/featureset/support/RecentlyUsedCache","../support/expressionUtils","./utils"],function(e,a,r,t,s,l,n,i,o){var c=e(null,{declaredClass:"esri.arcadeProfiles.FieldCalculateProfile",defaults:{globals:{featureSet:["$layer","$datastore"],async:["$layer","$datastore"]},context:{vars:{$feature:"any",$layer:"any",$datastore:"any"}}},_lruCache:null,constructor:function(){this._lruCache=new n},initialize:function(e){var a=[];return o.hasGeometryOperations(e)&&a.push(i.enableGeometryOperations()),(o.hasFeatureSetOperations(e)||o.hasVariables(e,this.defaults.globals.featureSet))&&a.push(i.enableFeatureSetOperations()),o.isAsync(e)&&a.push(i.enableAsyncOperations()),s(a)},isAsync:function(e){var a=[e];return o.hasFeatureSetOperations(a)||o.hasVariables(a,this.defaults.globals.async)},parse:function(e){return i.createSyntaxTree(e.expression)},compile:function(e){var r=a.clone(this.defaults.context);return r.useAsync=e.async,e.syntaxTree?i.createFunction(e.syntaxTree,r):null},getEvalOptions:function(e){var a,r,t=e.expression,s=e.feature,n=e.layer,c=e.spatialReference,u=e.portal,f=s&&t.hasVariable("$feature")?l.createFromGraphicLikeObject(s.geometry,s.attributes,n):null;if(n){var p={spatialReference:c,cache:this._lruCache};if(t.hasVariable("$layer")&&(a=n.getMap()?i.createFeatureSetFromLayer(n,p):i.createFeatureSetFromLayerUrl(n.url,p)),t.hasVariable("$datastore")){var h=o.getServiceUrl(n.url);r=h?i.createFeatureSetCollectionFromServiceUrl(h,p):null}}var y;return u&&(u=u.replace(/\/+$/gi,""),y={url:u,portalUrl:u+"/sharing/rest"}),{context:{vars:{$feature:f,$layer:a,$datastore:r},services:y?{portal:y}:null,lrucache:this._lruCache,spatialReference:c}}}}),u=new c;return r("extend-esri")&&a.setObject("arcadeProfiles.fieldCalculateProfile",u,t),u});