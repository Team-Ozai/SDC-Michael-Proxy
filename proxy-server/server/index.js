const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// const rewardsServiceRoute =
//   'http://ec2-3-133-92-215.us-east-2.compute.amazonaws.com:3005';

const proxyRouter = {
  '/api/banner': 'http://18.215.78.52:3002',
  'api/video': 'http://18.215.78.52:3002',
  'api/update': 'http://18.219.117.44:3001',
  'api/comment': 'http://18.219.117.44:3001',
  'api/story': 'http://15.164.34.94:3003',
  'api/RisksAndChallenges': 'http://15.164.34.94:3003',
  'api/EnvironmentalCommitments': 'http://15.164.34.94:3003',
  'api/projects': 'http://sdc-lb1-582980772.us-east-2.elb.amazonaws.com:3005/',
  'api/rewards': 'http://sdc-lb1-582980772.us-east-2.elb.amazonaws.com:3005/'
};

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.use(
  createProxyMiddleware({
    target: '/:id',
    router: proxyRouter,
    changeOrigin: true,
    prependPath: false,
  })
);

app.listen(4000, () => {
  console.log('Proxy Server is listening on port 4000');
});
