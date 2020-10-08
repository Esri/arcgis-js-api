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

define(["require","exports","../../../../../core/Error","../../../../../tasks/operations/pbfFeatureServiceParser"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseHeader=t.FeatureSetHeader=void 0;var s=function(){function e(){this.hasFeatures=!1,this.fieldIndexMap=new Map,this.fieldCount=0,this.featureCount=0,this.objectIdFieldIndex=0,this.dateFields=new Set,this.offsets={attributes:new Array,geometry:new Array},this.centroid=new Array}return e.prototype.hasFieldIndex=function(e){return this.fieldIndexMap.has(e)},e.prototype.isDateField=function(e){return this.dateFields.has(e)},e.prototype.getFieldIndex=function(e){return this.fieldIndexMap.get(e)},e}();function n(e){for(var t=e.getLength(),r=e.pos()+t,s={name:"",isDate:!1};e.pos()<r&&e.next();)switch(e.tag()){case 1:s.name=e.getString();break;case 2:"esriFieldTypeDate"===a.parseFieldType(e.getEnum())&&(s.isDate=!0);break;default:e.skip()}return s}t.FeatureSetHeader=s,t.parseHeader=function(e,t){for(var i=e.pos(),o=new s,d=0,f=0,u=null,p=null,c=null,g=!1;e.next();)switch(e.tag()){case 1:u=e.getString();break;case 3:p=e.getString();break;case 12:c=e.processMessage(a.parseTransform);break;case 9:o.exceededTransferLimit=e.getBool(),o.exceededTransferLimit&&(o.offsets.geometry=new Int32Array(8e3),o.centroid=new Int32Array(16e3));break;case 13:var l=n(e),h=l.name.toLowerCase().trim(),I=d++;o.fieldIndexMap.set(l.name,I),o.fieldIndexMap.set(h,I),l.isDate&&(o.dateFields.add(l.name),o.dateFields.add(h));break;case 15:var b=e.getLength(),k=e.pos()+b;if(!o.exceededTransferLimit){var x=o.offsets.geometry,m=o.centroid;x.push(0),m.push(268435455),m.push(268435455)}!g&&o.exceededTransferLimit&&(g=!0,o.offsets.attributes=new Uint32Array(8e3*d));for(var w=f*d;e.pos()<k&&e.next();)switch(e.tag()){case 1:if(g)o.offsets.attributes[w++]=e.pos();else o.offsets.attributes.push(e.pos());var y=e.getLength();e.skipLen(y);break;case 2:if(t)for(var F=e.getLength(),v=e.pos()+F;e.pos()<v&&e.next();)switch(e.tag()){case 3:e.getUInt32();var L=e.getSInt32(),S=e.getSInt32();o.centroid[2*f]=L,o.centroid[2*f+1]=S;break;default:e.skip()}else{o.offsets.geometry[f]=e.pos();var A=e.getLength();e.skipLen(A)}break;case 4:for(var M=e.getLength(),C=e.pos()+M;e.pos()<C&&e.next();)switch(e.tag()){case 3:e.getUInt32();L=e.getSInt32(),S=e.getSInt32();o.centroid[2*f]=L,o.centroid[2*f+1]=S;break;default:e.skip()}break;default:e.skip()}f++,o.hasFeatures=!0;break;default:e.skip()}var T=u||p;if(!T)throw new r("FeatureSet has no objectId or globalId field name");return o.featureCount=f,o.fieldCount=d,o.objectIdFieldIndex=o.getFieldIndex(T),o.transform=c,o.displayIds=new Uint32Array(o.featureCount),o.groupIds=new Uint16Array(o.featureCount),e.move(i),o}}));