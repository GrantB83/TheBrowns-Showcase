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
    excerpt: "Thinking about a Dullstroom escape and comparing stay types? Self-catering can be the perfect fit if you want privacy, space, and control over your mealtimes.",
    content: `
      <h2>Two Ways to Stay at The Browns</h2>
      <p>Thinking about a Dullstroom escape and comparing stay types? Self-catering can be the perfect fit if you want privacy, space, and control over your mealtimes. At The Browns' Luxury Guest & Cottage Suites, there are two clear ways to stay that suit different trips:</p>
      
      <p><strong>Whole-house self-catering</strong> when you book an entire property.</p>
      <p><strong>Suite-only stays</strong> that include a beverage station for easy hot drinks and light refreshments, but no cooking facilities.</p>
      
      <h3>1) Whole-house self-catering</h3>
      <p>Book an entire house to enjoy a private home setting in Dullstroom. This option suits families and small groups who value shared living spaces and the ability to prepare their own meals in comfort.</p>
      
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Family weekends and friends' getaways</li>
        <li>Longer stays that benefit from cooking at home</li>
        <li>Early starts for activities with flexible meal times</li>
      </ul>
      
      <p><strong>What to plan for:</strong></p>
      <ul>
        <li>Bring your favourite ingredients or shop in the village on arrival</li>
        <li>Plan one relaxed dinner in, one dinner out, and simple breakfasts to keep the weekend smooth</li>
      </ul>
      
      <h3>2) Suite-only with beverage station</h3>
      <p>Prefer a hotel-style rhythm without cooking? Choose an individual suite. You will have a minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, and milk for easy mornings and wind-down evenings.</p>
      
      <p><strong>Good to know:</strong></p>
      <ul>
        <li>No cooking facilities are provided in suites</li>
        <li>Eat out in the village or enjoy takeaways</li>
        <li>Use the minibar fridge for milk, cold drinks, and small snacks</li>
      </ul>
      
      <p><strong>Best for:</strong></p>
      <ul>
        <li>Short stays and couples' trips</li>
        <li>Travellers who want a simple, low-fuss plan</li>
        <li>Guests who prefer Dullstroom's cafés and restaurants for meals</li>
      </ul>
      
      <h3>Self-catering vs suite-only: which fits your trip?</h3>
      <table class="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Trip type</th>
            <th class="border border-gray-300 p-2">Choose whole-house self-catering if…</th>
            <th class="border border-gray-300 p-2">Choose suite-only if…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Families or groups</strong></td>
            <td class="border border-gray-300 p-2">You want shared lounge and dining space</td>
            <td class="border border-gray-300 p-2">You are splitting time between activities and meals out</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Longer stays</strong></td>
            <td class="border border-gray-300 p-2">You prefer to cook some meals and control timing</td>
            <td class="border border-gray-300 p-2">You want a simple base with easy hot drinks</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><strong>Early starts</strong></td>
            <td class="border border-gray-300 p-2">You need flexible breakfasts before activities</td>
            <td class="border border-gray-300 p-2">You are happy to grab coffee and head out</td>
          </tr>
        </tbody>
      </table>
      
      <h3>Sample weekend plans</h3>
      
      <h4>Whole-house self-catering plan</h4>
      <p><strong>Friday:</strong> Arrive, stock up in the village, easy dinner in.</p>
      <p><strong>Saturday:</strong> Early activity, late brunch at home, slow afternoon, relaxed dinner in or out.</p>
      <p><strong>Sunday:</strong> Simple breakfast, short scenic stop, drive home.</p>
      
      <h4>Suite-only plan</h4>
      <p><strong>Friday:</strong> Arrive, in-room coffee or tea, dinner in the village.</p>
      <p><strong>Saturday:</strong> Nespresso and a quiet start, breakfast at a café, explore, dinner out or takeaway.</p>
      <p><strong>Sunday:</strong> Hot drink in the room, light breakfast in town, final stroll before checkout.</p>
      
      <h3>Quick FAQ</h3>
      
      <p><strong>Can I cook in a suite?</strong><br>
      No. Suites are suite-only with a beverage station. There are no cooking facilities.</p>
      
      <p><strong>What is included in the beverage station?</strong><br>
      A minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, and milk.</p>
      
      <p><strong>How do I book self-catering at The Browns?</strong><br>
      Select an entire house option to enjoy whole-house self-catering. If you book an individual suite, it will be suite-only with a beverage station.</p>
      
      <h3>Ready to choose your stay?</h3>
      <p><strong>Whole-house self-catering:</strong> ideal for families and groups who want space and mealtime flexibility.</p>
      <p><strong>Suite-only with beverage station:</strong> perfect for couples and short stays that focus on exploring the village.</p>
      <p>Check live Rates & Availability at The Browns' Luxury Guest & Cottage Suites and pick the option that matches your Dullstroom itinerary.</p>
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
    id: "6",
    slug: "ultimate-48-hour-dullstroom-itinerary",
    title: "The Ultimate 48-Hour Dullstroom Itinerary: Trout, Trails, and Fireside Comfort",
    excerpt: "Planning a Dullstrom weekend? This complete 48-hour guide combines fly fishing, gentle outdoor activities, memorable meals, and cozy fireside evenings for the perfect highland getaway.",
    content: `
      <h2>Your Perfect Dullstroom Weekend Blueprint</h2>
      <p>Thinking about a Dullstroom weekend? This 48-hour plan keeps things simple, scenic, and satisfying. It combines easy travel, gentle outdoor time, memorable meals, and relaxed evenings by the fire. If you are still choosing where to stay, The Browns' Luxury Guest & Cottage Suites offer modern comforts, generous fireplaces, and a quiet base close to the village.</p>
      
      <h3>Friday Afternoon: The Easy Arrival</h3>
      <p>Aim to arrive by late afternoon. The light is beautiful, the roads are quieter, and you get a calm start.</p>
      <p><strong>Check in, unpack, breathe.</strong> Make tea or coffee, step outside for a few minutes, and set the weekend pace.</p>
      <p><strong>Casual dinner.</strong> Pick a relaxed spot in the village or order in. Keep it simple on night one so you wake up rested.</p>
      <p><em>Trip tip:</em> Dullstroom evenings can be cool even in summer. Pack a warm layer and comfortable shoes.</p>
      
      <h3>Saturday Morning: Trout and Coffee</h3>
      <p><strong>Early start for fly fishing.</strong> Arrange a local permit or day pass in advance. If you are new to fly fishing, book a short guiding session. Two to three hours is enough to learn casting basics and try a few patterns.</p>
      <p><strong>Coffee and breakfast reward.</strong> After the water, choose a village café for a hearty breakfast. Slow down and enjoy it. This is part of the Dullstroom rhythm.</p>
      <p><em>Photograph moment:</em> Capture the reflection on still water in the early light, then a flat white with steam rising.</p>
      
      <h3>Saturday Late Morning: Gentle Walk or Birds of Prey Stop</h3>
      <p><strong>Option A: Easy loop walk.</strong> Pick a short, scenic path near town. You want fresh air without turning the day into a workout.</p>
      <p><strong>Option B: Birds of prey experience.</strong> Educational, family-friendly, and great in mixed weather.</p>
      <p><em>If you are staying at The Browns:</em> Ask the team for a printed mini-map and a shortlist of easy routes that match your mobility and time.</p>
      
      <h3>Saturday Afternoon: Slow Lunch, Slow Browsing</h3>
      <p><strong>Unhurried lunch.</strong> Choose somewhere with a fireplace in winter or garden seating in summer.</p>
      <p><strong>Browse local shops and galleries.</strong> Look for small makers and quality goods. Pick up something local for home.</p>
      <p><strong>Reset:</strong> Head back to your suite for an hour. Read by the fire, nap, or take a hot shower.</p>
      
      <h3>Saturday Evening: Special Dinner</h3>
      <p>Make this your dress-up night. Reserve a dinner that suits your style, from modern plates to classic comfort food. If you want a quiet night in, choose a generous takeaway and enjoy it at your suite with a board game or a good film.</p>
      <p><strong>Fireside finish.</strong> Dullstroom is at its best when you slow down. End the night with conversation and a warm drink.</p>
      
      <h3>Sunday Morning: Pancakes, Markets, and Last Views</h3>
      <p><strong>Easy breakfast or pancakes.</strong> Keep it light if you plan a short walk afterward.</p>
      <p><strong>Short drive to a viewpoint or dam.</strong> Ten to fifteen minutes in the car can deliver a perfect farewell scene. Take a few photos for the album.</p>
      <p><strong>Check out by late morning.</strong> If you have time, add one last coffee stop before the road home.</p>
      
      <h3>Practical Planning Notes</h3>
      <p><strong>Packing list:</strong> warm layer, comfortable shoes, beanie in winter, sunscreen, a reusable water bottle, a compact rain jacket, and a small daypack. If you plan to fish, confirm gear rentals or bring your kit.</p>
      <p><strong>Weather mindset:</strong> mornings are usually crisp, afternoons are often mild. Plan layers rather than single heavy items.</p>
      <p><strong>Driving:</strong> allow a little buffer on the way in and out. You will enjoy the trip more if you are not clock-watching.</p>
      
      <h3>Where to Stay</h3>
      <p>A good base changes the entire feel of your weekend. The Browns' Luxury Guest & Cottage Suites give you space, privacy, quality bedding, strong showers, and fireplaces for that classic Dullstroom mood. Parking is easy and you are close to the village. If you travel as a couple, choose a Luxury Suite for extra comfort. For families or small groups, the Cottage Suites work well with flexible sleeping arrangements.</p>
      
      <h3>Frequently Asked Questions</h3>
      <p><strong>Is Dullstroom only for fly fishers?</strong> Not at all. The area suits slow travel, reading by the fire, easy walks, birding, spa time, and relaxed meals.</p>
      <p><strong>Do I need a 4×4?</strong> Regular vehicles are fine for the village and most nearby spots.</p>
      <p><strong>What about winter?</strong> Cool mornings, clear days, and fireside evenings. Pack layers and enjoy the atmosphere.</p>
      
      <p>Ready to plan your weekend? Reserve your stay at The Browns' Luxury Guest & Cottage Suites and use this itinerary as your easy blueprint.</p>
    `,
    category: "Activities",
    author: "The Browns Team",
    authorBio: "Local experts passionate about showcasing the best of Dullstroom and the Mpumalanga highlands.",
    date: "March 20, 2024",
    readTime: "6 min read",
    image: "/images/blog/48-hour-dullstroom-itinerary.jpg",
    keywords: ["Dullstroom itinerary", "weekend getaway", "48-hour Dullstroom", "Dullstroom travel guide", "highland weekend", "fly fishing weekend", "Dullstroom activities", "weekend in Dullstroom"],
    metaDescription: "Complete 48-hour Dullstroom weekend itinerary featuring fly fishing, hiking, dining, and fireside relaxation. Perfect guide for your highland getaway at The Browns.",
    featured: true,
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