---
layout: ../_includes/layouts/base.njk
pageTitle: Newsletter Signup
eleventyNavigation:
  key: Newsletter
  order: 3
---
# Subscribe to the Newsletter

<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  <input type="email" name="email" required placeholder="Your email">
  <button type="submit">Subscribe</button>
</form>
