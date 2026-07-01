import { describe, expect, it } from "vitest";
import { starterCurriculum } from "@/data/openings/curriculum";
import {
  findVariationInOpening,
  getStartingNode,
  getStartingNodeForVariation,
} from "./curriculum-selectors";

describe("curriculum selectors", () => {
  it("keeps the default opening start compatible with the first variation", () => {
    expect(getStartingNode(starterCurriculum, "london").id).toBe(
      "london-core-001",
    );
    expect(getStartingNode(starterCurriculum, "caro-kann").id).toBe(
      "caro-core-001",
    );
  });

  it("loads non-default London and Caro-Kann variation starts", () => {
    expect(
      getStartingNodeForVariation(
        starterCurriculum,
        "london",
        "london-c5-pressure",
      ).id,
    ).toBe("london-c5-001");
    expect(
      getStartingNodeForVariation(
        starterCurriculum,
        "caro-kann",
        "caro-kann-fantasy",
      ).id,
    ).toBe("caro-fantasy-001");
  });

  it("finds variation metadata inside an opening", () => {
    expect(
      findVariationInOpening(
        starterCurriculum,
        "caro-kann",
        "caro-kann-panov",
      )?.title,
    ).toBe("Panov-Botvinnik Entry");
  });

  it("throws when a requested variation is not part of the opening", () => {
    expect(() =>
      getStartingNodeForVariation(starterCurriculum, "london", "missing-line"),
    ).toThrow("Opening module london has no variation missing-line.");
  });
});
