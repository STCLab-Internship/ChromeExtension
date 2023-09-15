# NetFUNNEL ChromeExtension

STCLab사 에서 인턴활동을 하며, agent설치에 어려움을 겪는 고객사들을 위해 개발하였습니다.
- NetFUNNEL 제품에 대한 안전한 테스트 환경을 제공
- agent 직접 설치 없이 NetFUNNEL 활용 가능
- 기술지원 및 문의 필요 X

---
### content_script.js 활용
크롬 익스텐션에서 외부 스크립트 파일을 밀어 넣어주는 역할
`manifest.json`
```
"content_scripts": [ 
    { 
        "js": [ "/JS/extension.js" ], 
        "matches": [ "http://*/*", "https://*/*" ], "run_at": "document_start" 
    }
]
```
`popup.js`
- 사용자에게 tenantID 입력 받는 UI
- chrome.storage.local 활용
    : 사용자의 tenantID 저장/변경

---

### 크롬 확장프로그램 웹스토어에서 직접 확인하실 수 있습니다.
[NetFUNNEL Chrome Extension](https://chrome.google.com/webstore/detail/stclab-netfunnel/jdhbojdianbelbmcbgkdkcanjcgdlcfk?utm_source=ext_sidebar&hl=ko)