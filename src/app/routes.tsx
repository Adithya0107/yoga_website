import { createBrowserRouter } from "react-router";
import { SplashScreen } from "./screens/SplashScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { PersonalizedScreen } from "./screens/PersonalizedScreen";
import { CreateAccountScreen } from "./screens/CreateAccountScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen";
import { ForgotPasswordSuccessScreen } from "./screens/ForgotPasswordSuccessScreen";
import { GoalScreen } from "./screens/onboarding/GoalScreen";
import { GenderScreen } from "./screens/onboarding/GenderScreen";
import { AgeScreen } from "./screens/onboarding/AgeScreen";
import { HeightScreen } from "./screens/onboarding/HeightScreen";
import { WeightScreen } from "./screens/onboarding/WeightScreen";
import { ExperienceScreen } from "./screens/onboarding/ExperienceScreen";
import { FocusScreen } from "./screens/onboarding/FocusScreen";
import { ActivityScreen } from "./screens/onboarding/ActivityScreen";
import { FrequencyScreen } from "./screens/onboarding/FrequencyScreen";
import { CreatingPlanScreen } from "./screens/onboarding/CreatingPlanScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { StylesScreen } from "./screens/StylesScreen";
import { FeaturedScreen } from "./screens/FeaturedScreen";
import { AICoachScreen } from "./screens/AICoachScreen";
import { ProgressScreen } from "./screens/ProgressScreen";
import { ProgressDetailScreen } from "./screens/ProgressDetailScreen";
import { ConsistencyScreen } from "./screens/ConsistencyScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { VideoPlayerScreen } from "./screens/VideoPlayerScreen";
import { VideoSessionScreen } from "./screens/VideoSessionScreen";
import { EditProfileScreen } from "./screens/settings/EditProfileScreen";
import { HealthGoalsScreen } from "./screens/settings/HealthGoalsScreen";
import { ProfileDetailsScreen } from "./screens/settings/ProfileDetailsScreen";
import { NotificationsScreen } from "./screens/settings/NotificationsScreen";
import { AppearanceScreen } from "./screens/settings/AppearanceScreen";
import { SoundsHapticsScreen } from "./screens/settings/SoundsHapticsScreen";
import { SecurityScreen } from "./screens/settings/SecurityScreen";
import { DataManagementScreen } from "./screens/settings/DataManagementScreen";
import { HelpFAQScreen } from "./screens/settings/HelpFAQScreen";
import { RateAppScreen } from "./screens/settings/RateAppScreen";
import { AboutScreen } from "./screens/settings/AboutScreen";
import { DeleteAccountScreen } from "./screens/settings/DeleteAccountScreen";
import { ErrorScreen } from "./screens/ErrorScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/welcome",
    Component: WelcomeScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/personalized",
    Component: PersonalizedScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/create-account",
    Component: CreateAccountScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/sign-in",
    Component: SignInScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/forgot-password-success",
    Component: ForgotPasswordSuccessScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/goal",
    Component: GoalScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/gender",
    Component: GenderScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/age",
    Component: AgeScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/height",
    Component: HeightScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/weight",
    Component: WeightScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/experience",
    Component: ExperienceScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/focus",
    Component: FocusScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/activity",
    Component: ActivityScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/frequency",
    Component: FrequencyScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/onboarding/creating-plan",
    Component: CreatingPlanScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/home",
    Component: HomeScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/styles",
    Component: StylesScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/video-player",
    Component: VideoPlayerScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/video-session/:sessionId",
    Component: VideoSessionScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/video-session",
    Component: VideoSessionScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/featured",
    Component: FeaturedScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/ai-coach",
    Component: AICoachScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/progress",
    Component: ProgressScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/progress-detail",
    Component: ProgressDetailScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/consistency",
    Component: ConsistencyScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/edit-profile",
    Component: EditProfileScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/health-goals",
    Component: HealthGoalsScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/profile-details",
    Component: ProfileDetailsScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/notifications",
    Component: NotificationsScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/appearance",
    Component: AppearanceScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/sounds-haptics",
    Component: SoundsHapticsScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/security",
    Component: SecurityScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/data-management",
    Component: DataManagementScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/delete-account",
    Component: DeleteAccountScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/help-faq",
    Component: HelpFAQScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/rate-app",
    Component: RateAppScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/settings/about",
    Component: AboutScreen,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/hybridaction/*",
    Component: () => null,
  },
  {
    path: "*",
    Component: NotFoundScreen,
    errorElement: <ErrorScreen />,
  },
]);