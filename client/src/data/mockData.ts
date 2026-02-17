export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface Paper {
  id: string;
  title: string;
  questions: Question[];
}

export const samplePapers: Paper[] = [
  {
    id: "paper-a",
    title: "Sample Exam Set A (v4.0)",
    questions: [
      // Unit 1: Fundamentals of Testing (1-8)
      {
        id: 1,
        text: "What is the primary objective of testing?",
        options: [
          "To show that the software is bug-free",
          "To find as many defects as possible",
          "To give confidence that the system meets its requirements",
          "To prove that the software works correctly"
        ],
        correctAnswer: 2,
        explanation: "One of the key objectives of testing is to provide confidence in the level of quality of the system and that it meets its requirements.",
        category: "Fundamentals of Testing"
      },
      {
        id: 2,
        text: "Which of the following is a common objective of testing?",
        options: [
          "Fixing all bugs found during testing",
          "Proving that the software has no errors",
          "Preventing defects by evaluating work products",
          "Debugging the code as it is being written"
        ],
        correctAnswer: 2,
        explanation: "Evaluating work products (like requirements) helps prevent defects from being introduced into the code later.",
        category: "Fundamentals of Testing"
      },
      {
        id: 3,
        text: "Which testing principle states that testing can show that defects are present, but cannot prove that there are no defects?",
        options: [
          "Pesticide paradox",
          "Absence-of-errors fallacy",
          "Testing shows the presence of defects",
          "Early testing"
        ],
        correctAnswer: 2,
        explanation: "Principle 1: Testing shows the presence of defects, not their absence.",
        category: "Fundamentals of Testing"
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
        explanation: "Principle 3: Early testing states that testing activities should start as early as possible in the SDLC.",
        category: "Fundamentals of Testing"
      },
      {
        id: 5,
        text: "Which of the following is a major task of test implementation and execution?",
        options: [
          "Developing test priorities",
          "Logging the outcome of test execution",
          "Checking test logs against the exit criteria",
          "Defining the test environment"
        ],
        correctAnswer: 1,
        explanation: "Logging outcomes is a core activity during the execution phase.",
        category: "Fundamentals of Testing"
      },
      {
        id: 6,
        text: "Which of the following statements about the psychology of testing is TRUE?",
        options: [
          "Testers and developers should have the same mindset",
          "A certain degree of independence often makes the tester more effective",
          "Testers should not point out failures to developers",
          "Testing is seen as a destructive activity by all stakeholders"
        ],
        correctAnswer: 1,
        explanation: "Independence helps in finding defects that the author might have missed due to cognitive bias.",
        category: "Fundamentals of Testing"
      },
      {
        id: 7,
        text: "Exhaustive testing is impossible. This is which principle?",
        options: [
          "Principle 1",
          "Principle 2",
          "Principle 3",
          "Principle 4"
        ],
        correctAnswer: 1,
        explanation: "Principle 2 states that testing everything is not feasible except for trivial cases.",
        category: "Fundamentals of Testing"
      },
      {
        id: 8,
        text: "What is the difference between testing and debugging?",
        options: [
          "Testing finds failures; debugging identifies the cause and removes it",
          "Testing corrects the faults; debugging finds the failures",
          "Testing prevents the causes of failures; debugging removes the failures",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Testing is finding failures; debugging is finding the cause (defect) and fixing it.",
        category: "Fundamentals of Testing"
      },
      // Unit 2: Testing Throughout the S D L C (9-14)
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
        explanation: "Acceptance testing is typically done by users/customers.",
        category: "Testing Throughout the S D L C"
      },
      {
        id: 10,
        text: "Which of the following is a characteristic of iterative-incremental development?",
        options: [
          "Testing is done only at the end",
          "The system is developed in small, manageable pieces (iterations)",
          "Requirements are frozen at the start",
          "There is only one test level"
        ],
        correctAnswer: 1,
        explanation: "Incremental development involves building the product in pieces.",
        category: "Testing Throughout the S D L C"
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
        explanation: "Integration testing is about interfaces and interactions.",
        category: "Testing Throughout the S D L C"
      },
      {
        id: 12,
        text: "What is the primary reason for regression testing?",
        options: [
          "To check if the changed part works",
          "To check if unchanged parts have been affected by changes",
          "To test the system under high load",
          "To verify a bug fix"
        ],
        correctAnswer: 1,
        explanation: "Regression testing ensures no side-effects from changes.",
        category: "Testing Throughout the S D L C"
      },
      {
        id: 13,
        text: "Which of the following is a non-functional test?",
        options: [
          "Checking the login screen",
          "Checking system performance under load",
          "Checking if a button works",
          "Checking a database calculation"
        ],
        correctAnswer: 1,
        explanation: "Performance is a non-functional characteristic.",
        category: "Testing Throughout the S D L C"
      },
      {
        id: 14,
        text: "Which of the following is TRUE about the V-model?",
        options: [
          "It is an iterative model",
          "Each development phase has a corresponding testing phase",
          "Testing starts after coding is finished",
          "It is the only model that uses acceptance testing"
        ],
        correctAnswer: 1,
        explanation: "V-model maps development activities to test levels.",
        category: "Testing Throughout the S D L C"
      },
      // ... (Truncated for brevity, but I will include all 40)
      // I'll populate the rest with representative questions from the syllabus
      // Unit 3: Static Testing (15-18)
      {
        id: 15,
        text: "Which of the following is a benefit of static testing?",
        options: [
          "Finds defects early before code execution",
          "Replaces the need for dynamic testing",
          "Only useful for coding errors",
          "Requires the system to be running"
        ],
        correctAnswer: 0,
        explanation: "Static testing finds defects early, making them cheaper to fix.",
        category: "Static Testing"
      },
      {
        id: 16,
        text: "In a formal review, who is responsible for leads the meeting?",
        options: ["Author", "Moderator", "Scribe", "Manager"],
        correctAnswer: 1,
        explanation: "The Moderator leads the review process.",
        category: "Static Testing"
      },
      {
        id: 17,
        text: "Which is a type of informal review?",
        options: ["Inspection", "Technical Review", "Walkthrough", "Buddy Check"],
        correctAnswer: 3,
        explanation: "Buddy Check is informal.",
        category: "Static Testing"
      },
      {
        id: 18,
        text: "What is the main purpose of a walkthrough?",
        options: ["Find defects", "Gain consensus", "Explain work product", "Document issues"],
        correctAnswer: 2,
        explanation: "Walkthroughs are led by authors to explain their work.",
        category: "Static Testing"
      },
      // Unit 4: Test Analysis and Design (19-29)
      {
        id: 19,
        text: "Which technique uses the internal structure of software?",
        options: ["Black-box", "White-box", "Experience-based", "Ad-hoc"],
        correctAnswer: 1,
        explanation: "White-box is structural.",
        category: "Test Analysis and Design"
      },
      {
        id: 20,
        text: "Equivalence partitioning is which type of technique?",
        options: ["Black-box", "White-box", "Experience-based", "Ad-hoc"],
        correctAnswer: 0,
        explanation: "EP is black-box.",
        category: "Test Analysis and Design"
      },
      {
        id: 21,
        text: "Requirement: input 1-100. Values for 2-point BVA?",
        options: ["0, 1, 100, 101", "1, 2, 99, 100", "1, 100", "0, 50, 101"],
        correctAnswer: 0,
        explanation: "Boundary and just outside.",
        category: "Test Analysis and Design"
      },
      {
        id: 22,
        text: "Best technique for complex business rules?",
        options: ["BVA", "State Transition", "Decision Table", "Use Case"],
        correctAnswer: 2,
        explanation: "Decision tables handle multiple conditions.",
        category: "Test Analysis and Design"
      },
      {
        id: 23,
        text: "What is a state in State Transition Testing?",
        options: ["Input value", "Condition waiting for event", "Path", "Output"],
        correctAnswer: 1,
        explanation: "A state waits for an event.",
        category: "Test Analysis and Design"
      },
      {
        id: 24,
        text: "Use cases test what?",
        options: ["Algorithms", "Logic", "Business processes", "Coverage"],
        correctAnswer: 2,
        explanation: "User interactions and business logic.",
        category: "Test Analysis and Design"
      },
      {
        id: 25,
        text: "Which is experience-based?",
        options: ["Error Guessing", "Statement", "Decision", "BVA"],
        correctAnswer: 0,
        explanation: "Error guessing uses experience.",
        category: "Test Analysis and Design"
      },
      {
        id: 26,
        text: "Statement coverage measures what?",
        options: ["Lines executed", "Requirements", "Paths", "Decisions"],
        correctAnswer: 0,
        explanation: "Executable statements exercised.",
        category: "Test Analysis and Design"
      },
      {
        id: 27,
        text: "Efficient technique when time is limited?",
        options: ["Exhaustive", "Exploratory", "Formal", "Basis Path"],
        correctAnswer: 1,
        explanation: "Exploratory is rapid.",
        category: "Test Analysis and Design"
      },
      {
        id: 28,
        text: "Checklist-based testing is:",
        options: ["White-box", "Experience-based", "Random", "Static"],
        correctAnswer: 1,
        explanation: "Uses experience to build list.",
        category: "Test Analysis and Design"
      },
      {
        id: 29,
        text: "Decision coverage is stronger than statement coverage?",
        options: ["TRUE", "FALSE"],
        correctAnswer: 0,
        explanation: "Yes, 100% Decision implies 100% Statement.",
        category: "Test Analysis and Design"
      },
      // Unit 5: Managing the Test Activities (30-38)
      {
        id: 30,
        text: "Which document defines the overall approach?",
        options: ["Spec", "Plan", "Report", "Log"],
        correctAnswer: 1,
        explanation: "Test Plan defines strategy.",
        category: "Managing the Test Activities"
      },
      {
        id: 31,
        text: "Example of a project risk?",
        options: ["Crash", "Slow", "Staff leaves", "Bad UI"],
        correctAnswer: 2,
        explanation: "Project risks are about management.",
        category: "Managing the Test Activities"
      },
      {
        id: 32,
        text: "What is Product Risk?",
        options: ["Late", "User needs not met", "Over budget", "Unhappy devs"],
        correctAnswer: 1,
        explanation: "Product risk is quality-related.",
        category: "Managing the Test Activities"
      },
      {
        id: 33,
        text: "Severity in a defect report describes:",
        options: ["Order of fix", "Impact on operation", "Reproducibility", "Responsible person"],
        correctAnswer: 1,
        explanation: "Severity is technical impact.",
        category: "Managing the Test Activities"
      },
      {
        id: 34,
        text: "Who writes the test plan?",
        options: ["Dev", "Tester", "Test Manager", "PM"],
        correctAnswer: 2,
        explanation: "Test Manager's role.",
        category: "Managing the Test Activities"
      },
      {
        id: 35,
        text: "Example of entry criterion?",
        options: ["Env ready", "Bugs fixed", "Coverage 100%", "Report signed"],
        correctAnswer: 0,
        explanation: "Env readiness is an entry condition.",
        category: "Managing the Test Activities"
      },
      {
        id: 36,
        text: "Example of exit criterion?",
        options: ["Reqs defined", "Code in", "Coverage reached", "Devs finished"],
        correctAnswer: 2,
        explanation: "Coverage is an exit metric.",
        category: "Managing the Test Activities"
      },
      {
        id: 37,
        text: "Configuration management helps:",
        options: ["Execute faster", "Maintain integrity", "Find bugs", "Estimate"],
        correctAnswer: 1,
        explanation: "Ensures artifacts are tracked.",
        category: "Managing the Test Activities"
      },
      {
        id: 38,
        text: "Purpose of test summary report?",
        options: ["Log all", "Decision info", "List bugs", "Define env"],
        correctAnswer: 1,
        explanation: "Summarizes for decision makers.",
        category: "Managing the Test Activities"
      },
      // Unit 6: Test Tools (39-40)
      {
        id: 39,
        text: "Tool to automate execution?",
        options: ["Defect", "Req", "Execution", "Static"],
        correctAnswer: 2,
        explanation: "Execution tools automate running.",
        category: "Test Tools"
      },
      {
        id: 40,
        text: "Potential risk of automation?",
        options: ["Faster", "Unrealistic expectations", "Consistent", "Reduces manual"],
        correctAnswer: 1,
        explanation: "Tools aren't magic; they need maintenance.",
        category: "Test Tools"
      }
    ]
  },
  {
    id: "paper-b",
    title: "Sample Exam Set B (v4.0)",
    questions: [] // To be populated if needed
  },
  {
    id: "paper-c",
    title: "Sample Exam Set C (v4.0)",
    questions: []
  },
  {
    id: "paper-d",
    title: "Sample Exam Set D (v4.0)",
    questions: []
  }
];

// For backward compatibility while I update other files
export const questions = samplePapers[0].questions;
