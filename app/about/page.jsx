export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              About AZ INTERNATIONAL
            </h1>
            <div className="mx-auto h-1 w-24 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Company Overview
              </h2>
              <p className="leading-relaxed text-gray-700">
                AZ is a third party inspection and capacity building body,
                aiming to increase the capacity building of technicians and
                engineers who are working in the field of metal construction,
                oil and gas services, as well we are providing the NDT and
                quality inspection services. AZ was established in 2012 to
                create high reliable certification body acquiring interactive
                experience in the field of quality control inspection and
                capacity building courses.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Our Vision
              </h2>
              <p className="leading-relaxed text-gray-700">
                To become a leading provider of inspection and technical
                training services in the Arab world and actively contribute to
                developing engineering competencies.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="leading-relaxed text-gray-700">
                To provide a training and consulting environment based on
                knowledge and experience that supports market requirements and
                improves the quality of operations and products.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Our Expertise
              </h2>
              <p className="leading-relaxed text-gray-700">
                AZ is a third-party inspection and capacity-building
                organization established in 2012, aiming to increase the
                capacity building of technicians and engineers who are working
                in the field of metal construction, oil and gas services. We
                seek to provide highly qualitative services to develop human
                resources interested in working in steel fabrication and
                construction in oil and gas, chemical, fertilizers, cement, and
                electrical power plants sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
