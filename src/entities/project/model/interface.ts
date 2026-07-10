export interface Project {

    slug: string;

    title: string;

    period: string;

    role: string;

    shortDescription: string;
    
    longDescription: string;

    techStack: string[];

    // responsibilities: string[];

    achievements: string[];

    cases: ProjectCase[];

    // problem: string[];

    // solution: string[];

    // learned: string[];

    github?: string;

    demo?: string;

    images?: string[];

}

export interface ProjectCase{

    title:string;

    problem:string;

    solution:string;

    results:string[];

}