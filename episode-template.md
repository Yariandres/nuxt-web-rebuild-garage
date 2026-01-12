Below is a **high-converting Episodes page template** you can reuse for every YouTube video. It’s built to feel like a **garage work order + teardown report**, while constantly routing the right visitor to **Book a Rapid Diagnosis** (without feeling salesy).

You can copy this 1:1 into a CMS (Markdown/Notion/Webflow) and replace the placeholders.

---

## Episodes Page Template (Conversion-first)

### URL

`/episodes/{episode-slug}`
Example: `/episodes/slow-woocommerce-checkout-teardown`

### Primary goal

**Get bookings from people who recognize the same symptom.**
Secondary goal: build trust + binge watch other episodes.

---

# 1) Above the fold (Hero + Embed + CTA)

**H1:**
**Episode #{XX}: {Short punchy title}**
Example: *“The checkout that was silently killing revenue”*

**Subhead (1–2 lines):**
A real teardown of a {WordPress/WooCommerce | JS web app} issue: **{core symptom}** → **{root cause}** → **{measured result}**.

**Primary CTA button:**
**Book a Rapid Diagnosis**
*(prefill tags: `issue={issue-type}` `stack={stack}` `source=episode`)*

**Secondary CTA:**
**If your site has this symptom → skip to the Fix Plan** (anchors to section #8)

**Video embed** (YouTube)

**Right-side “Work Order” card (sticky on desktop):**

* **Vehicle:** {WooCommerce store | Nuxt app | React app}
* **Complaint:** {slow checkout, errors, etc.}
* **Severity:** {Revenue leak | UX pain | Stability risk}
* **Time to diagnose:** typically {X} mins
* **Crew:** {You} + {Yanus (DevOps)}
* **Status:** ✅ Teardown complete

**Micro trust line under CTA:**
No generic audit PDF. You leave with a clear Fix Plan and next steps.

---

# 2) “Do you have the same symptom?” (fast self-identification)

**Title:** **If this sounds like you, you’re in the right episode.**
**Checklist:**

* ☐ Checkout loads in **{X}+ seconds**
* ☐ Cart abandonment suddenly jumped
* ☐ Admin is slow / orders lag
* ☐ Random payment / shipping weirdness
* ☐ Performance tanks during traffic spikes

**Inline CTA (small):**
**Yes — I have this. Book Rapid Diagnosis →**

---

# 3) The quick story (hook + context)

**Title:** **The situation**
**Copy (short, story-like):**
A client came in with {context}. The symptom looked like {surface issue}, but the real damage was {business impact}. We treated it like a rebuild: baseline first, teardown second, only then fixes.

**Optional “Permission / anonymized” note:**
Some details are anonymized. The process and results are real.

---

# 4) Baseline metrics (before)

**Title:** **Baseline (Before)**
Show numbers like a rebuild channel shows damage.

**Metric grid:**

* Checkout load time: **{X}s**
* LCP / INP / CLS: **{values}**
* Error rate: **{X}%**
* Abandonment trend: **{up/down}**
* Server response / TTFB: **{X}ms**

**Tiny line:**
We don’t guess. We measure first.

---

# 5) Teardown notes (what we checked)

**Title:** **Teardown: what we checked first**
**Bullets (choose 6–10 max):**

* Reproduced the issue on {device/browser}
* Waterfall analysis (what blocks checkout)
* Third-party scripts impact (payment, analytics, chat)
* Plugin/theme conflict checks
* Database query hotspots (slow queries, autoload bloat)
* Cache layers + exclusions
* Woo hooks / custom code on checkout
* Infrastructure signals (CPU, memory, IO, timeouts) *(Yanus if needed)*

**Optional “Tools used” dropdown:**
Query Monitor, Lighthouse, WebPageTest, New Relic, server logs, etc.

---

# 6) Root cause (the reveal)

**Title:** **Root cause**
**Short, very clear explanation:**
The checkout was slow because **{root cause in plain English}**.

**“Under the hood” detail (for technical readers):**

* {technical detail 1}
* {technical detail 2}
* {technical detail 3}

**1-line takeaway:**
If you fix *only* {surface symptom}, it comes back. Fix the cause.

---

# 7) The Fix Plan (what we did, in order)

**Title:** **Fix Plan (the order matters)**
Make this feel like a confident sprint plan.

**Step list:**

1. **Stop the bleeding:** {fastest win}
2. **Remove bottleneck:** {core fix}
3. **Harden for future:** {monitoring, rollback, caching, cleanup}
4. **Test drive:** {load tests, real checkout, monitoring}

**CTA right under it:**
Want this exact Fix Plan for *your* site? **Book Rapid Diagnosis →**

---

# 8) What changed (changelog style)

**Title:** **What we changed (Changelog)**
Keep it transparent. People LOVE this.

* ✅ {Change 1} — why it mattered
* ✅ {Change 2} — why it mattered
* ✅ {Change 3} — why it mattered
* ✅ {Change 4} — why it mattered

**Optional “Parts replaced” visual:**

* “Removed: {plugin/script}”
* “Replaced: {approach/tool}”
* “Tuned: {DB/caching/assets}”

---

# 9) Results (after)

**Title:** **Results (After)**
**Metric grid:**

* Checkout load time: **{X}s → {Y}s**
* LCP / INP: **improved**
* Error rate: **{down}**
* Abandonment: **{trend}**
* Stability: **{notes}**

**Short punchy line:**
This is what a real fix looks like: measured, repeatable, and stable.

**Testimonial block (if you have it):**

> “{1–2 sentence quote}” — {Role, industry}

---

# 10) If you’re experiencing this, do this next (conversion section)

**Title:** **If your checkout is slow, here’s the next move**
**Copy:**
Don’t start reinstalling plugins or switching themes blind. The fastest path is a teardown that identifies the bottleneck in one session.

**Buttons:**

* **Book Rapid Diagnosis (Checkout Rescue)**
* **Or watch 3 similar episodes →** (links)

**Mini FAQ (2–3 questions only):**

* “Do I need to give access?”
* “Can you fix this without rebuilding the whole site?”
* “Do you work with a team?” *(leads to Yanus mention)*

---

# 11) Crew block (you + Yanus, in the episode context)

**Title:** **The crew on this rebuild**
**You:** Lead diagnosis + implementation, client-facing, 10+ years
**Yanus:** DevOps/infra/performance under load, monitoring, deployments

**One-liner:**
I lead the teardown and fix path. Yanus handles the deep infrastructure moves when the bottleneck isn’t just code.

---

# 12) Related episodes (binge loop)

**Title:** **Related rebuilds**
Cards with:

* Title
* Symptom
* Result
* Watch / Read teardown

**Button:** Browse all episodes

---

# 13) Final CTA (simple, strong)

**Title:** **Ready for a teardown?**
**Copy:**
If your site has the same symptom, you don’t need a new theme. You need a real diagnosis.

**Button:** **Book Rapid Diagnosis**

---

## Optional but HIGHLY recommended conversion boosters

### A) Sticky “Symptom CTA” (bottom bar on mobile)

**“Slow checkout or random errors? Book Rapid Diagnosis →”**

### B) “Download the Fix Checklist” lead magnet

A 1-page checklist: **“Checkout Teardown Checklist (Before You Touch Anything)”**
Email capture → nurture → booking CTA.

### C) Chapters / timestamps (SEO + usability)

Add a “Chapters” section that mirrors YouTube chapters and links to headings.

---

## Copy-ready “Episode Card” (for listings)

**Episode #{XX}: {Title}**
**Symptom:** {1 line}
**Root cause:** {1 line}
**Result:** {1 line metric}
**CTA:** Read teardown → / Watch →

---

## Technical add-on: JSON-LD schema (paste into page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Episode #XX: {Title}",
  "description": "{1-2 sentence summary with symptom -> cause -> result}",
  "author": { "@type": "Person", "name": "{Your Name/Brand}" },
  "datePublished": "{YYYY-MM-DD}",
  "image": "{episode-thumbnail-url}",
  "video": {
    "@type": "VideoObject",
    "name": "Episode #XX: {Title}",
    "description": "{same summary}",
    "thumbnailUrl": "{episode-thumbnail-url}",
    "uploadDate": "{YYYY-MM-DD}",
    "embedUrl": "{youtube-embed-url}"
  }
}
</script>
```

---