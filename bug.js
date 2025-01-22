```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: {/* some filter */}}, 
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Error prone
  {$sort: {sum: -1}}
])
```