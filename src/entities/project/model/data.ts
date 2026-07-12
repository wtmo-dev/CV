import { Project } from "@/entities/project/model/interface";

export const projects: Project[] = [
    {
        slug: "ordinary-day",

        title: "Unity 추리 게임 개발",

        period: "2024.10.01 ~ 2026.05.19",

        role: "FullStack Developer",

        shortDescription:
            "Unity 기반 모바일 게임 기획 및 개발",

        longDescription:
            `2000년대 대한민국을 배경으로 한 모바일 추리 어드벤처 게임입니다.

            플레이어는 단서를 수집하고 추리를 진행하며 사건을 해결합니다.

            Unity를 기반으로 개발하였으며,
            Firebase, SQLite, Addressables를 활용하여
            모바일 환경에 최적화된 구조를 설계했습니다.`,

        techStack: [
            "Unity",
            "C#",
            "GoLang",
            "Sqlite",
            "AWS",
            "Firebase",
        ],

        achievements: [
            "Logic 특허 출원",
            "PN99 100ms",
            "메모리 효율 70% 향상"
        ],

        cases: [
            {
                title: "다중 조건 데이터 처리",
                problem: `추리 게임의 특성과 고유 시스템의 결합으로 인하여 복잡한 조건이였습니다.
                주요인자 약 10개, 세부인자 약 50개가 엮인 10MB 이상의 데이터셋에서, 필요한 값을 도출하는데 Logic 설계적인 문제가 있었습니다.
                기초 설계 시도시 1s가 넘는 추출 시간이 소모 되어 고도화가 필요 했습니다.`,
                solution: `1차적인 기초 설계는 json과 sqlite로 구성했으나 사용하는데 한계를 식별했습니다. 하여 다음과 같이 해결했습니다.
                1. 게임의 특성상 여러명의 접근을 고려해야 하여 기반 언어는 처리 속도가 빠른 GoLang을 선택하게 되었습니다.
                2. 데이터를 불러오고 병합하는 과정에서 DB의 Lock 발생과 Join 조건들을 해소 하기 위하여 주요 Key를 분할하여 Hash를 사용해서 Cache를 구성했습니다.
                3. Hash만으로 Key를 구성하기 적절한 조건과 적절하지 않은 조건을 구분하여 json과 csv로 구조를 구분해서 구성했습니다.
                4. 위의 기법을 기반하여 최적의 Logic을 설계하는데 성공했으며 가장 오래 걸리던 PN 99를 1s -> 100ms로 업그레이드 했습니다.`,
                results: ["Logic 특허 출원","PN99 100ms"]
            },
            {
                title: "메모리 점유 효율성 개선",
                problem: `게임에 사용되는 리소스들을 활용하는데 중복적으로 사용이 되거나, 비효율적인 사용이 있었습니다.
                순차적으로 해결해 나가는데 있어서 우선 리소스를 처음에는 로컬로 사용했으나 Addressable로 원격으로 가져오게 변경했습니다.
                apk를 가볍게 하는데는 성공했으나 보안상에 약세를 가지기도 하며 메모리 점유에 있어서 효율성은 다소 개선되지 않았습니다.
                메모리 효율성 개선에 앞서 보안상의 문제를 해결하지 못하면 데이터 유출이 우려되어 보안 -> 효율성 개선을 시도 했습니다.`,
                solution: 
                `1. 원격지에 데이터를 주소만 알면 가져올 수 있어서 우선 데이터 자체를 암호화 시도 했으나 Unity에서 가져올때 Middleware로 선 복호화가 불가능했습니다.
                2. Addressable system의 코드를 읽고 자체적인 Replica system을 만들어서 원격지에서도 snipping을 해도 유츌이 힘들게 개선했습니다.
                3. 메모리는 cpu profiler를 이용해서 중복적으로 불러와지는 영역을 분석하다가 리소스의 종류에 따라서 처리방식이 다른것을 알게 되어 종류별로 구분을 했습니다.
                4. 종류별로 제공되는 loader를 전부 새로 구성하여 중복적으로 불러와지고 저장되는 문제를 해결해 30% 정도의 용량 감소에 성공했습니다.
                5. 위의 기법을 기반하여 자체 로직과 용량 감축으로 종합적으로 메모리 점유 효율이 70% 향상되었습니다.
                6. 추가적으로 서버에서 CDN 처리가 가능한 리소스를 구분하여 유저들이 다운을 받아도 회사에서 지출되는 비용을 90%까지 절감했습니다.`,
                results: ["메모리 효율 70% 향상","비용절감 90% 향상"]
            },
        ],

        demo: "https://play.google.com/store/search?q=%ED%8F%89%EB%B2%94%ED%95%9C%EB%82%A0+%EC%B2%AD%ED%95%98%EA%B5%AC",
        
        images: ["/project/ordinary-day-1.png","/project/ordinary-day-2.jpg"],
    },
    {
        slug: "ai-bot",

        title: "AI 봇 제작 및 활용",

        period: "2024.02.14 ~ 2024.10.31",

        role: "FullStack Developer",

        shortDescription:
            "LLM Slack Bot을 이용한 교육현장 지원",

        longDescription:
            `LLM을 이용한 Slack Bot을 만들어서, 학생들이 강의 이후에 학습을 위한 질의를 24시간 지원하는것을 목표로 한 프로젝트입니다.
            수업 자료에 기반하였기 때문에 수업 자료와 논문을 RAG로 정확도를 올릴 수 있게 기능을 추가 했습니다.`,

        techStack: [
            "Python",
            "FastAPI",
            "LLM",
            "AWS",
            "Slack Bot",
        ],

        achievements: [
            "GPT-4 : TTFT 0.5s / TTLT 5s"
        ],

        cases: [
            {
                title: "응답 시간 최적화",
                problem: `시스템 설계에 따라 구현 완료 후 API를 연결하고 테스트를 해보았으나, TTLT가 10초 이상 걸려서 실제로 사용하기에는 적절하지 않았습니다.
                slack을 이용하는데 있어서 여러명이 사용하기때문에 부하에 대한 관리 또한 필요했습니다.`,
                solution: 
                `1. 우선 여러명이 동작하고 RAG를 사용하는것과 Embedding을 업데이트하는데 있어서, Bot User가 불편함을 느끼지않게 worker를 CPU Core 대비 절반정도로 올렸습니다.
                2. MultiThread를 이용해서 RAG를 사용한 결과물과 일반 결과물의 비교를 통하여 더 좋은 결과물을 도출했습니다.
                3. 이후 후처리를 따로 관리하여 User가 사용하는데 있어서 불편함들 감소 시키는데 성공하였습니다.
                4. 마지막으로 token 제한 조건을 추가하는것 까지 진행하여 User들의 평가를 취합했을때 좋은 사용감을 평가받았습니다.`,
                results: ["GPT-4 : TTFT 0.5s / TTLT 5s"]
            },
        ]
    },
    {
        slug: "cv-detect1",

        title: "로드마크 탐지 AI 개발",

        period: "2023.12.26 ~ 2024.02.08",

        role: "AI Developer",

        shortDescription:
            "자율주행시 사고를 줄이기 위한 로드마크 탐지 AI를 개발",

        longDescription:
            `자동차의 자율주행을 하는데 있어서 도로의 다양한 로드마크들을 카메라로 식별할 수 있습니다.
            이때 YoLov8의 객체 탐지 기술을 활용하여 더 좋은 객체를 탐색하는 방법에 대하여 연구하고 실험해보는 프로젝트입니다.`,

        techStack: [
            "Python",
            "Pandas",
            "YOLOv8",
        ],

        achievements: [
            "Performance increase 3%(mAP@0.5:0.95)"
        ],

        cases: [
            {
                title: "YOLOv8 성능 향상",
                problem: `이미 다양한 자동차에 내장 되어 있는 다양한 카메라의 활용성을 높여서 사고를 줄이는데 도움을 주자는 차원에서 객체 탐지를 시도 했습니다.
                하지만 노후화 되어 있는 로드마크가 많아서 실질적으로 도입하는데까지는 적절해 보이지 않아 방안들을 연구 모색해 봤습니다.`,
                solution: 
                `1. 데이터셋을 만드는데 있어서 노후화 된것이 문제인것인가 하여 우선 정확하게 찍혀져 있는 이미지들만을 이용하여 다시 진행해보았고 성능이 향상은 되었으나 현실적으로 적용되기 힘들어 다른 방법을 모색했습니다.
                2. 오염이 있는데이터를 일부 넣어서 진행해보았으나 효과적으로 성능이 향상되지 않았습니다.
                3. 모델의 구조를 변경해보는게 좋겠다고 판단하여 내부에 있던 내장 모듈들의 조합을 수정하여 재조립하였습니다.
                4. 일부 성능의 향상은 있었습니다. 하지만 실전에 적용되기에는 부족하여 폐기가 되었습니다.`,
                results: ["Performance increase 3%(mAP@0.5:0.95)"]
            },
        ]
    },
    {
        slug: "predict-elect",

        title: "전력 예측 AI 개발",

        period: "2023.11.07 ~ 2023.12.06",

        role: "AI Developer",

        shortDescription:
            "전력 생성 및 소모량을 예측하여 전력의 안정석 확보",

        longDescription:
            `전력 생산과 소모는 계산치에서 오차가 많이 발생하면 불안정성이 생길 수 있습니다.
            그에따라 예로부터 예측값을 잘 맞추면 상점을 주는 체계가 있는 작업이기도 합니다.
            재생에너지가 많이 생겨나는 요즘 생산량과 소모량의 예측은 더 힘들어 졌고, 예측을 위하여 기상 정보를 활용해보기로 했습니다.`,

        techStack: [
            "Python",
            "Pandas",
            "CNN",
            "LSTM"
        ],

        achievements: [
            "기반 모델 심층 연구 돌입"
        ],

        cases: [
            {
                title: "기상 데이터를 활용한 전력 예측 AI",
                problem: `전력 예측을 하는데 있어서 날씨 상황에 따라, 재생에너지의 종류에 따라 영향을 종합적으로 주는것은 기상정보입니다.
                이러한 기상 정보는 이미지인데 이미지를 기반하여 AI를 구성하는것은 리소스적인 한계로 효율적인 방식을 필요로 했습니다.`,
                solution: 
                `1. 원형 기상 이미지 말고 좌표를 기반한 데이터 정보를 사용해도 보간으로 인하여 문제를 해결할 수 있어보였습니다.
                2. 기상정보는 시간의 흐름을 가지고 2차원의 좌표평면의 좌표를 가지는 데이터이기 때문에 CNN과 LSTM의 융합을 해보면 좋겠다고 판단했습니다.
                3. 설계대로 구현한 이후 여러 테스트 결과 실무에서 사용중인 오차범위를 보았을때 가능성을 보았습니다.
                4. 해당 도메인의 박사님의 지휘하에 심층 연구를 해보는게 좋겠다는 판단하에 교수님과 컨텍하여 연구에 돌입했습니다.`,
                results: ["기반 모델 심층 연구 돌입"]
            },
        ]
    },
    {
        slug: "data-crawl",

        title: "다중 데이터 크롤링",

        period: "2024.09.15 ~ 2024.10.23",

        role: "Data Engineer",

        shortDescription:
            "효율적인 데이터 크롤링 방법에 대한 모색",

        longDescription:
            `데이터 크롤링을 하는것은 생각보다 시간이 오래 걸리는 작업입니다.
            따라서 크롤링을 효율적으로 하는 방법을 모색해 보고 작업을 해보기로 했습니다.`,

        techStack: [
            "Python",
            "Scrapy",
            "FastAPI"
        ],

        achievements: [
            "40x faster than Selenium"
        ],

        cases: [
            {
                title: "효율적인 데이터 크롤링",
                problem: `데이터를 크롤링하는데 있어서 데이터가 많으면 작업시간이 길게 소모됩니다.
                이러한 문제를 해결하기 위하여 다양한 방법들을 모색해 보았습니다.`,
                solution: 
                `1. Selenium을 사용하면 조금 더 정밀한 방법들을 사용할 수 있지만 메모리 사용량과 함께 속도에 있어서 한계가 있습니다.
                2. Scrapy를 이용하면 위의 문제가 해결이 되었지만 FastAPI의 장점인 uvicorn을 이용한 worker를 사용하는데 충돌이 생겼습니다.
                3. 상단의 kernel에서 subprocess를 이용한 방법으로 FastAPI를 여러개 돌리는 방법을 통하여 충돌을 해결하고 속도 향상을 이루었습니다.`,
                results: ["40x faster than Selenium"]
            },
        ]
    },
    {
        slug: "ostomy-patient",

        title: "장루 환자 관리 시스템",

        period: "2022.04.15 ~ 2022.12.20",

        role: "FullStack Developer",

        shortDescription:
            "장루 환자의 장루 관리 도움 시스템",

        longDescription:
            `장루 환자들은 장루 주머니를 매고 평생을 살아야 합니다.
            장루는 의식하지 못한 순간 찰 수 있고, 사회생활을 하는데 불편을 야기합니다.
            장루 주머니의 휨 정도와 상태를 확인하여 주머니 상태를 실시간으로 알 수 있으면 용의합니다.`,

        techStack: [
            "React Native",
            "Express",
            "AWS",
            "BLE"
        ],

        achievements: [
            "Refactored the entire codebase to improve maintainability",
            "Mentored team members and improved overall development skills",
            "Resolved Bluetooth module issues and restored functionality"
        ],

        cases: [
            {
                title: "블루투스 모듈 재구성",
                problem: `블루투스 모듈을 사용하려고 하는데, 당시에 블루투스 사용방식이 전체적으로 변경되면서 모든 오픈소스 모듈이 사용이 불가능했습니다.`,
                solution: `모듈들을 기반하여 변경된 Native 모듈들을 전부 수정해서 동작되게 고쳤습니다.`,
                results: ["Resolved Bluetooth module issues and restored functionality"]
            },
        ]
    },
    {
        slug: "contactless-reservation",

        title: "비대면 예약 관리 시스템",

        period: "2020.11.15 ~ 2021.09.15",

        role: "FullStack Developer",

        shortDescription:
            "비대면 환자 예약 관리 시스템의 수요로 인한 개발",

        longDescription:
            `코로나로 인하여 비대면 환자 예약 관리 시스템이 필요했습니다.`,

        techStack: [
            "React Native",
            "React",
            "Express",
            "AWS",
        ],

        achievements: [
            "Developed the mobile application",
            "Implemented additional backend features",
            "Maintained and enhanced the frontend"
        ],

        cases: []
    }
];