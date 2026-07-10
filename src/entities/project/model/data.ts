import { Project } from "@/entities/project/model/interface";

export const projects: Project[] = [
    {
        slug: "ordinary-day",

        title: "Unity 게임 개발",

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
            "GoLang",
            "Sqlite",
            "AWS",
            "Firebase",
        ],

        achievements: [
            "SEO 최적화",
            "Lighthouse 95+",
        ],

        cases: [
            {
                title: "12",
                problem: "34",
                solution: "56",
                results: ["fds","gsgs"]
            },
        ],

        demo: "https://play.google.com/store/search?q=%ED%8F%89%EB%B2%94%ED%95%9C%EB%82%A0+%EC%B2%AD%ED%95%98%EA%B5%AC",
        
        images: ["/project/ordinary-day-1.png","/project/ordinary-day-2.png"],
    }
];