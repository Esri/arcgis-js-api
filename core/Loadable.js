// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["./Promise","./Accessor","./Error","./Warning","dojo/aspect","dojo/_base/lang","dojo/Deferred"],function(o,t,a,n,e,s,d){return o.createSubclass([t],{declaredClass:"esri.core.Loadable","-chains-":s.mixin(t._meta.chains,{load:"after"}),constructor:function(){this._set("loadWarnings",[]);var o=new d;this.addResolvingPromise(o.promise),e.around(this,"load",function(t){return function(){return"not-loaded"===this.loadStatus&&(this.loadStatus="loading",t.apply(this)),o&&(o.resolve(),o=null),this.when()}}),this.when(function(o){this.loadStatus="loaded"}.bind(this),function(o){this.loadStatus="failed",this.loadError=o}.bind(this))},properties:{loaded:{readOnly:!0,dependsOn:["loadStatus"],get:function(){return"loaded"===this.loadStatus}},loadError:null,loadStatus:"not-loaded",loadWarnings:{type:[n],readOnly:!0}},load:function(){},cancelLoad:function(){return this.isFulfilled()?this:(this.loadError=new a("load:cancelled","Cancelled"),this._promiseProps.cancel(this.loadError),this)}})});