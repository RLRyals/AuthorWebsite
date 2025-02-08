---
layout: ../_includes/layouts/base.njk
pageTitle: Newsletter Signup
eleventyNavigation:
  key: Newsletter
  order: 3
---
# Subscribe to the Newsletter

<form action="https://api.web3forms.com/submit" method="POST">
  
  <input type="email" name="email" required placeholder="{{author.email }}">
  <button type="submit">Subscribe</button>
</form>
