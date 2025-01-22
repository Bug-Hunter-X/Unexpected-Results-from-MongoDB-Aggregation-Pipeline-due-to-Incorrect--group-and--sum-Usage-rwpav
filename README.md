# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines involving the `$group` and `$sum` operators. The incorrect usage of these operators leads to unexpected results in the aggregation process.

## Bug Description
The provided code snippet shows an aggregation pipeline with a flawed `$group` stage. The `$sum` operator attempts to calculate the sum of a field ('value') which is likely to be a number, but does it incorrectly by using string literals instead of field references. 

## Solution
The solution corrects the aggregation pipeline by using the correct references to numeric fields within the `$sum` and `$group` operators, ensuring accurate summation and aggregation.

## How to reproduce
1. Clone this repository.
2. Ensure that you have MongoDB set up and running with a sample collection containing relevant data.
3. Run `bug.js` to see the error produced by the incorrect aggregation query.
4. Then run `bugSolution.js` to see the correct aggregation results.