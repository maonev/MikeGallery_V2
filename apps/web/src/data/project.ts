// for development only
export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  desc: string;
  links: Record<string, string>;
  sections: SectionProject[];
};

export type SectionProject = {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Orvillebury",
    slug: "orvillebury",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/10/800/600",
    isFeatured: true,
    desc:
      "A real-time analytics workspace built for high-frequency teams.\n\n" +
      "I streamlined the query pipeline and cut dashboard load times from 2.4s down to 380ms across more than 14,000 daily active workspaces.\n" +
      "Still tweaking a few heavy charts on older laptops, but overall way faster than before.",
    links: {
      Github: "https://github.com/example/orvillebury",
      "Live Demo": "https://orvillebury.example.com",
      Docs: "https://docs.example.com/orvillebury",
    },
    sections: [
      {
        id: "s1",
        title: "Project Story",
        description:
          "The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.",
        imageUrls: ["https://picsum.photos/id/20/1200/900"],
      },
      {
        id: "s2",
        title: "Day One",
        description:
          "Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills",
        imageUrls: [
          "https://picsum.photos/id/30/800/800",
          "https://picsum.photos/id/40/800/800",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "West Lavada",
    slug: "west-lavada",
    category: "Green",
    imageUrl: "https://picsum.photos/id/15/800/600",
    isFeatured: false,
    desc:
      "An eco-focused storefront with fast local search and curated bundles.\n\n" +
      "Rebuilding the catalog filter and checkout flow supported over 8,500 monthly orders with an average response time under 120ms.",
    links: {
      Github: "https://github.com/example/west-lavada",
      "Live Demo": "https://west-lavada.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "The Challenge & Vision",
        description:
          "Sustainable e-commerce platforms often suffer from bloated product pages and sluggish search filters that frustrate eco-conscious shoppers. When we started re-architecting West Lavada, the primary goal was to prove that rich visual storytelling around ethical sourcing does not have to come at the expense of raw storefront speed and conversion rates.",
        imageUrls: [
          "https://picsum.photos/id/106/1200/900",
          "https://picsum.photos/id/112/800/800",
        ],
      },
      {
        id: "s2",
        title: "Instant Local Search",
        description:
          "By indexing product attributes directly on the edge and debouncing faceted filter states, users can now slice through hundreds of zero-waste bundles in milliseconds. We also redesigned the cart drawer to dynamically suggest refill packs based on items already selected, lifting average order value without intrusive popups.",
        imageUrls: ["https://picsum.photos/id/118/1200/900"],
      },
    ],
  },
  {
    id: "3",
    title: "North Katelyn",
    slug: "north-katelyn",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/20/800/600",
    isFeatured: true,
    desc:
      "A collaborative task board designed for product squads shipping weekly releases.\n\n" +
      "Introducing keyboard shortcuts and optimistic updates saved teams roughly 4 hours per week on sprint triage.\n" +
      "Also added bulk drag-and-drop so moving 20+ cards at once doesn't feel clunky.",
    links: {
      Github: "https://github.com/example/north-katelyn",
      "Live Demo": "https://north-katelyn.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Why Another Task Board?",
        description:
          "Most project management tools feel like heavy databases disguised as kanban boards, forcing engineers to wait for spinners every time they change a ticket status. North Katelyn was born out of a desire for keyboard-first speed where every interaction registers immediately in the local state before syncing quietly in the background.",
        imageUrls: ["https://picsum.photos/id/160/1200/900"],
      },
      {
        id: "s2",
        title: "Optimistic UI & Bulk Actions",
        description:
          "Handling conflict resolution when five squad members reorder the same sprint backlog simultaneously required careful state reconciliation. We built a custom queue layer that handles rollbacks gracefully while enabling multi-select drag-and-drop across columns at a locked 60 frames per second.",
        imageUrls: [
          "https://picsum.photos/id/180/800/800",
          "https://picsum.photos/id/201/800/800",
          "https://picsum.photos/id/210/800/800",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Lake Destinyland",
    slug: "lake-destinyland",
    category: "Green",
    imageUrl: "https://picsum.photos/id/28/800/600",
    isFeatured: false,
    desc:
      "An interactive travel guide for outdoor trails and weekend getaways.\n\n" +
      "Added offline route maps across 45 trailheads and handled over 32,000 itinerary saves during peak season.",
    links: {
      "Live Demo": "https://lake-destinyland.example.com",
      "App Store": "https://apps.apple.com/example/lake-destinyland",
    },
    sections: [
      {
        id: "s1",
        title: "Designing for Zero Signal",
        description:
          "Hikers rarely have reliable cellular reception once they leave the trailhead parking lot, which renders cloud-dependent map apps practically useless. We engineered a lightweight vector tile caching system that lets travelers download elevation profiles, waypoint photos, and emergency markers onto their device with a single tap before heading out.",
        imageUrls: [
          "https://picsum.photos/id/235/1200/900",
          "https://picsum.photos/id/238/800/800",
        ],
      },
      {
        id: "s2",
        title: "Curated Weekend Itineraries",
        description:
          "Beyond raw GPS tracks, users wanted practical advice on sunrise viewpoints, water refill stations, and nearby cabins. We partnered with local trail stewards to structure verified weekend routes that automatically adapt packing checklists based on seasonal weather forecasts.",
        imageUrls: ["https://picsum.photos/id/249/1200/900"],
      },
    ],
  },
  {
    id: "5",
    title: "Port Jermaine",
    slug: "port-jermaine",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/37/800/600",
    isFeatured: true,
    desc:
      "A modular UI component library and documentation hub.\n\n" +
      "Standardized 36 accessible primitives and tokens that brought average feature delivery time from 5 days down to 2 days.\n" +
      "Every component now comes with live props and keyboard navigation examples.",
    links: {
      Github: "https://github.com/example/port-jermaine",
      Docs: "https://port-jermaine.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Unifying Fragmented Interfaces",
        description:
          "Across four separate product teams, designers and developers were maintaining slightly different versions of modals, dropdowns, and form inputs. Port Jermaine established a single source of truth built on strict semantic tokens and headless accessibility primitives so teams could focus on business logic rather than reinventing focus traps.",
        imageUrls: ["https://picsum.photos/id/250/1200/900"],
      },
      {
        id: "s2",
        title: "Interactive Documentation",
        description:
          "A design system only succeeds if engineers actually enjoy reading its documentation. We built an interactive sandbox directly into every component page, allowing developers to toggle RTL layouts, test screen-reader announcements, and copy production-ready TypeScript snippets in seconds.",
        imageUrls: [
          "https://picsum.photos/id/256/800/800",
          "https://picsum.photos/id/260/800/800",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "South Veronicaport",
    slug: "south-veronicaport",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/42/800/600",
    isFeatured: false,
    desc:
      "An inventory tracking tool for multi-warehouse operations.\n\n" +
      "Synced stock counts across 6 regional hubs and tracked over 120,000 SKU movements with fewer manual count mismatches.",
    links: {
      Github: "https://github.com/example/south-veronicaport",
      "Live Demo": "https://south-veronicaport.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Eliminating Spreadsheet Drift",
        description:
          "Before South Veronicaport, regional warehouse managers reconciled stock transfers using end-of-day CSV exports, frequently causing oversold items during flash promotions. We replaced batch updates with an event-driven ledger that records every barcode scan, bin transfer, and damaged-goods write-off in real time.",
        imageUrls: [
          "https://picsum.photos/id/274/800/800",
          "https://picsum.photos/id/287/800/800",
          "https://picsum.photos/id/292/800/800",
        ],
      },
      {
        id: "s2",
        title: "Low-Stock Forecasting",
        description:
          "Using historical velocity across all six hubs, the dashboard automatically flags SKUs likely to run out before the next supplier shipment arrives. Operations leads can generate inter-warehouse transfer orders with one click to balance inventory levels proactively.",
        imageUrls: ["https://picsum.photos/id/301/1200/900"],
      },
    ],
  },
  {
    id: "7",
    title: "New Marisol",
    slug: "new-marisol",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/49/800/600",
    isFeatured: false,
    desc:
      "A visual portfolio and client proofing gallery for creative directors.\n\n" +
      "Optimized high-res image delivery across 18 client galleries while keeping first paint under 0.9s on mobile.\n" +
      "Clients can now leave comments directly on specific photos instead of sending long emails.",
    links: {
      "Live Demo": "https://new-marisol.example.com",
      Github: "https://github.com/example/new-marisol",
    },
    sections: [
      {
        id: "s1",
        title: "Full-Bleed Visual Storytelling",
        description:
          "Creative directors need their editorial photography and campaign stills presented without distracting chrome or heavy compression artifacts. We implemented progressive blur-up placeholders paired with responsive AVIF pipelines so massive lookbooks load effortlessly even over cellular connections.",
        imageUrls: ["https://picsum.photos/id/319/1200/900"],
      },
      {
        id: "s2",
        title: "Pin-Drop Client Proofing",
        description:
          "Reviewing hundreds of shoot selects over email chains often leads to miscommunication about which frame needs retouching. We introduced spatial pin annotations directly on the high-res canvas, letting clients circle exact crop adjustments and approve final deliverables in half the time.",
        imageUrls: [
          "https://picsum.photos/id/325/800/800",
          "https://picsum.photos/id/338/800/800",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "East Emmet",
    slug: "east-emmet",
    category: "Green",
    imageUrl: "https://picsum.photos/id/54/800/600",
    isFeatured: false,
    desc:
      "A lightweight daily habit and focus timer web app.\n\n" +
      "Helped over 6,200 active users log more than 95,000 focused sessions with zero-friction streak tracking.",
    links: {
      Github: "https://github.com/example/east-emmet",
      "Live Demo": "https://east-emmet.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Calm Productivity Philosophy",
        description:
          "Many habit trackers overwhelm users with complex gamification, punitive streak resets, and cluttered analytics charts. East Emmet takes the opposite approach: a quiet, distraction-free interface that opens straight into your top three intentions for the day and a single ambient countdown timer.",
        imageUrls: ["https://picsum.photos/id/342/1200/900"],
      },
      {
        id: "s2",
        title: "Local-First Persistence",
        description:
          "To ensure the app launches instantaneously every morning without requiring an account upfront, all session logs and custom intervals are stored locally in IndexedDB with optional encrypted cloud sync across desktop and mobile browsers.",
        imageUrls: [
          "https://picsum.photos/id/355/800/800",
          "https://picsum.photos/id/366/800/800",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "West Roslyn",
    slug: "west-roslyn",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/60/800/600",
    isFeatured: true,
    desc:
      "A SaaS product showcase and interactive pricing configurator.\n\n" +
      "Simplified 4 plan tiers and live calculator inputs, cutting average onboarding setup time from 18 minutes to 6 minutes.\n" +
      "Users can see exact seat costs right away before creating an account.",
    links: {
      "Live Demo": "https://west-roslyn.example.com",
      Github: "https://github.com/example/west-roslyn",
    },
    sections: [
      {
        id: "s1",
        title: "Transparent Pricing Architecture",
        description:
          "Enterprise buyers often bounce when basic pricing is hidden behind a 'Book a Demo' form, while self-serve users get confused by overlapping feature matrices. We replaced static comparison tables with an interactive slider configurator that calculates seat tiers, API usage add-ons, and annual discounts transparently.",
        imageUrls: [
          "https://picsum.photos/id/370/800/800",
          "https://picsum.photos/id/378/800/800",
          "https://picsum.photos/id/384/800/800",
        ],
      },
      {
        id: "s2",
        title: "Guided Sandbox Onboarding",
        description:
          "Once a user selects their ideal configuration, the workspace pre-populates sample datasets tailored to their team size, cutting time-to-first-value down to just six minutes.",
        imageUrls: ["https://picsum.photos/id/395/1200/900"],
      },
    ],
  },
  {
    id: "10",
    title: "Lake Brionna",
    slug: "lake-brionna",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/76/800/600",
    isFeatured: false,
    desc:
      "A community event directory and RSVP hub for local tech meetups.\n\n" +
      "Hosted schedules for 240+ gatherings and streamlined check-in flows for roughly 11,000 total attendees.",
    links: {
      Github: "https://github.com/example/lake-brionna",
      "Live Demo": "https://lake-brionna.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Empowering Grassroots Organizers",
        description:
          "Volunteer meetup organizers shouldn't have to pay steep ticketing commissions just to host a free monthly developer workshop. Lake Brionna provides an open, zero-fee event hub complete with automated waitlist promotion, speaker submission forms, and calendar invites.",
        imageUrls: ["https://picsum.photos/id/403/1200/900"],
      },
      {
        id: "s2",
        title: "Frictionless QR Check-In",
        description:
          "Venue security desks often create bottlenecks right before keynote talks begin. We built a browser-based QR scanner for hosts that verifies attendee passes offline and prints name badges in under two seconds.",
        imageUrls: [
          "https://picsum.photos/id/415/800/800",
          "https://picsum.photos/id/429/800/800",
        ],
      },
    ],
  },
  {
    id: "11",
    title: "North Trever",
    slug: "north-trever",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/88/800/600",
    isFeatured: false,
    desc:
      "A distraction-free reading and essay platform with clean typographic hierarchy.\n\n" +
      "Tuned layout rhythm and article prefetching for over 19,000 monthly readers.\n" +
      "Focused heavily on comfortable line spacing and calm dark reading surfaces.",
    links: {
      "Live Demo": "https://north-trever.example.com",
      Docs: "https://docs.example.com/north-trever",
    },
    sections: [
      {
        id: "s1",
        title: "Typography & Reading Rhythm",
        description:
          "Long-form technical essays deserve the same typographic care as printed journals. Every measure, baseline grid, and footnote popover in North Trever was calibrated to keep line lengths around 65 characters while reducing eye strain during late-night reading sessions.",
        imageUrls: [
          "https://picsum.photos/id/435/1200/900",
          "https://picsum.photos/id/442/800/800",
        ],
      },
      {
        id: "s2",
        title: "Instant Article Prefetching",
        description:
          "By observing viewport intersectionss and hovering intent on essay links, next-chapter payloads are pre-rendered silently in the background so navigating between multi-part series feels like turning physical pages.",
        imageUrls: ["https://picsum.photos/id/450/1200/900"],
      },
    ],
  },
  {
    id: "12",
    title: "Port Carlee",
    slug: "port-carlee",
    category: "Green",
    imageUrl: "https://picsum.photos/id/103/800/600",
    isFeatured: false,
    desc:
      "A project scope and budget estimator built for independent studios.\n\n" +
      "Reduced quote turnaround from 2 days to under 10 minutes across more than 1,800 generated proposals.",
    links: {
      Github: "https://github.com/example/port-carlee",
      "Live Demo": "https://port-carlee.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Automating Scope Calculations",
        description:
          "Independent design and engineering studios lose countless billable hours manually assembling spreadsheets for prospective client quotes. Port Carlee turns common deliverables—such as authentication flows, CMS integrations, and custom animations—into modular building blocks with pre-calibrated effort ranges.",
        imageUrls: ["https://picsum.photos/id/461/1200/900"],
      },
      {
        id: "s2",
        title: "Client-Ready Proposal Export",
        description:
          "Once a studio lead finalizes the milestone timeline and payment schedule, the tool compiles an interactive web proposal and clean PDF summary ready to send directly to stakeholders.",
        imageUrls: [
          "https://picsum.photos/id/473/800/800",
          "https://picsum.photos/id/480/800/800",
          "https://picsum.photos/id/488/800/800",
        ],
      },
    ],
  },
  {
    id: "13",
    title: "San Bernardino",
    slug: "san-bernardino",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/119/800/600",
    isFeatured: false,
    desc:
      "An infrastructure status page and incident timeline monitor.\n\n" +
      "Aggregated health checks across 28 microservices and kept alert-to-page latency under 3 seconds.\n" +
      "Each incident postmortem gets its own clean timeline log for the team.",
    links: {
      Github: "https://github.com/example/san-bernardino",
      Docs: "https://docs.example.com/san-bernardino",
    },
    sections: [
      {
        id: "s1",
        title: "Resilient Multi-Region Monitoring",
        description:
          "A status page that goes down alongside your primary cloud cluster defeats its own purpose. San Bernardino runs isolated edge probes across four continents, aggregating synthetic health checks independently from the main production VPC.",
        imageUrls: ["https://picsum.photos/id/501/1200/900"],
      },
      {
        id: "s2",
        title: "Structured Incident Timelines",
        description:
          "During high-pressure outages, on-call engineers can post timestamped status updates via Slack slash commands that automatically publish to the public incident feed and feed into postmortem templates once resolved.",
        imageUrls: [
          "https://picsum.photos/id/514/800/800",
          "https://picsum.photos/id/526/800/800",
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Fort Wayland",
    slug: "fort-wayland",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/128/800/600",
    isFeatured: false,
    desc:
      "A design system playground for testing theme tokens and responsive states.\n\n" +
      "Consolidated 50+ inconsistent button and modal variants into 12 unified patterns.",
    links: {
      Github: "https://github.com/example/fort-wayland",
      "Live Demo": "https://fort-wayland.example.com",
    },
    sections: [
      {
        id: "s1",
        title: "Auditing Visual Debt",
        description:
          "Years of rapid feature shipping had left the product with dozens of slightly different border radii, shadow elevations, and hover states. Fort Wayland started as an internal visual audit tool that rendered every UI variant side-by-side so designers could systematically merge duplicates.",
        imageUrls: [
          "https://picsum.photos/id/532/800/800",
          "https://picsum.photos/id/548/800/800",
        ],
      },
      {
        id: "s2",
        title: "Live Theme Token Injection",
        description:
          "The playground allows engineers to tweak contrast ratios, dark-mode surface elevations, and spacing scales in real time while exporting valid CSS custom properties and Tailwind configuration presets.",
        imageUrls: ["https://picsum.photos/id/555/1200/900"],
      },
    ],
  },
  {
    id: "15",
    title: "Mount Clarissa",
    slug: "mount-clarissa",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/142/800/600",
    isFeatured: false,
    desc:
      "A digital menu and table reservation experience for a neighborhood kitchen.\n\n" +
      "Handled over 4,300 table bookings and cut phone reservation volume in half.\n" +
      "Peak weekend slots now fill up smoothly without confusing back-and-forth calls.",
    links: {
      "Live Demo": "https://mount-clarissa.example.com",
      "Google Play":
        "https://play.google.com/store/apps/details?id=example.mountclarissa",
    },
    sections: [
      {
        id: "s1",
        title: "Hospitality-First Digital Experience",
        description:
          "Neighborhood restaurants often rely on clunky third-party booking widgets that clash with their warm atmosphere and charge steep per-cover fees. We crafted a mobile-first reservation flow that showcases seasonal dishes alongside live table availability in under three taps.",
        imageUrls: [
          "https://picsum.photos/id/564/800/800",
          "https://picsum.photos/id/577/800/800",
          "https://picsum.photos/id/582/800/800",
        ],
      },
      {
        id: "s2",
        title: "Smart Floor-Plan Pacing",
        description:
          "To prevent the kitchen from getting overwhelmed during Friday dinner rushes, the booking engine staggers 15-minute arrival windows automatically based on party size and current dining room turnover.",
        imageUrls: ["https://picsum.photos/id/593/1200/900"],
      },
    ],
  },
];
