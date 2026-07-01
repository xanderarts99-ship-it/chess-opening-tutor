import type {
  Curriculum,
  CurriculumNode,
  OpeningId,
  OpeningModule,
  Variation,
} from "./curriculum-types";

export type CurriculumNodeLocation = {
  node: CurriculumNode;
  openingId: OpeningId;
};

export function findOpeningModule(
  curriculum: Curriculum,
  openingId: OpeningId,
): OpeningModule | null {
  return (
    curriculum.modules.find((openingModule) => openingModule.id === openingId) ??
    null
  );
}

export function getOpeningModule(
  curriculum: Curriculum,
  openingId: OpeningId,
): OpeningModule {
  const openingModule = findOpeningModule(curriculum, openingId);

  if (!openingModule) {
    throw new Error(`Opening module ${openingId} does not exist.`);
  }

  return openingModule;
}

export function findNodeById(
  curriculum: Curriculum,
  nodeId: string,
): CurriculumNode | null {
  return findNodeLocation(curriculum, nodeId)?.node ?? null;
}

export function findNodeLocation(
  curriculum: Curriculum,
  nodeId: string,
): CurriculumNodeLocation | null {
  for (const openingModule of curriculum.modules) {
    const node = openingModule.nodes.find((candidate) => candidate.id === nodeId);

    if (node) {
      return {
        node,
        openingId: openingModule.id,
      };
    }
  }

  return null;
}

export function findNodeInOpening(
  curriculum: Curriculum,
  openingId: OpeningId,
  nodeId: string,
): CurriculumNode | null {
  const openingModule = findOpeningModule(curriculum, openingId);

  if (!openingModule) {
    return null;
  }

  return openingModule.nodes.find((node) => node.id === nodeId) ?? null;
}

export function findVariationInOpening(
  curriculum: Curriculum,
  openingId: OpeningId,
  variationId: string,
): Variation | null {
  const openingModule = findOpeningModule(curriculum, openingId);

  if (!openingModule) {
    return null;
  }

  return (
    openingModule.variations.find((variation) => variation.id === variationId) ??
    null
  );
}

export function getStartingNodeForVariation(
  curriculum: Curriculum,
  openingId: OpeningId,
  variationId: string,
): CurriculumNode {
  const openingModule = getOpeningModule(curriculum, openingId);
  const variation = openingModule.variations.find(
    (candidate) => candidate.id === variationId,
  );

  if (!variation) {
    throw new Error(
      `Opening module ${openingId} has no variation ${variationId}.`,
    );
  }

  const startingNode = openingModule.nodes.find(
    (node) => node.id === variation.startingNodeId,
  );

  if (!startingNode) {
    throw new Error(
      `Variation ${variationId} starts at missing node ${variation.startingNodeId}.`,
    );
  }

  return startingNode;
}

export function getStartingNode(
  curriculum: Curriculum,
  openingId: OpeningId,
): CurriculumNode {
  const openingModule = getOpeningModule(curriculum, openingId);
  const firstVariation = openingModule.variations[0];

  if (!firstVariation) {
    throw new Error(`Opening module ${openingId} has no variations.`);
  }

  return getStartingNodeForVariation(curriculum, openingId, firstVariation.id);
}
