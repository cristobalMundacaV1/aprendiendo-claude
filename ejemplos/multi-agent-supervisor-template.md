# Plantilla de supervisor multiagente

## Global objective
[objetivo]

## Supervisor responsibilities
- decompose work;
- assign non-overlapping scopes;
- track dependencies;
- receive structured worker outputs;
- resolve conflicts;
- run global validation;
- escalate important ambiguity.

## Worker contract

~~~text
ROLE:
OBJECTIVE:
SCOPE:
INPUTS:
MAY MODIFY:
MUST NOT MODIFY:
VALIDATION:
STOP CONDITIONS:
OUTPUT FORMAT:
~~~

## Merge policy
- workers never push directly to main;
- one branch/worktree per job;
- supervisor verifies SHA and gates before integration;
- conflicting jobs are serialized.
