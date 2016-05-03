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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./AccessoirePromise","dojo/aspect","dojo/Deferred","./Error"],function(t,o,a,e){var r="not-loaded",s="loading",d="failed",l="loaded",i=t.createSubclass({declaredClass:"esri.core.LoadableAccessoire","-chains-":{load:"after"},classMetadata:{properties:{loaded:{readOnly:!0,dependsOn:["loadStatus"]},loadStatus:{},loadError:{}}},constructor:function(){var t=new a;this.addResolvingPromise(t.promise),o.around(this,"load",function(o){return function(){return this.loadStatus===r&&(this.loadStatus=s,o.apply(this),t.resolve(),t=null),this}}),this.then(function(){this.loadStatus=l}.bind(this),function(t){this.loadStatus=d,this.loadError=t}.bind(this))},loaded:null,_loadedGetter:function(){return this.loadStatus===l},loadError:null,loadStatus:r,load:function(){},cancelLoad:function(){return this.isFulfilled()?this:(this.loadError=new e("load:cancelled","Cancelled"),this._promiseProps.cancel(this.loadError),this)}});return i});