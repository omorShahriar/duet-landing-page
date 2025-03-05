import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import fs from 'fs'
import path from 'path'

const app = new Hono()



app.get('/', async (c) => {

  return c.html(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Duet - Join Our Waitlist</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #000;
            color: #fff;
        }
        .container {
            max-width: 400px;
            margin: 100px auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
            color: #000;
        }
        h1 {
            color: #000;
        }
        input, button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input {
            background-color: #fff;
            color: #000;
        }
        button {
            background-color: #000;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #333;
        }
        .logo {
            width: 100px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img class="logo" src="data:image/svg+xml;charset=UTF-8,<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='909.333' height='282.667' viewBox='0 0 682 212'><path d='M160 7.5C148.4 11 125.9 19 122.8 20.6c-5.3 2.8-6.8 7.7-6.8 22.9 0 15.6-.4 16.2-7.3 12.2-7.4-4.4-16.5-6.9-24.7-6.9-8.6-.1-21 3-28.1 6.9-7 3.7-16.9 12-22.8 18.8-6.3 7.3-14.4 23.2-17.2 34-3 11.2-3 29.8 0 41 4.4 16.5 14.6 32.2 27.6 42.7 7.9 6.4 22 13.2 33 15.8 7.7 1.9 10.9 2.2 24 1.8 13-.4 16.1-.8 23-3.2 24.6-8.4 41.4-27 48-53 3-11.7 2.9-11.3 2.7-82.9L174 9.9l-2.5-2.4c-2.9-2.9-2.1-3-11.5 0M105 112c9.3 4.7 13.2 17.4 8.2 26.6-3.4 6.4-13.1 11.2-20.1 10-8.3-1.3-16.1-10.5-16.1-18.8 0-7.4 5.1-15.5 11.5-18.4 4.5-2 12-1.7 16.5.6m414.6-95.4C518.2 18 518 25 518 78.9c0 57.1.1 61.2 2 68.4 4.4 17.5 10.1 27.7 22 39.7 9.5 9.5 18.6 15.2 31.5 19.7 7.5 2.6 9.1 2.7 24.5 2.8 16 0 16.8-.1 25.2-3.1 32-11.5 52.2-38.4 54.5-72.6.4-7.2.3-10.1-.7-11.3-1.1-1.3-5.5-1.5-30.5-1.5h-29.2l-.5 7.9c-.6 9.9-3.3 14.7-10.3 18.1-8.6 4.1-19.5.9-23.5-6.9-2.1-4.1-2.5-8.3-2.2-21.4l.2-8.7h46.4c53.1 0 50.1.5 47.3-8.3-4.3-13.6-17.3-30-31-39.1-15.9-10.4-23.5-12.7-46.2-13.5l-17-.6-.3-15.4c-.1-9.3-.7-16-1.3-16.8-.9-1-7.2-1.3-29.5-1.3-24.4 0-28.5.2-29.8 1.6M416.9 49c-16.3 2.6-32 11-44 23.7-14.8 15.5-21.9 33.6-21.9 56.1 0 14.1 1.9 22.9 7.4 34.7 8.1 17.1 21.1 30.2 38.1 38.4 12.3 6 19.8 7.6 35.5 7.5 12.6 0 14.1-.2 23.2-3.3 11.9-4.1 22.7-10.9 30.2-19.2 10.2-11.3 20.2-35.2 17.4-41.5-1.3-2.7-4.5-3.9-8.3-3-1.3.3-5.7 3.9-9.7 7.9-14.6 14.7-32.2 19-51.7 12.6-5.7-1.9-13.3-7-12.1-8.2.3-.3 5.5-3.5 11.5-7.2 19.9-12.3 55.8-34.7 65.7-41.2 8.1-5.2 9.8-6.7 9.8-8.8 0-1.7-3.1-6-10.4-14.2-5.7-6.5-11.6-13-13.2-14.4-9.2-8.2-22.5-15.3-34.4-18.3-7.8-2-25.3-2.8-33.1-1.6M440 94c5.8 4.1 7 14.4 2.3 19.1-3.9 3.9-29.6 19-30.6 18-1.8-1.8-.3-22 2-27.1 5.1-11.2 17.8-16.1 26.3-10M238.8 50.1c-5.2 1.2-15.8 6.1-21.2 9.8-12.8 8.8-22.1 20.2-28.5 34.5-3.5 8.1-3.5 8.2-3.9 24.8-.2 9.2.1 20.5.7 25.1 4.8 36 31.3 61.7 67.6 65.7 33.3 3.8 65.2-13 79-41.4 8.1-16.6 8.5-19.9 8.5-68.7 0-43.5-.3-48-3.9-49.8-2.4-1.3-9.5.9-30.1 9.3-10.9 4.5-19.6 8.7-21.3 10.4-1.6 1.5-4 4.9-5.3 7.7-2.3 4.9-2.4 5.7-2.4 32.8 0 30-.4 33-5.3 36.2-4 2.6-9 2.9-13.1 1-7.3-3.5-7-2-7.6-49.7l-.5-42.8-2.5-2.4c-3.1-3-5.5-3.6-10.2-2.5'/>
        </svg>" alt="Duet Logo">
        <h1>Join Our Waitlist</h1>
        <p>Sign up to be notified when Duet launches!</p>
        <form action="#" method="POST">
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Join Waitlist</button>
        </form>
    </div>
    <footer>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms and Conditions</a></p>
    </footer>
</body>
</html>
    `)
})

app.get('/privacy-policy', async (c) => {
  try {
    const policyPath = path.join(process.cwd(), 'src', 'static', 'privacy-policy.txt')
    const policyContent = await fs.promises.readFile(policyPath, 'utf-8')
    
    // Convert plain text to HTML with proper formatting
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Duet - Privacy Policy</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          h1 {
            text-align: center;
            margin-bottom: 30px;
          }
          h2 {
            margin-top: 20px;
          }
          p {
            margin-bottom: 15px;
          }
          .back-link {
            display: inline-block;
            margin-top: 30px;
            text-decoration: none;
            color: #0066cc;
          }
        </style>
      </head>
      <body>
        <h1>Privacy Policy</h1>
        ${policyContent.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        <a href="/" class="back-link">← Back to Home</a>
      </body>
      </html>
    `
    
    return c.html(htmlContent)
  } catch (error) {
    console.error('Error loading privacy policy:', error)
    return c.text('Privacy Policy not found', 404)
  }
})

app.get('/terms-and-conditions', async (c) => {
  try {
    const termsPath = path.join(process.cwd(), 'src', 'static', 'terms-and-condition.txt')
    const termsContent = await fs.promises.readFile(termsPath, 'utf-8')
    
    // Convert plain text to HTML with proper formatting
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Duet - Terms and Conditions</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          h1 {
            text-align: center;
            margin-bottom: 30px;
          }
          h2 {
            margin-top: 20px;
          }
          p {
            margin-bottom: 15px;
          }
          .back-link {
            display: inline-block;
            margin-top: 30px;
            text-decoration: none;
            color: #0066cc;
          }
        </style>
      </head>
      <body>
        <h1>Terms and Conditions</h1>
        ${termsContent.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        <a href="/" class="back-link">← Back to Home</a>
      </body>
      </html>
    `
    
    return c.html(htmlContent)
  } catch (error) {
    console.error('Error loading terms and conditions:', error)
    return c.text('Terms and Conditions not found', 404)
  }
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
