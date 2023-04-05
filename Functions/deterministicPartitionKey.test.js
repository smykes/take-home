const crypto = require("crypto");
const { deterministicPartitionKey } = require("./deterministicPartitionKey");
const { getInitialCandidate, getTransformedCandidate } = require("./helpers");
const PartitionKeyConstants = require("../Constants/constants");

describe("fn: Get Intial Candidate", () => {
  test("event passed is null", () => {
    expect(getInitialCandidate(null)).toBeNull();
  });
  // I need to look up more about testing events, I've forgotten at this point,
  // I'd likely need to set it up in a before each.

  // test("event has partitionKey has value and value is returned", () => {
  //   expect(getInitialCandidate(12)).toEqual(12);
  // });

  test("event has no partitonKey, but has value", () => {
    const data = JSON.stringify(14);
    const hash = crypto.createHash("sha3-512").update(data).digest("hex");
    // crypto should have it's own testing library, I shouldn't need to test this.
    expect(getInitialCandidate(hash)).toHaveLength(128);
  });
});

describe("fn: Get Transformed Candidate", () => {
  test("candidate is not a string", () => {
    expect(getTransformedCandidate(12)).toEqual("12");
  });
  test("candidate is a string", () => {
    expect(getTransformedCandidate("12")).toEqual(
      PartitionKeyConstants.TRIVIAL_PARTITION_KEY
    );
  });
});

describe("fn: deterministicPartitionKey", () => {
  test("event has no value", () => {
    expect(deterministicPartitionKey(null)).toBe("0");
  });
  test("event has a string value", () => {
    expect(deterministicPartitionKey("12")).toBe("0");
  });
  test("event has a numeric value", () => {
    expect(deterministicPartitionKey(12)).toBe("0");
  });
});
