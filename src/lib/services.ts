import {
    Hammer,
    Droplets,
    Paintbrush,
    SprayCan,
    type LucideIcon,
} from "lucide-react"

export type ServiceSlug =
    | "handyman"
    | "gutter-cleaning"
    | "painting"
    | "pressure-washing"

export type SubService = {
    name: string
    description: string
}

export type ServiceFaq = {
    question: string
    answer: string
}

export type ServiceProcessStep = {
    title: string
    description: string
}

export type Service = {
    slug: ServiceSlug
    name: string
    shortName: string
    icon: LucideIcon
    tagline: string
    summary: string
    description: string
    keywords: string[]
    subServices: SubService[]
    process: ServiceProcessStep[]
    faqs: ServiceFaq[]
    extraNote?: string
}

export const services: Service[] = [
    {
        slug: "handyman",
        name: "Handyman Services",
        shortName: "Handyman",
        icon: Hammer,
        tagline: "Your to-do list, done right.",
        summary:
            "From sticky doors to busted drywall, we knock out the jobs you've been putting off — carefully, on time, and cleaned up after.",
        description:
            "Most homes have a running list: a fence picket that finally gave way, a ceiling fan still in the box, a fix that 'shouldn't take long.' We handle exactly that. One visit, one truck, one bill — honest work for the kind of jobs that don't quite need a specialist.",
        keywords: [
            "handyman Vernal UT",
            "home repair Roosevelt",
            "handyman services Uintah Basin",
        ],
        subServices: [
            {
                name: "Drywall & paint patches",
                description:
                    "Holes from old anchors, doorknob dings, hairline cracks. Patched, sanded, and feathered so it disappears.",
            },
            {
                name: "Fixture & furniture install",
                description:
                    "Light fixtures, ceiling fans, blinds, shelves, TV mounts, flat-pack assembly. We bring the level and the patience.",
            },
            {
                name: "Door & window adjustments",
                description:
                    "Sticky doors, drafty weatherstripping, broken handles, soft latches — small fixes that make a big difference.",
            },
            {
                name: "Fence & deck repair",
                description:
                    "Replace rotted boards, re-nail loose pickets, swap broken hardware, tighten gates that've had a long winter.",
            },
            {
                name: "Caulk & seal refresh",
                description:
                    "Tubs, sinks, exterior trim, window perimeters. Old caulk out, fresh bead in.",
            },
            {
                name: "Small carpentry",
                description:
                    "Trim, baseboard touch-ups, minor framing, shelving builds, exterior wood repair.",
            },
        ],
        process: [
            {
                title: "Tell us the list",
                description:
                    "Send a few photos or describe the jobs. We'll tell you which we can knock out in one visit.",
            },
            {
                title: "We give you a flat rate",
                description:
                    "No vague hourly numbers. You'll know what it costs before we pull into the driveway.",
            },
            {
                title: "We show up and finish it",
                description:
                    "On the day we said we'd come, we work until the list is done and the worksite is clean.",
            },
        ],
        faqs: [
            {
                question: "Is there a minimum charge?",
                answer: "Yes — we have a small minimum to make the trip worthwhile. For most folks it's covered by 2-3 small items on the list, so it pays to batch them up.",
            },
            {
                question: "Do you handle electrical or plumbing?",
                answer: "We handle straightforward swap-outs (faucets, fixtures, outlets, switches). For new circuits, panel work, or anything inside a wall that should be permitted, we'll point you to a licensed electrician or plumber.",
            },
            {
                question: "Do I need to be home?",
                answer: "Not necessarily. Plenty of folks leave a key or open the side gate and we send photos when we're done. Whatever's easy.",
            },
        ],
    },
    {
        slug: "gutter-cleaning",
        name: "Gutter Cleaning",
        shortName: "Gutter Cleaning",
        icon: Droplets,
        tagline: "Clear gutters, dry foundation, no surprises.",
        summary:
            "We pull every leaf, twig, and roof grit out of your gutters, flush the downspouts, and check for damage — before the next storm finds it for you.",
        description:
            "Clogged gutters are how small problems become expensive ones — ice dams, fascia rot, foundation pooling, basement leaks. We do it the slow, thorough way: clear by hand, flush with water, and inspect the entire run while we're up there.",
        keywords: [
            "gutter cleaning Vernal",
            "gutter cleaning Roosevelt UT",
            "Uintah Basin gutter service",
        ],
        subServices: [
            {
                name: "Full hand-clear & haul-away",
                description:
                    "Every length of gutter cleared by hand, debris bagged and hauled. We don't just blow it onto your lawn.",
            },
            {
                name: "Downspout flush",
                description:
                    "Each downspout flushed top-to-bottom and unclogged. We check the splash block or extension while we're at it.",
            },
            {
                name: "Roof debris sweep",
                description:
                    "While we're up there, we'll clear leaves and twigs off the roof valleys so they don't end up in the gutter next week.",
            },
            {
                name: "Inspection report",
                description:
                    "Photos of any sagging brackets, separated joints, fascia damage, or missing hardware so you know what's coming up.",
            },
            {
                name: "Minor repairs",
                description:
                    "Re-secure loose hangers, reseal small leaks, replace missing end caps. Most small fixes are included in the visit.",
            },
        ],
        process: [
            {
                title: "Walk the property",
                description:
                    "We size up access, ladder placement, and tree cover so we can quote it accurately.",
            },
            {
                title: "Clear, flush, inspect",
                description:
                    "Hand-clear every run, flush every downspout, photograph anything we find that needs attention.",
            },
            {
                title: "Leave it cleaner than we found it",
                description:
                    "Debris bagged, walkways and beds blown off, before/after photos sent.",
            },
        ],
        faqs: [
            {
                question: "How often should I have my gutters cleaned?",
                answer: "In the Basin, twice a year is the sweet spot — late spring after the cottonwoods drop, and late fall after the leaves come down. Homes with heavy tree cover need more.",
            },
            {
                question: "Do you handle two-story homes?",
                answer: "Yes. We have ladders and gear for two-story residential. We don't do commercial high-rise work.",
            },
            {
                question: "What if you find damage?",
                answer: "We send you photos and a plain-English description of what we'd recommend. No pressure — you decide whether we fix it now, later, or leave it alone.",
            },
        ],
    },
    {
        slug: "painting",
        name: "Painting",
        shortName: "Painting",
        icon: Paintbrush,
        tagline: "Prep matters more than the paint.",
        summary:
            "Interior, exterior, fences, decks. We prep like we mean it, mask like we live there, and use paint that holds up to Uintah Basin winters.",
        description:
            "A paint job is mostly prep — scraping, sanding, washing, masking, priming. That's where most jobs go wrong, and it's where we slow down. The actual painting is the easy part if you've done the rest right.",
        keywords: [
            "painter Vernal UT",
            "exterior painting Uintah Basin",
            "interior painting Roosevelt",
            "fence painting",
        ],
        subServices: [
            {
                name: "Interior painting",
                description:
                    "Walls, ceilings, trim, doors. Furniture moved or covered, floors masked, edges cut clean.",
            },
            {
                name: "Exterior painting",
                description:
                    "Siding, trim, soffits, fascia. We pressure-wash, scrape failing paint, prime bare spots, and use exterior paint rated for high-altitude UV.",
            },
            {
                name: "Fence painting & staining",
                description:
                    "Wood fences cleaned, sanded where needed, then stained or painted. We handle 4-rail, privacy, and split-rail.",
            },
            {
                name: "Deck staining & sealing",
                description:
                    "Deep-clean the deck, sand the rough spots, replace any popped fasteners, then stain and seal to protect the wood.",
            },
            {
                name: "Cabinet refresh",
                description:
                    "Doors removed, sanded, sprayed in a controlled environment, and re-hung. A fraction of the cost of replacement.",
            },
        ],
        process: [
            {
                title: "Walkthrough & color advice",
                description:
                    "We walk the project together, talk surfaces and finishes, and pull color samples if you want a second opinion.",
            },
            {
                title: "Prep, prep, prep",
                description:
                    "Wash, scrape, sand, fill, prime, mask. This is where the durability comes from.",
            },
            {
                title: "Paint and clean up",
                description:
                    "Two coats unless one is honestly enough. Drips and spatter cleaned the same day. Touch-up paint left labeled.",
            },
        ],
        faqs: [
            {
                question: "What paint brands do you use?",
                answer: "Sherwin-Williams and Benjamin Moore for most jobs. We'll use whatever you prefer if you have a brand loyalty — just no contractor-grade bargain paint.",
            },
            {
                question: "How long does an exterior job take?",
                answer: "A typical single-story home is 3-5 working days, weather dependent. We don't paint when it's about to rain or below 50 degrees.",
            },
            {
                question: "Do you guarantee the work?",
                answer: "Yes. If a properly-prepped surface fails within two years from a workmanship issue, we come back and fix it. Normal weathering and surface settling aren't covered.",
            },
        ],
    },
    {
        slug: "pressure-washing",
        name: "Pressure Washing",
        shortName: "Pressure Washing",
        icon: SprayCan,
        tagline: "Years of grime, gone in an afternoon.",
        summary:
            "Siding, driveways, decks, sidewalks, fences, trash cans, and soft-wash for roofs. The right pressure for each surface — nothing damaged, everything cleaner.",
        description:
            "Pressure washing isn't about blasting things hard. It's about matching the right pressure, water temperature, and detergent to each surface. We soft-wash siding and roofs with low pressure and the proper cleaners. We use higher pressure for concrete and pavers. The result is the same: it looks new.",
        keywords: [
            "pressure washing Vernal UT",
            "house washing Uintah Basin",
            "driveway cleaning Roosevelt",
            "trash can cleaning",
            "fence cleaning",
        ],
        subServices: [
            {
                name: "House siding (soft wash)",
                description:
                    "Vinyl, stucco, brick, and painted siding. Low-pressure soft wash with a biodegradable cleaner that kills mildew and algae at the root.",
            },
            {
                name: "Driveways & walkways",
                description:
                    "Concrete, pavers, and stamped surfaces. Years of oil, tire marks, and embedded grime lifted out with surface cleaners and degreaser.",
            },
            {
                name: "Decks & patios",
                description:
                    "Wood and composite decks cleaned at the right pressure to lift gray weathering without splintering boards.",
            },
            {
                name: "Sidewalks",
                description:
                    "Public-facing sidewalks and pathways cleaned to brighten the whole front of the property.",
            },
            {
                name: "Fences",
                description:
                    "Wood and vinyl fences — we pull off years of dust, mildew, and pollen so they look painted again. Pairs well with our staining service.",
            },
            {
                name: "Trash & recycling cans",
                description:
                    "Hot water, sanitizer, and a proper rinse. Drive-by service available on a schedule.",
            },
            {
                name: "Roof soft wash",
                description:
                    "Asphalt shingles cleaned with low-pressure soft wash and a proper cleaning solution — never blasted. Kills the algae streaks at the source.",
            },
        ],
        process: [
            {
                title: "Surface check",
                description:
                    "We identify each surface, note any chips, cracks, or sealant issues, and pick the right pressure and cleaner for each.",
            },
            {
                title: "Pre-treat & wash",
                description:
                    "Detergent first, then wash at the correct pressure. Plants and finishes nearby are rinsed and protected.",
            },
            {
                title: "Final rinse & walk-through",
                description:
                    "Final rinse, sweep down the area, and walk through together so you can see the difference.",
            },
        ],
        faqs: [
            {
                question: "Will pressure washing damage my siding or roof?",
                answer: "Not when it's done right. We use low-pressure soft washing on siding and roofs, with cleaners that do the actual work — not pressure. High pressure goes on concrete and brick, never on shingles.",
            },
            {
                question: "Do you serve commercial properties?",
                answer: "Yes — storefronts, parking lots, trash enclosures, and fleet washing. Call for a custom quote.",
            },
            {
                question: "How often should trash cans be cleaned?",
                answer: "Quarterly is plenty for most folks. Some neighbors put us on monthly through the summer.",
            },
        ],
        extraNote:
            "Commercial properties also welcome — call for a custom quote.",
    },
]

export const servicesBySlug: Record<ServiceSlug, Service> = services.reduce(
    (acc, s) => {
        acc[s.slug] = s
        return acc
    },
    {} as Record<ServiceSlug, Service>,
)

export function getService(slug: ServiceSlug): Service {
    return servicesBySlug[slug]
}
