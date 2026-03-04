export const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-[#003366] mb-16">
          Hear from Our Clients
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Client Logo */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}produce-box-logo.png`}
                alt="The Produce Box Logo"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>

            {/* Testimonial Text */}
            <div className="flex-1">
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                "We were incredibly impressed with the Duke Impact Investing
                Group. The data analysis was{" "}
                <span className="relative inline-block">
                  <span>very thorough</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FDB515] opacity-30"></span>
                </span>{" "}
                and presented professionally. We are excited to begin our{" "}
                <span className="relative inline-block">
                  <span>third project</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FDB515] opacity-30"></span>
                </span>{" "}
                with DIIG and feel confident that the results will be{" "}
                <span className="relative inline-block">
                  <span>equally exceptional</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FDB515] opacity-30"></span>
                </span>
                ."
              </blockquote>
              <div className="text-right mt-8">
                <p className="font-medium text-gray-900 text-lg">
                  The Produce Box: Supporting 100+ NC Farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
