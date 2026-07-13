import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain Google Duplex as a case study in Artificial Intelligence.",
      answer: "",
      codeExample: `
Introduction

Google Duplex is an Artificial Intelligence (AI) system developed by Google that can make phone calls on 
behalf of users to complete real-world tasks, such as booking restaurant reservations or scheduling 
appointments. It was introduced in 2018 and became one of the most practical demonstrations of 
conversational AI.


What is Google Duplex?

Google Duplex is an AI-powered voice assistant that understands natural language and speaks like a human 
during phone conversations. It uses advanced AI techniques to interact with people naturally without 
requiring the other person to use any special software.


Example:
A user says:

"Book a table for two at 7 PM tomorrow."

Google Duplex calls the restaurant, speaks with the staff, confirms availability, and reports the result back to 
the user.


AI Technologies Used

1. Natural Language Processing (NLP)

Understands spoken language.
Interprets user requests.
Generates meaningful responses.

Example:

User: "I need a haircut on Friday afternoon."

The system understands:

Service: Haircut
Day: Friday
Preferred Time: Afternoon


2. Automatic Speech Recognition (ASR)

Converts human speech into text.
Understands different accents and speaking styles.


3. Text-to-Speech (TTS)

Converts AI-generated text into natural-sounding speech.
Includes pauses, intonation, and conversational fillers like:

"Hmm..."
"Uh..."
"Okay..."

These make conversations sound more natural.


4. Deep Learning

Google Duplex is trained using large datasets of human conversations.

It learns:

Sentence patterns
Conversation flow
Context
Common responses


5. Context Awareness

The AI remembers previous parts of the conversation.

Example:

Restaurant:
  "We don't have 7 PM."

AI:
  "Do you have anything around 7:30?"

It understands the context and adapts accordingly.


Features

Human-like conversations
Understands natural language
Handles interruptions
Responds in real time
Books appointments automatically
Maintains conversation context
Works without requiring special software for businesses


Applications

Restaurant reservations
Salon appointments
Medical appointment scheduling (where supported)
Business information inquiries
Customer service automation


Advantages

Saves users time.
Reduces manual phone calls.
Provides natural conversations.
Available through voice assistants.
Operates continuously without fatigue.

`
    },
    {
      id: 2,
      question: "2. Define Artificial Intelligence. Explain Narrow AI and General AI with examples.",
      answer: "",
      codeExample: `
Definition:

Artificial Intelligence (AI) is the branch of computer science that focuses on creating machines and software 
capable of performing tasks that normally require human intelligence. These tasks include learning, 
reasoning, problem-solving, understanding language, recognizing images, and making decisions.


Simple Definition (Exam):

Artificial Intelligence (AI) is the ability of a computer or machine to imitate human intelligence by 
learning from data, solving problems, making decisions, and performing tasks automatically.


Types of Artificial Intelligence

AI is commonly classified into two major types:

1. Narrow AI (Weak AI)

Definition

Narrow AI is an AI system designed to perform one specific task or a limited set of related tasks. It cannot 
perform tasks outside its programmed domain.

Characteristics

Designed for a specific purpose.
Cannot think or reason like a human.
Fast and accurate within its assigned task.
Most AI systems in use today are Narrow AI.

Examples

Voice assistants (e.g., Google Assistant, Apple's Siri)
Chatbots for customer support
Email spam filters
Face recognition systems
Recommendation systems (Netflix, YouTube, Amazon)
Navigation apps like Google Maps


Example Scenario

A voice assistant can answer questions, set alarms, or play music, but it cannot independently perform 
unrelated tasks like designing a building or teaching a full university course.

Advantages

High accuracy for specific tasks.
Faster than humans for repetitive work.
Widely used in industries and daily life.

Limitations

Cannot perform tasks beyond its specialization.
Lacks human-like understanding and common sense.


2. General AI (Strong AI)
Definition

General AI is a theoretical form of AI that can understand, learn, reason, and perform any intellectual task 
that a human can do.


Characteristics

Human-level intelligence.
Learns different types of tasks without needing separate programming.
Can reason, plan, and adapt to new situations.
Does not yet exist in practical, real-world form.

Examples

Currently, there are no true examples of General AI. It remains an area of research.
Fictional examples include:

HAL 9000 (from 2001: A Space Odyssey)
JARVIS (from Iron Man)


Expected Capabilities

A General AI could:

  Learn new subjects independently.
  Solve unfamiliar problems.
  Understand emotions and context.
  Perform multiple jobs such as teaching, driving, writing, and medical diagnosis.

Advantages (If Developed)

Can perform a wide variety of tasks.
Adapts to new environments.
Reduces the need for task-specific programming.

Limitations

Not yet achieved.
Raises ethical, safety, and control challenges.
Requires significant advances in AI research.


Difference Between Narrow AI and General AI

| Feature        | Narrow AI                                                    | General AI                                                             |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Intelligence   | Limited to specific tasks                                    | Human-level intelligence across many tasks                             |
| Learning       | Learns only within its domain                                | Learns and adapts across domains                                       |
| Flexibility    | Low                                                          | High                                                                   |
| Current Status | Widely available today                                       | Still theoretical and under research                                   |
| Examples       | Siri, Google Assistant, spam filters, recommendation systems | No real-world examples; fictional examples include HAL 9000 and JARVIS |

`
    },
    {
      id: 3,
      question: "3. Explain Learning in Problem Solving with its key aspects.",
      answer: "",
      codeExample: `
==========================================================
            LEARNING IN PROBLEM SOLVING (AI)
==========================================================

Definition:
-----------
Learning in Problem Solving is the process by which an Artificial Intelligence (AI)
system improves its ability to solve problems by gaining knowledge and experience
from previous attempts. Instead of solving every problem from the beginning, the
system learns from past successes and mistakes to solve future problems faster
and more accurately.

Exam Definition:
----------------
Learning in Problem Solving is the ability of an AI system to improve its
problem-solving performance by learning from experience and using acquired
knowledge to solve similar problems more efficiently.

==========================================================
KEY ASPECTS OF LEARNING IN PROBLEM SOLVING
==========================================================

1) Experience-Based Learning
----------------------------
Definition:
AI learns from previous problem-solving experiences. Past solutions help solve
similar future problems.

Example:
A chess-playing AI learns from thousands of previous games and improves its
strategy over time.

----------------------------------------------------------

2) Knowledge Acquisition
------------------------
Definition:
The system collects new facts, rules, and information while solving problems.
This knowledge is stored for future use.

Example:
A medical diagnosis system learns about new diseases and treatments as more
patient data becomes available.

----------------------------------------------------------

3) Pattern Recognition
----------------------
Definition:
AI identifies patterns or similarities in data. Recognizing patterns helps
predict solutions for new problems.

Example:
An email spam filter learns to recognize common characteristics of spam
messages.

----------------------------------------------------------

4) Generalization
-----------------
Definition:
AI applies knowledge gained from one problem to solve similar problems. This
reduces the need to learn every problem separately.

Example:
A language translation system uses grammar learned from previous sentences to
translate new ones.

----------------------------------------------------------

5) Error Correction
-------------------
Definition:
The system analyzes mistakes and modifies its approach. Learning from errors
improves future performance.

Example:
A self-driving car adjusts its driving decisions after detecting unsafe actions
during testing.

----------------------------------------------------------

6) Adaptation
-------------
Definition:
AI adapts to changes in the environment or new information. It updates its
behavior instead of following fixed rules.

Example:
A navigation app changes the suggested route when it detects traffic
congestion.

----------------------------------------------------------

7) Performance Improvement
--------------------------
Definition:
Learning helps the system become more accurate, faster, and efficient over
time. Repeated practice leads to better decision-making.

Example:
A recommendation system improves movie suggestions as it learns a user's
viewing preferences.

==========================================================
IMPORTANCE OF LEARNING IN PROBLEM SOLVING
==========================================================

• Improves decision-making.
• Reduces repeated mistakes.
• Saves time by reusing previous knowledge.
• Handles new and complex problems effectively.
• Increases the efficiency and accuracy of AI systems.

==========================================================
APPLICATIONS
==========================================================

• Robotics
• Self-driving Cars
• Medical Diagnosis
• Recommendation Systems
• Fraud Detection
• Game-Playing AI
• Virtual Assistants

==========================================================
ADVANTAGES
==========================================================

• Learns from experience.
• Improves accuracy over time.
• Adapts to new situations.
• Reduces human effort.
• Solves problems more efficiently.

==========================================================
LIMITATIONS
==========================================================

• Requires large amounts of quality data.
• Learning can be time-consuming.
• Incorrect or biased data can lead to poor decisions.
• Complex problems may require significant computing resources.



==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Learning in Problem Solving is the ability of an AI system to improve its
performance by learning from experience and using previous knowledge to solve
similar problems more efficiently.

Key Points:
• Learns from experience.
• Stores knowledge for future use.
• Recognizes patterns.
• Corrects mistakes.
• Adapts to new situations.
• Improves speed and accuracy.
      
      `
    },
    {
      id: 4,
      question: "4. Explain Inductive Learning with characteristics and examples.",
      answer: "",
      codeExample: `
==========================================================
                 INDUCTIVE LEARNING (AI)
==========================================================

Definition:
-----------
Inductive Learning is a machine learning approach in which an AI system learns
general rules or patterns from specific examples or observations. Instead of
being explicitly programmed with rules, the system studies training data and
derives rules that can be used to make predictions or decisions on new,
unseen data.

Exam Definition:
----------------
Inductive Learning is the process of learning general rules from specific
examples so that an AI system can predict or solve new problems.

==========================================================
CHARACTERISTICS OF INDUCTIVE LEARNING
==========================================================

1) Learns from Examples
-----------------------
Definition:
The system is trained using a set of examples (training data). It identifies
relationships and patterns in the data.

Example:
A spam filter learns from thousands of labeled emails marked as
"Spam" or "Not Spam."

----------------------------------------------------------

2) Generalization
-----------------
Definition:
The learned rules are applied to new, unseen data. The goal is to make
accurate predictions beyond the training examples.

Example:
A handwriting recognition system recognizes new handwritten digits after
learning from many sample images.

----------------------------------------------------------

3) Data-Driven
--------------
Definition:
Learning depends on the quality and quantity of training data. More accurate
and diverse data generally leads to better performance.

Example:
A weather prediction model improves as it is trained on more historical
weather data.

----------------------------------------------------------

4) Rule Discovery
-----------------
Definition:
The system automatically discovers patterns or rules instead of relying on
manually written instructions.

Example:

If Marks ≥ 40
    Pass
Else
    Fail

----------------------------------------------------------

5) Handles Unseen Cases
-----------------------
Definition:
The learned model can classify or predict outcomes for new inputs that were
not part of the training data.

Example:
A face recognition system identifies a person's new photograph after learning
from earlier images.

----------------------------------------------------------

6) Improves with More Data
--------------------------
Definition:
Performance generally increases as more training examples become available.
The system becomes more accurate over time.

Example:
A movie recommendation system provides better suggestions as it learns from a
user's viewing history.

==========================================================
EXAMPLES OF INDUCTIVE LEARNING
==========================================================

• Email Spam Detection
  → Learns to classify emails as Spam or Not Spam.

• Handwriting Recognition
  → Identifies handwritten letters and digits.

• Medical Diagnosis
  → Predicts diseases based on patient symptoms and records.

• Weather Forecasting
  → Predicts weather using historical data.

• Product Recommendation Systems
  → Suggests products based on customer preferences.

• Face Recognition
  → Identifies people from images.

==========================================================
ADVANTAGES
==========================================================

• Learns automatically from data.
• Reduces the need for manual programming.
• Can make predictions for new situations.
• Improves as more training data becomes available.
• Widely used in AI and Machine Learning.

==========================================================
LIMITATIONS
==========================================================

• Requires a large amount of high-quality training data.
• Performance depends on the accuracy of the data.
• Biased or incomplete data can produce incorrect predictions.
• Complex models require significant computing resources.

==========================================================
APPLICATIONS
==========================================================

• Spam Filtering
• Speech Recognition
• Image Recognition
• Face Recognition
• Medical Diagnosis
• Fraud Detection
• Recommendation Systems
• Autonomous Vehicles

==========================================================
CONCLUSION
==========================================================

Inductive Learning is a fundamental technique in Artificial Intelligence and
Machine Learning. It enables AI systems to learn general rules from specific
examples by analyzing training data. The learned knowledge is then applied to
new situations to make predictions or decisions. Because of its ability to
generalize and improve with experience, inductive learning is widely used in
real-world AI applications.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Inductive Learning is the process of learning general rules from specific
examples so that an AI system can predict or solve new problems.

Key Points:
• Learns from training data.
• Finds patterns automatically.
• Creates general rules.
• Makes predictions on new data.
• Improves with more examples.
• Widely used in Machine Learning.
      `
    },
    {
      id: 5,
      question: "5. Write short notes on: Rote Learning, Learning by Taking Advice, Learning from Examples",
      answer: "",
      codeExample: `
==========================================================
             TYPES OF LEARNING IN ARTIFICIAL INTELLIGENCE
==========================================================

1) ROTE LEARNING (Learning by Memorizing)
==========================================================

Definition:
-----------
Rote Learning is a learning method in which an AI system simply memorizes
information without understanding it. The stored information is reused whenever
the same problem appears.

Exam Definition:
----------------
Rote Learning is the process of learning by memorizing information and using
stored answers to solve the same problems again.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns by memorizing information.
• Stores answers in memory.
• Does not understand the concept.
• Gives stored answers quickly.
• Cannot solve new or different problems.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Question:
2 + 2 = ?

You memorize the answer "4".

Next time someone asks the same question, you immediately answer "4"
because you remembered it, not because you calculated it.

----------------------------------------------------------
AI Example
----------------------------------------------------------

Dictionary Database

Apple  → A Fruit
Dog    → An Animal
Car    → A Vehicle

When you search "Apple", the system simply shows the stored meaning.

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Very simple and fast.
• Easy to implement.
• Gives instant answers.
• Useful for repeated problems.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• No understanding of concepts.
• Cannot solve new problems.
• Depends completely on stored data.

==========================================================
2) LEARNING BY TAKING ADVICE
(Learning from a Teacher or Expert)
==========================================================

Definition:
-----------
Learning by Taking Advice is a learning method in which an AI system learns by
following instructions or advice given by a teacher, expert, or programmer.

Exam Definition:
----------------
Learning by Taking Advice is the process of learning from instructions or rules
provided by an expert instead of discovering them independently.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns from teachers or experts.
• Follows given instructions.
• Learns quickly.
• Does not need trial and error.
• Depends on correct advice.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Your mother tells you:

"Before crossing the road, look left and right."

You follow her advice and learn the rule.

----------------------------------------------------------
AI Example
----------------------------------------------------------

A doctor tells a Medical AI:

IF Patient has High Fever AND Cough
THEN Check for Infection

The AI remembers this advice and follows it for future patients.

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Learns quickly.
• Easy to train.
• Reduces mistakes.
• Useful when expert knowledge is available.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• Depends on expert knowledge.
• Wrong advice produces wrong results.
• Cannot learn beyond the given instructions.

==========================================================
3) LEARNING FROM EXAMPLES
(Learning by Seeing Many Examples)
==========================================================

Definition:
-----------
Learning from Examples is a learning method in which an AI system studies many
examples, finds patterns, and uses those patterns to solve new problems.

Exam Definition:
----------------
Learning from Examples is the process of learning by observing many examples
and identifying patterns to make predictions for new situations.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns from training examples.
• Finds hidden patterns.
• Can predict new cases.
• Improves with more examples.
• Requires a large amount of data.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Teacher shows:

🐶 Dog
🐶 Dog
🐶 Dog

After seeing many dogs, you recognize a new dog without anyone telling you.

----------------------------------------------------------
AI Example
----------------------------------------------------------

Email System

Training Data:
• 100 Spam Emails
• 100 Normal Emails

New Email Arrives

↓

AI compares patterns

↓

Prediction:
"This Email is Spam."

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Learns automatically.
• Finds useful patterns.
• Can solve new problems.
• Improves accuracy with more data.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• Needs many training examples.
• Training can take time.
• Incorrect data reduces accuracy.

==========================================================
COMPARISON TABLE
==========================================================

+--------------------------+----------------------------+------------------------------+
| Learning Method          | Simple Meaning             | Real-Life Example            |
+--------------------------+----------------------------+------------------------------+
| Rote Learning            | Learning by memorizing     | Remembering 2 + 2 = 4        |
| Taking Advice            | Learning from instructions | Parents teach road safety    |
| Learning from Examples   | Learning from examples     | Identifying a dog after      |
|                          |                            | seeing many dogs             |
+--------------------------+----------------------------+------------------------------+

==========================================================
TRICK TO REMEMBER (Exam)
==========================================================

Rote Learning
     ↓
Remember (Memorize) 🧠

Taking Advice
     ↓
Teacher tells you 👨‍🏫

Learning from Examples
     ↓
Learn by seeing many examples 👀

==========================================================
ONE-LINE DEFINITIONS (Very Important)
==========================================================

Rote Learning
-------------
Learning by memorizing information without understanding it.

Learning by Taking Advice
-------------------------
Learning from instructions or advice given by a teacher or expert.

Learning from Examples
----------------------
Learning by observing many examples and finding patterns to solve new
problems.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Rote Learning
• Memorizes information.
• Gives stored answers.
• No understanding.
• Cannot solve new problems.

Learning by Taking Advice
• Learns from expert instructions.
• Follows rules.
• Learns quickly.
• Depends on correct advice.

Learning from Examples
• Learns from examples.
• Finds patterns.
• Solves new similar problems.
• Improves with more data.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1.1,
      question: "1. Write a program to implement Single Player Game (Using Heuristic Function)",
      answer: "",
      codeExample: ``
    },
    {
      id: 2.2,
      question: "2. Write a program to implement DFS 8 Puzzle problem",
      answer: "",
      codeExample: `
goal = (1,2,3,4,5,6,7,8,0)

def print_grid(state):
    for i in range(0, 9, 3):
        print(state[i:i+3])
    print()


def dfs(start):
    stack = [(start, start.index(0), [])]
    visited = set([start])   # Mark start as visited

    while stack:
        state, blank, path = stack.pop()

        if state == goal:
            return path + [state]

        moves = []
        r, c = divmod(blank, 3)

        if r > 0:
            moves.append(blank - 3)   # Up
        if r < 2:
            moves.append(blank + 3)   # Down
        if c > 0:
            moves.append(blank - 1)   # Left
        if c < 2:
            moves.append(blank + 1)   # Right

        for m in moves:
            new = list(state)
            new[blank], new[m] = new[m], new[blank]
            new_state = tuple(new)

            if new_state not in visited:
                visited.add(new_state)
                stack.append((new_state, m, path + [state]))

    return None


# Example start state (1 move away from goal)
start = (1,2,3,
         4,5,6,
         7,0,8)

solution = dfs(start)

if solution:
    print("Solution Found!\\n")
    for step in solution:
        print_grid(step)
else:
    print("No solution found.")


Output: 

Solution Found!

(1, 2, 3)
(4, 5, 6)
(7, 0, 8)

(1, 2, 3)
(4, 5, 6)
(7, 8, 0)

      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>AI2 Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
