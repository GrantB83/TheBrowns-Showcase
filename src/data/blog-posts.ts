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
    excerpt: "Planning a Dullstroom fishing weekend? Here is a clean, fact-checked shortlist of places that consistently deliver for fly anglers, with access notes and venue details.",
    content: `
      <h2>Planning a Dullstroom Fishing Weekend?</h2>
      <p>Here is a clean, fact-checked shortlist of places that consistently deliver for fly anglers. I have included access notes so you know whether a venue welcomes day visitors or is only open to overnight guests.</p>
      
      <p>Staying at The Browns' Luxury Guest & Cottage Suites puts you close to the village and a short drive from most waters. Book an entire house for self-catering or choose a suite-only stay with a beverage station for easy early-morning coffees before you hit the water.</p>
      
      <h3>1) Dullstroom on the Dam Town Dams (public waters with day permits)</h3>
      <p>The two town dams are the only public fly-fishing waters inside Dullstroom. Buy a day permit at the gate, then choose between the Upper Dam and the Lower Dam. The Lower Dam is catch-and-release only and both dams are fly fishing only. Rod hire and weekend permits are available on site.</p>
      
      <p><strong>Good to know:</strong></p>
      <ul>
        <li>Day permits sold at the main gate and the Oak Lane gate</li>
        <li>No bait or spinning is allowed. Non-powered craft are permitted for a small fee</li>
      </ul>
      
      <h3>2) Dunkeld Country & Equestrian Estate (large stillwaters; day visitors accepted)</h3>
      <p>Dunkeld manages an extensive network of stocked stillwaters against the Steenkampsberg. Day visitor fishing permits, rod hire, and casting lessons are available, and there is an optional trophy dam upgrade.</p>
      
      <p><strong>Good to know:</strong></p>
      <ul>
        <li>More than twenty dams across the estate</li>
        <li>Day visitor permits, rod hire, and lessons are published by the estate's activity desk</li>
      </ul>
      
      <h3>3) Elandskloof Trout Farm (multiple dams; day visitors accepted)</h3>
      <p>A well-known venue a short drive from town. Expect several stocked dams of varying size, float-tube friendly water, and clear day-visitor rules with per-rod permits.</p>
      
      <p><strong>Good to know:</strong></p>
      <ul>
        <li>Seven dams on the property and float tubes are allowed</li>
      </ul>
      
      <h3>4) Walkersons Private Estate (hotel guests and homeowners only)</h3>
      <p>Walkersons offers dam and river fishing on a private estate. Access is restricted to hotel guests and estate homeowners. The river section closes annually for spawning from 1 June to 31 August and a special river license applies. This venue is not open for general day visitors.</p>
      
      <p><strong>Good to know:</strong></p>
      <ul>
        <li>Carry estate permits while fishing and observe the angler limits per house</li>
      </ul>
      
      <h3>5) Willow Creek Trout & Nature Reserve (lodge guests; check day access directly)</h3>
      <p>A lodge venue in the wider Dullstroom area with four stocked dams and a stretch of natural river. It is primarily a stay-over destination. Contact the lodge to confirm whether day access is available during your dates.</p>
      
      <h3>When to go</h3>
      <p>Winter into early spring brings crisp mornings and clear water that rewards careful presentation. Local operators report productive fishing through much of the year when conditions are managed well. Always check recent water updates when you arrive in town.</p>
      
      <h3>Permits, gear and etiquette</h3>
      
      <h4>Permits</h4>
      <p>Public waters and most private venues require a day permit. Buy at the gate or reception as posted by each venue. Some private waters are limited to overnight guests.</p>
      
      <h4>Hire and lessons</h4>
      <p>Rod hire and casting lessons are available at several venues, including the town dams and Dunkeld.</p>
      
      <h4>On the water</h4>
      <ul>
        <li>Respect bag limits and catch-and-release rules per water</li>
        <li>Use barbless hooks where required and keep fish wet during release</li>
        <li>Give other anglers space, especially on river beats noted by the estate</li>
      </ul>
      
      <h3>Simple 48-hour plan for anglers</h3>
      
      <h4>Friday</h4>
      <p>Arrive by late afternoon, collect any permits for Saturday, and settle in at The Browns. Make an early night of it.</p>
      
      <h4>Saturday</h4>
      <p>Town Dams at first light for a warm-up session. Late breakfast in the village. Afternoon session at Dunkeld or Elandskloof. Early dinner and fly-box tweaks for Sunday.</p>
      
      <h4>Sunday</h4>
      <p>Choose a second venue that suits the conditions. Return to The Browns for checkout and a final coffee before the road home.</p>
      
      <h3>Where to Stay</h3>
      <p>The Browns' Luxury Guest & Cottage Suites are close to the village and a convenient base for fishing weekends.</p>
      <ul>
        <li>Whole-house self-catering is available when you book an entire house</li>
        <li>Suite-only stays include a beverage station with minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, and milk</li>
      </ul>
      <p>Check live Rates & Availability and match your dates to the right stay at The Browns.</p>
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
    excerpt: "Dullstroom & nearby: Belfast, Lydenburg (Mashishing), Ohrigstad, Machadodorp (eNtokozweni), Sabie, Graskop, Pilgrim's Rest. Hand-picked upcoming events within easy reach of Dullstroom—perfect for building a weekend around your stay.",
    content: `
      <h2>Dullstroom & Nearby: Event Planning Made Easy</h2>
      <p><strong>Dullstroom & nearby:</strong> Belfast, Lydenburg (Mashishing), Ohrigstad, Machadodorp (eNtokozweni), Sabie, Graskop, Pilgrim's Rest<br>
      <strong>Last updated:</strong> 17 August 2025</p>
      
      <p>Planning a trip to the Highlands Meander? Here's a hand-picked list of upcoming events within easy reach of Dullstroom—perfect for building a weekend around your stay.</p>
      
      <p>Base yourself at The Browns' Luxury Guest & Cottage Suites in Dullstroom. Book an entire house for self-catering, or go suite-only (no cooking) with a beverage station: minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water and milk.</p>
      
      <h3>What's Still to Come in 2025</h3>
      
      <h4>Dullstroom Scenic Altitude 3-in-1 (Road Run) — Dullstroom</h4>
      <p><strong>Saturday, 30 August 2025</strong> · 21.1 km, 10 km, ±4.5 km at Highland Gate Golf & Trout Estate. An crisp high-altitude run on rolling country roads—great excuse for a wintery weekend in town.</p>
      
      <h4>Graskop Heritage Carnival — Graskop</h4>
      <p><strong>5–7 September 2025</strong> · A three-day community celebration with live music, food stalls, parade and family activities.</p>
      
      <h4>Mashishing Colour Festival — Lydenburg (Mashishing)</h4>
      <p><strong>Saturday, 6 September 2025</strong> · A bright, family-friendly colour-powder day with music and kids' activities in Mashishing.</p>
      
      <h4>Dullstroom Village Fly-Fishing Festival — Dullstroom</h4>
      <p><strong>23–25 October 2025</strong> · Multi-day stillwater fly-fishing across prime private waters around Dullstroom; team entry format. Book accommodation early.</p>
      
      <h4>South African National Gold Panning Championships — Pilgrim's Rest</h4>
      <p><strong>8–12 October 2025</strong> · The historic gold-rush town hosts SA's national champs—spectator-friendly and uniquely Lowveld.</p>
      
      <h4>Africa Brew (10th Anniversary) — Sabie</h4>
      <p><strong>7–9 November 2025</strong> · A traveling craft-beer festival, this year hosted by Sabie Brewing Company—expect tastings, demos and brewer meet-ups.</p>
      
      <h3>Recently Concluded—But Annual Staples to Watch for 2026</h3>
      <p>These ran earlier this year and typically return around the same time next year. Pencil them in and check for date releases when you plan.</p>
      
      <ul>
        <li><strong>Dullstroom Winter Festival / "Christmas in July"</strong> — A town-wide series of July weekends with live music, food and family events (11–26 July 2025). Expect similar mid-July timing in 2026.</li>
        <li><strong>Sabie Tube Race</strong> — Big community river float weekend (7–8 Feb 2025). Watch for early-Feb dates.</li>
        <li><strong>Sabie Classic (MTB)</strong> — One-day mountain-bike classic (26 Apr 2025). Traditionally late April.</li>
        <li><strong>My Body My Space Public Arts Festival</strong> — Machadodorp (eNtokozweni) — Street-to-stage public arts across Human Rights Month (10th edition ran in March 2025). Look for March 2026 announcements.</li>
        <li><strong>Mac Mac Ultra (Trail Running)</strong> — Sabie / Pilgrim's Rest — Next confirmed edition 1–5 July 2026, with race admin across Sabie/Pilgrim's Rest.</li>
      </ul>
      
      <h3>How to Plan Your Weekend (Dullstroom-First)</h3>
      <p><strong>Anchor the trip around one event.</strong> Add a second local activity (fly-fishing lesson, whisky tasting, glass-blowing, or a short hike) so non-participants have fun too.</p>
      
      <p><strong>Book accommodation first.</strong> Event weekends fill up fast. At The Browns:</p>
      <ul>
        <li>Whole-house self-catering when you book an entire house</li>
        <li>Suite-only stays include a beverage station (minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, milk)</li>
      </ul>
      
      <p><strong>Driving times (approx.) from Dullstroom:</strong> Sabie (±1h45), Graskop (±2h10), Pilgrim's Rest (±2h20), Lydenburg/Mashishing (±1h), Belfast (±30 min), Machadodorp/eNtokozweni (±40 min). Plan extra time on event days.</p>
      
      <p><strong>Pack for altitude.</strong> Even in spring, early mornings are chilly; layers and a windbreaker help.</p>
      
      <h3>Stay at The Browns (Dullstroom)</h3>
      <p>The Browns' Luxury Guest & Cottage Suites are close to the village and make getting to regional events simple.</p>
      <ul>
        <li>Whole-house self-catering available only when booking an entire house</li>
        <li>Suite-only stays include a beverage station (minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, milk)</li>
      </ul>
      <p>Check live Rates & Availability and match your dates to the right stay at The Browns.</p>
    `,
    category: "Events",
    author: "The Browns Team",
    date: "August 17, 2025",
    readTime: "6 min read",
    image: "/images/blog/mpumalanga-events.jpg",
    keywords: ["Mpumalanga events 2025", "Dullstroom festivals", "Highland Meander events", "regional festivals", "event accommodation"],
    metaDescription: "Upcoming events and festivals in Mpumalanga 2025. From Dullstroom fly-fishing festivals to regional celebrations in Sabie, Graskop, and Pilgrim's Rest.",
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
    excerpt: "Slow mornings, crisp highland air, and small-batch flavours — Dullstroom is made for eating well at an easy pace. Your insider guide to local producers, tastings, and foodie experiences.",
    content: `
      <h2>A Foodie's Guide to Highland Flavours</h2>
      <p><strong>Last updated:</strong> 17 August 2025</p>
      
      <p>Slow mornings, crisp highland air, and small-batch flavours — Dullstroom is made for eating well at an easy pace. Use this insider guide to plan a foodie weekend built around coffee, tastings, and proudly local producers in town and just down the road.</p>
      
      <p>Base yourself at The Browns' Luxury Guest & Cottage Suites in Dullstroom. Book an entire house for self-catering, or choose a suite-only stay with a beverage station (minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, milk) for effortless early starts.</p>
      
      <h3>Coffee to Start the Day</h3>
      
      <h4>Beans About Coffee (Dullstroom Espresso Bar, Naledi Drive)</h4>
      <p>Dullstroom's original roastery brand pours freshly roasted coffees at its espresso bar on the main drag. Grab a bag for your room and enjoy that first cup before the village wakes.</p>
      
      <p><strong>Handy tip:</strong> weekends can be busy. If you're heading out early to fish or hike, get your take-away before peak breakfast time.</p>
      
      <h3>Cheese, Pasta and Pantry at 84 on Main</h3>
      
      <h4>Bergen Cheese (84 Naledi Drive)</h4>
      <p>A local favourite for tasting and take-home wedges — from cheddars to softer styles. Perfect for building a late-afternoon snack board.</p>
      
      <h4>Pasta Dullicious (same centre)</h4>
      <p>Handmade, small-batch pasta made in Dullstroom, plus sauces and specialty pantry goods to match.</p>
      
      <h4>Dullstroom Cultour Co. Wine Club (same centre)</h4>
      <p>A cosy spot for guided wine tastings with cheese boards inspired by Bergen's range. Book ahead on busy weekends.</p>
      
      <h4>Infinite Tea (same centre)</h4>
      <p>Bubble tea and refreshing sips while you browse the centre.</p>
      
      <h3>Tastings with a Local Twist</h3>
      
      <h4>Wild About Whisky (Naledi Drive)</h4>
      <p>One of South Africa's most renowned whisky experiences, with curated flights across whisky — and increasingly gin, agave and more. Sessions are relaxed, informative and easy to book.</p>
      
      <h4>Dullstroom Gin — Gin Emporium (Ivy Lane, 65 Naledi Drive)</h4>
      <p>A small, characterful tasting room pouring craft gins made for highland evenings. Expect guided tastings and a shelf of infusions and signature serves.</p>
      
      <h3>Chocolate, Sweets and Family Treats</h3>
      
      <h4>Shautany Chocolatiers (Ivy Lane, Naledi Drive)</h4>
      <p>Handmade Belgian-style chocolates, truffles and bars — great gifts or dessert for the cottage table.</p>
      
      <h4>Udderlicious Milkshake Bar (Old Transvaal precinct)</h4>
      <p>Double-thick, fun flavours and kid-friendly energy. A light-hearted stop after a stroll down Naledi Drive.</p>
      
      <h3>Classic Farm-Stall Stop (Nearby)</h3>
      
      <h4>Milly's on the N4 (Machadodorp/eNtokozweni)</h4>
      <p>A regional institution en route to or from Dullstroom. Stock up on hot- or cold-smoked trout, legendary trout pies, pâtés, and pantry fillers from the on-site bakery.</p>
      
      <h3>A Microbrewery with a View (Easy Side Trip)</h3>
      
      <h4>Hops Hollow Country House & Brew Pub (Long Tom Pass, near Lydenburg/Mashishing)</h4>
      <p>Small-batch beers poured at the highest point of the pass, with hearty pub plates and big escarpment views. Ideal for a leisurely lunch on your way in or out.</p>
      
      <h3>Local Trout: What to Buy and Where</h3>
      <p>Dullstroom sits in trout country, with producers in the wider area supplying smoked ribbons, fillets and pâtés to shops and restaurants. For a sure-thing takeaway, pick up smoked trout and pies at Milly's; in town, look for stocked fridges in main-road delis and bottle shops, especially on weekends.</p>
      
      <h3>Build-Your-Own Dullstroom Tasting Board (10-Minute Plan)</h3>
      <ul>
        <li><strong>Cheese:</strong> two contrasting wedges from Bergen Cheese</li>
        <li><strong>Carbs & crunch:</strong> fresh baguette or crackers from a village bakery/deli</li>
        <li><strong>Protein:</strong> smoked trout from Milly's for ribbons or pâté</li>
        <li><strong>Something sweet:</strong> a small box from Shautany Chocolatiers</li>
        <li><strong>Sip:</strong> book a Wild About Whisky or Dullstroom Gin tasting before dinner, or take a recommended bottle from the Dullstroom Cultour Co. Wine Club back to your suite</li>
      </ul>
      
      <h3>Practical Planning</h3>
      <ul>
        <li>Book tastings ahead for whisky, gin and wine on peak weekends</li>
        <li>Pack a cooler bag if you'll be buying chilled goods and continuing to wander</li>
        <li>Self-catering vs eating out: if you've booked a whole house at The Browns, plan one relaxed dinner in with fresh pasta and a salad; for suite-only stays, keep meals simple in town and use your beverage station for early coffees and night-caps</li>
        <li>Seasonal hours: many spots adjust trading times in winter or on Sundays — check same-day hours before you drive</li>
      </ul>
      
      <h3>Where to Stay</h3>
      <p><strong>The Browns' Luxury Guest & Cottage Suites (Dullstroom)</strong></p>
      <ul>
        <li>Whole-house self-catering is available when you book an entire house</li>
        <li>Suite-only stays include a beverage station (minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, milk)</li>
      </ul>
      <p>Set your foodie base and check live Rates & Availability at The Browns — then eat, sip and explore at your own pace.</p>
    `,
    category: "Dining",
    author: "The Browns Team",
    date: "August 17, 2025",
    readTime: "8 min read",
    image: "/images/blog/dullstroom-food-scene.jpg",
    keywords: ["Dullstroom food scene", "artisanal producers", "whisky tasting", "local cheese", "gin tasting", "coffee roasters"],
    metaDescription: "Explore Dullstroom's artisanal food scene with this insider guide. From whisky tastings to local cheese makers, discover the best foodie experiences.",
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
  },
  {
    id: "7",
    slug: "where-to-stay-dullstroom-2025-guide",
    title: "Where to Stay in Dullstroom: 2025 Guide to Areas, Stays, and Trip Types",
    excerpt: "Planning a Highlands Meander break and wondering where to base yourself? This guide explains the main stay areas around Dullstroom, what each suits, and how to choose the right setup for your trip.",
    content: `
      <h2>Your Complete Dullstroom Accommodation Guide</h2>
      <p><strong>Last updated:</strong> 17 August 2025</p>
      
      <p>Planning a Highlands Meander break and wondering where to base yourself? This guide explains the main stay areas around Dullstroom, what each suits, and how to choose the right setup for your trip.</p>
      
      <p>Base yourself at The Browns' Luxury Guest & Cottage Suites in Dullstroom. Book an entire house for self-catering, or choose a suite-only stay with a beverage station only. Suites include a minibar fridge, Nespresso coffee, a tea selection, hot chocolate, still water and milk. Suites do not include cooking facilities.</p>
      
      <h3>Quick Picks: The Fast Way to Choose</h3>
      
      <h4>Couples who want fireplaces and easy dinners out</h4>
      <p>Stay close to the Dullstroom village for walking access to cafés, whisky tastings and shops. Choose suite-only at The Browns for relaxed mornings with in-room coffee.</p>
      
      <h4>Families or friends who want space and privacy</h4>
      <p>Pick a whole-house self-catering option. You will have living areas for board games, a proper kitchen, and an easy base for early starts.</p>
      
      <h4>Anglers and outdoor weekends</h4>
      <p>Village or near-town works best for quick permits, tackle shops and early coffees. Plan short drives to your chosen waters or walks.</p>
      
      <h4>Special occasions</h4>
      <p>Look at larger homes in the near-town countryside or private estates for extra privacy. Book dinners in the village and use the house for slow breakfasts.</p>
      
      <h3>The Main Stay Areas and Who They Suit</h3>
      
      <h4>1) Dullstroom Village</h4>
      <p>Walk to breakfast, coffee, shops and tastings. Ideal for couples, solo travellers and short stays. Parking is easy and you are minutes from the main road for day trips.</p>
      <p><strong>Good for:</strong> restaurant hopping, whisky tastings, light shopping, quick access to permits and guides.</p>
      <p><strong>Consider:</strong> it can be lively on peak weekends. Book early.</p>
      
      <h4>2) Near-town countryside</h4>
      <p>Smallholdings and lodges a short drive from the village give you quiet views and more space without being far from dinner plans.</p>
      <p><strong>Good for:</strong> families and groups who prefer space, braai areas and easy parking.</p>
      <p><strong>Consider:</strong> short gravel sections are common. Standard vehicles are fine with sensible driving.</p>
      
      <h4>3) Private estates around Dullstroom</h4>
      <p>Golf, trout and country estates within a short drive offer security, views and managed open spaces. Some estates have internal rules about visitor access to facilities. Always check what your booking includes.</p>
      <p><strong>Good for:</strong> special occasions, longer stays, golf weekends, focussed fishing trips.</p>
      <p><strong>Consider:</strong> plan driving times to and from the village for meals and supplies.</p>
      
      <h3>Accommodation Types Explained</h3>
      
      <h4>Whole-house self-catering</h4>
      <p>You book the entire house and get a kitchen, dining space and lounges. Perfect for families and groups who want flexible mealtimes and evenings in.</p>
      <p><strong>Pros:</strong> space, privacy, better value per person for groups, easy early starts.</p>
      <p><strong>Plan for:</strong> groceries on arrival and a simple menu.</p>
      
      <h4>Suite-only stays</h4>
      <p>You book a private suite with hotel-style convenience. At The Browns, suites include a beverage station only with a minibar fridge, Nespresso coffee, a tea selection, hot chocolate, still water and milk.</p>
      <p><strong>Pros:</strong> low-fuss mornings and nights, easy walking to restaurants, ideal for short stays.</p>
      <p><strong>Plan for:</strong> meals out or takeaways. No cooking in suites.</p>
      
      <h4>Country hotels and lodges</h4>
      <p>Some travellers like a full-service property. If you choose this route, confirm what is included in your rate and whether on-site fishing or activities require separate permits.</p>
      <p><strong>Pros:</strong> on-site dining and activities in one place.</p>
      <p><strong>Plan for:</strong> dinner reservations on peak weekends.</p>
      
      <h3>Price and Value Guide</h3>
      <p>Dullstroom has options across the spectrum. Think in bands rather than chasing a single price.</p>
      <ul>
        <li><strong>Budget:</strong> compact rooms with simple finishes, often further from the village</li>
        <li><strong>Mid-range:</strong> comfortable suites or cottages with thoughtful touches and parking</li>
        <li><strong>Premium:</strong> larger houses, private estates, or suites with standout design and extras</li>
      </ul>
      <p><strong>Tip:</strong> for groups, a whole house often brings the nightly cost per person down while upgrading comfort.</p>
      
      <h3>Trip Types with Sample Plans</h3>
      
      <h4>Couples weekender</h4>
      <p><strong>Stay:</strong> suite-only near the village.</p>
      <p><strong>Plan:</strong> Friday check-in and a relaxed dinner in town. Saturday coffee, gentle walk or fly-fishing lesson, slow lunch, whisky tasting, special dinner. Sunday pancakes and a viewpoint stop on your way home.</p>
      
      <h4>Family or friends getaway</h4>
      <p><strong>Stay:</strong> whole-house self-catering.</p>
      <p><strong>Plan:</strong> Friday stock-up and easy pasta night. Saturday early activity, late breakfast at home, browsing in town, braai or shared platter dinner. Sunday quick walk and checkout.</p>
      
      <h4>Anglers' escape</h4>
      <p><strong>Stay:</strong> village or near-town.</p>
      <p><strong>Plan:</strong> early permits and first light on the water, late breakfast, second session in the afternoon, fly box tweaks by the fire.</p>
      
      <h3>Practical Planning</h3>
      <ul>
        <li>Book accommodation first for school holidays, long weekends and major events</li>
        <li>Layer up year-round. Mornings are crisp and afternoons are often mild</li>
        <li>Driving is simple. Main routes are tarred. Some estate and farm roads are good gravel</li>
        <li>Dinner plans. Popular restaurants fill fast on weekends. Reserve earlier in the week</li>
        <li>Groceries. If you booked a whole house, bring basics and top up in town</li>
      </ul>
      
      <h3>Stay at The Browns in Dullstroom</h3>
      <p>The Browns' Luxury Guest & Cottage Suites give you two clear ways to stay:</p>
      <ul>
        <li>Whole-house self-catering when you book an entire house</li>
        <li>Suite-only stays with a beverage station only (minibar fridge, Nespresso coffee, tea selection, hot chocolate, still water, milk)</li>
      </ul>
      <p>Pick the setup that fits your trip and check live Rates & Availability to secure your dates.</p>
    `,
    category: "Accommodation",
    author: "The Browns Team",
    authorBio: "Local accommodation experts with insider knowledge of Dullstroom's best staying options and highland hospitality.",
    date: "August 17, 2025",
    readTime: "9 min read",
    image: "/images/blog/self-catering-luxury.jpg",
    keywords: ["Dullstroom accommodation 2025", "where to stay Dullstroom", "self-catering luxury", "suite accommodation", "Dullstroom areas guide"],
    metaDescription: "Complete 2025 guide to where to stay in Dullstroom. Compare areas, accommodation types, and find the perfect base for your Highland Meander getaway.",
    featured: false,
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