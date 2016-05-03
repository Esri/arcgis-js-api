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

define(["../core/declare","dojo/Deferred","../core/Accessoire","../core/AccessoirePromise","../core/Scheduler"],function(e,s,t,i,r){var n={RUNNING:"running",FINISHED:"finished",STOPPED:"stopped"},o=e([t,i],{declaredClass:"esri.views.ViewAnimation",classMetadata:{properties:{state:{}}},constructor:function(){this._dfd=new s,this.addResolvingPromise(this._dfd.promise)},initialize:function(){this.state=n.RUNNING},stop:function(){this.state=n.STOPPED,r.schedule(this._dfd.resolve)},finish:function(){this.state=n.FINISHED,r.schedule(this._dfd.resolve)},state:null,target:null});return o.State=n,o});