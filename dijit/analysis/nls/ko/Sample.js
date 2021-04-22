// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define({toolDefine:"샘플",outputLayerName:"${layername}_sampled",locationLayer:"위치 레이어 선택",uniqueIDField:"고유 ID 필드 지정",acquisitionDefinition:"위치 데이터의 취득 정보 지정(선택)",acquisitionDimension:"치수 및 취득 정보 형식 지정(선택)",buffer:"버퍼 거리 필드 또는 값 지정",formatOptions:"형식 옵션",dimensionField:"치수 필드 또는 값",dimensionFieldOrValue:"치수 필드 또는 값",relativeDaysBefore:"앞의 상댓값",relativeDaysAfter:"뒤의 상댓값",singleFieldOrValue:"단일 필드 또는 값",singleFieldWithRelativeValues:"상댓값이 포함된 단일 필드 또는 값",startEndFieldsOrValues:"시작 및 종료 필드 또는 값",startFieldOrValue:"시작 필드 또는 값",endFieldOrValue:"종료 필드 또는 값",statisticsType:"통계 유형 선택",percentile:"백분위수",percentileValue:"백분위수 값",resample:"리샘플링 테크닉 지정",nearest:"최근접",bilinear:"이중선형",cubic:"3차",outputLayout:"출력 레이아웃 지정",layoutRow:"샘플링된 값이 행에 나타납니다.",layoutColumn:"샘플링된 값이 열에 나타납니다.",outputType:"출력 유형 지정",features:"특징",table:"테이블",removeLayer:"레이어 제거",dimensionError:"치수 정보를 불러올 수 없습니다. 모든 변수의 치수는 같아야 합니다.",analysisLayerLabel:"샘플링할 영상 레이어 선택",itemDescription:"샘플에서 생성된 분석 이미지 서비스",itemTags:"래스터 분석 결과, 샘플, ${layername}",itemSnippet:"샘플에서 생성된 분석 이미지 서비스"});