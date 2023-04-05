const crypto = require("crypto");
const PartitionKeyConstants = require("../Constants/constants");
const { getInitialCandidate, getTransformedCandidate } = require("./helpers");

function deterministicPartitionKey(event) {
  const MAX_PARTITION_KEY_LENGTH =
    PartitionKeyConstants.MAX_PARTITION_KEY_LENGTH;

  let candidate = getInitialCandidate(event);
  const transformedCandidate = getTransformedCandidate(candidate);

  return transformedCandidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(transformedCandidate).digest("hex")
    : transformedCandidate;
}

module.exports = { deterministicPartitionKey };
