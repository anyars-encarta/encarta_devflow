interface SignInWithOAuthParams {
  user: { email: string; name: string; image: string, username: string };
  provider: "google" | "github";
  providerAccountId: string;
}
