## TO DAY HOW I CAN SOLVED 
```
          I USE Array.prototype.map() transfer array of url to Async Task for kill all  HTTP Requests,like (Parallel) After then Used Try...catch and checking res.ok cover each task for manage each reject API and return result pass Promise.all() for cover array to one
```

## I STUCK AND WHY?
```
          - Condused about Scope of Handler by i used middleware (req,res) into work with Utility Function
          - Miss transfer data type i send array of string url 
          - Type return first i return string not right with requestment and solve return (object) --> stand

```

## TODAY I LEARNED AND USE THEM
```
          Parallel Async Pattern use .map() create array of async operation and use Promise.all() or Promises.allSettled() for run many task 
          Individual Error Handling use try...catch inside .map() help operation failed 
          HTTP Response Validation check res.ok cus fetch() not throw error when found http status code 400 or 500
```

# NOTES
```
          When work with Array api use .map() for build Promise and run by Promise.all() by cover try...catch and check res.ok inside each Callbcak for handle API Reject/Timeout and maintain structure return object (status: 'success' | 'failed') to standard
```