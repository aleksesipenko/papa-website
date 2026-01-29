#!/bin/bash
set -e

echo "🚀 Deploying Papa Website to VPS..."

# Push to GitHub first
echo "📤 Pushing to GitHub..."
git push origin main

# Deploy to VPS
echo "🔗 Deploying to VPS..."
ssh -i ~/.ssh/pribambas_deploy_ed25519 root@185.55.57.21 \
  "cd /root/papa-website && git pull origin main && npm install && npm run build && pm2 restart papa-website"

echo "✅ Deploy complete!"
echo "🌐 Site: http://papa.185.55.57.21.sslip.io"
