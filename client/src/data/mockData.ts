export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
  category: "Fundamentals" | "Testing Lifecycle" | "Static Testing" | "Test Techniques" | "Test Management" | "Tool Support";
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following is a major task of test implementation and execution?",
    options: [
      "Developing test priorities",
      "Logging the outcome of test execution",
      "Checking test logs against the exit criteria",
      "Defining the test environment"
    ],
    correctAnswer: 1,
    explanation: "Logging the outcome of test execution is a key activity during the implementation and execution phase. Developing priorities is part of planning, checking against exit criteria is part of evaluating exit criteria and reporting, and defining the environment is part of test analysis and design.",
    category: "Testing Lifecycle"
  },
  {
    id: 2,
    text: "What is the main reason for testing software before it is released?",
    options: [
      "To show that the software works",
      "To find as many bugs as possible",
      "To give confidence that the system meets its requirements",
      "To prove that the software is bug-free"
    ],
    correctAnswer: 2,
    explanation: "Testing provides confidence in the quality of the software. It is impossible to prove software is bug-free (Principle 1), and finding all bugs is not feasible. Showing it works is only half the picture (verification vs validation).",
    category: "Fundamentals"
  },
  {
    id: 3,
    text: "Which of the following statements best describes the difference between testing and debugging?",
    options: [
      "Testing pinpoints the faults; debugging finds the failures.",
      "Testing finds the failures; debugging identifies the cause of the failure.",
      "Testing corrects the faults; debugging finds the failures.",
      "Testing prevents the causes of failures; debugging removes the failures."
    ],
    correctAnswer: 1,
    explanation: "Testing is the process of executing software to identify failures (deviations from expected behavior). Debugging is the development activity of finding, analyzing, and removing the causes of the failure (the fault).",
    category: "Fundamentals"
  },
  {
    id: 4,
    text: "When should testing start in the software development lifecycle?",
    options: [
      "As soon as the code is written",
      "After the requirements have been approved",
      "As early as possible",
      "When the test plan is complete"
    ],
    correctAnswer: 2,
    explanation: "Testing should start as early as possible (Principle 3: Early Testing). This can include reviewing requirements even before code is written.",
    category: "Testing Lifecycle"
  },
  {
    id: 5,
    text: "Which of the following is a structure-based (white-box) test design technique?",
    options: [
      "Equivalence Partitioning",
      "Decision Table Testing",
      "Statement Coverage",
      "Boundary Value Analysis"
    ],
    correctAnswer: 2,
    explanation: "Statement Coverage is a white-box technique as it relies on the internal structure (code) of the software. The others are black-box techniques.",
    category: "Test Techniques"
  },
  {
    id: 6,
    text: "What is the primary goal of regression testing?",
    options: [
      "To check if the changed parts of the code work as intended",
      "To check if the unchanged parts of the system have been affected by changes",
      "To test the system under high load",
      "To verify the fix for a specific defect"
    ],
    correctAnswer: 1,
    explanation: "Regression testing ensures that changes (fixes or enhancements) have not introduced new defects in unchanged parts of the software. Verifying a specific fix is Confirmation Testing.",
    category: "Testing Lifecycle"
  },
  {
    id: 7,
    text: "In a formal review, who is responsible for documenting all the issues, problems, and open points?",
    options: [
      "The Moderator",
      "The Author",
      "The Scribe (or Recorder)",
      "The Reviewer"
    ],
    correctAnswer: 2,
    explanation: "The Scribe (or Recorder) is responsible for recording the minutes of the meeting and documenting the defects found.",
    category: "Static Testing"
  },
  {
    id: 8,
    text: "Which of the following tools would be most useful for regression testing?",
    options: [
      "A test management tool",
      "A static analysis tool",
      "A test execution tool (Capture/Playback)",
      "A modeling tool"
    ],
    correctAnswer: 2,
    explanation: "Test execution tools (often called test automation tools) are ideal for regression testing because they can repeat the same tests many times efficiently.",
    category: "Tool Support"
  },
  {
    id: 9,
    text: "Cyclomatic complexity is a metric used in which type of testing?",
    options: [
      "Black-box testing",
      "White-box testing",
      "Experience-based testing",
      "Acceptance testing"
    ],
    correctAnswer: 1,
    explanation: "Cyclomatic complexity is used in White-box testing (specifically Basis Path Testing) to measure the complexity of the code's control flow.",
    category: "Test Techniques"
  },
  {
    id: 10,
    text: "Which test level is primarily focused on the behavior of the whole system/product as defined by the scope of a development project?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    correctAnswer: 2,
    explanation: "System Testing focuses on verifying that the system as a whole meets the specified requirements.",
    category: "Testing Lifecycle"
  }
];
