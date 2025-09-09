import { render, screen } from "@testing-library/react";
import Members from "./members";
import { fetchAPI } from "../../lib/api";
import React from "react";

// mock fetchAPI
jest.mock("../../lib/api", () => ({
  fetchAPI: jest.fn(),
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));
// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp();
  return render(ui);
};

describe("Members", () => {
  it("renders team members", async () => {
    fetchAPI.mockResolvedValueOnce({
      data: [
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
      ],
    });

    await renderAsync(Members);

    // Assert that the fetched team members are rendered.
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Lead Developer")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("UI/UX Designer")).toBeInTheDocument();
    expect(
      screen.getByText("Consectetur adipiscing elit."),
    ).toBeInTheDocument();

    // Check that the image for John Doe is correct.
    expect(screen.getByAltText("Photo of John Doe")).toHaveAttribute(
      "src",
      "https://example.com/john-doe.jpg",
    );

    // Check that the fallback image is used for Jane Smith.
    expect(screen.getByAltText("Photo of Jane Smith")).toHaveAttribute(
      "src",
      "https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image",
    );
  });

  // Test Case 2: Renders nothing when the API returns an empty array.
  it("should render nothing when no team members are found", async () => {
    fetchAPI.mockResolvedValue({
      data: [], // Simulate an empty response.
    });

    await renderAsync(Members);

    // Assert that no team members are rendered.
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
  });

  // Test Case 3: Handles API call failure gracefully.
  it("should handle API errors and not render team members", async () => {
    // Mock a rejected promise to simulate an API error.
    fetchAPI.mockRejectedValue(new Error("API failed to connect."));

    // The component has a try...catch, so it shouldn't throw an error.
    await expect(async () => {
      await renderAsync(Members);
    }).not.toThrow();

    // Check that no team member information is rendered.
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
  });
});
