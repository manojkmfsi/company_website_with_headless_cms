import "@testing-library/jest-dom";
import { render, act, screen } from "@testing-library/react";
import TeamPage from "./page";
import { fetchAPI } from "../../lib/api";

const members = [
  {
    id: 1,
    documentId: "member-1-uuid",
    name: "John Doe",
    designation: "Lead Developer",
    bio: "Lorem ipsum dolor sit amet.",
    photo: {
      formats: { small: { url: "https://example.com/john-doe.jpg" } },
    },
  },
  {
    id: 2,
    documentId: "member-2-uuid",
    name: "Jane Smith",
    designation: "UI/UX Designer",
    bio: "Consectetur adipiscing elit.",
    photo: null, // Simulate a missing photo
  },
];

jest.mock("../../components/member/members");
// mock fetchAPI
jest.mock("../../lib/api", () => ({
  fetchAPI: jest.fn(),
}));

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp();
  return render(ui);
};

describe("MembersPage", () => {
  it("renders Members Page Heading", async () => {
    fetchAPI.mockResolvedValueOnce({
      data: members,
    });

    await act(async () => {
      renderAsync(TeamPage);
    });
    const heading = screen.getByRole("heading", { name: /Meet Our Team/i });
    expect(heading).toBeInTheDocument();
  });
});
