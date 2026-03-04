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
      text: "Which of the following statements describe a valid test objective?",
      options: [
        "To prove that there are no unfixed defects in the system under test",
        "To prove that there will be no failures after the implementation of the system into production",
        "To reduce the risk level of the test object and to build confidence in the quality level",
        "To verify that there are no untested combinations of inputs"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 2,
      text: "Which of the following options shows an example of test activities that contribute to success?",
      options: [
        "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
        "Testers try not to disturb the developers while coding, so that the developers write better code",
        "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
        "Certified testers will design much better test cases than non-certified testers"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 3,
      text: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
      options: [
        "Tests wear out",
        "Absence-of-defects fallacy",
        "Defects cluster together",
        "Exhaustive testing is impossible"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 4,
      text: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
      options: [
        "Estimating that testing the integration with the payment service will take 8 person-days",
        "Deciding that the team should test if it is possible to properly share payment between many users",
        "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
        "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 5,
      text: "Which of the following factors have a SIGNIFICANT influence on the test approach?",
      options: [
        "The software development lifecycle (SDLC) being used",
        "The software development lifecycle (SDLC), level of product risk, and regulatory requirements",
        "The level of product risk and regulatory requirements",
        "The software development lifecycle (SDLC), regulatory requirements, and the number of developers"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 6,
      text: "Which of the following statements BEST describes the relationship between testing and debugging?",
      options: [
        "Testing and debugging are the same activity",
        "Testing is the process of finding defects, while debugging is the process of analyzing and fixing them",
        "Debugging identifies failures, and testing fixes them",
        "Testing is only done after debugging is completed"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 7,
      text: "Which of the following is a reason why exhaustive testing is impossible?",
      options: [
        "Time and budget are unlimited",
        "All combinations of inputs and preconditions cannot be tested",
        "Developers fix defects before testing starts",
        "Testing tools cannot be used"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 8,
      text: "Which of the following is an example of a failure?",
      options: [
        "An incorrect variable declaration in the code",
        "A defect found during a code review",
        "The system crashes when a user saves a file",
        "An error made by a developer"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 9,
      text: "Which of the following BEST describes acceptance test-driven development (ATDD)?",
      options: [
        "Acceptance criteria are created using the given/when/then format",
        "Test cases are created at component level and are code-oriented",
        "Tests are created based on acceptance criteria to drive the development of the software",
        "Tests are based on desired behavior to improve understanding"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 10,
      text: "Which of the following is NOT an example of the shift-left approach?",
      options: [
        "Reviewing user requirements before acceptance",
        "Writing a component test before the corresponding code is written",
        "Executing a performance efficiency test for a component during component testing",
        "Writing a test script before setting up configuration management"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 11,
      text: "Which argument BEST supports organizing retrospectives at the end of each release cycle?",
      options: [
        "They are popular and clients like them",
        "They save money by avoiding user feedback",
        "They help identify process weaknesses for continuous improvement",
        "They promote values like courage and respect"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 12,
      text: "Which types of failures fit which test levels BEST?",
      options: [
        "1D, 2B, 3A, 4C",
        "1D, 2B, 3C, 4A",
        "1B, 2A, 3D, 4C",
        "1C, 2B, 3A, 4D"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 13,
      text: "Which statement about regression testing is CORRECT?",
      options: [
        "It confirms that defects have been fixed",
        "It checks that changes have not caused unintended side effects",
        "It is only performed after system testing",
        "It is unnecessary if no defects are found"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 14,
      text: "Which of the following BEST describes confirmation testing?",
      options: [
        "Testing to ensure defects are fixed",
        "Testing to find new defects",
        "Testing to measure system performance",
        "Testing without requirements"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 15,
      text: "Which of the following BEST describes the relationship between errors, defects, and failures?",
      options: [
        "Errors cause failures which result in defects",
        "Defects cause errors which result in failures",
        "Errors may lead to defects which may cause failures",
        "Failures cause defects which lead to errors"
      ],
      category: "Static Testing"
    },
    {
      id: 16,
      text: "Which of the following statements about static testing is CORRECT?",
      options: [
        "Static testing requires executing the code",
        "Static testing can find defects early in the lifecycle",
        "Static testing can only be performed by developers",
        "Static testing replaces dynamic testing"
      ],
      category: "Static Testing"
    },
    {
      id: 17,
      text: "Which of the following is MOST likely to be detected by static testing?",
      options: [
        "Performance bottlenecks",
        "Incorrect business logic during execution",
        "Missing requirements",
        "Runtime memory leaks"
      ],
      category: "Static Testing"
    },
    {
      id: 18,
      text: "Which of the following BEST describes the purpose of a walkthrough?",
      options: [
        "To find as many defects as possible",
        "To evaluate work products and educate participants",
        "To formally approve documents",
        "To replace inspections"
      ],
      category: "Static Testing"
    },
    {
      id: 19,
      text: "Which review role is responsible for ensuring that the review process is followed?",
      options: [
        "Author",
        "Moderator",
        "Reviewer",
        "Manager"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 20,
      text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
      options: [
        "Reduced need for documentation",
        "Earlier detection of misunderstandings",
        "Elimination of regression testing",
        "Reduced need for skilled testers"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 21,
      text: "Which test level focuses on verifying the complete, integrated system against requirements?",
      options: [
        "Component testing",
        "Component integration testing",
        "System testing",
        "Acceptance testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 22,
      text: "Which of the following BEST describes acceptance testing?",
      options: [
        "Testing performed by developers",
        "Testing to verify system behavior against business needs",
        "Testing individual components",
        "Testing interfaces between components"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 23,
      text: "Which of the following is an example of functional testing?",
      options: [
        "Usability testing",
        "Performance testing",
        "Security testing",
        "Testing a calculation according to business rules"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 24,
      text: "Which of the following BEST describes non-functional testing?",
      options: [
        "Testing system behavior under normal conditions",
        "Testing features described in requirements",
        "Testing quality characteristics such as performance and usability",
        "Testing individual code units"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 25,
      text: "Which of the following is an example of black-box testing?",
      options: [
        "Statement coverage",
        "Decision coverage",
        "Equivalence partitioning",
        "Code inspection"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 26,
      text: "Which of the following BEST describes white-box testing?",
      options: [
        "Testing based on system requirements",
        "Testing based on internal structure of the code",
        "Testing without knowing implementation",
        "Testing performed by users"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 27,
      text: "Which of the following test techniques is MOST suitable for testing boundary values?",
      options: [
        "Equivalence partitioning",
        "Decision table testing",
        "Boundary value analysis",
        "State transition testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 28,
      text: "Which of the following is an example of exploratory testing?",
      options: [
        "Executing predefined test cases",
        "Simultaneous learning, test design, and execution",
        "Testing only after documentation is complete",
        "Automated regression testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 29,
      text: "Which of the following BEST describes test automation?",
      options: [
        "Replacing all manual testing",
        "Using tools to support test activities",
        "Testing without human involvement",
        "Only executing tests automatically"
      ],
      category: "Test Analysis and Design"
    }
    // Note: The provided file had 29 questions. I will keep them for Paper A.
  ],
  "paper-b": [],
  "paper-c": [],
  "paper-d": []
};
