export interface DietItem {
  time: string;
  name: string;
  items: string[];
  juices?: string[];
  tips?: string[];
}

export type GoalType = 'Gain Muscle' | 'Lose Weight' | 'Flexibility' | 'Stress Relief';
export type DietPreference = 'Vegetarian' | 'Non-Vegetarian' | 'Both';

const dietPlans: Record<GoalType, Record<DietPreference, DietItem[]>> = {
  'Gain Muscle': {
    'Vegetarian': [
      { time: 'Early Morning', name: 'Pre-Workout Energy', items: ['Soaked Almonds & Walnuts', '1 Banana'], juices: ['Beetroot and Carrot Juice'] },
      { time: 'Breakfast', name: 'High Protein Start', items: ['Paneer & Sprouts Salad', 'Tofu Scramble with Whole Grain Toast', 'Greek Yogurt'], juices: ['Spinach & Green Apple Juice'] },
      { time: 'Lunch', name: 'Complex Carbs & Protein', items: ['Brown Rice', 'Lentils (Dal)', 'Soya Chunks Curry', 'Mixed Veggie Salad'] },
      { time: 'Evening', name: 'Strength Snack', items: ['Boiled Black Chiffon', 'Peanut Butter on Apple Slices'], juices: ['Watermelon & Ginger Juice'] },
      { time: 'Dinner', name: 'Muscle Recovery', items: ['Quinoa with Roasted Vegetables', 'Bowl of Chickpea Soup', 'Glass of Warm Turmeric Milk'] }
    ],
    'Non-Vegetarian': [
      { time: 'Early Morning', name: 'Pre-Workout Energy', items: ['2 Boiled Eggs', 'Handful of Nuts'], juices: ['Orange & Carrot Juice'] },
      { time: 'Breakfast', name: 'Ultimate Protein', items: ['Egg White Omelet with Spinach', 'Grilled Chicken Breast', 'Oatmeal'], juices: ['Green Monster Juice (Kale/Spinach)'] },
      { time: 'Lunch', name: 'Fuel & Strength', items: ['Grilled Fish or Tilapia', 'Sweet Potatoes', 'Steamed Broccoli', 'Basmati Rice'] },
      { time: 'Evening', name: 'Power Snack', items: ['Tuna Salad Cup', 'Greek Yogurt with Seeds'], juices: ['Pomegranate & Mint Juice'] },
      { time: 'Dinner', name: 'Night Recovery', items: ['Grilled Salmon', 'Asparagus', 'Wild Rice', 'Casein Rich Milk'] }
    ],
    'Both': [
      { time: 'Early Morning', name: 'Pre-Workout Energy', items: ['2 Boiled Eggs', '1 Banana'], juices: ['Beetroot and Carrot Juice'] },
      { time: 'Breakfast', name: 'High Protein Start', items: ['Paneer & Sprouts Salad', 'Greek Yogurt'], juices: ['Spinach & Green Apple Juice'] },
      { time: 'Lunch', name: 'Complex Carbs & Protein', items: ['Grilled Chicken Breast', 'Brown Rice', 'Mixed Veggie Salad'] },
      { time: 'Evening', name: 'Strength Snack', items: ['Boiled Black Chiffon', 'Peanut Butter on Apple Slices'], juices: ['Watermelon & Ginger Juice'] },
      { time: 'Dinner', name: 'Muscle Recovery', items: ['Grilled Salmon', 'Quinoa with Roasted Vegetables', 'Glass of Warm Turmeric Milk'] }
    ]
  },
  'Lose Weight': {
    'Vegetarian': [
      { time: 'Early Morning', name: 'Metabolism Kick', items: ['Fenugreek Water', 'Soaked Walnuts'], juices: ['Warm Lemon & Honey Water'] },
      { time: 'Breakfast', name: 'Fiber Focus', items: ['Moong Dal Chilla', 'Oats Porridge with Low Fat Milk'], juices: ['Cucumber & Pineapple Juice'] },
      { time: 'Lunch', name: 'Light & Filling', items: ['Wheat Bran Roti', 'Bowl of Dal', 'Seasonal Vegetable', 'Large Cucumber Salad'] },
      { time: 'Evening', name: 'Antioxidant Snap', items: ['Roasted Makhana', 'Sprout Salad'], juices: ['Green Tea', 'Tomato & Celery Juice'] },
      { time: 'Dinner', name: 'Easy Digestion', items: ['Moong Dal Khichdi', 'Boiled Veggies with Herbs', 'Buttermilk'] }
    ],
    'Non-Vegetarian': [
      { time: 'Early Morning', name: 'Metabolism Kick', items: ['Cinnamon Tea', '4 Almonds'], juices: ['Aloe Vera & Lemon Juice'] },
      { time: 'Breakfast', name: 'Lean Protein', items: ['3 Egg White Omelet', 'Half an Avocado', 'Strawberries'], juices: ['Grapefruit Juice'] },
      { time: 'Lunch', name: 'Shred & Fuel', items: ['Grilled Chicken Salad', 'Sautéed Spinach', 'Clear Bone Broth Soup'] },
      { time: 'Evening', name: 'Metabolism Boost', items: ['Boiled Egg Whites', 'Walnuts'], juices: ['Apple Cider Vinegar Drink', 'Mint Juice'] },
      { time: 'Dinner', name: 'Repair & Rest', items: ['Steamed Fish with Herbs', 'Mixed Greens', 'Light Vegetable Soup'] }
    ],
    'Both': [
      { time: 'Early Morning', name: 'Metabolism Kick', items: ['Fenugreek Water', '4 Almonds'], juices: ['Warm Lemon & Honey Water'] },
      { time: 'Breakfast', name: 'Fiber Focus', items: ['3 Egg White Omelet', 'Oats Porridge with Low Fat Milk'], juices: ['Cucumber & Pineapple Juice'] },
      { time: 'Lunch', name: 'Light & Filling', items: ['Grilled Chicken Salad', 'Wheat Bran Roti', 'Bowl of Dal'] },
      { time: 'Evening', name: 'Antioxidant Snap', items: ['Roasted Makhana', 'Sprout Salad'], juices: ['Green Tea', 'Tomato & Celery Juice'] },
      { time: 'Dinner', name: 'Easy Digestion', items: ['Steamed Fish with Herbs', 'Boiled Veggies with Herbs', 'Buttermilk'] }
    ]
  },
  'Flexibility': {
    'Vegetarian': [
      { time: 'Early Morning', name: 'Joint Health', items: ['Turmeric Water', 'Soaked Flax Seeds'], juices: ['Fresh Pineapple Juice (Bromelain-rich)'] },
      { time: 'Breakfast', name: 'Hydration Start', items: ['Fruit Bowl (Papaya, Melon, Berries)', 'Chia Seed Pudding'], juices: ['Coconut Water'] },
      { time: 'Lunch', name: 'Anti-Inflammatory', items: ['Buckwheat Salad', 'Tofu & Broccoli Stir Fry', 'Spinach Raita'] },
      { time: 'Evening', name: 'Supple Snack', items: ['Avocado Toast', 'Pumpkin Seeds'], juices: ['Turmeric & Ginger Shot'] },
      { time: 'Dinner', name: 'Joint Repair', items: ['Mixed Bean Soup', 'Sweet Potato Mash', 'Herbal Chamomile Tea'] }
    ],
    'Non-Vegetarian': [
      { time: 'Early Morning', name: 'Hydration Boost', items: ['Morning Elixir (Lemon/Ginger)', 'Omega-3 rich Fish Oil'], juices: ['Cherry Juice'] },
      { time: 'Breakfast', name: 'Vitality', items: ['Poached Eggs on Spinach', 'Flax seeds in Yogurt'], juices: ['Blueberry & Spinach Smoothie'] },
      { time: 'Lunch', name: 'Mobility Fuel', items: ['Grilled Mackerel (Omega-3)', 'Kale & Quinoa Bowl', 'Bone Broth'] },
      { time: 'Evening', name: 'Recovery', items: ['Hard Boiled Egg', 'Mixed Seeds'], juices: ['Pomegranate & Beetroot Juice'] },
      { time: 'Dinner', name: 'Cellular Repair', items: ['Herb Roasted Chicken', 'Roasted Carrots & Beets', 'Magnesium-rich Tea'] }
    ],
    'Both': [
      { time: 'Early Morning', name: 'Joint Health', items: ['Turmeric Water', 'Omega-3 rich Fish Oil'], juices: ['Fresh Pineapple Juice (Bromelain-rich)'] },
      { time: 'Breakfast', name: 'Hydration Start', items: ['Poached Eggs on Spinach', 'Chia Seed Pudding'], juices: ['Coconut Water'] },
      { time: 'Lunch', name: 'Anti-Inflammatory', items: ['Grilled Mackerel (Omega-3)', 'Buckwheat Salad', 'Spinach Raita'] },
      { time: 'Evening', name: 'Supple Snack', items: ['Avocado Toast', 'Hard Boiled Egg'], juices: ['Turmeric & Ginger Shot'] },
      { time: 'Dinner', name: 'Joint Repair', items: ['Herb Roasted Chicken', 'Sweet Potato Mash', 'Herbal Chamomile Tea'] }
    ]
  },
  'Stress Relief': {
    'Vegetarian': [
      { time: 'Early Morning', name: 'Calm Start', items: ['Holy Basil (Tulsi) Tea', 'Brazil Nuts'], juices: ['Ashwagandha Tonic Water'] },
      { time: 'Breakfast', name: 'Mood Balance', items: ['Whole Grain Porridge', 'Bananas with Seeds', 'Dark Chocolate Square'], juices: ['Fresh Orange Juice'] },
      { time: 'Lunch', name: 'Grounding Meal', items: ['Millet Roti', 'Lentil Stew', 'Sweet Potato', 'Curd'] },
      { time: 'Evening', name: 'Peaceful Snack', items: ['Hummus with Veggies', 'Yogurt with Honey'], juices: ['Lavender Infused Lemonade'] },
      { time: 'Dinner', name: 'Deep Sleep', items: ['Vegetable Khichdi', 'Warm Milk with Saffron', 'Steamed Spinach'] }
    ],
    'Non-Vegetarian': [
      { time: 'Early Morning', name: 'Nerve Soothe', items: ['Warm Water with Mint', 'Cashews'], juices: ['Blueberry Juice'] },
      { time: 'Breakfast', name: 'Happy Brain', items: ['Omelet with Asparagus', 'Whole Grain Toast', 'Walnuts'], juices: ['Green Tea with Honey'] },
      { time: 'Lunch', name: 'Serotonin Boost', items: ['Turkey Sandwich on Rye', 'Avocado Salad', 'Greek Yogurt'] },
      { time: 'Evening', name: 'Relaxation', items: ['Hard Boiled Egg', 'Sunflower Seeds'], juices: ['Camomile Tea', 'Cherry Juice'] },
      { time: 'Dinner', name: 'Tranquility', items: ['Grilled Chicken with Herbs', 'Brown Rice', 'Milk with Nutmeg'] }
    ],
    'Both': [
      { time: 'Early Morning', name: 'Calm Start', items: ['Holy Basil (Tulsi) Tea', 'Brazil Nuts'], juices: ['Ashwagandha Tonic Water'] },
      { time: 'Breakfast', name: 'Mood Balance', items: ['Omelet with Asparagus', 'Whole Grain Porridge', 'Dark Chocolate Square'], juices: ['Fresh Orange Juice'] },
      { time: 'Lunch', name: 'Grounding Meal', items: ['Turkey Sandwich on Rye', 'Lentil Stew', 'Curd'] },
      { time: 'Evening', name: 'Peaceful Snack', items: ['Hummus with Veggies', 'Hard Boiled Egg'], juices: ['Lavender Infused Lemonade'] },
      { time: 'Dinner', name: 'Deep Sleep', items: ['Grilled Chicken with Herbs', 'Warm Milk with Saffron', 'Steamed Spinach'] }
    ]
  }
};

export const getDietPlan = (goal: string, preference: string): DietItem[] => {
  const normalizedGoal = (goal as GoalType) || 'Flexibility';
  const normalizedPref = (preference as DietPreference) || 'Vegetarian';
  
  return dietPlans[normalizedGoal]?.[normalizedPref] || dietPlans['Flexibility']['Vegetarian'];
};
