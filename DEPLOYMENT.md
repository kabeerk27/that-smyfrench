# Deployment Guide for That's My French Website

Complete step-by-step instructions to deploy your website to production.

## Pre-Deployment Checklist

- [ ] All content updated (emails, phone numbers, locations)
- [ ] Contact form backend integrated
- [ ] Environment variables configured
- [ ] Image assets added (if needed)
- [ ] Meta tags and SEO optimized
- [ ] Analytics configured
- [ ] Domain name registered
- [ ] SSL certificate ready

## Quick Deployment (Recommended)

### Deploy to Vercel (5 minutes)

**Vercel is the easiest option for Next.js projects.**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/thatsmyfrench.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Click **Deploy**
   - Done! Your site is live 🎉

4. **Add Your Domain**
   - In Vercel dashboard: Settings → Domains
   - Add your domain
   - Update DNS records (instructions provided)
   - Wait 24-48 hours for DNS propagation

**Cost**: Free tier available, $20/month for Pro features

### Deploy to Netlify (6 minutes)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Authorize and select repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click **Deploy site**

3. **Add Custom Domain**
   - Domain settings → Add custom domain
   - Update DNS records

**Cost**: Free tier available, $19/month for pro features

---

## Manual Deployment

### Deploy on Ubuntu/CentOS Server

**Prerequisites:**
- Registered domain
- Server with Ubuntu 20.04+ or CentOS 8+
- SSH access to server

**Steps:**

1. **Connect to Server**
   ```bash
   ssh root@your_server_ip
   ```

2. **Install Node.js & npm**
   ```bash
   # Using NodeSource repository
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Verify installation
   node --version
   npm --version
   ```

3. **Clone Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/thatsmyfrench.git
   cd thatsmyfrench
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Build Application**
   ```bash
   npm run build
   ```

6. **Create .env.local file**
   ```bash
   nano .env.local
   ```
   Paste:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

7. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

8. **Start Application**
   ```bash
   pm2 start "npm start" --name "thatsmyfrench"
   pm2 startup
   pm2 save
   ```

9. **Install Nginx (Reverse Proxy)**
   ```bash
   sudo apt-get install nginx
   ```

10. **Configure Nginx**
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```
    
    Replace with:
    ```nginx
    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;
        
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

11. **Enable SSL with Let's Encrypt**
    ```bash
    sudo apt-get install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
    ```

12. **Restart Nginx**
    ```bash
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    ```

13. **Verify Your Site**
    - Open browser: `https://yourdomain.com`
    - Should load without errors

---

### Deploy with Docker (7 minutes)

1. **Build Docker Image**
   ```bash
   docker build -t thatsmyfrench:latest .
   ```

2. **Run Container**
   ```bash
   docker run -d -p 3000:3000 --name thatsmyfrench thatsmyfrench:latest
   ```

3. **Setup Reverse Proxy (Nginx)**
   ```bash
   # Same Nginx setup as above
   ```

4. **Monitor Logs**
   ```bash
   docker logs -f thatsmyfrench
   ```

---

## Post-Deployment Tasks

### 1. Update Contact Information
- [ ] Email address in footer and contact page
- [ ] Phone number in contact card
- [ ] Office hours
- [ ] Social media links

### 2. Setup Email (Optional but Recommended)

**Using Formspree (Free):**
1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Update contact form in `src/app/contact/page.tsx`:
   ```typescript
   const response = await fetch(`https://formspree.io/f/YOUR_FORM_ID`, {
     method: 'POST',
     body: JSON.stringify(formData),
   });
   ```

**Using SendGrid:**
1. Create SendGrid account
2. Get API key
3. Update `src/app/api/contact/route.ts` to send emails

### 3. Enable Analytics

**Google Analytics:**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID
3. Add to `next.config.js`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 4. Setup Monitoring

**Uptime Monitoring (Recommended: UptimeRobot)**
1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Add your website
3. Get alerts if site goes down

**Error Tracking (Recommended: Sentry)**
```bash
npm install @sentry/nextjs
```

---

## Troubleshooting

### Site Not Loading
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify server is running: `pm2 status`
- Check firewall: `sudo ufw allow 80,443/tcp`

### Slow Performance
- Run audit: `npm run build && npm start`
- Check server resources: `top`, `df -h`
- Enable caching in Nginx

### Contact Form Not Working
- Check browser console for errors (F12)
- Verify API endpoint is working
- Check server logs: `pm2 logs`

---

## Updating Your Website

After deployment, to make updates:

1. **Local Development**
   ```bash
   npm run dev
   # Make changes and test
   ```

2. **Push to Repository**
   ```bash
   git add .
   git commit -m "Update: description"
   git push origin main
   ```

3. **Automatic Deployment**
   - Vercel/Netlify: Automatically redeploy on git push
   - Manual Server: 
     ```bash
     cd /var/www/thatsmyfrench
     git pull
     npm install
     npm run build
     pm2 restart thatsmyfrench
     ```

---

## Security Essentials

- [ ] Use HTTPS (SSL certificate)
- [ ] Keep dependencies updated: `npm update`
- [ ] No sensitive data in code
- [ ] Use environment variables for secrets
- [ ] Regular backups of database (if used)
- [ ] Monitor uptime and errors
- [ ] Regular security updates

---

## Performance Optimization

**Already Optimized:**
- Image optimization with Next.js
- Code splitting
- Dynamic imports
- CSS minification
- Gzip compression

**To Further Optimize:**
- Add image compression: `next/image`
- Enable caching headers
- Use CDN for static assets
- Implement analytics to find slow pages

---

## Monthly Maintenance

- [ ] Check uptime reports
- [ ] Review contact form submissions
- [ ] Update course information if needed
- [ ] Update student reviews
- [ ] Check for security updates
- [ ] Review analytics data
- [ ] Monitor server performance

---

## Support Contacts

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

## Estimated Costs (Monthly)

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| Vercel | ✅ Included | $20/month |
| Netlify | ✅ Included | $19/month |
| Custom Server | - | $5-20 |
| Domain | - | $10-15/year |
| Email (SendGrid) | 100 free/day | $20/month |
| Analytics | ✅ Google Analytics | Free |

**Total Minimum**: $10-20/month for production-grade hosting

---

**Remember:** Your site is now live! Monitor it regularly and keep content updated for best results. 🎉
