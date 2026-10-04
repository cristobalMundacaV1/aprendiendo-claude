# Plantilla de agent loop

## Mission
[resultado observable]

## Inputs
- ...

## Constraints
- ...

## Allowed tools
- ...

## Forbidden actions
- ...

## Loop
1. Observe current state.
2. Identify highest-priority blocker.
3. Choose smallest safe action.
4. Execute.
5. Verify with evidence.
6. Update state/checkpoint.
7. Repeat if objective is not complete.

## Definition of done
- [ ] ...
- [ ] ...

## Stop conditions
- ...

## Retry policy
- max attempts: ...
- retryable failures: ...
- non-retryable failures: ...

## Budget
- max iterations: ...
- max tool calls: ...
- max cost/time: ...

## Output contract
Return final status, evidence, actions, unresolved risks and recovery information.
