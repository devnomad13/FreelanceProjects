import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  "personal_info": {
    "name": "Rubinder Singh",
    "location": "Bathinda, Punjab, India",
    "email": "robinsandhu1857@gmail.com",
    "phone": "+91 85285 50840",
    "profiles": {
      "linkedin": "LinkedIn",
      "github": "GitHub",
      "twitter": "Twitter"
    }
  },

  "summary": "Software Engineer with 4+ years of experience across backend systems, frontend development, and security-driven architectures. Proven track record at Amazon and Ethos Life building scalable verification platforms, fraud detection pipelines, and compliance-focused solutions. Recognized for driving cost savings, compliance, and mentoring peers while delivering high-quality systems under fast-moving environments.",

  "skills": {
    "languages_frameworks": ["Java", "Spring Boot", "NestJS", "React.js", "Next.js", "Tailwind CSS"],
    "architecture_tools": ["Microservices", "Docker", "Swagger", "Optimizely (Feature Flags)", "Solution Design (HLD/LLD)"],
    "databases": ["PostgreSQL (Amazon RDS)", "TypeORM", "DynamoDB", "MongoDB"],
    "cloud_infra": ["AWS S3", "AWS SQS", "AWS SNS", "AWS Step Functions", "AWS KMS", "AWS IAM", "Airflow"],
    "security_compliance": ["GDPR", "Data Encryption", "Masked Storage", "Token-Based Auth", "Risk Mitigation"],
    "other": ["Algorithms", "Problem Solving", "Fraud Detection Pipelines", "Salesforce Integrations", "Mentorship"]
  },

  "work_experience": [
    {
      "company": "Ethos Life",
      "location": "Remote/India",
      "roles": [
        {
          "title": "Software Engineer",
          "start_date": "Feb 2024",
          "end_date": "Present",
          "highlights": [
            {
              "category": "Data Matching",
              "details": [
                "Migrated legacy user data matching logic from upstream into IDV backend service.",
                "Re-architected vendor flow so fallback vendors invoked only when required.",
                "Achieved ~70% cost savings for one vendor integration."
              ]
            },
            {
              "category": "Phone IDV",
              "details": [
                "Re-architected phone verification pipeline by moving attempt tracking, OTP throttling, and state management from frontend to backend.",
                "Enforced backend-only attempt counters and cooldown validation to prevent OTP abuse.",
                "Reduced integration cycles for new IDV flows from ~3 months to under 3 weeks."
              ]
            },
            {
              "category": "Document IDV",
              "details": [
                "Built document verification system from scratch, triggered only after primary verification failure.",
                "Backend generated inquiry IDs + session tokens for Persona iframe sessions.",
                "Implemented expiration handling: if inquiry expired (24h), backend resumed inquiry with Persona APIs and issued new session token.",
                "Reduced upstream integration effort to ~2 days due to backend persistence and APIs.",
                "Secured Persona webhooks with HMAC-SHA256 + timestamp verification."
              ]
            },
            {
              "category": "Fraud Detection",
              "details": [
                "Built fraud detection pipeline (Airflow → Salesforce).",
                "Replaced fragile categorization logic with analytics dashboards.",
                "Eliminated duplicate tickets on reruns, improved fraud categorization reliability."
              ]
            },
            {
              "category": "Security & Compliance",
              "details": [
                "Handled PII securely: encrypted fields, masked storage, ID-only API responses.",
                "Achieved compliance milestone in Q2 2025."
              ]
            },
            {
              "category": "Scale & Mentorship",
              "details": [
                "IDV backend processed 4K+ verification requests daily with ~2–3% monthly traffic growth.",
                "Mentored junior engineer who became co-owner of Phone IDV ERDs in 8 months."
              ]
            }
          ],
          "note": "Initially joined via Thinkify Labs (contract) in Feb 2024; converted to full-time in Sep 2024."
        }
      ]
    },
    {
      "company": "Amazon",
      "location": "Gurgaon, India",
      "roles": [
        {
          "title": "SDE-1",
          "start_date": "Aug 2021",
          "end_date": "Aug 2023",
          "highlights": [
            "Enhanced financial data tracking by adding currency-based metrics across 10K+ daily invoices.",
            "Reduced financial reporting turnaround from days to minutes.",
            "Automated invoice routing → reduced effort from 1 week to <0.5 day.",
            "Led GDPR compliance program for 4 backend services (audits, deletion workflows, privacy measures).",
            "Migrated credential manager tool to AWS → mitigated 25 critical risks and built roadmap for 50+ more.",
            "Mentored intern, resulting in full-time conversion.",
            "Recognized in Amazon Finance Org Q2 2022 for risk mitigation impact."
          ]
        },
        {
          "title": "SDE Intern",
          "start_date": "Jan 2021",
          "end_date": "Jul 2021",
          "highlights": [
            "Built virus scanning pipeline for S3 backlog files using AWS Lambda.",
            "Integrated scanning into vendor portals (Backbone.js, Ajax, Ruby on Rails, AngularJS)."
          ]
        }
      ]
    }
  ],

  "projects": [
    "Next.js e-commerce site with Stripe + Sanity CMS.",
    "Next.js pharmaceutical product catalog with filters/search, deployed on Vercel."
  ],

  "achievements": [
    "Amazon Finance Org recognition for risk mitigation (Q2 2022).",
    "Cleared NDA, recommended for SSB.",
    "100% college fee waiver for >95% in 12th Standard."
  ],

  "education": {
    "degree": "B.E. – Computer Science",
    "institute": "Thapar Institute of Engineering and Technology, Patiala",
    "dates": "Aug 2017 – Apr 2021"
  }
};