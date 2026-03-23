import { ChevronLeft, Star, Heart, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { StatusBar } from "../../components/StatusBar";
import { WebLayout } from "../../components/WebLayout";
import { SideMenu } from "../../components/SideMenu";

export function RateAppScreen() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

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
          <h1 className="text-2xl font-black">Rate the App</h1>
          <button 
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden p-2 ml-auto"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Rating Card */}
        <div className="px-6 pb-6 pt-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" fill="white" />
            </div>
            <h2 className="text-2xl font-black mb-3">Enjoying Yoga Flow?</h2>
            <p className="text-gray-600 mb-8">Your feedback helps us improve and inspire others</p>

            {/* Star Rating */}
            <div className="flex justify-center gap-3 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm font-bold text-purple-600 mt-2">
                {rating === 5 && "Awesome! Thank you! 🙏"}
                {rating === 4 && "Great! We appreciate it! ✨"}
                {rating === 3 && "Thanks for your feedback! 💜"}
                {rating < 3 && "We'd love to hear how we can improve"}
              </p>
            )}
          </div>
        </div>

        {/* Feedback Section */}
        {rating > 0 && (
          <div className="px-6 pb-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Tell us more (optional)</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What do you love? What could be better?"
                rows={5}
                className="w-full bg-gray-50 rounded-2xl px-5 py-4 text-base border-2 border-transparent focus:border-purple-600 outline-none resize-none"
              />
            </div>
          </div>
        )}

        {/* Quick Feedback Options */}
        {rating > 0 && rating < 5 && (
          <div className="px-6 pb-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">What can we improve?</h3>
              <div className="space-y-2">
                {[
                  'More yoga styles',
                  'Better video quality',
                  'More beginner content',
                  'Longer sessions',
                  'Music selection',
                  'App performance'
                ].map((option, index) => (
                  <label key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-2 border-gray-300 text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {rating > 0 && (
          <div className="px-6 pb-8">
            <button 
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg mb-3"
              onClick={() => {
                // Submit rating logic here
                navigate("/profile");
              }}
            >
              {rating >= 4 ? 'Submit & Rate on App Store' : 'Submit Feedback'}
            </button>
            <button 
              className="w-full text-gray-500 text-sm font-semibold"
              onClick={() => navigate("/profile")}
            >
              Maybe Later
            </button>
          </div>
        )}

        {/* Call to Action */}
        {rating === 0 && (
          <div className="px-6 pb-8">
            <div className="bg-purple-50 rounded-3xl p-6 text-center">
              <p className="text-sm text-purple-900 font-semibold">
                Rate us to help others discover their yoga journey! 🧘‍♀️
              </p>
            </div>
          </div>
        )}
      </div>
    </WebLayout>
  );
}
