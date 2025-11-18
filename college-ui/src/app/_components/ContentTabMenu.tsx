"use client";

import { useState, JSX } from "react";
import { TabMenu } from "primereact/tabmenu";

type ItemProps = {
  name: string;
  path: string;
  template: (item: any) => JSX.Element;
};

export default function ContentTabMenu() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const itemRenderer = (item: any, itemIndex: number) => (
    <a
      className="p-menuitem-link flex items-center"
      onClick={() => setActiveIndex(itemIndex)}
    >
      <div className="tabMenuContents flex flex-col gap-4">
        <img
          src={item.path}
          alt={item.name}
          className="w-16 h-16 ml-auto mr-auto"
        />
        <h5 className="font-bold text-3xl">{item.name}</h5>
      </div>
    </a>
  );

  const items: ItemProps[] = [
    {
      name: "Community",
      path: "/images/icon-Community.svg",
      template: (item) => itemRenderer(item, 0),
    },
    {
      name: "CollegePrep",
      path: "/images/icon-CollegePrep.svg",
      template: (item) => itemRenderer(item, 1),
    },
    {
      name: "Culture",
      path: "/images/icon-Culture.svg",
      template: (item) => itemRenderer(item, 2),
    },
    {
      name: "Creativity",
      path: "/images/icon-Creativity.svg",
      template: (item) => itemRenderer(item, 3),
    },
  ];

  const tabContents = [
    <p className="text-lg">
      We’re a small high school, 160 students in grades 9-12 tucked into a cozy
      Central Austin campus. The sense of community is awesome. But the robust
      community at Griffin doesn’t happen just because of our scale; we work
      hard to create opportunities for genuine relationships to grow and for
      students to meaningfully engage with one another every day. Through
      interactive classes (average 12 students per class) in core academics and
      the arts and competitive team sports, Griffin students get a rigorous
      college preparatory academic program and a vibrant, creative, and
      supportive school community.
    </p>,
    <p className="text-lg">
      We believe in proactive kindness. It’s one of our “Essential Values” - the
      core values that shape the way we behave and interact within the Griffin
      community. These values are our commitment to each other and show up in
      our school programs, our work to cultivate a culture of belonging, and our
      inclusive governance structures.
    </p>,
    <p className="text-lg">
      We’re about helping every student develop their ability to think
      creatively, solve problems creatively, and express themselves creatively.
      An education rich in the arts enriches all students and prepares them for
      a professional and personal life that can adapt to a diverse and
      ever-changing world.
    </p>,
    <p className="text-lg">
      Griffin graduates go on to some of the best universities and liberal arts
      colleges in the country and overseas. Yep, there are AP classes in every
      discipline and academic rigor across the curriculum. More than that, our
      students develop an authentic curiosity and a work ethic that will help
      them achieve their goals and continue to learn and grow throughout their
      lives.
    </p>,
  ];

  return (
    <>
      <div className="tabMenu">
        <TabMenu
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        <div className="tabContents">{tabContents[activeIndex]}</div>
      </div>
    </>
  );
}
