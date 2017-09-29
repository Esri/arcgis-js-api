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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../core/declare","dojo/Deferred","../core/Accessor","../core/Promise","../core/Scheduler","../core/Error"],function(e,t,i,s,n,r){var o={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"},d=e([i,s],{declaredClass:"esri.views.ViewAnimation",properties:{state:{value:null},target:{value:null}},constructor:function(){this._dfd=new t,this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=o.RUNNING},stop:function(){this.state!==o.STOPPED&&this.state!==o.FINISHED&&(this.state=o.STOPPED,n.schedule(this._dfd.reject.bind(this._dfd,new r("ViewAnimation stopped"))))},finish:function(){this.state!==o.STOPPED&&this.state!==o.FINISHED&&(this.state=o.FINISHED,n.schedule(this._dfd.resolve))}});return d.State=o,d});