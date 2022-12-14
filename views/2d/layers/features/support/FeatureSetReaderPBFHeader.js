/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../../core/Error.js";import{parseTransform as t,parseFieldType as s}from"../../../../../rest/query/operations/pbfFeatureServiceParser.js";const r=268435455;class n{constructor(){this.fieldMap=new Map,this.fields=[],this.hasFeatures=!1,this.fieldCount=0,this.featureCount=0,this.objectIdFieldIndex=0,this.vertexCount=0,this.offsets={attributes:new Array,geometry:new Array},this.centroid=new Array}hasField(e){return this.fieldMap.has(e)}isDateField(e){return this.fieldMap.get(e)?.isDate}getFieldIndex(e){return this.fieldMap.get(e)?.index}}function a(e){const t=1,r=2,n=e.getLength(),a=e.pos()+n,i={name:"",isDate:!1};for(;e.pos()<a&&e.next();)switch(e.tag()){case t:i.name=e.getString();break;case r:"esriFieldTypeDate"===s(e.getEnum())&&(i.isDate=!0);break;default:e.skip()}return i}function i(e){return e.toLowerCase().trim()}function o(s,o,c=!1){const f=1,d=3,u=9,l=12,g=13,p=15,h=s.pos(),m=new n;let b=0,w=0;const k=1,x=2,y=4,I=3;let F=null,L=null,A=null,C=!1;for(;s.next();)switch(s.tag()){case f:F=s.getString();break;case d:L=s.getString();break;case l:A=s.processMessage(t);break;case u:if(m.exceededTransferLimit=s.getBool(),m.exceededTransferLimit){m.offsets.geometry=c?new Float64Array(8e3):new Int32Array(8e3),m.centroid=c?new Float64Array(16e3):new Int32Array(16e3);for(let e=0;e<m.centroid.length;e++)m.centroid[e]=r}break;case g:{const e=a(s),t=e.name,r=i(e.name),n={fieldName:t,index:b++,isDate:e.isDate};m.fields.push(n),m.fieldMap.set(e.name,n),m.fieldMap.set(r,n);break}case p:{const e=s.getLength(),t=s.pos()+e;if(!m.exceededTransferLimit){const e=m.offsets.geometry,t=m.centroid;e.push(0),t.push(r),t.push(r)}!C&&m.exceededTransferLimit&&(C=!0,m.offsets.attributes=c?new Float64Array(8e3*b):new Uint32Array(8e3*b));let n=w*b;for(;s.pos()<t&&s.next();)switch(s.tag()){case k:{if(C)m.offsets.attributes[n++]=s.pos();else{m.offsets.attributes.push(s.pos())}const e=s.getLength();s.skipLen(e);break}case x:if(o){const e=s.getLength(),t=s.pos()+e;for(;s.pos()<t&&s.next();)switch(s.tag()){case I:{s.getUInt32();const e=s.getSInt64(),t=s.getSInt64();m.centroid[2*w]=e,m.centroid[2*w+1]=t;break}default:s.skip()}}else{m.offsets.geometry[w]=s.pos();const e=s.getLength();m.vertexCount+=e,s.skipLen(e)}break;case y:{const e=s.getLength(),t=s.pos()+e;for(;s.pos()<t&&s.next();)switch(s.tag()){case I:{s.getUInt32();const e=s.getSInt64(),t=s.getSInt64();m.centroid[2*w]=e,m.centroid[2*w+1]=t;break}default:s.skip()}break}default:s.skip()}w++,m.hasFeatures=!0;break}default:s.skip()}const S=F||L;if(!S)throw new e("FeatureSet has no objectId or globalId field name");return m.featureCount=w,m.fieldCount=b,m.objectIdFieldIndex=m.getFieldIndex(S),m.transform=A,m.displayIds=new Uint32Array(m.featureCount),m.groupIds=new Uint16Array(m.featureCount),s.move(h),m}export{n as FeatureSetHeader,o as parseHeader};