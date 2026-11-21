export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean
};

export type ProjectCardProps = {
  project: Project;
  className?: string;
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
  },
  {
    id: "2",
    title: "West Lavada",
    slug: "west-lavada",
    category: "Green",
    imageUrl: "https://picsum.photos/id/15/800/600",
    isFeatured: false,
  },
  {
    id: "3",
    title: "North Katelyn",
    slug: "north-katelyn",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/20/800/600",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Lake Destinyland",
    slug: "lake-destinyland",
    category: "Green",
    imageUrl: "https://picsum.photos/id/28/800/600",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Port Jermaine",
    slug: "port-jermaine",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/37/800/600",
    isFeatured: true,
  },
  {
    id: "6",
    title: "South Veronicaport",
    slug: "south-veronicaport",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/42/800/600",
    isFeatured: false,
  },
  {
    id: "7",
    title: "New Marisol",
    slug: "new-marisol",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/49/800/600",
    isFeatured: false,
  },
  {
    id: "8",
    title: "East Emmet",
    slug: "east-emmet",
    category: "Green",
    imageUrl: "https://picsum.photos/id/54/800/600",
    isFeatured: false,
  },
  {
    id: "9",
    title: "West Roslyn",
    slug: "west-roslyn",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/60/800/600",
    isFeatured: true,
  },
  {
    id: "10",
    title: "Lake Brionna",
    slug: "lake-brionna",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/76/800/600",
    isFeatured: false,
  },
  {
    id: "11",
    title: "North Trever",
    slug: "north-trever",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/88/800/600",
    isFeatured: false,
  },
  {
    id: "12",
    title: "Port Carlee",
    slug: "port-carlee",
    category: "Green",
    imageUrl: "https://picsum.photos/id/103/800/600",
    isFeatured: false,
  },
  {
    id: "13",
    title: "San Bernardino",
    slug: "san-bernardino",
    category: "Blue",
    imageUrl: "https://picsum.photos/id/119/800/600",
    isFeatured: false,
  },
  {
    id: "14",
    title: "Fort Wayland",
    slug: "fort-wayland",
    category: "Purple",
    imageUrl: "https://picsum.photos/id/128/800/600",
    isFeatured: false,
  },
  {
    id: "15",
    title: "Mount Clarissa",
    slug: "mount-clarissa",
    category: "Orange",
    imageUrl: "https://picsum.photos/id/142/800/600",
    isFeatured: false,
  },
];
