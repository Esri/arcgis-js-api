// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({general:{cancel:"취소",close:"닫기",none:"없음",ok:"확인",other:"기타",stamp:"스탬프",now:"지금",choose:"다음 중 하나를 선택합니다."},editor:{noMetadata:"이 항목의 메타데이터가 없습니다.",xmlViewOnly:"이 항목과 연결된 메타데이터 유형을 편집기에서 지원하지 않습니다. 메타데이터는 ArcGIS 형식이어야 합니다.",editorDialog:{caption:"메타데이터",captionPattern:"{title}의 메타데이터"},primaryToolbar:{view:"보기",viewXml:"XML 보기",edit:"편집",initializing:"로드 중...",startingEditor:"편집기 시작 중...",loadingDocument:"문서 불러오는 중...",updatingDocument:"문서 업데이트 중...",generatingView:"뷰 생성 중...",errors:{errorGeneratingView:"뷰를 업데이트하는 동안 오류가 발생했습니다.",errorLoadingDocument:"문서를 불러오는 동안 오류가 발생했습니다."}},changesNotSaved:{prompt:"문서에 저장되지 않은 변경 내용이 있습니다.",dialogTitle:"메타데이터 편집기 닫기",closeButton:"닫기"},download:{caption:"다운로드",dialogTitle:"다운로드",prompt:"파일을 다운로드하려면 여기를 클릭하세요."},load:{caption:"열기",dialogTitle:"열기",typeTab:"새 문서",fileTab:"파일 열기",templateTab:"템플릿",itemTab:"내 항목",filePrompt:"로컬 ArcGIS 메타데이터 XML 파일을 선택합니다. 메타데이터는 ArcGIS 형식이어야 합니다.",templatePrompt:"메타데이터 생성",pullItem:"메타데이터에 항목 세부정보를 작성합니다.",importWarning:"선택한 파일이 ArcGIS 형식으로 나타나지 않습니다. 업로드한 메타데이터는 ArcGIS 형식이어야 합니다.",loading:"로드 중...",noMetadata:"다음 옵션 중 하나를 선택하여 이 항목의 메타데이터를 생성할 수 있습니다.",unrecognizedMetadata:"이 항목과 연결된 메타데이터 유형을 편집기에서 지원하지 않습니다. 다음 옵션 중 하나를 선택하여 지원되는 메타데이터를 생성할 수 있습니다.",errorLoading:"불러오는 동안 오류가 발생했습니다.",warnings:{badFile:"선택한 파일을 불러올 수 없습니다.",notAnXml:"선택한 파일은 XML 파일이 아닙니다.",notSupported:"이 유형의 파일은 지원되지 않습니다."}},save:{caption:"저장",dialogTitle:"메타데이터 저장",working:"메타데이터 저장 중...",errorSaving:"오류가 발생하여 메타데이터가 저장되지 않았습니다.",saveDialog:{pushCaption:"내 항목에 변경 내용 적용"}},saveAndClose:{caption:"저장 & 닫기"},saveDraft:{caption:"로컬 복사본 저장",dialogTitle:"로컬 복사본 저장"},validate:{caption:"유효성 검사",dialogTitle:"유효성 검사",docIsValid:"문서가 유효합니다."},del:{caption:"삭제",dialogTitle:"메타데이터 삭제",prompt:"이 메타데이터를 삭제하시겠습니까?",working:"메타데이터 삭제 중...",errorDeleting:"오류가 발생하여 메타데이터가 삭제되지 않았습니다."},transform:{caption:"변환",dialogTitle:"다음으로 변환",prompt:"",working:"변환 중...",errorTransforming:"문서를 변환하는 동안 오류가 발생했습니다."},errorDialog:{dialogTitle:"오류가 발생했습니다."}},arcgis:{portal:{metadataButton:{caption:"메타데이터"}}},calendar:{button:"달력...",title:"달력"},geoExtent:{button:"지리적 범위 설정 중...",title:"지리적 범위",navigate:"탐색",draw:"직사각형 그리기",drawHint:"시작점에서 누르고 종료점에서 손을 뗍니다."},hints:{date:"(yyyy, yyyy-mm, yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy, yyyy-mm, yyyy-mm-dd, yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(구분하기 위해 쉼표나 새 라인 사용)",fgdcDate:"(yyyy, yyyy-mm, yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(정수 입력)",latitude:"(십진 도수)",longitude:"(십진 도수)",number:"(숫자 입력)",numberGreaterThanZero:"(0보다 큰 숫자 입력)"},isoTopicCategoryCode:{caption:"주제 범주",boundaries:"행정과 정치 경계",farming:"농업",climatologyMeteorologyAtmosphere:"대기 및 기후",biota:"생물학 및 생태학",economy:"비즈니스 및 경제",planningCadastre:"지적",society:"문화, 사회, 인구",elevation:"고도 및 파생 산출물",environment:"환경 및 보존",structure:"시설 및 구조",geoscientificInformation:"지질학 및 지구 물리학",health:"인류 건강 및 질병",imageryBaseMapsEarthCover:"이미지 및 베이스맵",inlandWaters:"내륙 수자원",location:"위치 및 측지 네트워크",intelligenceMilitary:"군대",oceans:"해양 및 하구",transportation:"교통 네트워크",utilitiesCommunication:"공공 설비 및 통신"},multiplicity:{moveElementDown:"섹션 아래로 이동",moveElementUp:"섹션 위로 이동",removeElement:"섹션 제거",repeatElement:"섹션 반복"},optionalNode:{switchTip:"이 섹션 포함 또는 제외"},serviceTypes:{featureService:"피처 서비스",mapService:"맵 서비스",imageService:"이미지 서비스",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"확인",empty:"값이 필요합니다.",date:"값은 날짜여야 합니다.",integer:"값은 정수여야 합니다.",number:"값은 숫자여야 합니다.",other:"잘못된 값입니다."},validationPane:{clearMessages:"메시지 지우기",prompt:"아래에 있는 각 메시지를 클릭하고 지정한 필드에 필요한 정보를 입력하세요."}});