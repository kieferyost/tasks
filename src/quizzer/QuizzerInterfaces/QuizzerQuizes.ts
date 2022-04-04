import { QuizQuestions } from "./QuizQuestions";

export interface QuizzerQuizes {
    title: string;
    description: string;
    numberOfQuestions: number;
    id: number;
    questions: QuizQuestions[];
}
