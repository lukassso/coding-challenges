function processBlogPost(jsonString) {
  try {
    const parsedObject = JSON.parse(jsonString);
    const uniqueAuthors = parsedObject.comments.reduce((acc, curr) => {
      if (!acc.includes(curr.name)) {
        acc.push(curr.name);
      }
      return acc;
    }, []);
    return {
      title: parsedObject.title.toUpperCase(),
      authorName: parsedObject.author.name,
      commentCount: parsedObject.comments.length,
      uniqueCommentAuthors: uniqueAuthors,
      lastModified: new Date(),
    };
  } catch (error) {
    return null;
  }
}

const blogPostJSON = `{
  "postId": "post123",
  "title": "A Guide to Modern JavaScript",
  "content": "...",
  "author": {
    "userId": "user456",
    "name": "Alice"
  },
  "tags": ["javascript", "es6", "oop"],
  "comments": [
    { "userId": "user789", "name": "Bob", "text": "Great article!" },
    { "userId": "user101", "name": "Charlie", "text": "Very helpful, thanks!" },
    { "userId": "user789", "name": "Bob", "text": "I have a question..." }
  ]
}`;

const summary = processBlogPost(blogPostJSON);
console.log(summary);

const invalidSummary = processBlogPost('{"invalid json"}');
console.log(invalidSummary); // null
