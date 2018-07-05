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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../geometry/Point","../geometry/Extent","./VEAddress"],function(e,t,l,s,i,n,o){var a=e(null,{declaredClass:"esri.virtualearth.VEGeocodeResult",constructor:function(e){t.mixin(this,{address:null,bestView:null,calculationMethod:null,confidence:null,displayName:null,entityType:null,location:null,matchCodes:null},e),this.address&&(this.address=new o(this.address)),this.bestView&&(this.bestView=new n(this.bestView)),this.locationArray&&(this.calculationMethod=this.locationArray[0].calculationMethod,this.location=new i(this.locationArray[0]))}});return l("extend-esri")&&t.setObject("virtualearth.VEGeocodeResult",a,s),a});