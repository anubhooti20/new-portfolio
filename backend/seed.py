"""Run once: python seed.py"""
from database import engine, SessionLocal, Base
import models

Base.metadata.create_all(bind=engine)
db = SessionLocal()

if db.query(models.HeroStat).count() > 0:
    print("DB already seeded. Exiting.")
    db.close()
    exit()

# ── Hero Stats ───────────────────────────────────────────────────────────────
db.add_all([
    models.HeroStat(label="Currently building",
                    value_text="Event-driven microservices\nat CreateBytes",
                    order=1),
    models.HeroStat(label="Cameras in production",
                    value_big="100+",
                    order=2),
    models.HeroStat(label="Payment consistency",
                    value_text="99.9% across Stripe\n& Razorpay integrations",
                    order=3),
])

# ── About Paragraphs ─────────────────────────────────────────────────────────
db.add_all([
    models.AboutParagraph(
        content="<strong>I'm Anubhooti Nagar</strong> — a Python backend developer who cares about the difference between code that runs and code that lasts. I got into programming in college, fell in love with how Django turned messy ideas into production systems, and never really stopped.",
        order=1),
    models.AboutParagraph(
        content="My specialty is the parts of the stack most people don't see: REST API design, async pipelines, database query tuning, and the migrations that don't break at 2am. For over a year I've been owning Django + DRF systems end-to-end at <strong>CreateBytes</strong> — from serializer-level validation, through Celery + Redis task queues, all the way to Dockerized CI/CD and structured production logging. <strong>I care about the 10% that separates good software from great software.</strong>",
        order=2),
    models.AboutParagraph(
        content="At CreateBytes I drove a migration from monolithic components to fault-tolerant event-driven microservices that cut downtime by <strong>40%</strong>, set up Celery async queues that reduced execution latency by <strong>35%</strong>, and automated CI/CD pipelines reducing manual deployment effort by <strong>60%</strong>. I've shipped Yugyog.ai — a multi-tenant CCTV analytics platform supporting <strong>100+ cameras in production</strong> — and Spolto, a sports coaching backend with Razorpay billing maintaining <strong>99.9% payment consistency</strong>.",
        order=3),
    models.AboutParagraph(
        content="Before backend, I spent a summer at <strong>Celebal Technologies</strong> doing data science — EDA, feature engineering, model tuning with Scikit-learn — which left me with a healthy respect for clean data and a habit of profiling everything before optimizing. I graduated with a B.Tech (Honours) in Computer Science from Rajasthan Technical University in 2025.",
        order=4),
    models.AboutParagraph(
        content="I believe in code reviews that teach, documentation that actually gets read, and tests that catch real bugs — not just inflate coverage numbers. Good software is <em>invisible</em> to its users. My job is to keep the seams hidden. I'm <strong>open to remote roles</strong> — product or service-based — where I can keep shipping reliable systems and learn from engineers who take the craft seriously.",
        order=5),
])

# ── Experience ────────────────────────────────────────────────────────────────
db.add_all([
    models.Experience(
        role="Software Developer",
        company="CreateBytes",
        location="Gurugram, IN",
        type="current",
        dates="Feb 2025 – Present",
        bullets=[
            "Built and optimized <strong>Django + DRF REST APIs</strong> with serializers, viewsets, custom middleware, and Redis caching. Maintained high test coverage with pytest — improving p95 response times by <strong>30%</strong>.",
            "Drove migration from monolithic components to <strong>fault-tolerant, event-driven microservices</strong> with RBAC, reducing system downtime by <strong>40%</strong> and enabling independent service scaling.",
            "Set up <strong>Celery + Redis async task queues</strong> with retry logic for background jobs — cutting execution latency by <strong>35%</strong> under concurrent load.",
            "Automated <strong>CI/CD pipelines</strong> with Docker, environment-based configuration, structured logging, and health checks — reducing manual deployment effort by <strong>60%</strong>.",
        ],
        pills=["Django", "DRF", "Celery", "Redis", "Docker", "PostgreSQL", "CI/CD"],
        order=1),
    models.Experience(
        role="Data Science Intern",
        company="Celebal Technologies",
        location="Jaipur, IN",
        type="internship",
        dates="May 2024 – Aug 2024",
        bullets=[
            "Executed <strong>exploratory data analysis</strong> and feature engineering on structured datasets using Python, Pandas, and SQL — improving model readiness by <strong>25%</strong> and reducing preprocessing time by <strong>20%</strong>.",
            "Optimized classification models via <strong>Scikit-learn</strong> through cross-validation and hyperparameter tuning — achieving a <strong>10% improvement</strong> in prediction performance over baseline.",
        ],
        pills=["Python", "Pandas", "Scikit-learn", "SQL", "EDA"],
        order=2),
    models.Experience(
        role="B.Tech, Computer Science & Engineering (Honours)",
        company="Rajasthan Technical University",
        location="Jaipur",
        type="education",
        dates="Jun 2021 – May 2025",
        bullets=[
            "Core CS coursework in <strong>Data Structures & Algorithms</strong>, OOP, Operating Systems, and Database Management.",
            "Built backend-heavy capstone projects during the program — laying the foundation for systems-thinking.",
        ],
        pills=None,
        order=3),
])

# ── Skills ────────────────────────────────────────────────────────────────────
skill_data = {
    "Languages & Core CS":      ["Python", "Java", "SQL", "DSA", "OOP"],
    "Frameworks & APIs":        ["Django", "DRF", "FastAPI", "REST API design", "JWT Auth"],
    "Async & Messaging":        ["Celery", "Redis", "RabbitMQ", "WebSockets", "GCP Pub/Sub", "Background Jobs"],
    "Databases & Optimization": ["PostgreSQL", "MySQL", "Query Optimization", "ORM Tuning"],
    "Cloud & Infra":            ["AWS (SNS/SES/S3)", "GCP", "Azure", "Docker", "CI/CD", "Linux", "Git"],
    "Testing & Integrations":   ["Pytest", "Stripe", "Razorpay", "Twilio", "spaCy", "Pandas", "Scikit-learn"],
}
order = 1
for category, names in skill_data.items():
    for name in names:
        db.add(models.Skill(category=category, name=name, order=order))
        order += 1

# ── Skill Visuals ─────────────────────────────────────────────────────────────
skv = [
    ("Py", "Python",           "Language"),
    ("Dj", "Django",           "Framework"),
    ("◉",  "DRF",              "API"),
    ("⚡", "Celery",           "Async"),
    ("R",  "Redis",            "Cache & Broker"),
    ("MQ", "RabbitMQ",         "Messaging"),
    ("PG", "PostgreSQL",       "Database"),
    ("Dk", "Docker",           "Container"),
    ("☁",  "AWS / GCP",        "Cloud"),
    ("⚙",  "CI/CD",            "DevOps"),
    ("$",  "Stripe / Razorpay","Payments"),
    ("✓",  "Pytest",           "Testing"),
]
for i, (icon, name, label) in enumerate(skv, 1):
    db.add(models.SkillVisual(icon=icon, name=name, label=label, order=i))

# ── Marquee ───────────────────────────────────────────────────────────────────
marquee_items = [
    "Python", "Django", "DRF", "FastAPI", "Celery", "Redis", "RabbitMQ",
    "PostgreSQL", "MySQL", "Docker", "AWS", "GCP", "WebSockets", "Stripe",
    "Razorpay", "Open to remote",
]
for i, text in enumerate(marquee_items, 1):
    db.add(models.MarqueeItem(text=text, order=i))

# ── Projects ──────────────────────────────────────────────────────────────────
db.add_all([
    models.Project(
        name="Yugyog.ai",
        badge="AI Surveillance",
        description="Multi-tenant CCTV analytics platform with real-time event distribution and NLP-based video search.",
        features=[
            "Multi-tenant backend with <strong>JWT auth, RBAC, rate limiting</strong> — supporting <strong>100+ cameras</strong> in production.",
            "Real-time dashboard over <strong>WebSockets + GCP Pub/Sub</strong>, with RabbitMQ fanout — cut incident detection time by <strong>60%</strong>.",
            "HLS video streaming with <strong>GCP presigned URLs</strong>, thousands of events/day with load-tested throughput.",
            "<strong>spaCy</strong>-powered NLP video search — cut manual review effort by <strong>70%</strong>.",
            "Stripe billing with idempotent webhook validation — <strong>99.9% payment consistency</strong>.",
        ],
        tags=["Django", "DRF", "PostgreSQL", "Celery", "Redis", "RabbitMQ", "WebSockets", "GCP", "Stripe"],
        order=1),
    models.Project(
        name="Spolto",
        badge="Sports & Coaching",
        description="Sports coaching, subscriptions and CMS workflows — built for high-volume secure auth and payments.",
        features=[
            "Django backend with <strong>custom middleware, Redis caching, composite indexing</strong> and ORM tuning — improved API response time by <strong>200ms</strong>.",
            "<strong>OTP-based auth</strong> via Twilio + AWS SNS, with JWT issuance, refresh handling and rate limiting on auth endpoints.",
            "<strong>Razorpay integration</strong> with idempotent webhook verification — <strong>99.9% payment consistency</strong> across subscription workflows.",
        ],
        tags=["Django", "DRF", "PostgreSQL", "Redis", "Razorpay", "AWS", "Twilio", "Docker"],
        order=2),
    models.Project(
        name="Loan Prediction Model",
        badge="Data Science",
        description="Classification pipeline for predicting loan approvals based on applicant features.",
        features=[
            "Analyzed <strong>10K+ records</strong> via EDA and feature engineering to identify key approval drivers.",
            "Trained and evaluated classification models — improved baseline prediction accuracy with cross-validation and tuning.",
        ],
        tags=["Python", "Pandas", "Scikit-learn", "SQL", "EDA"],
        order=3),
])

db.commit()
db.close()
print("Seeded successfully.")
