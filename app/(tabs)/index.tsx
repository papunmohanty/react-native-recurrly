import "@/global.css";
import { Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

/**
 * Render the app's main landing screen with navigation links to onboarding, authentication, and subscription routes.
 *
 * The component provides a safe-area wrapper and displays a heading plus links that navigate to onboarding, sign-in/sign-up, a Spotify subscription, and a dynamic subscription route for "claude".
 *
 * @returns A React element representing the app's main landing/tab screen UI
 */
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign in</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign up</Link>

            <Link href="/app/subscriptions/spotify">Spotify Subscription</Link>
            <Link
              href={{
                pathname: "/subscriptions/[id]",
                params: { id: "claude" },
              }}
            >
              Claude Max Subscription
            </Link>
        </SafeAreaView>
    );
}