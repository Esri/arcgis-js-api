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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../promiseList","../arcade/Feature","../arcade/featureset/support/RecentlyUsedCache","../support/expressionUtils","./utils"],function(e,a,r,t,s,l,n,i,c){var o=e(null,{declaredClass:"esri.arcadeProfiles.FieldCalculateProfile",defaults:{globals:{featureSet:["$layer","$datastore"],async:["$layer","$datastore"]},context:{vars:{$feature:"any",$layer:"any",$datastore:"any"}}},_lruCache:null,constructor:function(){this._lruCache=new n},initialize:function(e){var a=[];return c.hasGeometryOperations(e)&&a.push(i.enableGeometryOperations()),(c.hasFeatureSetOperations(e)||c.hasVariables(e,this.defaults.globals.featureSet))&&a.push(i.enableFeatureSetOperations()),c.isAsync(e)&&a.push(i.enableAsyncOperations()),s(a)},isAsync:function(e){var a=[e];return c.hasFeatureSetOperations(a)||c.hasVariables(a,this.defaults.globals.async)},parse:function(e){return i.createSyntaxTree(e.expression)},compile:function(e){var r=a.clone(this.defaults.context);return r.useAsync=e.async,e.syntaxTree?i.createFunction(e.syntaxTree,r):null},getEvalOptions:function(e){var a,r,t,s=e.expression,n=e.feature,o=e.layer,u=e.spatialReference,p=e.portal,h={spatialReference:u,cache:this._lruCache};if(o&&(s.hasVariable("$layer")&&(a=t=o.getMap()?i.createFeatureSetFromLayer(o,h):i.createFeatureSetFromLayerUrl(o.url,h)),s.hasVariable("$datastore"))){var f=c.getServiceUrl(o.url);r=f?i.createFeatureSetCollectionFromServiceUrl(f,h):null}var y,d=n&&s.hasVariable("$feature")?l.createFromGraphicLikeObject(n.geometry,n.attributes,s.hasFunction("attachments")&&o&&!o.getMap()?t||i.createFeatureSetFromLayerUrl(o.url,h):o):null;return p&&(p=p.replace(/\/+$/gi,""),y={url:p,portalUrl:p+"/sharing/rest"}),{context:{vars:{$feature:d,$layer:a,$datastore:r},services:y?{portal:y}:null,lrucache:this._lruCache,spatialReference:u}}}}),u=new o;return r("extend-esri")&&a.setObject("arcadeProfiles.fieldCalculateProfile",u,t),u});