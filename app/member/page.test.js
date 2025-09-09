import "@testing-library/jest-dom";
import { render, act, screen } from "@testing-library/react";
import TeamPage from "./page";

jest.mock("../../components/member/members");

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp();
  return render(ui);
};

describe("MembersPage", () => {
  it("renders Members Page", async () => {
    await act(async () => {
      renderAsync(TeamPage);
    });
  });

  it("renders Members Page Heading", async () => {
    await act(async () => {
      renderAsync(TeamPage);
    });
    const heading = screen.getByRole("heading", { name: /Meet Our Team/i });
    expect(heading).toBeInTheDocument();
  });
});
