/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../ItemCache","./WhereClause"],(function(e,t,n){"use strict";let i=function(){function e(e,n){this._cache=new t(e),this._invalidCache=new t(n)}return e.prototype.get=function(e,t){const i=`${t.uid}:${e}`,u=this._cache.get(i);if(u)return u;if(void 0!==this._invalidCache.get(i))return null;try{const u=n.WhereClause.create(e,t);return this._cache.put(i,u),u}catch{return this._invalidCache.put(i,null),null}},e}();e.WhereClauseCache=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
