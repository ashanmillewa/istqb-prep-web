export interface AnswerData {
  questionId: number;
  correctAnswer: number;
  explanation: string;
}

export const answersData: Record<string, AnswerData[]> = {
  "paper-a": [
    {
      questionId: 1,
      correctAnswer: 1,
      explanation: "A failure is an event in which a component or system does not perform a required function within specified limits. The system crashing is a failure. The others are errors or defects."
    },
    {
      questionId: 2,
      correctAnswer: 0,
      explanation: "Typical test objectives include finding defects, gaining confidence, providing information, and preventing defects. Fixing defects is a debugging/development activity."
    },
    {
      questionId: 3,
      correctAnswer: 1,
      explanation: "Testing that does not involve the execution of the component or system being tested is static testing."
    },
    {
      questionId: 4,
      correctAnswer: 2,
      explanation: "The principle of early testing states that testing activities should start as early as possible in the software development lifecycle to find defects sooner."
    },
    {
      questionId: 5,
      correctAnswer: 3,
      explanation: "Debugging is a development activity, not a test objective."
    },
    {
      questionId: 6,
      correctAnswer: 2,
      explanation: "Independence helps testers see defects that developers might overlook due to cognitive bias."
    },
    {
      questionId: 7,
      correctAnswer: 1,
      explanation: "Principle 2 states that testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases."
    },
    {
      questionId: 8,
      correctAnswer: 2,
      explanation: "Static testing finds defects before code execution, making them cheaper to fix."
    }
    // ... more answers for other papers can be added here
  ]
};
