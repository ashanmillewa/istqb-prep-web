export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // Unit 1: Fundamentals of Testing (1-8)
  {
    id: 1,
    text: "Which of the following is an example of a failure in a car cruise control system?",
    options: [
      "The system developer typed the wrong value for the maximum speed",
      "The system crashed when the user set the speed to 100 km/h",
      "A bug in the system code caused it to calculate the wrong speed",
      "The requirements engineer forgot to include the brake-to-cancel feature"
    ],
    correctAnswer: 1,
    explanation: "A failure is an event in which a component or system does not perform a required function within specified limits. The system crashing is a failure. The others are errors or defects.",
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
    correctAnswer: 0,
    explanation: "Typical test objectives include finding defects, gaining confidence, providing information, and preventing defects. Fixing defects is a debugging/development activity.",
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
    correctAnswer: 1,
    explanation: "Testing that does not involve the execution of the component or system being tested is static testing.",
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
    correctAnswer: 2,
    explanation: "The principle of early testing states that testing activities should start as early as possible in the software development lifecycle to find defects sooner.",
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
    correctAnswer: 3,
    explanation: "Debugging is a development activity, not a test objective.",
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
    correctAnswer: 2,
    explanation: "Independence helps testers see defects that developers might overlook due to cognitive bias.",
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
    correctAnswer: 1,
    explanation: "Principle 2 states that testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases.",
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
    correctAnswer: 2,
    explanation: "Static testing finds defects before code execution, making them cheaper to fix.",
    category: "Fundamentals of Testing"
  },

  // Unit 2: Testing Throughout the SDLC (9-14)
  {
    id: 9,
    text: "In the V-model, which level of testing is usually the responsibility of the users?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    correctAnswer: 3,
    explanation: "Acceptance testing is typically performed by customers, users, or other stakeholders to determine whether to accept the system.",
    category: "Testing Throughout the SDLC"
  },
  {
    id: 10,
    text: "Which of the following is a characteristic of iterative-incremental development?",
    options: [
      "Testing is done only at the end of the project",
      "The system is developed in small, manageable pieces",
      "Requirements are frozen at the start of the project",
      "There is only one test level"
    ],
    correctAnswer: 1,
    explanation: "Iterative-incremental models like Agile involve developing the system in cycles (iterations).",
    category: "Testing Throughout the SDLC"
  },
  {
    id: 11,
    text: "Which test level focuses on the interactions between components?",
    options: [
      "Component testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    correctAnswer: 1,
    explanation: "Integration testing focuses on interactions between components or systems.",
    category: "Testing Throughout the SDLC"
  },
  {
    id: 12,
    text: "Regression testing should be performed:",
    options: [
      "Only after a change has been made to the system",
      "Every time the system is executed",
      "Only at the end of the system testing phase",
      "Only when the system fails"
    ],
    correctAnswer: 0,
    explanation: "Regression testing is triggered by changes to ensure that unchanged parts of the software still work.",
    category: "Testing Throughout the SDLC"
  },
  {
    id: 13,
    text: "What is the main focus of system testing?",
    options: [
      "Finding bugs in individual modules",
      "Testing the system as a whole against requirements",
      "Testing how different systems interact",
      "Getting approval from the customer"
    ],
    correctAnswer: 1,
    explanation: "System testing verify the behavior of the whole system/product.",
    category: "Testing Throughout the SDLC"
  },
  {
    id: 14,
    text: "Which of the following is a non-functional test?",
    options: [
      "Checking the login functionality",
      "Checking the system performance under load",
      "Checking if a specific calculation is correct",
      "Checking if a button navigates to the right page"
    ],
    correctAnswer: 1,
    explanation: "Performance testing is a type of non-functional testing.",
    category: "Testing Throughout the SDLC"
  },

  // Unit 3: Static Testing (15-18)
  {
    id: 15,
    text: "Which of the following is a benefit of static testing?",
    options: [
      "It requires the code to be executed",
      "It can find defects early in the lifecycle",
      "It is only useful for finding coding errors",
      "It replaces the need for dynamic testing"
    ],
    correctAnswer: 1,
    explanation: "Static testing can be applied to requirements, design, and code, finding defects early.",
    category: "Static Testing"
  },
  {
    id: 16,
    text: "In a formal review, who leads the meeting?",
    options: [
      "The Author",
      "The Moderator",
      "The Scribe",
      "The Manager"
    ],
    correctAnswer: 1,
    explanation: "The Moderator (or facilitator) leads the review process and the review meeting.",
    category: "Static Testing"
  },
  {
    id: 17,
    text: "Which of the following is a type of informal review?",
    options: [
      "Inspection",
      "Technical Review",
      "Walkthrough",
      "Buddy Check"
    ],
    correctAnswer: 3,
    explanation: "Buddy Check is an informal review where one peer looks at another's work.",
    category: "Static Testing"
  },
  {
    id: 18,
    text: "What is the primary purpose of a walkthrough?",
    options: [
      "To find defects and gain consensus",
      "To achieve a high-level of formal documentation",
      "To enable the author to explain their work to others",
      "To perform static analysis on the code"
    ],
    correctAnswer: 2,
    explanation: "A walkthrough is led by the author to explain the document to others and gather feedback.",
    category: "Static Testing"
  },

  // Unit 4: Test Analysis and Design (19-29)
  {
    id: 19,
    text: "Which technique uses the internal structure of the software to derive test cases?",
    options: [
      "Black-box",
      "White-box",
      "Experience-based",
      "Ad-hoc"
    ],
    correctAnswer: 1,
    explanation: "White-box techniques are based on the internal structure (code, control flow).",
    category: "Test Analysis and Design"
  },
  {
    id: 20,
    text: "Equivalence partitioning is which type of technique?",
    options: [
      "Black-box",
      "White-box",
      "Experience-based",
      "Non-functional"
    ],
    correctAnswer: 0,
    explanation: "Equivalence partitioning is a specification-based (black-box) technique.",
    category: "Test Analysis and Design"
  },
  {
    id: 21,
    text: "If a requirement says an input must be between 1 and 100 inclusive, which values would you test for 2-point Boundary Value Analysis?",
    options: [
      "0, 1, 100, 101",
      "1, 2, 99, 100",
      "1, 100",
      "0, 50, 101"
    ],
    correctAnswer: 0,
    explanation: "2-point BVA tests the boundary and the value just outside it (1, 0 and 100, 101).",
    category: "Test Analysis and Design"
  },
  {
    id: 22,
    text: "Which technique is best for testing complex business rules with multiple conditions?",
    options: [
      "Boundary Value Analysis",
      "State Transition Testing",
      "Decision Table Testing",
      "Use Case Testing"
    ],
    correctAnswer: 2,
    explanation: "Decision tables are designed to handle combinations of conditions and resulting actions.",
    category: "Test Analysis and Design"
  },
  {
    id: 23,
    text: "In State Transition Testing, a 'state' is:",
    options: [
      "A set of input values",
      "A condition in which the system is waiting for an event",
      "The path through the code",
      "The output of the system"
    ],
    correctAnswer: 1,
    explanation: "A state is a condition of the system where it reacts differently to events based on past history.",
    category: "Test Analysis and Design"
  },
  {
    id: 24,
    text: "Use case testing is most useful for testing:",
    options: [
      "Mathematical algorithms",
      "Low-level component logic",
      "Business processes and user interactions",
      "Code coverage"
    ],
    correctAnswer: 2,
    explanation: "Use cases describe interactions between actors and the system to achieve a goal.",
    category: "Test Analysis and Design"
  },
  {
    id: 25,
    text: "Which of the following is an experience-based technique?",
    options: [
      "Error Guessing",
      "Statement Testing",
      "Decision Testing",
      "Boundary Value Analysis"
    ],
    correctAnswer: 0,
    explanation: "Error guessing relies on the tester's knowledge and experience to anticipate where defects might be.",
    category: "Test Analysis and Design"
  },
  {
    id: 26,
    text: "What is 'Statement Coverage'?",
    options: [
      "The percentage of lines of code executed by tests",
      "The percentage of requirements covered by tests",
      "The percentage of paths through the code",
      "The percentage of decisions executed"
    ],
    correctAnswer: 0,
    explanation: "Statement coverage measures the percentage of executable statements that have been exercised.",
    category: "Test Analysis and Design"
  },
  {
    id: 27,
    text: "Which technique is most effective when time is very limited?",
    options: [
      "Exhaustive testing",
      "Exploratory testing",
      "Formal inspection",
      "Basis path testing"
    ],
    correctAnswer: 1,
    explanation: "Exploratory testing combines test design and execution concurrently, making it efficient.",
    category: "Test Analysis and Design"
  },
  {
    id: 28,
    text: "Checklist-based testing is a form of:",
    options: [
      "White-box testing",
      "Experience-based testing",
      "Random testing",
      "Static analysis"
    ],
    correctAnswer: 1,
    explanation: "Testers use checklists based on experience or past failures to guide their testing.",
    category: "Test Analysis and Design"
  },
  {
    id: 29,
    text: "Decision coverage is stronger than statement coverage. TRUE or FALSE?",
    options: [
      "TRUE",
      "FALSE"
    ],
    correctAnswer: 0,
    explanation: "100% decision coverage guarantees 100% statement coverage, but not vice-versa.",
    category: "Test Analysis and Design"
  },

  // Unit 5: Managing the Test Activities (30-38)
  {
    id: 30,
    text: "Which document defines the overall testing approach for a project?",
    options: [
      "Test Case Specification",
      "Test Plan",
      "Defect Report",
      "Test Log"
    ],
    correctAnswer: 1,
    explanation: "The Test Plan describes the scope, approach, resources, and schedule of intended test activities.",
    category: "Managing the Test Activities"
  },
  {
    id: 31,
    text: "Which of the following is a project risk?",
    options: [
      "The system crashes frequently",
      "The software does not meet the performance requirements",
      "A key team member leaves during the project",
      "The user interface is difficult to use"
    ],
    correctAnswer: 2,
    explanation: "Project risks relate to the management and control of the project (e.g., resources, budget, schedule).",
    category: "Managing the Test Activities"
  },
  {
    id: 32,
    text: "What is 'Product Risk'?",
    options: [
      "The risk that the project will be late",
      "The risk that the software will fail to meet user needs",
      "The risk that the budget will be exceeded",
      "The risk that the developers will be unhappy"
    ],
    correctAnswer: 1,
    explanation: "Product risk is the possibility that the software will fail to satisfy its requirements or user needs.",
    category: "Managing the Test Activities"
  },
  {
    id: 33,
    text: "In a defect report, 'Severity' describes:",
    options: [
      "The order in which the defect should be fixed",
      "The impact of the defect on the system's operation",
      "How easy the defect is to reproduce",
      "Who is responsible for the defect"
    ],
    correctAnswer: 1,
    explanation: "Severity is the degree of impact that a defect has on the development or operation of a component or system.",
    category: "Managing the Test Activities"
  },
  {
    id: 34,
    text: "Who is typically responsible for writing the test plan?",
    options: [
      "Developer",
      "Tester",
      "Test Manager",
      "Project Manager"
    ],
    correctAnswer: 2,
    explanation: "The Test Manager is responsible for test planning and control.",
    category: "Managing the Test Activities"
  },
  {
    id: 35,
    text: "Which of the following is an entry criterion?",
    options: [
      "The test environment is ready",
      "All high-priority defects are fixed",
      "100% code coverage is achieved",
      "The test summary report is signed"
    ],
    correctAnswer: 0,
    explanation: "Entry criteria are conditions that must be met before starting a test level.",
    category: "Managing the Test Activities"
  },
  {
    id: 36,
    text: "Which of the following is an exit criterion?",
    options: [
      "The requirements are defined",
      "The code is checked in",
      "A specific level of test coverage is reached",
      "The developers have finished unit testing"
    ],
    correctAnswer: 2,
    explanation: "Exit criteria define when a test level is complete.",
    category: "Managing the Test Activities"
  },
  {
    id: 37,
    text: "Configuration management helps to:",
    options: [
      "Execute tests faster",
      "Maintain the integrity of project artifacts",
      "Find more defects in the code",
      "Estimate the test effort"
    ],
    correctAnswer: 1,
    explanation: "Configuration management ensures that all items of testware are identified, version-controlled, and tracked.",
    category: "Managing the Test Activities"
  },
  {
    id: 38,
    text: "What is the purpose of a test summary report?",
    options: [
      "To log every single test execution",
      "To provide information for a release decision",
      "To list all the defects found in the project",
      "To define the test environment"
    ],
    correctAnswer: 1,
    explanation: "The summary report summarizes the results and provides an assessment of the testing against exit criteria.",
    category: "Managing the Test Activities"
  },

  // Unit 6: Test Tools (39-40)
  {
    id: 39,
    text: "Which tool is used to automate the execution of tests?",
    options: [
      "Defect management tool",
      "Requirement management tool",
      "Test execution tool",
      "Static analysis tool"
    ],
    correctAnswer: 2,
    explanation: "Test execution tools (harnesses, playback tools) automate the running of tests.",
    category: "Test Tools"
  },
  {
    id: 40,
    text: "What is a potential risk of using test automation?",
    options: [
      "Tests are executed faster",
      "Unrealistic expectations of what the tool can achieve",
      "Tests are more consistent",
      "It reduces the need for manual regression testing"
    ],
    correctAnswer: 1,
    explanation: "Underestimating the time and effort needed to maintain automated tests is a common risk.",
    category: "Test Tools"
  }
];
