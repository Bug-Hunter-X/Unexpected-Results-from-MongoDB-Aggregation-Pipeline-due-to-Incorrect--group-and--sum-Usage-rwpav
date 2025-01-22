```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: {/* some filter */}}, 
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Corrected
  {$sort: {sum: -1}}
])
```