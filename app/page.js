import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-white py-16 lg:py-24">
              <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Your Partner in Scalable Software Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            We specialize in turning complex ideas into robust, high-performance
            applications using cutting-edge technologies like React, Next.js,
            Java, .NET, Python, and AI.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/services"
              className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white border border-indigo-600 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
      </section>

      <section id="technologies" className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                alt="PHP"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">React</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Next.js"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png"
                alt="Java"
                className="mb-2"
                width={64}
                height={64}
                max-height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">Java</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
                alt=".NET"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">.NET</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png"
                alt="Python"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png/120px-Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png"
                alt="AI"
                className="mb-2"
                width={64}
                height={64}
                priority
              />
              <span className="text-sm font-medium text-gray-600">AI</span>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "The team delivered a scalable **Next.js platform** that
                exceeded our expectations. Their technical expertise and
                communication were second to none."
              </p>
              <p className="font-semibold text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">CTO, Tech Solutions Inc.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Their expertise in **Java and .NET** allowed us to seamlessly
                integrate our legacy systems with a new, robust backend. The
                project was delivered on time and within budget."
              </p>
              <p className="font-semibold text-gray-900">Jane Smith</p>
              <p className="text-sm text-gray-500">
                Director of Engineering, Innovate Co.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "The **Python and AI** skills of the team helped us build a
                powerful data analysis tool that has revolutionized our
                operations. They are true innovators."
              </p>
              <p className="font-semibold text-gray-900">Michael Brown</p>
              <p className="text-sm text-gray-500">
                Founder, Data Insights LLC
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Your Next Big Idea?
          </h2>
          <p className="text-lg mb-8">
            Let's discuss how our technology expertise can bring your vision to
            life.
          </p>
          <a
            href="#"
            className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}
