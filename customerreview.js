document.addEventListener("DOMContentLoaded", function() {
        fetch('https://raw.githubusercontent.com/bazaarteech/reviewtext.json/refs/heads/main/reviewtext.json')
      .then(response => response.json())
      .then(data => {
        fetch('https://ipinfo.io/json?token=7026faa1150bfd')
          .then(response => response.json())
          .then(ipData => {
            var userCountry = ipData.country;
            var userLang = 'en'; // افتراض اللغة الإنجليزية

            if (['MA', 'SA', 'AE', 'DZ', 'TN', 'KW', 'QA', 'OM', 'BH', 'EG', 'IQ', 'SY', 'JO', 'LB', 'PS', 'LY', 'SD', 'DJ', 'SO',  'SS'].includes(userCountry)) {
              userLang = 'ar';
            } else if (['US', 'GB', 'CA', 'AU', 'IE', 'NZ', 'ZA', 'IN', 'NG', 'PK', 'PH', 'SG', 'JM', 'MT', 'BB', 'TT', 'GH', 'ZM', 'BS', 'BZ', 'GD', 'HN', 'KN', 'LC', 'VC', 'SL', 'MW', 'ZW', 'KE', 'UG', 'SS', 'MU', 'MV', 'FJ', 'MM', 'NP', 'KR', 'JP', 'IL', 'HK', 'ET', 'ER', 'CY', 'BN', 'AO', 'BD', 'VU', 'TZ', 'LK', 'SC', 'WS', 'LC', 'KN', 'RW', 'DK', 'NO', 'RU', 'TR', 'IT', 'DE', 'NL', 'TH', 'BY', 'HR', 'AT', 'BG', 'RO', 'FI', 'IS', 'KZ', 'DM', 'GY', 'VG', 'TV'].includes(userCountry)) {
              userLang = 'en';
            } else if (['FR', 'CD', 'BE', 'CH', 'LU', 'CI', 'SN', 'CM', 'GN', 'BF', 'NE', 'TD', 'CF', 'RW', 'NC', 'CK', 'BJ', 'BI', 'KM', 'CG', 'ML', 'SC'].includes(userCountry)) {
                userLang = 'fr'; 
            } else if (['CR', 'MX', 'AR', 'CL', 'CO', 'PE', 'VE', 'GT', 'EC', 'BO', 'PY', 'UY', 'CU', 'DO', 'SV', 'NI', 'HN', 'PR', 'GQ', 'PA', 'ES'].includes(userCountry)) {
            userLang = 'es';
        }

            // تحديث النصوص بناءً على اللغة
            document.getElementById('reviewText').textContent = data[userLang].reviewText;
          })
          .catch(error => console.error('Error fetching IP data:', error));
      })
      .catch(error => console.error('Error fetching translation data:', error));
  });
