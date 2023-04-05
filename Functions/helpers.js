const crypto = require("crypto");
const PartitionKeyConstants = require("../Constants/constants");
const TRIVIAL_PARTITION_KEY = PartitionKeyConstants.TRIVIAL_PARTITION_KEY;

function getInitialCandidate(event) {
  if (event?.partitionKey) {
    return event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }
  return null;
}

function getTransformedCandidate(candidate) {
  if (candidate && typeof candidate !== "string") {
    return JSON.stringify(candidate);
  } else {
    return TRIVIAL_PARTITION_KEY;
  }
}

module.exports = { getInitialCandidate, getTransformedCandidate };
