import path from 'path'
import express from 'express'

const fse = require('fs-extra')

// remark
const unified = require('unified')
const rmkParse = require('remark-parse')
const rmkHtml = require('remark-html')
const frontMatter = require('front-matter')

const app = express()
const contentDir = path.resolve(__dirname, '..', 'content')

// /_content-api/*
app.get('*', async function(req, res) {
  if (isDirectory(req.path)) {
    const files = await readDirectory(req.path)
    const posts = await processFiles(req.path, files)
    res.json(posts)
  } else if (await fileExists(req.path)) {
    const filepath = contentDir + req.path + '.md'
    const { path, metadata, html } = await processMarkdown(filepath)
    res.json({
      path,
      metadata,
      html
    })
  } else {
    res.status(404).json({ error: 'Post not found' })
  }
})

export default app

function isDirectory(path) {
  try {
    const stat = fse.lstatSync(contentDir + path)
    return stat.isDirectory()
  } catch (e) {
    return false
  }
}

async function readDirectory(path) {
  return await fse.readdir(contentDir + path)
}

async function fileExists(path) {
  return await fse.pathExists(contentDir + path + '.md')
}

async function processMarkdown(path) {
  const file = await fse.readFile(path, 'utf-8')

  const content = frontMatter(file)
  const metadata = content.attributes

  let html

  unified()
    .use(rmkParse)
    .use(rmkHtml)
    .process(content.body, function(err, file) {
      if (err) {
        console.error(err)
      }

      html = file.toString()
    })
  return { path, metadata, html }
}

async function processFiles(path, files = []) {
  const posts = []
  await Promise.all(
    files.map(async file => {
      const { metadata } = await processMarkdown(contentDir + path + '/' + file)
      posts.push({ path: path + '/' + file.split('.')[0], metadata })
    })
  )
  return posts
}
