import Link from "next/link";

const basePath = process.env.BASE_PATH ?? "/dg-wildrobot";

type SessionStep = {
  title: string;
  studentActions: string[];
  parentGuardianNotes: string[];
};

const sessionSteps: SessionStep[] = [
  {
    title: "Look Back at Your Robot Idea",
    studentActions: [
      "Get your sketch and AI reimagining (if you have it).",
      "Pick at least one feature that makes your robot special.",
      "You are going to build your robot from your design. Try to capture what makes it special and shows off its personality.",
    ],
    parentGuardianNotes: [
      "Invite the student to explain their choices before offering suggestions.",
      "Protect ownership. The student should make the design decisions when they are ready to build.",
    ],
  },
  {
    title: "Gather Home Materials",
    studentActions: [
      "Start with some essentials: cardboard (boxes, cereal boxes, shoe boxes), tape (masking, packing, duct, or painter tape), aluminum foil or paper for texture, and markers/crayons/paint.",
      "Optional add-ons: bottle caps, lids, buttons, straws, cardboard tubes, egg cartons, cans, old plastic food containers, thread, toothpicks, popsicle sticks, old markers, LEGO, DUPLO, Tinkertoys, other toy-set pieces, pipe cleaners, twist ties, rubber bands, fabric scraps, stickers, or colored tape.",
      "You can also use any other materials you think will help your design.",
      "Use what you already have at home first. No purchase is required.",
    ],
    parentGuardianNotes: [
      "Recycled materials are fully appropriate.",
      "Keep the process low pressure to support creativity and problem solving.",
    ],
  },
  {
    title: "Build Your Robot",
    studentActions: [
      "Start with a strong body shape that can stand up.",
      "Add any features that show your robot's personality.",
      "Test, adjust, and improve as you build.",
    ],
    parentGuardianNotes: [
      "Support setup and safety while keeping design decisions with the student.",
      "If hot glue is used, an adult should handle safety steps.",
    ],
  },
  {
    title: "Check the Engineering Specifications",
    studentActions: [
      "Place your robot on one regular sheet of paper (8.5 x 11 inches). It must fit.",
      "Make sure your robot stands on its own.",
      "Gently move it and check that it stays stable and does not fall over.",
      "Keep your robot body light: target 2 lbs (~900 g) or less.",
    ],
    parentGuardianNotes: [
      "The 2 lbs (~900 g) target is a practical estimate for reliable movement on the tracked classroom platform.",
      "If no scale is available, reduce heavy parts and keep weight low and centered.",
    ],
  },
  {
    title: "Get Ready for March 13",
    studentActions: [
      "Pack your robot so it can travel safely to class.",
      "Bring it even if it is not finished.",
      "Write one thing you like and one thing you want to improve.",
    ],
    parentGuardianNotes: [
      "March 13 is a progress checkpoint, not a final submission.",
      "Questions can be directed through Ms. Melinda.",
    ],
  },
];

const inspirationIdeas = [
  {
    title: "Body and Structure Ideas",
    items: [
      "Small boxes (cereal, tea, snack) and medium boxes (tissue, shoe box).",
      "Cardboard tubes for arms, legs, or sensor towers.",
      "Paper bags or folded cardboard panels for shells and add-on parts.",
      "LEGO, DUPLO, or Tinkertoy pieces can be used as strong add-on parts if they are attached securely.",
    ],
  },
  {
    title: "Surface and Personality Ideas",
    items: [
      "Aluminum foil for metallic texture.",
      "Paper or cardboard panels can show symbols, control displays, labels, or screens.",
      "Drawn features with markers/crayons/paint instead of tiny loose pieces.",
      "Use fabric scraps, felt, ribbon, or old clothing pieces to add a cape, scarf, patch, or uniform detail that matches your robot's personality.",
    ],
  },
  {
    title: "Motion and Mechanism-Inspired Ideas",
    items: [
      "Straws and yarn/thread as decorative cable pathways.",
      "Popsicle sticks or cardboard strips for hinges and joints.",
      "Tape-based tabs that can flex during testing and revisions.",
      "Keep heavier parts low on the body so your robot stays balanced when the platform moves.",
    ],
  },
  {
    title: "Spirit, Motion, and Showcase Ideas",
    items: [
      "Use your design notes: who is your robot, where is it, and what is it doing?",
      "Think about your robot's movement style (careful, bold, quick, circling). Add features that match that motion.",
      "Think of a one short sentence you can share in class. Example: My robot is Moss Scout, it helps by finding safe paths for animals, and it moves like a curious crab.",
    ],
  },
];

export default function HomeBuildSessionPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Student Guide · Build at Home</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--wild-bark)] sm:text-5xl">
          Wild Robot Home Build Session
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          This page is for you. Build your robot in your own style, show its personality,
          and bring it to class on March 13 even if it is still in progress.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Home Hub
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">Your Build Checklist</h2>
        <ul className="checklist mt-3 space-y-2 text-base font-semibold">
          <li>Focus on creativity, not perfection.</li>
          <li>Use materials that are already at home, and add optional extras that help your design.</li>
          <li>Bring your robot on March 13, complete or incomplete.</li>
          <li>Use feedback day to get ready for the March 27 showcase.</li>
        </ul>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">STEAM Engineering Specifications</h2>
        <ul className="checklist mt-3 space-y-2 text-base font-semibold">
          <li>Your robot must fit on one regular sheet of paper (8.5 x 11 inches / 21.6 x 27.9 cm).</li>
          <li>Your robot must stand on its own.</li>
          <li>Your robot must stay stable when moved and should not fall over.</li>
          <li>Target robot body weight: 2 lbs (~900 g) or less.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-6">
        {sessionSteps.map((step, index) => (
          <article key={step.title} className="session-step panel p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="step-pill">Step {index + 1}</span>
              <h2 className="text-2xl font-black text-[var(--wild-bark)]">{step.title}</h2>
            </div>
            <ul className="checklist mt-3 space-y-2 text-base font-semibold">
              {step.studentActions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
            {index === 0 ? (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <figure className="border-2 border-[var(--wild-bark)] bg-[#fff8e8] p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/images/reimagining/wild-robot-drawing.JPG`}
                    alt="Student wild robot drawing"
                    className="h-auto w-full border-2 border-[var(--wild-bark)]"
                  />
                  <figcaption className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
                    Original Drawing
                  </figcaption>
                </figure>
                <figure className="border-2 border-[var(--wild-bark)] bg-[#fff8e8] p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/images/reimagining/wild-robot-crab-reimagined.png`}
                    alt="Reimagined wild robot design"
                    className="h-auto w-full border-2 border-[var(--wild-bark)]"
                  />
                  <figcaption className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
                    Reimagined Robot
                  </figcaption>
                </figure>
              </div>
            ) : null}
            <details className="parent-notes mt-4">
              <summary>Parent or Guardian Notes</summary>
              <ul className="checklist mt-3 space-y-2 text-base font-semibold">
                {step.parentGuardianNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">Things to Consider</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Here are some extra ideas you can try but you get to decide what works best for your robot.
          Just make sure your robot still follows the STEAM size and weight requirements.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {inspirationIdeas.map((group) => (
            <article key={group.title} className="border-2 border-[var(--wild-bark)] bg-[#fff8e8] p-4">
              <h3 className="text-base font-black uppercase tracking-[0.08em] text-[var(--wild-bark)]">
                {group.title}
              </h3>
              <ul className="checklist mt-2 space-y-2 text-base font-semibold">
                {group.items.map((item, itemIndex) => {
                  const isShowcaseExample =
                    group.title === "Spirit, Motion, and Showcase Ideas" && itemIndex === 2;

                  if (isShowcaseExample) {
                    const [beforeExample, exampleText] = item.split("Example: ");

                    return (
                      <li key={item}>
                        {beforeExample}
                        Example: <em>{exampleText}</em>
                      </li>
                    );
                  }

                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--wild-bark)]">Timeline Reminder</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border-2 border-[var(--wild-bark)] bg-[#fff6df] p-4">
            <p className="milestone-date">March 13, 2026</p>
            <p className="mt-2 text-base font-semibold">
              Bring robot to class for feedback and movement planning.
            </p>
          </div>
          <div className="border-2 border-[var(--wild-bark)] bg-[#fff6df] p-4">
            <p className="milestone-date">March 27, 2026</p>
            <p className="mt-2 text-base font-semibold">
              Showcase performance on the moving platform.
            </p>
          </div>
        </div>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          Questions to Mr. Joel can be directed through Ms. Melinda.
        </p>
      </section>
    </main>
  );
}
