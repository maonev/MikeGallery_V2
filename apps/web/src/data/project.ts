export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  desc: string;
  links: Record<string, string>;
};

// for development only
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
  },
];
