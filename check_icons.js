const https = require('https');

const icons = [
  'simple-icons/vivo', 'simple-icons/oppo', 'simple-icons/haier', 'simple-icons/hcl', 
  'simple-icons/unilever', 'simple-icons/asianpaints', 'simple-icons/itc',
  'logos/vivo', 'logos/oppo', 'logos/unilever', 'logos/haier'
];

icons.forEach(icon => {
  https.get(`https://api.iconify.design/${icon}.svg`, (res) => {
    console.log(`${icon}: ${res.statusCode}`);
  });
});
