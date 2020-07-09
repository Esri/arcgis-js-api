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

define(["require", "exports", "tslib", "../geometry", "../core/workers"], function (require, exports, tslib_1, geometry_1, workers_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSpatialReference(geometry) {
        var _a;
        return Array.isArray(geometry) ? (_a = geometry[0]) === null || _a === void 0 ? void 0 : _a.spatialReference : geometry === null || geometry === void 0 ? void 0 : geometry.spatialReference;
    }
    function toJSON(obj) {
        return !obj ? obj : Array.isArray(obj) ? obj.map(toJSON) : obj.toJSON ? obj.toJSON() : obj;
    }
    function fromJSON(geometry) {
        if (Array.isArray(geometry)) {
            return geometry.map(function (geometry) { return geometry_1.fromJSON(geometry); });
        }
        return geometry_1.fromJSON(geometry);
    }
    /**
     * Normalizes geometry parameters into an array of parameters.
     * Normizalizing before sending to the worker since TypeScript `Parameters` doesn't detect multiple overloads.
     */
    function toGeomArray(geometry1, geometry2) {
        var geometries;
        if (Array.isArray(geometry1)) {
            geometries = geometry1;
        }
        else {
            geometries = [];
            geometries.push(geometry1);
            if (geometry2 != null) {
                geometries.push(geometry2);
            }
        }
        return geometries;
    }
    var connPromise;
    function startWorker() {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!connPromise) {
                    connPromise = workers_1.open("geometryEngineWorker", {
                        strategy: "distributed"
                    });
                }
                return [2 /*return*/, connPromise];
            });
        });
    }
    function invoke(operation, parameters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var connection;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, startWorker()];
                    case 1:
                        connection = _a.sent();
                        return [2 /*return*/, connection.invoke("executeGEOperation", {
                                operation: operation,
                                parameters: toJSON(parameters)
                            })];
                }
            });
        });
    }
    function extendedSpatialReferenceInfo(spatialReference) {
        return invoke("extendedSpatialReferenceInfo", [spatialReference]);
    }
    exports.extendedSpatialReferenceInfo = extendedSpatialReferenceInfo;
    function clip(geometry, extent) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("clip", [getSpatialReference(geometry), geometry, extent])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.clip = clip;
    function cut(geometry, cutter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("cut", [getSpatialReference(geometry), geometry, cutter])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.cut = cut;
    function contains(geometry1, geometry2) {
        return invoke("contains", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.contains = contains;
    function crosses(geometry1, geometry2) {
        return invoke("crosses", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.crosses = crosses;
    function distance(geometry1, geometry2, distanceUnit) {
        return invoke("distance", [getSpatialReference(geometry1), geometry1, geometry2, distanceUnit]);
    }
    exports.distance = distance;
    function equals(geometry1, geometry2) {
        return invoke("equals", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.equals = equals;
    function intersects(geometry1, geometry2) {
        return invoke("intersects", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.intersects = intersects;
    function touches(geometry1, geometry2) {
        return invoke("touches", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.touches = touches;
    function within(geometry1, geometry2) {
        return invoke("within", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.within = within;
    function disjoint(geometry1, geometry2) {
        return invoke("disjoint", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.disjoint = disjoint;
    function overlaps(geometry1, geometry2) {
        return invoke("overlaps", [getSpatialReference(geometry1), geometry1, geometry2]);
    }
    exports.overlaps = overlaps;
    function relate(geometry1, geometry2, relation) {
        return invoke("relate", [getSpatialReference(geometry1), geometry1, geometry2, relation]);
    }
    exports.relate = relate;
    function isSimple(geometry) {
        return invoke("isSimple", [getSpatialReference(geometry), geometry]);
    }
    exports.isSimple = isSimple;
    function simplify(geometry) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("simplify", [getSpatialReference(geometry), geometry])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.simplify = simplify;
    function convexHull(geometry, merge) {
        if (merge === void 0) { merge = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("convexHull", [getSpatialReference(geometry), geometry, merge])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.convexHull = convexHull;
    function difference(geometry, subtractor) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("difference", [getSpatialReference(geometry), geometry, subtractor])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.difference = difference;
    function symmetricDifference(leftGeometry, rightGeometry) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("symmetricDifference", [getSpatialReference(leftGeometry), leftGeometry, rightGeometry])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.symmetricDifference = symmetricDifference;
    function intersect(geometry, intersector) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("intersect", [getSpatialReference(geometry), geometry, intersector])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.intersect = intersect;
    function union(geometry1, geometry2) {
        if (geometry2 === void 0) { geometry2 = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geometries, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        geometries = toGeomArray(geometry1, geometry2);
                        return [4 /*yield*/, invoke("union", [getSpatialReference(geometries), geometries])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.union = union;
    function offset(geometry, distance, offsetUnit, joinType, bevelRatio, flattenError) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("offset", [
                            getSpatialReference(geometry),
                            geometry,
                            distance,
                            offsetUnit,
                            joinType,
                            bevelRatio,
                            flattenError
                        ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.offset = offset;
    function buffer(geometry, distance, unit, toUnionResults) {
        if (toUnionResults === void 0) { toUnionResults = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [
                            getSpatialReference(geometry),
                            geometry,
                            distance,
                            unit,
                            toUnionResults
                        ];
                        return [4 /*yield*/, invoke("buffer", params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.buffer = buffer;
    function geodesicBuffer(geometry, distance, unit, geodesicCurveTypeOrUnion, geodesicCurveTypeOrMaxDeviation, geodesicMaxDeviation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [
                            getSpatialReference(geometry),
                            geometry,
                            distance,
                            unit,
                            geodesicCurveTypeOrUnion,
                            geodesicCurveTypeOrMaxDeviation,
                            geodesicMaxDeviation
                        ];
                        return [4 /*yield*/, invoke("geodesicBuffer", params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.geodesicBuffer = geodesicBuffer;
    function nearestCoordinate(geometry, inputPoint, testPolygonInterior) {
        if (testPolygonInterior === void 0) { testPolygonInterior = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("nearestCoordinate", [
                            getSpatialReference(geometry),
                            geometry,
                            inputPoint,
                            testPolygonInterior
                        ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, result), { coordinate: geometry_1.Point.fromJSON(result.coordinate) })];
                }
            });
        });
    }
    exports.nearestCoordinate = nearestCoordinate;
    function nearestVertex(geometry, inputPoint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("nearestVertex", [getSpatialReference(geometry), geometry, inputPoint])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, result), { coordinate: geometry_1.Point.fromJSON(result.coordinate) })];
                }
            });
        });
    }
    exports.nearestVertex = nearestVertex;
    function nearestVertices(geometry, inputPoint, searchRadius, maxVertexCountToReturn) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var results;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("nearestVertices", [
                            getSpatialReference(geometry),
                            geometry,
                            inputPoint,
                            searchRadius,
                            maxVertexCountToReturn
                        ])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results.map(function (result) { return (tslib_1.__assign(tslib_1.__assign({}, result), { coordinate: geometry_1.Point.fromJSON(result.coordinate) })); })];
                }
            });
        });
    }
    exports.nearestVertices = nearestVertices;
    function getCenter(geometry) {
        if ("xmin" in geometry) {
            return geometry.center;
        }
        if ("x" in geometry) {
            return geometry;
        }
        return geometry.extent.center;
    }
    function rotate(geometry, angle, rotateOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var spatialReference, result, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (geometry == null) {
                            throw new Error("Illegal Argument Exception");
                        }
                        spatialReference = geometry.spatialReference;
                        rotateOrigin = rotateOrigin !== null && rotateOrigin !== void 0 ? rotateOrigin : getCenter(geometry);
                        _b = (_a = geometry.constructor).fromJSON;
                        return [4 /*yield*/, invoke("rotate", [spatialReference, geometry, angle, rotateOrigin])];
                    case 1:
                        result = _b.apply(_a, [_c.sent()]);
                        result.spatialReference = spatialReference;
                        return [2 /*return*/, result];
                }
            });
        });
    }
    exports.rotate = rotate;
    function flipHorizontal(geometry, flipOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var spatialReference, result, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (geometry == null) {
                            throw new Error("Illegal Argument Exception");
                        }
                        spatialReference = geometry.spatialReference;
                        flipOrigin = flipOrigin !== null && flipOrigin !== void 0 ? flipOrigin : getCenter(geometry);
                        _b = (_a = geometry.constructor).fromJSON;
                        return [4 /*yield*/, invoke("flipHorizontal", [spatialReference, geometry, flipOrigin])];
                    case 1:
                        result = _b.apply(_a, [_c.sent()]);
                        result.spatialReference = spatialReference;
                        return [2 /*return*/, result];
                }
            });
        });
    }
    exports.flipHorizontal = flipHorizontal;
    function flipVertical(geometry, flipOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var spatialReference, result, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (geometry == null) {
                            throw new Error("Illegal Argument Exception");
                        }
                        spatialReference = geometry.spatialReference;
                        flipOrigin = flipOrigin !== null && flipOrigin !== void 0 ? flipOrigin : getCenter(geometry);
                        _b = (_a = geometry.constructor).fromJSON;
                        return [4 /*yield*/, invoke("flipVertical", [spatialReference, geometry, flipOrigin])];
                    case 1:
                        result = _b.apply(_a, [_c.sent()]);
                        result.spatialReference = spatialReference;
                        return [2 /*return*/, result];
                }
            });
        });
    }
    exports.flipVertical = flipVertical;
    function generalize(geometry, maxDeviation, removeDegenerateParts, maxDeviationUnit) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("generalize", [
                            getSpatialReference(geometry),
                            geometry,
                            maxDeviation,
                            removeDegenerateParts,
                            maxDeviationUnit
                        ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.generalize = generalize;
    function densify(geometry, maxSegmentLength, maxSegmentLengthUnit) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("densify", [
                            getSpatialReference(geometry),
                            geometry,
                            maxSegmentLength,
                            maxSegmentLengthUnit
                        ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.densify = densify;
    function geodesicDensify(geometry, maxSegmentLength, maxSegmentLengthUnit, curveType) {
        if (curveType === void 0) { curveType = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, invoke("geodesicDensify", [
                            getSpatialReference(geometry),
                            geometry,
                            maxSegmentLength,
                            maxSegmentLengthUnit,
                            curveType
                        ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, fromJSON(result)];
                }
            });
        });
    }
    exports.geodesicDensify = geodesicDensify;
    function planarArea(geometry, unit) {
        return invoke("planarArea", [getSpatialReference(geometry), geometry, unit]);
    }
    exports.planarArea = planarArea;
    function planarLength(geometry, unit) {
        return invoke("planarLength", [getSpatialReference(geometry), geometry, unit]);
    }
    exports.planarLength = planarLength;
    function geodesicArea(geometry, unit, geodesicCurveType) {
        return invoke("geodesicArea", [getSpatialReference(geometry), geometry, unit, geodesicCurveType]);
    }
    exports.geodesicArea = geodesicArea;
    function geodesicLength(geometry, unit, geodesicCurveType) {
        return invoke("geodesicLength", [getSpatialReference(geometry), geometry, unit, geodesicCurveType]);
    }
    exports.geodesicLength = geodesicLength;
});
