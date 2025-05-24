import Container from "../Container";
import SectionHeader from "../SectionHeader";

const MeetOurClients = () => {
  const clientFeedbacks = [
    {
      clientName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      earning: "$320k",
    },
    {
      clientName: "David Lee",
      email: "david.lee@example.com",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      video: "https://www.youtube.com/embed/3GwjfUFyY6M",
      earning: "$560k",
    },
    {
      clientName: "Amina Khan",
      email: "amina.khan@example.com",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      video: "https://www.youtube.com/embed/V-_O7nl0Ii0",
      earning: "$290k",
    },
    {
      clientName: "Carlos Rivera",
      email: "carlos.rivera@example.com",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      video: "https://www.youtube.com/embed/k85mRPqvMbE",
      earning: "$470k",
    },
  ];

  return (
    <Container>
      <section className="bg-[#010205] border border-[#292C33] rounded-4xl pt-10 pb-20">
        <SectionHeader
          title={"Quality Edits Pay Off"}
          subTitle={"Quality content + Quality edits = Real Results! "}
          button={"Meet our clients"}
          rootClasses={"pb-20"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6">
          {clientFeedbacks.map((client, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border border-[#292C33] rounded-4xl">
              <iframe
                src={client.video}
                className="rounded-3xl"
                title={`${client.clientName}'s feedback`}
                frameBorder="0"
                height={"270px"}
                allowFullScreen></iframe>
              <div className="flex items-center gap-10 pt-10 pb-2 px-5">
                <img
                  src={client.photo}
                  alt={client.clientName}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white text-3xl font-semibold">
                    {client.clientName}
                  </h3>
                  <p className="text-[#878C91] text-base mt-1">
                    {client.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center pb-5">
                <p className="text-[#EC4845] text-[64px] font-bold leading-tight">
                  {client.earning}
                </p>
                <span className="text-[#878C91] text-base">Earnings:</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default MeetOurClients;
