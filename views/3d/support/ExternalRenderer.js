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

define(["../../../core/declare","../../../core/Accessor","../../../core/Promise","dojo/Deferred","dojo/aspect","dojo/_base/lang"],function(e,i,t,n,r,s){var d=e([i,t],{"-chains-":s.mixin(i._meta.chains,{setup:"after",initializeRenderContext:"after",uninitializeRenderContext:"before"}),properties:{gl:{readOnly:!0,get:function(){return this._gl}},needsRender:{value:!0},visible:{value:!0}},constructor:function(){this.didRender=!1,this.renderContext=null,this.watch("visible",function(){this.needsRender=!0}.bind(this)),this._contextDfd=new n},initialize:function(){this.addResolvingPromise(this._contextDfd.promise),r.around(this,"render",function(e){return function(){return this.isRejected()?(this.didRender=!0,!0):this.isResolved()&&(!this.visible||e.apply(this,arguments))?(this.didRender=!0,!0):!1}.bind(this)}.bind(this)),this.then(function(){this.destroyed||this.setup(this.renderContext)}.bind(this))},needsRender:!0,visible:!0,initializeRenderContext:function(e){this.renderContext=e,this._contextDfd.resolve()},uninitializeRenderContext:function(e){},setup:function(e){},render:function(e){return!1}});return d});