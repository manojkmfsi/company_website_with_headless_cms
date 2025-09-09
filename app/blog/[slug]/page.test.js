import "@testing-library/jest-dom";
import { render, act, screen } from "@testing-library/react";
import blog from "./page";
import { fetchAPI } from "../../../lib/api";

const post = {
  documentId: 1,
  title: "Test Post 1",
  content: "This is the content of Test Post 1",
  image: { formats: { thumbnail: { url: "" } } },
  author: { name: "Author 1" },
  publishedAt: "2023-10-01T00:00:00Z",
  slug: "test-post-1",
};

jest.mock("../../../components/blog/post");
// mock fetchAPI
jest.mock("../../../lib/api", () => ({
  fetchAPI: jest.fn(),
}));
// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp({ params: { slug: "post-slug" } });
  return render(ui);
};

describe("BlogPage", () => {
  it("renders Blog Page", async () => {
    fetchAPI.mockResolvedValueOnce({
      data: [post],
    });
    await act(async () => {
      renderAsync(blog);
    });
  });

  it("renders Blog Page Heading", async () => {
    fetchAPI.mockResolvedValueOnce({
      data: [post],
    });
    await act(async () => {
      renderAsync(blog);
    });
    const heading = screen.getByRole("heading", { name: /Blog/i });
    expect(heading).toBeInTheDocument();
  });
});
