import re

file_path = 'src/data/opportunities.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add formType to existing items based on categorySlug
def repl(match):
    category = match.group(1)
    if 'internships' in category: form_type = 'internship'
    elif 'jobs' in category: form_type = 'job'
    elif 'campus-ambassador' in category: form_type = 'ambassador'
    elif 'volunteering' in category: form_type = 'volunteer'
    elif 'talent-showcase' in category: form_type = 'talent'
    else: form_type = 'standard'
    
    return f'    categorySlug: "{category}",\n    formType: "{form_type}",'

content = re.sub(r'    categorySlug: "(.*?)",', repl, content)

new_talents = '''
  {
    id: "opp-talent-singing",
    title: "Singing Showcase",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your singing abilities, including playback-style, classical, acoustic, indie, or devotional.",
    fullDescription: "Take the stage and let your voice be heard! We are looking for talented singers across all genres—playback, classical, acoustic, indie, and devotional. Whether you perform solo or in a group, this is your chance to shine in front of a massive student audience.",
    responsibilities: ["Perform live at SS campus events", "Submit your best vocal performance links for online featuring"],
    requirements: ["Passion for singing", "Willingness to perform on stage"],
    perks: ["Live campus gig opportunities", "Featured on SS social media"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-dancing",
    title: "Dancing Showcase",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your dance moves in classical, western, hip-hop, or contemporary styles.",
    fullDescription: "Bring your energy to the dance floor! We invite solo dancers and dance crews to showcase their talent in styles ranging from classical to hip-hop. Top performers get a chance to headline our annual events.",
    responsibilities: ["Choreograph and perform at SS events"],
    requirements: ["Any dance style", "Solo or group"],
    perks: ["Stage exposure", "Networking with other creative students"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-comedy",
    title: "Stand-up Comedy",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Bring the laughs with original comedy, observational humour, and storytelling.",
    fullDescription: "Got jokes? We are looking for the funniest students to perform stand-up comedy, observational humour, and hilarious storytelling. Perfect your set and make the crowd roar at our upcoming open mics and fests.",
    responsibilities: ["Perform 5-10 minute original comedy sets"],
    requirements: ["Original content", "Appropriate for student community"],
    perks: ["Open mic spots", "Audience feedback"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-anchoring",
    title: "Anchoring & Hosting",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Host and MC for massive student events and live online sessions.",
    fullDescription: "Be the voice of SS events! We need confident, energetic anchors and hosts for our upcoming live sessions, hackathons, and cultural fests. If you can command a crowd, this is for you.",
    responsibilities: ["Host live events", "Keep the audience engaged"],
    requirements: ["Strong public speaking skills", "Charisma and stage presence"],
    perks: ["Host high-profile events", "Build your public speaking portfolio"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-acting",
    title: "Acting & Drama",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Participate in skits, short films, and dramatic performances.",
    fullDescription: "Calling all actors! Whether you love stage acting, street plays (nukkad natak), or starring in short films, SS provides opportunities to act in student productions and live stage events.",
    responsibilities: ["Act in student plays and short films", "Attend rehearsals"],
    requirements: ["Acting skills", "Commitment to project timelines"],
    perks: ["Feature in SS media productions", "Stage acting experience"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-music",
    title: "Music & Instruments",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Play your favorite instruments solo or join the SS band.",
    fullDescription: "Are you a skilled instrumentalist? Play the guitar, keyboard, drums, or any other instrument? Join our talent roster to perform solo instrumentals or become part of the official SS student band.",
    responsibilities: ["Perform instrumental covers", "Collaborate with singers for live events"],
    requirements: ["Proficiency in at least one musical instrument"],
    perks: ["Opportunity to join SS Band", "Live performances"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-photography",
    title: "Photography & Videography",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Showcase your visual storytelling through stunning photos and videos.",
    fullDescription: "Capture the world through your lens! Submit your photography portfolios or short video projects. Top visual artists will get featured on SS channels and invited to cover major events as official media partners.",
    responsibilities: ["Submit high-quality photos/videos", "Cover SS events when invited"],
    requirements: ["DSLR or good smartphone camera skills", "Visual storytelling ability"],
    perks: ["Feature in SS galleries", "Official media passes for events"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-art",
    title: "Art, Design & Creative Work",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Display your sketches, digital art, paintings, and creative designs.",
    fullDescription: "Calling all visual artists! Whether you sketch, paint, create digital illustrations, or design graphics, submit your artwork to be featured in our virtual and physical student galleries.",
    responsibilities: ["Submit original artwork for galleries"],
    requirements: ["Original artwork only"],
    perks: ["Digital gallery features", "Merchandise design opportunities"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  },
  {
    id: "opp-talent-writing",
    title: "Writing & Poetry",
    category: "Talent Showcase",
    categorySlug: "talent-showcase",
    formType: "talent",
    type: "Talent",
    shortDescription: "Share your poems, short stories, spoken word, and creative writing.",
    fullDescription: "Express yourself through words. Submit your poems, spoken word pieces, essays, and short stories. Selected writers will be published on the SS blog and invited to perform at spoken word events.",
    responsibilities: ["Submit original written or spoken word pieces"],
    requirements: ["Strong creative writing skills", "Original content"],
    perks: ["Published on SS blog", "Spoken word stage opportunities"],
    duration: "Open All Year",
    location: "Pan-India & Online",
    isRemote: true,
    deadline: "Open All Year",
    status: "Open",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    isSampleData: true
  }
'''

content = content.replace('];', new_talents + '\n];')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated opportunities.ts')
