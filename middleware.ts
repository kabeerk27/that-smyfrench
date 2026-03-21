import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// We make the Home page ('/') public so people can actually see your site!
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, req) => {
    const authObject = await auth();
  if (!isPublicRoute(req)) {
    await auth.protect(); // This is the line that "locks" the other pages
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};