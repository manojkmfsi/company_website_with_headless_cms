import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Member from "./member";
import React from "react";

const memb = {
  id: 1,
  documentId: "member-1-uuid",
  name: "John Doe",
  designation: "Lead Developer",
  bio: "Lorem ipsum dolor sit amet.",
  photo: {
    formats: { small: { url: "https://example.com/john-doe.jpg" } },
  },
  articles: [
    {
      documentId: 1,
      title: "Test Post 1",
      content: "This is the content of Test Post 1",
      image: { formats: { small: { url: "" } }, url: "" },
      author: { name: "Author 1" },
      publishedAt: "2023-10-01T00:00:00Z",
      slug: "test-post-1",
    },
  ],
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp, params) => {
  const ui = await Comp(params);
  return render(ui);
};

describe("Member", () => {
  it("renders member", async () => {
    await renderAsync(Member, { member: memb });
  });

  it("renders post details", async () => {
    await renderAsync(Member, { member: memb });

    // Assert that the fetched team members are rendered.
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Lead Developer")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();
  });
});
