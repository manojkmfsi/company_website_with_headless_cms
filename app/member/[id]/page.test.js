import "@testing-library/jest-dom";
import { render, act, screen } from "@testing-library/react";
import MemberPage from "./page";

jest.mock("../../../components/member/member");

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp({ params: { id: "123" } });
  return render(ui);
};

describe("MemberPage", () => {
  it("renders Member Page", async () => {
    await act(async () => {
      renderAsync(MemberPage);
    });
  });

  it("renders Member Page Heading", async () => {
    await act(async () => {
      renderAsync(MemberPage);
    });
    const heading = screen.getByRole("heading", { name: /Team Member/i });
    expect(heading).toBeInTheDocument();
  });
});
