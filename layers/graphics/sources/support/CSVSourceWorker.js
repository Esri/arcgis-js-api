/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../request","../../../../core/Error","../../../../core/has","../../../../core/number","../../../../core/urlUtils","../../../../geometry/projection","../../../../geometry/geometryAdapters/json","../../../../geometry/support/spatialReferenceUtils","../../../../geometry/support/webMercatorUtils","../../OptimizedFeature","../../OptimizedGeometry","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","../csv/csv","./clientSideDefaults","../../../support/FieldsIndex","../../../../geometry/SpatialReference"],(function(e,t,i,n,r,l,o,s,a,u,d,c,f,p,m,y,g,h,F,I,_){"use strict";const N=F.createDrawingInfo("esriGeometryPoint"),b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],T=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],x=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],w=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,E=["csv"],D=[0,0];let v=function(e,t){this.x=e,this.y=t};const j=function(){const e=o._parseInfo(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){const l=t.exec(r);if(e.factor=n,!l)return NaN;let o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],e.factor*=-1}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}(),S="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;let q=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}var i=e.prototype;return i.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},i.load=function(){var e=t._asyncToGenerator((function*(e,t={}){const[i]=yield Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),n=this._parse(i,e);if(this._queryEngine=this._createQueryEngine(i,n),n.layerDefinition.extent=this._queryEngine.fullExtent,n.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;n.layerDefinition.timeInfo.timeExtent=[e,t]}return n}));function i(t){return e.apply(this,arguments)}return i}(),i.applyEdits=function(){var e=t._asyncToGenerator((function*(){throw new r("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}));function i(){return e.apply(this,arguments)}return i}(),i.queryFeatures=function(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)},i.queryFeatureCount=function(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)},i.queryObjectIds=function(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)},i.queryExtent=function(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)},i.querySnapping=function(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)},i._fetch=function(){var e=t._asyncToGenerator((function*(e,t){if(!e)throw new r("csv-source:invalid-source","url not defined");const i=s.urlToObject(e);return(yield n(i.path,{query:i.query,responseType:"text",signal:t.signal})).data}));function i(t,i){return e.apply(this,arguments)}return i}(),i._parse=function(e,t){const i=t.parsing||{},n={columnDelimiter:i.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:i.latitudeField,longitudeFieldName:i.longitudeField}},l=h.readRows(e);let{value:o}=l.next();if(!o)throw new r("csv","CSV is empty",{csv:e});if(o=o.trim(),!i.columnDelimiter){const e=h.inferDelimiter(o);if(!e)throw new r("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");n.columnDelimiter=e}const a=o.split(n.columnDelimiter),u=n.layerDefinition={name:s.getFilename(t.url,E)||"csv",drawingInfo:N,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:i.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:i.spatialReference||{wkid:102100}}};if(!i.latitudeField||!i.longitudeField){const e=this._inferLocationInfo(a);if(!i.longitudeField&&!e.longitudeFieldName||!i.latitudeField&&!e.latitudeFieldName)throw new r("csv","Unable to identify latitudeField and/or longitudeField from CSV");n.locationInfo={longitudeFieldName:i.longitudeField||e.longitudeFieldName,latitudeFieldName:i.latitudeField||e.latitudeFieldName}}const d=this._inferFields(l,n.columnDelimiter,a,n.locationInfo);if(i.fields&&i.fields.length){const e=new Map;for(const t of i.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const i=e.get(t.name.toLowerCase());if(i){const e=t.name;Object.assign(t,i),t.name=e}}}u.fields=d;if(!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new I(u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return n},i._inferLocationInfo=function(e){let t=null,i=null;const n=t=>e.find((e=>e.toLowerCase()===t));return x.some((e=>(t=n(e),!!t))),T.some((e=>(i=n(e),!!i))),{longitudeFieldName:t,latitudeFieldName:i}},i._inferFields=function(e,t,i,n){const r=[],l=h.parseRows(e,i,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=l.next();if(t)break e;o.push(e)}for(const s of i)if(s===n.longitudeFieldName||s===n.latitudeFieldName)r.push({name:s,type:"esriFieldTypeDouble",alias:s});else{const e=o.map((e=>e[s])),t=this._inferFieldType(e),i={name:s,type:null,alias:s};switch(t){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255}r.push(i)}return r},i._inferFieldType=function(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let i=!1;if(""!==e){if(t.test(e))i=!0;else{let t=j(e);if(!isNaN(t))return/[.,]/.test(e)||!S(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))i=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))i=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";i=!0}}}if(i){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))},i._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(l("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!w.test(e[n]),n++;i=!t}}return i},i._createQueryEngine=function(e,t){const{latitudeFieldName:i,longitudeFieldName:n}=t.locationInfo,{objectIdField:r,fields:l,extent:o,timeInfo:s}=t.layerDefinition;let y=[];const F=[],I=new Set,N=new Set,T=[];for(const{name:a,type:u}of l)"esriFieldTypeDate"===u?I.add(a):b.indexOf(u)>-1&&N.add(a),a!==r&&T.push(a);let x=0;const w=h.readRows(e);w.next();const E=h.parseRows(w,T,t.columnDelimiter);e:for(;;){const{value:e,done:t}=E.next();if(t)break e;const l=this._parseCoordinateValue(e[i]),o=this._parseCoordinateValue(e[n]);if(null!=o&&null!=l&&!isNaN(l)&&!isNaN(o)){e[i]=l,e[n]=o;for(const t in e)if(t!==i&&t!==n)if(I.has(t)){const i=new Date(e[t]);e[t]=this._isValidDate(i,e[t])?i.getTime():null}else if(N.has(t)){const i=j(e[t]);isNaN(i)?e[t]=null:e[t]=i}e[r]=x,x++,y.push(new v(o,l)),F.push(e)}}if(!d.equals({wkid:4326},o.spatialReference))if(d.isWebMercator(o.spatialReference))for(const a of y)[a.x,a.y]=c.lngLatToXY(a.x,a.y,D);else y=a.projectMany(u.jsonAdapter,y,_.WGS84,o.spatialReference,null);const S=new m({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),q=new g.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:r,spatialReference:o.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:S}),O=[];for(let a=0;a<y.length;a++){const{x:e,y:t}=y[a],i=F[a];i[r]=a+1,O.push(new f.default(new p([],[e,t]),i,null,i[r]))}return S.addMany(O),q},i._parseCoordinateValue=function(e){if(null==e||""===e)return null;let t=j(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},i._checkProjection=function(){var e=t._asyncToGenerator((function*(e){try{yield y.checkProjectionSupport(d.WGS84,e)}catch{throw new r("csv-layer","Projection not supported")}}));function i(t){return e.apply(this,arguments)}return i}(),e}();e.csvLatitudeFieldNames=T,e.csvLongitudeFieldNames=x,e.default=q,Object.defineProperty(e,"__esModule",{value:!0})}));
