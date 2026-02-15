import { useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { QuestionCard } from "@/components/QuestionCard";
import { ExamTimer } from "@/components/ExamTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { questions } from "@/data/mockData";
import { ChevronLeft, ChevronRight, Flag, LayoutGrid } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Exam() {
  const [_, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isExamActive, setIsExamActive] = useState(true);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const toggleFlag = () => {
    const newFlags = new Set(flaggedQuestions);
    if (newFlags.has(currentQuestion.id)) {
      newFlags.delete(currentQuestion.id);
    } else {
      newFlags.add(currentQuestion.id);
    }
    setFlaggedQuestions(newFlags);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsExamActive(false);
    // Save results to local storage or pass via state? For now, let's use a URL query param or context
    // Ideally we'd use a proper state management, but for simplicity we'll pass via route state/mock
    
    // Calculate score
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });

    const results = {
      score,
      total: totalQuestions,
      answers,
      questions
    };
    
    localStorage.setItem('examResults', JSON.stringify(results));
    setLocation('/results');
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-24">
            <Card className="shadow-sm border-border/60">
              <CardContent className="p-4">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4" />
                    Question Navigator
                  </h3>
                  <span className="text-xs text-muted-foreground">{Object.keys(answers).length}/{totalQuestions} Answered</span>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isFlagged = flaggedQuestions.has(q.id);
                    const isCurrent = idx === currentQuestionIndex;
                    
                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`
                          h-10 w-10 rounded-md text-sm font-medium transition-all relative
                          ${isCurrent ? 'ring-2 ring-primary ring-offset-2 z-10' : ''}
                          ${isAnswered ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                          ${isFlagged ? 'ring-1 ring-orange-400' : ''}
                        `}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-background" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div> Answered
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted rounded-sm"></div> Unanswered
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div> Flagged
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="text-sm font-medium text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <ExamTimer 
                  durationSeconds={60 * 60} // 60 minutes
                  onTimeUp={handleSubmit}
                  isActive={isExamActive}
                />
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFlag}
                  className={flaggedQuestions.has(currentQuestion.id) ? "text-orange-500 border-orange-200 bg-orange-50" : ""}
                >
                  <Flag className="w-4 h-4 mr-2" />
                  {flaggedQuestions.has(currentQuestion.id) ? "Flagged" : "Flag"}
                </Button>
              </div>
            </div>

            <div className="mb-8">
              <QuestionCard
                question={currentQuestion}
                selectedOption={answers[currentQuestion.id] ?? null}
                onSelectOption={handleSelectAnswer}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <Button 
                variant="outline" 
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="w-32"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentQuestionIndex === totalQuestions - 1 ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-32" variant="default">
                      Submit Exam
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Submit Exam?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You have answered {Object.keys(answers).length} out of {totalQuestions} questions. 
                        Are you sure you want to finish the exam?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="w-32"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
            
            {/* Mobile Navigator (Visible only on small screens) */}
            <div className="mt-8 lg:hidden">
               <div className="flex overflow-x-auto gap-2 pb-2">
                 {questions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`
                        flex-shrink-0 h-8 w-8 rounded-md text-xs font-medium border
                        ${idx === currentQuestionIndex ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-background'}
                        ${answers[q.id] !== undefined ? 'bg-primary/5' : ''}
                      `}
                    >
                      {idx + 1}
                    </button>
                 ))}
               </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
