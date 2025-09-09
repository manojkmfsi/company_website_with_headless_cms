import React from "react";
import Member from "@/components/member/member";
import PropTypes from "prop-types";

export default async function MemberPage({ params }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Team Member
          </h1>
        </div>
        <Member id={params?.id}></Member>
      </div>
    </section>
  );
}

MemberPage.propTypes = {
  params: PropTypes.object.isRequired,
};
