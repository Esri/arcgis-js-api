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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred"],function(o,e,t){var n=function(){function o(o,e,t){this.parentModule=o,this.worker=e,this.connection=t,this.msgCount=0,this.outgoingJobs={},this.incomingJobs={},this.msgCount=0,this.outgoingJobs={},this.incomingJobs={}}return o.prototype.invoke=function(o,e,n,i){var s=this,r=++this.msgCount,a=new t(function(o){s.worker.postMessage({type:"<cancel>",id:r,connection:i,data:{reason:o}}),s.outgoingJobs[r]&&delete s.outgoingJobs[r]});return this.outgoingJobs[r]=a,this.worker.postMessage({type:o,id:r,connection:i,data:e},n),a.promise},o.prototype.message=function(o){var e=this;if(o&&o.data){var t=o.data.type;if(t){var n=o.data,i=o.data.id,s=o.data.connection;if("<response>"===t&&i){var r=this.outgoingJobs[i];if(!r)return;delete this.outgoingJobs[i],n.error?r.reject(n.error):r.resolve(n.data)}else if("<cancel>"===t&&i){var a=this.incomingJobs[i];a&&a.cancel(n.data.reason||"cancel")}else{var c=this.parentModule[t];if("function"==typeof c){var u=c.call(this.parentModule,n.data,this.connection);this.incomingJobs[i]=u,u.then(function(o){e.worker.postMessage({type:"<response>",id:i,connection:s,data:o.data||null},o.buffers)}).otherwise(function(o){o||(o="Error encountered at method "+t),o.dojoType&&"cancel"===o.dojoType||e.worker.postMessage({type:"<response>",id:i,connection:s,error:o})}).always(function(){delete e.incomingJobs[i]})}}}}},o}();return n});