# Facebook Tools

## Example:

### Find UID:
```javascript
const facebookTools = require("facebook-tools");

console.log(facebookTools.findUid("https://facebook.com/kaysil.666"), (err, uid) => {
    if (err) return console.error(err); 
    
    console.log(uid); //1000...
});
```
### Video Downloader:
- Coming soon