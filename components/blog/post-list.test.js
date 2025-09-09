import "@testing-library/jest-dom";
import { render, act, screen } from "@testing-library/react";
import PostList from "./post-list";
import React from "react";
import { fetchAPI } from "../../lib/api";

const posts = [
  {
    documentId: 1,
    title: "Test Post 1",
    content: "This is the content of Test Post 1",
    image: { formats: { small: { url: "" } } },
    author: { name: "Author 1" },
    publishedAt: "2023-10-01T00:00:00Z",
    slug: "test-post-1",
  },
  {
    documentId: 2,
    title: "Test Post 2",
    content: "This is the content of Test Post 2",
    image: { formats: { small: { url: "" } } },
    author: { name: "Author 2" },
    publishedAt: "2023-10-02T00:00:00Z",
    slug: "test-post-2",
  },
];

// Tell Jest to use the mock from the __mocks__ folder
jest.mock("../../lib/api");

fetchAPI.mockResolvedValue({
  data: posts,
});

describe("Post list", () => {
  it("renders post list", async () => {
    await act(async () => {
      render(<PostList />);
    });
  });

  it("renders post details", async () => {
    await act(async () => {
      render(<PostList />);
    });
    // Check that each post details exists in the document
    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.content)).toBeInTheDocument();
      expect(screen.getByText(post.author.name)).toBeInTheDocument();
      expect(
        screen.getByText(
          new RegExp(
            new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            "i",
          ),
        ),
      ).toBeInTheDocument();
    });
  });
});
