/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./FeatureSetReader"],(function(e,t,r){"use strict";let n=function(e){function n(t,n){var i;return(i=e.call(this,r.FeatureSetReader.createInstance())||this)._currentIndex=-1,i._reader=t,i._indices=n,i}t._inheritsLoose(n,e),n.from=function(e,t){return new n(e.copy(),t)};var i=n.prototype;return i.getApproximateSize=function(){return this._indices.length},i.getCursor=function(){return this.copy()},i.copy=function(){const e=new n(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e},i.next=function(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length},i._nextIndex=function(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)},i.setArcadeSpatialReference=function(e){this._reader.setArcadeSpatialReference(e)},i.attachStorage=function(e){this._reader.attachStorage(e)},i.getStorage=function(){return this._reader.getStorage()},i.getComputedNumeric=function(e){return this._reader.getComputedNumericAtIndex(0)},i.setComputedNumeric=function(e,t){return this._reader.setComputedNumericAtIndex(t,0)},i.getComputedString=function(e){return this._reader.getComputedStringAtIndex(0)},i.setComputedString=function(e,t){return this._reader.setComputedStringAtIndex(0,t)},i.getComputedNumericAtIndex=function(e){return this._reader.getComputedNumericAtIndex(e)},i.setComputedNumericAtIndex=function(e,t){this._reader.setComputedNumericAtIndex(e,t)},i.getComputedStringAtIndex=function(e){return this._reader.getComputedStringAtIndex(e)},i.setComputedStringAtIndex=function(e,t){return this._reader.setComputedStringAtIndex(e,t)},i.transform=function(e,t,r,n){const i=this.copy();return i._reader=this._reader.transform(e,t,r,n),i},i.extent=function(e,t,r,n){const i=this.copy();return i._reader=this._reader.extent(e,t,r,n),i},i.hasFilter=function(){return this._reader.hasFilter()},i.readAttribute=function(e,t=!1){return this._reader.readAttribute(e,t)},i.readAttributes=function(){return this._reader.readAttributes()},i.joinAttributes=function(e){return this._reader.joinAttributes(e)},i.readArcadeFeature=function(){return this._reader.readArcadeFeature()},i.geometry=function(){return this._reader.geometry()},i.field=function(e){return this.readAttribute(e,!0)},i.hasField=function(e){return this._reader.hasField(e)},i.setField=function(e,t){return this._reader.setField(e,t)},i.keys=function(){return this._reader.keys()},i.castToText=function(){return this._reader.castToText()},i.getQuantizationTransform=function(){return this._reader.getQuantizationTransform()},i.getAttributeHash=function(){return this._reader.getAttributeHash()},i.getObjectId=function(){return this._reader.getObjectId()},i.getDisplayId=function(){return this._reader.getDisplayId()},i.setDisplayId=function(e){return this._reader.setDisplayId(e)},i.getGroupId=function(){return this._reader.getGroupId()},i.setGroupId=function(e){return this._reader.setGroupId(e)},i.getXHydrate=function(){return this._reader.getXHydrate()},i.getYHydrate=function(){return this._reader.getYHydrate()},i.getX=function(){return this._reader.getX()},i.getY=function(){return this._reader.getY()},i.setIndex=function(e){return this._reader.setIndex(e)},i.getIndex=function(){return this._reader.getIndex()},i.readLegacyFeature=function(){return this._reader.readLegacyFeature()},i.readOptimizedFeature=function(){return this._reader.readOptimizedFeature()},i.readLegacyPointGeometry=function(){return this._reader.readLegacyPointGeometry()},i.readLegacyGeometry=function(){return this._reader.readLegacyGeometry()},i.readLegacyCentroid=function(){return this._reader.readLegacyCentroid()},i.readGeometryArea=function(){return this._reader.readGeometryArea()},i.readUnquantizedGeometry=function(){return this._reader.readUnquantizedGeometry()},i.readHydratedGeometry=function(){return this._reader.readHydratedGeometry()},i.readGeometry=function(){return this._reader.readGeometry()},i.readCentroid=function(){return this._reader.readCentroid()},i._passesFilter=function(){return this._reader._passesFilter()},i._readAttribute=function(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")},i._readAttributes=function(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")},t._createClass(n,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}}]),n}(r.FeatureSetReader);e.FeatureSetReaderIndirect=n,Object.defineProperty(e,"__esModule",{value:!0})}));
