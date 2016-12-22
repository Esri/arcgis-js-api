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

define(["./AccessoirePromise","./Accessoire","./Error","dojo/aspect","dojo/_base/lang","dojo/Deferred"],function(o,t,a,e,s,r){var d="not-loaded",i="loading",l="failed",n="loaded",c=o.createSubclass([t],{declaredClass:"esri.core.LoadableAccessoire","-chains-":s.mixin(t._meta.chains,{load:"after"}),classMetadata:{properties:{loaded:{readOnly:!0,dependsOn:["loadStatus"]},loadStatus:{},loadError:{}}},constructor:function(){var o=new r;this.addResolvingPromise(o.promise),e.around(this,"load",function(t){return function(){return this.loadStatus===d&&(this.loadStatus=i,t.apply(this),o.resolve(),o=null),this}}),this.then(function(o){this.loadStatus=n}.bind(this),function(o){this.loadStatus=l,this.loadError=o}.bind(this))},loaded:null,_loadedGetter:function(){return this.loadStatus===n},loadError:null,loadStatus:d,load:function(){},cancelLoad:function(){return this.isFulfilled()?this:(this.loadError=new a("load:cancelled","Cancelled"),this._promiseProps.cancel(this.loadError),this)}});return c});