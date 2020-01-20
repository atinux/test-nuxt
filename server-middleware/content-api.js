import path from 'path'
import express from 'express'

const app = express()
const contentDir = path.resolve(__dirname, '..', 'content')

// /_content-api/*
app.get('*', async function (req, res) {
  console.log('Calling ', req.path)
  // Check if file exists and what type, see https://www.npmjs.com/package/fs-extra and https://nodejs.org/api/fs.html#fs_fs_lstat_path_options_callback
  // If path is directory -> return an array of objects (each file in the directory)
  // If path is file (adding .md)
    // get markdown file from path
    // return { path, metadata, html }
    // see
    //  https://unifiedjs.com/explore/package/remark-html/
    //  https://unifiedjs.com/explore/package/remark-frontmatter/

  res.json({
    metadata: {
      title: 'A post with a cover image 2'
    },
    html: '<p>Processed <i>markdown</i> to HTML</p>'
  })
})

export default app
