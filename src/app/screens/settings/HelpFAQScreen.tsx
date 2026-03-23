import { ChevronLeft, ChevronDown, MessageCircle, Mail, Phone, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function HelpFAQScreen() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const faqs = [
    {
      question: "How do I start my first yoga session?",
      answer: "Navigate to the Styles tab, choose your experience level (Beginner, Intermediate, or Advanced), and tap the play button on any program to begin."
    },
    {
      question: "Can I track my progress over time?",
      answer: "Yes! The Progress tab shows your activity, weekly performance, consistency streak, and mastery journey. You can see detailed stats including total minutes, sessions completed, and your current level."
    },
    {
      question: "How does the AI Zen Coach work?",
      answer: "The AI Zen Coach provides personalized guidance based on your practice history, goals, and preferences. You can chat with it anytime for tips, motivation, and customized recommendations."
    },
    {
      question: "What are the different mastery levels?",
      answer: "There are 6 levels: Beginner, Dedicated (15 days), Master (30 days), Elite (60 days), Pro Flow (90 days), and Zen Master (120 days). Each level unlocks as you maintain your practice consistency."
    },
    {
      question: "How do I change my health goals?",
      answer: "Go to Settings > Health Goals to update your current weight, target weight, and weekly practice goals. You can also select focus areas like flexibility, strength, or mindfulness."
    },
    {
      question: "Can I practice offline?",
      answer: "Some content can be downloaded for offline practice. Look for the download icon on your favorite sessions to save them to your device."
    },
    {
      question: "How do I enable notifications?",
      answer: "Visit Settings > Notifications to customize your reminder preferences, including daily practice reminders, achievement alerts, and wellness tips."
    },
    {
      question: "What should I do if I miss a day?",
      answer: "Don't worry! Consistency is key, but missing a day happens. Just get back to your practice the next day. The app will help you maintain momentum and rebuild your streak."
    }
  ];

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <StatusBar  />

        {/* Header */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6 bg-white">
          <button onClick={() => navigate("/profile")} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Help & FAQ</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Contact Support */}
        <div className="px-6 pb-6 pt-6">
          <div className="bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl p-6 text-white">
            <h2 className="text-xl font-bold mb-2">Need Help?</h2>
            <p className="text-purple-100 mb-4">Our support team is here for you</p>
            <div className="grid grid-cols-3 gap-3">
              <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs font-bold">Chat</span>
              </button>
              <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-xs font-bold">Email</span>
              </button>
              <button className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center gap-2">
                <Phone className="w-6 h-6" />
                <span className="text-xs font-bold">Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-6 pb-2">
          <h2 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="px-6 pb-8 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 flex items-start justify-between gap-4 text-left"
              >
                <h3 className="font-bold flex-1">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}
