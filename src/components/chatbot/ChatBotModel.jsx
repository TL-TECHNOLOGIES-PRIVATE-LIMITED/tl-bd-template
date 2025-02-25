import { useState, useEffect, useRef } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";



export const faqData = [
 
  {
    question: "Enter your question here",
    answer: "Provide the answer here.",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },
  {
    question: "Enter your question here",
    answer: "Provide the answer here.",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },
  {
    question: "Enter your question here",
    answer: "Provide the answer here.",
    keywords: ["keyword1", "keyword2", "keyword3"]
  },
];

 const calculateSimilarity = (str1, str2) => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  const intersection = new Set([...s1].filter(char => s2.includes(char)));
  const union = new Set([...s1, ...s2]);
  return intersection.size / union.size;
};

const extractKeywords = (input) => {
  const stopWords = new Set(['a', 'an', 'the', 'is', 'are', 'do', 'does', 'i', 'you']);
  return [...new Set(input.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => !stopWords.has(word) && word.length > 2))];
};

const parseMessageText = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) =>
    urlRegex.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
        {part}
      </a>
    ) : (
      part
    )
  );
};
// components/Message.js
const Message = ({ message }) => (
  <div className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
    <div className={`max-w-3/4 rounded-lg p-3 ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'}`}>
      {parseMessageText(message.text)}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center text-gray-500 mb-4">
    <div className="w-2 h-2 bg-gray-500 rounded-full mr-1 animate-bounce"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  </div>
);

// New FAQ Suggestions component
const FAQSuggestions = ({ onQuestionClick }) => {
  const suggestedQuestions = [
    "Enter your first suggested question here",
    "Enter your second suggested question here",
    "Enter your third suggested question here",
    "Enter your fourth suggested question here",
    "Enter your fifth suggested question here"
];


  return (
    <div className="space-y-2 mb-4">
      <p className="text-gray-600 font-medium mb-2">Frequently Asked Questions:</p>
      {suggestedQuestions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          className="w-full text-left p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 text-sm border border-gray-200"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ 
    id: 1, 
    text: "Hello! I'm your virtual assistant. How can I assist you today? Feel free to ask me anything or choose from the suggestions below.",
    isBot: true 
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFAQClick = async (question) => {
    setHasInteracted(true);
    setMessages(prev => [...prev, { id: messages.length + 1, text: question, isBot: false }]);
    
    const response = generateResponse(question);
    await simulateTyping(response);
    
    setMessages(prev => [...prev, { id: messages.length + 2, text: response, isBot: true }]);
  };

  const findBestMatch = (input) => {
    const inputKeywords = extractKeywords(input);
    let bestMatch = { faq: null, score: 0 };

    faqData.forEach(faq => {
      let score = 0;
      if (faq.question.toLowerCase().includes(input.toLowerCase())) score += 2;

      inputKeywords.forEach(keyword => {
        if (faq.keywords.includes(keyword)) score += 1;
        faq.keywords.forEach(faqKeyword => {
          const similarity = calculateSimilarity(keyword, faqKeyword);
          if (similarity > 0.7) score += similarity;
        });
      });

      const questionSimilarity = calculateSimilarity(input, faq.question);
      score += questionSimilarity * 2;

      if (score > bestMatch.score) bestMatch = { faq, score };
    });

    return bestMatch;
  };

  const generateResponse = (input) => {
    const greetings = ['hello', 'hi', 'hey'];
    const goodbyes = ['bye', 'goodbye', 'see you'];
    const thanks = ['thank', 'thanks'];
if (greetings.some(greeting => input.toLowerCase().includes(greeting))) return "Hello! How can I assist you today?";
if (goodbyes.some(goodbye => input.toLowerCase().includes(goodbye))) return "Goodbye! Have a great day!";
if (thanks.some(thank => input.toLowerCase().includes(thank))) return "You're welcome! Let me know if you need further assistance.";

    const match = findBestMatch(input);
    if (match.score > 1.5) return match.faq.answer;
    else if (match.score > 0.8) return `${match.faq.answer} Feel free to ask for more details!`;
    else return "I'm not sure about that. Could you rephrase? You can ask about packages, activities, or destinations.";
  };

  const simulateTyping = (response) => {
    setIsTyping(true);
    return new Promise(resolve => {
      const delay = Math.min(Math.max(response.length * 20, 1000), 3000);
      setTimeout(() => {
        setIsTyping(false);
        resolve(response);
      }, delay);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setHasInteracted(true);
    setMessages(prev => [...prev, { id: messages.length + 1, text: inputText, isBot: false }]);
    setInputText('');

    const response = generateResponse(inputText);
    await simulateTyping(response);

    setMessages(prev => [...prev, { id: messages.length + 2, text: response, isBot: true }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        aria-label="Open chat"
      >
        <IoChatbubbleEllipses className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {isOpen && (
        <div className="fixed bottom-0 md:bottom-24 right-0 w-full sm:w-[400px] h-[100dvh] md:h-[500px] transform transition-transform duration-300 ease-out z-50">
          <div className="absolute inset-0 bg-gray-200 shadow-lg rounded-t-2xl md:rounded-2xl flex flex-col overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-100 z-10"
              aria-label="Close chat"
            >
              <IoMdClose size={24} />
            </button>

            <div className="bg-blue-600 text-white px-4 py-3 flex items-center">
              <FaRobot className="mr-2 text-xl" />
              <h1 className="text-xl font-semibold">Virtual Assistant</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              {!hasInteracted && <FAQSuggestions onQuestionClick={handleFAQClick} />}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t bg-white p-4">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={isTyping}
                  className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="hidden md:inline">Send</span>
                  <IoSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black transition-opacity duration-300 z-40 sm:hidden opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatBotModal;