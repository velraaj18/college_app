import { Card } from "primereact/card";
import { Button } from "primereact/button";

const EventCards = () => {
  const cardHeader = (
    <img
      src="/images/781a6dc248827a0077d92b111c9b4243.png"
      alt="card"
      className="w-full h-full object-cover transition-all duration-300 ease-out hover:-translate-y-2"
    />
  );
  const cardFooter = (
    <button
      title="button"
      className="bg-[#6CA643] p-1 ps-2 pe-2 text-white text-[12px] font-bold"
    >
      Sign Up
    </button>
  );

  return (
    <>
      <Card
        header={cardHeader}
        footer={cardFooter}
        title="Fall Arts Showcase"
        className="md:w-[20rem] max-h-[576px]"
        pt={{
          title: { className: "!text-lg text-[#6CA643]" },
          content: { className: "!pb-0 !pt-0" },
        }}
      >
        <p className="m-0 text-[15px]">
          Saturday, Dec. 6, 3–5:30pm, Join us for a showcase of work from
          electives, workshops, and other creative classes this semester! We'll
          have live music, interactive demos, visual art, film screenings,
          readings, and more!
        </p>
      </Card>
    </>
  );
};

export default EventCards;
