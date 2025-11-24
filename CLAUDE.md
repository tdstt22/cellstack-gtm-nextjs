You are building a sleek and modern design landing page with clean animations for a startup called Cellstack.

<Development>
Use highest quality code as if you are an experienced senior engineer when writing. You can assume that I will always have `pnpm run dev` running on localhost:3000 when you're writing the code.

## Build Validation
ALWAYS run `pnpm run build` after making code changes to ensure:
- No TypeScript errors
- No ESLint warnings/errors
- Build completes successfully

If the build fails, fix ALL issues before considering the task complete.

## Common TypeScript/Linting Issues to Avoid

### 1. Framer Motion Type Errors
When using Framer Motion animation variants with transition types, ALWAYS use `as const` for the type property:

**CORRECT:**
```tsx
transition: {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20
}
```

**INCORRECT:**
```tsx
transition: {
  type: 'spring',  // This will cause TypeScript errors
  stiffness: 300,
  damping: 20
}
```

This applies to ALL animation variants in:
- Component files (hero-section.tsx, features.tsx, etc.)
- Page files (get-started/page.tsx, etc.)
- UI components (animated-group.tsx, etc.)

### 2. ESLint String Escaping
Always escape apostrophes in JSX text content:

**CORRECT:**
```tsx
<p>We&apos;ll be in touch</p>
```

**INCORRECT:**
```tsx
<p>We'll be in touch</p>  // ESLint error
```

### 3. Pre-Deployment Checklist
Before completing any task:
1. Run `pnpm run build`
2. Verify TypeScript compilation passes
3. Check that all pages are successfully generated
4. Fix any ESLint warnings
5. Ensure no runtime errors in dev mode
</Development>

<Design>
* AVOID using emojis when writing the contents on the landing page
* AVOID using gradients
* AVOID bad typography that would make the project look AI-generated
</Design>

<Tech>
- NextJS
- Motion
- ShadCN
- pnpm
</Tech>

<Product name>
Cellstack
</Product name>

<Product description>
Cellstack is  AI-native BI platform for GTM teams. Cellstack aims to simplify insights and analysis without the need to be a data expert. Connect your database or data source and Cellstack’s AI is able to bring insights without requiring SQL or programming knowledge. Cellstack's easy to navitage using chatbot interface. Cellstack is able to combine data from multiple data sources, generate insights, answers to query, graphs, charts, and dashboards to help you better understand the data withoout needing to know how to work with structured data.
</Product description>

<Target customers>
- Startups
- Mid Market
</Target customers>

<Theme>
Light Mode (White, Blue)
</Theme>

<Page content structure>
<NavigationBar>
Logo | Solution | Features | Explore | Join Us
</NavigationBar>
<Hero section>
Title: Instant insights for any GTM query
Sub-header: Cell stack connects to your existing tool stack and delivers real time insights – no SQL, no waiting, just answer.
CTA button (Get Started)

Leave space for Image of a product mockup
</Hero section>

<How it works section>
Step 1: Connect your data
Integrate your CRM, market, finance systems in minutes. Cell stack keeps data automatically in sync so your insights are always up to date
 
Step 2: Ask anything
Open Cellstack web app and simply type your query. Our tool understand your GTM data structure and returns accurate answers & visualizations.
 
Step 3: Share effortlessly
Turn insights into action with one click sharing to slack, email or WhatsApp message so your team stays aligned in real time.
</How it works section>

<Cellstack supports a broad range of GTM use cases>
 Pipeline & conversion analyses: Understand how deals progress, where they stall & what drives conversion
a.       “Where are deals getting stiuck in the mid funnel and why?”

2.          Territory & coverage planning: Ensure balanced coverage. Optimize quota distribution and identify whitespace.

    a. “Where do we have coverage gaps by region or segment?”

3.          Customer data analyses: Understand acquisition, activation and retention patterns to improve life cycle health

    a. “Which customer segments show the highest renewal rate? What products were sold to them previously to build customer stickiness?

4.          Channel and partner insights: Track performance, measure ROI and maximize partner-led revenue

    a. “Which partners drive highest sourced revenue? What is unique about these partners?

5.          Productivity and team efficiency: Identify what drives rep performance and optimize resource allocation
    a. “What is unique in the way our top sales rep are selling and how can we replicate that for the rest of the team?
6.          And More
    a. Cellstack delivers instant insights across every GTM workflow
    </Cellstack supports a broad range of GTM use cases>

<Join the Pilot Program>
Be among the first to experience how Cellstack transforms GTM decision-making  from manual workflows &  data chaos to instant clarity.
 
What’s included in the pilot
1. Personalized onboarding
 We’ll connect your CRM, marketing, and ops systems so Cellstack can start pulling real-time insights from your actual data.

2. Data alignment & cleanup
   Our team works with your data owners to validate and streamline your sources, ensuring your insights are accurate and consistent.

3. Live hands-on trial
   Start using Cellstack’s chat interface to ask business questions and see instant answers.

CTA Button for Apply Now
</Join the Pilot Program>

<Footer>
- Copyright
- Contact us
</Footer>
</Page content structure>
