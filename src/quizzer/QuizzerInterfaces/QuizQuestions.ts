export type QuestionType = "multiple_choice_question" | "short_answer_question";

export interface QuizQuestions {
    name: string;
    body: string;
    points: number;
    type: QuestionType;
    published: boolean;
    options: string[];
    expected: string;
}
