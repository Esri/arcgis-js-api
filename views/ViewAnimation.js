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

define(["../core/declare","dojo/Deferred","../core/Accessor","../core/Promise","../core/Scheduler"],function(e,i,t,s,n){var r={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"},o=e([t,s],{declaredClass:"esri.views.ViewAnimation",properties:{state:{value:null},target:{value:null}},constructor:function(){this._dfd=new i,this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=r.RUNNING},stop:function(){this.state=r.STOPPED,n.schedule(this._dfd.resolve)},finish:function(){this.state=r.FINISHED,n.schedule(this._dfd.resolve)}});return o.State=r,o});