import { render } from "@testing-library/react";
import Page from "./index";
import { publicPages } from "../../paths/routes";
import { mockNextHead, assertSeoTags } from "../__testing__/seo-helper";

describe(Page, () => {
  function setup() {
    return {
      view: render(<Page />),
    };
  }

  beforeAll(() => {
    mockNextHead();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it("SEO tag rendered", async () => {
    // Act
    setup();

    // Assert
    assertSeoTags({
      titleText: publicPages.index.title(),
      descriptionText: publicPages.index.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.index.path()}`,
    });

    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute("content", "all");
  });
});
