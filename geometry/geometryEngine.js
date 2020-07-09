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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require", "exports", "./geometryEngineBase", "./geometryAdapters/hydrated"], function (require, exports, GeometryEngineApi, hydrated_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSpatialReference(geometry) {
        return Array.isArray(geometry) ? geometry[0].spatialReference : geometry && geometry.spatialReference;
    }
    function extendedSpatialReferenceInfo(spatialReference) {
        return GeometryEngineApi.extendedSpatialReferenceInfo(spatialReference);
    }
    exports.extendedSpatialReferenceInfo = extendedSpatialReferenceInfo;
    function clip(geometry, extent) {
        return GeometryEngineApi.clip(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, extent);
    }
    exports.clip = clip;
    function cut(geometry, cutter) {
        return GeometryEngineApi.cut(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, cutter);
    }
    exports.cut = cut;
    function contains(geometry1, geometry2) {
        return GeometryEngineApi.contains(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.contains = contains;
    function crosses(geometry1, geometry2) {
        return GeometryEngineApi.crosses(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.crosses = crosses;
    function distance(geometry1, geometry2, distanceUnit) {
        return GeometryEngineApi.distance(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2, distanceUnit);
    }
    exports.distance = distance;
    function equals(geometry1, geometry2) {
        return GeometryEngineApi.equals(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.equals = equals;
    function intersects(geometry1, geometry2) {
        return GeometryEngineApi.intersects(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.intersects = intersects;
    function touches(geometry1, geometry2) {
        return GeometryEngineApi.touches(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.touches = touches;
    function within(geometry1, geometry2) {
        return GeometryEngineApi.within(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.within = within;
    function disjoint(geometry1, geometry2) {
        return GeometryEngineApi.disjoint(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.disjoint = disjoint;
    function overlaps(geometry1, geometry2) {
        return GeometryEngineApi.overlaps(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2);
    }
    exports.overlaps = overlaps;
    function relate(geometry1, geometry2, relation) {
        return GeometryEngineApi.relate(hydrated_1.hydratedAdapter, getSpatialReference(geometry1), geometry1, geometry2, relation);
    }
    exports.relate = relate;
    function isSimple(geometry) {
        return GeometryEngineApi.isSimple(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry);
    }
    exports.isSimple = isSimple;
    function simplify(geometry) {
        return GeometryEngineApi.simplify(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry);
    }
    exports.simplify = simplify;
    function convexHull(geometry, merge) {
        if (merge === void 0) { merge = false; }
        return GeometryEngineApi.convexHull(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, merge);
    }
    exports.convexHull = convexHull;
    function difference(geometry, subtractor) {
        return GeometryEngineApi.difference(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, subtractor);
    }
    exports.difference = difference;
    function symmetricDifference(leftGeometry, rightGeometry) {
        return GeometryEngineApi.symmetricDifference(hydrated_1.hydratedAdapter, getSpatialReference(leftGeometry), leftGeometry, rightGeometry);
    }
    exports.symmetricDifference = symmetricDifference;
    function intersect(geometry, intersector) {
        return GeometryEngineApi.intersect(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, intersector);
    }
    exports.intersect = intersect;
    function union(geometries, geometry2) {
        if (geometry2 === void 0) { geometry2 = null; }
        return GeometryEngineApi.union(hydrated_1.hydratedAdapter, getSpatialReference(geometries), geometries, geometry2);
    }
    exports.union = union;
    function offset(geometry, distance, offsetUnit, joinType, bevelRatio, flattenError) {
        return GeometryEngineApi.offset(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, distance, offsetUnit, joinType, bevelRatio, flattenError);
    }
    exports.offset = offset;
    function buffer(geometry, distance, unit, toUnionResults) {
        if (toUnionResults === void 0) { toUnionResults = false; }
        return GeometryEngineApi.buffer(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, distance, unit, toUnionResults);
    }
    exports.buffer = buffer;
    function geodesicBuffer(geometry, distance, unit, geodesicCurveTypeOrUnion, geodesicCurveTypeOrMaxDeviation, geodesicMaxDeviation) {
        return GeometryEngineApi.geodesicBuffer(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, distance, unit, geodesicCurveTypeOrUnion, geodesicCurveTypeOrMaxDeviation, geodesicMaxDeviation);
    }
    exports.geodesicBuffer = geodesicBuffer;
    function nearestCoordinate(geometry, inputPoint, testPolygonInterior) {
        if (testPolygonInterior === void 0) { testPolygonInterior = true; }
        return GeometryEngineApi.nearestCoordinate(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, inputPoint, testPolygonInterior);
    }
    exports.nearestCoordinate = nearestCoordinate;
    function nearestVertex(geometry, inputPoint) {
        return GeometryEngineApi.nearestVertex(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, inputPoint);
    }
    exports.nearestVertex = nearestVertex;
    function nearestVertices(geometry, inputPoint, searchRadius, maxVertexCountToReturn) {
        return GeometryEngineApi.nearestVertices(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, inputPoint, searchRadius, maxVertexCountToReturn);
    }
    exports.nearestVertices = nearestVertices;
    function getCenter(geometry) {
        if ("xmin" in geometry) {
            return "center" in geometry ? geometry.center : null;
        }
        if ("x" in geometry) {
            return geometry;
        }
        return "extent" in geometry ? geometry.extent.center : null;
    }
    function rotate(geometry, angle, rotateOrigin) {
        if (geometry == null) {
            throw new Error("Illegal Argument Exception");
        }
        var spatialReference = geometry.spatialReference;
        rotateOrigin = rotateOrigin !== null && rotateOrigin !== void 0 ? rotateOrigin : getCenter(geometry);
        if (rotateOrigin == null) {
            throw new Error("Illegal Argument Exception");
        }
        var result = geometry.constructor.fromJSON(GeometryEngineApi.rotate(geometry, angle, rotateOrigin));
        result.spatialReference = spatialReference;
        return result;
    }
    exports.rotate = rotate;
    function flipHorizontal(geometry, flipOrigin) {
        if (geometry == null) {
            throw new Error("Illegal Argument Exception");
        }
        var spatialReference = geometry.spatialReference;
        flipOrigin = flipOrigin !== null && flipOrigin !== void 0 ? flipOrigin : getCenter(geometry);
        if (flipOrigin == null) {
            throw new Error("Illegal Argument Exception");
        }
        var result = geometry.constructor.fromJSON(GeometryEngineApi.flipHorizontal(geometry, flipOrigin));
        result.spatialReference = spatialReference;
        return result;
    }
    exports.flipHorizontal = flipHorizontal;
    function flipVertical(geometry, flipOrigin) {
        if (geometry == null) {
            throw new Error("Illegal Argument Exception");
        }
        var spatialReference = geometry.spatialReference;
        flipOrigin = flipOrigin !== null && flipOrigin !== void 0 ? flipOrigin : getCenter(geometry);
        if (flipOrigin == null) {
            throw new Error("Illegal Argument Exception");
        }
        var result = geometry.constructor.fromJSON(GeometryEngineApi.flipVertical(geometry, flipOrigin));
        result.spatialReference = spatialReference;
        return result;
    }
    exports.flipVertical = flipVertical;
    function generalize(geometry, maxDeviation, removeDegenerateParts, maxDeviationUnit) {
        return GeometryEngineApi.generalize(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, maxDeviation, removeDegenerateParts, maxDeviationUnit);
    }
    exports.generalize = generalize;
    function densify(geometry, maxSegmentLength, maxSegmentLengthUnit) {
        return GeometryEngineApi.densify(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, maxSegmentLength, maxSegmentLengthUnit);
    }
    exports.densify = densify;
    function geodesicDensify(geometry, maxSegmentLength, maxSegmentLengthUnit, curveType) {
        if (curveType === void 0) { curveType = 0; }
        return GeometryEngineApi.geodesicDensify(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, maxSegmentLength, maxSegmentLengthUnit, curveType);
    }
    exports.geodesicDensify = geodesicDensify;
    function planarArea(geometry, unit) {
        return GeometryEngineApi.planarArea(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, unit);
    }
    exports.planarArea = planarArea;
    function planarLength(geometry, unit) {
        return GeometryEngineApi.planarLength(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, unit);
    }
    exports.planarLength = planarLength;
    function geodesicArea(geometry, unit, geodesicCurveType) {
        return GeometryEngineApi.geodesicArea(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, unit, geodesicCurveType);
    }
    exports.geodesicArea = geodesicArea;
    function geodesicLength(geometry, unit, geodesicCurveType) {
        return GeometryEngineApi.geodesicLength(hydrated_1.hydratedAdapter, getSpatialReference(geometry), geometry, unit, geodesicCurveType);
    }
    exports.geodesicLength = geodesicLength;
});
