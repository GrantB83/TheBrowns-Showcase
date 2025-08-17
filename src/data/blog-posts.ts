export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorBio?: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
  metaDescription: string;
  featured?: boolean;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-fly-fishing-spots-dullstroom",
    title: "Top Fly-Fishing Spots in Dullstroom",
    excerpt: "Discover the best trout fishing locations around Dullstroom, from the iconic Dullstroom Dam to hidden highland streams. Expert tips for a successful fishing holiday in Mpumalanga.",
    content: `
      <h2>Experience World-Class Trout Fishing in Dullstroom</h2>
      <p>Nestled in the heart of Mpumalanga's highlands, Dullstroom has earned its reputation as South Africa's premier trout fishing destination. With crystal-clear mountain streams, well-stocked dams, and a variety of fishing experiences, this charming town offers something for every angler.</p>
      
      <h3>Dullstroom Dam - The Crown Jewel</h3>
      <p>The iconic Dullstroom Dam is the town's most famous fishing spot. This pristine water body is home to rainbow and brown trout, with fish averaging 1-2kg. The dam offers both bank and boat fishing opportunities, making it perfect for beginners and experienced anglers alike.</p>
      
      <h3>Highland Streams and Private Waters</h3>
      <p>For those seeking a more intimate fishing experience, the numerous streams flowing through the area provide excellent opportunities. Many private farms offer day permits for stream fishing, where you can experience the thrill of wild trout in their natural habitat.</p>
      
      <h3>Best Times to Fish</h3>
      <p>Early morning and late afternoon are typically the most productive times. The cooler highland climate means fishing can be excellent year-round, though spring and autumn are particularly rewarding seasons.</p>
      
      <h3>Where to Stay</h3>
      <p>The Browns Luxury Guest Suites & Cottage provides the perfect base for your fishing adventure. Located in the heart of Dullstroom, you're never more than minutes away from world-class fishing opportunities.</p>
    `,
    category: "Activities",
    author: "The Browns Team",
    authorBio: "Local experts passionate about showcasing the best of Dullstroom and the Mpumalanga highlands.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/fly-fishing-dullstroom.jpg",
    keywords: ["Dullstroom fishing accommodation", "trout fishing", "fly fishing", "Mpumalanga activities", "highland fishing"],
    metaDescription: "Discover the best fly-fishing spots in Dullstroom. Expert guide to trout fishing locations, tips, and accommodation options in Mpumalanga highlands.",
    featured: true,
    published: true
  },
  {
    id: "2",
    slug: "mpumalanga-events-festivals",
    title: "Upcoming Events and Festivals in Mpumalanga",
    excerpt: "Stay updated on Dullstroom's seasonal festivals, markets, and cultural celebrations. Plan your visit around these exciting community events and local gatherings.",
    content: `
      <h2>Celebrate the Spirit of Dullstroom</h2>
      <p>Dullstroom's calendar is filled with exciting events that showcase the town's rich culture, artisanal heritage, and natural beauty. From seasonal festivals to weekly markets, there's always something happening in this vibrant highland community.</p>
      
      <h3>Annual Dullstroom Fly-Fishing Championships</h3>
      <p>Every October, the town hosts the premier fly-fishing competition in South Africa. Anglers from across the country gather to compete for prizes while enjoying the camaraderie of the fishing community.</p>
      
      <h3>Highland Festival</h3>
      <p>The Highland Festival celebrates Dullstroom's Scottish heritage with traditional music, dancing, and authentic cuisine. This family-friendly event typically takes place in spring and features local artisans and craftspeople.</p>
      
      <h3>Weekly Farmers Market</h3>
      <p>Every Saturday morning, the local farmers market comes alive with fresh produce, homemade goods, and artisanal crafts. It's the perfect place to experience local flavors and meet the community.</p>
      
      <h3>Planning Your Visit</h3>
      <p>Book your stay at The Browns during festival season to experience Dullstroom at its most vibrant. Our central location puts you within walking distance of all the main event venues.</p>
    `,
    category: "Events",
    author: "The Browns Team",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/images/blog/mpumalanga-events.jpg",
    keywords: ["Dullstroom events", "Mpumalanga festivals", "seasonal celebrations", "local markets"],
    metaDescription: "Stay updated on Dullstroom's festivals, markets, and cultural events. Plan your Mpumalanga highland getaway around exciting community celebrations.",
    published: true
  },
  {
    id: "3",
    slug: "self-catering-luxury-dullstroom",
    title: "Why Choose Self-Catering Luxury in Dullstroom",
    excerpt: "Experience the freedom and comfort of self-catering luxury accommodation. Enjoy premium amenities, flexibility, and authentic highland living at The Browns.",
    content: `
      <h2>The Best of Both Worlds: Luxury and Independence</h2>
      <p>Self-catering luxury accommodation offers the perfect balance between premium comfort and personal freedom. At The Browns, we've elevated this concept to new heights, providing guests with all the amenities of a luxury hotel while maintaining the flexibility and privacy of your own highland retreat.</p>
      
      <h3>Freedom to Explore</h3>
      <p>With your own fully equipped kitchen, you have the freedom to dine when and how you choose. Whether you want to prepare a simple breakfast before heading out fishing or create a gourmet dinner with local ingredients from the farmers market, the choice is yours.</p>
      
      <h3>Premium Amenities Without Compromise</h3>
      <p>Our luxury suites feature top-of-the-line appliances, premium finishes, and thoughtful touches that make your stay special. From Egyptian cotton linens to state-of-the-art entertainment systems, we ensure your comfort never takes a backseat to independence.</p>
      
      <h3>Authentic Highland Living</h3>
      <p>Self-catering allows you to live like a local while enjoying luxury amenities. Shop at the local markets, cook with regional ingredients, and experience Dullstroom the way it was meant to be experienced.</p>
      
      <h3>Perfect for Extended Stays</h3>
      <p>Whether you're planning a weekend getaway or an extended highland retreat, self-catering luxury provides the comfort and convenience for stays of any length.</p>
    `,
    category: "Accommodation",
    author: "The Browns Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/self-catering-luxury.jpg",
    keywords: ["self-catering luxury", "Dullstroom accommodation", "luxury suites", "highland retreat"],
    metaDescription: "Discover the benefits of self-catering luxury accommodation in Dullstroom. Experience freedom, comfort, and premium amenities at The Browns.",
    published: true
  },
  {
    id: "4",
    slug: "dullstroom-artisanal-food-scene",
    title: "Exploring Dullstroom's Artisanal Food Scene",
    excerpt: "From fine dining restaurants to local delicacies, discover Dullstroom's culinary treasures. Perfect dining experiences within walking distance of The Browns.",
    content: `
      <h2>A Culinary Journey Through the Highlands</h2>
      <p>Dullstroom has evolved into a gastronomic destination that rivals any major city. This small highland town punches well above its weight when it comes to culinary excellence, offering everything from award-winning restaurants to charming local cafes.</p>
      
      <h3>Fine Dining Excellence</h3>
      <p>Several restaurants in Dullstroom have earned national recognition for their innovative use of local ingredients and exceptional service. Many feature locally-sourced trout, highland beef, and seasonal vegetables grown in the fertile mountain soil.</p>
      
      <h3>Artisanal Producers</h3>
      <p>The town is home to numerous artisanal food producers creating everything from handcrafted chocolates to specialty cheeses. These local artisans often use traditional methods passed down through generations.</p>
      
      <h3>Coffee Culture</h3>
      <p>Dullstroom's coffee scene is thriving, with several specialty roasters and cafes offering everything from perfectly brewed espresso to unique highland blends. Many cafes also feature homemade pastries and light meals.</p>
      
      <h3>Walking Distance Dining</h3>
      <p>One of the advantages of staying at The Browns is our central location. Most of Dullstroom's finest restaurants and cafes are within easy walking distance, allowing you to explore the food scene without worrying about transportation.</p>
    `,
    category: "Dining",
    author: "The Browns Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "/images/blog/dullstroom-food-scene.jpg",
    keywords: ["Dullstroom dining", "fine dining", "local cuisine", "artisanal food", "restaurant recommendations"],
    metaDescription: "Explore Dullstroom's exceptional artisanal food scene. Discover fine dining, local producers, and culinary experiences in the Mpumalanga highlands.",
    published: true
  },
  {
    id: "5",
    slug: "highland-hiking-trails-dullstroom",
    title: "Highland Hiking Trails Around Dullstroom",
    excerpt: "Explore breathtaking hiking trails in the Mpumalanga highlands. From gentle nature walks to challenging mountain paths, discover the natural beauty surrounding The Browns.",
    content: `
      <h2>Discover the Natural Beauty of the Mpumalanga Highlands</h2>
      <p>The area surrounding Dullstroom offers some of South Africa's most spectacular hiking opportunities. From gentle nature walks suitable for the whole family to challenging mountain trails for experienced hikers, the highland landscape provides endless opportunities for exploration.</p>
      
      <h3>Popular Day Hikes</h3>
      <p>The Verloren Valei Nature Reserve offers several well-marked trails ranging from 2-6 kilometers. These trails showcase the unique highland ecosystem and offer excellent bird watching opportunities, including the chance to spot the endangered Blue Crane.</p>
      
      <h3>Mountain Challenges</h3>
      <p>For more experienced hikers, the surrounding mountains provide challenging multi-hour hikes with spectacular panoramic views. Many trails lead to hidden waterfalls and pristine mountain streams.</p>
      
      <h3>Seasonal Considerations</h3>
      <p>Hiking is possible year-round, though each season offers a different experience. Spring brings wildflowers, summer offers lush green landscapes, autumn provides crisp air and changing colors, while winter can bring occasional snow to the higher elevations.</p>
      
      <h3>Preparation and Safety</h3>
      <p>Highland weather can change quickly, so proper preparation is essential. We provide all our guests with detailed trail maps and current weather information to ensure safe and enjoyable hiking experiences.</p>
    `,
    category: "Outdoor Activities",
    author: "The Browns Team",
    date: "February 20, 2024",
    readTime: "8 min read",
    image: "/images/blog/highland-hiking-trails.jpg",
    keywords: ["Dullstroom hiking", "highland trails", "nature walks", "outdoor activities", "mountain hiking"],
    metaDescription: "Discover hiking trails around Dullstroom in the Mpumalanga highlands. From gentle walks to mountain challenges, explore natural beauty near The Browns.",
    published: true
  }
];

export const categories = ["All", "Activities", "Events", "Accommodation", "Dining", "Outdoor Activities"];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured && post.published);
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.published && 
      (post.category === currentPost.category || 
       post.keywords.some(keyword => currentPost.keywords.includes(keyword)))
    )
    .slice(0, limit);
}