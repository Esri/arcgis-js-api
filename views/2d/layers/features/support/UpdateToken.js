// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateToken=void 0;var r=function(){function e(){this.source=!1,this.targets={feature:!1,aggregate:!1},this.storage={filters:!1,data:!1},this.mesh=!1,this.queryFilter=!1,this.why={mesh:[],source:[]}}return e.create=function(t){var r=new e;for(var s in t){var a=t[s];if("object"==typeof a)for(var i in a){var o=a[i];r[s][i]=o}r[s]=a}return r},e.empty=function(){return e.create({})},e.all=function(){return e.create({source:!0,targets:{feature:!0,aggregate:!0},storage:{filters:!0,data:!0},mesh:!0})},e.prototype.any=function(){return this.source||this.mesh||this.storage.filters||this.storage.data||this.targets.feature||this.targets.aggregate||this.queryFilter},e.prototype.describe=function(){var e=0,t="";if(this.mesh){e+=20,t+="-> (20) Mesh needs update\n";for(var r=0,s=this.why.mesh;r<s.length;r++){t+="    + "+s[r]+"\n"}}if(this.source){e+=10,t+="-> (10) The source needs update\n";for(var a=0,i=this.why.source;a<i.length;a++){t+="    + "+i[a]+"\n"}}this.targets.feature&&(e+=5,t+="-> (5) Feature target parameters changed\n"),this.storage.filters&&(e+=5,t+="-> (5) Feature filter parameters changed\n"),this.targets.aggregate&&(e+=4,t+="-> (4) Aggregate target parameters changed\n"),this.storage.data&&(e+=1,t+="-> (1) Texture storage parameters changed");var o=e<5?"Fastest":e<10?"Fast":e<15?"Moderate":e<20?"Slow":"Very Slow";console.debug("Applying "+o+" update of cost "+e+"/45 "),console.debug(t)},e.prototype.toJSON=function(){return{source:this.source,targets:this.targets,storage:this.storage,mesh:this.mesh,queryFilter:this.queryFilter}},e}();t.UpdateToken=r}));