import Link from "next/link";

const basePath = process.env.BASE_PATH ?? "/dg-wildrobot";
const videoFile = "video/update-march.mp4";

const milestones = [
  {
    date: "March 13, 2026",
    title: "Bring Your Robot (Done or Not)",
    detail:
      "Bring what you have, even if it is still in progress. We will give feedback and begin motion programming in class.",
  },
  {
    date: "March 27, 2026",
    title: "Wild Robot Showcase",
    detail:
      "Robots perform on a moving platform. Every design is unique and every robot has a personality.",
  },
];

const essentials = [
  "Cardboard (boxes, cereal boxes, shoe boxes)",
  "Tape (masking, packing, duct, or painter tape)",
  "Aluminum foil or paper for texture",
  "Markers, crayons, or paint",
];

const optionalMaterials = [
  "Bottle caps, lids, buttons, or straws",
  "Cardboard tubes or egg cartons",
  "Thread, toothpicks, popsicle sticks, or old markers",
  "LEGO, DUPLO, Tinkertoys, or pieces from other toy sets you already have at home",
  "Pipe cleaners, twist ties, or rubber bands",
  "Fabric scraps, stickers, or colored tape",
];

const learningPath = [
  "IMAGINE",
  "REFINE",
  "MIRROR WITH AI",
  "BUILD AT HOME",
  "ROBOT SHOWCASE",
];

const inspirationExamples = [
  {
    src: "robot-1.jpeg",
    title: "Homemade Example 1",
    detail: "A robot built from simple home and recycled materials. Wheels are made from cardboard and old tinkertoys. The eyes are attached to the plastic food container using flexible pipe cleaners.",
  },
  {
    src: "robot-2.jpeg",
    title: "Homemade Example 2",
    detail: "Different shapes and small details can make a robot feel unique without needing expensive parts. The robot is built from carboard. It has old CDs for wheels and a smiley face in permanent marker.",
  },
  {
    src: "robot-3.jpeg",
    title: "Mindstorms Platform",
    detail: "This is a full robotics platform example. On such a platform you build by following the instructions. Here, you get to determine how your robot is put together. We will learn how to program for motion in another activity.",
  },
  {
    src: "robot-potato.jpeg",
    title: "Character Inspiration",
    detail: "This is a Mr. Potato Head style example. You get to mix and match features to create a robot character with your own style. Maybe you have a favorite toy you want to incorporate or use for inspiration?",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Dunrae Gardens Grade 4 · Wild Robot · Build at Home</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--wild-bark)] sm:text-5xl">
          Dunrae Gardens Wild Robot Build Hub
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Students are moving from imagining to creating as designers and young engineers.
          The goal is to build the personality of their robot, not to copy their drawing designs exactly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/sessions/home-build" className="btn btn-rust">
            Student Build Guide
          </Link>
          <a href="#video" className="btn btn-secondary">
            Video Update
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {milestones.map((milestone) => (
          <article key={milestone.date} className="panel p-5">
            <span className="milestone-date">{milestone.date}</span>
            <h2 className="mt-3 text-xl font-black text-[var(--wild-bark)]">{milestone.title}</h2>
            <p className="mt-2 text-base font-semibold leading-relaxed">{milestone.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">STEAM Learning Path</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Students have already imagined, sketched, refined, and used AI as a mirror for their ideas.
          Home build time is where that design becomes a physical robot with character.
        </p>
        <div className="learning-path mt-5" aria-label="STEAM Learning Path">
          {learningPath.map((step, index) => (
            <span key={step} className="learning-path-item">
              <span className="learning-path-step">{step}</span>
              {index < learningPath.length - 1 ? (
                <span className="learning-path-arrow" aria-hidden="true">
                  {"\u2192"}
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="panel p-6">
          <h2 className="font-display text-3xl text-[var(--wild-bark)]">No Purchase Required</h2>
          <p className="mt-3 text-base font-semibold">
            Families should not need to buy anything. Start with what is already at home.
          </p>
          <h3 className="mt-4 text-base font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
            Some Essentials
          </h3>
          <ul className="checklist mt-2 space-y-2 text-base font-semibold">
            {essentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-5 text-base font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
            Optional Add-Ons
          </h3>
          <ul className="checklist mt-2 space-y-2 text-base font-semibold">
            {optionalMaterials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel p-6">
          <h2 className="font-display text-3xl text-[var(--wild-bark)]">Build Goals</h2>
          <ul className="checklist mt-3 space-y-2 text-base font-semibold">
            <li>Capture the spirit and personality of your robot.</li>
            <li>Do not worry about exact reproduction.</li>
            <li>Bring your robot on March 13 even if unfinished.</li>
            <li>Use feedback day to strengthen the build and prepare movement.</li>
          </ul>
          <Link href="/sessions/home-build" className="btn btn-rust mt-5">
            Student Build Guide
          </Link>

          <div className="mt-6 border-2 border-[var(--wild-bark)] bg-[#fff6e0] p-4">
            <h3 className="text-base font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
              Questions
            </h3>
            <p className="mt-2 text-base font-semibold leading-relaxed">
              Any questions can be sent through Ms. Melinda.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-8 panel p-5">
        <h2 className="font-display text-2xl text-[var(--wild-bark)]">Try the Wild Robot App (Optional)</h2>
        <p className="mt-2 text-base font-semibold leading-relaxed">
          If you would like to reimagine your robot again, the Wild Robot app will be available for the month of March.
        </p>
        <a
          href="https://wild-robots-dg-grade-4-1037539368638.us-west1.run.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary mt-3"
        >
          Open Wild Robot App
        </a>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">Examples for Inspiration</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          These examples are here to spark ideas. 
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {inspirationExamples.map((example) => (
            <figure key={example.src} className="border-2 border-[var(--wild-bark)] bg-[#fff8e8] p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/images/${example.src}`}
                alt={example.title}
                className="h-auto w-full border-2 border-[var(--wild-bark)]"
              />
              <figcaption className="mt-2">
                <p className="text-sm font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
                  {example.title}
                </p>
                <p className="mt-1 text-base font-semibold leading-relaxed">{example.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="video" className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">Video Update</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          This video quickly recaps what students already accomplished, shows a few robot examples,
          and outlines how the goal is creativity and developing STEAM skills, not perfection.
        </p>
        <div className="mt-4">
          <video
            controls
            preload="metadata"
            className="w-full border-2 border-[var(--wild-bark)] bg-black"
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-3 text-sm font-semibold leading-relaxed">
            If the video does not load, open it directly: <a href={videoFile} className="underline">video link</a>
          </p>
        </div>
      </section>
    </main>
  );
}
