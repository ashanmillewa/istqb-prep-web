export interface AnswerData {
  questionId: number;
  correctAnswer: number;
  explanation: string;
}

export const answersData: Record<string, AnswerData[]> = {
  "paper-a": [
    {
      questionId: 1,
      correctAnswer: 2,
      explanation: "Testing reduces risk and builds confidence; it cannot prove absence of defects or failures."
    },
    {
      questionId: 2,
      correctAnswer: 0,
      explanation: "Early tester involvement across the SDLC improves defect detection and overall quality."
    },
    {
      questionId: 3,
      correctAnswer: 0,
      explanation: "Unchanged tests may stop detecting defects over time, even when defects still exist."
    },
    {
      questionId: 4,
      correctAnswer: 1,
      explanation: "Test analysis focuses on deciding what should be tested."
    },
    {
      questionId: 5,
      correctAnswer: 1,
      explanation: "The SDLC, level of risk, and regulatory requirements significantly influence the test approach."
    },
    {
      questionId: 6,
      correctAnswer: 1,
      explanation: "Testing finds defects and failures; debugging is used to locate and fix the causes."
    },
    {
      questionId: 7,
      correctAnswer: 1,
      explanation: "The number of possible combinations is too large to test exhaustively."
    },
    {
      questionId: 8,
      correctAnswer: 2,
      explanation: "A failure is the observed incorrect behavior of the system during execution."
    },
    {
      questionId: 9,
      correctAnswer: 2,
      explanation: "ATDD uses acceptance criteria to create tests that guide development."
    },
    {
      questionId: 10,
      correctAnswer: 2,
      explanation: "Performance efficiency testing is not typically a shift-left activity."
    },
    {
      questionId: 11,
      correctAnswer: 2,
      explanation: "Retrospectives enable analysis of process issues and support continuous improvement."
    },
    {
      questionId: 12,
      correctAnswer: 3,
      explanation: "Different failure types align best with specific test levels based on scope."
    },
    {
      questionId: 13,
      correctAnswer: 1,
      explanation: "Regression testing ensures changes have not negatively impacted existing functionality."
    },
    {
      questionId: 14,
      correctAnswer: 0,
      explanation: "Confirmation testing verifies that a specific defect has been successfully fixed."
    },
    {
      questionId: 15,
      correctAnswer: 2,
      explanation: "Human errors can introduce defects in code, which may later cause failures during execution."
    },
    {
      questionId: 16,
      correctAnswer: 1,
      explanation: "Static testing (e.g., reviews) can identify defects without executing the code."
    },
    {
      questionId: 17,
      correctAnswer: 2,
      explanation: "Reviews can identify missing or unclear requirements early."
    },
    {
      questionId: 18,
      correctAnswer: 1,
      explanation: "Walkthroughs are informal reviews aimed at understanding and learning."
    },
    {
      questionId: 19,
      correctAnswer: 1,
      explanation: "The moderator facilitates the review and ensures adherence to the process."
    },
    {
      questionId: 20,
      correctAnswer: 1,
      explanation: "Early feedback helps uncover misunderstandings before they become costly defects."
    },
    {
      questionId: 21,
      correctAnswer: 2,
      explanation: "System testing evaluates the full system against specified requirements."
    },
    {
      questionId: 22,
      correctAnswer: 1,
      explanation: "Acceptance testing ensures the system meets user and business requirements."
    },
    {
      questionId: 23,
      correctAnswer: 3,
      explanation: "Functional testing verifies system functions against requirements."
    },
    {
      questionId: 24,
      correctAnswer: 2,
      explanation: "Non-functional testing focuses on quality attributes beyond functionality."
    },
    {
      questionId: 25,
      correctAnswer: 2,
      explanation: "Black-box techniques derive tests from requirements, not code structure."
    },
    {
      questionId: 26,
      correctAnswer: 1,
      explanation: "White-box testing uses knowledge of the internal code structure."
    },
    {
      questionId: 27,
      correctAnswer: 2,
      explanation: "Boundary value analysis focuses on values at the edges of partitions."
    },
    {
      questionId: 28,
      correctAnswer: 1,
      explanation: "Exploratory testing combines learning, design, and execution."
    },
    {
      questionId: 29,
      correctAnswer: 1,
      explanation: "Test automation supports testing activities using tools."
    },
    {
      questionId: 30,
      correctAnswer: 2,
      explanation: "Exit criteria define when testing can stop; reaching target defect density and having regression tests automated are valid exit criteria."
    },
    {
      questionId: 31,
      correctAnswer: 3,
      explanation: "Using three-point estimation (PERT), the calculated estimate rounds to 10 person-hours."
    },
    {
      questionId: 32,
      correctAnswer: 0,
      explanation: "The highest priority test case whose dependencies are satisfied should be executed first."
    },
    {
      questionId: 33,
      correctAnswer: 0,
      explanation: "Each test category aligns with the quadrant based on business vs technology focus and critique vs support."
    },
    {
      questionId: 34,
      correctAnswer: 2,
      explanation: "Performance testing and user testing are actions that reduce the likelihood or impact of the risk."
    },
    {
      questionId: 35,
      correctAnswer: 3,
      explanation: "A burndown chart visualizes completed work and remaining work over time."
    },
    {
      questionId: 36,
      correctAnswer: 2,
      explanation: "Configuration management controls versions and changes to testware."
    },
    {
      questionId: 37,
      correctAnswer: 2,
      explanation: "If developers cannot reproduce the issue, reproducibility information is insufficient."
    },
    {
      questionId: 38,
      correctAnswer: 2,
      explanation: "Data preparation tools support creating and managing test data during design and implementation."
    },
    {
      questionId: 39,
      correctAnswer: 1,
      explanation: "Automation requires ongoing maintenance; insufficient effort is a common risk."
    },
    {
      questionId: 40,
      correctAnswer: 2,
      explanation: "Automation improves the consistency of test execution by following the same steps every time."
    }
  ],
  "paper-b": [
    { questionId: 41, correctAnswer: 3, explanation: "Reviews increase the quality of requirements specifications and lead to fewer changes." },
    { questionId: 42, correctAnswer: 1, explanation: "Testing is performed as part of QC (Quality Control)." },
    { questionId: 43, correctAnswer: 3, explanation: "Using equivalence partitioning and boundary value analysis helps reduce the infinite test space." },
    { questionId: 44, correctAnswer: 0, explanation: "Test design involves working with test data requirements, test conditions, etc." },
    { questionId: 45, correctAnswer: 2, explanation: "The experience of the test team significantly impacts how testing is performed." },
    { questionId: 46, correctAnswer: 1, explanation: "Traceability between user requirements and test results provides a means of measuring coverage." },
    { questionId: 47, correctAnswer: 1, explanation: "Generic skills like domain knowledge (e.g., former pilot) help understand acceptance criteria." },
    { questionId: 48, correctAnswer: 3, explanation: "Whole-team approach generates team synergy that benefits the entire project." },
    { questionId: 49, correctAnswer: 1, explanation: "In sequential models, dynamic testing is typically restricted to later stages." },
    { questionId: 50, correctAnswer: 1, explanation: "Testers should review work products as soon as drafts are available (early testing)." },
    { questionId: 51, correctAnswer: 0, explanation: "Test-Driven Development (TDD) is a test-first approach." },
    { questionId: 52, correctAnswer: 1, explanation: "DevOps uses automated pipelines for frequent updates and releases." },
    { questionId: 53, correctAnswer: 0, explanation: "Security testing by an independent team is often part of system testing." },
    { questionId: 54, correctAnswer: 3, explanation: "Regression testing checks for side effects in unchanged code." },
    { questionId: 55, correctAnswer: 1, explanation: "Unreachable code can be found by static analysis but not by executing the code." },
    { questionId: 56, correctAnswer: 2, explanation: "Early feedback facilitates early communication of potential quality issues." },
    { questionId: 57, correctAnswer: 3, explanation: "1C (Planning selects exit criteria), 2B (Initiation gives access), 3A (Individual review identifies anomalies), 4D (Communication and analysis discusses anomalies)." },
    { questionId: 58, correctAnswer: 2, explanation: "1B (Scribe records), 2D (Review leader has overall responsibility), 3A (Facilitator ensures meeting runs well), 4C (Manager decides what to review)." },
    { questionId: 59, correctAnswer: 3, explanation: "Decision table testing (black-box) is independent of internal code structure, unlike branch testing." },
    { questionId: 60, correctAnswer: 0, explanation: "Values 19, 20, 30 cover various discount thresholds." },
    { questionId: 61, correctAnswer: 3, explanation: "3-value BVA includes values just outside, on the boundary, and just inside." },
    { questionId: 62, correctAnswer: 1, explanation: "Calculated based on the rules covered by the provided test cases." },
    { questionId: 63, correctAnswer: 2, explanation: "Sequence Add, Add, Add, Remove, Remove covers the most valid state transitions." },
    { questionId: 64, correctAnswer: 1, explanation: "Since 40% and 65% overlap significantly, at least some statements must be shared." },
    { questionId: 65, correctAnswer: 2, explanation: "X represents the number of branches exercised." },
    { questionId: 66, correctAnswer: 0, explanation: "Limited time for formal design is a prime reason for exploratory testing." },
    { questionId: 67, correctAnswer: 3, explanation: "Checklists focus on user-understandable error messages and other verifiable items." },
    { questionId: 68, correctAnswer: 1, explanation: "Given/When/Then is the scenario-oriented format." },
    { questionId: 69, correctAnswer: 3, explanation: "User registration is a different story than viewing previous orders." },
    { questionId: 70, correctAnswer: 0, explanation: "Static analysis passing is a good entry criterion for merging code." },
    { questionId: 71, correctAnswer: 1, explanation: "Calculated based on historical ratios." },
    { questionId: 72, correctAnswer: 1, explanation: "Based on dependencies and priorities provided." },
    { questionId: 73, correctAnswer: 3, explanation: "Component integration testing is technology facing and supports the team." },
    { questionId: 74, correctAnswer: 2, explanation: "1B (Response -> Performance), 2A (Preferences -> Acceptance), 3D (Flood -> Transfer), 4C (Reports -> BVA)." },
    { questionId: 75, correctAnswer: 0, explanation: "Mean time to failure is a direct measure of product quality (reliability)." },
    { questionId: 76, correctAnswer: 0, explanation: "Face-to-face is least effective for teams separated by an ocean." },
    { questionId: 77, correctAnswer: 0, explanation: "CM tools retrieve the correct environment versions for testing." },
    { questionId: 78, correctAnswer: 1, explanation: "The core issue identified was the failure to handle duplicate inputs." },
    { questionId: 79, correctAnswer: 2, explanation: "1C (DevOps tracking), 2D (Collaboration), 3B (Scalability/VMs), 4A (Static/Reviews)." },
    { questionId: 80, correctAnswer: 2, explanation: "The primary benefit of automation is reducing the manual execution time." }
  ]
};
