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

define(["./Promise","./Accessor","./Error","./Warning","dojo/aspect","dojo/_base/lang","dojo/Deferred"],function(t,a,o,n,e,s,r){var i="not-loaded",d="loading",l="failed",c="loaded",u=t.createSubclass([a],{declaredClass:"esri.core.Loadable","-chains-":s.mixin(a._meta.chains,{load:"after"}),constructor:function(){this._set("loadWarnings",[]);var t=new r;this.addResolvingPromise(t.promise),e.around(this,"load",function(a){return function(){return this.loadStatus===i&&(this.loadStatus=d,a.apply(this),t.resolve(),t=null),this}}),this.then(function(t){this.loadStatus=c}.bind(this),function(t){this.loadStatus=l,this.loadError=t}.bind(this))},properties:{loaded:{readOnly:!0,dependsOn:["loadStatus"],get:function(){return this.loadStatus===c}},loadError:null,loadStatus:i,loadWarnings:{type:[n],readOnly:!0}},load:function(){},cancelLoad:function(){return this.isFulfilled()?this:(this.loadError=new o("load:cancelled","Cancelled"),this._promiseProps.cancel(this.loadError),this)}});return u});