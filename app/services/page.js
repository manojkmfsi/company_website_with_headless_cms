import React from "react";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
// export const dynamic = 'force-dynamic';

export default async function ServicePage() {
  const res = await fetchAPI("/api/services?populate=*&sort=price:asc", { next: { revalidate: 60 }});
  const services = res.data;
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Comprehensive Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of custom software development services, from
            building modern web applications to implementing advanced AI
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-gray-100 p-8 rounded-xl shadow-md border-t-4 border-indigo-600"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title || "Custom Software Development"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description || "Description"}
                </p>
                <div className="w-full h-48 mb-6 flex items-center justify-center">
                  <Image
                    src={
                      service.image?.url
                        ? service.image?.url
                        : "https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image"
                    }
                    alt={service.title || ""}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    height={100}
                    width={100}
                  />
                </div>

                <div className="text-center">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $ {service.price || "5,000"}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {" "}
                    / starting price
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
