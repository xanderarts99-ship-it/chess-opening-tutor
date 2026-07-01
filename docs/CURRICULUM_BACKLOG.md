# Curriculum Backlog

This backlog exists because the app should feel like a tutor, not a thin demo. V1 can stay free and local-first, but the curriculum needs deliberate chess content expansion over several branches.

## Current Authored Coverage

London System:

- Core London Setup
- King's Indian Setup
- Early ...c5 Pressure
- Symmetric ...Bf5

Caro-Kann:

- Core Caro-Kann Start
- Advance Variation
- Exchange Variation
- Classical With 3.Nc3
- Modern With 3.Nd2
- Fantasy Variation
- Panov-Botvinnik Entry

## Module C1: London Depth Pack

Purpose:

Add enough London branches that a beginner can recognize common Black setups instead of memorizing one move order.

Candidate lines:

- Queen's Gambit Declined style: `1.d4 d5 2.Nf3 Nf6 3.Bf4 e6`
- Slav style: early `...c6` and `...Bf5`
- King's Indian style: `...g6`, `...Bg7`, and safe development
- Dutch style: early `...f5`
- Early queen pressure: `...Qb6` against b2
- Early `...c5` with captures versus support with `c3`

Teaching targets:

- When to play `c3`, `Nbd2`, `Bd3`, `h3`, `O-O`, and `Ne5`
- Why the dark-square bishop usually comes out before `e3`
- When trading bishops helps White
- How to avoid automatic London moves when Black creates a concrete threat

Trap and tactic themes:

- Loose b2 pawn after `...Qb6`
- `Bxh7+` Greek-gift pattern as a theme, not a forced trick every game
- `Ne5` pressure on c6 and f7
- Bad early `c4` transpositions that leave the planned setup

Acceptance criteria:

- At least 8 authored London variations.
- At least 4 trap or tactic lesson nodes.
- Each variation has a beginner summary, hints, expected moves, known mistakes, and review tags.
- Validation proves every branch target has a legal move sequence.

## Module C2: Caro-Kann Depth Pack

Purpose:

Turn the Caro-Kann from a single solid setup into a beginner repertoire against White's common third moves.

Candidate lines:

- Advance mainline: `1.e4 c6 2.d4 d5 3.e5 Bf5`
- Advance Short-style setup: `4.Nf3 e6 5.Be2 c5`
- Exchange Variation development
- Classical `3.Nc3 dxe4`
- Modern `3.Nd2 dxe4`
- Fantasy `3.f3`
- Panov-Botvinnik `3.exd5 cxd5 4.c4`
- Two Knights `2.Nc3 d5 3.Nf3`
- Hillbilly attack `2.Bc4`

Teaching targets:

- Why `...c6` supports `...d5`
- When to play `...Bf5` before `...e6`
- When to strike with `...c5`
- Why Black often accepts an isolated queen pawn structure in the Panov
- How to meet offbeat tries without panicking

Trap and tactic themes:

- Fantasy Variation center tactics
- Advance Variation bishop trap warnings
- Panov isolated-pawn pressure
- Early `Bc4` tricks against f7
- Avoiding passive piece placement behind the pawn chain

Acceptance criteria:

- At least 10 authored Caro-Kann variations.
- At least 6 trap or tactic lesson nodes.
- Every major White third move has a named branch.
- Each branch includes at least one common beginner mistake and recovery hint.

## Module C3: Training Modes For Depth

Purpose:

Make deeper curriculum easier to absorb once there are many lines.

Features:

- Variation map grouped by opening, line, and concept tag
- "Weakest lines first" review filter
- Trap-only drill mode
- Mixed opening quiz that asks whether the current position is London or Caro-Kann theory
- End-of-line recap with the key plan in plain English

Acceptance criteria:

- Learner can filter practice by opening, variation, concept tag, and due review.
- Trap-only mode uses only nodes marked with trap or tactic tags.
- Recap appears after completing a line without requiring an AI service.

## Content Quality Rules

- Use structured curriculum data as the source of truth.
- Keep lines beginner-practical rather than encyclopedic.
- Include explanations for plans, not just moves.
- Mark "trap" content carefully so the tutor teaches why it works and when it does not.
- Prefer short branches that can be repeated and reviewed over long database lines.
- Run validation and manual board smoke tests after every curriculum expansion.
