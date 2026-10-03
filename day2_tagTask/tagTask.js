const tasks = [
  { id: 1, title: "Fix login bug", completed: true, tags: ["bug","BUG", "urgent"] },
  { id: 2, title: "Add dark mode", completed: false, tags: ["feature"] },
  { id: 3, title: "Fix payment bug", completed: false, tags: ["bug"] },
  { id: 4, title: "Refactor database", completed: true, tags: [] },
  { id: 5, title: "Refactor True", completed: true, tags: [] }
];

const summary = {}
tasks.forEach(task => {
          // When Task no tag 
          if (!task.tags || task.tags.length === 0) {
                    if (!summary.untagged) {
                              summary.untagged = {total:0,completed:0}
                    }
                    summary.untagged.total += 1;
                    if(task.completed) summary.untagged.completed += 1;
          }

          else {
                    const uniqueTags = [...new Set(task.tags.map(t => t.toLowerCase()))];
                    console.log(uniqueTags);

                    uniqueTags.forEach(tag => {
                              if(!summary[tag]){
                                       summary[tag] = {total:0,completed:0} 
                              }
                              summary[tag].total += 1
                              if(task.completed) summary[tag].completed += 1
                    })
          }
})
console.log(summary)