/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/Extent","../../../geometry/Polygon","../RasterInfo","../wmsUtils","./xmlUtilities"],(function(e,t,n,i,a,l){"use strict";function s(e){return{requestResponseCRSs:l.getElementValues(e,"requestResponseCRSs").map((e=>e.split(":")[1])),nativeCRSs:l.getElementValues(e,"nativeCRSs").map((e=>e.split(":")[1]))}}function o(e,t){const n="1.0.0"===t?"interpolationMethod":"InterpolationMethod",i=l.getElementValues(e,n),a="1.0.0"===t?e.getAttribute("default"):l.getElementValue(e,"InterpolationMethods/Default");return null!=a?[a].concat(i.filter((e=>e.toLowerCase()!==a.toLowerCase()))):i}function r(e){return null==e?["nearest"]:e.map((e=>{const t=e.toLowerCase();return t.indexOf("nearest")>-1?"nearest":t.indexOf("linear")>-1?"bilinear":t.indexOf("cubic")>-1?"cubic":null})).filter((e=>!!e))}function m(e){const n=l.getElements(e,"pos"),i=l.getSpaceDelimitedNumericValues(n[0]),a=l.getSpaceDelimitedNumericValues(n[1]);return new t({xmin:i[0],ymin:i[1],xmax:a[0],ymax:a[1],spatialReference:{wkid:4326}})}function u(e){const t=[],n=l.getElements(e,"RangeSet");let i=[];for(let a=0;a<n.length;a++){const e=l.getElementValue(n[a],"name"),s=l.getElementValue(n[a],"label"),o=[],r=l.getElements(n[a],"AxisDescription");for(let t=0;t<r.length;t++){const e=l.getElementValue(r[t],"name"),n=l.getElementValue(r[t],"label"),a=l.getElementValues(r[t],"singleValue");if(0===a.length){const e=l.getElementValue(r[t],"min"),n=l.getElementValue(r[t],"max"),i=Number(l.getElementValue(r[t],"res"))||1;if(null!==e&&null!==n)for(let t=parseInt(e,10);t<=parseInt(n,10);t+=i)a.push(t.toString())}"band"===e.toLowerCase()&&(i=a),o.push({name:e,label:n,values:a})}t.push({name:e,label:s,axis:o})}return{rangeSet:t,bandNames:i}}function p(e=null){if(!e)return{resolution:null,units:null};let t=e.toUpperCase();const n=["Y","M","D"],i=["H","M","S"],a=["Years","Months","Days","Hours","Minutes","Seconds"];let l,s,o;return-1===t.indexOf("PT")?(t=t.slice(1),o=n.findIndex((e=>t.indexOf(e)>-1)),o>-1&&(l=a[o]),s=parseFloat(t.substring(0,t.length-1))):(t=t.slice(2),o=i.findIndex((e=>t.indexOf(e)>-1)),l=a[3+o],s=parseFloat(t.substring(0,t.length-1))),{resolution:s,units:l}}function g(e){const t=l.getElements(e,"timeposition");if(t.length>0){const e=[];for(let n=0;n<t.length;n++)e.push(new Date(l.getElementValue(t[n])));return{begin:e[0],end:e[e.length-1],values:e}}const n=l.getElement(e,"timePeriod")||l.getElement(e,"TimePeriod");if(n){return{begin:new Date(l.getElementValue(n,"beginPosition")||l.getElementValue(n,"BeginPosition")),end:new Date(l.getElementValue(n,"endPosition")||l.getElementValue(n,"EndPosition")),...p(l.getElementValue(n,"timeResolution")||l.getElementValue(n,"TimeResolution"))}}return null}function d(e){const n=l.getElement(e,"spatialDomain"),i=l.getElement(n,"Envelope")||l.getElement(n,"EnvelopeWithTimePeriod"),a=i.getAttribute("srsName").split(":"),s=a[a.length-1],o=l.getElements(i,"pos"),r=l.getSpaceDelimitedNumericValues(o[0]),m=l.getSpaceDelimitedNumericValues(o[1]),u=parseInt(s,10),p=isNaN(u)?null:{wkid:u},d=new t({xmin:r[0],ymin:r[1],xmax:m[0],ymax:m[1],spatialReference:p}),c=l.getElement(n,"RectifiedGrid"),f=l.getElementValue(c,"low").split(" "),E=l.getElementValue(c,"high").split(" "),h=parseInt(E[0],10)-parseInt(f[0],10)+1,x=parseInt(E[1],10)-parseInt(f[1],10)+1,b=l.getSpaceDelimitedNumericValues(n,"origin/pos"),S=l.getElements(n,"offsetVector"),v={envelope:d,columns:h,rows:x,offset:{x:parseFloat(l.getElementValue(S[0]).split(" ")[0]),y:parseFloat(l.getElementValue(S[1]).split(" ")[1])},origin:{x:b[0],y:b[1]}},V=l.getElement(e,"temporalDomain")||l.getElement(e,"TemporalDomain");return{spatialDomain:v,temporalDomain:V?g(V):null}}function c(e){const t={version:"1.0"};let n=[];for(let i=0;i<e.childNodes.length;i++){const a=e.childNodes[i];if(1===a.nodeType)if(l.isSameTagIgnoreNS(a,"description"))t.description=l.getElementValue(a);else if(l.isSameTagIgnoreNS(a,"name"))t.name=l.getElementValue(a);else if(l.isSameTagIgnoreNS(a,"label"))t.label=l.getElementValue(a);else if(l.isSameTagIgnoreNS(a,"supportedFormats"))t.supportedFormats=l.getElementValues(a,"formats");else if(l.isSameTagIgnoreNS(a,"supportedCRSs"))t.supportedCRSs=s(a);else if(l.isSameTagIgnoreNS(a,"supportedInterpolations"))t.supportedInterpolations=o(a,"1.0.0");else if(l.isSameTagIgnoreNS(a,"lonLatEnvelope"))t.lonLatEnvelope=m(a);else if(l.isSameTagIgnoreNS(a,"rangeSet")){const e=u(a);t.rangeSet=e.rangeSet,n=e.bandNames}else l.isSameTagIgnoreNS(a,"domainSet")&&(t.domainSet=d(a))}const a=r(t.supportedInterpolations),{name:p,description:g,label:c,lonLatEnvelope:f,supportedFormats:E}=t,{spatialDomain:h}=t.domainSet,x={x:Math.abs(h.offset.x),y:Math.abs(h.offset.y)},b=new i({width:h.columns,height:h.rows,pixelSize:x,extent:h.envelope,spatialReference:h.envelope.spatialReference,bandCount:n.length||1});return{id:p,title:t.name,description:g||c,lonLatEnvelope:f,rasterInfo:b,bandNames:n,supportedFormats:E,supportedInterpolations:a,coverageDescription:t,version:"1.0.0",useEPSGAxis:!1}}function f(e){const t=[],n=l.getElements(e,"Field");let i=[];for(let a=0;a<n.length;a++){const e=l.getElementValue(n[a],"Identifier"),s=l.getElementValue(n[a],"Description"),r=l.getElementValue(n[a],"Definition"),m=l.getElementValue(n[a],"Abstract"),u=l.getElementValue(n[a],"Title"),p=o(n[a],"1.1.0"),g=[],d=l.getElements(n[a],"Axis");for(let t=0;t<d.length;t++){const e=d[t].getAttribute("identifier"),n=l.getElementValue(d[t],"UOM"),a=l.getElementValue(d[t],"DataType"),s=l.getElementValues(d[t],"Key");"band"===e.toLowerCase()&&(i=s),g.push({identifier:e,uom:n,dataType:a,values:s})}t.push({identifier:e,description:s,definition:r,abstract:m,title:u,supportedInterpolations:p,axis:g})}return{rangeSet:t,bandNames:i}}function E(e,t){const n=e.filter((e=>-1===e.identifier.toLowerCase().indexOf("field_1")&&!e.axis.some((e=>"band"===e.identifier.toLowerCase())))),i=[];if(n.length&&n.forEach((e=>{var t,n;const a=e.axis.map((e=>{const t=e.values.map((t=>{if("ISO8601"===e.uom){return-1===(t=t.trim()).toLowerCase().indexOf("z")?new Date(t+"Z").getTime():new Date(t).getTime()}return parseFloat(t.trim())})),n=[Math.min.apply(null,t),Math.max.apply(null,t)];return{name:e.identifier.trim(),description:"",field:e.identifier.trim(),unit:e.uom?e.uom.trim():"",hasRegularIntervals:!1,values:t,extent:n}}));i.push({name:e.identifier.trim(),description:null!=(t=null==(n=e.description)?void 0:n.trim())?t:"",unit:"",dimensions:a})})),t.temporalDomain){const{begin:e,end:n,values:a,units:l,resolution:s}=t.temporalDomain;i.some((e=>e.dimensions.some((e=>"stdtime"===e.name.toLowerCase()))))||i.forEach((t=>{t.dimensions.push({name:"StdTime",description:"",unit:"ISO8601",values:null==a?void 0:a.map((e=>e.getTime())),hasRegularIntervals:!a,interval:s,intervalUnit:l,extent:[e.getTime(),n.getTime()]})}))}return i.length?{variables:i}:null}function h(e){var n;const i=l.getElement(e,"SpatialDomain"),s=l.getElement(i,"GridCRS"),o=l.getElementValue(s,"GridBaseCRS"),r=l.getElementValue(s,"GridOrigin"),m=null!=(n=null==r?void 0:r.split(" ").map((e=>parseFloat(e))))?n:[0,0],u=l.getSpaceDelimitedNumericValues(s,"GridOffsets"),p=l.getElements(i,"BoundingBox");let d,c,f,E;for(let a=0;a<p.length;a++){var h;const e=null==(h=p[a].getAttribute("crs"))?void 0:h.toLowerCase();if(null!=e)if(e.indexOf("imagecrs")>-1){const e=l.getSpaceDelimitedNumericValues(p[a],"LowerCorner"),t=l.getSpaceDelimitedNumericValues(p[a],"UpperCorner");d=t[0]-e[0]+1,c=t[1]-e[1]+1}else if(e.indexOf("epsg")>0){const n=e.split(":");f=parseInt(n[n.length-1],10);const i=l.getSpaceDelimitedNumericValues(p[a],"LowerCorner"),s=l.getSpaceDelimitedNumericValues(p[a],"UpperCorner");E=new t({xmin:i[0],ymin:i[1],xmax:s[0],ymax:s[1],spatialReference:{wkid:f}})}}const x=d>c,b=E.xmax-E.xmin>E.ymax-E.ymin;let S=!1;a.coordsReversedForWKID(f)&&(x===b?S=!1:(S=!0,E=new t({xmin:E.ymin,ymin:E.xmin,xmax:E.ymax,ymax:E.xmax,spatialReference:{wkid:f}})));const v={columns:d,rows:c,origin:{x:m[0],y:m[1]},offset:{x:u[0],y:u[1]},gridBaseCRS:o,envelope:E,useEPSGAxis:S},V=l.getElement(e,"temporalDomain")||l.getElement(e,"TemporalDomain");return{spatialDomain:v,temporalDomain:V?g(V):null}}function x(e,t){const n=[],a=[],s={supportedFormats:n,supportedCRSs:a,version:"1.1"};let o;for(let i=0;i<e.childNodes.length;i++){const t=e.childNodes[i];if(1!==t.nodeType)continue;const r=l.getNodeNameIgnoreNS(t).toLowerCase();switch(r){case"title":case"abstract":case"identifier":s[r]=l.getElementValue(t);break;case"supportedformat":{const e=l.getElementValue(t);-1===n.indexOf(e)&&n.push(e)}break;case"supportedcrs":{const e=l.getElementValue(t);-1===a.indexOf(e)&&a.push(e)}break;case"range":{const e=f(t);s.range=e.rangeSet,o=e.bandNames}break;case"domain":s.domain=h(t)}}const m=r(s.range[0].supportedInterpolations),{identifier:u,abstract:p,title:g,domain:d,range:c}=s,x={x:Math.abs(d.spatialDomain.offset.x),y:Math.abs(d.spatialDomain.offset.y)},b=E(c,d),S=new i({width:d.spatialDomain.columns,height:d.spatialDomain.rows,pixelSize:x,extent:d.spatialDomain.envelope,spatialReference:d.spatialDomain.envelope.spatialReference,bandCount:o.length||1,multidimensionalInfo:b});return{id:u,title:s.title,description:p||g,lonLatEnvelope:null,bandNames:o,rasterInfo:S,supportedFormats:n,supportedInterpolations:m,coverageDescription:s,version:t,useEPSGAxis:d.spatialDomain.useEPSGAxis}}function b(e){const n=l.getElement(e,"Envelope")||l.getElement(e,"EnvelopeWithTimePeriod"),i=n.getAttribute("srsName"),a=i.slice(i.lastIndexOf("/")+1),s=n.getAttribute("axisLabels").split(" ").map((e=>e.trim())).filter((e=>""!==e.trim())),o=l.getSpaceDelimitedNumericValues(n,"lowerCorner"),r=l.getSpaceDelimitedNumericValues(n,"upperCorner"),m=!["y","lat","latitude","north","nor","n","b"].some((e=>e===s[0].toLowerCase()));let u;const p=parseInt(a,10),g=isNaN(p)?null:{wkid:p};u=new t(m?{xmin:o[0],ymin:o[1],xmax:r[0],ymax:r[1],spatialReference:g}:{xmin:o[1],ymin:o[0],xmax:r[1],ymax:r[0],spatialReference:g});const d={mins:o,maxs:r},c=n.getAttribute("uomLabels").trim().split(" ");let f,E;return l.isSameTagIgnoreNS(n,"EnvelopeWithTimePeriod")&&(f=new Date(l.getElementValue(e,"beginPosition")||l.getElementValue(e,"BeginPosition")),E=new Date(l.getElementValue(e,"endPosition")||l.getElementValue(e,"EndPosition"))),{envelope:u,axisLabels:s,uomLabels:c.length?c:null,envelopeAllDims:d,beginPosition:f,endPosition:E,isEastFirst:m}}function S(e){const t=[],n=l.getElements(e,"DataRecord"),i=[];for(let s=0;s<n.length;s++){const e=l.getElements(n[s],"field"),o=[];for(let t=0;t<e.length;t++){var a;const n=e[t].getAttribute("name"),s=l.getElementValue(e[t],"description")||"",r=(null==(a=l.getElement(e[t],"uom"))?void 0:a.getAttribute("code"))||"",m=l.getSpaceDelimitedNumericValues(e[t],"interval");n.toLowerCase().indexOf("band")>-1&&i.push(n),o.push({name:n,description:s,uom:r,allowedValues:m})}t.push(o)}return{rangeType:t,bandNames:i}}function v(e){let t=1,n="";const i=.01;return Math.abs(e-1/24)<1/24*i?n="Hours":Math.abs(e-1)<1*i?n="Days":e<1?(t=Math.round(24*e),n="Hours"):e>28-i&&e<31+i||Math.round(e/30)<12?n="Months":e>365-i&&e<366+i&&(n="Years"),{interval:t,intervalUnit:n}}function V(e,t,n){const i=[];for(let l=0;l<e.length;l++){const t=e[l];for(let e=0;e<t.length;e++)-1===t[e].name.toLowerCase().indexOf("band")&&i.push(t[e])}const a=[];if(i.length){const e=[];for(let i=2;i<n.axisLabels.length;i++){const a=(t.uomLabels&&t.uomLabels.length)>i?t.uomLabels[i]:"",l=n.axisLabels[i].toLowerCase().indexOf("time")>-1||"iso8601"===a.toLowerCase()||"oledatetime"===a.toLowerCase();let s,o;if(l){const e=v(n.offset[i]);s=e.interval,o=e.intervalUnit}else s=n.offset[i],o=a;const r=[];l?(r.push((new Date).setTime(24*(t.envelopeAllDims.mins[i]-25569)*3600*1e3)),r.push((new Date).setTime(24*(t.envelopeAllDims.maxs[i]-25569)*3600*1e3))):(r.push(t.envelopeAllDims.mins[i]),r.push(t.envelopeAllDims.maxs[i])),e.push({name:n.axisLabels[i].trim(),description:n.axisLabels[i].trim(),unit:t.uomLabels&&t.uomLabels.length>i?t.uomLabels[i].trim():"",hasRegularIntervals:!0,extent:r,interval:s,intervalUnit:o})}if(i.forEach((t=>{var n,i;return a.push({name:t.name.trim(),description:null!=(n=null==(i=t.description)?void 0:i.trim())?n:"",unit:t.uom.trim(),dimensions:e})})),a.length)return{variables:a}}return null}function D(e,t){const n=l.getElement(e,"RectifiedGrid"),i=l.getSpaceDelimitedNumericValues(n,"low"),a=l.getSpaceDelimitedNumericValues(n,"high"),s=[];for(let l=0;l<i.length;l++)s.push(a[l]-i[l]+1);const o=l.getElementValue(n,"axisLabels").split(" "),r=l.getSpaceDelimitedNumericValues(n,"origin/pos"),m=l.getElements(n,"offsetVector"),u=[];for(let f=0;f<m.length;f++){const e=l.getSpaceDelimitedNumericValues(m[f]),t=e.findIndex((e=>0!==e));u[t]=e[t]}const p=t||o;let g,d,c;return["y","lat","latitude","north","nor","n","b"].some((e=>e===p[0].toLowerCase()))?(g=s[1],d=s[0],c={y:Math.abs(u[0]),x:Math.abs(u[1])}):(g=s[0],d=s[1],c={x:Math.abs(u[0]),y:Math.abs(u[1])}),{columns:g,rows:d,origin:r,offset:u,resolution:c,gridSamples:s,axisLabels:o}}function w(e){const t=l.getElement(e,"EarthObservation");if(!t)return null;const i=l.getElement(t,"phenomenonTime"),a=i?g(i):null,s=l.getElement(t,"phenomenonTime"),o=s?g(s):null,r=l.getElementValue(t,"featureOfInterest/Footprint/multiExtentOf/MultiSurface/surfaceMembers/Polygon/exterior/LinearRing/posList");let m=null;if(r){const e=r.split(" ").map((e=>e.trim())).filter((e=>null!=e&&""!==e));if(e.length){const t=[];for(let n=0;n<e.length/2;n+=2)t.push(e[n],e[n+1]);m=new n({rings:[t],spatialReference:{wkid:4326}})}}return{observation:{phonomenonTime:a,resultTime:o,footprint:m,identifier:l.getElementValue(e,"metaDataProperty/EarthObservationMetaData/identifier"),acquisitionType:l.getElementValue(e,"metaDataProperty/EarthObservationMetaData/acquisitionType"),status:l.getElementValue(e,"metaDataProperty/EarthObservationMetaData/status")}}}function y(e){const t={version:"2.0"};let n=[];for(let i=0;i<e.childNodes.length;i++){const s=e.childNodes[i];if(1===s.nodeType)if(l.isSameTagIgnoreNS(s,"coverageId"))t.coverageId=l.getElementValue(s);else if(l.isSameTagIgnoreNS(s,"ServiceParameters"))t.serviceParameters={supportedFormats:l.getElementValues(s,"nativeFormat")};else if(l.isSameTagIgnoreNS(s,"boundedBy"))t.boundedBy=b(s);else if(l.isSameTagIgnoreNS(s,"rangeType")){const e=S(s);t.rangeType=e.rangeType,n=e.bandNames}else if(l.isSameTagIgnoreNS(s,"domainSet")){var a;t.domainSet=D(s,null==(a=t.boundedBy)?void 0:a.axisLabels)}else if(l.isSameTagIgnoreNS(s,"metadata")){const e=l.getElement(s,"EOMetadata");t.eoMetadata=e?w(e):null}}const{coverageId:s,boundedBy:o,domainSet:r,rangeType:m,serviceParameters:u}=t,p=V(m,o,r);return{id:s,title:s,description:s,lonLatEnvelope:null,bandNames:n,rasterInfo:new i({width:r.columns,height:r.rows,pixelSize:r.resolution,extent:o.envelope,spatialReference:o.envelope.spatialReference,bandCount:n.length||1,multidimensionalInfo:p}),supportedFormats:u.supportedFormats,supportedInterpolations:null,coverageDescription:t,version:"2.0.1",useEPSGAxis:!1}}function I(e,t){let n=null;if("string"==typeof e){n=(new DOMParser).parseFromString(e,"text/xml")}else n=e;if("1.0.0"===t){return l.getElements(n,"CoverageOffering").map((e=>c(e)))}const i=l.getElements(n,"CoverageDescription");return"1.1.0"===t||"1.1.1"===t||"1.1.2"===t?i.map((e=>x(e,t))):i.map((e=>y(e)))}e.parseCoverages=I,e.standardizeInterpolations=r,Object.defineProperty(e,"__esModule",{value:!0})}));
