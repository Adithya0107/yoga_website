import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { WebLayout } from "../components/WebLayout";

const quickActions = [
  { icon: "🧘", label: "POSE\nHELP", message: "Can you help me with yoga poses for beginners?" },
  { icon: "🍎", label: "DIET\nPLAN", message: "What's a good diet plan for yoga practitioners?" },
  { icon: "❤️", label: "BACK\nPAIN", message: "What yoga poses can help with back pain relief?" }
];

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Intelligent AI response system
const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Greetings
  if (lowerMessage.match(/^(hi|hello|hey|good morning|good evening|namaste|sup|yo)/)) {
    return "Namaste! 🙏 Welcome back to your wellness journey! I'm here to support you with personalized yoga guidance, nutrition advice, and wellness coaching. What would you like to explore today?";
  }
  
  // Thank you
  if (lowerMessage.match(/thank|thanks|appreciate|grateful/)) {
    return "You're very welcome! 🌟 I'm always here to support your wellness journey. Keep up the great work, and feel free to ask me anything anytime!";
  }
  
  // Beginner yoga
  if (lowerMessage.match(/beginner|start|new to yoga|just starting|never done|first time/)) {
    return "Perfect timing to start your yoga journey! 🧘‍♀️\n\n**Week 1-2: Foundation Poses**\n• Mountain Pose (Tadasana) - 2 min\n• Child's Pose (Balasana) - 3 min\n• Cat-Cow (Marjaryasana-Bitilasana) - 3 min\n• Downward Dog (Adho Mukha Svanasana) - 2 min\n\n**Tips for Beginners:**\n✓ Start with 10-15 minutes daily\n✓ Use a yoga mat for stability\n✓ Don't compare yourself to others\n✓ Focus on breath, not perfection\n✓ Join beginner classes or follow videos\n\nRemember: Every expert was once a beginner. You've got this!";
  }
  
  // Specific poses - Warrior
  if (lowerMessage.match(/warrior|virabhadrasana/)) {
    return "Warrior poses are powerful! 💪\n\n**Warrior I (Virabhadrasana I):**\n1. Step right foot forward, bend knee 90°\n2. Back foot turned 45°\n3. Arms raised overhead, palms together\n4. Hold 30-60 seconds\n\n**Warrior II (Virabhadrasana II):**\n1. Same stance, arms parallel to ground\n2. Gaze over front fingertips\n3. Keep hips open to the side\n\n**Warrior III (Virabhadrasana III):**\n1. Balance on one leg\n2. Other leg extends back parallel to floor\n3. Arms forward or at sides\n\n**Benefits:** Builds strength, stamina, focus, and confidence!\n\nStart with Warrior I and II, then progress to III.";
  }
  
  // Tree Pose
  if (lowerMessage.match(/tree pose|vrksasana|balance/)) {
    return "Tree Pose is excellent for balance! 🌳\n\n**How to do Tree Pose (Vrksasana):**\n1. Stand on left leg, firmly rooted\n2. Place right foot on inner left thigh (or calf, not knee)\n3. Hands in prayer position at chest\n4. Find a focal point (drishti)\n5. Hold 30-60 seconds\n6. Switch sides\n\n**Variations:**\n• Beginner: Foot on ankle, hands on hips\n• Intermediate: Hands at heart center\n• Advanced: Arms raised overhead\n\n**Tips:**\n✓ Keep core engaged\n✓ Don't lock standing knee\n✓ Practice near a wall initially\n\nThis pose improves balance, concentration, and leg strength!";
  }
  
  // Downward Dog
  if (lowerMessage.match(/downward dog|down dog|adho mukha/)) {
    return "Downward Dog is a foundational pose! 🐕\n\n**How to do Downward Dog:**\n1. Start on hands and knees\n2. Hands shoulder-width apart\n3. Lift hips up and back\n4. Form an inverted V-shape\n5. Press heels toward floor\n6. Keep arms straight, ears between arms\n\n**Common Mistakes:**\n❌ Rounding the back\n❌ Locking elbows\n❌ Holding breath\n\n**Benefits:**\n• Stretches hamstrings, calves, shoulders\n• Strengthens arms and core\n• Energizes the body\n• Relieves stress\n\n**Modifications:**\n• Bend knees if hamstrings are tight\n• Use blocks under hands\n\nHold for 5-10 breaths!";
  }
  
  // General poses
  if (lowerMessage.match(/pose|asana|position/) && !lowerMessage.match(/warrior|tree|downward/)) {
    return "Let me share some essential yoga poses! 🧘\n\n**Foundational Poses:**\n\n1. **Mountain Pose (Tadasana)**\n   - Foundation of all standing poses\n   - Improves posture and awareness\n\n2. **Downward Dog (Adho Mukha Svanasana)**\n   - Full body stretch\n   - Energizing and strengthening\n\n3. **Child's Pose (Balasana)**\n   - Resting and restorative\n   - Gentle back stretch\n\n4. **Cat-Cow (Marjaryasana-Bitilasana)**\n   - Spine mobility\n   - Warm-up essential\n\n5. **Warrior I, II, III**\n   - Strength and balance\n   - Builds confidence\n\n6. **Tree Pose (Vrksasana)**\n   - Balance and focus\n   - Grounding\n\nWhich specific pose would you like to learn more about?";
  }
  
  // Diet and nutrition
  if (lowerMessage.match(/diet|nutrition|food|eat|meal/)) {
    return "Nutrition is key to your yoga practice! 🥗\n\n**Daily Meal Plan for Yogis:**\n\n**Morning (7-8 AM):**\n• Warm lemon water\n• Oatmeal with berries & nuts\n• Green smoothie\n\n**Mid-Morning (10 AM):**\n• Fresh fruit or handful of almonds\n\n**Lunch (12-1 PM):**\n• Quinoa bowl with vegetables\n• Lentil soup\n• Mixed green salad\n\n**Snack (4 PM):**\n• Hummus with carrots/celery\n• Herbal tea\n\n**Dinner (7-8 PM):**\n• Grilled vegetables\n• Brown rice or sweet potato\n• Light protein (tofu, chickpeas)\n\n**Foods to Emphasize:**\n✓ Fresh, organic produce\n✓ Whole grains\n✓ Nuts and seeds\n✓ Herbal teas\n\n**Avoid Before Practice:**\n✗ Heavy, fried foods\n✗ Caffeine in excess\n✗ Large meals (wait 2-3 hours)\n\nHydrate well throughout the day!";
  }
  
  // Protein
  if (lowerMessage.match(/protein|muscle|strength|build/)) {
    return "Great question about protein! 💪\n\n**Best Protein Sources for Yogis:**\n\n**Plant-Based:**\n• Lentils - 18g per cup\n• Chickpeas - 15g per cup\n• Quinoa - 8g per cup\n• Tofu - 20g per cup\n• Almonds - 6g per ounce\n• Chia seeds - 4g per 2 tbsp\n• Hemp seeds - 10g per 3 tbsp\n\n**Daily Protein Needs:**\n• Active adults: 0.8-1.2g per kg body weight\n• Athletes: 1.2-2g per kg body weight\n\n**Protein Timing:**\n✓ Post-workout within 30 minutes\n✓ Spread throughout the day\n✓ Include with each meal\n\n**Simple Protein Smoothie:**\n• 1 banana\n• 1 cup almond milk\n• 2 tbsp almond butter\n• 1 tbsp chia seeds\n• 1 scoop plant protein powder\n\nProtein supports muscle recovery and strength building!";
  }
  
  // Back pain
  if (lowerMessage.match(/back pain|lower back|spine|backache/)) {
    return "I can help relieve your back pain! 🌿\n\n**Gentle Sequence for Back Pain (15 min):**\n\n1. **Child's Pose (3 min)**\n   - Knees wide, forehead to mat\n   - Arms extended or by sides\n   - Breathe into lower back\n\n2. **Cat-Cow (2 min)**\n   - Hands under shoulders\n   - Knees under hips\n   - Flow with breath\n\n3. **Sphinx Pose (2 min)**\n   - Lie on belly, prop on forearms\n   - Gentle backbend\n\n4. **Knee-to-Chest (2 min each side)**\n   - Lie on back\n   - Hug knee to chest\n   - Rock gently side to side\n\n5. **Supine Twist (2 min each side)**\n   - Knees to one side\n   - Arms in T-position\n\n6. **Legs-Up-the-Wall (4 min)**\n   - Ultimate relaxation\n\n**Prevention Tips:**\n✓ Strengthen core muscles\n✓ Maintain good posture\n✓ Avoid prolonged sitting\n✓ Sleep on supportive mattress\n\n⚠️ If pain persists > 2 weeks, consult a doctor!";
  }
  
  // Neck and shoulder pain
  if (lowerMessage.match(/neck pain|shoulder|tension|headache/)) {
    return "Neck and shoulder tension is common! Let's release it. 💆‍♀️\n\n**Neck & Shoulder Relief Sequence:**\n\n1. **Neck Rolls (2 min)**\n   - Slow circular motions\n   - Both directions\n\n2. **Shoulder Shrugs (1 min)**\n   - Lift to ears, drop down\n   - Release tension\n\n3. **Eagle Arms (1 min each side)**\n   - Wrap arms, lift elbows\n   - Deep shoulder stretch\n\n4. **Thread the Needle (2 min each)**\n   - On hands and knees\n   - Thread arm under body\n\n5. **Puppy Pose (3 min)**\n   - Chest to floor, arms extended\n   - Shoulders melt down\n\n**Desk Stretches (Every Hour):**\n• Chin tucks - 10 reps\n• Shoulder rolls - 10 each way\n• Seated twists - 30 sec each side\n\n**Tips:**\n✓ Check phone/computer posture\n✓ Use ergonomic setup\n✓ Take breaks every hour\n✓ Apply heat for chronic tension\n\nConsistency is key to relief!";
  }
  
  // Meditation
  if (lowerMessage.match(/meditat|mindful|calm|peace|quiet mind|focus/)) {
    return "Meditation transforms your practice! 🧘‍♂️\n\n**Beginner Meditation (10 minutes):**\n\n**Preparation (2 min):**\n1. Find quiet space\n2. Sit comfortably (chair or floor)\n3. Spine straight but relaxed\n4. Hands on knees or lap\n5. Close eyes gently\n\n**Breathing Focus (5 min):**\n1. Notice natural breath\n2. Count: Inhale (1), Exhale (2)\n3. Count up to 10, then restart\n4. When mind wanders, return to count\n\n**Body Scan (2 min):**\n1. Notice sensations head to toe\n2. Release tension as you notice it\n\n**Closing (1 min):**\n1. Bring awareness back to room\n2. Wiggle fingers and toes\n3. Open eyes slowly\n\n**Different Techniques:**\n• **Breath Meditation** - Focus on breathing\n• **Mantra Meditation** - Repeat \"Om\" or chosen word\n• **Loving-Kindness** - Send compassion to self/others\n• **Body Scan** - Progressive relaxation\n\n**Best Times:**\n✓ Morning after waking\n✓ Before yoga practice\n✓ Before bed\n\nStart with 5 minutes daily, build up gradually!";
  }
  
  // Breathing
  if (lowerMessage.match(/breath|pranayama|breathing technique/)) {
    return "Pranayama (breath control) is powerful! 🌬️\n\n**Essential Breathing Techniques:**\n\n**1. Deep Belly Breathing (Beginners)**\n• Inhale through nose (4 counts)\n• Belly expands\n• Exhale through nose (6 counts)\n• Belly contracts\n• Repeat 10 times\n\n**2. Alternate Nostril (Nadi Shodhana)**\n• Close right nostril, inhale left (4)\n• Close both, hold (4)\n• Close left, exhale right (4)\n• Inhale right (4)\n• Switch sides\n• 5-10 rounds\n\n**3. Breath of Fire (Kapalabhati)**\n• Quick, forceful exhales\n• Passive inhales\n• Pumping belly\n• 20-30 breaths\n• Energizing!\n\n**4. 4-7-8 Relaxation**\n• Inhale (4 counts)\n• Hold (7 counts)\n• Exhale (8 counts)\n• Perfect for sleep!\n\n**5. Ocean Breath (Ujjayi)**\n• Slightly constrict throat\n• Creates ocean sound\n• Used during vinyasa\n\n**Benefits:**\n✓ Reduces stress & anxiety\n✓ Improves lung capacity\n✓ Balances nervous system\n✓ Increases energy\n\nPractice 5-10 minutes daily!";
  }
  
  // Flexibility
  if (lowerMessage.match(/flexib|stretch|tight|stiff/)) {
    return "Let's improve your flexibility! 🤸‍♀️\n\n**30-Day Flexibility Program:**\n\n**Week 1-2: Foundation**\n• Daily 15-minute stretching\n• Focus on major muscle groups\n• Hold each stretch 30 seconds\n\n**Week 3-4: Progression**\n• Increase to 20-25 minutes\n• Hold stretches 45-60 seconds\n• Add deeper variations\n\n**Key Stretches:**\n\n**1. Forward Fold (Hamstrings)**\n• Stand, fold from hips\n• Let head hang\n• Bend knees if needed\n\n**2. Butterfly (Hips)**\n• Sit, soles together\n• Gently press knees down\n• Fold forward\n\n**3. Pigeon Pose (Hip Flexors)**\n• Front leg bent 90°\n• Back leg extended\n• Hold 2-3 minutes each\n\n**4. Cobra/Upward Dog (Spine)**\n• Lie on belly\n• Press chest up\n• Open heart\n\n**5. Seated Twist (Spine)**\n• Sit cross-legged\n• Twist to each side\n• Breathe into stretch\n\n**Golden Rules:**\n✓ Never bounce\n✓ Breathe deeply\n✓ Stay consistent\n✓ Warm up first\n✓ Don't force it\n\n**Best Time:** After workout or warm bath\n\nFlexibility comes with patience and practice!";
  }
  
  // Stress and anxiety
  if (lowerMessage.match(/stress|anxiety|anxious|worry|nervous|overwhelm/)) {
    return "Let's manage that stress together! 🌿\n\n**Immediate Stress Relief (5 min):**\n\n**4-7-8 Breathing:**\n1. Exhale completely through mouth\n2. Close mouth, inhale nose (4)\n3. Hold breath (7)\n4. Exhale mouth (8)\n5. Repeat 4 cycles\n\n**Quick Yoga for Stress:**\n\n**Child's Pose (3 min)**\n• Safe, grounding position\n• Breathe into back\n• Release tension\n\n**Legs-Up-the-Wall (5-10 min)**\n• Instant calm\n• Reduces anxiety\n• Activates parasympathetic nervous system\n\n**Seated Forward Fold (3 min)**\n• Calms nervous system\n• Introspective\n• Let go of control\n\n**Long-Term Stress Management:**\n\n**Daily Practices:**\n✓ 10-min morning meditation\n✓ 20-min yoga flow\n✓ Evening journaling\n✓ Gratitude practice (3 things daily)\n✓ Digital detox (1 hour before bed)\n\n**Lifestyle Changes:**\n✓ Regular sleep schedule (7-8 hours)\n✓ Limit caffeine\n✓ Spend time in nature\n✓ Connect with loved ones\n✓ Set boundaries\n\n**Affirmation:**\n\"I release what I cannot control. I am calm, centered, and at peace.\"\n\nRemember: You're stronger than your stress!";
  }
  
  // Weight and fitness
  if (lowerMessage.match(/weight|lose|fat|slim|tone|fitness|cardio/)) {
    return "Yoga can absolutely support your fitness goals! 🔥\n\n**Yoga for Weight Management:**\n\n**High-Intensity Yoga Styles:**\n1. **Power Yoga** - 450 cal/hour\n2. **Vinyasa Flow** - 400 cal/hour\n3. **Ashtanga** - 350 cal/hour\n4. **Hot Yoga** - 500 cal/hour\n\n**45-Min Fat-Burning Sequence:**\n\n**Warm-up (5 min):**\n• Sun Salutations A & B - 3 rounds each\n\n**Strength (25 min):**\n• Chair Pose - 1 min\n• Warrior II - 1 min each side\n• Side Plank - 45 sec each\n• Boat Pose - 45 sec\n• Crow Pose - 30 sec\n• Repeat sequence 3x\n\n**Core (10 min):**\n• Plank variations - 5 min\n• Bicycle crunches - 2 min\n• Boat pose holds - 3 min\n\n**Cool Down (5 min):**\n• Gentle stretches\n• Savasana\n\n**Complete Fitness Plan:**\n\n**Weekly Schedule:**\n• Mon: Power Yoga (45 min)\n• Tue: Cardio (30 min) + Core\n• Wed: Vinyasa Flow (45 min)\n• Thu: Strength Training\n• Fri: Hot Yoga (60 min)\n• Sat: Active recovery walk\n• Sun: Gentle yoga/rest\n\n**Nutrition Tips:**\n✓ Calorie deficit (300-500 cal/day)\n✓ High protein (1g per lb body weight)\n✓ Stay hydrated (3L water daily)\n✓ Track meals\n✓ Meal prep Sundays\n\n**Realistic Goals:**\n• Lose 1-2 lbs per week\n• Focus on how you feel\n• Progress photos monthly\n• Celebrate non-scale victories\n\nConsistency > Perfection!";
  }
  
  // Morning routine
  if (lowerMessage.match(/morning|wake up|sunrise|routine|daily/)) {
    return "A morning routine sets the tone for your day! ☀️\n\n**Transformative Morning Routine (30 min):**\n\n**5:30 AM - Wake Up**\n• No snooze button!\n• Drink warm lemon water\n\n**5:35 AM - Mindfulness (5 min)**\n• Sit quietly\n• Set intention for the day\n• Gratitude practice\n\n**5:40 AM - Gentle Movement (5 min)**\n• Stretch in bed\n• Cat-Cow on mat\n• Wake up the body\n\n**5:45 AM - Sun Salutations (10 min)**\n• 5 rounds Sun Salutation A\n• 3 rounds Sun Salutation B\n• Build internal heat\n\n**5:55 AM - Standing Poses (7 min)**\n• Warrior I - 1 min each side\n• Warrior II - 1 min each side\n• Triangle Pose - 1 min each\n• Tree Pose - 30 sec each\n\n**6:02 AM - Meditation (5 min)**\n• Seated meditation\n• Focus on breath\n• Center yourself\n\n**6:07 AM - Savasana (3 min)**\n• Final relaxation\n• Integrate practice\n\n**Post-Practice:**\n• Shower\n• Healthy breakfast\n• Plan your day\n\n**Quick 10-Min Version:**\n1. Lemon water (1 min)\n2. Sun Salutations (5 min)\n3. Meditation (3 min)\n4. Intention setting (1 min)\n\n**Benefits:**\n✓ More energy all day\n✓ Better mood\n✓ Increased productivity\n✓ Reduced stress\n✓ Stronger discipline\n\n**Tip:** Prepare everything the night before!\n\nConsistency is the key - start tomorrow!";
  }
  
  // Sleep and evening
  if (lowerMessage.match(/evening|night|sleep|bedtime|insomnia|tired/)) {
    return "Evening yoga promotes deep, restful sleep! 🌙\n\n**Bedtime Yoga Routine (20 min):**\n\n**8:30 PM - Wind Down**\n• Dim lights\n• Put away devices\n• Gentle music\n\n**Calming Sequence:**\n\n**1. Seated Forward Fold (3 min)**\n• Calms nervous system\n• Release day's tension\n\n**2. Supine Twist (2 min each side)**\n• Gentle spinal rotation\n• Digestive support\n\n**3. Happy Baby (2 min)**\n• Lie on back\n• Hold feet\n• Rock gently\n\n**4. Legs-Up-the-Wall (5 min)**\n• Ultimate relaxation\n• Reduces leg fatigue\n• Calms mind\n\n**5. Reclined Butterfly (3 min)**\n• Opens hips\n• Heart opener\n• Restorative\n\n**6. Corpse Pose (5 min)**\n• Final relaxation\n• Body scan meditation\n\n**Sleep-Promoting Breathing:**\n**4-7-8 Technique (in bed):**\n• Inhale (4 counts)\n• Hold (7 counts)\n• Exhale (8 counts)\n• Repeat 8 cycles\n\n**Sleep Hygiene Tips:**\n✓ Same bedtime daily\n✓ Cool room (65-68°F)\n✓ No screens 1 hour before\n✓ No caffeine after 2 PM\n✓ Herbal tea (chamomile, lavender)\n✓ Journaling before bed\n\n**If You Can't Sleep:**\n• Don't force it\n• Do gentle stretches\n• Listen to sleep meditation\n• Read calming book\n\nQuality sleep = Better yoga practice!";
  }
  
  // Energy
  if (lowerMessage.match(/energy|fatigue|exhaust|lazy|sluggish/)) {
    return "Let's boost your energy naturally! ⚡\n\n**Energizing Yoga Sequence (15 min):**\n\n**1. Sun Salutations (5 min)**\n• 5-8 dynamic rounds\n• Wake up entire body\n• Build heat\n\n**2. Warrior Flow (4 min)**\n• Warrior I → II → III\n• Both sides\n• Powerful & energizing\n\n**3. Standing Backbends (2 min)**\n• Opens chest\n• Energizes heart\n• Stand tall, arch back\n\n**4. Twists (2 min)**\n• Seated or standing\n• Detoxifying\n• Energizes spine\n\n**5. Breath of Fire (2 min)**\n• Kapalabhati pranayama\n• Instant energy!\n• Quick forceful exhales\n\n**Energy-Boosting Tips:**\n\n**Nutrition:**\n✓ Complex carbs (oats, quinoa)\n✓ Protein with each meal\n✓ Hydrate (3L water daily)\n✓ Limit sugar crashes\n✓ B-vitamins (nutritional yeast)\n✓ Iron-rich foods (spinach, lentils)\n\n**Lifestyle:**\n✓ Sleep 7-8 hours\n✓ Exercise daily (even 10 min)\n✓ Sunlight exposure\n✓ Reduce screen time\n✓ Manage stress\n✓ Regular meal times\n\n**Quick Energy Hacks:**\n• Cold shower (2 min)\n• 20 jumping jacks\n• Deep breathing (5 min)\n• Peppermint tea\n• 10-min walk outside\n• Power nap (20 min max)\n\n**Avoid:**\n❌ Excess caffeine\n❌ Skipping meals\n❌ Dehydration\n❌ Sitting all day\n\nSustainable energy comes from healthy habits!";
  }
  
  // How long/often questions
  if (lowerMessage.match(/how long|how often|how much|how many|frequency|duration/)) {
    return "Great question about practice frequency! 📅\n\n**Recommended Practice Schedule:**\n\n**Beginners (0-6 months):**\n• 3-4 times per week\n• 20-30 minutes per session\n• Focus on foundations\n• Rest days important\n\n**Intermediate (6-18 months):**\n• 4-5 times per week\n• 30-45 minutes per session\n• Mix styles (vinyasa, hatha)\n• One longer practice weekly (60-90 min)\n\n**Advanced (18+ months):**\n• 5-6 times per week\n• 45-90 minutes per session\n• Daily practice possible\n• Listen to your body\n\n**Ideal Weekly Plan:**\n• Mon: Power Yoga (45 min)\n• Tue: Meditation + Gentle (30 min)\n• Wed: Vinyasa Flow (60 min)\n• Thu: Rest or gentle stretching\n• Fri: Strength-focused (45 min)\n• Sat: Long practice (90 min)\n• Sun: Restorative (30 min) or rest\n\n**Minimum for Results:**\n• At least 3x per week\n• Minimum 20 minutes\n• Consistency over intensity\n\n**Daily Practice Benefits:**\n✓ Faster progress\n✓ Better flexibility\n✓ Mental clarity\n✓ Discipline building\n\n**But Remember:**\n• Quality > Quantity\n• 10 mindful minutes > 60 distracted\n• Rest is part of practice\n• Listen to your body\n\n**Quick Daily Practice:**\n• Morning: Sun Salutations (5-10 min)\n• Evening: Stretching (5-10 min)\n\nConsistency is everything!";
  }
  
  // What to wear
  if (lowerMessage.match(/wear|clothing|outfit|pants|shirt/)) {
    return "Great question about yoga clothing! 👕\n\n**What to Wear for Yoga:**\n\n**Essential Features:**\n✓ **Breathable** - Moisture-wicking fabrics\n✓ **Stretchy** - 4-way stretch materials\n✓ **Fitted** - Not too loose (avoid tangling)\n✓ **Comfortable** - No restrictive waistbands\n\n**Recommended Clothing:**\n\n**Bottoms:**\n• Yoga leggings/pants\n• High-waisted options (stay put)\n• Shorts for hot yoga\n• Avoid: Baggy sweats, jeans\n\n**Tops:**\n• Fitted tank tops\n• Sports bras (good support)\n• Breathable T-shirts\n• Layers for cool studios\n• Avoid: Loose t-shirts (ride up in inversions)\n\n**Best Fabrics:**\n• Polyester blends\n• Nylon-spandex mix\n• Moisture-wicking materials\n• Bamboo (eco-friendly)\n\n**What NOT to Wear:**\n❌ Cotton (absorbs sweat, gets heavy)\n❌ Buttons or zippers\n❌ Jewelry (can scratch)\n❌ Shoes (barefoot is best)\n\n**For Different Styles:**\n• **Hot Yoga:** Minimal clothing, moisture-wicking\n• **Gentle/Restorative:** Comfortable, warm layers\n• **Power/Vinyasa:** Fitted, breathable\n\n**On a Budget:**\n• Start with basic leggings and sports bra\n• Old athletic wear works fine\n• Upgrade as you practice more\n\n**Pro Tip:** Test clothes at home - do a few poses to ensure they stay in place!\n\nComfort matters most!";
  }
  
  // Equipment/mat questions
  if (lowerMessage.match(/mat|equipment|props|block|strap/)) {
    return "Let's talk about yoga equipment! 🧘‍♀️\n\n**Essential Yoga Gear:**\n\n**1. Yoga Mat**\n**Must-have!**\n• Thickness: 4-6mm for most people\n• Material: TPE, PVC, or natural rubber\n• Budget: $15-30\n• Premium: $60-120\n• Look for: Good grip, cushioning\n\n**2. Yoga Blocks (2)**\n**Highly Recommended**\n• Cork or foam\n• Helps with flexibility limitations\n• Makes poses accessible\n• Cost: $10-25 for pair\n\n**3. Yoga Strap**\n**Very Helpful**\n• Extends reach in stretches\n• Improves flexibility over time\n• Cost: $8-15\n\n**4. Yoga Towel**\n**For Hot Yoga**\n• Absorbs sweat\n• Extra grip\n• Cost: $15-30\n\n**5. Bolster**\n**For Restorative Yoga**\n• Support in gentle poses\n• Meditation cushion\n• Cost: $30-60\n\n**6. Blanket**\n**Nice to Have**\n• Extra cushioning\n• Warmth in Savasana\n• Use regular blanket\n\n**Beginner Starter Kit:**\n1. Quality yoga mat ($30)\n2. Two blocks ($15)\n3. One strap ($10)\n**Total: ~$55**\n\n**Do You Need All This?**\nNo! Start with just a mat. Add props as your practice develops.\n\n**DIY Alternatives:**\n• Blocks → Thick books\n• Strap → Belt or tie\n• Bolster → Rolled blankets\n• Mat → Towel on carpet (temporary)\n\n**Caring for Your Mat:**\n✓ Wipe after each use\n✓ Deep clean weekly\n✓ Air dry completely\n✓ Store rolled, not folded\n\nInvest in quality - your mat is your practice foundation!";
  }
  
  // Default response - comprehensive
  return "That's an interesting question! 🙏\n\nAs your ZenForge AI Coach, I can help you with:\n\n**🧘 Yoga Guidance:**\n• Specific poses (Warrior, Tree, Downward Dog, etc.)\n• Beginner to advanced sequences\n• Morning and evening routines\n• Pain relief techniques (back, neck, shoulders)\n\n**🍎 Nutrition & Diet:**\n• Meal plans for yogis\n• Protein and nutrition tips\n• Pre/post practice eating\n• Healthy recipes and smoothies\n\n**🧠 Mental Wellness:**\n• Meditation techniques\n• Stress and anxiety management\n• Breathing exercises (pranayama)\n• Sleep improvement strategies\n\n**💪 Fitness & Health:**\n• Weight management programs\n• Flexibility training\n• Strength building\n• Energy boosting tips\n\n**📱 Lifestyle:**\n• Daily routines and schedules\n• Practice frequency guidance\n• Equipment recommendations\n• Clothing advice\n\nPlease ask me anything specific! For example:\n• \"How do I do Warrior pose?\"\n• \"What should I eat before yoga?\"\n• \"Help me with back pain\"\n• \"How often should I practice?\"\n• \"Morning routine for beginners\"\n\nWhat would you like to explore today?";
};

export function AICoachScreen() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I am your ZenForge AI Coach. How can I assist with your transformation today? We can discuss poses, diet, or track your goals.",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (userMessage: string) => {
    setIsLoading(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    const aiResponse = getAIResponse(userMessage);

    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date()
      }
    ]);

    setIsLoading(false);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");

    // Add user message to chat
    setMessages(prev => [
      ...prev,
      {
        role: "user",
        content: userMessage,
        timestamp: new Date()
      }
    ]);

    // Send to AI
    await sendMessage(userMessage);
  };

  const handleQuickAction = async (actionMessage: string) => {
    if (isLoading) return;

    // Add user message to chat
    setMessages(prev => [
      ...prev,
      {
        role: "user",
        content: actionMessage,
        timestamp: new Date()
      }
    ]);

    // Send to AI
    await sendMessage(actionMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  };

  return (
    <WebLayout>
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-0 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-6 bg-white">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <button 
            onClick={() => navigate("/home")}
            className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          {/* AI Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-xl font-black text-purple-600">AI Coach</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-500 font-bold uppercase tracking-wider">
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-6 overflow-y-auto space-y-6 pb-48">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            {msg.role === "assistant" && (
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            )}
            <div className={`flex-1 ${msg.role === "user" ? "flex justify-end" : ""}`}>
              <div className={`${msg.role === "assistant" ? "bg-white rounded-3xl rounded-tl-lg" : "bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl rounded-tr-lg"} p-5 shadow-md max-w-[85%]`}>
                <p className={`text-base leading-relaxed whitespace-pre-line ${msg.role === "assistant" ? "text-gray-800" : "text-white"}`}>
                  {msg.content}
                </p>
              </div>
              <span className={`text-xs text-gray-400 mt-2 inline-block px-3 ${msg.role === "user" ? "text-right" : ""}`}>
                {formatTime(msg.timestamp)}
              </span>
            </div>
            {msg.role === "user" && (
              <div className="w-10 h-10 bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg">
                👤
              </div>
            )}
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-3xl rounded-tl-lg p-5 shadow-md">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-32 left-0 right-0 px-6 pb-6 bg-gradient-to-t from-[#F5F5F7] via-[#F5F5F7] to-transparent pt-8">
        <div className="flex items-center gap-3 justify-center">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.message)}
              disabled={isLoading}
              className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 shadow-md min-w-[100px] h-20 justify-center hover:shadow-lg transition-shadow disabled:opacity-50"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wide text-center whitespace-pre-line leading-tight">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 px-6 pb-6 bg-[#F5F5F7]">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask your coach anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1 bg-white rounded-full px-6 py-4 text-base placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:opacity-50"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !message.trim()}
            className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow disabled:opacity-50"
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom navigation removed (not used) */}
      </div>
    </WebLayout>
  );
}