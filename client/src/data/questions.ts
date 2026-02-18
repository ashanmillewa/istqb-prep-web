export interface QuestionData {
  id: number;
  text: string;
  options: string[];
  category: string;
}

export const questionsData: Record<string, QuestionData[]> = {
  "paper-a": [
    {
      id: 1,
      text: "Which of the following is an example of a failure in a car cruise control system?",
      options: [
        "The system developer typed the wrong value for the maximum speed",
        "The system crashed when the user set the speed to 100 km/h",
        "A bug in the system code caused it to calculate the wrong speed",
        "The requirements engineer forgot to include the brake-to-cancel feature"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 2,
      text: "Which of the following is a test objective?",
      options: [
        "Finding as many defects as possible",
        "Proving that there are no remaining defects",
        "Fixing all the defects found during testing",
        "Ensuring that the developers are following the coding standards"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 3,
      text: "A tester is scanning a document to find any discrepancies. What kind of testing is this?",
      options: [
        "Dynamic testing",
        "Static testing",
        "White-box testing",
        "Black-box testing"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 4,
      text: "Testing should start as early as possible in the software development lifecycle. Which testing principle is this?",
      options: [
        "Pesticide paradox",
        "Absence-of-errors fallacy",
        "Early testing",
        "Defect clustering"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 5,
      text: "Which of the following is NOT a common test objective?",
      options: [
        "Finding defects",
        "Gaining confidence about the level of quality",
        "Providing information for decision-making",
        "Debugging the code"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 6,
      text: "Which of the following statements about the psychology of testing is TRUE?",
      options: [
        "Testers and developers should have the same mindset",
        "Testing is seen as a constructive activity by all stakeholders",
        "A certain degree of independence often makes the tester more effective",
        "Testers should not point out failures to developers"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 7,
      text: "Exhaustive testing is impossible. Which testing principle is this?",
      options: [
        "Principle 1",
        "Principle 2",
        "Principle 3",
        "Principle 4"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 8,
      text: "Defects found during static testing are often:",
      options: [
        "Harder to fix than those found in dynamic testing",
        "More expensive to fix than those found in dynamic testing",
        "Easier and cheaper to fix than those found in dynamic testing",
        "Always the same as those found in dynamic testing"
      ],
      category: "Fundamentals of Testing"
    }
    // ... more questions for other papers can be added here
  ]
};
