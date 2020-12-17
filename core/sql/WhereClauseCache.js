/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../ItemCache","./WhereClause"],(function(e,t,n){"use strict";let i=function(){function e(e,n){this._cache=new t(e),this._invalidCache=new t(n)}return e.prototype.get=function(e,t){const i=`${t.uid}:${e}`,c=this._cache.get(i);if(c)return c;if(void 0!==this._invalidCache.get(i))return null;try{const c=n.WhereClause.create(e,t);return this._cache.put(i,c),c}catch{return this._invalidCache.put(i,null),null}},e}();e.WhereClauseCache=i,Object.defineProperty(e,"__esModule",{value:!0})}));
